/* ==========================================================================
   Banco de conteúdo oficial — extraído literalmente dos Volumes 2 a 7.
   Temas marcados com pendente:true NÃO tiveram as 5 perguntas detalhadas
   nos documentos recebidos (ex.: "Cinco questões no mesmo padrão.").
   Por regra do Volume 9 ("a IA não poderá criar textos próprios para
   substituir os existentes... solicitar complementação em vez de
   inventar"), esses temas aparecem na plataforma como "conteúdo pendente"
   até que o texto oficial seja enviado.
   ========================================================================== */

const ONBOARDING = [
  {
    id: 'tela1',
    autor: 'sah',
    texto: `Oi, Mayara! Seja muito bem-vinda! Criei este material especialmente para você. Meu objetivo é ajudar você a conquistar sua primeira oportunidade de trabalho. Durante toda essa jornada vou compartilhar dicas, exercícios e tudo aquilo que pode fazer diferença na sua primeira entrevista. Não se preocupe se hoje você ainda não sabe como funciona um processo seletivo. É justamente por isso que estou aqui. Vamos aprender juntas, um passo de cada vez. Você poderá voltar quando quiser, repetir qualquer atividade e acompanhar toda a sua evolução. Pode contar comigo durante toda essa jornada.`,
    botao: 'Começar minha jornada'
  },
  {
    id: 'tela2',
    autor: 'sah',
    texto: `Antes de começarmos, quero conhecer você um pouquinho melhor. Não existe resposta certa ou errada. Quanto mais eu conhecer você, mais personalizadas serão as dicas que vou compartilhar. Vamos lá?`,
    botao: 'Quero começar'
  },
  { id: 'questionario', tipo: 'questionario' },
  {
    id: 'tela4',
    autor: 'sah',
    texto: `Você não precisa ter experiência para conquistar sua primeira oportunidade. As empresas procuram vontade de aprender, educação, responsabilidade, organização, pontualidade e interesse em crescer. É isso que vamos desenvolver juntas.`,
    botao: 'Continuar'
  },
  {
    id: 'tela5',
    autor: 'sah',
    texto: `Vou te explicar como funciona uma contratação: Currículo → Contato da empresa → Entrevista → Possíveis testes → Escolha do candidato. Não se preocupe, vamos treinar cada uma dessas etapas juntas.`,
    botao: 'Continuar'
  },
  {
    id: 'tela6',
    autor: 'sah',
    texto: `Os recrutadores costumam observar: educação, comunicação, organização, interesse em aprender, pontualidade, responsabilidade e vontade de crescer.`,
    botao: 'Continuar'
  },
  {
    id: 'tela7',
    autor: 'sah',
    texto: `Escolhi três cursos para fortalecer seu currículo: Pacote Office, Fundamentos de Inteligência Artificial e Atendimento ao Cliente. Eles vão te ajudar bastante na busca pelo primeiro emprego.`,
    botao: 'Continuar'
  },
  {
    id: 'tela8',
    autor: 'sah',
    texto: `Word, Excel, PowerPoint e Outlook fazem parte do Pacote Office. São ferramentas muito usadas pelas empresas no dia a dia, por isso são tão importantes no seu currículo.`,
    botao: 'Continuar'
  },
  {
    id: 'tela9',
    autor: 'sah',
    texto: `A Inteligência Artificial pode ser uma grande aliada nos seus estudos: ela ajuda a revisar textos, criar resumos, organizar ideias e até escrever e-mails.`,
    botao: 'Continuar'
  },
  {
    id: 'tela10',
    autor: 'sah',
    texto: `Comunicação, educação, empatia e atendimento são habilidades importantes para qualquer profissão, não apenas para quem trabalha diretamente com o público.`,
    botao: 'Ir para minha jornada'
  }
];

/* Volume 2 define 15 perguntas comportamentais (base DISC) mas não
   especifica o texto das perguntas nem das opções. Fica pendente. */
const QUESTIONARIO_COMPORTAMENTAL = {
  pendente: true,
  aviso: 'Conteúdo pendente: o Volume 2 pede 15 perguntas comportamentais (base DISC), mas o texto de cada pergunta e suas opções ainda não foram enviados. Envie o conteúdo oficial para liberar esta etapa.'
};

/* ---------------------- MÓDULO DE PORTUGUÊS (Volume 4) ---------------------- */
const PORTUGUES = [
  {
    id: 'tema1', numero: 1, titulo: 'M antes de P e B', icone: '📝',
    mensagemSah: `Oi, Mayara! Hoje vamos aprender mais uma coisa que poderá fazer diferença na sua vida profissional. Pode parecer um detalhe, mas escrever corretamente transmite organização, cuidado e profissionalismo. E a melhor parte... você vai aprender tudo de forma simples. Vamos lá?`,
    explicacao: `Hoje vamos aprender uma regra muito importante. Sempre utilizamos a letra M antes das letras P e B.\n\nVeja alguns exemplos:\n✔ Campo\n✔ Também\n✔ Comprar\n✔ Bomba\n\nAgora veja alguns exemplos incorretos.\n❌ Canpo\n❌ Tanbém\n❌ Conprar\n\nPercebeu? Sempre que aparecer P ou B, normalmente utilizaremos M antes delas.`,
    curiosidade: `Essa é uma das regras mais cobradas em provas, redações e até mesmo em testes para vagas de Jovem Aprendiz. Por isso vale muito a pena aprender.`,
    resumo: `Sempre usamos M antes de P e B. Pronto! Agora vamos praticar.`,
    perguntas: [
      { texto: 'Qual palavra está escrita corretamente?', opcoes: ['Canpo', 'Campo', 'Campoo', 'Canbo'], correta: 1, explicacao: 'Utilizamos M antes da letra P.' },
      { texto: 'Complete corretamente: Co__prar', opcoes: ['N', 'M'], correta: 1, explicacao: 'Antes de P, usamos M: Comprar.' },
      { texto: 'Qual alternativa está correta?', opcoes: ['Tanbém', 'Também', 'Tamben', 'Tanbem'], correta: 1, explicacao: 'Antes de B, usamos M: Também.' },
      { texto: 'Qual palavra está correta?', opcoes: ['Bonba', 'Bomba', 'Bonpa', 'Bonmba'], correta: 1, explicacao: 'Antes de B, usamos M: Bomba.' },
      { texto: 'Em qual palavra utilizamos a regra do M antes do P?', opcoes: ['Campo', 'Casa', 'Zebra', 'Sapo'], correta: 0, explicacao: 'Campo tem M antes do P.' }
    ],
    feedback: `Você concluiu o desafio. Escrever corretamente faz muita diferença quando enviamos e-mails, conversamos com clientes ou escrevemos mensagens dentro da empresa. Você está evoluindo!`
  },
  { id: 'tema2', numero: 2, titulo: 'Uso do S', icone: '📝', pendente: true },
  { id: 'tema3', numero: 3, titulo: 'Uso do SS', icone: '📝', pendente: true },
  { id: 'tema4', numero: 4, titulo: 'Uso do Ç', icone: '📝', pendente: true },
  { id: 'tema5', numero: 5, titulo: 'Uso do Z', icone: '📝', pendente: true },
  { id: 'tema6', numero: 6, titulo: 'Acentuação', icone: '📝', pendente: true },
  {
    id: 'tema7', numero: 7, titulo: 'Pontuação', icone: '📝',
    mensagemSah: `Agora vamos aprender sobre pontuação: vírgula, ponto final, interrogação, exclamação e dois pontos.`,
    explicacao: `A pontuação ajuda o leitor a entender o ritmo e o sentido de uma frase.`,
    curiosidade: `Usar a pontuação corretamente evita mal-entendidos em mensagens e e-mails profissionais.`,
    resumo: `Cada sinal de pontuação tem uma função diferente na frase.`,
    perguntas: [
      { texto: '"Bom dia Mayara" — Qual opção está correta?', opcoes: ['Bom dia Mayara', 'Bom dia, Mayara.', 'Bom dia; Mayara', 'Bom dia: Mayara'], correta: 1, explicacao: 'Usamos vírgula para separar o vocativo.' }
    ],
    perguntasIncompletas: true
  },
  {
    id: 'tema8', numero: 8, titulo: 'Interpretação de Texto', icone: '📖',
    mensagemSah: `Mayara, agora vamos treinar uma habilidade que faz muita diferença em entrevistas, provas e até no dia a dia do trabalho. Muitas vezes o recrutador quer saber se você consegue entender uma informação antes de responder. Por isso, vamos praticar juntos. Não tenha pressa. Leia com calma e responda no seu tempo.`,
    explicacao: `Interpretar um texto significa entender a mensagem que ele quer transmitir.\n\nAntes de responder qualquer pergunta:\n✔ Leia com atenção.\n✔ Se precisar, leia novamente.\n✔ Procure palavras importantes.\n✔ Só depois responda.`,
    textoBase: `Ana começou a trabalhar como Jovem Aprendiz em uma empresa de tecnologia. Todos os dias ela chega 15 minutos antes do horário, organiza sua mesa e anota todas as atividades que precisa realizar. Com o tempo, ela ganhou a confiança da equipe e passou a ajudar outros colegas.`,
    perguntas: [
      { texto: 'O que fez Ana conquistar a confiança da equipe?', opcoes: ['Ela faltava pouco.', 'Ela era organizada e pontual.', 'Ela trabalhava apenas meio período.', 'Ela fazia muitas pausas.'], correta: 1 },
      { texto: 'Qual profissão Ana exerce?', opcoes: ['Médica.', 'Jovem Aprendiz.', 'Professora.', 'Advogada.'], correta: 1 },
      { texto: 'Antes de começar a trabalhar, Ana...', opcoes: ['Conversava.', 'Organizava sua mesa.', 'Ia embora.', 'Almoçava.'], correta: 1 },
      { texto: 'Qual característica o texto destaca?', opcoes: ['Preguiça.', 'Organização.', 'Desinteresse.', 'Atraso.'], correta: 1 },
      { texto: 'Qual foi o resultado das atitudes de Ana?', opcoes: ['Foi demitida.', 'Ganhou confiança da equipe.', 'Mudou de empresa.', 'Pediu férias.'], correta: 1 }
    ],
    feedback: `Interpretar textos ajuda você a entender instruções, responder e-mails, conversar com clientes e realizar atividades com mais segurança. Continue assim!`
  },
  {
    id: 'tema9', numero: 9, titulo: 'Sinônimos', icone: '📝',
    mensagemSah: `Algumas palavras possuem o mesmo significado. Essas palavras são chamadas de sinônimos. Conhecer sinônimos ajuda você a escrever melhor e evita repetir sempre as mesmas palavras.`,
    explicacao: `Exemplos:\nFeliz = Alegre\nBonito = Belo\nComeçar = Iniciar\nRápido = Veloz\nGrande = Enorme`,
    perguntas: [
      { texto: 'Qual é o sinônimo de "feliz"?', opcoes: ['Alegre', 'Triste', 'Bravo', 'Fraco'], correta: 0 },
      { texto: 'Qual é o sinônimo de "começar"?', opcoes: ['Finalizar', 'Iniciar', 'Esquecer', 'Esperar'], correta: 1 },
      { texto: 'Qual palavra significa o mesmo que "bonito"?', opcoes: ['Feio', 'Belo', 'Pequeno', 'Sujo'], correta: 1 },
      { texto: 'Qual é o sinônimo de "rápido"?', opcoes: ['Devagar', 'Veloz', 'Longo', 'Baixo'], correta: 1 },
      { texto: 'Qual palavra significa o mesmo que "grande"?', opcoes: ['Pequeno', 'Enorme', 'Curto', 'Fraco'], correta: 1 }
    ],
    feedback: `Quanto maior for seu vocabulário, mais fácil será se comunicar em entrevistas e no ambiente de trabalho.`
  },
  { id: 'tema10', numero: 10, titulo: 'Antônimos', icone: '📝', pendente: true, dica: 'Exemplos dados: Grande×Pequeno, Alto×Baixo, Feliz×Triste, Entrar×Sair, Ligado×Desligado. Faltam as 5 perguntas.' },
  { id: 'tema11', numero: 11, titulo: 'Escrita Profissional', icone: '📝', pendente: true },
  { id: 'tema12', numero: 12, titulo: 'Escrevendo um e-mail', icone: '📝', pendente: true }
];

/* ---------------------- MÓDULO DE MATEMÁTICA (Volume 5) ---------------------- */
const MATEMATICA = [
  {
    id: 'tema1', numero: 1, titulo: 'Adição', icone: '➕',
    mensagemSah: `Oi, Mayara! Hoje vamos aprender um pouquinho de Matemática. Pode parecer difícil às vezes, mas prometo que vou explicar tudo de um jeito bem simples. O importante não é decorar. É entender. Vamos juntas?`,
    explicacao: `Adicionar significa juntar. Exemplo: você recebeu R$ 20,00 da sua avó e R$ 30,00 da sua mãe. Quanto você tem? 20 + 30 = R$ 50,00. Sempre que juntamos valores ou quantidades estamos realizando uma adição.`,
    curiosidade: `A Matemática aparece praticamente todos os dias no trabalho. Ela ajuda a conferir dinheiro, calcular descontos, organizar planilhas, controlar estoque e muito mais.`,
    resumo: `Adicionar é juntar valores ou quantidades.`,
    perguntas: [
      { texto: 'Quanto é: 12 + 8', opcoes: ['18', '20', '22', '24'], correta: 1 },
      { texto: 'Mayara comprou um caderno por R$ 18,00 e uma caneta por R$ 7,00. Quanto ela gastou?', opcoes: ['R$ 25,00', 'R$ 24,00', 'R$ 26,00', 'R$ 27,00'], correta: 0 },
      { texto: '35 + 25 =', opcoes: ['50', '60', '65', '70'], correta: 1 },
      { texto: '18 + 12 =', opcoes: ['28', '30', '32', '34'], correta: 1 },
      { texto: '45 + 15 =', opcoes: ['50', '55', '60', '65'], correta: 2 }
    ],
    feedback: `Você acabou de aprender como funciona a adição. Essa conta será utilizada muitas vezes na sua vida profissional. Continue assim!`
  },
  { id: 'tema2', numero: 2, titulo: 'Subtração', icone: '➖', pendente: true, dica: 'Exemplo dado: 80 − 30 = 50. Faltam as 5 perguntas completas.' },
  { id: 'tema3', numero: 3, titulo: 'Multiplicação', icone: '✖️', pendente: true, dica: 'Exemplo dado: 4 × 15 = 60. Faltam as 5 perguntas completas.' },
  { id: 'tema4', numero: 4, titulo: 'Divisão', icone: '➗', pendente: true },
  { id: 'tema5', numero: 5, titulo: 'Porcentagem', icone: '📊', pendente: true, dica: 'Exemplos dados: 20% de R$100 e 10% de R$50. Faltam as 5 perguntas completas.' },
  { id: 'tema6', numero: 6, titulo: 'Organização Financeira', icone: '📅', pendente: true },
  { id: 'tema7', numero: 7, titulo: 'Matemática do dia a dia', icone: '🛒', pendente: true },
  { id: 'tema8', numero: 8, titulo: 'Matemática no ambiente de trabalho', icone: '🏢', pendente: true }
];

/* ---------------------- MÓDULO DE REDAÇÃO (Volume 6) ---------------------- */
const REDACAO_TEMAS = [
  {
    id: 'tema1', numero: 1, titulo: 'Conhecendo a estrutura', icone: '✍️', tipo: 'quiz',
    mensagemSah: `Oi, Mayara! Hoje vamos aprender uma habilidade que pode fazer muita diferença na sua primeira entrevista. Algumas empresas pedem uma pequena redação durante o processo seletivo. Mas calma! Você não precisa escrever um texto enorme. Vou te mostrar um jeito bem simples de organizar as suas ideias. Vamos juntas?`,
    explicacao: `Uma boa redação é como contar uma história organizada. Ela tem três partes:\n🟢 Introdução — você apresenta o assunto.\n🟡 Desenvolvimento — você explica melhor sua ideia.\n🔵 Conclusão — você encerra o texto mostrando sua opinião ou uma solução.\nNão é preciso escrever muito. O importante é que o texto tenha começo, meio e fim.`,
    curiosidade: `Mesmo quando a empresa não pede uma redação, saber organizar suas ideias ajuda muito durante a entrevista. Quando você responde de forma organizada, transmite mais confiança.`,
    resumo: `Toda redação precisa ter: Introdução, Desenvolvimento e Conclusão.`,
    perguntas: [
      { texto: 'Qual parte apresenta o assunto?', opcoes: ['Introdução', 'Desenvolvimento', 'Conclusão'], correta: 0 },
      { texto: 'Qual parte explica melhor a ideia?', opcoes: ['Introdução', 'Desenvolvimento', 'Conclusão'], correta: 1 },
      { texto: 'Qual parte encerra o texto?', opcoes: ['Desenvolvimento', 'Introdução', 'Conclusão'], correta: 2 },
      { texto: 'Uma redação organizada precisa ter...', opcoes: ['Apenas um parágrafo.', 'Começo, meio e fim.', 'Muitas palavras difíceis.'], correta: 1 },
      { texto: 'O mais importante em uma redação é...', opcoes: ['Escrever difícil.', 'Organizar as ideias.', 'Escrever muitas páginas.'], correta: 1 }
    ],
    feedback: `Escrever bem começa organizando as ideias. Você está indo muito bem!`
  },
  { id: 'tema2', numero: 2, titulo: 'Construindo frases', icone: '✍️', tipo: 'quiz', pendente: true },
  { id: 'tema3', numero: 3, titulo: 'Ligando ideias', icone: '✍️', tipo: 'quiz', pendente: true },
  { id: 'tema4', numero: 4, titulo: 'Organizando parágrafos', icone: '✍️', tipo: 'quiz', pendente: true },
  {
    id: 'tema5', numero: 5, titulo: 'Minha primeira redação', icone: '✍️', tipo: 'redacao_livre',
    mensagemSah: `Agora chegou a hora de escrever um pequeno texto. Não tenha medo. Não existe texto perfeito. O importante é colocar suas ideias no papel. Eu vou ajudar você.`,
    temaRedacao: 'Por que quero conquistar meu primeiro emprego?',
    modelo: {
      introducao: 'Conquistar meu primeiro emprego é importante para mim porque...',
      desenvolvimento: 'Acredito que essa oportunidade vai me ajudar...',
      conclusao: 'Espero aprender bastante e crescer profissionalmente.'
    }
  },
  { id: 'tema6', numero: 6, titulo: 'Redação guiada', icone: '✍️', tipo: 'redacao_livre', pendente: true, dica: 'Tema: A importância dos estudos. Perguntas-guia dadas no documento, mas sem estrutura final detalhada.' },
  { id: 'tema7', numero: 7, titulo: 'Redação para entrevistas', icone: '✍️', tipo: 'redacao_livre', pendente: true, dica: 'Tema: Como imagino meu futuro profissional.' },
  { id: 'tema8', numero: 8, titulo: 'Redação de atualidades', icone: '✍️', tipo: 'redacao_livre', pendente: true },
  {
    id: 'tema9', numero: 9, titulo: 'Escrevendo um e-mail', icone: '✍️', tipo: 'quiz', pendente: true,
    dica: 'Estrutura e exemplo de e-mail fornecidos, mas as 5 perguntas objetivas não foram detalhadas.'
  },
  {
    id: 'tema10', numero: 10, titulo: 'Mini redação final', icone: '🏁', tipo: 'redacao_livre',
    mensagemSah: `Chegou a hora do desafio final de redação!`,
    temasSorteio: [
      'O que significa responsabilidade?',
      'Como posso ajudar minha equipe?',
      'Qual a importância da educação?',
      'O valor da organização.',
      'Meu maior sonho profissional.',
      'Como quero crescer nos próximos cinco anos.'
    ]
  }
];

/* ---------------------- SIMULADOR DE ENTREVISTAS (Volume 7) ---------------------- */
const BANCO_ENTREVISTA = [
  { categoria: 'Apresentação', dica: null, perguntas: [
    'Conte um pouco sobre você.',
    'Como você se descreveria?',
    'Quem é a Mayara?',
    'O que você gosta de fazer?',
    'Quais são seus hobbies?'
  ]},
  { categoria: 'Escola', dica: 'Sempre responda com sinceridade. Mas lembre-se de relacionar sua resposta com a vaga. Por exemplo: se estiver participando de uma vaga administrativa, faz mais sentido explicar por que gosta de Matemática ou Português do que responder apenas Educação Física, sem justificar.', perguntas: [
    'Como está sendo sua experiência na escola?',
    'Qual matéria você mais gosta?'
  ]},
  { categoria: 'Família', dica: 'O recrutador faz essas perguntas para entender seu senso de responsabilidade, organização e convivência.', perguntas: [
    'Quem mora com você?',
    'Como é sua rotina em casa?',
    'Você ajuda nas tarefas?',
    'O que costuma fazer quando chega da escola?'
  ]},
  { categoria: 'Primeiro emprego', dica: null, perguntas: [
    'Por que você quer trabalhar?',
    'O que espera aprender?',
    'O que significa conquistar seu primeiro emprego?',
    'Como você acredita que essa oportunidade pode mudar sua vida?'
  ]},
  { categoria: 'Empresa', dica: 'Nunca vá para uma entrevista sem pesquisar sobre a empresa. Conhecer o ramo, os produtos, os serviços e a história demonstra interesse e faz muita diferença.', perguntas: [
    'Você conhece nossa empresa?',
    'O que pesquisou sobre nós?',
    'Por que deseja trabalhar aqui?',
    'O que chamou sua atenção nesta vaga?'
  ]},
  { categoria: 'Qualidades', dica: 'Sempre escolha até três qualidades. Depois explique por quê. Exemplo: "Sou organizada porque gosto de manter minhas atividades anotadas e cumprir meus horários."', perguntas: [
    'Quais são suas principais qualidades?'
  ]},
  { categoria: 'Pontos a desenvolver', dica: 'Nunca diga apenas um defeito. Sempre explique o que você está fazendo para melhorar. Nunca escolha um ponto que elimine você da vaga.', perguntas: [
    'Existe alguma característica que você deseja melhorar?'
  ]},
  { categoria: 'Atualidades', dica: 'Uma boa resposta pode incluir: assistir vídeos educativos, ler notícias, fazer cursos, utilizar Inteligência Artificial para estudar, pesquisar assuntos novos.', perguntas: [
    'O que você faz para aprender coisas novas?',
    'Como costuma se atualizar?',
    'Você acompanha notícias?',
    'Você utiliza a internet para estudar?'
  ]},
  { categoria: 'Inteligência Artificial', dica: 'Mostre que entende a IA como uma ferramenta de apoio, nunca como substituta do próprio aprendizado.', perguntas: [
    'Você conhece Inteligência Artificial?',
    'Como ela pode ajudar no trabalho?',
    'Você já utilizou alguma ferramenta de IA?'
  ]},
  { categoria: 'Perguntas clássicas', dica: null, perguntas: [
    'Por que devemos contratar você?',
    'Onde você se vê daqui a cinco anos?',
    'Se pudesse aprender qualquer coisa, o que escolheria?',
    'Como você reage quando não sabe fazer alguma atividade?',
    'Como lida com desafios?',
    'Qual sua pretensão salarial?'
  ]}
];

const DICA_CINCO_ANOS = `Uma boa resposta pode ser: "Daqui a cinco anos espero estar muito mais desenvolvida profissionalmente, aprendendo cada vez mais, conquistando novos desafios e também ajudando outras pessoas com o conhecimento que adquiri ao longo dessa caminhada."`;
const DICA_SALARIO = `Como esta é sua primeira oportunidade, seu principal objetivo é aprender, crescer e adquirir experiência. Você pode responder que sabe que vagas de Jovem Aprendiz normalmente possuem remuneração de até um salário mínimo, e que sua expectativa está alinhada com essa faixa, priorizando principalmente seu desenvolvimento profissional.`;

const PERGUNTAS_PARA_RECRUTADOR = [
  'Como será meu dia a dia?',
  'Quais serão minhas principais atividades?',
  'Como é a equipe?',
  'Quais habilidades vocês consideram mais importantes para essa função?',
  'Existe treinamento para quem está começando?'
];

/* ---------------------- CURSOS (Volume 3) ---------------------- */
const CURSOS = [
  { id: 'office', titulo: 'Pacote Office', icone: '💼', checklist: ['Word', 'Excel', 'PowerPoint', 'Outlook'] },
  { id: 'ia', titulo: 'Fundamentos de Inteligência Artificial', icone: '🤖', checklist: [] },
  { id: 'atendimento', titulo: 'Atendimento ao Cliente', icone: '💬', checklist: [] }
];

/* ---------------------- CONQUISTAS (Volume 10 / Volume 8) ---------------------- */
const CONQUISTAS_DEF = [
  { id: 'primeiro_acesso', titulo: 'Primeiro acesso', icone: '🏆' },
  { id: 'primeiro_curso', titulo: 'Primeiro curso', icone: '🏆' },
  { id: 'primeira_entrevista', titulo: 'Primeira entrevista', icone: '🏆' },
  { id: 'primeira_redacao', titulo: 'Primeira redação', icone: '🏆' },
  { id: 'matematica_concluida', titulo: 'Matemática concluída', icone: '🏆' },
  { id: 'portugues_concluido', titulo: 'Português concluído', icone: '🏆' },
  { id: 'redacao_concluida', titulo: 'Redação concluída', icone: '🏆' },
  { id: 'todos_cursos', titulo: 'Todos os cursos concluídos', icone: '🏆' },
  { id: 'plataforma_concluida', titulo: 'Plataforma concluída', icone: '🏆' }
];
