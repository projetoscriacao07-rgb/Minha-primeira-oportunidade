/* ==========================================================================
   Minha Primeira Oportunidade — Motor da aplicação
   Progresso salvo no Firestore (Firebase), compartilhado entre a conta da
   Mayara e a conta da Sah — nenhuma das duas perde acesso ao trocar de
   aparelho. Login obrigatório (e-mail e senha cadastrados no Firebase
   Authentication) antes de usar a plataforma.
   ========================================================================== */

function estadoPadrao() {
  return {
    nome: 'Mayara',
    onboardingConcluido: false,
    onboardingPasso: 0,
    questionarioIndice: 0,
    questionarioRespostas: [],
    perfilComportamental: null,
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
    conquistas: []
  };
}

let ESTADO = estadoPadrao();
let USUARIO_LOGADO = null;
let SALVANDO = false;
let SALVAR_NOVAMENTE = false;

/* Salva o ESTADO inteiro no Firestore. Como várias telas chamam salvar()
   em sequência rápida, evitamos disparar muitas gravações ao mesmo tempo. */
async function salvar() {
  if (!USUARIO_LOGADO) return;
  if (SALVANDO) { SALVAR_NOVAMENTE = true; return; }
  SALVANDO = true;
  try {
    await DOC_ESTADO.set(ESTADO);
  } catch (e) {
    console.error('Não foi possível salvar o progresso no Firestore.', e);
    mostrarErroConexao();
  } finally {
    SALVANDO = false;
    if (SALVAR_NOVAMENTE) { SALVAR_NOVAMENTE = false; salvar(); }
  }
}

function mostrarErroConexao() {
  const el = document.createElement('div');
  el.textContent = '⚠️ Sem conexão — verifique a internet para salvar o progresso.';
  el.style.position = 'fixed';
  el.style.top = '10px';
  el.style.left = '50%';
  el.style.transform = 'translateX(-50%)';
  el.style.background = '#FFE6E6';
  el.style.color = '#444';
  el.style.padding = '10px 16px';
  el.style.borderRadius = '14px';
  el.style.zIndex = '999';
  el.style.fontFamily = 'Poppins, sans-serif';
  el.style.fontSize = '13px';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 3000);
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

/* ---------------------- Login (Firebase Authentication) ---------------------- */
function telaLogin(mensagemErro) {
  app().innerHTML = `
    <div class="tela">
      <div style="flex:1"></div>
      <div class="centro">
        <span style="font-size:40px">💗</span>
        <h1>Minha Primeira Oportunidade</h1>
        <p class="texto-secundario">Entre com seu e-mail e senha para continuar</p>
      </div>
      <div class="card">
        <label class="legenda">E-mail</label>
        <input type="text" id="loginEmail" placeholder="seuemail@exemplo.com" autocomplete="username">
        <br><br>
        <label class="legenda">Senha</label>
        <input type="password" id="loginSenha" placeholder="Sua senha" autocomplete="current-password">
      </div>
      ${mensagemErro ? `<div class="aviso-pendente">${mensagemErro}</div>` : ''}
      <button class="btn" id="btnEntrar">Entrar ✨</button>
      <div style="flex:1"></div>
    </div>`;
  document.getElementById('btnEntrar').onclick = fazerLogin;
}

function fazerLogin() {
  const email = document.getElementById('loginEmail').value.trim();
  const senha = document.getElementById('loginSenha').value;
  if (!email || !senha) {
    telaLogin('Preencha o e-mail e a senha para entrar.');
    return;
  }
  const botao = document.getElementById('btnEntrar');
  botao.disabled = true;
  botao.textContent = 'Entrando...';
  auth.signInWithEmailAndPassword(email, senha).catch((erro) => {
    console.error(erro);
    telaLogin('E-mail ou senha incorretos. Tente novamente. 💗');
  });
}

function fazerLogout() {
  if (confirm('Deseja realmente sair da sua conta?')) {
    auth.signOut();
  }
}

/* Carrega o progresso do Firestore assim que o login é confirmado */
async function carregarEstadoFirestore() {
  try {
    const doc = await DOC_ESTADO.get();
    if (doc.exists) {
      ESTADO = Object.assign(estadoPadrao(), doc.data());
    } else {
      ESTADO = estadoPadrao();
      await DOC_ESTADO.set(ESTADO);
    }
  } catch (e) {
    console.error('Não foi possível carregar o progresso do Firestore.', e);
    ESTADO = estadoPadrao();
    mostrarErroConexao();
  }
}

/* ---------------------- Roteador ---------------------- */
function navegar(rota) {
  window.location.hash = rota;
}

function rotaAtual() {
  return window.location.hash.replace('#', '') || (ESTADO.onboardingConcluido ? '/dashboard' : '/onboarding');
}

/* E-mails que devem cair direto no painel da Sah (administradora), em vez
   da jornada da Mayara. Troque pelo e-mail que você mesma cadastrou no
   Firebase Authentication para você (pode adicionar mais de um e-mail
   na lista, separados por vírgula). */
const ADMIN_EMAILS = ['sabrina.z77@hotmail.com'];

function ehAdmin() {
  return !!(USUARIO_LOGADO && USUARIO_LOGADO.email && ADMIN_EMAILS.includes(USUARIO_LOGADO.email.toLowerCase()));
}

window.addEventListener('hashchange', renderizar);

auth.onAuthStateChanged(async (usuario) => {
  USUARIO_LOGADO = usuario;
  if (!usuario) {
    telaLogin();
    return;
  }
  app().innerHTML = `<div class="tela centro"><p>💗 Preparando sua próxima missão...</p></div>`;
  await carregarEstadoFirestore();

  if (ehAdmin()) {
    navegar('/admin');
    return;
  }

  registrarAcesso();
  desbloquearConquista('primeiro_acesso');
  if (!window.location.hash || rotaAtual() === '/admin') {
    navegar(ESTADO.onboardingConcluido ? '/dashboard' : '/onboarding');
  } else {
    renderizar();
  }
});

const app = () => document.getElementById('app');

function renderizar() {
  if (!USUARIO_LOGADO) { telaLogin(); return; }
  const rota = rotaAtual();
  const partes = rota.split('/').filter(Boolean);

  /* A conta da Sah só enxerga o painel administrativo.
     A conta da Mayara nunca consegue abrir o painel administrativo. */
  if (ehAdmin() && partes[0] !== 'admin') { navegar('/admin'); return; }
  if (!ehAdmin() && partes[0] === 'admin') { navegar('/dashboard'); return; }

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

/* Mapa de módulo -> array de temas, usado por várias telas genéricas */
function arrayDoModulo(modulo) {
  if (modulo === 'portugues') return PORTUGUES;
  if (modulo === 'matematica') return MATEMATICA;
  if (modulo === 'redacao') return REDACAO_TEMAS;
  return [];
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
    return telaQuestionarioComportamental();
  }

  const telaClasse = item.destaque ? 'tela tela-onboarding-destaque' : 'tela tela-onboarding';
  const botaoVoltar = passo > 0 ? `<button class="voltar-onboarding" onclick="voltarOnboarding()" aria-label="Voltar">←</button>` : '';

  if (item.mensagens) {
    app().innerHTML = `
      <div class="${telaClasse}">
        ${botaoVoltar}
        ${barraProgresso(Math.round((passo / ONBOARDING.length) * 100))}
        <span class="avatar-sah">👩🏻‍💼</span>
        <div class="conversa">
          <span class="nome-conversa">Sah</span>
          <div id="conversaContainer"></div>
        </div>
        <div style="flex:1"></div>
        <button class="btn" id="btnContinuarOnboarding" style="display:none" onclick="avancarOnboarding()">${item.botao} ✨</button>
      </div>`;
    const container = document.getElementById('conversaContainer');
    animarConversa(item.mensagens, container, () => {
      const btn = document.getElementById('btnContinuarOnboarding');
      if (btn) btn.style.display = 'block';
    });
    return;
  }

  app().innerHTML = `
    <div class="${telaClasse}">
      ${botaoVoltar}
      ${barraProgresso(Math.round((passo / ONBOARDING.length) * 100))}
      <span class="avatar-sah">👩🏻‍💼</span>
      <div class="msg sah"><span class="nome">Sah</span>${item.texto.replace(/\n/g, '<br>')}</div>
      <div style="flex:1"></div>
      <button class="btn" onclick="avancarOnboarding()">${item.botao} ✨</button>
    </div>`;
}

/* Efeito de "digitando..." antes de cada balão de mensagem aparecer */
function animarConversa(mensagens, container, aoFinalizar) {
  let i = 0;
  function proxima() {
    if (i >= mensagens.length) {
      if (aoFinalizar) aoFinalizar();
      return;
    }
    const indicador = document.createElement('div');
    indicador.className = 'msg sah digitando';
    indicador.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
    container.appendChild(indicador);
    setTimeout(() => {
      indicador.remove();
      const m = mensagens[i];
      const bolha = document.createElement('div');
      bolha.className = 'msg sah';
      bolha.innerHTML = m.negrito ? `<strong>${m.texto}</strong>` : m.texto;
      container.appendChild(bolha);
      i++;
      setTimeout(proxima, 700);
    }, 650);
  }
  proxima();
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

function voltarOnboarding() {
  if (ESTADO.onboardingPasso > 0) {
    ESTADO.onboardingPasso -= 1;
    salvar();
    renderizar();
  }
}

/* ---------------------- Questionário comportamental (Volume 2) ----------------------
   Nunca chamado de "DISC" para a Mayara. O resultado é calculado e guardado
   apenas para o painel da Sah (#/admin) — a Mayara nunca vê essas informações. */
function telaQuestionarioComportamental() {
  const idx = ESTADO.questionarioIndice || 0;

  if (idx >= QUESTIONARIO_COMPORTAMENTAL.length) {
    if (!ESTADO.perfilComportamental) calcularPerfilComportamental();
    app().innerHTML = `
      <div class="tela tela-onboarding">
        <span class="avatar-sah">👩🏻‍💼</span>
        <div class="msg sah"><span class="nome">Sah</span>Obrigada! Agora já conheço um pouquinho mais sobre você. Isso vai me ajudar a adaptar toda a sua preparação. 💗</div>
        <div style="flex:1"></div>
        <button class="btn" onclick="avancarOnboarding()">Continuar ✨</button>
      </div>`;
    return;
  }

  const pergunta = QUESTIONARIO_COMPORTAMENTAL[idx];
  const botaoVoltar = idx > 0
    ? `<button class="voltar-onboarding" onclick="voltarQuestionario()" aria-label="Voltar">←</button>`
    : `<button class="voltar-onboarding" onclick="voltarOnboarding()" aria-label="Voltar">←</button>`;

  app().innerHTML = `
    <div class="tela tela-onboarding">
      ${botaoVoltar}
      ${barraProgresso(Math.round((idx / QUESTIONARIO_COMPORTAMENTAL.length) * 100))}
      <p class="legenda">Pergunta ${idx + 1} de ${QUESTIONARIO_COMPORTAMENTAL.length}</p>
      <h2>${pergunta.texto}</h2>
      <div class="opcoes">
        ${pergunta.opcoes.map((op, i) => `<button class="opcao" onclick="responderQuestionario(${i})">${op}</button>`).join('')}
      </div>
    </div>`;
}

function responderQuestionario(indiceOpcao) {
  const idx = ESTADO.questionarioIndice || 0;
  ESTADO.questionarioRespostas[idx] = indiceOpcao;
  ESTADO.questionarioIndice = idx + 1;
  salvar();
  renderizar();
}

function voltarQuestionario() {
  if ((ESTADO.questionarioIndice || 0) > 0) {
    ESTADO.questionarioIndice -= 1;
    salvar();
    renderizar();
  }
}

function calcularPerfilComportamental() {
  const chaves = ['dominancia', 'influencia', 'estabilidade', 'conformidade'];
  const contagens = { dominancia: 0, influencia: 0, estabilidade: 0, conformidade: 0 };
  (ESTADO.questionarioRespostas || []).forEach(i => {
    const chave = chaves[i];
    if (chave) contagens[chave] += 1;
  });
  const total = (ESTADO.questionarioRespostas || []).filter(v => v !== undefined && v !== null).length || 1;
  const percentuais = {};
  chaves.forEach(c => { percentuais[c] = Math.round((contagens[c] / total) * 100); });
  const ordenado = [...chaves].sort((a, b) => contagens[b] - contagens[a]);
  const DESCRICOES = {
    dominancia: 'demonstra decisão e gosta de resolver desafios rapidamente',
    influencia: 'demonstra facilidade para se comunicar e se relacionar com outras pessoas',
    estabilidade: 'demonstra paciência e prefere agir com calma e consistência',
    conformidade: 'demonstra organização e atenção aos detalhes'
  };
  const dominante = ordenado[0];
  const secundario = ordenado[1];
  ESTADO.perfilComportamental = {
    contagens, percentuais, dominante, secundario,
    resumo: `A Mayara ${DESCRICOES[dominante]}. Também apresenta traços de perfil que ${DESCRICOES[secundario]}.`
  };
  salvar();
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
        const chave = `${modulo}:${t.id}`;
        const favoritado = ESTADO.favoritos.includes(chave);
        return `<div class="card card-tema">
          <div style="display:flex;justify-content:space-between;align-items:center;cursor:pointer" onclick="navegar('/${modulo}/${t.id}')">
            <div>
              <span style="font-size:22px">${t.icone || icone}</span>
              <strong> Tema ${t.numero} — ${t.titulo}</strong>
              ${t.pendente ? '<div class="legenda">Conteúdo pendente</div>' : ''}
            </div>
            <div>${st.concluido ? '✅' : (t.pendente ? '🔒' : '▶️')}</div>
          </div>
          <button class="btn-favorito" onclick="event.stopPropagation(); toggleFavorito('${modulo}','${t.id}')" aria-label="Favoritar">${favoritado ? '⭐' : '☆'}</button>
        </div>`;
      }).join('')}
    </div>`;
}

/* ---------------------- Favoritos ---------------------- */
function toggleFavorito(modulo, temaId) {
  const chave = `${modulo}:${temaId}`;
  const i = ESTADO.favoritos.indexOf(chave);
  if (i >= 0) ESTADO.favoritos.splice(i, 1);
  else ESTADO.favoritos.push(chave);
  salvar();
  renderizar();
}

function telaFavoritos() {
  const itens = ESTADO.favoritos.map(chave => {
    const [modulo, temaId] = chave.split(':');
    const tema = arrayDoModulo(modulo).find(t => t.id === temaId);
    if (!tema) return null;
    const icones = { portugues: '📖', matematica: '🧮', redacao: '✍️' };
    return { modulo, temaId, titulo: tema.titulo, icone: tema.icone || icones[modulo] };
  }).filter(Boolean);

  app().innerHTML = `
    ${topbar('Favoritos', '/dashboard')}
    <div class="tela">
      ${itens.length ? itens.map(it => `
        <div class="card card-tema">
          <div style="cursor:pointer" onclick="navegar('/${it.modulo}/${it.temaId}')">
            <span style="font-size:22px">${it.icone}</span>
            <strong> ${it.titulo}</strong>
          </div>
          <button class="btn-favorito" onclick="toggleFavorito('${it.modulo}','${it.temaId}')" aria-label="Remover dos favoritos">⭐</button>
        </div>
      `).join('') : '<p class="legenda">Você ainda não marcou nenhum tema como favorito. Toque na estrela ☆ ao lado de um tema para guardá-lo aqui.</p>'}
    </div>`;
}

/* ---------------------- Motor genérico de Tema/Quiz (Português + Matemática + Redação-quiz) ---------------------- */
function telaTema(modulo, temas, temaId) {
  const tema = temas.find(t => t.id === temaId);
  if (!tema) return navegar(`/${modulo}`);

  if (tema.pendente) {
    app().innerHTML = `
      ${topbar(tema.titulo, `/${modulo}`)}
      <div class="tela">
        <div class="aviso-pendente">
          ⏳ Conteúdo pendente para este tema.
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
  const temas = arrayDoModulo(modulo);
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
  if (modulo === 'redacao' && REDACAO_TEMAS.filter(t => !t.pendente).every(t => ESTADO.redacao[t.id] && ESTADO.redacao[t.id].concluido)) {
    desbloquearConquista('redacao_concluida');
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
        <div class="aviso-pendente">⏳ Conteúdo pendente para este tema.
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
      ${tema.guia ? `<div class="card" style="background:var(--lilas-suave)">
        <p class="legenda"><strong>Antes de escrever, pense em:</strong></p>
        ${tema.guia.map(p => `<p class="legenda">• ${p}</p>`).join('')}
      </div>` : ''}
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

/* ---------------------- Meu Caderno (Volume 1) ---------------------- */
function telaCaderno() {
  app().innerHTML = `
    ${topbar('Meu Caderno', '/dashboard')}
    <div class="tela">
      <div class="card">
        <h2>📝 Nova anotação</h2>
        <label class="legenda">Categoria</label>
        <select id="novaCategoria" style="width:100%;padding:12px 14px;border-radius:14px;border:2px solid var(--rosa-claro);font-family:var(--fonte-principal);font-size:var(--tam-texto);background:var(--branco);color:var(--texto-principal)">
          ${CATEGORIAS_CADERNO.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
        <br><br>
        <textarea id="novaAnotacao" rows="3" placeholder="Escreva sua anotação..."></textarea>
        <br><br>
        <button class="btn" onclick="adicionarNotaCaderno()">Salvar anotação</button>
      </div>

      <h2>📚 Minhas anotações</h2>
      ${ESTADO.caderno.length ? ESTADO.caderno.slice().reverse().map(n => `
        <div class="card">
          <div style="display:flex;justify-content:space-between;align-items:center">
            <span class="legenda"><strong>${n.categoria}</strong> · ${new Date(n.data).toLocaleDateString('pt-BR')}</span>
            <button class="btn-favorito" onclick="removerNotaCaderno('${n.id}')" aria-label="Remover anotação">🗑️</button>
          </div>
          <p>${n.texto}</p>
        </div>
      `).join('') : '<p class="legenda">Você ainda não fez nenhuma anotação livre.</p>'}

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

function adicionarNotaCaderno() {
  const categoria = document.getElementById('novaCategoria').value;
  const texto = document.getElementById('novaAnotacao').value.trim();
  if (!texto) { alert('Escreva algo antes de salvar. 💗'); return; }
  ESTADO.caderno.push({ id: 'nota_' + Date.now(), categoria, texto, data: new Date().toISOString() });
  salvar();
  renderizar();
}

function removerNotaCaderno(id) {
  ESTADO.caderno = ESTADO.caderno.filter(n => n.id !== id);
  salvar();
  renderizar();
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
        <p class="legenda">Conectada como: <strong>${USUARIO_LOGADO ? USUARIO_LOGADO.email : '-'}</strong></p>
        <p class="legenda">Seu progresso é salvo automaticamente na nuvem e pode ser acessado de qualquer aparelho, bastando fazer login com o mesmo e-mail.</p>
      </div>
      <button class="btn secundario" onclick="reiniciarJornada()">Reiniciar jornada</button>
      <button class="btn secundario" onclick="fazerLogout()">Sair da conta</button>
    </div>`;
}

async function reiniciarJornada() {
  if (confirm('Isso vai apagar todo o seu progresso nesta plataforma. Deseja continuar?')) {
    ESTADO = estadoPadrao();
    await salvar();
    navegar('/onboarding');
    location.reload();
  }
}

/* ---------------------- Painel administrativo da Sah (Volume 8) ---------------------- */
function telaAdmin() {
  const totalRespostasEntrevista = ESTADO.entrevistas.length;
  const perfil = ESTADO.perfilComportamental;
  const NOMES_PERFIL = { dominancia: 'Dominância', influencia: 'Influência', estabilidade: 'Estabilidade', conformidade: 'Conformidade' };

  app().innerHTML = `
    ${topbar('Painel da Sah', null)}
    <div class="tela">
      <div class="aviso-pendente">Conectada como <strong>${USUARIO_LOGADO ? USUARIO_LOGADO.email : '-'}</strong>. Nenhuma informação desta página é mostrada para a Mayara — a conta dela não consegue abrir este painel.</div>
      <div class="card">
        <h2>👩 ${ESTADO.nome}</h2>
        <p class="legenda">Início da jornada: ${ESTADO.iniciouEm || '-'}</p>
        <p class="legenda">Último acesso: ${ESTADO.ultimoAcesso ? new Date(ESTADO.ultimoAcesso).toLocaleString('pt-BR') : '-'}</p>
        <p class="legenda">Sequência de dias: ${ESTADO.diasSeguidos}</p>
        ${barraProgresso(progressoGeral())}
      </div>

      ${perfil ? `<div class="card">
        <h2>🧭 Perfil Comportamental</h2>
        <p class="legenda">Perfil predominante: <strong>${NOMES_PERFIL[perfil.dominante]}</strong> · Secundário: <strong>${NOMES_PERFIL[perfil.secundario]}</strong></p>
        ${Object.keys(NOMES_PERFIL).map(chave => `
          <p class="legenda" style="margin-bottom:2px">${NOMES_PERFIL[chave]} — ${perfil.percentuais[chave]}%</p>
          ${barraProgresso(perfil.percentuais[chave])}
        `).join('')}
        <p class="legenda" style="margin-top:10px">${perfil.resumo}</p>
      </div>` : `<div class="card"><p class="legenda">A Mayara ainda não respondeu o questionário inicial.</p></div>`}

      <div class="card">
        <h2>Evolução geral</h2>
        <p class="legenda">Cursos concluídos: ${Object.values(ESTADO.cursos).filter(c => c.concluido).length} / ${CURSOS.length}</p>
        <p class="legenda">Simulações de entrevista: ${totalRespostasEntrevista}</p>
        <p class="legenda">Redações escritas: ${ESTADO.redacoesEscritas.length}</p>
        <p class="legenda">Anotações no caderno: ${ESTADO.caderno.length}</p>
        <p class="legenda">Conquistas desbloqueadas: ${ESTADO.conquistas.length} / ${CONQUISTAS_DEF.length}</p>
      </div>

      <div class="card">
        <h2>Histórico de entrevistas</h2>
        ${ESTADO.entrevistas.length ? ESTADO.entrevistas.map(e => `
          <p class="legenda">${new Date(e.data).toLocaleDateString('pt-BR')} — ${e.qtdPerguntas} perguntas, média de ${e.mediaPalavras} palavras/resposta</p>
        `).join('') : '<p class="legenda">Nenhuma simulação realizada ainda.</p>'}
      </div>

      <button class="btn secundario" onclick="exportarDados()">📄 Exportar dados (JSON)</button>
      <button class="btn secundario" onclick="fazerLogout()">Sair da conta</button>
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
