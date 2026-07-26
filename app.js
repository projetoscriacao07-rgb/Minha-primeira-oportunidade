/* ==========================================================================
   Minha Primeira Oportunidade — Motor da aplicação
   Site 100% estático (HTML/CSS/JS puro) para funcionar em GitHub Pages,
   sem necessidade de servidor. Progresso salvo em localStorage no
   navegador da Mayara (ver README para detalhes e limitações).
   ========================================================================== */

const STORAGE_KEY = 'mpo_state_v1';

function estadoPadrao() {
  return {
    nome: 'Mayara',
    onboardingConcluido: false,
    onboardingPasso: 0,
    iniciouEm: null,
    ultimoAcesso: null,
    diasSeguidos: 0,
    ultimoDia: null,
    portugues: {},
    matematica: {},
    redacao: {},
    redacoesEscritas: [],
    cursos: {},
    entrevistas: [],
    caderno: [],
    favoritos: [],
    conquistas: [],
    perfilComportamental: null
  };
}

function carregarEstado() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return estadoPadrao();
    return Object.assign(estadoPadrao(), JSON.parse(raw));
  } catch (e) {
    console.error('Não foi possível carregar o progresso salvo.', e);
    return estadoPadrao();
  }
}

let ESTADO = carregarEstado();

function salvar() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ESTADO));
  } catch (e) {
    console.error('Não foi possível salvar o progresso.', e);
  }
}

function registrarAcesso() {
  const hoje = new Date().toISOString().slice(0, 10);
  if (!ESTADO.iniciouEm) ESTADO.iniciouEm = hoje;
  if (ESTADO.ultimoDia !== hoje) {
    const ontem = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    ESTADO.diasSeguidos = ESTADO.ultimoDia === ontem ? (ESTADO.diasSeguidos + 1) : 1;
    ESTADO.ultimoDia = hoje;
  }
  ESTADO.ultimoAcesso = new Date().toISOString();
  salvar();
}

function desbloquearConquista(id) {
  if (!ESTADO.conquistas.includes(id)) {
    ESTADO.conquistas.push(id);
    salvar();
    mostrarConfete();
  }
}

function mostrarConfete() {
  const el = document.createElement('div');
  el.className = 'toast-conquista';
  el.innerHTML = '🎉 Conquista desbloqueada!';
  el.style.position = 'fixed';
  el.style.bottom = '24px';
  el.style.left = '50%';
  el.style.transform = 'translateX(-50%)';
  el.style.background = '#EC6FA9';
  el.style.color = '#fff';
  el.style.padding = '12px 20px';
  el.style.borderRadius = '24px';
  el.style.zIndex = '999';
  el.style.fontFamily = 'Poppins, sans-serif';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

/* ---------------------- Roteador ---------------------- */
function navegar(rota) {
  window.location.hash = rota;
}

function rotaAtual() {
  return window.location.ha
