import { initializeApp } from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js';
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js';
import {
  addDoc,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  runTransaction,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyARelDZFRbxmVZL2eUt7XRTdPF9oZEvE9Y',
  authDomain: 'molbank.firebaseapp.com',
  projectId: 'molbank',
  storageBucket: 'molbank.firebasestorage.app',
  messagingSenderId: '646273070458',
  appId: '1:646273070458:web:46deb8e9f54125274a52c3',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function createAccount({ name, email, password, role }) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  try {
    await updateProfile(credential.user, { displayName: name });
    await setDoc(doc(db, 'users', credential.user.uid), {
      uid: credential.user.uid,
      name,
      email: credential.user.email,
      role,
      createdAt: serverTimestamp(),
    });
    return credential.user;
  } catch (error) {
    await credential.user.delete().catch(() => {});
    throw error;
  }
}

async function signIn(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  const profile = await getDoc(doc(db, 'users', credential.user.uid));
  if (!profile.exists()) {
    await signOut(auth);
    throw new Error('PROFILE_NOT_FOUND');
  }
  return { user: credential.user, profile: profile.data() };
}

async function sendPasswordReset(email) {
  return sendPasswordResetEmail(auth, email);
}

function requireUser() {
  if (!auth.currentUser) throw new Error('NOT_SIGNED_IN');
  return auth.currentUser;
}

async function getRoom(code) {
  const snapshot = await getDoc(doc(db, 'rooms', code));
  return snapshot.exists() ? { ...snapshot.data(), code: snapshot.id } : null;
}

async function getRoomMembers(code) {
  const snapshot = await getDocs(collection(db, 'rooms', code, 'members'));
  return snapshot.docs.map((member) => member.data());
}

function subscribeRoomMembers(code, onChange, onError) {
  return onSnapshot(collection(db, 'rooms', code, 'members'), (snapshot) => {
    onChange(snapshot.docs.map((member) => ({ ...member.data(), uid: member.id })));
  }, onError);
}

async function updateMemberProgress(code, memberId, progress) {
  requireUser();
  await updateDoc(doc(db, 'rooms', code, 'members', memberId), {
    ...progress,
    updatedAt: serverTimestamp(),
  });
}

function subscribeStoreBonusRequests(code, isTeacher, onChange, onError) {
  const requests = collection(db, 'rooms', code, 'storeRequests');
  const requestQuery = isTeacher
    ? requests
    : query(requests, where('memberUid', '==', requireUser().uid));
  return onSnapshot(requestQuery, (snapshot) => {
    onChange(snapshot.docs.map((request) => ({ ...request.data(), id: request.id })));
  }, onError);
}

async function createStoreBonusRequest(code, request) {
  const user = requireUser();
  await addDoc(collection(db, 'rooms', code, 'storeRequests'), {
    ...request,
    memberUid: user.uid,
    requestType: 'bonus',
    status: 'pendente',
    createdAt: Date.now(),
  });
}

async function redeemStoreItem(code, memberId, { itemName, cost, activity }) {
  const user = requireUser();
  if (user.uid !== memberId) throw new Error('NOT_YOUR_MEMBER_RECORD');
  const memberRef = doc(db, 'rooms', code, 'members', memberId);
  const requestRef = doc(collection(db, 'rooms', code, 'storeRequests'));
  let newBalance = 0;
  await runTransaction(db, async (transaction) => {
    const memberSnapshot = await transaction.get(memberRef);
    if (!memberSnapshot.exists()) throw new Error('MEMBER_NOT_FOUND');
    const currentBalance = Number(memberSnapshot.data().coins) || 0;
    if (currentBalance < cost) throw new Error('INSUFFICIENT_BALANCE');
    newBalance = currentBalance - cost;
    transaction.update(memberRef, {
      coins: newBalance,
      activity: [activity, ...(memberSnapshot.data().activity || [])].slice(0, 25),
      lastStoreRequestId: requestRef.id,
    });
    transaction.set(requestRef, {
      requestType: 'purchase',
      memberUid: user.uid,
      studentName: memberSnapshot.data().nome,
      itemName,
      cost,
      status: 'resgatado',
      createdAt: serverTimestamp(),
    });
  });
  return newBalance;
}

async function resolveStoreBonusRequest(code, requestId, memberId, progress, status) {
  requireUser();
  const requestRef = doc(db, 'rooms', code, 'storeRequests', requestId);
  const memberRef = doc(db, 'rooms', code, 'members', memberId);
  await runTransaction(db, async (transaction) => {
    const requestSnapshot = await transaction.get(requestRef);
    if (!requestSnapshot.exists() || requestSnapshot.data().status !== 'pendente') {
      throw new Error('REQUEST_ALREADY_RESOLVED');
    }
    if (status === 'aplicado') transaction.update(memberRef, { ...progress, updatedAt: serverTimestamp() });
    transaction.update(requestRef, { status, decidedAt: Date.now() });
  });
}

async function loadRoomBundle(code) {
  const room = await getRoom(code);
  if (!room) return null;
  const members = await getRoomMembers(code);
  return {
    ...room,
    students: members,
    avisos: room.avisos || [],
    isCloud: true,
  };
}

async function listTeacherRooms() {
  const user = requireUser();
  const roomQuery = query(collection(db, 'rooms'), where('teacherUid', '==', user.uid));
  const snapshot = await getDocs(roomQuery);
  return Promise.all(snapshot.docs.map((room) => loadRoomBundle(room.id)));
}

async function listStudentRooms(roomCodes = []) {
  const uniqueCodes = [...new Set(roomCodes)].filter(Boolean);
  const results = await Promise.all(uniqueCodes.map((code) => loadRoomBundle(code)));
  return results.filter(Boolean);
}

async function createRoom({ code, name, teacherName }) {
  const user = requireUser();
  const roomRef = doc(db, 'rooms', code);
  if ((await getDoc(roomRef)).exists()) throw new Error('ROOM_CODE_TAKEN');
  await setDoc(roomRef, {
    code,
    name,
    teacherName,
    teacherUid: user.uid,
    createdAt: Date.now(),
  });
  return loadRoomBundle(code);
}

async function joinRoom(code, name) {
  const user = requireUser();
  const room = await getRoom(code);
  if (!room) return null;

  const memberRef = doc(db, 'rooms', code, 'members', user.uid);
  const memberSnapshot = await getDoc(memberRef);
  if (!memberSnapshot.exists()) {
    await setDoc(memberRef, {
      uid: user.uid,
      nome: name || user.displayName || 'Aluno',
      matricula: user.uid,
      coins: 0,
      nota: 0,
      notaHistory: [],
      categorias: { participacao: 0, atividades: 0, comportamento: 0, fardamento: 0, frequencia: 0 },
      activity: [],
      avisosSeen: {},
      joinedAt: Date.now(),
    });
  }
  await setDoc(doc(db, 'users', user.uid), { roomCodes: arrayUnion(code) }, { merge: true });
  return loadRoomBundle(code);
}

async function deleteRoom(code) {
  const user = requireUser();
  const roomRef = doc(db, 'rooms', code);
  const room = await getDoc(roomRef);
  if (!room.exists()) return;
  if (room.data().teacherUid !== user.uid) throw new Error('ROOM_NOT_OWNED');
  const members = await getDocs(collection(db, 'rooms', code, 'members'));
  await Promise.all(members.docs.map((member) => deleteDoc(member.ref)));
  await deleteDoc(roomRef);
}

window.molbankFirebase = {
  app,
  auth,
  db,
  createAccount,
  signIn,
  signOut: () => signOut(auth),
  sendPasswordReset,
  onAuthStateChanged: (callback) => onAuthStateChanged(auth, callback),
  getProfile: async (uid) => {
    const snapshot = await getDoc(doc(db, 'users', uid));
    return snapshot.exists() ? snapshot.data() : null;
  },
  getRoom,
  getRoomMembers,
  subscribeRoomMembers,
  updateMemberProgress,
  subscribeStoreBonusRequests,
  createStoreBonusRequest,
  redeemStoreItem,
  resolveStoreBonusRequest,
  loadRoomBundle,
  listTeacherRooms,
  listStudentRooms,
  createRoom,
  joinRoom,
  deleteRoom,
};

window.molbankFirebaseReady = true;
window.dispatchEvent(new Event('molbank-firebase-ready'));
