import { initializeApp } from 'https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  EmailAuthProvider,
  getAuth,
  onAuthStateChanged,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
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
  writeBatch,
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

async function reauthenticateAccount(currentPassword) {
  const user = requireUser();
  if (!user.email) throw new Error('EMAIL_SIGN_IN_REQUIRED');
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, credential);
  return user.email;
}

async function changeAccountPassword(currentPassword, newPassword) {
  if (String(newPassword || '').length < 6) throw new Error('WEAK_ACCOUNT_PASSWORD');
  await reauthenticateAccount(currentPassword);
  await updatePassword(requireUser(), newPassword);
}

async function deleteAccount(currentPassword) {
  const user = requireUser();
  const userRef = doc(db, 'users', user.uid);
  const profileSnapshot = await getDoc(userRef);
  if (!profileSnapshot.exists()) throw new Error('PROFILE_NOT_FOUND');
  const profile = profileSnapshot.data();

  await reauthenticateAccount(currentPassword);

  if (profile.role === 'professor') {
    const ownedRooms = await getDocs(query(collection(db, 'rooms'), where('teacherUid', '==', user.uid)));
    for (const room of ownedRooms.docs) await deleteRoom(room.id);
  } else if (profile.role === 'aluno') {
    const roomCodes = [...new Set(profile.roomCodes || [])].filter(Boolean);
    for (const roomCode of roomCodes) {
      const memberRef = doc(db, 'rooms', roomCode, 'members', user.uid);
      const memberSnapshot = await getDoc(memberRef);

      if (memberSnapshot.exists()) {
        const announcements = await getDocs(collection(db, 'rooms', roomCode, 'announcements'));
        for (const announcement of announcements.docs) {
          const ownComments = await getDocs(query(
            collection(db, 'rooms', roomCode, 'announcements', announcement.id, 'comments'),
            where('autorUid', '==', user.uid),
          ));
          await Promise.all(ownComments.docs.map((comment) => deleteDoc(comment.ref)));
        }
        await deleteDoc(memberRef);
      }

      const ownRequests = await getDocs(query(
        collection(db, 'rooms', roomCode, 'storeRequests'),
        where('memberUid', '==', user.uid),
      ));
      await Promise.all(ownRequests.docs.map((request) => deleteDoc(request.ref)));
    }
  } else {
    throw new Error('PROFILE_NOT_FOUND');
  }

  const restorableProfile = {
    uid: user.uid,
    name: profile.name || user.displayName || 'Usuário',
    email: user.email || profile.email || '',
    role: profile.role,
    createdAt: profile.createdAt || serverTimestamp(),
  };
  await deleteDoc(userRef);
  try {
    await deleteUser(user);
  } catch (error) {
    await setDoc(userRef, restorableProfile).catch(() => {});
    throw error;
  }
}

async function updateAccountName(name, role, roomCodes = []) {
  const user = requireUser();
  const cleanName = String(name || '').trim();
  if (cleanName.length < 2 || cleanName.length > 80) throw new Error('INVALID_PROFILE_NAME');
  if (!['aluno', 'professor'].includes(role)) throw new Error('INVALID_PROFILE_ROLE');

  const batch = writeBatch(db);
  const userRef = doc(db, 'users', user.uid);
  const profileSnapshot = await getDoc(userRef);
  if (!profileSnapshot.exists() || profileSnapshot.data().role !== role) throw new Error('PROFILE_NOT_FOUND');
  batch.update(userRef, { name: cleanName });
  let codes = [...new Set(roomCodes)].filter(Boolean);
  if (role === 'aluno') codes = [...new Set([...codes, ...(profileSnapshot.data().roomCodes || [])])];
  else {
    const ownedRooms = await getDocs(query(collection(db, 'rooms'), where('teacherUid', '==', user.uid)));
    codes = [...new Set([...codes, ...ownedRooms.docs.map(room => room.id)])];
  }
  const uniqueCodes = codes;
  for (const code of uniqueCodes) {
    if (role === 'aluno') {
      const memberRef = doc(db, 'rooms', code, 'members', user.uid);
      if ((await getDoc(memberRef)).exists()) batch.update(memberRef, { nome: cleanName });
    } else {
      const roomRef = doc(db, 'rooms', code);
      const room = await getDoc(roomRef);
      if (room.exists() && room.data().teacherUid === user.uid) batch.update(roomRef, { teacherName: cleanName });
    }
  }

  const oldDisplayName = user.displayName || '';
  await updateProfile(user, { displayName: cleanName });
  try {
    await batch.commit();
  } catch (error) {
    await updateProfile(user, { displayName: oldDisplayName }).catch(() => {});
    throw error;
  }
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

async function updateMemberAvisosSeen(code, memberId, avisosSeen) {
  const user = requireUser();
  if (user.uid !== memberId) throw new Error('NOT_YOUR_MEMBER_RECORD');
  await updateDoc(doc(db, 'rooms', code, 'members', memberId), { avisosSeen });
}

async function getRoomAnnouncements(code) {
  const snapshot = await getDocs(collection(db, 'rooms', code, 'announcements'));
  return snapshot.docs.map((announcement) => ({ ...announcement.data(), id: Number(announcement.id) || announcement.id, comments: [] }));
}

async function saveRoomAnnouncement(code, announcement) {
  requireUser();
  const { comments, id, ...data } = announcement;
  await setDoc(doc(db, 'rooms', code, 'announcements', String(announcement.id)), data);
}

async function deleteRoomAnnouncement(code, announcementId) {
  requireUser();
  const comments = await getDocs(collection(db, 'rooms', code, 'announcements', String(announcementId), 'comments'));
  await Promise.all(comments.docs.map((comment) => deleteDoc(comment.ref)));
  await deleteDoc(doc(db, 'rooms', code, 'announcements', String(announcementId)));
}

function subscribeRoomAnnouncements(code, onChange, onError) {
  return onSnapshot(collection(db, 'rooms', code, 'announcements'), (snapshot) => {
    onChange(snapshot.docs.map((announcement) => ({ ...announcement.data(), id: Number(announcement.id) || announcement.id, comments: [] })));
  }, onError);
}

function subscribeAnnouncementComments(code, announcementId, onChange, onError) {
  return onSnapshot(collection(db, 'rooms', code, 'announcements', String(announcementId), 'comments'), (snapshot) => {
    onChange(snapshot.docs.map((comment) => ({ ...comment.data(), id: Number(comment.id) || comment.id })));
  }, onError);
}

async function createAnnouncementComment(code, announcementId, comment) {
  const user = requireUser();
  const { id, ...data } = comment;
  await setDoc(doc(db, 'rooms', code, 'announcements', String(announcementId), 'comments', String(comment.id)), {
    ...data,
    autorUid: user.uid,
  });
}

async function deleteAnnouncementComment(code, announcementId, commentId) {
  requireUser();
  await deleteDoc(doc(db, 'rooms', code, 'announcements', String(announcementId), 'comments', String(commentId)));
}

async function requestMemberMission(code, memberId, mission, activity) {
  const user = requireUser();
  if (user.uid !== memberId) throw new Error('NOT_YOUR_MEMBER_RECORD');
  await updateDoc(doc(db, 'rooms', code, 'members', memberId), { mission, activity });
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
  const [members, avisos] = await Promise.all([getRoomMembers(code), getRoomAnnouncements(code)]);
  return {
    ...room,
    students: members,
    avisos,
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
      attendanceHistory: [],
      freqMarkedToday: null,
      freqMarkedDate: null,
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
  const storeRequests = await getDocs(collection(db, 'rooms', code, 'storeRequests'));
  await Promise.all(storeRequests.docs.map((request) => deleteDoc(request.ref)));
  const announcements = await getDocs(collection(db, 'rooms', code, 'announcements'));
  await Promise.all(announcements.docs.map(async (announcement) => {
    const comments = await getDocs(collection(db, 'rooms', code, 'announcements', announcement.id, 'comments'));
    await Promise.all(comments.docs.map((comment) => deleteDoc(comment.ref)));
    await deleteDoc(announcement.ref);
  }));
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
  reauthenticateAccount,
  changeAccountPassword,
  deleteAccount,
  updateAccountName,
  onAuthStateChanged: (callback) => onAuthStateChanged(auth, callback),
  getProfile: async (uid) => {
    const snapshot = await getDoc(doc(db, 'users', uid));
    return snapshot.exists() ? snapshot.data() : null;
  },
  getRoom,
  getRoomMembers,
  subscribeRoomMembers,
  updateMemberProgress,
  updateMemberAvisosSeen,
  getRoomAnnouncements,
  saveRoomAnnouncement,
  deleteRoomAnnouncement,
  subscribeRoomAnnouncements,
  subscribeAnnouncementComments,
  createAnnouncementComment,
  deleteAnnouncementComment,
  requestMemberMission,
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
