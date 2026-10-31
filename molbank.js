/* =====================================================================
   DADOS BASE — regras reais do sistema Mol-edas da Profª Bruna
   ===================================================================== */
/* =====================================================================
   ÍCONES — estilo Lucide, embutidos direto no código (sem depender de CDN)
   ===================================================================== */
function svgIcon(inner){
  return `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; flex-shrink:0;">${inner}</svg>`;
}

const ICON = {
  home: svgIcon('<path d="M3 9.5 12 3l9 6.5"/><path d="M5 10v10a1 1 0 0 0 1 1h3v-6h6v6h3a1 1 0 0 0 1-1V10"/>'),
  trophy: svgIcon('<path d="M7 4h10v4a5 5 0 0 1-10 0z"/><path d="M17 5h3a2 2 0 0 1-2 4h-1"/><path d="M7 5H4a2 2 0 0 0 2 4h1"/><path d="M12 13v4"/><path d="M8 21h8"/>'),
  bag: svgIcon('<path d="M6 8h12l-1 12H7z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'),
  target: svgIcon('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r=".6" fill="currentColor"/>'),
  user: svgIcon('<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>'),
  building: svgIcon('<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/>'),
  graduationCap: svgIcon('<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>'),
  bell: svgIcon('<path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/>'),
  checkCircle: svgIcon('<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>'),
  chat: svgIcon('<path d="M4 5h16v10H9l-4 4z"/>'),
  book: svgIcon('<path d="M12 6c-2-1.3-5-1.7-8-1v13c3-.7 6-.3 8 1 2-1.3 5-1.7 8-1V5c-3-.7-6-.3-8 1z"/>'),
  users: svgIcon('<circle cx="8" cy="9" r="3"/><path d="M2 20c0-3 3-5 6-5s6 2 6 5"/><circle cx="17" cy="8.5" r="2.3"/><path d="M15 13.5c2.2.4 4 2.2 4.5 4.5"/>'),
  shirt: svgIcon('<path d="M8 3 4 6l2 3 2-1v11h8V8l2 1 2-3-4-3-2 2h-4z"/>'),
  gear: svgIcon('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.5 1z"/>'),
  info: svgIcon('<circle cx="12" cy="12" r="9"/><path d="M12 8h.01"/><path d="M11 11h1v5h1"/>'),
  logout: svgIcon('<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'),
  lock: svgIcon('<rect x="4" y="11" width="16" height="9" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  camera: svgIcon('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'),
};

const CATEGORY_META = {
  participacao:{label:'Participação', icon:ICON.chat},
  atividades:{label:'Atividades', icon:ICON.book},
  comportamento:{label:'Comportamento', icon:ICON.users},
  fardamento:{label:'Fardamento', icon:ICON.shirt},
  frequencia:{label:'Frequência', icon:ICON.checkCircle},
};

const NOTA_TABLE = [
  {min:0, max:0.99, mol:0}, {min:1, max:2.9, mol:1}, {min:3, max:4.9, mol:2},
  {min:5, max:5.9, mol:3}, {min:6, max:6.9, mol:5}, {min:7, max:7.9, mol:7},
  {min:8, max:8.9, mol:10}, {min:9, max:9.4, mol:12}, {min:9.5, max:10, mol:15},
];

const STORE_ITEMS = [
  {group:'Ajuda durante a prova', name:'Dica', desc:'Recebe uma pista. Não garante acerto.', cost:8, icon:'💡'},
  {group:'Ajuda durante a prova', name:'Verificação', desc:'Confirma se está certo ou errado. Pode tentar de novo.', cost:8, icon:'🔍'},
  {group:'Ajuda durante a prova', name:'Assistida', desc:'Recebe orientação no raciocínio. Questão passa a valer 75%.', cost:10, icon:'🧭'},
  {group:'Ajuda durante a prova', name:'Travamento', desc:'Para quando não sabe fazer. Questão passa a valer 75%.', cost:12, icon:'🔓'},
  {group:'Aumento de nota', name:'+0,5 ponto', desc:'Só pode ser paga uma pontuação por vez.', cost:15, icon:'📈', bonusValue:0.5},
  {group:'Aumento de nota', name:'+1,0 ponto', desc:'Só pode ser paga uma pontuação por vez.', cost:25, icon:'📈', bonusValue:1.0},
  {group:'Aumento de nota', name:'+1,5 ponto', desc:'Só pode ser paga uma pontuação por vez.', cost:35, icon:'📈', bonusValue:1.5},
  {group:'Aumento de nota', name:'+2,0 pontos', desc:'Só pode ser paga uma pontuação por vez.', cost:50, icon:'📈', bonusValue:2.0},
  {group:'Surpresa', name:'Brinde surpresa', desc:'Recompensa misteriosa da professor(a).', cost:20, icon:'🎁'},
];

/* =====================================================================
   ESTADO (memória da sessão, sem storage) — sistema de salas dinâmico
   ===================================================================== */
let rooms = {}; // codigo -> {code, name, teacherName, students:[]}
// (turmas de cada professor agora são calculadas por nome via getMyTeacherRooms())

function makeStudent(nome, matricula){
  return {
    matricula: matricula || ('20263' + Math.floor(Math.random()*9000000+1000000)),
    nome: nome, coins: 0, nota: 0, notaHistory: [], storeBonusActive: null,
    categorias:{participacao:0, atividades:0, comportamento:0, fardamento:0, frequencia:0},
    mission:null, // null | {type:'questoes'|'apresentacao', status:'pendente'|'autorizada'|'concluida', requestedAt:number}
    activity: [], avisosSeen: {},
  };
}

function notaEfetiva(s){
  const latest = getLatestNota(s);
  if(!latest) return 0;
  return Math.min(10, latest.nota + (latest.bonus||0));
}

function provaLabel(s, historyIndex){
  // a mais antiga é "Prova 1"; como sempre inserimos no início (unshift), a numeração é invertida
  const numero = s.notaHistory.length - historyIndex;
  return 'Prova ' + numero;
}

function formatNotaComBonus(nota, bonus){
  if(!bonus || bonus <= 0) return nota.toFixed(1);
  const resultado = Math.min(10, nota + bonus).toFixed(1);
  return `${nota.toFixed(1)} <span style="color:var(--green); font-size:0.72em; font-weight:700;">(+${bonus.toFixed(1)})</span> = ${resultado}`;
}

function getLatestNota(s){
  return (s.notaHistory && s.notaHistory[0]) || null;
}

function logActivity(student, label, amount, icon){
  student.activity.unshift({ label, amount, pos: amount>=0, icon, ts: Date.now() });
  if(student.activity.length > 25) student.activity.pop();
  persistTeacherProgress(student);
}

const progressWriteQueues = new Map();
let progressSyncErrorShownAt = 0;

function persistTeacherProgress(student, roomCode = state.teacherRoomCode){
  const room = rooms[roomCode];
  if(!student || state.role !== 'professor' || !state.uid || !room?.isCloud
    || room.teacherUid !== state.uid || !student.uid) return;

  const progress = {
    coins: Math.max(0, Number(student.coins) || 0),
    nota: Math.min(10, Math.max(0, Number(student.nota) || 0)),
    notaHistory: Array.isArray(student.notaHistory) ? student.notaHistory : [],
    categorias: student.categorias || {},
    activity: Array.isArray(student.activity) ? student.activity.slice(0, 25) : [],
    mission: student.mission || null,
    freqMarkedToday: student.freqMarkedToday || null,
  };
  const key = roomCode + ':' + student.uid;
  const previous = progressWriteQueues.get(key) || Promise.resolve();
  const write = previous.catch(()=>{}).then(async()=>{
    const api = await firebaseApi();
    await api.updateMemberProgress(roomCode, student.uid, progress);
  });
  progressWriteQueues.set(key, write);
  write.catch(()=>{
    if(Date.now() - progressSyncErrorShownAt > 5000){
      progressSyncErrorShownAt = Date.now();
      showToast('Não consegui salvar a alteração no Firebase. Confira a conexão e as regras.');
    }
  }).finally(()=>{
    if(progressWriteQueues.get(key) === write) progressWriteQueues.delete(key);
  });
}

function timeAgo(ts){
  const diff = Math.floor((Date.now() - ts) / 1000); // segundos
  if(diff < 60) return 'Agora';
  const min = Math.floor(diff / 60);
  if(min < 60) return 'há ' + min + (min===1 ? ' min' : ' min');
  const hr = Math.floor(min / 60);
  if(hr < 24) return 'há ' + hr + (hr===1 ? ' hora' : ' horas');
  const day = Math.floor(hr / 24);
  if(day < 30) return 'há ' + day + (day===1 ? ' dia' : ' dias');
  const month = Math.floor(day / 30);
  if(month < 12) return 'há ' + month + (month===1 ? ' mês' : ' meses');
  const year = Math.floor(month / 12);
  return 'há ' + year + (year===1 ? ' ano' : ' anos');
}

/* =====================================================================
   AVISOS — comunicação entre professor e turma (separado de "lançamentos")
   ===================================================================== */
function getAvisos(room){ return room.avisos || (room.avisos = []); }

function getUnreadForTeacher(aviso){
  return aviso.comments.filter(c=>c.autorRole==='aluno' && c.ts > (aviso.teacherLastSeen||0)).length;
}
function getTotalUnreadForTeacher(room){
  return getAvisos(room).reduce((sum,a)=>sum + getUnreadForTeacher(a), 0);
}
function markAvisoSeenByTeacher(aviso){
  aviso.teacherLastSeen = Date.now();
}
function getUnreadForStudent(aviso, student){
  const seenAt = (student.avisosSeen && student.avisosSeen[aviso.id]) || 0;
  return aviso.comments.filter(c=>c.autorRole==='professor' && c.ts > seenAt).length;
}
function isAvisoUnseenByStudent(aviso, student){
  return !(student.avisosSeen && student.avisosSeen[aviso.id]);
}
function markAvisoSeenByStudent(student, avisoId){
  if(!student.avisosSeen) student.avisosSeen = {};
  student.avisosSeen[avisoId] = Date.now();
}

function getCurrentRoomForAvisos(){
  const code = state.role === 'professor' ? state.teacherRoomCode : state.roomCode;
  return rooms[code];
}

function renderTeacherAvisosCard(room){
  const box = document.getElementById('teacherAvisosCard');
  if(!box) return;
  const avisos = getAvisos(room).slice().sort((a,b)=>b.ts-a.ts);
  if(avisos.length === 0){
    box.innerHTML = `<div style="background:var(--gray-light); border-radius:16px; padding:14px;">
      <p style="font-size:12.5px; color:var(--gray); margin-bottom:10px;">Nenhum aviso publicado ainda.</p>
      <button class="corner-btn" onclick="openAvisoForm(null)">+ Criar primeiro aviso</button>
    </div>`;
    return;
  }
  const ultimo = avisos[0];
  const totalUnread = getTotalUnreadForTeacher(room);
  const unreadBadge = totalUnread > 0 ? `<span style="background:var(--red); color:#fff; font-size:10px; font-weight:700; padding:2px 8px; border-radius:10px; margin-left:6px;">${totalUnread} novo(s)</span>` : '';
  box.innerHTML = `<div style="background:var(--gray-light); border-radius:16px; padding:14px; cursor:pointer;" onclick="goTo('avisos')">
    <p style="font-size:11px; color:var(--gray); margin-bottom:6px;">${avisos.length} aviso(s) publicado(s)${unreadBadge}</p>
    <p style="font-size:13px; font-weight:700; margin-bottom:2px;">${ultimo.titulo}</p>
    <p style="font-size:11.5px; color:var(--gray); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${ultimo.mensagem}</p>
    <p style="font-size:10.5px; color:var(--gray); margin-top:8px;">${timeAgo(ultimo.ts)}</p>
  </div>`;
}

function renderStudentAvisosCard(room){
  const box = document.getElementById('studentAvisosCard');
  if(!box) return;
  const avisos = getAvisos(room).slice().sort((a,b)=>b.ts-a.ts);
  if(avisos.length === 0){
    box.innerHTML = `<div style="background:var(--gray-light); border-radius:16px; padding:14px;">
      <p style="font-size:12.5px; color:var(--gray); text-align:center;">Nenhum aviso da turma por enquanto.</p>
    </div>`;
    return;
  }
  const ultimo = avisos[0];
  const me = getMe();
  const novosAvisos = me ? avisos.filter(a=>isAvisoUnseenByStudent(a, me)).length : 0;
  const totalUnread = me ? avisos.reduce((sum,a)=>sum + getUnreadForStudent(a, me), 0) : 0;
  let unreadTag = '';
  if(me && isAvisoUnseenByStudent(ultimo, me)){
    unreadTag = `<span style="background:var(--red); color:#fff; font-size:9.5px; font-weight:700; padding:2px 7px; border-radius:9px; margin-left:6px;">Novo</span>`;
  } else if(totalUnread > 0){
    unreadTag = `<span style="background:var(--red); color:#fff; font-size:9.5px; font-weight:700; padding:2px 7px; border-radius:9px; margin-left:6px;">${totalUnread} resposta(s) nova(s)</span>`;
  }
  const summaryTag = novosAvisos > 1 ? `<span style="font-size:10px; color:var(--red); font-weight:700;"> · ${novosAvisos} avisos novos</span>` : '';
  box.innerHTML = `<div style="background:var(--gray-light); border-radius:16px; padding:14px;">
    <p style="font-size:13px; font-weight:700; margin-bottom:3px;">${ultimo.titulo}${unreadTag}</p>
    <p style="font-size:11.5px; color:var(--gray); margin-bottom:10px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${ultimo.mensagem}</p>
    <div style="display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:10.5px; color:var(--gray);">${timeAgo(ultimo.ts)}${summaryTag}</span>
      <button class="corner-btn" onclick="goTo('avisos')">Ver todos</button>
    </div>
  </div>`;
}

function renderAvisosLista(){
  const room = getCurrentRoomForAvisos();
  const content = document.getElementById('avisosListaContent');
  const criarBtn = document.getElementById('criarAvisoBtn');
  criarBtn.style.display = state.role === 'professor' ? 'block' : 'none';
  if(!room){
    content.innerHTML = `<p style="font-size:12.5px; color:var(--gray); text-align:center; padding:30px 8px;">Nenhuma turma selecionada.</p>`;
    return;
  }
  const avisos = getAvisos(room).slice().sort((a,b)=>b.ts-a.ts);
  if(avisos.length === 0){
    content.innerHTML = `<p style="font-size:12.5px; color:var(--gray); text-align:center; padding:30px 8px;">Nenhum aviso publicado ainda.</p>`;
    return;
  }
  const me = state.role === 'professor' ? null : getMe();
  content.innerHTML = avisos.map(a=>{
    let badge = '';
    if(state.role === 'professor'){
      const unread = getUnreadForTeacher(a);
      if(unread > 0) badge = `<span style="background:var(--red); color:#fff; font-size:9.5px; font-weight:700; padding:2px 7px; border-radius:9px; margin-left:6px;">${unread} novo(s)</span>`;
    } else if(me){
      if(isAvisoUnseenByStudent(a, me)){
        badge = `<span style="background:var(--red); color:#fff; font-size:9.5px; font-weight:700; padding:2px 7px; border-radius:9px; margin-left:6px;">Novo</span>`;
      } else {
        const unread = getUnreadForStudent(a, me);
        if(unread > 0) badge = `<span style="background:var(--red); color:#fff; font-size:9.5px; font-weight:700; padding:2px 7px; border-radius:9px; margin-left:6px;">${unread} novo(s)</span>`;
      }
    }
    return `
    <div class="store-item" style="cursor:pointer; align-items:flex-start;" onclick="openAvisoDetail(${a.id})">
      <div class="store-ic">📣</div>
      <div class="store-info">
        <p>${a.titulo}${badge}</p>
        <span style="display:block; margin-bottom:4px;">${a.mensagem}</span>
        <span style="font-size:10px;">${timeAgo(a.ts)}${a.comments.length ? ' · ' + a.comments.length + ' comentário(s)' : ''}${a.editedAt ? ' · editado' : ''}</span>
      </div>
    </div>`;
  }).join('');
}

function openAvisoDetail(avisoId){
  const room = getCurrentRoomForAvisos();
  const aviso = getAvisos(room).find(a=>a.id===avisoId);
  if(!aviso) return;
  document.getElementById('avisoDetailOverlay').dataset.avisoId = avisoId;
  renderAvisoDetail(avisoId);
  document.getElementById('avisoDetailOverlay').style.display = 'flex';

  if(state.role === 'professor'){
    markAvisoSeenByTeacher(aviso);
    renderTeacher();
  } else {
    const me = getMe();
    if(me){ markAvisoSeenByStudent(me, avisoId); renderStudentAvisosCard(room); }
  }
  renderAvisosLista();
}

function closeAvisoDetail(){
  document.getElementById('avisoDetailOverlay').style.display = 'none';
}

function renderAvisoDetail(avisoId){
  const room = getCurrentRoomForAvisos();
  const aviso = getAvisos(room).find(a=>a.id===avisoId);
  if(!aviso) return;
  const isTeacher = state.role === 'professor';

  document.getElementById('avisoDetailTitulo').textContent = aviso.titulo;
  document.getElementById('avisoDetailData').textContent = aviso.dataPub + (aviso.editedAt ? ' · editado' : '');

  const content = document.getElementById('avisoDetailContent');
  content.innerHTML = '';

  const msgBox = document.createElement('div');
  msgBox.style.cssText = 'background:var(--gray-light); border-radius:16px; padding:14px; margin-bottom:16px;';
  msgBox.innerHTML = `<p style="font-size:13.5px; line-height:1.5;">${aviso.mensagem}</p>`;
  content.appendChild(msgBox);

  if(isTeacher){
    const teacherActions = document.createElement('div');
    teacherActions.style.cssText = 'display:flex; gap:8px; margin-bottom:8px;';
    teacherActions.innerHTML = `
      <button class="corner-btn" style="flex:1;" onclick="openAvisoForm(${aviso.id})">Editar</button>
      <button style="flex:1; background:rgba(230,80,80,.12); color:var(--red); border:none; padding:9px 14px; border-radius:11px; font-family:inherit; font-weight:700; font-size:11.5px; cursor:pointer;" onclick="confirmDeleteAviso(${aviso.id})">Excluir</button>`;
    content.appendChild(teacherActions);

    const toggleRow = document.createElement('label');
    toggleRow.style.cssText = 'display:flex; align-items:center; gap:9px; margin-bottom:18px; cursor:pointer;';
    toggleRow.innerHTML = `<input type="checkbox" ${aviso.allowComments?'checked':''} onchange="toggleAvisoComments(${aviso.id}, this.checked)" style="width:18px; height:18px; accent-color:var(--orange);"><span style="font-size:12.5px; color:var(--gray);">Permitir comentários dos alunos</span>`;
    content.appendChild(toggleRow);
  }

  const commentsTitle = document.createElement('div');
  commentsTitle.className = 'section-title';
  commentsTitle.textContent = 'Comentários' + (aviso.comments.length ? ' (' + aviso.comments.length + ')' : '');
  content.appendChild(commentsTitle);

  if(!aviso.allowComments){
    const closedMsg = document.createElement('p');
    closedMsg.style.cssText = 'font-size:12px; color:var(--gray); text-align:center; padding:14px 0;';
    closedMsg.textContent = 'Comentários desativados pelo professor pra esse aviso.';
    content.appendChild(closedMsg);
  } else {
    const commentsBox = document.createElement('div');
    commentsBox.style.marginBottom = '16px';
    if(aviso.comments.length === 0){
      commentsBox.innerHTML = `<p style="font-size:12px; color:var(--gray); text-align:center; padding:10px 0;">Nenhum comentário ainda. Seja o primeiro a perguntar!</p>`;
    } else {
      aviso.comments.forEach(c=>{
        const row = document.createElement('div');
        row.style.cssText = 'padding:10px 0; border-bottom:1px solid var(--gray-light);';
        const isProf = c.autorRole === 'professor';
        row.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px;">
          <p style="font-size:12.5px;"><b style="color:${isProf?'var(--orange)':'var(--text-primary)'};">${c.autorNome}${isProf?' (professor(a))':''}</b><br>${c.texto}</p>
          ${isTeacher ? `<a onclick="confirmDeleteComment(${aviso.id}, ${c.id})" style="font-size:10.5px; color:var(--red); text-decoration:underline; cursor:pointer; white-space:nowrap;">excluir</a>` : ''}
        </div>
        <span style="font-size:10px; color:var(--gray);">${timeAgo(c.ts)}</span>`;
        commentsBox.appendChild(row);
      });
    }
    content.appendChild(commentsBox);

    const inputRow = document.createElement('div');
    inputRow.style.cssText = 'display:flex; gap:8px;';
    inputRow.innerHTML = `
      <input type="text" id="avisoCommentInput" placeholder="${isTeacher ? 'Responder...' : 'Tirar uma dúvida...'}" style="flex:1; padding:11px 13px; border-radius:12px; border:1.5px solid #CCCCCC; background:#FFFFFF; color:#161616; font-family:inherit; font-size:13px;">
      <button onclick="submitAvisoComment(${aviso.id})" style="background:var(--orange); color:#fff; border:none; padding:0 16px; border-radius:12px; font-family:inherit; font-weight:700; font-size:13px; cursor:pointer;">Enviar</button>`;
    content.appendChild(inputRow);
  }
}

function toggleAvisoComments(avisoId, allow){
  const room = getCurrentRoomForAvisos();
  const aviso = getAvisos(room).find(a=>a.id===avisoId);
  if(!aviso) return;
  aviso.allowComments = allow;
  renderAvisoDetail(avisoId);
  renderAvisosLista();
}

function submitAvisoComment(avisoId){
  const room = getCurrentRoomForAvisos();
  const aviso = getAvisos(room).find(a=>a.id===avisoId);
  if(!aviso) return;
  const input = document.getElementById('avisoCommentInput');
  const texto = input.value.trim();
  if(!texto) return;
  const isTeacher = state.role === 'professor';
  const autorNome = isTeacher ? (state.teacherName || state.name) : (getMe() ? getMe().nome : state.name);
  aviso.comments.push({ id: Date.now()+Math.random(), autorNome, autorRole: isTeacher ? 'professor' : 'aluno', texto, ts: Date.now() });
  input.value = '';
  renderAvisoDetail(avisoId);
  renderAvisosLista();
  showToast('Comentário enviado');
}

function confirmDeleteComment(avisoId, commentId){
  showGenericConfirm('Excluir comentário?', 'Essa ação não pode ser desfeita.', ()=>{
    const room = getCurrentRoomForAvisos();
    const aviso = getAvisos(room).find(a=>a.id===avisoId);
    if(!aviso) return;
    aviso.comments = aviso.comments.filter(c=>c.id!==commentId);
    renderAvisoDetail(avisoId);
    renderAvisosLista();
    showToast('Comentário excluído');
  });
}

let avisoFormEditingId = null;

function openAvisoForm(avisoId){
  avisoFormEditingId = avisoId;
  const room = getCurrentRoomForAvisos();
  const label = document.getElementById('avisoFormTitleLabel');
  const titulo = document.getElementById('avisoFormTitulo');
  const mensagem = document.getElementById('avisoFormMensagem');
  const allow = document.getElementById('avisoFormAllowComments');
  if(avisoId){
    const aviso = getAvisos(room).find(a=>a.id===avisoId);
    label.textContent = 'Editar aviso';
    titulo.value = aviso.titulo;
    mensagem.value = aviso.mensagem;
    allow.checked = aviso.allowComments;
  } else {
    label.textContent = 'Criar aviso';
    titulo.value = '';
    mensagem.value = '';
    allow.checked = true;
  }
  document.getElementById('avisoFormOverlay').style.display = 'flex';
}

function closeAvisoForm(){
  document.getElementById('avisoFormOverlay').style.display = 'none';
  avisoFormEditingId = null;
}

function saveAvisoForm(){
  const titulo = document.getElementById('avisoFormTitulo').value.trim();
  const mensagem = document.getElementById('avisoFormMensagem').value.trim();
  const allowComments = document.getElementById('avisoFormAllowComments').checked;
  if(!titulo || !mensagem){ showToast('Preenche o título e a mensagem'); return; }
  const room = getCurrentRoomForAvisos();
  const avisos = getAvisos(room);

  if(avisoFormEditingId){
    const aviso = avisos.find(a=>a.id===avisoFormEditingId);
    aviso.titulo = titulo;
    aviso.mensagem = mensagem;
    aviso.allowComments = allowComments;
    aviso.editedAt = Date.now();
    showToast('Aviso atualizado');
  } else {
    avisos.push({
      id: Date.now()+Math.random(), titulo, mensagem, allowComments,
      dataPub: new Date().toLocaleDateString('pt-BR'), ts: Date.now(), editedAt: null, comments: [], teacherLastSeen: Date.now()
    });
    showToast('Aviso publicado');
  }
  closeAvisoForm();
  renderAvisosLista();
  renderTeacherAvisosCard(room);
}

function confirmDeleteAviso(avisoId){
  showGenericConfirm('Excluir aviso?', 'Os comentários desse aviso também serão apagados. Essa ação não pode ser desfeita.', ()=>{
    const room = getCurrentRoomForAvisos();
    room.avisos = getAvisos(room).filter(a=>a.id!==avisoId);
    closeAvisoDetail();
    renderAvisosLista();
    renderTeacherAvisosCard(room);
    showToast('Aviso excluído');
  });
}

let genericConfirmCallback = null;

function showGenericConfirm(title, message, onConfirm){
  document.getElementById('genericConfirmTitle').textContent = title;
  document.getElementById('genericConfirmMessage').textContent = message;
  genericConfirmCallback = onConfirm;
  document.getElementById('genericConfirmOverlay').style.display = 'flex';
}

function closeGenericConfirm(){
  document.getElementById('genericConfirmOverlay').style.display = 'none';
  genericConfirmCallback = null;
}

function executeGenericConfirm(){
  if(genericConfirmCallback) genericConfirmCallback();
  closeGenericConfirm();
}

let state = { role:'aluno', name:'', teacherName:'', roomCode:'', teacherRoomCode:'', expandedStudent:null, selectMode:false, selectedStudents:[], bulkCategory:'fardamento', myRoomCodes:[] };

function generateRoomCode(){
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const nums = '0123456789';
  let code = '';
  for(let i=0;i<4;i++) code += letters[Math.floor(Math.random()*letters.length)];
  for(let i=0;i<2;i++) code += nums[Math.floor(Math.random()*nums.length)];
  return rooms[code] ? generateRoomCode() : code;
}

let qrStream = null;
let qrScanning = false;

function roomCodeFromQr(value){
  const rawValue = String(value || '').trim();
  if(!rawValue) return '';

  try{
    const url = new URL(rawValue, window.location.href);
    const code = url.searchParams.get('code');
    if(code) return code.trim().toUpperCase();
  } catch(err){ /* o conteúdo pode ser somente o código da turma */ }

  return rawValue.toUpperCase();
}
async function openQrScanner(){
  const overlay = document.getElementById('qrScannerOverlay');
  const video = document.getElementById('qrVideo');
  overlay.style.display = 'flex';
  try{
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) throw new Error('CAMERA_UNSUPPORTED');
    if(typeof jsQR !== 'function') throw new Error('QR_READER_UNAVAILABLE');
    qrStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
    video.srcObject = qrStream;

    qrScanning = true;
    requestAnimationFrame(scanQrFrame);
  } catch(err){
    let message = 'Não consegui iniciar a câmera.';
    if(err.message === 'CAMERA_UNSUPPORTED') message = 'Este navegador não oferece acesso à câmera nesta página.';
    else if(err.message === 'QR_READER_UNAVAILABLE') message = 'O leitor QR local não carregou. Recarregue a página e tente novamente.';
    else if(err.name === 'NotAllowedError') message = 'O Chrome bloqueou o acesso à câmera. Confira a permissão do navegador e do celular.';
    else if(err.name === 'NotFoundError') message = 'Não encontrei uma câmera disponível neste aparelho.';
    else if(err.name === 'NotReadableError') message = 'A câmera está ocupada por outro aplicativo. Feche-o e tente novamente.';
    showToast(message);
    closeQrScanner();
  }
}

function scanQrFrame(){
  if(!qrScanning) return;
  const video = document.getElementById('qrVideo');
  const canvas = document.getElementById('qrCanvas');
  if(video.readyState >= video.HAVE_CURRENT_DATA && video.videoWidth && video.videoHeight){
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if(code && code.data){
      const found = roomCodeFromQr(code.data);
      closeQrScanner();
      document.getElementById('joinModalInput').value = found;
      showToast('QR lido: ' + found);
      if(rooms[found]) confirmJoinModal();
      return;
    }
  }
  requestAnimationFrame(scanQrFrame);
}

function closeQrScanner(){
  qrScanning = false;
  if(qrStream){ qrStream.getTracks().forEach(t=>t.stop()); qrStream = null; }
  const video = document.getElementById('qrVideo');
  if(video) video.srcObject = null;
  document.getElementById('qrScannerOverlay').style.display = 'none';
}

function joinRoomByCode(code, name){
  const room = rooms[code];
  if(!room) return false;
  state.myRoomCodes = state.myRoomCodes || [];
  if(!state.myRoomCodes.includes(code)) state.myRoomCodes.push(code);
  state.roomCode = code; // essa passa a ser a turma "ativa" na tela, mas continua nas outras também
  let me = room.students.find(s=>s.isMe);
  if(!me){ me = makeStudent(name || state.name, ''); me.isMe = true; room.students.push(me); }
  else { me.nome = name || state.name; }
  return true;
}

function switchActiveRoom(code){
  if(!rooms[code]) return;
  state.roomCode = code;
  goTo('home');
}

function openJoinModal(){
  document.getElementById('joinModalOverlay').style.display = 'flex';
  document.getElementById('joinModalInput').value = '';
  document.getElementById('joinModalInput').focus();
}

function closeJoinModal(){
  document.getElementById('joinModalOverlay').style.display = 'none';
}

async function confirmJoinModal(){
  const code = document.getElementById('joinModalInput').value.trim().toUpperCase();
  if(!code){ showToast('Digita o código da sala'); return; }
  try{
    const api = await firebaseApi();
    const joined = await api.joinRoom(code, state.name);
    if(joined){
      rooms[code] = cloudRoomToLocal(joined, state.uid);
      state.myRoomCodes = [...new Set([...(state.myRoomCodes || []), code])];
      state.roomCode = code;
      watchCloudRoomProgress(code);
    } else if(rooms[code] && !rooms[code].isCloud){
      joinRoomByCode(code, state.name);
    } else {
      showToast('Código não encontrado');
      return;
    }
    closeJoinModal();
    renderHome();
    showToast('Você entrou na turma!');
  } catch(error){
    showToast(firebaseErrorMessage(error));
  }
}

function renderTeacherPerfil(){
  const name = state.teacherName || state.name || '';
  document.getElementById('teacherProfileNameInput').value = name;
  document.getElementById('teacherProfileAvatarBig').textContent = (name[0] || 'P').toUpperCase();
}

function saveTeacherProfile(){
  const newName = document.getElementById('teacherProfileNameInput').value.trim();
  if(!newName){ showToast('O nome não pode ficar vazio'); return; }
  const oldTeacherName = state.teacherName;
  state.name = newName;
  state.teacherName = newName;
  // atualiza o "dono" nas turmas que já eram dela/dele, senão elas ficam órfãs
  Object.values(rooms).forEach(r=>{ if(r.teacherName === oldTeacherName) r.teacherName = newName; });
  document.getElementById('teacherAvatar2').textContent = newName[0].toUpperCase();
  document.getElementById('teacherGreetName2').textContent = newName;
  const teacherAvatar = document.getElementById('teacherAvatar');
  if(teacherAvatar) teacherAvatar.textContent = newName[0].toUpperCase();
  document.getElementById('teacherProfileAvatarBig').textContent = newName[0].toUpperCase();
  showToast('Perfil atualizado');
}

function getMe(){
  const room = rooms[state.roomCode];
  if(!room) return null;
  return room.students.find(s=>s.isMe);
}

/* =====================================================================
   LOGIN
   ===================================================================== */
function pickRole(role){
  state.role = role;
  document.querySelectorAll('#rolePick button').forEach(b=>b.classList.remove('selected'));
  document.querySelector(`#rolePick button[data-role="${role}"]`).classList.add('selected');
  document.getElementById('alunoJoinArea').style.display = role === 'professor' ? 'none' : 'block';
}

function toggleSkipRoom(){
  const skip = document.getElementById('skipRoomCheck').checked;
  const codeInput = document.getElementById('loginRoomCode');
  codeInput.disabled = skip;
  codeInput.style.opacity = skip ? '.4' : '1';
  clearFieldError('loginRoomCode');
}

function setFieldError(id, show){
  document.getElementById(id).classList.toggle('error', show);
  document.getElementById(id + 'Error').classList.toggle('show', show);
}
function clearFieldError(id){ setFieldError(id, false); }

let authMode = 'register';
let authBusy = false;

function setAuthMode(mode){
  authMode = mode === 'login' ? 'login' : 'register';
  const isRegister = authMode === 'register';
  document.getElementById('loginNameField').style.display = isRegister ? 'block' : 'none';
  document.getElementById('rolePick').style.display = isRegister ? 'flex' : 'none';
  document.getElementById('loginSubmitButton').textContent = isRegister ? 'Criar conta' : 'Entrar no Molbank';
  document.getElementById('authModeSwitch').innerHTML = isRegister
    ? 'Já tem uma conta? <b onclick="setAuthMode(\'login\')">Entrar</b>'
    : 'Ainda não tem conta? <b onclick="setAuthMode(\'register\')">Criar conta</b>';
  document.getElementById('forgotPasswordSwitch').style.display = isRegister ? 'none' : 'block';
  document.getElementById('loginPassword').autocomplete = isRegister ? 'new-password' : 'current-password';
  document.getElementById('loginAuthError').classList.remove('show');
  clearFieldError('loginName');
  clearFieldError('loginEmail');
  clearFieldError('loginPassword');
}

function togglePasswordVisibility(){
  const input = document.getElementById('loginPassword');
  const button = document.getElementById('togglePasswordVisibility');
  if(!input || !button) return;
  const showPassword = input.type === 'password';
  input.type = showPassword ? 'text' : 'password';
  button.setAttribute('aria-label', showPassword ? 'Ocultar senha' : 'Mostrar senha');
  button.setAttribute('aria-pressed', String(showPassword));
  button.innerHTML = showPassword
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 3 18 18"/><path d="M10.6 10.6a2 2 0 0 0 2.8 2.8"/><path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c6.4 0 10 7 10 7a15.8 15.8 0 0 1-3 3.8"/><path d="M6.2 6.2C3.5 8 2 12 2 12s3.6 7 10 7c1 0 1.9-.2 2.8-.5"/></svg>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>';
}

function submitAuth(){
  return authMode === 'register' ? registerAccount() : login();
}

function setAuthMessage(message){
  const error = document.getElementById('loginAuthError');
  error.textContent = message || '';
  error.classList.toggle('show', Boolean(message));
}

function firebaseErrorMessage(error){
  const code = error?.code || error?.message || '';
  if(code.includes('email-already-in-use')) return 'Esse e-mail já tem uma conta. Toque em “Entrar”.';
  if(code.includes('invalid-email')) return 'Esse e-mail parece inválido. Confere se foi digitado certo.';
  if(code.includes('weak-password')) return 'A senha precisa ter pelo menos 6 caracteres.';
  if(code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) return 'E-mail ou senha não conferem.';
  if(code.includes('too-many-requests')) return 'Muitas tentativas. Aguarde um pouco e tente de novo.';
  if(code.includes('network-request-failed')) return 'Não consegui conectar. Confira a internet e tente de novo.';
  if(code.includes('ROOM_CODE_TAKEN')) return 'Esse código já está em uso. Tente criar a turma novamente.';
  if(code.includes('ROOM_NOT_OWNED')) return 'Essa turma pertence a outra conta.';
  if(code.includes('PROFILE_NOT_FOUND')) return 'Não encontrei o perfil dessa conta. Tente criar a conta novamente.';
  if(code.includes('permission-denied')) return 'O Firebase ainda está bloqueando o acesso. Precisamos publicar as regras seguras do banco.';
  return 'Não consegui concluir. Confira os dados e tente novamente.';
}

async function firebaseApi(){
  if(window.molbankFirebase) return window.molbankFirebase;
  await new Promise((resolve, reject)=>{
    const timeout = setTimeout(()=>reject(new Error('FIREBASE_LOAD_TIMEOUT')), 12000);
    window.addEventListener('molbank-firebase-ready', ()=>{ clearTimeout(timeout); resolve(); }, {once:true});
  });
  if(!window.molbankFirebase) throw new Error('FIREBASE_LOAD_FAILED');
  return window.molbankFirebase;
}

function cloudRoomToLocal(room, uid){
  const students = (room.students || []).map(data=>{
    const student = makeStudent(data.nome || 'Aluno', data.matricula || data.uid || '');
    Object.assign(student, data);
    student.isMe = data.uid === uid;
    return student;
  });
  return { ...room, students, avisos: room.avisos || [], isCloud: true };
}

function replaceCloudRooms(list, uid){
  Object.keys(rooms).forEach(code=>{ if(rooms[code]?.isCloud) delete rooms[code]; });
  (list || []).filter(Boolean).forEach(room=>{ rooms[room.code] = cloudRoomToLocal(room, uid); });
}

const cloudProgressSubscriptions = new Map();
const cloudStoreRequestSubscriptions = new Map();

function stopCloudProgressSync(){
  cloudProgressSubscriptions.forEach(unsubscribe=>unsubscribe());
  cloudProgressSubscriptions.clear();
  cloudStoreRequestSubscriptions.forEach(unsubscribe=>unsubscribe());
  cloudStoreRequestSubscriptions.clear();
}

function stopCloudRoomProgressSync(code){
  const unsubscribe = cloudProgressSubscriptions.get(code);
  if(unsubscribe) unsubscribe();
  cloudProgressSubscriptions.delete(code);
  const requestUnsubscribe = cloudStoreRequestSubscriptions.get(code);
  if(requestUnsubscribe) requestUnsubscribe();
  cloudStoreRequestSubscriptions.delete(code);
}

function watchCloudStoreBonusRequests(code){
  if(cloudStoreRequestSubscriptions.has(code) || !rooms[code]?.isCloud || !window.molbankFirebase) return;
  const api = window.molbankFirebase;
  const unsubscribe = api.subscribeStoreBonusRequests(code, state.role === 'professor', requests=>{
    const room = rooms[code];
    if(!room?.isCloud) return;
    const requestTime = request=>typeof request.createdAt === 'number'
      ? request.createdAt
      : request.createdAt?.toMillis?.() || 0;
    room.teacherAlerts = requests
      .filter(request=>request.requestType === 'purchase')
      .sort((a,b)=>requestTime(b)-requestTime(a))
      .map(request=>({
        type:'compra', matricula:request.memberUid, nome:request.studentName,
        detail:request.itemName, cost:request.cost, time:requestTime(request),
      }));
    const latestByStudent = new Map();
    requests.filter(request=>request.requestType === 'bonus' || !request.requestType)
      .sort((a,b)=>requestTime(b)-requestTime(a)).forEach(request=>{
      if(!latestByStudent.has(request.memberUid)) latestByStudent.set(request.memberUid, request);
    });
    room.students.forEach(student=>{
      const request = latestByStudent.get(student.uid);
      if(!request || request.status === 'rejeitado'
        || (request.status === 'aplicado' && student.notaHistory?.[0]?.id !== request.latestNoteId)){
        student.storeBonusActive = null;
        return;
      }
      student.storeBonusActive = {
        requestId: request.id,
        entryId: request.entryId,
        value: request.value,
        cost: request.cost,
        status: request.status === 'aplicado' ? 'aplicado' : 'pendente',
        requestedAt: request.createdAt,
      };
    });
    refreshProgressView(code);
  }, error=>{
    cloudStoreRequestSubscriptions.delete(code);
    if(Date.now() - progressSyncErrorShownAt > 5000){
      progressSyncErrorShownAt = Date.now();
      showToast('Não consegui sincronizar os pedidos da loja. Confira as regras do Firestore.');
    }
  });
  cloudStoreRequestSubscriptions.set(code, unsubscribe);
}

function refreshProgressView(code){
  const activeScreen = document.querySelector('.screen.active')?.id;
  if(state.role === 'professor' && state.teacherRoomCode === code){
    if(activeScreen === 'screen-teacher-rooms') renderTeacherRooms();
    else if(['screen-teacher','screen-teacher-students','screen-teacher-notif'].includes(activeScreen)){
      renderTeacher();
      if(rewardsManagerMatricula && document.getElementById('rewardsManagerOverlay').style.display === 'flex'){
        renderStudentCard(rewardsManagerMatricula);
      }
    } else if(activeScreen === 'screen-teacher-freq') renderFrequencia();
    return;
  }

  if(state.role !== 'aluno' || state.roomCode !== code) return;
  if(activeScreen === 'screen-home') renderHome();
  else if(activeScreen === 'screen-notas') renderNotas();
  else if(activeScreen === 'screen-ranking') renderRanking();
  else if(activeScreen === 'screen-loja') renderStore();
  else if(activeScreen === 'screen-missao') renderMissao();
}

function watchCloudRoomProgress(code){
  if(cloudProgressSubscriptions.has(code) || !rooms[code]?.isCloud || !window.molbankFirebase) return;
  const api = window.molbankFirebase;
  const unsubscribe = api.subscribeRoomMembers(code, memberRows=>{
    const room = rooms[code];
    if(!room?.isCloud) return;
    const currentByUid = new Map(room.students.map(student=>[student.uid || student.matricula, student]));
    room.students = memberRows.map(data=>{
      const uid = data.uid || data.matricula;
      const student = currentByUid.get(uid) || makeStudent(data.nome || 'Aluno', data.matricula || uid);
      Object.assign(student, data);
      student.uid = uid;
      student.matricula = data.matricula || uid;
      student.isMe = uid === state.uid;
      return student;
    });
    refreshProgressView(code);
  }, error=>{
    cloudProgressSubscriptions.delete(code);
    if(Date.now() - progressSyncErrorShownAt > 5000){
      progressSyncErrorShownAt = Date.now();
      showToast('A atualização em tempo real foi interrompida. Confira as regras do Firestore.');
    }
  });
  cloudProgressSubscriptions.set(code, unsubscribe);
  watchCloudStoreBonusRequests(code);
}

function startCloudProgressSync(){
  stopCloudProgressSync();
  (state.myRoomCodes || []).forEach(watchCloudRoomProgress);
}

async function finishFirebaseLogin(user, profile, requestedCode){
  if(!profile || !['aluno','professor'].includes(profile.role)) throw new Error('PROFILE_NOT_FOUND');
  stopCloudProgressSync();
  state.uid = user.uid;
  state.email = user.email || '';
  state.name = profile.name || user.displayName || 'Usuário';
  state.role = profile.role;
  state.teacherName = state.role === 'professor' ? state.name : '';
  state.teacherRoomCode = '';

  const api = await firebaseApi();
  let cloudRooms = state.role === 'professor'
    ? await api.listTeacherRooms()
    : await api.listStudentRooms(profile.roomCodes || []);

  const code = state.role === 'aluno'
    ? String(requestedCode || '').trim().toUpperCase()
    : '';
  if(code){
    const joined = await api.joinRoom(code, state.name);
    if(joined) cloudRooms = [joined, ...cloudRooms.filter(room=>room.code !== code)];
    else if(rooms[code] && !rooms[code].isCloud) joinRoomByCode(code, state.name);
    else showToast('Conta criada, mas não encontrei essa turma. Você pode entrar nela depois.');
  }

  replaceCloudRooms(cloudRooms, user.uid);
  state.myRoomCodes = cloudRooms.map(room=>room.code);
  if(state.role === 'professor'){
    document.getElementById('teacherAvatar2').textContent = (state.name[0] || 'P').toUpperCase();
    document.getElementById('teacherGreetName2').textContent = state.name;
    renderTeacherRooms();
    switchScreen('screen-teacher-rooms');
    buildNav('navTeacherRooms', 'rooms');
  } else {
    state.roomCode = code && rooms[code] ? code : (state.myRoomCodes[0] || '');
    document.getElementById('studentGreetName').textContent = state.name;
    document.getElementById('studentAvatar').textContent = (state.name[0] || 'A').toUpperCase();
    renderHome();
    switchScreen('screen-home');
    buildNav('navStudent', 'home');
  }
  startCloudProgressSync();
  setAuthMessage('');
}

async function login(){
  if(authBusy) return;
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 6;
  setFieldError('loginEmail', !emailValid);
  setFieldError('loginPassword', !passwordValid);
  if(!emailValid || !passwordValid) return;

  authBusy = true;
  const button = document.getElementById('loginSubmitButton');
  button.disabled = true;
  setAuthMessage('Entrando...');
  try{
    const api = await firebaseApi();
    const result = await api.signIn(email, password);
    const code = document.getElementById('loginRoomCode').value;
    await finishFirebaseLogin(result.user, result.profile, code);
  } catch(error){
    setAuthMessage(firebaseErrorMessage(error));
  } finally {
    authBusy = false;
    button.disabled = false;
  }
}

async function registerAccount(){
  if(authBusy) return;
  const name = document.getElementById('loginName').value.trim();
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const nameValid = name.length >= 2;
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = password.length >= 6;
  setFieldError('loginName', !nameValid);
  setFieldError('loginEmail', !emailValid);
  setFieldError('loginPassword', !passwordValid);
  if(!nameValid || !emailValid || !passwordValid) return;

  authBusy = true;
  const button = document.getElementById('loginSubmitButton');
  button.disabled = true;
  setAuthMessage('Criando sua conta...');
  try{
    const api = await firebaseApi();
    const user = await api.createAccount({ name, email, password, role: state.role });
    const profile = await api.getProfile(user.uid);
    const code = state.role === 'aluno' ? document.getElementById('loginRoomCode').value : '';
    await finishFirebaseLogin(user, profile, code);
  } catch(error){
    setAuthMessage(firebaseErrorMessage(error));
  } finally {
    authBusy = false;
    button.disabled = false;
  }
}

async function resetPassword(){
  const email = document.getElementById('loginEmail').value.trim();
  if(!email){
    setFieldError('loginEmail', true);
    setAuthMessage('Digite seu e-mail para receber o link de redefinição.');
    return;
  }
  try{
    const api = await firebaseApi();
    await api.sendPasswordReset(email);
    setAuthMessage('Enviei um link para redefinir a senha, se esse e-mail estiver cadastrado.');
  } catch(error){
    setAuthMessage(firebaseErrorMessage(error));
  }
}

/* =====================================================================
   NAVEGAÇÃO
   ===================================================================== */
function switchScreen(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goTo(page){
  if(page==='ranking'){ renderRanking(); switchScreen('screen-ranking'); buildNav('navRanking','ranking'); }
  if(page==='loja'){ renderStore(); switchScreen('screen-loja'); buildNav('navLoja','loja'); }
  if(page==='missao'){ renderMissao(); switchScreen('screen-missao'); buildNav('navMissao','missao'); }
  if(page==='perfil'){ renderPerfil(); switchScreen('screen-perfil'); buildNav('navPerfil','perfil'); }
  if(page==='notas'){ renderNotas(); switchScreen('screen-notas'); buildNav('navNotas','home'); }
  if(page==='home'){ renderHome(); switchScreen('screen-home'); buildNav('navStudent','home'); }
  if(page==='teacher'){ renderTeacher(); switchScreen('screen-teacher'); buildNav('navTeacher','teacher'); }
  if(page==='teacherStudents'){ renderTeacher(); switchScreen('screen-teacher-students'); buildNav('navTeacherStudents','students'); }
  if(page==='teacherNotif'){ renderTeacher(); switchScreen('screen-teacher-notif'); buildNav('navTeacherNotif','notif'); }
  if(page==='teacherFreq'){ renderFrequencia(); switchScreen('screen-teacher-freq'); buildNav('navTeacherFreq','freq'); }
  if(page==='teacherPerfil'){ renderTeacherPerfil(); switchScreen('screen-teacher-perfil'); buildNav('navTeacherPerfil','teacher'); }
  if(page==='sobre'){
    switchScreen('screen-sobre');
    buildNav('navSobre', state.role==='professor' ? 'teacher' : 'perfil');
  }
  if(page==='config'){
    switchScreen('screen-config');
    buildNav('navConfig', state.role==='professor' ? 'teacher' : 'perfil');
  }
  if(page==='avisos'){
    renderAvisosLista();
    switchScreen('screen-avisos');
    buildNav('navAvisos', state.role==='professor' ? 'teacher' : 'home');
  }
}

function goBackFromAvisos(){
  if(state.role === 'professor'){ goTo('teacher'); } else { goTo('home'); }
}

function goBackFromConfig(){
  if(state.role === 'professor'){ goTo('teacherPerfil'); } else { goTo('perfil'); }
}

let currentTheme = 'claro';

function toggleTheme(){
  currentTheme = currentTheme === 'claro' ? 'escuro' : 'claro';
  applyTheme();
  showToast(currentTheme === 'escuro' ? 'Tema escuro ativado' : 'Tema claro ativado');
}

function applyTheme(){
  document.documentElement.setAttribute('data-theme', currentTheme === 'escuro' ? 'dark' : 'light');
  const tag = document.getElementById('themeTag');
  const icon = document.getElementById('themeIcon');
  if(tag) tag.textContent = currentTheme === 'escuro' ? 'Escuro' : 'Claro';
  if(icon) icon.textContent = currentTheme === 'escuro' ? '🌙' : '☀️';
}

async function logoutToLogin(){
  try{
    if(window.molbankFirebase) await window.molbankFirebase.signOut();
  } catch(error){
    showToast('Não consegui encerrar a sessão. Tente novamente.');
    return;
  }
  stopCloudProgressSync();
  Object.keys(rooms).forEach(code=>{ if(rooms[code]?.isCloud) delete rooms[code]; });
  state.uid = '';
  state.email = '';
  state.name = '';
  state.role = 'aluno';
  state.teacherName = '';
  state.roomCode = '';
  state.teacherRoomCode = '';
  state.myRoomCodes = [];
  document.querySelectorAll('#rolePick button').forEach(button=>button.classList.toggle('selected', button.dataset.role === 'aluno'));
  document.getElementById('alunoJoinArea').style.display = 'block';
  document.getElementById('loginName').value = '';
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginRoomCode').value = '';
  const skipCheck = document.getElementById('skipRoomCheck');
  if(skipCheck) skipCheck.checked = false;
  setAuthMode('login');
  showToast('Você saiu da conta');
  switchScreen('screen-login');
}

function buildNav(containerId, activeKey){
  const studentItems = [
    {key:'home', ic:ICON.home, label:'Início', action:()=>goTo('home')},
    {key:'ranking', ic:ICON.trophy, label:'Ranking', action:()=>goTo('ranking')},
    {key:'loja', ic:ICON.bag, label:'Loja', action:()=>goTo('loja')},
    {key:'missao', ic:ICON.target, label:'Missão', action:()=>goTo('missao')},
    {key:'perfil', ic:ICON.user, label:'Perfil', action:()=>goTo('perfil')},
  ];
  const teacherItems = [
    {key:'rooms', ic:ICON.building, label:'Turmas', action:()=>{ renderTeacherRooms(); switchScreen('screen-teacher-rooms'); buildNav('navTeacherRooms','rooms'); }},
    {key:'teacher', ic:ICON.home, label:'Turma', action:()=>{
      const activeRoom = rooms[state.teacherRoomCode];
      if(!state.teacherRoomCode || !activeRoom || activeRoom.teacherName !== state.teacherName){
        showToast('Escolhe uma turma primeiro');
        renderTeacherRooms(); switchScreen('screen-teacher-rooms'); buildNav('navTeacherRooms','rooms');
        return;
      }
      goTo('teacher');
    }},
    {key:'students', ic:ICON.graduationCap, label:'Alunos', action:()=>{ if(!state.teacherRoomCode){showToast('Escolhe uma turma primeiro'); return;} goTo('teacherStudents'); }},
    {key:'notif', ic:ICON.bell, label:'Notificações', action:()=>{ if(!state.teacherRoomCode){showToast('Escolhe uma turma primeiro'); return;} goTo('teacherNotif'); }},
    {key:'freq', ic:ICON.checkCircle, label:'Frequência', action:()=>{ if(!state.teacherRoomCode){showToast('Escolhe uma turma primeiro'); return;} goTo('teacherFreq'); }},
  ];
  const list = state.role === 'professor' ? teacherItems : studentItems;
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  list.forEach(it=>{
    const btn = document.createElement('button');
    btn.className = 'nav-item' + (it.key===activeKey ? ' active' : '');
    btn.innerHTML = `<div class="ic">${it.ic}</div><span>${it.label}</span>`;
    btn.onclick = it.action;
    container.appendChild(btn);
  });
}

/* =====================================================================
   ALUNO: HOME
   ===================================================================== */
function molFromNota(nota){ const row = NOTA_TABLE.find(r => nota >= r.min && nota <= r.max); return row ? row.mol : 0; }

function renderHome(){
  const me = getMe();
  if(!me){
    document.getElementById('homeNoRoom').style.display = 'block';
    document.getElementById('homeWithRoom').style.display = 'none';
    return;
  }
  document.getElementById('homeNoRoom').style.display = 'none';
  document.getElementById('homeWithRoom').style.display = 'block';
  const room = rooms[state.roomCode];
  renderStudentAvisosCard(room);
  document.getElementById('homeBalance').innerHTML = me.coins + '<span>mol</span>';
  document.getElementById('homeNota').textContent = notaEfetiva(me).toFixed(1);
  document.getElementById('homeRoomName').textContent = room.name.split(' — ')[1] || room.name;

  const sorted = [...room.students].sort((a,b)=>b.coins-a.coins);
  const pos = sorted.findIndex(s=>s.isMe) + 1;
  document.getElementById('homeRankPos').textContent = '#' + pos;

  const catGrid = document.getElementById('catGrid');
  catGrid.innerHTML = '';
  Object.keys(CATEGORY_META).forEach(key=>{
    const meta = CATEGORY_META[key];
    const val = me.categorias[key] || 0;
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.innerHTML = `<div class="ic">${meta.icon}</div><p>${meta.label.toUpperCase()}</p><strong class="${val>=0?'pos':'neg'}">${val>=0?'+':''}${val}</strong>`;
    catGrid.appendChild(card);
  });

  document.getElementById('missionBadge').style.display = (me.notaHistory.length > 0 && notaEfetiva(me) < 6 && !me.mission) ? 'flex' : 'none';

  const list = document.getElementById('activityList');
  list.innerHTML = '';
  if(me.activity.length === 0){
    list.innerHTML = `<p style="font-size:12px; color:var(--gray); text-align:center; padding:14px 0;">Nada ainda por aqui.</p>`;
  }
  me.activity.forEach(a=>{
    const row = document.createElement('div');
    row.className = 'activity-item';
    row.innerHTML = `<div class="activity-ic ${a.pos?'pos':'neg'}">${a.icon}</div><div class="activity-text"><p>${a.label}</p><span>${timeAgo(a.ts)}</span></div><div class="activity-amount ${a.pos?'pos':'neg'}">${a.pos?'+':''}${a.amount}</div>`;
    list.appendChild(row);
  });
}

/* =====================================================================
   RANKING — só a sala do próprio aluno
   ===================================================================== */
function renderNotas(){
  const me = getMe();
  const content = document.getElementById('notasContent');
  content.innerHTML = '';
  if(!me){
    content.innerHTML = `<p style="font-size:12.5px; color:var(--gray); text-align:center; padding:30px 8px;">Entra numa turma primeiro pelo botão + na tela inicial.</p>`;
    return;
  }

  const latest = getLatestNota(me);
  const hasBonus = latest && latest.bonus > 0;
  const pendingLine = (me.storeBonusActive && me.storeBonusActive.status === 'pendente')
    ? `<p style="position:relative; z-index:1; font-size:10.5px; color:#9F9F9F; margin-top:10px;">+${me.storeBonusActive.value.toFixed(1)} aguardando aprovação do professor</p>`
    : '';

  content.innerHTML += `
    <div class="balance-card">
      <div class="balance-label"><span class="coin-dot"></span> Nota atual</div>
      <div class="balance-value" style="font-size:${hasBonus?'26px':'36px'};">${hasBonus ? formatNotaComBonus(latest.nota, latest.bonus) : notaEfetiva(me).toFixed(1)}</div>
      ${pendingLine}
    </div>`;

  content.innerHTML += `<div class="section-title">Quanto cada nota vale em mol-edas</div>`;
  const refTable = document.createElement('div');
  refTable.style.cssText = 'background:var(--gray-light); border-radius:16px; padding:6px 14px; margin-bottom:22px;';
  refTable.innerHTML = NOTA_TABLE.map((r, i)=>{
    const label = r.min === r.max ? r.min.toFixed(1) : (r.max >= 10 ? r.min.toFixed(1)+' – 10' : r.min.toFixed(1)+' – '+r.max.toFixed(1));
    const borderStyle = i === NOTA_TABLE.length - 1 ? 'border-bottom:none;' : 'border-bottom:1px solid rgba(0,0,0,.06);';
    return `<div style="display:flex; justify-content:space-between; padding:9px 0; ${borderStyle} font-size:12.5px;"><span style="color:var(--gray);">Nota ${label}</span><span style="font-weight:700; color:var(--orange);">${r.mol} mol-edas</span></div>`;
  }).join('');

  content.appendChild(refTable);

  content.innerHTML += `<div class="section-title">Histórico de notas lançadas</div>`;
  const histBox = document.createElement('div');
  if(me.notaHistory.length === 0){
    histBox.innerHTML = `<p style="font-size:12px; color:var(--gray); text-align:center; padding:14px 0;">Nenhuma nota lançada ainda.</p>`;
  } else {
    me.notaHistory.forEach((h, idx)=>{
      const row = document.createElement('div');
      row.className = 'activity-item';
      row.innerHTML = `<div class="activity-ic pos">📊</div><div class="activity-text"><p>${provaLabel(me, idx)} — ${formatNotaComBonus(h.nota, h.bonus)}</p><span>${h.date}</span></div><div class="activity-amount pos">+${h.mol}</div>`;
      histBox.appendChild(row);
    });
  }
  content.appendChild(histBox);
}

function renderRanking(){
  const room = rooms[state.roomCode];
  const list0 = document.getElementById('rankList');
  if(!room){
    document.getElementById('rankRoomTitle').textContent = 'Nenhuma turma ainda';
    list0.innerHTML = `<p style="font-size:12.5px; color:var(--gray); text-align:center; padding:30px 8px;">Entra numa turma primeiro pelo botão + na tela inicial.</p>`;
    return;
  }
  document.getElementById('rankRoomTitle').textContent = room.name;
  const sorted = [...room.students].sort((a,b)=>b.coins-a.coins);
  const list = document.getElementById('rankList');
  list.innerHTML = '';
  sorted.forEach((s,i)=>{
    const row = document.createElement('div');
    row.className = 'rank-row' + (s.isMe ? ' me' : '');
    row.innerHTML = `<div class="rank-pos">${i+1}º</div><div class="rank-avatar">${s.nome[0].toUpperCase()}</div><div class="rank-name">${s.isMe ? s.nome + ' (você)' : s.nome}</div><div class="rank-coins">${s.coins}</div>`;
    list.appendChild(row);
  });
}

/* =====================================================================
   LOJA
   ===================================================================== */
function renderStore(){
  const me = getMe();
  const content = document.getElementById('lojaContent');
  if(!me){
    document.getElementById('lojaBalance').textContent = 'sem turma ainda';
    content.innerHTML = `<p style="font-size:12.5px; color:var(--gray); text-align:center; padding:30px 8px;">Entra numa turma primeiro pelo botão + na tela inicial.</p>`;
    return;
  }
  document.getElementById('lojaBalance').textContent = me.coins + ' mol-edas';
  content.innerHTML = '';
  if(me.storeBonusActive){
    const entryIdx = (me.notaHistory||[]).findIndex(h=>h.id === me.storeBonusActive.entryId);
    const entry = entryIdx > -1 ? me.notaHistory[entryIdx] : null;
    const label = entry ? provaLabel(me, entryIdx) : '';
    const notice = document.createElement('p');
    const isPending = me.storeBonusActive.status === 'pendente';
    notice.style.cssText = `font-size:11.5px; background:${isPending?'rgba(59,125,240,.1)':'rgba(63,182,95,.1)'}; color:${isPending?'var(--blue)':'var(--green)'}; padding:10px 12px; border-radius:12px; margin-bottom:14px; font-weight:600; line-height:1.5;`;
    notice.textContent = isPending
      ? `Pedido de +${me.storeBonusActive.value.toFixed(1)} na ${label} aguardando aprovação. As mol-edas serão cobradas se o professor aprovar.`
      : `+${me.storeBonusActive.value.toFixed(1)} aplicado na ${label}. Só dá pra pedir outro depois que o professor lançar a próxima nota.`;
    content.appendChild(notice);
  } else if(!me.notaHistory || me.notaHistory.length === 0){
    const notice = document.createElement('p');
    notice.style.cssText = 'font-size:11.5px; color:var(--gray); margin-bottom:14px;';
    notice.textContent = 'O aumento de nota só fica disponível depois que o professor lançar sua primeira nota.';
    content.appendChild(notice);
  }
  let lastGroup = null;
  STORE_ITEMS.forEach((item, idx)=>{
    if(item.group !== lastGroup){
      const label = document.createElement('div'); label.className = 'store-cat-label'; label.textContent = item.group;
      content.appendChild(label); lastGroup = item.group;
    }
    const isBonusItem = item.bonusValue !== undefined;
    const blockedByExistingBonus = isBonusItem && !!me.storeBonusActive;
    const blockedByNoHistory = isBonusItem && (!me.notaHistory || me.notaHistory.length === 0);
    const canBuy = me.coins >= item.cost && !blockedByExistingBonus && !blockedByNoHistory;
    const row = document.createElement('div'); row.className = 'store-item';
    row.innerHTML = `<div class="store-ic">${item.icon}</div><div class="store-info"><p>${item.name}</p><span>${item.desc}</span></div><button class="store-buy" ${canBuy?'':'disabled'} onclick="buyItem(${idx})">${blockedByExistingBonus||blockedByNoHistory ? 'Indisponível' : canBuy ? item.cost + ' mol' : 'Sem saldo'}</button>`;
    content.appendChild(row);
  });
}

async function buyItem(idx){
  const me = getMe(); const item = STORE_ITEMS[idx];
  if(!me || me.coins < item.cost) return;
  const isBonusItem = item.bonusValue !== undefined;

  if(isBonusItem){
    if(me.storeBonusActive){ showToast('Você já tem um aumento em andamento'); return; }
    if(!me.notaHistory || me.notaHistory.length === 0){ showToast('Ainda não tem nenhuma nota lançada'); return; }
    openNotaPicker(idx);
    return;
  }

  const room = rooms[state.roomCode];
  if(room?.isCloud){
    const activity = {label:'Resgate: ' + item.name, amount:-item.cost, pos:false, icon:'🎁', ts:Date.now()};
    try{
      const api = await firebaseApi();
      me.coins = await api.redeemStoreItem(state.roomCode, me.uid, {
        itemName:item.name,
        cost:item.cost,
        activity,
      });
      if(!(me.activity||[]).some(entry=>entry.ts === activity.ts && entry.label === activity.label)){
        me.activity = [activity, ...(me.activity||[])].slice(0,25);
      }
      showToast('Resgatado: ' + item.name);
      renderStore();
      renderHome();
    }catch(error){
      showToast(error.message === 'INSUFFICIENT_BALANCE'
        ? 'Saldo insuficiente para esse resgate.'
        : 'Não consegui registrar a compra no Firebase. Confira a conexão e as regras.');
    }
    return;
  }

  me.coins -= item.cost;
  logActivity(me, 'Resgate: ' + item.name, -item.cost, '🎁');
  room.teacherAlerts = room.teacherAlerts || [];
  room.teacherAlerts.unshift({ type:'compra', matricula: me.matricula, nome: me.nome, detail: item.name, cost: item.cost, time: Date.now() });
  showToast('Resgatado: ' + item.name);
  renderStore();
  renderHome();
}

function openNotaPicker(itemIdx){
  const me = getMe();
  const item = STORE_ITEMS[itemIdx];
  const overlay = document.getElementById('notaPickerOverlay');
  document.getElementById('notaPickerTitle').textContent = 'Aplicar ' + item.name + ' em qual nota?';
  const list = document.getElementById('notaPickerList');
  list.innerHTML = me.notaHistory.map((h, idx)=>`
    <button onclick="confirmNotaPicker(${itemIdx}, ${h.id})" style="display:flex; justify-content:space-between; align-items:center; width:100%; text-align:left; background:var(--gray-light); color:var(--text-primary); border:none; padding:13px 14px; border-radius:14px; font-family:inherit; margin-bottom:8px; cursor:pointer;">
      <span style="font-size:13px; font-weight:600;">${provaLabel(me, idx)}<span style="display:block; font-size:10.5px; color:var(--gray); font-weight:500;">${h.date}</span></span>
      <span style="font-family:'Space Grotesk', sans-serif; font-weight:700; color:var(--orange);">${formatNotaComBonus(h.nota, h.bonus)}</span>
    </button>`).join('');
  overlay.style.display = 'flex';
}

function closeNotaPicker(){
  document.getElementById('notaPickerOverlay').style.display = 'none';
}

async function confirmNotaPicker(itemIdx, entryId){
  const me = getMe();
  const item = STORE_ITEMS[itemIdx];
  if(!me || me.coins < item.cost){ closeNotaPicker(); return; }
  const room = rooms[state.roomCode];
  if(room?.isCloud){
    me.storeBonusActive = { entryId, value:item.bonusValue, cost:item.cost, status:'pendente', requestedAt:Date.now() };
    closeNotaPicker();
    renderStore();
    try{
      const api = await firebaseApi();
      await api.createStoreBonusRequest(state.roomCode, {
        entryId,
        latestNoteId:me.notaHistory[0].id,
        value:item.bonusValue,
        cost:item.cost,
        studentName:me.nome,
      });
      showToast('Pedido enviado pro professor aprovar');
    }catch(error){
      me.storeBonusActive = null;
      renderStore();
      showToast(error.code === 'permission-denied'
        ? 'O Firebase bloqueou o pedido. Publique as regras atualizadas.'
        : 'Não consegui enviar o pedido. Confira a conexão e tente de novo.');
    }
    return;
  }
  me.coins -= item.cost;
  me.storeBonusActive = { entryId, value: item.bonusValue, status: 'pendente', requestedAt: Date.now() };
  const entryIdx = me.notaHistory.findIndex(h=>h.id === entryId);
  const label = entryIdx > -1 ? provaLabel(me, entryIdx) : '';
  logActivity(me, 'Pediu ' + item.name + ' na ' + label, -item.cost, '📈');
  closeNotaPicker();
  showToast('Pedido enviado pro professor aprovar');
  renderStore();
  renderHome();
}

/* =====================================================================
   MISSÃO
   ===================================================================== */
const MAX_PER_DAY = 3; // máx. de alunos apresentando no mesmo dia, combinado com a professora

const MISSION_TYPES = {
  questoes: { title:'Questões', desc:'Traz 5 questões no nível da prova. O professor escolhe algumas pra você resolver e explicar pra turma.' },
  apresentacao: { title:'Mini apresentação', desc:'Explica um conteúdo da prova, sem cola ou leitura, de forma clara e segura.' },
};

function dateKey(d){
  const y = d.getFullYear(), m = String(d.getMonth()+1).padStart(2,'0'), day = String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}

function formatDateFriendly(key){
  const [y,m,d] = key.split('-').map(Number);
  const date = new Date(y, m-1, d);
  const weekdays = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
  const meses = ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  return `${weekdays[date.getDay()]}, ${d} de ${meses[m-1]}`;
}

function getActiveMissions(room){
  return room.students.filter(s=>s.mission && (s.mission.status==='pendente' || s.mission.status==='autorizada'));
}

function countMissionsOnDate(room, dKey){
  return getActiveMissions(room).filter(s=>s.mission.presentationDate === dKey).length;
}

function getMissionOrder(room){
  // agrupa por dia, ordenado por quem pediu primeiro dentro de cada dia
  return getActiveMissions(room).sort((a,b)=>{
    if(a.mission.presentationDate !== b.mission.presentationDate) return a.mission.presentationDate.localeCompare(b.mission.presentationDate);
    return a.mission.requestedAt - b.mission.requestedAt;
  });
}

function renderMissionOrderList(containerId, room){
  const container = document.getElementById(containerId);
  if(!container) return;
  const order = getMissionOrder(room);
  if(order.length === 0){
    container.innerHTML = `<p style="font-size:12px; color:var(--gray); text-align:center; padding:14px 0;">Ninguém na fila de apresentação agora.</p>`;
    return;
  }
  // agrupa por dia
  const groups = {};
  order.forEach(s=>{
    const k = s.mission.presentationDate;
    if(!groups[k]) groups[k] = [];
    groups[k].push(s);
  });
  container.innerHTML = Object.keys(groups).sort().map(dKey=>{
    const list = groups[dKey];
    const rows = list.map((s,i)=>{
      const statusLabel = s.mission.status==='autorizada' ? 'Autorizado' : 'Aguardando';
      const statusColor = s.mission.status==='autorizada' ? 'var(--green)' : 'var(--gray)';
      return `<div class="rank-row" style="background:var(--gray-light);">
        <div class="rank-pos">${i+1}º</div>
        <div class="rank-avatar">${s.nome[0].toUpperCase()}</div>
        <div class="rank-name">${s.nome}<span style="display:block; font-size:10.5px; color:var(--gray); font-weight:500;">${MISSION_TYPES[s.mission.type].title}</span></div>
        <div style="font-size:11px; font-weight:700; color:${statusColor};">${statusLabel}</div>
      </div>`;
    }).join('');
    return `<p style="font-size:11.5px; font-weight:700; color:var(--text-primary); margin:14px 0 6px;">${formatDateFriendly(dKey)} <span style="font-weight:500; color:var(--gray);">· ${list.length}/${MAX_PER_DAY} vagas</span></p>${rows}`;
  }).join('');
}

function renderMissao(){
  const me = getMe();
  const content = document.getElementById('missaoContent');
  content.innerHTML = '';
  if(!me){
    content.innerHTML = `<p style="font-size:12.5px; color:var(--gray); text-align:center; padding:30px 8px;">Entra numa turma primeiro pelo botão + na tela inicial.</p>`;
    return;
  }
  const room = rooms[state.roomCode];

  if(me.notaHistory.length === 0){
    content.innerHTML = `<div class="mission-lock"><div class="ic">🔒</div><p>Missão ainda não disponível.<br>Assim que o professor lançar sua primeira nota, essa área libera automaticamente.</p></div>`;
  } else if(notaEfetiva(me) >= 6 && !me.mission){
    content.innerHTML = `<div class="mission-lock"><div class="ic"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; flex-shrink:0;"><rect x="4" y="11" width="16" height="9" rx="1"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></div><p>Missão disponível só pra quem está com nota abaixo de 6,0.<br>Sua nota atual é <b>${notaEfetiva(me).toFixed(1)}</b> — continue assim!</p></div>`;
  } else if(me.mission){
    const m = me.mission;
    const typeInfo = MISSION_TYPES[m.type];
    const statusLabel = m.status === 'pendente' ? 'Aguardando aprovação' : m.status === 'autorizada' ? 'Autorizada — pode apresentar' : 'Concluída';
    const statusClass = m.status === 'pendente' ? 'pendente' : m.status === 'autorizada' ? 'ativa' : 'liberada';
    let posInfo = '';
    if(m.status === 'pendente' || m.status === 'autorizada'){
      const sameDayList = getActiveMissions(room).filter(s=>s.mission.presentationDate === m.presentationDate).sort((a,b)=>a.mission.requestedAt-b.mission.requestedAt);
      const pos = sameDayList.findIndex(s=>s.matricula === me.matricula) + 1;
      posInfo = `<p style="font-size:12px; color:var(--gray); margin-top:8px;">📅 ${formatDateFriendly(m.presentationDate)} · posição <b>${pos}º</b> · máx. ${MAX_PER_DAY} apresentações nesse dia</p>`;
    }
    content.innerHTML = `<div class="mission-card">
      <span class="mission-status ${statusClass}">${statusLabel}</span>
      <h3>${typeInfo.title}</h3>
      <p>${typeInfo.desc}</p>
      <div class="mission-reward">Recompensa: +2 mol-edas ao concluir · máx. 5 min de apresentação</div>
      ${posInfo}
    </div>`;
  } else {
    content.innerHTML = `
      <p style="font-size:12.5px; color:#6B6B6B; margin-bottom:14px; line-height:1.5;">Nota abaixo de 6,0 libera uma missão. Escolha uma opção e o dia que quer apresentar — o professor aprova antes de valer.</p>
      <div class="mission-card"><h3>Opção 1 — Questões</h3><p>${MISSION_TYPES.questoes.desc}</p><div class="mission-reward">+2 mol-edas · entendimento parcial +0,5 · explicação clara +1,0</div><button class="btn btn-dark" onclick="openDatePicker('questoes')">Escolher o dia</button></div>
      <div class="mission-card"><h3>Opção 2 — Mini apresentação</h3><p>${MISSION_TYPES.apresentacao.desc}</p><div class="mission-reward">+2 mol-edas · entendimento parcial +0,5 · explicação clara +1,0</div><button class="btn btn-dark" onclick="openDatePicker('apresentacao')">Escolher o dia</button></div>`;
  }

  const queueTitle = document.createElement('div');
  queueTitle.className = 'section-title';
  queueTitle.style.marginTop = '20px';
  queueTitle.textContent = 'Fila de apresentações da turma';
  content.appendChild(queueTitle);
  const queueBox = document.createElement('div');
  queueBox.id = 'missaoQueueBox';
  content.appendChild(queueBox);
  renderMissionOrderList('missaoQueueBox', room);
}

async function requestMission(type, presentationDate){
  const me = getMe(); if(!me) return;
  const room = rooms[state.roomCode];
  if(countMissionsOnDate(room, presentationDate) >= MAX_PER_DAY){ showToast('Esse dia já está lotado — escolhe outro'); return; }
  const mission = { type, presentationDate, status:'pendente', requestedAt: Date.now() };
  if(room?.isCloud){
    if(me.mission){ showToast('Você já tem uma missão em andamento'); return; }
    const activity = {label:'Missão solicitada: ' + MISSION_TYPES[type].title + ' · ' + formatDateFriendly(presentationDate), amount:0, pos:true, icon:'🎯', ts:Date.now()};
    me.mission = mission;
    closeDatePicker();
    renderMissao(); renderHome();
    try{
      const api = await firebaseApi();
      await api.requestMemberMission(state.roomCode, me.uid, mission, [activity, ...(me.activity||[])].slice(0,25));
      if(!(me.activity||[]).some(entry=>entry.ts === activity.ts && entry.label === activity.label)){
        me.activity = [activity, ...(me.activity||[])].slice(0,25);
      }
      showToast('Solicitação enviada pro professor');
      renderMissao(); renderHome();
    }catch(error){
      me.mission = null;
      renderMissao(); renderHome();
      showToast(error.code === 'permission-denied'
        ? 'O Firebase bloqueou a missão. Publique as regras atualizadas.'
        : 'Não consegui enviar a missão. Confira a conexão e tente de novo.');
    }
    return;
  }
  me.mission = mission;
  logActivity(me, 'Missão solicitada: ' + MISSION_TYPES[type].title + ' · ' + formatDateFriendly(presentationDate), 0, '🎯');
  showToast('Solicitação enviada pro professor');
  closeDatePicker();
  renderMissao(); renderHome();
}

let datePickerType = null;
let calViewYear, calViewMonth; // mês sendo exibido no calendário (0-indexado)
let calSelectedKey = null;

function openDatePicker(type){
  datePickerType = type;
  calSelectedKey = null;
  const today = new Date();
  calViewYear = today.getFullYear();
  calViewMonth = today.getMonth();
  document.getElementById('datePickerSubtitle').textContent = `Máx. ${MAX_PER_DAY} por dia.`;
  renderCalendar();
  document.getElementById('datePickerOverlay').style.display = 'flex';
  setupCalendarSwipe();
}

let calSwipeSetup = false;
function setupCalendarSwipe(){
  if(calSwipeSetup) return;
  calSwipeSetup = true;
  const wrapper = document.getElementById('calGridWrapper');
  let startX = 0, startY = 0, dragging = false;
  wrapper.addEventListener('touchstart', (e)=>{
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    dragging = true;
  }, {passive:true});
  wrapper.addEventListener('touchend', (e)=>{
    if(!dragging) return;
    dragging = false;
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = endX - startX;
    const diffY = endY - startY;
    if(Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)){
      calChangeMonth(diffX < 0 ? 1 : -1);
    }
  }, {passive:true});
}

function closeDatePicker(){
  document.getElementById('datePickerOverlay').style.display = 'none';
}

function calChangeMonth(delta){
  const grid = document.getElementById('calGrid');
  grid.style.opacity = '0';
  setTimeout(()=>{
    calViewMonth += delta;
    if(calViewMonth < 0){ calViewMonth = 11; calViewYear--; }
    if(calViewMonth > 11){ calViewMonth = 0; calViewYear++; }
    renderCalendar();
    requestAnimationFrame(()=>{ grid.style.opacity = '1'; });
  }, 140);
}

function renderCalendar(){
  const room = rooms[state.roomCode];
  const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  document.getElementById('calMonthLabel').textContent = meses[calViewMonth] + ' de ' + calViewYear;

  const weekdayRow = document.getElementById('calWeekdayRow');
  const todayWeekday = new Date().getDay();
  weekdayRow.innerHTML = ['dom.','seg.','ter.','qua.','qui.','sex.','sáb.'].map((w,i)=>{
    const isTodayCol = i === todayWeekday;
    return `<div style="text-align:center; font-size:10.5px; color:${isTodayCol?'var(--orange)':'#DADADA'}; font-weight:700; padding:4px 0;">${w}</div>`;
  }).join('');

  const grid = document.getElementById('calGrid');
  grid.innerHTML = '';

  const firstDay = new Date(calViewYear, calViewMonth, 1);
  const startOffset = firstDay.getDay(); // 0=domingo
  const daysInMonth = new Date(calViewYear, calViewMonth+1, 0).getDate();
  const todayKey = dateKey(new Date());

  for(let i=0; i<startOffset; i++){
    grid.appendChild(document.createElement('div'));
  }

  for(let d=1; d<=daysInMonth; d++){
    const dateObj = new Date(calViewYear, calViewMonth, d);
    const key = dateKey(dateObj);
    const isPast = key < todayKey;
    const isToday = key === todayKey;
    const isSelected = key === calSelectedKey;
    const count = countMissionsOnDate(room, key);
    const full = count >= MAX_PER_DAY;
    const disabled = isPast || full;

    const cell = document.createElement('button');
    cell.disabled = disabled;
    let bg = 'transparent', color = '#fff', border = 'none';
    if(isSelected){ bg = 'var(--orange)'; color = '#fff'; }
    else if(isToday){ border = '1.5px solid var(--orange)'; color = 'var(--orange)'; }
    else if(isPast){ color = '#4A4A4A'; }
    else if(full){ color = '#5A5A5A'; }

    cell.style.cssText = `aspect-ratio:1; border-radius:50%; background:${bg}; border:${border}; color:${color}; font-family:inherit; font-size:14.5px; font-weight:${isSelected||isToday?'700':'600'}; cursor:${disabled?'default':'pointer'}; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; padding:0; text-decoration:${full && !isPast ? 'line-through' : 'none'};`;

    let dot = '';
    if(!isPast && count > 0){
      const dotColor = full ? 'var(--red)' : 'var(--orange)';
      dot = `<span style="width:4px; height:4px; border-radius:50%; background:${isSelected?'#fff':dotColor}; margin-top:2px;"></span>`;
    }
    cell.innerHTML = `<span>${d}</span>${dot}`;

    if(!disabled){
      cell.onclick = ()=>{
        calSelectedKey = key;
        renderCalendar();
        document.getElementById('calConfirmBtn').disabled = false;
      };
    }
    grid.appendChild(cell);
  }

  document.getElementById('calConfirmBtn').disabled = !calSelectedKey;
}

function confirmDatePicker(){
  if(!calSelectedKey) return;
  requestMission(datePickerType, calSelectedKey);
}

/* =====================================================================
   PERFIL (aluno)
   ===================================================================== */
function renderPerfil(){
  const me = getMe();
  document.getElementById('profileAvatar').textContent = (state.name || 'A')[0].toUpperCase();
  document.getElementById('profileNameInput').value = state.name || '';
  if(me){
    document.getElementById('profileAvatar').textContent = me.nome[0].toUpperCase();
    document.getElementById('profileNameInput').value = me.nome;
  }

  const list = document.getElementById('profileRoomList');
  const codes = (state.myRoomCodes||[]).filter(c=>rooms[c]);
  if(codes.length === 0){
    list.innerHTML = `<p style="font-size:12.5px; color:var(--gray); text-align:center; padding:20px 0;">Você ainda não está em nenhuma turma. Toca em "+ entrar em outra" acima.</p>`;
    return;
  }
  list.innerHTML = codes.map(code=>{
    const room = rooms[code];
    const isActive = code === state.roomCode;
    return `<div class="profile-room-card" style="${isActive ? 'border:1.5px solid var(--orange); background:rgba(46,196,182,.06);' : ''}">
      <div><p>${room.name}${isActive ? ' · ativa' : ''}</p><span>código: ${room.code}</span></div>
      ${isActive ? '' : `<button class="corner-btn" onclick="switchActiveRoom('${code}')">Ver essa</button>`}
      <button class="leave-btn" onclick="leaveRoomCode('${code}')">Sair</button>
    </div>`;
  }).join('');
}

function saveProfile(){
  const newName = document.getElementById('profileNameInput').value.trim();
  if(!newName){ showToast('O nome não pode ficar vazio'); return; }
  state.name = newName;
  const me = getMe();
  if(me) me.nome = newName;
  document.getElementById('studentGreetName').textContent = newName;
  document.getElementById('studentAvatar').textContent = newName[0].toUpperCase();
  showToast('Perfil atualizado');
}

function leaveRoomCode(code){
  const room = rooms[code];
  if(room) room.students = room.students.filter(s=>!s.isMe);
  state.myRoomCodes = (state.myRoomCodes||[]).filter(c=>c!==code);
  if(state.roomCode === code){
    state.roomCode = state.myRoomCodes.length ? state.myRoomCodes[0] : '';
  }
  showToast('Você saiu da turma');
  renderPerfil();
}

function leaveRoom(){
  leaveRoomCode(state.roomCode);
  goTo('home');
}

/* =====================================================================
   PROFESSOR: lista/criação de turmas
   ===================================================================== */
function getMyTeacherRooms(){
  return Object.values(rooms)
    .filter(r => r.isCloud ? r.teacherUid === state.uid : (!state.uid && r.teacherName === state.teacherName))
    .sort((a,b) => (b.createdAt||0) - (a.createdAt||0));
}

function renderTeacherRooms(){
  const list = document.getElementById('teacherRoomList');
  list.innerHTML = '';
  const myRooms = getMyTeacherRooms();
  if(myRooms.length === 0){
    list.innerHTML = `<p style="font-size:12.5px; color:var(--gray); text-align:center; padding:20px 0;">Você ainda não criou nenhuma turma. Toque em "Criar nova turma" acima.</p>`;
    return;
  }
  myRooms.forEach(room=>{
    const code = room.code;
    const card = document.createElement('div');
    card.className = 'room-card';
    card.innerHTML = `<div class="ric">🏫</div><div class="rinfo"><p>${room.name}</p><span>Código ${room.code} · ${room.students.length} aluno(s)</span></div>
      <button onclick="event.stopPropagation(); confirmDeleteRoom('${code}')" style="background:none; border:none; color:var(--gray); font-size:16px; padding:6px; cursor:pointer; flex-shrink:0;">
        <svg width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
      </button>`;
    card.querySelector('.rinfo').style.cursor = 'pointer';
    card.querySelector('.ric').style.cursor = 'pointer';
    const openRoom = ()=>{ state.teacherRoomCode = code; renderTeacher(); switchScreen('screen-teacher'); buildNav('navTeacher','teacher'); };
    card.querySelector('.rinfo').onclick = openRoom;
    card.querySelector('.ric').onclick = openRoom;
    list.appendChild(card);
  });
}

let roomPendingDelete = null;

function confirmDeleteRoom(code){
  const room = rooms[code];
  if(!room) return;
  roomPendingDelete = code;
  document.getElementById('deleteRoomWarning').textContent = `"${room.name}" tem ${room.students.length} aluno(s) cadastrado(s).`;
  document.getElementById('deleteRoomOverlay').style.display = 'flex';
}

function closeDeleteRoom(){
  document.getElementById('deleteRoomOverlay').style.display = 'none';
  roomPendingDelete = null;
}

async function executeDeleteRoom(){
  if(!roomPendingDelete) return;
  const code = roomPendingDelete;
  const roomName = rooms[code] ? rooms[code].name : '';
  try{
    if(rooms[code]?.isCloud){
      const api = await firebaseApi();
      await api.deleteRoom(code);
    }
    stopCloudRoomProgressSync(code);
    delete rooms[code];
    if(state.teacherRoomCode === code) state.teacherRoomCode = '';
    closeDeleteRoom();
    renderTeacherRooms();
    showToast('Turma "' + roomName + '" excluída');
  } catch(error){
    showToast(firebaseErrorMessage(error));
  }
}

function openCreateRoom(){
  document.getElementById('createRoomBox').style.display = 'block';
}

async function createRoom(){
  const name = document.getElementById('newRoomName').value.trim();
  if(!name){ showToast('Dá um nome pra turma'); return; }
  const code = generateRoomCode();
  try{
    const api = await firebaseApi();
    const room = await api.createRoom({ code, name, teacherName: state.teacherName });
    rooms[code] = cloudRoomToLocal(room, state.uid);
    watchCloudRoomProgress(code);
    document.getElementById('newRoomName').value = '';
    document.getElementById('createRoomBox').style.display = 'none';
    renderTeacherRooms();
    showToast('Turma criada! Código: ' + code);
  } catch(error){
    showToast(firebaseErrorMessage(error));
  }
}

function renderFrequencia(){
  const room = rooms[state.teacherRoomCode];
  if(!room) return;
  const list = document.getElementById('teacherFreqList');
  list.innerHTML = '';

  const total = room.students.length;
  const marcados = room.students.filter(s=>s.freqMarkedToday).length;
  const pct = total > 0 ? Math.round((marcados/total)*100) : 0;
  document.getElementById('freqProgressLabel').textContent = `${marcados} de ${total} aluno(s) marcado(s)`;
  document.getElementById('freqProgressBar').style.width = pct + '%';

  const resetBtn = document.createElement('button');
  resetBtn.className = 'btn btn-outline';
  resetBtn.style.marginBottom = '14px';
  resetBtn.textContent = '🔄 Nova chamada (resetar o dia)';
  resetBtn.onclick = ()=>{
    resetBtn.classList.add('pulse');
    resetBtn.style.color = '#fff';
    setTimeout(()=>{
      room.students.forEach(s=>{
        s.freqMarkedToday = null;
        persistTeacherProgress(s, room.code);
      });
      renderFrequencia();
      showToast('Chamada resetada');
    }, 260);
  };
  list.appendChild(resetBtn);

  if(room.students.length === 0){
    const p = document.createElement('p');
    p.style.cssText = 'font-size:12.5px; color:var(--gray); text-align:center; padding:20px 0;';
    p.textContent = 'Nenhum aluno entrou ainda nessa turma.';
    list.appendChild(p);
    return;
  }

  room.students.forEach(s=>{
    const row = document.createElement('div');
    row.className = 'student-manage';
    const marked = s.freqMarkedToday;
    const statusText = marked ? (marked==='presente' ? '✅ Presente hoje · registrado' : '❌ Falta hoje · registrado') : 'Ainda não marcado';
    row.innerHTML = `
      <div class="sm-top" style="cursor:default; ${marked ? 'opacity:.75;' : ''}">
        <div class="rank-avatar">${s.nome[0].toUpperCase()}</div>
        <div class="sm-name"><p>${s.nome}</p><span>${statusText}</span></div>
      </div>
      <div style="display:flex; gap:8px; padding:0 12px 14px;">
        <button style="flex:1; background:${marked==='presente'?'var(--green)':'rgba(63,182,95,.2)'}; color:${marked==='presente'?'#fff':'var(--green)'}; border:none; padding:9px; border-radius:10px; font-family:inherit; font-weight:700; font-size:12px; cursor:pointer;" onclick="markFrequencia('${s.matricula}','presente')">Presente +1</button>
        <button style="flex:1; background:${marked==='falta'?'var(--red)':'rgba(230,80,80,.2)'}; color:${marked==='falta'?'#fff':'var(--red)'}; border:none; padding:9px; border-radius:10px; font-family:inherit; font-weight:700; font-size:12px; cursor:pointer;" onclick="markFrequencia('${s.matricula}','falta')">Falta −2</button>
      </div>`;
    list.appendChild(row);
  });
}

function markAllPresente(){
  const room = rooms[state.teacherRoomCode];
  if(!room || room.students.length === 0) return;
  let count = 0;
  room.students.forEach(s=>{
    if(!s.freqMarkedToday){
      s.freqMarkedToday = 'presente';
      s.categorias.frequencia = (s.categorias.frequencia||0) + 1;
      s.coins += 1;
      logActivity(s, 'Presença registrada', 1, '✅');
      count++;
    }
  });
  renderFrequencia();
  showToast(count + ' aluno(s) marcado(s) como presente. Ajusta quem faltou individualmente.');
}

function markFrequencia(matricula, status){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s) return;
  if(s.freqMarkedToday){ showToast('Já marcado hoje — usa "Nova chamada" pra refazer'); return; }
  const value = status === 'presente' ? 1 : -2;
  s.freqMarkedToday = status;
  s.categorias.frequencia = (s.categorias.frequencia||0) + value;
  s.coins = Math.max(0, s.coins + value);
  logActivity(s, status === 'presente' ? 'Presença registrada' : 'Falta não justificada', value, '✅');
  renderFrequencia();
  showToast((value>0?'+':'') + value + ' mol-eda · ' + s.nome);
}

function renderRoomQR(containerId, code, size){
  const el = document.getElementById(containerId);
  el.innerHTML = '';
  try{
    const joinUrl = new URL(window.location.href);
    joinUrl.searchParams.set('code', code);
    new QRCode(el, { text: joinUrl.toString(), width: size, height: size, correctLevel: QRCode.CorrectLevel.M });
  } catch(err){
    el.innerHTML = '<span style="font-size:9px; color:var(--gray); padding:4px; text-align:center;">QR indisponível</span>';
  }
}

function openQrFullscreen(){
  const room = rooms[state.teacherRoomCode];
  if(!room) return;
  document.getElementById('qrFullscreenRoomName').textContent = room.name;
  document.getElementById('qrFullscreenCodeText').textContent = room.code;
  const qrSize = Math.min(280, Math.floor(window.innerWidth * 0.7));
  renderRoomQR('qrFullscreenCode', room.code, qrSize);
  document.getElementById('qrFullscreenOverlay').style.display = 'flex';
}

function closeQrFullscreen(){
  document.getElementById('qrFullscreenOverlay').style.display = 'none';
}

function copyRoomCode(){
  const room = rooms[state.teacherRoomCode];
  if(!room) return;
  const tempInput = document.createElement('textarea');
  tempInput.value = room.code;
  tempInput.style.position = 'fixed';
  tempInput.style.opacity = '0';
  document.body.appendChild(tempInput);
  tempInput.focus();
  tempInput.select();
  let copied = false;
  try{ copied = document.execCommand('copy'); } catch(err){ copied = false; }
  document.body.removeChild(tempInput);

  if(copied){
    showToast('Código copiado: ' + room.code);
  } else if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(room.code)
      .then(()=>showToast('Código copiado: ' + room.code))
      .catch(()=>showToast('Código da sala: ' + room.code));
  } else {
    showToast('Código da sala: ' + room.code);
  }
}

function backToRooms(){
  renderTeacherRooms();
  switchScreen('screen-teacher-rooms');
  buildNav('navTeacherRooms','rooms');
}

/* =====================================================================
   PROFESSOR: dentro da turma
   ===================================================================== */
function renderTeacher(){
  const room = rooms[state.teacherRoomCode];
  if(!room) return;
  room.teacherAlerts = room.teacherAlerts || [];
  renderTeacherAvisosCard(room);
  const total = room.students.reduce((sum,s)=>sum+s.coins,0);
  const queue = room.students.filter(s=>s.mission && s.mission.status==='pendente')
    .sort((a,b)=>{
      if(a.mission.presentationDate !== b.mission.presentationDate) return a.mission.presentationDate.localeCompare(b.mission.presentationDate);
      return a.mission.requestedAt - b.mission.requestedAt;
    });
  const authorized = room.students.filter(s=>s.mission && s.mission.status==='autorizada');

  // sempre atualiza o avatar/nome com base no dono real DESSA sala — nunca fica "grudado" de uma sala anterior
  const ownerInitial = (room.teacherName || '?')[0].toUpperCase();
  const teacherAvatarEl = document.getElementById('teacherAvatar');
  if(teacherAvatarEl) teacherAvatarEl.textContent = ownerInitial;

  document.getElementById('teacherRoomName').textContent = room.name;
  document.getElementById('teacherRoomCodeBig').textContent = room.code;
  renderRoomQR('teacherRoomQR', room.code, 60);
  document.getElementById('teacherTotal').innerHTML = total + '<span>mol</span>';
  document.getElementById('teacherStudentCount').textContent = room.students.length;
  document.getElementById('teacherPendingCount').textContent = queue.length;
  renderMissionOrderList('teacherMissionOrderResumo', room);
  const bonusRequests = room.students.filter(s=>s.storeBonusActive && s.storeBonusActive.status==='pendente');
  const notifCount = queue.length + authorized.length + bonusRequests.length + room.teacherAlerts.filter(a=>a.type==='compra').length + getTotalUnreadForTeacher(room);
  const badge = document.getElementById('teacherNotifBadge');
  if(badge){ badge.style.display = notifCount > 0 ? 'flex' : 'none'; badge.textContent = notifCount > 9 ? '9+' : notifCount; }

  const alerts = document.getElementById('teacherMissionAlerts');
  alerts.innerHTML = '';

  if(authorized.length){
    authorized.forEach(s=>{
      const div = document.createElement('div');
      div.className = 'teacher-mission-alert';
      div.style.borderColor = 'rgba(63,182,95,.35)'; div.style.background = 'rgba(63,182,95,.08)'; div.style.flexDirection = 'column'; div.style.alignItems = 'stretch';
      div.innerHTML = `<p style="margin-bottom:4px; flex:unset;">${s.nome} — ${MISSION_TYPES[s.mission.type].title} · 📅 ${formatDateFriendly(s.mission.presentationDate)} (autorizada)</p>
        <p style="font-size:11px; color:var(--gray); margin-bottom:8px; flex:unset;">Quanto melhorou a nota?</p>
        <div style="display:flex; gap:6px;">
          <button style="flex:1; background:#8A8A8A;" onclick="completeMission('${s.matricula}', 0)">Sem melhoria</button>
          <button style="flex:1; background:var(--blue);" onclick="completeMission('${s.matricula}', 0.5)">+0,5</button>
          <button style="flex:1; background:var(--green);" onclick="completeMission('${s.matricula}', 1.0)">+1,0</button>
        </div>`;
      alerts.appendChild(div);
    });
  }

  if(bonusRequests.length){
    bonusRequests.forEach(s=>{
      const entryIdx = s.notaHistory.findIndex(h=>h.id === s.storeBonusActive.entryId);
      const entry = entryIdx > -1 ? s.notaHistory[entryIdx] : null;
      const label = entry ? provaLabel(s, entryIdx) : '—';
      const div = document.createElement('div');
      div.className = 'teacher-mission-alert';
      div.style.borderColor = 'rgba(59,125,240,.3)'; div.style.background = 'rgba(59,125,240,.08)';
      div.innerHTML = `<p>${s.nome} pediu <b>+${s.storeBonusActive.value.toFixed(1)}</b> na ${label} (${entry?entry.nota.toFixed(1):'—'})</p>
        <button style="background:var(--blue);" onclick="approveBonus('${s.matricula}')">Aprovar</button>
        <button style="background:var(--red); margin-left:6px;" onclick="rejectBonus('${s.matricula}')">Recusar</button>`;
      alerts.appendChild(div);
    });
  }

  if(queue.length){
    queue.forEach((s,i)=>{
      const div = document.createElement('div');
      div.className = 'teacher-mission-alert';
      div.innerHTML = `<p>${s.nome} pediu <b>${MISSION_TYPES[s.mission.type].title}</b> · 📅 ${formatDateFriendly(s.mission.presentationDate)}</p>
        <button onclick="authorizeMission('${s.matricula}')">Autorizar</button>
        <button style="background:var(--red); margin-left:6px;" onclick="rejectMission('${s.matricula}')">Recusar</button>`;
      alerts.appendChild(div);
    });
  }

  const purchaseAlerts = room.teacherAlerts.filter(a=>a.type==='compra').slice(0,6);  purchaseAlerts.forEach(a=>{
    const div = document.createElement('div');
    div.className = 'teacher-mission-alert';
    div.style.borderColor = 'rgba(46,196,182,.3)'; div.style.background = 'rgba(46,196,182,.07)';
    div.innerHTML = `<p>🛍️ ${a.nome} resgatou "${a.detail}" (${a.cost} mol)</p>`;
    alerts.appendChild(div);
  });

  const avisosComNovo = getAvisos(room).filter(a => getUnreadForTeacher(a) > 0);
  avisosComNovo.forEach(a=>{
    const div = document.createElement('div');
    div.className = 'teacher-mission-alert';
    div.style.borderColor = 'rgba(59,125,240,.3)'; div.style.background = 'rgba(59,125,240,.08)';
    div.innerHTML = `<p>💬 ${getUnreadForTeacher(a)} comentário(s) novo(s) em "${a.titulo}"</p><button style="background:var(--blue);" onclick="closeRewardsManager(); openAvisoDetail(${a.id});">Ver</button>`;
    alerts.appendChild(div);
  });

  const container = document.getElementById('teacherStudentList');
  container.innerHTML = '';

  if(room.students.length === 0){
    container.innerHTML = `<p style="font-size:12.5px; color:var(--gray); text-align:center; padding:20px 0;">Nenhum aluno entrou ainda. Compartilha o código <b>${room.code}</b> com a turma.</p>`;
    return;
  }

  room.students.forEach(s=>{
    const isOpen = state.expandedStudent === s.matricula;
    const isSelected = state.selectedStudents.includes(s.matricula);
    const card = document.createElement('div');
    card.className = 'student-manage';

    const catRows = Object.keys(CATEGORY_META).map(catKey=>{
      const meta = CATEGORY_META[catKey];
      const val = s.categorias[catKey] || 0;
      return `<div class="cat-row">
        <div class="ic">${meta.icon}</div>
        <div class="lbl">${meta.label}</div>
        <div class="val ${val>=0?'pos':'neg'}">${val>=0?'+':''}${val}</div>
        <div class="stepper">
          <button class="minus" onclick="adjustCategory('${s.matricula}','${catKey}',-1)">−</button>
          <button class="plus" onclick="adjustCategory('${s.matricula}','${catKey}',1)">+</button>
        </div>
      </div>`;
    }).join('');

    const checkboxHtml = state.selectMode
      ? `<input type="checkbox" onclick="event.stopPropagation(); toggleSelectStudent('${s.matricula}')" ${isSelected?'checked':''} style="width:19px; height:19px; accent-color:var(--orange); margin-right:2px;">`
      : '';

    card.innerHTML = `
      <div class="sm-top" onclick="${state.selectMode ? `toggleSelectStudent('${s.matricula}')` : `toggleStudent('${s.matricula}')`}">
        ${checkboxHtml}
        <div class="rank-avatar">${s.nome[0].toUpperCase()}</div>
        <div class="sm-name"><p>${s.nome}</p><span>${(()=>{const l=getLatestNota(s); return l ? formatNotaComBonus(l.nota, l.bonus) : 'sem nota'; })()}</span></div>
        <div class="sm-balance">${s.coins} mol</div>
        <div class="sm-chevron ${isOpen?'open':''}">▾</div>
      </div>
      <div class="sm-detail ${isOpen && !state.selectMode?'open':''}">
        ${catRows}
        <div class="nota-row">
          <input type="text" id="notaInput-${s.matricula}" placeholder="Nova nota" value="${s.nota.toFixed(1)}">
          <button onclick="setNota('${s.matricula}')">Lançar nota</button>
        </div>
        <p style="text-align:right; margin-top:12px;"><button onclick="event.stopPropagation(); openRewardsManager('${s.matricula}')" style="background:rgba(46,196,182,.12); color:var(--orange); border:none; padding:8px 14px; border-radius:11px; font-family:inherit; font-weight:700; font-size:12px; cursor:pointer;">Gerenciar aluno</button></p>
      </div>`;
    container.appendChild(card);
  });
}

function toggleSelectMode(){
  state.selectMode = !state.selectMode;
  state.selectedStudents = [];
  if(!state.bulkCategory) state.bulkCategory = 'fardamento';
  document.getElementById('selectModeToggle').textContent = state.selectMode ? 'Cancelar seleção' : 'Selecionar vários';
  document.getElementById('bulkActionBar').style.display = state.selectMode ? 'block' : 'none';
  if(state.selectMode) renderBulkCategoryChips();
  renderTeacher();
}

const BULK_CATEGORIES = ['participacao','atividades','comportamento','fardamento']; // frequência tem tela própria (chamada)

function renderBulkCategoryChips(){
  const box = document.getElementById('bulkCategoryChips');
  box.innerHTML = '';
  BULK_CATEGORIES.forEach(catKey=>{
    const meta = CATEGORY_META[catKey];
    const chip = document.createElement('button');
    const active = state.bulkCategory === catKey;
    chip.style.cssText = `display:flex; align-items:center; gap:5px; border:none; border-radius:9px; padding:7px 10px; font-size:11px; font-weight:700; font-family:inherit; cursor:pointer; background:${active?'var(--orange)':'#14424E'}; color:${active?'#fff':'#B9B9B9'};`;
    chip.innerHTML = `<span style="display:flex; font-size:13px;">${meta.icon}</span>${meta.label}`;
    chip.onclick = ()=>{ state.bulkCategory = catKey; renderBulkCategoryChips(); };
    box.appendChild(chip);
  });
}

function toggleSelectStudent(matricula){
  const idx = state.selectedStudents.indexOf(matricula);
  if(idx === -1) state.selectedStudents.push(matricula); else state.selectedStudents.splice(idx,1);
  document.getElementById('bulkCount').textContent = state.selectedStudents.length;
  renderTeacher();
}

function applyBulk(sign){
  const room = rooms[state.teacherRoomCode];
  if(state.selectedStudents.length === 0){ showToast('Seleciona pelo menos um aluno'); return; }
  state.selectedStudents.forEach(matricula=>{
    const s = room.students.find(x=>x.matricula===matricula);
    if(!s) return;
    s.categorias[state.bulkCategory] = (s.categorias[state.bulkCategory]||0) + sign;
    s.coins = Math.max(0, s.coins + sign);
    logActivity(s, CATEGORY_META[state.bulkCategory].label, sign, CATEGORY_META[state.bulkCategory].icon);
  });
  showToast((sign>0?'+':'') + sign + ' mol-eda · ' + CATEGORY_META[state.bulkCategory].label + ' pra ' + state.selectedStudents.length + ' aluno(s)');
  toggleSelectMode();
}

function applyBulkToAll(){
  const room = rooms[state.teacherRoomCode];
  if(room.students.length === 0) return;
  room.students.forEach(s=>{
    s.categorias[state.bulkCategory] = (s.categorias[state.bulkCategory]||0) + 1;
    s.coins += 1;
    logActivity(s, CATEGORY_META[state.bulkCategory].label, 1, CATEGORY_META[state.bulkCategory].icon);
  });
  showToast('+1 mol-eda · ' + CATEGORY_META[state.bulkCategory].label + ' pra turma inteira (' + room.students.length + ' alunos)');
  toggleSelectMode();
}

let rewardsManagerMatricula = null;
let editingNotaEntryId = null;

function openRewardsManager(matricula){
  rewardsManagerMatricula = matricula;
  document.getElementById('rewardsManagerOverlay').style.display = 'flex';
  renderStudentCard(matricula);
}

function closeRewardsManager(){
  document.getElementById('rewardsManagerOverlay').style.display = 'none';
  rewardsManagerMatricula = null;
  editingNotaEntryId = null;
}

function getCardStudent(){
  const room = rooms[state.teacherRoomCode];
  return room ? room.students.find(x=>x.matricula===rewardsManagerMatricula) : null;
}

function renderStudentCard(matricula){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s) return;

  document.getElementById('studentCardAvatar').textContent = s.nome[0].toUpperCase();
  document.getElementById('studentCardName').textContent = s.nome;
  document.getElementById('studentCardRoom').textContent = room.name;

  const content = document.getElementById('studentCardContent');
  content.innerHTML = '';

  // --- Saldo + nota atual ---
  const latest = getLatestNota(s);
  const notaDisplay = latest ? formatNotaComBonus(latest.nota, latest.bonus) : '—';
  content.innerHTML += `
    <div class="balance-card" style="margin-bottom:18px;">
      <div class="balance-label"><span class="coin-dot"></span> Saldo de mol-edas</div>
      <div class="balance-value">${s.coins}<span>mol</span></div>
      <div class="balance-sub"><div>Nota atual<strong>${notaDisplay}</strong></div></div>
    </div>`;

  // --- Categorias (editável) ---
  const catRows = Object.keys(CATEGORY_META).map(catKey=>{
    const meta = CATEGORY_META[catKey];
    const val = s.categorias[catKey] || 0;
    return `<div class="cat-row">
      <div class="ic">${meta.icon}</div>
      <div class="lbl">${meta.label}</div>
      <div class="val ${val>=0?'pos':'neg'}">${val>=0?'+':''}${val}</div>
      <div class="stepper">
        <button class="minus" onclick="adjustCategory('${s.matricula}','${catKey}',-1); renderStudentCard('${s.matricula}');">−</button>
        <button class="plus" onclick="adjustCategory('${s.matricula}','${catKey}',1); renderStudentCard('${s.matricula}');">+</button>
      </div>
    </div>`;
  }).join('');
  content.innerHTML += `<div class="section-title">Categorias</div><div style="background:var(--gray-light); border-radius:16px; padding:0 12px; margin-bottom:20px;">${catRows}</div>`;

  // --- Notas lançadas (mais recente primeiro, editável) ---
  content.innerHTML += `<div class="section-title">Notas lançadas</div>`;
  const notasBox = document.createElement('div');
  notasBox.style.marginBottom = '20px';
  notasBox.innerHTML = `
    <div class="nota-row" style="border-top:none; padding-top:0;">
      <input type="text" id="cardNewNota" placeholder="Nova nota">
      <button onclick="cardSetNota('${s.matricula}')">Lançar</button>
    </div>`;
  if(s.notaHistory.length === 0){
    notasBox.innerHTML += `<p style="font-size:12px; color:var(--gray); text-align:center; padding:10px 0;">Nenhuma nota lançada ainda.</p>`;
  } else {
    s.notaHistory.forEach((h, idx)=>{
      const row = document.createElement('div');
      const isEditing = editingNotaEntryId === h.id;
      row.className = 'activity-item';
      if(isEditing){
        row.innerHTML = `<div class="activity-ic pos">📊</div>
          <div class="activity-text"><p>${provaLabel(s, idx)}</p><span>${h.date}</span></div>
          <input type="text" id="editNotaInput-${h.id}" value="${h.nota.toFixed(1)}" style="width:56px; padding:6px 8px; border-radius:8px; border:1.5px solid #CCCCCC; background:#FFFFFF; color:#161616; font-family:inherit; font-size:12.5px; margin-right:6px;">
          <button onclick="saveEditedNota('${s.matricula}', ${h.id})" style="background:var(--green); color:#fff; border:none; padding:6px 10px; border-radius:8px; font-family:inherit; font-weight:700; font-size:11px; cursor:pointer;">Salvar</button>`;
      } else {
        row.innerHTML = `<div class="activity-ic pos">📊</div>
          <div class="activity-text"><p>${provaLabel(s, idx)} — ${formatNotaComBonus(h.nota, h.bonus)}</p><span>${h.date}</span></div>
          <div class="activity-amount pos" style="margin-right:8px;">+${h.mol}</div>
          <a onclick="startEditNota('${s.matricula}', ${h.id})" style="font-size:12.5px; color:var(--gray); text-decoration:underline; cursor:pointer;">editar</a>
          <a onclick="deleteNotaEntry('${s.matricula}', ${h.id})" style="font-size:12.5px; color:var(--red); text-decoration:underline; cursor:pointer; margin-left:8px;">excluir</a>`;
      }
      notasBox.appendChild(row);
    });
  }
  content.appendChild(notasBox);

  // --- Bônus concedidos ---
  content.innerHTML += `<div class="section-title">Bônus de nota concedidos</div>`;
  const bonusBox = document.createElement('div');
  bonusBox.style.marginBottom = '20px';
  const bonusEntries = s.notaHistory.filter(h=>h.bonus > 0);
  if(bonusEntries.length === 0){
    bonusBox.innerHTML = `<p style="font-size:12px; color:var(--gray); text-align:center; padding:10px 0;">Nenhum bônus concedido ainda.</p>`;
  } else {
    bonusEntries.forEach(h=>{
      const realIdx = s.notaHistory.indexOf(h);
      const label = provaLabel(s, realIdx);
      const row = document.createElement('div');
      row.style.cssText = 'display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid var(--gray-light);';
      row.innerHTML = `<div><p style="font-size:12.5px; font-weight:600;">${label} <span style="color:var(--green);">+${h.bonus.toFixed(1)}</span></p><span style="font-size:10.5px; color:var(--gray);">${h.bonusReason || 'Concedido pelo professor'} · ${h.date}</span></div>
        <button style="background:rgba(230,80,80,.12); color:var(--red); border:none; padding:6px 10px; border-radius:9px; font-family:inherit; font-weight:700; font-size:11px; cursor:pointer;" onclick="revertNotaBonus('${s.matricula}', ${h.id})">Reverter</button>`;
      bonusBox.appendChild(row);
    });
  }
  content.appendChild(bonusBox);

  // --- Missão de recuperação ---
  content.innerHTML += `<div class="section-title">Missão de recuperação</div>`;
  const missionBox = document.createElement('div');
  missionBox.style.marginBottom = '20px';
  if(!s.mission){
    missionBox.innerHTML = `<p style="font-size:12px; color:var(--gray); text-align:center; padding:10px 0;">Nenhuma missão ativa no momento.</p>`;
  } else {
    const m = s.mission;
    const statusLabel = m.status==='pendente' ? 'Aguardando aprovação' : m.status==='autorizada' ? 'Autorizada — apresentando' : 'Concluída';
    let actions = '';
    if(m.status === 'pendente'){
      actions = `<button style="background:var(--blue); color:#fff; border:none; padding:8px 12px; border-radius:9px; font-family:inherit; font-weight:700; font-size:11.5px; cursor:pointer;" onclick="authorizeMission('${s.matricula}'); renderStudentCard('${s.matricula}');">Autorizar</button>
        <button style="background:var(--red); color:#fff; border:none; padding:8px 12px; border-radius:9px; font-family:inherit; font-weight:700; font-size:11.5px; cursor:pointer; margin-left:6px;" onclick="rejectMission('${s.matricula}'); renderStudentCard('${s.matricula}');">Recusar</button>`;
    } else if(m.status === 'autorizada'){
      actions = `<div style="display:flex; gap:6px; margin-top:8px;">
        <button style="flex:1; background:#8A8A8A; color:#fff; border:none; padding:8px; border-radius:9px; font-family:inherit; font-weight:700; font-size:11px; cursor:pointer;" onclick="completeMission('${s.matricula}', 0); renderStudentCard('${s.matricula}');">Sem melhoria</button>
        <button style="flex:1; background:var(--blue); color:#fff; border:none; padding:8px; border-radius:9px; font-family:inherit; font-weight:700; font-size:11px; cursor:pointer;" onclick="completeMission('${s.matricula}', 0.5); renderStudentCard('${s.matricula}');">+0,5</button>
        <button style="flex:1; background:var(--green); color:#fff; border:none; padding:8px; border-radius:9px; font-family:inherit; font-weight:700; font-size:11px; cursor:pointer;" onclick="completeMission('${s.matricula}', 1.0); renderStudentCard('${s.matricula}');">+1,0</button>
      </div>`;
    }
    missionBox.innerHTML = `<div style="background:var(--gray-light); border-radius:16px; padding:14px;">
      <p style="font-size:12.5px; font-weight:700; margin-bottom:2px;">${MISSION_TYPES[m.type].title} · ${statusLabel}</p>
      <p style="font-size:11px; color:var(--gray); margin-bottom:8px;">📅 ${formatDateFriendly(m.presentationDate)}</p>
      ${actions}
      ${m.status !== 'pendente' ? `<p style="margin-top:8px;"><a onclick="revertMissionState('${s.matricula}')" style="font-size:11px; color:var(--red); text-decoration:underline; cursor:pointer;">Reverter status da missão</a></p>` : ''}
    </div>`;
  }
  content.appendChild(missionBox);

  // --- Ajuste manual de mol-edas ---
  content.innerHTML += `<div class="section-title">Ajuste manual de mol-edas</div>`;
  const manualBox = document.createElement('div');
  manualBox.innerHTML = `
    <div style="display:flex; gap:8px; margin-bottom:6px;">
      <input type="number" id="rewardsManualAmount" placeholder="Ex: 5" style="flex:1; padding:11px 13px; border-radius:12px; border:1.5px solid #CCCCCC; background:#FFFFFF; color:#161616; font-family:inherit; font-size:13px;">
      <button style="background:rgba(63,182,95,.15); color:var(--green); border:none; padding:0 16px; border-radius:12px; font-family:inherit; font-weight:700; font-size:13px; cursor:pointer;" onclick="applyManualMolAdjust(1)">+ Add</button>
      <button style="background:rgba(230,80,80,.15); color:var(--red); border:none; padding:0 16px; border-radius:12px; font-family:inherit; font-weight:700; font-size:13px; cursor:pointer;" onclick="applyManualMolAdjust(-1)">− Tirar</button>
    </div>
    <p style="font-size:10.5px; color:var(--gray);">Use pra corrigir um valor errado, sem precisar amarrar numa categoria específica.</p>`;
  content.appendChild(manualBox);
}

function cardSetNota(matricula){
  const input = document.getElementById('cardNewNota');
  const nota = parseFloat(input.value.replace(',', '.'));
  if(isNaN(nota)){ showToast('Digita uma nota válida'); return; }
  if(nota < 0 || nota > 10){ showToast('A nota tem que ficar entre 0 e 10'); return; }
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  const molGanho = molFromNota(nota);
  s.nota = nota;
  s.coins += molGanho;
  s.notaHistory.unshift({ id: Date.now()+Math.random(), nota, date: new Date().toLocaleDateString('pt-BR'), mol: molGanho, bonus: 0 });
  clearBonusOnNewNota(s);
  logActivity(s, 'Nota lançada: ' + nota.toFixed(1), molGanho, '📊');
  showToast('Nota ' + nota.toFixed(1) + ' → +' + molGanho + ' mol-edas');
  renderTeacher();
  renderStudentCard(matricula);
}

function deleteNotaEntry(matricula, entryId){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s) return;
  const entry = s.notaHistory.find(h=>h.id===entryId);
  if(!entry) return;
  s.coins = Math.max(0, s.coins - entry.mol);
  s.notaHistory = s.notaHistory.filter(h=>h.id!==entryId);
  const newLatest = getLatestNota(s);
  s.nota = newLatest ? newLatest.nota : 0;
  if(s.storeBonusActive && s.storeBonusActive.entryId === entryId) s.storeBonusActive = null;
  logActivity(s, 'Nota excluída (correção do professor)', -entry.mol, '🗑️');
  showToast('Nota removida do histórico de ' + s.nome);
  renderTeacher();
  renderStudentCard(matricula);
}

function startEditNota(matricula, entryId){
  editingNotaEntryId = entryId;
  renderStudentCard(matricula);
}

function saveEditedNota(matricula, entryId){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  const entry = s.notaHistory.find(h=>h.id===entryId);
  const input = document.getElementById('editNotaInput-' + entryId);
  const newNota = parseFloat(input.value.replace(',', '.'));
  if(isNaN(newNota) || newNota < 0 || newNota > 10){ showToast('Digita uma nota entre 0 e 10'); return; }

  const newMol = molFromNota(newNota);
  const molDiff = newMol - entry.mol;
  s.coins = Math.max(0, s.coins + molDiff);
  entry.nota = newNota;
  entry.mol = newMol;
  // se essa é a nota mais recente, mantém s.nota em sincronia
  if(s.notaHistory[0] === entry) s.nota = newNota;
  logActivity(s, 'Nota corrigida: ' + newNota.toFixed(1), molDiff, '✏️');
  editingNotaEntryId = null;
  showToast('Nota corrigida para ' + newNota.toFixed(1));
  renderTeacher();
  renderStudentCard(matricula);
}

function applyManualMolAdjust(sign){
  const s = getCardStudent();
  if(!s) return;
  const amount = parseFloat(document.getElementById('rewardsManualAmount').value);
  if(isNaN(amount) || amount <= 0){ showToast('Digita uma quantidade válida'); return; }
  const delta = sign * Math.round(amount);
  s.coins = Math.max(0, s.coins + delta);
  logActivity(s, 'Ajuste manual do professor', delta, '🛠️');
  renderTeacher();
  renderStudentCard(rewardsManagerMatricula);
  showToast((delta>0?'+':'') + delta + ' mol-eda(s) · ajuste manual · ' + s.nome);
}

function revertNotaBonus(matricula, entryId){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s) return;
  const entry = s.notaHistory.find(h=>h.id===entryId);
  if(!entry) return;
  const removedValue = entry.bonus;
  entry.bonus = 0;
  logActivity(s, 'Bônus de nota revertido (correção do professor)', 0, '↩️');
  showToast('Bônus de +' + removedValue.toFixed(1) + ' revertido para ' + s.nome);
  renderTeacher();
  renderStudentCard(matricula);
}

function revertMissionState(matricula){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s || !s.mission) return;
  s.mission = null;
  logActivity(s, 'Status da missão revertido (correção do professor)', 0, '↩️');
  showToast('Missão revertida para ' + s.nome);
  renderTeacher();
  renderStudentCard(matricula);
}

function toggleStudent(matricula){
  state.expandedStudent = state.expandedStudent === matricula ? null : matricula;
  renderTeacher();
}

function adjustCategory(matricula, catKey, value){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s) return;
  s.categorias[catKey] = (s.categorias[catKey]||0) + value;
  s.coins = Math.max(0, s.coins + value);
  logActivity(s, CATEGORY_META[catKey].label, value, CATEGORY_META[catKey].icon);
  renderTeacher();
  showToast((value>0?'+':'') + value + ' mol-eda · ' + CATEGORY_META[catKey].label + ' · ' + s.nome);
}

function clearBonusOnNewNota(s){
  if(!s.storeBonusActive) return;
  if(s.storeBonusActive.status === 'pendente'){
    const item = STORE_ITEMS.find(it=>it.bonusValue === s.storeBonusActive.value);
    if(item) s.coins += item.cost;
    logActivity(s, 'Pedido de aumento cancelado (nova nota lançada) — mol-edas devolvidas', item?item.cost:0, '↩️');
  }
  s.storeBonusActive = null;
}

function setNota(matricula){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s) return;
  const input = document.getElementById('notaInput-' + matricula);
  const nota = parseFloat(input.value.replace(',', '.'));
  if(isNaN(nota)){ showToast('Digita uma nota válida'); return; }
  if(nota < 0 || nota > 10){ showToast('A nota tem que ficar entre 0 e 10'); return; }
  const molGanho = molFromNota(nota);
  s.nota = nota;
  s.coins += molGanho;
  s.notaHistory.unshift({ id: Date.now()+Math.random(), nota, date: new Date().toLocaleDateString('pt-BR'), mol: molGanho, bonus: 0 });
  clearBonusOnNewNota(s);
  logActivity(s, 'Nota lançada: ' + nota.toFixed(1), molGanho, '📊');
  renderTeacher();
  showToast('Nota ' + nota.toFixed(1) + ' → +' + molGanho + ' mol-edas · ' + s.nome);
}

function authorizeMission(matricula){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s || !s.mission || s.mission.status !== 'pendente') return;
  s.mission.status = 'autorizada';
  logActivity(s, 'Missão autorizada: ' + MISSION_TYPES[s.mission.type].title, 0, '🎯');
  renderTeacher();
  showToast('Missão autorizada para ' + s.nome);
}

function rejectMission(matricula){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s || !s.mission) return;
  const missionTitle = MISSION_TYPES[s.mission.type].title;
  s.mission = null;
  logActivity(s, 'Missão recusada: ' + missionTitle, 0, '🚫');
  renderTeacher();
  showToast('Missão recusada para ' + s.nome);
}

function completeMission(matricula, bonusValue){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s || !s.mission || s.mission.status !== 'autorizada') return;
  const missionTitle = MISSION_TYPES[s.mission.type].title;
  s.coins += 2;
  if(bonusValue > 0){
    let latest = getLatestNota(s);
    if(!latest){
      // aluno ainda não tinha nenhuma nota lançada (nota 0 implícita) — cria um registro pra guardar o bônus
      latest = { id: Date.now()+Math.random(), nota: 0, date: 'Antes da 1ª nota lançada', mol: 0, bonus: 0 };
      s.notaHistory.unshift(latest);
    }
    latest.bonus = (latest.bonus||0) + bonusValue;
  }
  s.mission = null;
  const bonusText = bonusValue > 0 ? (' · +' + bonusValue.toFixed(1) + ' na nota') : '';
  logActivity(s, 'Missão concluída: ' + missionTitle + bonusText, 2, '✅');
  renderTeacher();
  showToast('Missão concluída · +2 mol-edas' + bonusText + ' · ' + s.nome);
}

async function approveBonus(matricula){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s || !s.storeBonusActive) return;
  if(room.isCloud && s.storeBonusActive.requestId){
    const request = s.storeBonusActive;
    const cost = request.cost || STORE_ITEMS.find(it=>it.bonusValue === request.value)?.cost || 0;
    if(s.coins < cost){ showToast(s.nome + ' não tem saldo suficiente para esse pedido'); return; }
    const history = (s.notaHistory||[]).map(entry=>({...entry}));
    const entry = history.find(item=>item.id === request.entryId);
    if(!entry){ showToast('A nota selecionada não existe mais'); return; }
    entry.bonus = (entry.bonus||0) + request.value;
    const activity = [{label:'Aumento de nota aprovado: +' + request.value.toFixed(1), amount:-cost, pos:false, icon:'📈', ts:Date.now()}, ...(s.activity||[])].slice(0,25);
    const progress = {
      coins:Math.max(0, s.coins-cost), nota:s.nota, notaHistory:history,
      categorias:s.categorias||{}, activity,
      freqMarkedToday:s.freqMarkedToday||null,
    };
    try{
      const api = await firebaseApi();
      await api.resolveStoreBonusRequest(state.teacherRoomCode, request.requestId, s.uid, progress, 'aplicado');
      Object.assign(s, progress, {storeBonusActive:{...request, status:'aplicado'}});
      renderTeacher();
      showToast('Aumento aprovado para ' + s.nome + ' · ' + cost + ' mol-edas');
    }catch(error){
      showToast(error.message === 'REQUEST_ALREADY_RESOLVED'
        ? 'Esse pedido já foi resolvido em outro aparelho.'
        : 'Não consegui aprovar no Firebase. Confira a conexão e as regras.');
    }
    return;
  }
  const entry = s.notaHistory.find(h=>h.id === s.storeBonusActive.entryId);
  if(entry) entry.bonus = (entry.bonus||0) + s.storeBonusActive.value;
  s.storeBonusActive.status = 'aplicado';
  logActivity(s, 'Aumento de nota aprovado: +' + s.storeBonusActive.value.toFixed(1), 0, '📈');
  renderTeacher();
  showToast('Aumento aprovado para ' + s.nome);
}

async function rejectBonus(matricula){
  const room = rooms[state.teacherRoomCode];
  const s = room.students.find(x=>x.matricula===matricula);
  if(!s || !s.storeBonusActive) return;
  if(room.isCloud && s.storeBonusActive.requestId){
    const request = s.storeBonusActive;
    try{
      const api = await firebaseApi();
      await api.resolveStoreBonusRequest(state.teacherRoomCode, request.requestId, s.uid, null, 'rejeitado');
      s.storeBonusActive = null;
      renderTeacher();
      showToast('Pedido recusado para ' + s.nome + '. Nenhuma mol-eda foi cobrada.');
    }catch(error){
      showToast(error.message === 'REQUEST_ALREADY_RESOLVED'
        ? 'Esse pedido já foi resolvido em outro aparelho.'
        : 'Não consegui recusar no Firebase. Confira a conexão e as regras.');
    }
    return;
  }
  const item = STORE_ITEMS.find(it=>it.bonusValue === s.storeBonusActive.value);
  const refund = item ? item.cost : 0;
  s.coins += refund;
  logActivity(s, 'Aumento de nota recusado — mol-edas devolvidas', refund, '↩️');
  s.storeBonusActive = null;
  renderTeacher();
  showToast('Recusado e mol-edas devolvidas para ' + s.nome);
}

/* =====================================================================
   IMPORTAR NOTAS (formato universal nome,nota — qualquer escola/sistema)
   ===================================================================== */
function toggleImport(){
  const box = document.getElementById('importBox');
  const isHidden = box.style.display === 'none';
  box.style.display = isHidden ? 'block' : 'none';
}

// Parser flexível: aceita "Nome,Nota" ou "Nome Sobrenome 7.5" (nota como último token)
function parseNameNotaText(text){
  const lines = text.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  const pairs = [];
  let invalid = 0;
  lines.forEach(line=>{
    let nome, notaRaw;
    if(line.includes(',')){
      const lastComma = line.lastIndexOf(',');
      nome = line.slice(0, lastComma).trim();
      notaRaw = line.slice(lastComma + 1).trim();
    } else {
      const match = line.match(/^(.*\S)\s+([\d.,]+)\s*$/);
      if(!match){ invalid++; return; }
      nome = match[1].trim();
      notaRaw = match[2];
    }
    const nota = parseFloat(notaRaw.replace(',', '.'));
    if(isNaN(nota) || !nome){ invalid++; return; }
    if(nota < 0 || nota > 10){ invalid++; return; }
    pairs.push({ nome, nota });
  });
  return { pairs, invalid };
}

let pendingImportPairs = [];

function analisarTextoColado(){
  const raw = document.getElementById('importTextarea').value.trim();
  if(!raw){ showToast('Cola o texto primeiro'); return; }
  const { pairs, invalid } = parseNameNotaText(raw);
  openImportPreview(pairs, invalid, 'texto colado');
}

async function handleImportFile(event){
  const file = event.target.files[0];
  if(!file) return;
  const ext = file.name.split('.').pop().toLowerCase();

  try{
    if(ext === 'csv'){
      const text = await file.text();
      const { pairs, invalid } = parseNameNotaText(text);
      openImportPreview(pairs, invalid, file.name);
    } else if(ext === 'xlsx' || ext === 'xls'){
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer, { type: 'array' });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      const asText = rows.map(r => (r[0] ?? '') + ',' + (r[1] ?? '')).join('\n');
      const { pairs, invalid } = parseNameNotaText(asText);
      openImportPreview(pairs, invalid, file.name);
    } else if(ext === 'pdf'){
      showToast('Lendo o PDF...');
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      const buffer = await file.arrayBuffer();
      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
      let fullText = '';
      for(let p=1; p<=pdf.numPages; p++){
        const page = await pdf.getPage(p);
        const content = await page.getTextContent();
        const pageLines = {};
        content.items.forEach(item=>{
          const y = Math.round(item.transform[5]);
          if(!pageLines[y]) pageLines[y] = [];
          pageLines[y].push(item.str);
        });
        const orderedY = Object.keys(pageLines).map(Number).sort((a,b)=>b-a);
        orderedY.forEach(y=>{ fullText += pageLines[y].join(' ') + '\n'; });
      }
      const { pairs, invalid } = parseNameNotaText(fullText);
      openImportPreview(pairs, invalid, file.name, true);
    } else {
      showToast('Formato não suportado — usa CSV, Excel ou PDF');
    }
  } catch(err){
    showToast('Não consegui ler esse arquivo. Tenta outro formato.');
  }
  event.target.value = '';
}

function openImportPreview(pairs, invalid, sourceName, isPdf){
  const room = rooms[state.teacherRoomCode];
  pendingImportPairs = pairs;

  const foundInRoom = pairs.filter(p => room.students.some(s => s.nome.trim().toLowerCase() === p.nome.trim().toLowerCase()));
  const notFoundCount = pairs.length - foundInRoom.length;

  if(pairs.length === 0){
    showToast('Não encontrei nenhum nome + nota nesse arquivo' + (isPdf ? ' (PDF pode ser uma imagem escaneada)' : ''));
    return;
  }

  document.getElementById('importPreviewSummary').innerHTML =
    `<b>${pairs.length}</b> nota(s) encontrada(s) em "${sourceName}"` +
    (notFoundCount ? `<br><span style="color:var(--red);">${notFoundCount} nome(s) não batem com nenhum aluno dessa turma</span>` : '') +
    (invalid ? `<br><span style="color:var(--gray);">${invalid} linha(s) ignorada(s) (formato não reconhecido)</span>` : '');

  const list = document.getElementById('importPreviewList');
  list.innerHTML = pairs.map(p=>{
    const exists = room.students.some(s => s.nome.trim().toLowerCase() === p.nome.trim().toLowerCase());
    return `<div style="display:flex; justify-content:space-between; padding:9px 0; border-bottom:1px solid var(--gray-light); font-size:12.5px;">
      <span style="${exists?'':'color:var(--red);'}">${p.nome}</span>
      <span style="font-weight:700; color:${exists?'var(--orange)':'var(--red)'};">${p.nota.toFixed(1)}</span>
    </div>`;
  }).join('');

  document.getElementById('importPreviewOverlay').style.display = 'flex';
}

function closeImportPreview(){
  document.getElementById('importPreviewOverlay').style.display = 'none';
  pendingImportPairs = [];
}

function confirmImportPreview(){
  const room = rooms[state.teacherRoomCode];
  let updated = 0, notFound = 0;

  pendingImportPairs.forEach(({nome, nota})=>{
    const student = room.students.find(s => s.nome.trim().toLowerCase() === nome.trim().toLowerCase());
    if(!student){ notFound++; return; }
    const mol = molFromNota(nota);
    student.nota = nota;
    student.coins += mol;
    student.notaHistory.unshift({ id: Date.now()+Math.random(), nota, date: new Date().toLocaleDateString('pt-BR'), mol, bonus: 0 });
    clearBonusOnNewNota(student);
    logActivity(student, 'Nota importada: ' + nota.toFixed(1), mol, '📊');
    updated++;
  });

  closeImportPreview();
  document.getElementById('importTextarea').value = '';
  renderTeacher();
  showToast(`${updated} nota(s) importada(s)` + (notFound ? `, ${notFound} nome(s) não encontrado(s)` : ''));
}

/* =====================================================================
   TOAST
   ===================================================================== */
/* =====================================================================
   ARRASTAR PRA FECHAR — pega a alça de qualquer bottom sheet e permite
   arrastar pra baixo pra fechar, além do X/Cancelar de sempre
   ===================================================================== */
function enableSwipeToClose(handleId, sheetId, closeFn){
  const handle = document.getElementById(handleId);
  const sheet = document.getElementById(sheetId);
  if(!handle || !sheet) return;
  let startY = 0, deltaY = 0, dragging = false;

  handle.addEventListener('touchstart', (e)=>{
    startY = e.touches[0].clientY;
    dragging = true;
    sheet.style.transition = 'none';
  }, {passive:true});

  handle.addEventListener('touchmove', (e)=>{
    if(!dragging) return;
    deltaY = e.touches[0].clientY - startY;
    if(deltaY < 0) deltaY = 0;
    sheet.style.transform = `translateY(${deltaY}px)`;
  }, {passive:true});

  handle.addEventListener('touchend', ()=>{
    if(!dragging) return;
    dragging = false;
    sheet.style.transition = 'transform .22s ease';
    if(deltaY > 110){
      sheet.style.transform = 'translateY(100%)';
      setTimeout(()=>{ closeFn(); sheet.style.transform=''; sheet.style.transition=''; }, 200);
    } else {
      sheet.style.transform = 'translateY(0)';
    }
    deltaY = 0;
  });
}

enableSwipeToClose('joinModalHandle', 'joinModalSheet', closeJoinModal);
enableSwipeToClose('notaPickerHandle', 'notaPickerSheet', closeNotaPicker);
enableSwipeToClose('datePickerHandle', 'datePickerSheet', closeDatePicker);
enableSwipeToClose('rewardsManagerHandle', 'rewardsManagerSheet', closeRewardsManager);
enableSwipeToClose('avisoDetailHandle', 'avisoDetailSheet', closeAvisoDetail);
enableSwipeToClose('avisoFormHandle', 'avisoFormSheet', closeAvisoForm);

// Se o app for aberto por um link com ?code=XXXX (ex: QR code externo, depois de hospedado),
// já pré-preenche o código da sala na tela de login.
(function checkLinkCode(){
  try{
    const params = new URLSearchParams(window.location.search);
    const linkCode = params.get('code');
    if(linkCode){
      const input = document.getElementById('loginRoomCode');
      if(input) input.value = linkCode.toUpperCase();
    }
  } catch(err){ /* sem problema, só não pré-preenche */ }
})();

let toastTimer;
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>t.classList.remove('show'), 2400);
}

setAuthMode('login');

window.addEventListener('molbank-firebase-ready', ()=>{
  const api = window.molbankFirebase;
  api.onAuthStateChanged(async user=>{
    if(!user || authBusy || state.uid) return;
    try{
      const profile = await api.getProfile(user.uid);
      if(profile) await finishFirebaseLogin(user, profile, new URLSearchParams(window.location.search).get('code') || '');
      else await api.signOut();
    } catch(error){
      setAuthMessage(firebaseErrorMessage(error));
    }
  });
}, {once:true});
