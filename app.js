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
  return window.location.hash.replace('#', '') || (ESTADO.onboardingConcluido ? '/dashboard' : '/onboarding');
}

window.addEventListener('hashchange', renderizar);
window.addEventListener('DOMContentLoaded', () => {
  registrarAcesso();
  desbloquearConquista('primeiro_acesso');
  if (!window.location.hash) {
    navegar(ESTADO.onboardingConcluido ? '/dashboard' : '/onboarding');
  } else {
    renderizar();
  }
});

const app = () => document.getElementById('app');

function renderizar() {
  const rota = rotaAtual();
  const partes = rota.split('/').filter(Boolean);

  if (partes[0] === 'onboarding') return telaOnboarding();
  if (partes[0] === 'dashboard') return telaDashboard();
  if (partes[0] === 'cursos' && !partes[1]) return telaCursos();
  if (partes[0] === 'cursos' && partes[1]) return telaCursoDetalhe(partes[1]);
  if (partes[0] === 'portugues' && !partes[1]) return telaListaTemas('portugues', PORTUGUES, 'Português', '📖');
  if (partes[0] === 'portugues' && partes[1]) return telaTema('portugues', PORTUGUES, partes[1]);
  if (partes[0] === 'matematica' && !partes[1]) return telaListaTemas('matematica', MATEMATICA, 'Matemática', '🧮');
  if (partes[0] === 'matematica' && partes[1]) return telaTema('matematica', MATEMATICA, partes[1]);
  if (partes[0] === 'redacao' && !partes[1]) return telaListaTemas('redacao', REDACAO_TEMAS, 'Redação', '✍️');
  if (partes[0] === 'redacao' && partes[1]) return telaTemaRedacao(partes[1]);
  if (partes[0] === 'entrevistas' && !partes[1]) return telaEntrevistasInicio();
  if (partes[0] === 'entrevistas' && partes[1] === 'simulacao') return telaSimulacao();
  if (partes[0] === 'caderno') return telaCaderno();
  if (partes[0] === 'favoritos') return telaFavoritos();
  if (partes[0] === 'conquistas') return telaConquistas();
  if (partes[0] === 'desempenho') return telaDesempenho();
  if (partes[0] === 'configuracoes') return telaConfiguracoes();
  if (partes[0] === 'admin') return telaAdmin();

  return telaDashboard();
}

/* ---------------------- Componentes utilitários ---------------------- */
function topbar(titulo, voltarPara) {
  return `
    <div class="topbar">
      ${voltarPara ? `<button class="voltar" onclick="navegar('${voltarPara}')" aria-label="Voltar">←</button>` : ''}
      <h2 style="margin:0">${titulo}</h2>
    </div>`;
}

function barraProgresso(percentual) {
  return `<div class="barra-progresso"><div style="width:${percentual}%"></div></div>`;
}

/* ---------------------- Onboarding (Volume 2) ---------------------- */
function telaOnboarding() {
  const passo = ESTADO.onboardingPasso;
  const item = ONBOARDING[passo];

  if (!item) {
    ESTADO.onboardingConcluido = true;
    salvar();
    navegar('/dashboard');
    return;
  }

  if (item.tipo === 'questionario') {
    app().innerHTML = `
      <div class="tela">
        <span class="avatar-sah">👩🏻‍💼</span>
        <div class="msg sah"><span class="nome">Sah</span>${QUESTIONARIO_COMPORTAMENTAL.aviso}</div>
        <div class="aviso-pendente">Enquanto isso, você pode seguir para a próxima etapa da conversa. Essa etapa será liberada quando o conteúdo oficial for enviado.</div>
        <button class="btn" onclick="avancarOnboarding()">Continuar</button>
      </div>`;
    return;
  }

  const telaClasse = item.destaque ? 'tela tela-onboarding-destaque' : 'tela tela-onboarding';

  if (item.mensagens) {
    app().innerHTML = `
      <div class="${telaClasse}">
        ${barraProgresso(Math.round((passo / ONBOARDING.length) * 100))}
        <span class="avatar-sah">👩🏻‍💼</span>
        <div class="conversa">
          ${item.mensagens.map(m => `<div class="msg sah"><span class="nome">Sah</span>${m.negrito ? `<strong>${m.texto}</strong>` : m.texto}</div>`).join('')}
        </div>
        <div style="flex:1"></div>
        <button class="btn" onclick="avancarOnboarding()">${item.botao} ✨</button>
      </div>`;
    return;
  }

  app().innerHTML = `
    <div class="${telaClasse}">
      ${barraProgresso(Math.round((passo / ONBOARDING.length) * 100))}
      <span class="avatar-sah">👩🏻‍💼</span>
      <div class="msg sah"><span class="nome">Sah</span>${item.texto.replace(/\n/g, '<br>')}</div>
      <div style="flex:1"></div>
      <button class="btn" onclick="avancarOnboarding()">${item.botao} ✨</button>
    </div>`;
}

function avancarOnboarding() {
  ESTADO.onboardingPasso += 1;
  salvar();
  if (ESTADO.onboardingPasso >= ONBOARDING.length) {
    ESTADO.onboardingConcluido = true;
    salvar();
    navegar('/dashboard');
  } else {
    renderizar();
  }
}

/* ---------------------- Dashboard (Volume 1 / 10) ---------------------- */
const MENU = [
  { icone: '🏠', rotulo: 'Jornada', rota: '/dashboard' },
  { icone: '📚', rotulo: 'Cursos', rota: '/cursos' },
  { icone: '🎤', rotulo: 'Entrevistas', rota: '/entrevistas' },
  { icone: '🧮', rotulo: 'Matemática', rota: '/matematica' },
  { icone: '📖', rotulo: 'Português', rota: '/portugues' },
  { icone: '✍️', rotulo: 'Redação', rota: '/redacao' },
  { icone: '📝', rotulo: 'Meu Caderno', rota: '/caderno' },
  { icone: '⭐', rotulo: 'Favoritos', rota: '/favoritos' },
  { icone: '🏆', rotulo: 'Conquistas', rota: '/conquistas' },
  { icone: '📊', rotulo: 'Meu Desempenho', rota: '/desempenho' },
  { icone: '⚙️', rotulo: 'Configurações', rota: '/configuracoes' }
];

function progressoGeral() {
  const totalTemas = PORTUGUES.length + MATEMATICA.length + REDACAO_TEMAS.length;
  const concluidos = [
    ...Object.values(ESTADO.portugues), ...Object.values(ESTADO.matematica), ...Object.values(ESTADO.redacao)
  ].filter(t => t && t.concluido).length;
  return Math.round((concluidos / totalTemas) * 100);
}

function telaDashboard() {
  const pct = progressoGeral();
  app().innerHTML = `
    <div class="tela">
      <div class="card">
        <span class="legenda">Bom te ver de volta 💗</span>
        <h1>Oi, ${ESTADO.nome}!</h1>
        <p class="texto-secundario">Pronta para continuar sua jornada?</p>
        ${barraProgresso(pct)}
        <p class="legenda">${pct}% da jornada concluída</p>
      </div>
      <div class="menu-grid">
        ${MENU.map(m => `
          <button class="menu-item" onclick="navegar('${m.rota}')">
            <span class="icone">${m.icone}</span>
            <span class="rotulo">${m.rotulo}</span>
          </button>`).join('')}
      </div>
    </div>`;
}

/* ---------------------- Cursos (Volume 3) ---------------------- */
function telaCursos() {
  app().innerHTML = `
    ${topbar('Meus Cursos', '/dashboard')}
    <div class="tela">
      <div class="msg sah"><span class="nome">Sah</span>Mayara, estes cursos foram escolhidos porque aumentam suas chances de conquistar a primeira oportunidade. Faça um de cada vez e não tenha pressa. O importante é aprender.</div>
      ${CURSOS.map(c => {
        const st = ESTADO.cursos[c.id] || {};
        return `<div class="card" onclick="navegar('/cursos/${c.id}')" style="cursor:pointer">
          <span class="icone" style="font-size:24px">${c.icone}</span>
          <h2>${c.titulo}</h2>
          <p class="legenda">${st.concluido ? '✅ Concluído' : '⏳ Em andamento'}</p>
        </div>`;
      }).join('')}
    </div>`;
}

function telaCursoDetalhe(id) {
  const curso = CURSOS.find(c => c.id === id);
  if (!curso) return navegar('/cursos');
  const st = ESTADO.cursos[id] || { checklist: {}, notas: {} };

  app().innerHTML = `
    ${topbar(curso.titulo, '/cursos')}
    <div class="tela">
      ${curso.checklist.length ? `<div class="card">
        <h2>Checklist</h2>
        ${curso.checklist.map((item, i) => `
          <label style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
            <input type="checkbox" ${st.checklist && st.checklist[i] ? 'checked' : ''} onchange="marcarChecklist('${id}', ${i}, this.checked)">
            ${item}
          </label>`).join('')}
      </div>` : ''}
      <div class="card">
        <label class="legenda">O que aprendi?</label>
        <textarea rows="2" onblur="salvarNotaCurso('${id}', 'aprendi', this.value)">${(st.notas && st.notas.aprendi) || ''}</textarea>
        <br><br>
        <label class="legenda">O que achei mais interessante?</label>
        <textarea rows="2" onblur="salvarNotaCurso('${id}', 'interessante',
