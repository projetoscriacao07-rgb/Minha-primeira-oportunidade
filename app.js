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

  app().innerHTML = `
    <div class="tela">
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
        <textarea rows="2" onblur="salvarNotaCurso('${id}', 'interessante', this.value)">${(st.notas && st.notas.interessante) || ''}</textarea>
        <br><br>
        <label class="legenda">Como vou usar esse conhecimento?</label>
        <textarea rows="2" onblur="salvarNotaCurso('${id}', 'uso', this.value)">${(st.notas && st.notas.uso) || ''}</textarea>
      </div>
      <button class="btn" onclick="concluirCurso('${id}')">${st.concluido ? '✅ Concluído' : 'Marcar como concluído'}</button>
    </div>`;
}

function marcarChecklist(id, i, valor) {
  ESTADO.cursos[id] = ESTADO.cursos[id] || { checklist: {}, notas: {} };
  ESTADO.cursos[id].checklist = ESTADO.cursos[id].checklist || {};
  ESTADO.cursos[id].checklist[i] = valor;
  salvar();
}

function salvarNotaCurso(id, campo, valor) {
  ESTADO.cursos[id] = ESTADO.cursos[id] || { checklist: {}, notas: {} };
  ESTADO.cursos[id].notas = ESTADO.cursos[id].notas || {};
  ESTADO.cursos[id].notas[campo] = valor;
  salvar();
}

function concluirCurso(id) {
  ESTADO.cursos[id] = ESTADO.cursos[id] || { checklist: {}, notas: {} };
  ESTADO.cursos[id].concluido = true;
  ESTADO.cursos[id].concluidoEm = new Date().toISOString();
  salvar();
  desbloquearConquista('primeiro_curso');
  if (CURSOS.every(c => ESTADO.cursos[c.id] && ESTADO.cursos[c.id].concluido)) {
    desbloquearConquista('todos_cursos');
  }
  alert('Parabéns, Mayara! Você concluiu mais uma missão! Seu currículo está ficando mais forte. Mais importante do que terminar um curso é colocar esse conhecimento em prática. Continue assim! 💗');
  renderizar();
}

/* ---------------------- Lista de temas (Português / Matemática / Redação) ---------------------- */
function telaListaTemas(modulo, temas, titulo, icone) {
  app().innerHTML = `
    ${topbar(titulo, '/dashboard')}
    <div class="tela">
      ${temas.map(t => {
        const st = ESTADO[modulo][t.id] || {};
        return `<div class="card" style="display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="navegar('/${modulo}/${t.id}')">
          <div>
            <span style="font-size:22px">${t.icone || icone}</span>
            <strong> Tema ${t.numero} — ${t.titulo}</strong>
            ${t.pendente ? '<div class="legenda">Conteúdo pendente</div>' : ''}
          </div>
          <div>${st.concluido ? '✅' : (t.pendente ? '🔒' : '▶️')}</div>
        </div>`;
      }).join('')}
    </div>`;
}

/* ---------------------- Motor genérico de Tema/Quiz (Português + Matemática) ---------------------- */
function telaTema(modulo, temas, temaId) {
  const tema = temas.find(t => t.id === temaId);
  if (!tema) return navegar(`/${modulo}`);

  if (tema.pendente) {
    app().innerHTML = `
      ${topbar(tema.titulo, `/${modulo}`)}
      <div class="tela">
        <div class="aviso-pendente">
          ⏳ Conteúdo pendente: o Volume ${modulo === 'portugues' ? 4 : 5} ainda não trouxe o texto completo (explicação e as 5 perguntas) deste tema.
          ${tema.dica ? `<br><br><em>O que já foi especificado:</em> ${tema.dica}` : ''}
          <br><br>Envie o conteúdo oficial deste tema para liberá-lo na plataforma.
        </div>
      </div>`;
    return;
  }

  const st = ESTADO[modulo][temaId] || { etapa: 'intro' };
  ESTADO[modulo][temaId] = st;

  if (!st.etapa || st.etapa === 'intro') {
    app().innerHTML = `
      ${topbar(tema.titulo, `/${modulo}`)}
      <div class="tela">
        <span class="avatar-sah">👩🏻‍💼</span>
        <div class="msg sah"><span class="nome">Sah</span>${tema.mensagemSah}</div>
        <button class="btn" onclick="irEtapaTema('${modulo}','${temaId}','explicacao')">Começar ✨</button>
      </div>`;
    return;
  }

  if (st.etapa === 'explicacao') {
    app().innerHTML = `
      ${topbar(tema.titulo, `/${modulo}`)}
      <div class="tela">
        <div class="msg sah">${tema.explicacao.replace(/\n/g, '<br>')}</div>
        ${tema.textoBase ? `<div class="card"><strong>Texto</strong><p>${tema.textoBase}</p></div>` : ''}
        ${tema.curiosidade ? `<div class="card" style="background:var(--lilas-suave)">🌸 <strong>Você sabia?</strong><p>${tema.curiosidade}</p></div>` : ''}
        ${tema.resumo ? `<div class="card">📝 <strong>Resumindo...</strong><p>${tema.resumo}</p></div>` : ''}
        <button class="btn" onclick="irEtapaTema('${modulo}','${temaId}','quiz', {q:0, acertos:0})">Vamos praticar 📝</button>
      </div>`;
    return;
  }

  if (st.etapa === 'quiz') {
    const qi = st.q || 0;
    if (qi >= tema.perguntas.length) {
      return telaResultadoTema(modulo, temas, temaId);
    }
    const pergunta = tema.perguntas[qi];
    app().innerHTML = `
      ${topbar(tema.titulo, `/${modulo}`)}
      <div class="tela">
        ${barraProgresso(Math.round((qi / tema.perguntas.length) * 100))}
        <p class="legenda">Pergunta ${qi + 1} de ${tema.perguntas.length}</p>
        <h2>${pergunta.texto}</h2>
        <div class="opcoes" id="opcoes">
          ${pergunta.opcoes.map((op, i) => `<button class="opcao" onclick="responderQuiz('${modulo}','${temaId}',${i})">${op}</button>`).join('')}
        </div>
      </div>`;
    return;
  }
}

function irEtapaTema(modulo, temaId, etapa, extra) {
  ESTADO[modulo][temaId] = Object.assign(ESTADO[modulo][temaId] || {}, { etapa }, extra || {});
  salvar();
  renderizar();
}

function responderQuiz(modulo, temaId, indiceEscolhido) {
  const temas = modulo === 'portugues' ? PORTUGUES : MATEMATICA;
  const tema = temas.find(t => t.id === temaId);
  const st = ESTADO[modulo][temaId];
  const pergunta = tema.perguntas[st.q];
  const acertou = indiceEscolhido === pergunta.correta;

  const botoes = document.querySelectorAll('#opcoes .opcao');
  botoes.forEach((b, i) => {
    b.disabled = true;
    if (i === pergunta.correta) b.classList.add('correta');
    else if (i === indiceEscolhido) b.classList.add('errada');
  });

  const rodape = document.createElement('div');
  rodape.className = 'card';
  rodape.style.marginTop = '12px';
  rodape.innerHTML = `
    <p>${acertou ? '🎉 Muito bem!' : 'Vamos entender juntos essa resposta.'}</p>
    ${pergunta.explicacao ? `<p class="legenda">💡 ${pergunta.explicacao}</p>` : ''}
    <button class="btn" id="btnContinuarQuiz">Continuar</button>`;
  document.querySelector('.tela').appendChild(rodape);
  document.getElementById('btnContinuarQuiz').onclick = () => {
    st.acertos = (st.acertos || 0) + (acertou ? 1 : 0);
    st.q = (st.q || 0) + 1;
    salvar();
    renderizar();
  };
}

function telaResultadoTema(modulo, temas, temaId) {
  const tema = temas.find(t => t.id === temaId);
  const st = ESTADO[modulo][temaId];
  st.concluido = true;
  st.etapa = 'concluido';
  salvar();

  if (modulo === 'portugues' && PORTUGUES.filter(t => !t.pendente).every(t => ESTADO.portugues[t.id] && ESTADO.portugues[t.id].concluido)) {
    desbloquearConquista('portugues_concluido');
  }
  if (modulo === 'matematica' && MATEMATICA.filter(t => !t.pendente).every(t => ESTADO.matematica[t.id] && ESTADO.matematica[t.id].concluido)) {
    desbloquearConquista('matematica_concluida');
  }

  app().innerHTML = `
    ${topbar(tema.titulo, `/${modulo}`)}
    <div class="tela">
      <div class="card centro">
        <h1>🎉</h1>
        <h2>Mais uma missão concluída!</h2>
        <p>📊 Desempenho: ${st.acertos} de ${tema.perguntas.length} acertos</p>
        <p class="legenda">🌟 ${st.acertos >= 3 ? 'Você foi muito bem nesse conteúdo.' : 'Você já está evoluindo, continue praticando.'}</p>
        ${st.acertos < tema.perguntas.length ? '<p class="legenda">📈 Vale revisar este tema mais uma vez, sem pressa.</p>' : ''}
      </div>
      <div class="msg sah"><span class="nome">Sah</span>${tema.feedback || 'Continue assim, estou muito orgulhosa da sua dedicação! 💗'}</div>
      <button class="btn" onclick="irEtapaTema('${modulo}','${temaId}','intro'); navegar('/${modulo}')">Voltar aos temas</button>
      <button class="btn secundario" onclick="irEtapaTema('${modulo}','${temaId}','intro')">Refazer este tema</button>
    </div>`;
}

/* ---------------------- Redação (Volume 6) ---------------------- */
function telaTemaRedacao(temaId) {
  const tema = REDACAO_TEMAS.find(t => t.id === temaId);
  if (!tema) return navegar('/redacao');

  if (tema.pendente) {
    app().innerHTML = `
      ${topbar(tema.titulo, '/redacao')}
      <div class="tela">
        <div class="aviso-pendente">⏳ Conteúdo pendente: o Volume 6 ainda não detalhou totalmente este tema.
        ${tema.dica ? `<br><br><em>O que já foi especificado:</em> ${tema.dica}` : ''}
        </div>
      </div>`;
    return;
  }

  if (tema.tipo === 'quiz') return telaTema('redacao', REDACAO_TEMAS, temaId);

  // redacao_livre
  const st = ESTADO.redacao[temaId] || {};
  app().innerHTML = `
    ${topbar(tema.titulo, '/redacao')}
    <div class="tela">
      <div class="msg sah"><span class="nome">Sah</span>${tema.mensagemSah || 'Vamos escrever juntas!'}</div>
      <div class="card">
        <strong>Tema:</strong> ${tema.temaRedacao || (tema.temasSorteio ? tema.temasSorteio[Math.floor(Math.random() * tema.temasSorteio.length)] : '')}
      </div>
      ${tema.modelo ? `<div class="card" style="background:var(--lilas-suave)">
        <p class="legenda"><strong>Modelo para te ajudar:</strong></p>
        <p class="legenda">🟢 ${tema.modelo.introducao}</p>
        <p class="legenda">🟡 ${tema.modelo.desenvolvimento}</p>
        <p class="legenda">🔵 ${tema.modelo.conclusao}</p>
      </div>` : ''}
      <textarea rows="8" placeholder="Escreva aqui sua redação (até 10 linhas)...">${st.texto || ''}</textarea>
      <button class="btn" onclick="enviarRedacao('${temaId}', this)">Enviar redação</button>
    </div>`;
}

function enviarRedacao(temaId, botao) {
  const textarea = botao.parentElement.querySelector('textarea');
  const texto = textarea.value.trim();
  if (!texto) { alert('Escreva sua redação antes de enviar. 💗'); return; }

  ESTADO.redacao[temaId] = { texto, enviadoEm: new Date().toISOString(), concluido: true };
  ESTADO.redacoesEscritas.push({ temaId, texto, data: new Date().toISOString() });
  salvar();
  desbloquearConquista('primeira_redacao');
  if (REDACAO_TEMAS.filter(t => !t.pendente).every(t => ESTADO.redacao[t.id] && ESTADO.redacao[t.id].concluido)) {
    desbloquearConquista('redacao_concluida');
  }

  // Avaliação simples e acolhedora (heurística local, conforme Volume 6: nunca "texto ruim")
  const palavras = texto.split(/\s+/).filter(Boolean).length;
  const temPontuacao = /[.!?]/.test(texto);

  app().innerHTML = `
    ${topbar('Sua redação', '/redacao')}
    <div class="tela">
      <div class="card centro"><h1>🎉</h1><h2>Parabéns, Mayara!</h2><p>Você concluiu sua redação!</p></div>
      <div class="card">
        <p>💗 <strong>O que você fez muito bem:</strong></p>
        <p class="legenda">Organizou suas ideias e colocou seus pensamentos no papel.</p>
        ${palavras >= 30 ? '<p class="legenda">Desenvolveu bem o texto.</p>' : ''}
      </div>
      <div class="card">
        <p>📈 <strong>O que vale praticar um pouco mais:</strong></p>
        ${!temPontuacao ? '<p class="legenda">Utilizar mais pontuação para organizar as frases.</p>' : ''}
        ${palavras < 20 ? '<p class="legenda">Desenvolver um pouco mais as ideias.</p>' : ''}
        <p class="legenda">Revisar a ortografia antes de finalizar.</p>
      </div>
      <p class="legenda centro">Lembre-se: escrever bem é uma habilidade que melhora com a prática. Tenho muito orgulho da sua evolução! 💗</p>
      <button class="btn" onclick="navegar('/redacao')">Voltar</button>
    </div>`;
}

/* ---------------------- Entrevistas (Volume 7) ---------------------- */
function telaEntrevistasInicio() {
  app().innerHTML = `
    ${topbar('Entrevistas', '/dashboard')}
    <div class="tela">
      <span class="avatar-sah">👩🏻‍💼</span>
      <div class="msg sah"><span class="nome">Sah</span>Chegamos em uma das partes mais importantes da sua preparação. A partir de agora vamos simular entrevistas de emprego. Não precisa ficar nervosa. Este é um espaço para praticar. Você pode errar, aprender, tentar novamente e evoluir no seu ritmo. Quanto mais entrevistas você fizer, mais confiança terá quando chegar o grande dia. Vamos começar?</div>
      <p class="legenda">🎤 A cada simulação, sorteamos perguntas de diferentes categorias — nunca na mesma ordem.</p>
      <button class="btn" onclick="navegar('/entrevistas/simulacao')">Começar simulação ✨</button>
      <p class="legenda centro">Simulações realizadas: ${ESTADO.entrevistas.length}</p>
    </div>`;
}

function sortearPerguntasEntrevista(qtd) {
  const todas = [];
  BANCO_ENTREVISTA.forEach(cat => cat.perguntas.forEach(p => todas.push({ categoria: cat.categoria, dica: cat.dica, texto: p })));
  const embaralhadas = todas.sort(() => Math.random() - 0.5);
  return embaralhadas.slice(0, qtd);
}

let SIMULACAO_ATUAL = null;

function telaSimulacao() {
  if (!SIMULACAO_ATUAL) {
    const qtd = 10 + Math.floor(Math.random() * 6); // 10 a 15
    SIMULACAO_ATUAL = { perguntas: sortearPerguntasEntrevista(qtd), indice: 0, respostas: [] };
  }
  const sim = SIMULACAO_ATUAL;

  if (sim.indice >= sim.perguntas.length) {
    return telaResultadoEntrevista();
  }

  const p = sim.perguntas[sim.indice];
  app().innerHTML = `
    ${topbar('Simulação de entrevista', '/entrevistas')}
    <div class="tela">
      ${barraProgresso(Math.round((sim.indice / sim.perguntas.length) * 100))}
      <p class="legenda">Pergunta ${sim.indice + 1} de ${sim.perguntas.length} · ${p.categoria}</p>
      ${p.dica ? `<div class="aviso-pendente">💡 Dica: ${p.dica}</div>` : ''}
      <h2>${p.texto}</h2>
      <textarea rows="5" id="resposta-entrevista" placeholder="Digite sua resposta..."></textarea>
      <button class="btn" onclick="responderEntrevista()">Próxima pergunta</button>
    </div>`;
}

function responderEntrevista() {
  const texto = document.getElementById('resposta-entrevista').value.trim();
  SIMULACAO_ATUAL.respostas.push(texto);
  SIMULACAO_ATUAL.indice += 1;
  renderizar();
}

function telaResultadoEntrevista() {
  const sim = SIMULACAO_ATUAL;
  const mediaPalavras = sim.respostas.reduce((acc, r) => acc + r.split(/\s+/).filter(Boolean).length, 0) / sim.respostas.length || 0;
  const respostasCurtas = sim.respostas.filter(r => r.split(/\s+/).filter(Boolean).length < 4).length;

  const registro = {
    data: new Date().toISOString(),
    qtdPerguntas: sim.perguntas.length,
    mediaPalavras: Math.round(mediaPalavras),
    respostasCurtas
  };
  ESTADO.entrevistas.push(registro);
  salvar();
  desbloquearConquista('primeira_entrevista');

  app().innerHTML = `
    ${topbar('Resultado da simulação', '/entrevistas')}
    <div class="tela">
      <div class="card centro"><h1>🎉</h1><h2>Parabéns, Mayara!</h2><p>Você concluiu mais uma simulação!</p></div>
      <div class="card">
        <p>💗 <strong>Você fez muito bem em:</strong></p>
        <p class="legenda">Demonstrar vontade de aprender e manter um tom educado.</p>
      </div>
      <div class="card">
        <p>📈 <strong>Na próxima entrevista, tente melhorar:</strong></p>
        ${respostasCurtas > 0 ? `<p class="legenda">Você deu ${respostasCurtas} resposta(s) muito curta(s). Tente desenvolver um pouco mais suas ideias e dar exemplos.</p>` : '<p class="legenda">Continue desenvolvendo suas respostas com exemplos.</p>'}
      </div>
      <p class="legenda centro">Cada entrevista que você faz aqui aumenta sua confiança para a entrevista real. Tenho muito orgulho da sua evolução! 💗</p>
      <button class="btn" onclick="SIMULACAO_ATUAL=null; navegar('/entrevistas')">Voltar</button>
    </div>`;
}

/* ---------------------- Meu Caderno ---------------------- */
function telaCaderno() {
  app().innerHTML = `
    ${topbar('Meu Caderno', '/dashboard')}
    <div class="tela">
      <p class="legenda">Suas redações e anotações de cursos ficam guardadas aqui.</p>
      <h2>✍️ Redações</h2>
      ${ESTADO.redacoesEscritas.length ? ESTADO.redacoesEscritas.map(r => `
        <div class="card"><p class="legenda">${new Date(r.data).toLocaleDateString('pt-BR')}</p><p>${r.texto}</p></div>
      `).join('') : '<p class="legenda">Você ainda não escreveu nenhuma redação.</p>'}
      <h2>📚 Cursos</h2>
      ${CURSOS.map(c => {
        const st = ESTADO.cursos[c.id];
        if (!st || !st.notas) return '';
        return `<div class="card"><strong>${c.titulo}</strong>
          ${st.notas.aprendi ? `<p class="legenda">O que aprendi: ${st.notas.aprendi}</p>` : ''}
          ${st.notas.interessante ? `<p class="legenda">Mais interessante: ${st.notas.interessante}</p>` : ''}
          ${st.notas.uso ? `<p class="legenda">Como vou usar: ${st.notas.uso}</p>` : ''}
        </div>`;
      }).join('')}
    </div>`;
}

/* ---------------------- Favoritos ---------------------- */
function telaFavoritos() {
  app().innerHTML = `
    ${topbar('Favoritos', '/dashboard')}
    <div class="tela">
      <p class="legenda">Em breve você poderá marcar temas e conteúdos como favoritos para revisar rapidamente.</p>
    </div>`;
}

/* ---------------------- Conquistas ---------------------- */
function telaConquistas() {
  app().innerHTML = `
    ${topbar('Conquistas', '/dashboard')}
    <div class="tela">
      ${CONQUISTAS_DEF.map(c => {
        const desbloqueada = ESTADO.conquistas.includes(c.id);
        return `<div class="conquista ${desbloqueada ? '' : 'bloqueada'}">
          <span style="font-size:26px">${c.icone}</span>
          <div><strong>${c.titulo}</strong><div class="legenda">${desbloqueada ? 'Desbloqueada' : 'Ainda não desbloqueada'}</div></div>
        </div>`;
      }).join('')}
    </div>`;
}

/* ---------------------- Meu Desempenho ---------------------- */
function telaDesempenho() {
  const pct = progressoGeral();
  app().innerHTML = `
    ${topbar('Meu Desempenho', '/dashboard')}
    <div class="tela">
      <div class="card">
        <h2>Progresso geral</h2>
        ${barraProgresso(pct)}
        <p class="legenda">${pct}%</p>
      </div>
      <div class="card">
        <h2>📖 Português</h2>
        <p class="legenda">${Object.values(ESTADO.portugues).filter(t => t.concluido).length} de ${PORTUGUES.filter(t => !t.pendente).length} temas disponíveis concluídos</p>
      </div>
      <div class="card">
        <h2>🧮 Matemática</h2>
        <p class="legenda">${Object.values(ESTADO.matematica).filter(t => t.concluido).length} de ${MATEMATICA.filter(t => !t.pendente).length} temas disponíveis concluídos</p>
      </div>
      <div class="card">
        <h2>✍️ Redação</h2>
        <p class="legenda">${ESTADO.redacoesEscritas.length} redação(ões) escrita(s)</p>
      </div>
      <div class="card">
        <h2>🎤 Entrevistas</h2>
        <p class="legenda">${ESTADO.entrevistas.length} simulação(ões) realizada(s)</p>
      </div>
      <div class="card">
        <h2>🔥 Sequência de dias estudando</h2>
        <p class="legenda">${ESTADO.diasSeguidos} dia(s)</p>
      </div>
    </div>`;
}

/* ---------------------- Configurações ---------------------- */
function telaConfiguracoes() {
  app().innerHTML = `
    ${topbar('Configurações', '/dashboard')}
    <div class="tela">
      <div class="card">
        <p class="legenda">Todo o seu progresso é salvo automaticamente neste navegador.</p>
      </div>
      <button class="btn secundario" onclick="reiniciarJornada()">Reiniciar jornada</button>
    </div>`;
}

function reiniciarJornada() {
  if (confirm('Isso vai apagar todo o seu progresso nesta plataforma. Deseja continuar?')) {
    localStorage.removeItem(STORAGE_KEY);
    ESTADO = estadoPadrao();
    navegar('/onboarding');
    location.reload();
  }
}

/* ---------------------- Painel administrativo da Sah (Volume 8) ---------------------- */
function telaAdmin() {
  const totalRespostasEntrevista = ESTADO.entrevistas.length;
  app().innerHTML = `
    ${topbar('Painel da Sah', '/dashboard')}
    <div class="tela">
      <div class="aviso-pendente">Este painel é uma versão simplificada (Volume 8). Como o site é 100% estático, não há login protegido de verdade — para produção, use um backend com autenticação.</div>
      <div class="card">
        <h2>👩 ${ESTADO.nome}</h2>
        <p class="legenda">Início da jornada: ${ESTADO.iniciouEm || '-'}</p>
        <p class="legenda">Último acesso: ${ESTADO.ultimoAcesso ? new Date(ESTADO.ultimoAcesso).toLocaleString('pt-BR') : '-'}</p>
        <p class="legenda">Sequência de dias: ${ESTADO.diasSeguidos}</p>
        ${barraProgresso(progressoGeral())}
      </div>
      <div class="card">
        <h2>Evolução geral</h2>
        <p class="legenda">Cursos concluídos: ${Object.values(ESTADO.cursos).filter(c => c.concluido).length} / ${CURSOS.length}</p>
        <p class="legenda">Simulações de entrevista: ${totalRespostasEntrevista}</p>
        <p class="legenda">Redações escritas: ${ESTADO.redacoesEscritas.length}</p>
        <p class="legenda">Conquistas desbloqueadas: ${ESTADO.conquistas.length} / ${CONQUISTAS_DEF.length}</p>
      </div>
      <div class="card">
        <h2>Histórico de entrevistas</h2>
        ${ESTADO.entrevistas.length ? ESTADO.entrevistas.map(e => `
          <p class="legenda">${new Date(e.data).toLocaleDateString('pt-BR')} — ${e.qtdPerguntas} perguntas, média de ${e.mediaPalavras} palavras/resposta</p>
        `).join('') : '<p class="legenda">Nenhuma simulação realizada ainda.</p>'}
      </div>
      <button class="btn secundario" onclick="exportarDados()">📄 Exportar dados (JSON)</button>
    </div>`;
}

function exportarDados() {
  const blob = new Blob([JSON.stringify(ESTADO, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `progresso-${ESTADO.nome}-${Date.now()}.json`;
  a.click();
}
