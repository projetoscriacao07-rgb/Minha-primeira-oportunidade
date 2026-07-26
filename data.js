/* ==========================================================================
   Banco de conteúdo oficial — Volumes 2 a 7, mais o conteúdo criado a
   pedido do usuário para completar os temas que os documentos originais
   não detalharam por completo (autorizado explicitamente no chat).
   O questionário comportamental (base DISC) nunca é nomeado como tal para
   a Mayara — apenas o painel da Sah (#/admin) tem acesso ao resultado.
   ========================================================================== */

const ONBOARDING = [
  {
    id: 'tela1',
    autor: 'sah',
    destaque: true,
    mensagens: [
      { negrito: true, texto: `Oii Mayara, seja bem vinda!!` },
      { texto: `Criei este material especialmente para você. Meu objetivo é ajudar você a conquistar sua primeira oportunidade de trabalho.` },
      { texto: `Durante toda essa jornada vou compartilhar dicas, exercícios e tudo aquilo que pode fazer diferença na sua primeira entrevista.` },
      { texto: `Você poderá voltar quando quiser, repetir qualquer atividade e acompanhar toda a sua evolução.` },
      { texto: `Conte comigo e bons estudos 💖` }
    ],
    botao: 'Começar minha jornada'
  },
  {
    id: 'tela2',
    autor: 'sah',
    texto: `Antes de começarmos nossa preparação, quero conhecer você um pouquinho melhor. Não existe resposta certa ou errada, combinado? Escolha a opção que mais parece com você. 🌸`,
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

/* Questionário comportamental — nunca chamado de "DISC" para a Mayara.
   Cada pergunta tem 4 opções, sempre na mesma ordem de perfil:
   opção A (índice 0) = Dominância, B (1) = Influência,
   C (2) = Estabilidade, D (3) = Conformidade.
   O resultado só aparece no painel da Sah (#/admin), nunca para a Mayara. */
const QUESTIONARIO_COMPORTAMENTAL = [
  { texto: 'Quando surge um desafio, normalmente você...', opcoes: ['Gosto de resolver logo e encontrar uma solução.', 'Converso com outras pessoas para trocar ideias.', 'Prefiro analisar tudo com calma antes.', 'Procuro entender exatamente o que preciso fazer.'] },
  { texto: 'Na escola ou em um trabalho em grupo você costuma...', opcoes: ['Tomar iniciativa.', 'Incentivar todo mundo.', 'Ajudar quando alguém precisa.', 'Organizar as tarefas.'] },
  { texto: 'Quando você aprende algo novo...', opcoes: ['Quero colocar em prática rapidamente.', 'Gosto de compartilhar com outras pessoas.', 'Prefiro praticar até me sentir segura.', 'Gosto de entender todos os detalhes primeiro.'] },
  { texto: 'Se você tivesse um dia totalmente livre...', opcoes: ['Faria algo diferente.', 'Passaria tempo com pessoas que gosto.', 'Descansaria e faria algo tranquilo.', 'Organizaria algumas coisas pendentes.'] },
  { texto: 'Quando alguém pede sua ajuda...', opcoes: ['Resolvo imediatamente.', 'Converso bastante para entender.', 'Faço o possível para ajudar.', 'Primeiro procuro entender exatamente o problema.'] },
  { texto: 'Você acredita que sua maior qualidade é...', opcoes: ['Determinação.', 'Comunicação.', 'Paciência.', 'Organização.'] },
  { texto: 'Quando precisa tomar uma decisão...', opcoes: ['Decido rapidamente.', 'Converso com alguém antes.', 'Penso bastante antes de decidir.', 'Analiso todas as informações possíveis.'] },
  { texto: 'Quando conhece pessoas novas...', opcoes: ['Vou puxando assunto naturalmente.', 'Faço amizade com facilidade.', 'Espero a pessoa conversar comigo primeiro.', 'Observo bastante antes de conversar.'] },
  { texto: 'Quando recebe uma tarefa...', opcoes: ['Quero terminar logo.', 'Gosto de fazer junto com alguém.', 'Faço com calma.', 'Gosto de seguir todas as instruções.'] },
  { texto: 'Se alguma coisa dá errado...', opcoes: ['Tento resolver imediatamente.', 'Procuro alguém para conversar.', 'Respiro e penso antes de agir.', 'Tento entender exatamente o que aconteceu.'] },
  { texto: 'Você prefere ambientes...', opcoes: ['Agitados.', 'Alegres e cheios de pessoas.', 'Calmos.', 'Organizados.'] },
  { texto: 'Quando recebe um elogio...', opcoes: ['Fico motivada para fazer ainda melhor.', 'Fico muito feliz e gosto de compartilhar.', 'Agradeço com tranquilidade.', 'Entendo que meu esforço valeu a pena.'] },
  { texto: 'Quando precisa aprender algo...', opcoes: ['Tento fazer logo.', 'Gosto que alguém me explique.', 'Vou aprendendo aos poucos.', 'Gosto de estudar antes de começar.'] },
  { texto: 'No futuro você gostaria de ser conhecida por ser uma pessoa...', opcoes: ['Corajosa.', 'Inspiradora.', 'Confiável.', 'Competente.'] },
  { texto: 'Para terminar... qual frase mais combina com você?', opcoes: ['"Gosto de resolver problemas."', '"Gosto de conversar e ajudar pessoas."', '"Gosto de fazer tudo com calma e dedicação."', '"Gosto das coisas bem organizadas."'] }
];

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
  {
    id: 'tema2', numero: 2, titulo: 'Uso do S', icone: '📝',
    mensagemSah: `Oi, Mayara! Hoje vamos falar sobre uma letra que aparece bastante nas palavras: o S. Vou te mostrar como ele pode soar de formas diferentes.`,
    explicacao: `O S pode ter sons diferentes dependendo de onde ele aparece na palavra.\n\nNo começo da palavra, o S tem som de S:\n✔ Sapo\n✔ Salada\n✔ Siri\n\nQuando o S fica entre duas vogais, ele tem som de Z:\n✔ Casa (soa como "caza")\n✔ Mesa (soa como "meza")\n✔ Camisa (soa como "camiza")`,
    curiosidade: `Saber quando uma palavra usa S ou Z te ajuda a escrever com mais segurança em textos, e-mails e mensagens profissionais.`,
    resumo: `No começo da palavra, o S soa como S. Entre vogais, o S soa como Z.`,
    perguntas: [
      { texto: 'Qual palavra começa com o som de S?', opcoes: ['Sapo', 'Casa', 'Mesa', 'Camisa'], correta: 0, explicacao: 'Sapo começa com o som de S.' },
      { texto: 'Em qual palavra o S tem som de Z?', opcoes: ['Salada', 'Siri', 'Casa', 'Sapato'], correta: 2, explicacao: 'Em Casa, o S está entre vogais e soa como Z.' },
      { texto: 'Complete: Ele fez uma __alada de frutas.', opcoes: ['S', 'Z'], correta: 0, explicacao: 'No início da palavra, usamos S: Salada.' },
      { texto: 'Qual destas palavras tem o S soando como Z?', opcoes: ['Sozinho', 'Sábado', 'Mesa', 'Sapo'], correta: 2, explicacao: 'Em Mesa, o S está entre vogais e soa como Z.' },
      { texto: 'Assinale a palavra escrita corretamente.', opcoes: ['Kasa', 'Caza', 'Casa', 'Caça'], correta: 2, explicacao: 'A grafia correta é Casa, com S.' }
    ],
    feedback: `Usar o S corretamente deixa seus textos mais claros e profissionais. Continue praticando!`
  },
  {
    id: 'tema3', numero: 3, titulo: 'Uso do SS', icone: '📝',
    mensagemSah: `Oi, Mayara! Agora vamos aprender quando usamos duas letras S juntas, o SS.`,
    explicacao: `O SS é usado entre duas vogais para manter o som de S (sem virar som de Z).\n\nVeja exemplos:\n✔ Passar\n✔ Assunto\n✔ Professor\n✔ Interessante\n\nSe usássemos apenas um S nessas palavras, o som mudaria para Z. Por isso usamos SS.`,
    curiosidade: `O SS aparece bastante em palavras do dia a dia no trabalho, como "processo", "assinatura" e "necessário".`,
    resumo: `Usamos SS entre vogais para manter o som de S.`,
    perguntas: [
      { texto: 'Qual palavra está correta?', opcoes: ['Paçar', 'Passar', 'Pasar', 'Paçsar'], correta: 1, explicacao: 'A grafia correta é Passar, com SS.' },
      { texto: 'Complete: Isso é um a__unto sério.', opcoes: ['s', 'ss'], correta: 1, explicacao: 'A palavra correta é Assunto, com SS.' },
      { texto: 'Qual está escrita corretamente?', opcoes: ['Profesor', 'Professor', 'Proffessor', 'Profeçor'], correta: 1, explicacao: 'A grafia correta é Professor, com SS.' },
      { texto: 'Complete: Achei muito intere__ante.', opcoes: ['s', 'ss'], correta: 1, explicacao: 'A palavra correta é Interessante, com SS.' },
      { texto: 'Qual palavra usa SS corretamente?', opcoes: ['Necesario', 'Necessário', 'Neçessário', 'Necesssário'], correta: 1, explicacao: 'A grafia correta é Necessário, com SS.' }
    ],
    feedback: `Muito bem! O SS aparece bastante em textos formais e profissionais.`
  },
  {
    id: 'tema4', numero: 4, titulo: 'Uso do Ç', icone: '📝',
    mensagemSah: `Oi, Mayara! Vamos aprender quando usar o Ç, aquela letra com o "rabinho" embaixo.`,
    explicacao: `Usamos a letra Ç (c com cedilha) antes das vogais A, O e U para dar som de S.\n\nExemplos:\n✔ Criança\n✔ Moço\n✔ Açúcar\n\nAntes de E e I, usamos apenas C para o mesmo som (não usamos Ç):\n✔ Cedo\n✔ Cimento`,
    curiosidade: `O Ç nunca aparece no início de uma palavra em português — sempre vem depois de uma vogal.`,
    resumo: `Usamos Ç antes de A, O e U para o som de S.`,
    perguntas: [
      { texto: 'Qual palavra está correta?', opcoes: ['Crianssa', 'Criança', 'Criansa', 'Criânça'], correta: 1, explicacao: 'A grafia correta é Criança, com Ç.' },
      { texto: 'Complete: Ele é um mo__o muito educado.', opcoes: ['ç', 'c', 's', 'x'], correta: 0, explicacao: 'Antes de O, usamos Ç: Moço.' },
      { texto: 'Qual palavra está escrita corretamente?', opcoes: ['Assucar', 'Açucar', 'Açúcar', 'Asucar'], correta: 2, explicacao: 'A grafia correta é Açúcar, com Ç e acento.' },
      { texto: 'Em qual palavra usamos o Ç?', opcoes: ['Cedo', 'Cimento', 'Moço', 'Cinema'], correta: 2, explicacao: 'Moço usa Ç antes do O.' },
      { texto: 'Complete: Gosto de doce com muito __úcar.', opcoes: ['ç', 'c', 's', 'z'], correta: 0, explicacao: 'Antes de U, usamos Ç: Açúcar.' }
    ],
    feedback: `Muito bem! O Ç é uma letra importante para deixar sua escrita correta.`
  },
  {
    id: 'tema5', numero: 5, titulo: 'Uso do Z', icone: '📝',
    mensagemSah: `Oi, Mayara! Agora vamos falar sobre a letra Z e onde ela costuma aparecer.`,
    explicacao: `Usamos Z no início de algumas palavras e também entre vogais, dando o som de Z.\n\nExemplos:\n✔ Zebra\n✔ Fazer\n✔ Cozinha\n✔ Feliz`,
    curiosidade: `Muitas palavras que terminam com "ez" ou "iz", como "feliz" e "rapidez", usam Z no final.`,
    resumo: `Usamos Z no início de palavras e em algumas terminações e palavras com som de Z.`,
    perguntas: [
      { texto: 'Qual palavra está correta?', opcoes: ['Sebra', 'Zebra', 'Xebra', 'Cebra'], correta: 1, explicacao: 'A grafia correta é Zebra, com Z.' },
      { texto: 'Qual dessas palavras tem a letra Z?', opcoes: ['Casa', 'Cozinha', 'Sapo', 'Selo'], correta: 1, explicacao: 'Cozinha tem a letra Z.' },
      { texto: 'Complete: Estou muito feli__ hoje.', opcoes: ['s', 'z'], correta: 1, explicacao: 'A palavra correta é Feliz, terminada com Z.' },
      { texto: 'Qual palavra termina com Z?', opcoes: ['Rapidez', 'Rapides', 'Rapidiz', 'Rapidhes'], correta: 0, explicacao: 'A grafia correta é Rapidez, com Z no final.' },
      { texto: 'Assinale a palavra correta.', opcoes: ['Zapato', 'Sapato', 'Xapato', 'Çapato'], correta: 1, explicacao: 'A grafia correta é Sapato, com S (não com Z).' }
    ],
    feedback: `Muito bem! Reconhecer o som de Z te ajuda a escrever com mais confiança.`
  },
  {
    id: 'tema6', numero: 6, titulo: 'Acentuação', icone: '📝',
    mensagemSah: `Oi, Mayara! Agora vamos falar sobre os acentos, aqueles sinais que aparecem em cima de algumas letras.`,
    explicacao: `O acento (´ ou ^) indica qual sílaba deve ser pronunciada com mais força, e às vezes muda o som da vogal.\n\nExemplos do dia a dia:\n✔ Café\n✔ Você\n✔ Ônibus\n✔ Água`,
    curiosidade: `Esquecer um acento pode até mudar o sentido de uma palavra, por isso ele é importante em textos profissionais.`,
    resumo: `O acento mostra a sílaba mais forte da palavra e ajuda a não errar a pronúncia.`,
    perguntas: [
      { texto: 'Qual palavra está acentuada corretamente?', opcoes: ['Cafe', 'Café', 'Cafê', 'Cáfe'], correta: 1, explicacao: 'A grafia correta é Café, com acento agudo.' },
      { texto: 'Qual está correta?', opcoes: ['Voce', 'Você', 'Vocë', 'Vôce'], correta: 1, explicacao: 'A grafia correta é Você, com acento agudo.' },
      { texto: 'Complete: Pegamos o __nibus da manhã.', opcoes: ['o', 'ô'], correta: 1, explicacao: 'A palavra correta é Ônibus, com acento circunflexo.' },
      { texto: 'Qual palavra precisa de acento?', opcoes: ['Agua', 'Casa', 'Sapo', 'Livro'], correta: 0, explicacao: 'A grafia correta é Água, com acento agudo.' },
      { texto: 'Qual das opções está correta?', opcoes: ['Esta', 'Está', 'Éstá', 'Estâ'], correta: 1, explicacao: 'Quando queremos dizer "encontra-se", a grafia correta é Está, com acento.' }
    ],
    feedback: `Muito bem! Os acentos deixam sua escrita mais precisa e profissional.`
  },
  {
    id: 'tema7', numero: 7, titulo: 'Pontuação', icone: '📝',
    mensagemSah: `Oi, Mayara! Agora vamos aprender sobre pontuação: vírgula, ponto final, interrogação, exclamação e dois pontos.`,
    explicacao: `A pontuação ajuda o leitor a entender o ritmo e o sentido de uma frase.`,
    curiosidade: `Usar a pontuação corretamente evita mal-entendidos em mensagens e e-mails profissionais.`,
    resumo: `Cada sinal de pontuação tem uma função diferente na frase.`,
    perguntas: [
      { texto: '"Bom dia Mayara" — Qual opção está correta?', opcoes: ['Bom dia Mayara', 'Bom dia, Mayara.', 'Bom dia; Mayara', 'Bom dia: Mayara'], correta: 1, explicacao: 'Usamos vírgula para separar o vocativo.' },
      { texto: 'Qual frase está com a pontuação de pergunta correta?', opcoes: ['Você pode me ajudar', 'Você pode me ajudar.', 'Você pode me ajudar?', 'Você pode me ajudar!'], correta: 2, explicacao: 'Perguntas terminam com ponto de interrogação (?).' },
      { texto: 'Qual pontuação usamos para demonstrar surpresa ou emoção forte?', opcoes: ['Vírgula', 'Ponto final', 'Interrogação', 'Exclamação'], correta: 3, explicacao: 'A exclamação (!) indica emoção ou surpresa.' },
      { texto: 'Qual opção usa a vírgula corretamente?', opcoes: ['Olá, tudo bem?', 'Olá tudo, bem?', 'Olá tudo bem,?', 'Olá tudo bem?,'], correta: 0, explicacao: 'A vírgula separa a saudação do restante da frase: "Olá, tudo bem?".' },
      { texto: 'Para que servem os dois pontos (:)?', opcoes: ['Para fazer uma pergunta', 'Para apresentar uma lista ou explicação', 'Para demonstrar surpresa', 'Para terminar uma frase'], correta: 1, explicacao: 'Os dois pontos introduzem uma explicação, lista ou fala.' }
    ],
    feedback: `Usar a pontuação corretamente ajuda a evitar mal-entendidos em e-mails e mensagens profissionais.`
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
  {
    id: 'tema10', numero: 10, titulo: 'Antônimos', icone: '📝',
    mensagemSah: `Agora vamos aprender o contrário dos sinônimos! Os antônimos são palavras com significados opostos.`,
    explicacao: `Exemplos de antônimos:\nGrande × Pequeno\nAlto × Baixo\nFeliz × Triste\nEntrar × Sair\nLigado × Desligado`,
    curiosidade: `Conhecer antônimos ajuda muito na hora de fazer provas e testes de linguagem em processos seletivos.`,
    resumo: `Antônimos são palavras com sentidos opostos.`,
    perguntas: [
      { texto: 'Qual é o antônimo de "grande"?', opcoes: ['Enorme', 'Pequeno', 'Alto', 'Gigante'], correta: 1, explicacao: 'O contrário de grande é pequeno.' },
      { texto: 'Qual é o antônimo de "alto"?', opcoes: ['Baixo', 'Grande', 'Forte', 'Rápido'], correta: 0, explicacao: 'O contrário de alto é baixo.' },
      { texto: 'Qual palavra é o contrário de "feliz"?', opcoes: ['Alegre', 'Triste', 'Calmo', 'Cansado'], correta: 1, explicacao: 'O contrário de feliz é triste.' },
      { texto: 'Qual é o antônimo de "entrar"?', opcoes: ['Chegar', 'Sair', 'Ficar', 'Voltar'], correta: 1, explicacao: 'O contrário de entrar é sair.' },
      { texto: 'Qual é o contrário de "ligado"?', opcoes: ['Aceso', 'Desligado', 'Ativo', 'Ligeiro'], correta: 1, explicacao: 'O contrário de ligado é desligado.' }
    ],
    feedback: `Muito bem! Conhecer antônimos deixa sua comunicação ainda mais rica.`
  },
  {
    id: 'tema11', numero: 11, titulo: 'Escrita Profissional', icone: '📝',
    mensagemSah: `No ambiente profissional, saber escrever corretamente faz muita diferença. Uma mensagem bem escrita demonstra educação e organização.`,
    explicacao: `Veja a diferença:\n\n❌ Mensagem inadequada: "oi manda o arquivo"\n\n✔ Mensagem profissional: "Olá! Bom dia. Você poderia me enviar o arquivo, por favor? Obrigada!"`,
    curiosidade: `Recrutadores e colegas de trabalho notam bastante o jeito como você escreve mensagens, mesmo as mais simples.`,
    resumo: `Mensagens profissionais são educadas, claras e completas.`,
    perguntas: [
      { texto: 'Qual mensagem é mais profissional?', opcoes: ['oi manda os dados', 'Bom dia! Você poderia me enviar os dados, por favor?', 'manda os dados ai', 'pfv manda os dados'], correta: 1, explicacao: 'A mensagem educada e completa é a mais profissional.' },
      { texto: 'O que torna uma mensagem mais profissional?', opcoes: ['Usar poucas palavras', 'Usar educação e clareza', 'Escrever tudo em maiúsculo', 'Não se despedir'], correta: 1, explicacao: 'Educação e clareza são essenciais em mensagens profissionais.' },
      { texto: 'Qual destas é uma saudação adequada?', opcoes: ['oi', 'e ai', 'Bom dia!', 'fala'], correta: 2, explicacao: '"Bom dia!" é uma saudação educada.' },
      { texto: 'Qual mensagem demonstra mais organização?', opcoes: ['flw vlw', 'Obrigada pela atenção, qualquer dúvida me avise.', 'blz então', 'ok flw'], correta: 1, explicacao: 'Frases completas e educadas transmitem organização.' },
      { texto: 'Por que é importante escrever bem no trabalho?', opcoes: ['Porque é obrigatório', 'Porque demonstra educação e cuidado', 'Porque é mais rápido', 'Porque todo mundo faz assim'], correta: 1, explicacao: 'Escrever bem demonstra educação e cuidado com quem está lendo.' }
    ],
    feedback: `Muito bem! Escrever com educação e clareza é uma habilidade valiosa em qualquer profissão.`
  },
  {
    id: 'tema12', numero: 12, titulo: 'Escrevendo um e-mail', icone: '📝',
    mensagemSah: `Agora vamos aprender a estrutura básica de um e-mail profissional.`,
    explicacao: `Um e-mail profissional tem:\n✔ Saudação\n✔ Corpo da mensagem\n✔ Agradecimento\n✔ Despedida\n\nExemplo:\n"Olá! Tudo bem? Gostaria de agradecer pela oportunidade de participar do processo seletivo. Fico à disposição para qualquer informação. Muito obrigada! Atenciosamente, Mayara"`,
    curiosidade: `Terminar um e-mail com "Atenciosamente" antes do seu nome é uma prática usada em quase todas as empresas.`,
    resumo: `Todo e-mail profissional tem saudação, corpo, agradecimento e despedida.`,
    perguntas: [
      { texto: 'Qual destas é uma saudação para começar um e-mail?', opcoes: ['Olá! Tudo bem?', 'flw', 'e ai', 'oi vc'], correta: 0, explicacao: 'Uma saudação educada é o jeito certo de começar.' },
      { texto: 'O que deve vir no final de um e-mail profissional?', opcoes: ['Nada', 'Uma despedida, como "Atenciosamente"', 'Só o nome', 'Um emoji'], correta: 1, explicacao: 'Uma despedida educada encerra bem o e-mail.' },
      { texto: 'Qual é a parte principal onde você explica o motivo do e-mail?', opcoes: ['Saudação', 'Corpo da mensagem', 'Despedida', 'Assunto apenas'], correta: 1, explicacao: 'O corpo da mensagem é onde explicamos o motivo do contato.' },
      { texto: 'Por que é importante agradecer no e-mail?', opcoes: ['Não é importante', 'Demonstra educação e consideração', 'Só para deixar mais longo', 'Porque é obrigatório por lei'], correta: 1, explicacao: 'Agradecer demonstra educação.' },
      { texto: 'Qual opção representa um e-mail bem estruturado?', opcoes: ['Só o pedido, sem saudação', 'Saudação, corpo, agradecimento e despedida', 'Só a despedida', 'Muitos emojis e gírias'], correta: 1, explicacao: 'Um e-mail completo segue essa estrutura.' }
    ],
    feedback: `Muito bem! Agora você já sabe estruturar um e-mail profissional.`
  }
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
  {
    id: 'tema2', numero: 2, titulo: 'Subtração', icone: '➖',
    mensagemSah: `Agora vamos aprender a calcular diferenças. Sempre que retiramos uma quantidade de outra, utilizamos a subtração.`,
    explicacao: `Exemplo: você tinha R$ 80,00. Comprou um livro por R$ 30,00. Quanto sobrou?\n80 − 30 = R$ 50,00`,
    curiosidade: `A subtração é usada toda vez que você calcula troco em uma compra.`,
    resumo: `Subtrair é retirar uma quantidade de outra.`,
    perguntas: [
      { texto: '20 - 8 =', opcoes: ['10', '12', '14', '16'], correta: 1 },
      { texto: 'Você recebeu R$ 100,00 e gastou R$ 65,00. Quanto sobrou?', opcoes: ['R$ 30,00', 'R$ 35,00', 'R$ 40,00', 'R$ 45,00'], correta: 1 },
      { texto: '50 - 20 =', opcoes: ['20', '25', '30', '35'], correta: 2 },
      { texto: '45 - 15 =', opcoes: ['25', '30', '35', '40'], correta: 1 },
      { texto: 'Mayara tinha R$ 60,00 e gastou R$ 25,00 com transporte. Quanto sobrou?', opcoes: ['R$ 30,00', 'R$ 35,00', 'R$ 40,00', 'R$ 45,00'], correta: 1 }
    ],
    feedback: `Você acabou de aprender como funciona a subtração. Essa conta é usada toda vez que calculamos troco!`
  },
  {
    id: 'tema3', numero: 3, titulo: 'Multiplicação', icone: '✖️',
    mensagemSah: `Agora vamos aprender a multiplicação. Multiplicar é fazer várias vezes a mesma conta.`,
    explicacao: `Exemplo: você comprou 4 cadernos. Cada um custa R$ 15,00. Quanto gastou?\n4 × 15 = R$ 60,00`,
    curiosidade: `A multiplicação é muito usada para calcular o total de produtos ou o preço de várias unidades de um item.`,
    resumo: `Multiplicar é somar a mesma quantidade várias vezes.`,
    perguntas: [
      { texto: '6 × 5 =', opcoes: ['25', '30', '35', '40'], correta: 1 },
      { texto: 'Você comprou 3 canetas de R$ 4,00 cada. Quanto gastou?', opcoes: ['R$ 10,00', 'R$ 12,00', 'R$ 14,00', 'R$ 16,00'], correta: 1 },
      { texto: '7 × 3 =', opcoes: ['18', '21', '24', '27'], correta: 1 },
      { texto: 'Uma caixa tem 5 produtos. Quantos produtos há em 4 caixas?', opcoes: ['15', '18', '20', '22'], correta: 2 },
      { texto: '9 × 2 =', opcoes: ['16', '18', '20', '22'], correta: 1 }
    ],
    feedback: `Muito bem! A multiplicação vai te ajudar bastante a calcular quantidades no trabalho.`
  },
  {
    id: 'tema4', numero: 4, titulo: 'Divisão', icone: '➗',
    mensagemSah: `Agora vamos aprender a divisão. Dividir significa repartir algo em partes iguais.`,
    explicacao: `Exemplo: você comprou uma pizza e ela foi dividida igualmente entre 4 pessoas. Se a pizza tem 8 pedaços, cada pessoa recebe:\n8 ÷ 4 = 2 pedaços`,
    curiosidade: `A divisão é usada, por exemplo, quando dividimos uma conta entre amigos ou repartimos tarefas em uma equipe.`,
    resumo: `Dividir é repartir uma quantidade em partes iguais.`,
    perguntas: [
      { texto: '20 ÷ 4 =', opcoes: ['4', '5', '6', '7'], correta: 1 },
      { texto: 'Uma pizza com 8 pedaços foi dividida entre 4 pessoas. Quantos pedaços cada uma recebeu?', opcoes: ['1', '2', '3', '4'], correta: 1 },
      { texto: '15 ÷ 3 =', opcoes: ['4', '5', '6', '7'], correta: 1 },
      { texto: 'Uma equipe de 12 pessoas foi dividida em 3 grupos iguais. Quantas pessoas em cada grupo?', opcoes: ['3', '4', '5', '6'], correta: 1 },
      { texto: '18 ÷ 2 =', opcoes: ['7', '8', '9', '10'], correta: 2 }
    ],
    feedback: `Muito bem! A divisão é muito útil para repartir tarefas e valores de forma justa.`
  },
  {
    id: 'tema5', numero: 5, titulo: 'Porcentagem', icone: '📊',
    mensagemSah: `Esse assunto parece difícil. Mas vou mostrar como ele aparece no nosso dia a dia.`,
    explicacao: `Imagine que uma loja anunciou 20% de desconto. Se um produto custa R$ 100,00, um desconto de 20% significa que ele ficará R$ 20,00 mais barato.\nR$ 100,00 − R$ 20,00 = R$ 80,00\n\nOutro exemplo: uma camiseta custa R$ 50,00 e está com 10% de desconto. O desconto é R$ 5,00, então a camiseta fica R$ 45,00.`,
    curiosidade: `Porcentagem aparece o tempo todo em promoções, contracheques e até em notícias.`,
    resumo: `Porcentagem é uma forma de calcular uma parte de um valor total.`,
    perguntas: [
      { texto: 'Um produto de R$ 100,00 tem 10% de desconto. Qual o valor do desconto?', opcoes: ['R$ 5,00', 'R$ 10,00', 'R$ 15,00', 'R$ 20,00'], correta: 1 },
      { texto: 'Uma camiseta de R$ 50,00 com 10% de desconto fica por quanto?', opcoes: ['R$ 40,00', 'R$ 45,00', 'R$ 48,00', 'R$ 49,00'], correta: 1 },
      { texto: 'Um produto de R$ 200,00 tem 20% de desconto. Qual o valor final?', opcoes: ['R$ 150,00', 'R$ 160,00', 'R$ 170,00', 'R$ 180,00'], correta: 1 },
      { texto: '50% de um valor representa...', opcoes: ['A quarta parte', 'A metade', 'O dobro', 'O total'], correta: 1 },
      { texto: 'Um produto de R$ 80,00 tem 25% de desconto. Qual o valor do desconto?', opcoes: ['R$ 15,00', 'R$ 20,00', 'R$ 25,00', 'R$ 30,00'], correta: 1 }
    ],
    feedback: `Muito bem! Porcentagem vai te ajudar bastante a entender descontos e promoções.`
  },
  {
    id: 'tema6', numero: 6, titulo: 'Organização Financeira', icone: '📅',
    mensagemSah: `Mesmo no primeiro emprego é importante aprender a organizar seu dinheiro.`,
    explicacao: `Imagine que você recebeu R$ 900,00. Você gastou R$ 100,00 com transporte, R$ 150,00 com alimentação e R$ 200,00 para ajudar sua família. Quanto ainda sobrou?\n900 − 100 − 150 − 200 = R$ 450,00`,
    curiosidade: `Anotar seus gastos, mesmo os pequenos, ajuda muito a não gastar mais do que você recebe.`,
    resumo: `Organizar as finanças é saber quanto você recebe e quanto gasta em cada coisa.`,
    perguntas: [
      { texto: 'Você recebeu R$ 900,00, gastou R$ 100,00, R$ 150,00 e R$ 200,00. Quanto sobrou?', opcoes: ['R$ 400,00', 'R$ 450,00', 'R$ 500,00', 'R$ 550,00'], correta: 1 },
      { texto: 'Por que é importante anotar os gastos?', opcoes: ['Não é importante', 'Para saber para onde vai o dinheiro', 'Só para gastar mais', 'Para impressionar os outros'], correta: 1 },
      { texto: 'Você recebeu R$ 500,00 e guardou 20% para emergências. Quanto guardou?', opcoes: ['R$ 50,00', 'R$ 100,00', 'R$ 150,00', 'R$ 200,00'], correta: 1 },
      { texto: 'O que é mais recomendado fazer com o primeiro salário?', opcoes: ['Gastar tudo de uma vez', 'Planejar e guardar uma parte', 'Emprestar tudo', 'Ignorar o valor'], correta: 1 },
      { texto: 'Se você ganha R$ 600,00 e gasta R$ 550,00, quanto sobra?', opcoes: ['R$ 30,00', 'R$ 40,00', 'R$ 50,00', 'R$ 60,00'], correta: 2 }
    ],
    feedback: `Muito bem! Organizar as finanças desde o primeiro emprego faz toda diferença no futuro.`
  },
  {
    id: 'tema7', numero: 7, titulo: 'Matemática do dia a dia', icone: '🛒',
    mensagemSah: `Agora vamos ver como a matemática aparece em situações do dia a dia, como no mercado.`,
    explicacao: `Exemplo: você foi ao mercado, comprou itens que somaram R$ 37,00 e pagou com uma nota de R$ 50,00. Quanto de troco você recebe?\n50 − 37 = R$ 13,00`,
    curiosidade: `Saber calcular troco rapidamente é uma habilidade muito valorizada em vagas de atendimento e vendas.`,
    resumo: `A matemática do dia a dia envolve troco, parcelas e cálculos simples de compras.`,
    perguntas: [
      { texto: 'Você comprou algo de R$ 23,00 e pagou com R$ 50,00. Qual o troco?', opcoes: ['R$ 25,00', 'R$ 27,00', 'R$ 30,00', 'R$ 33,00'], correta: 1 },
      { texto: 'Um produto de R$ 120,00 foi dividido em 3 parcelas iguais. Qual o valor de cada parcela?', opcoes: ['R$ 30,00', 'R$ 40,00', 'R$ 50,00', 'R$ 60,00'], correta: 1 },
      { texto: 'Você comprou 2 produtos de R$ 15,00 cada. Quanto gastou no total?', opcoes: ['R$ 25,00', 'R$ 30,00', 'R$ 35,00', 'R$ 40,00'], correta: 1 },
      { texto: 'Pagou uma compra de R$ 18,00 com uma nota de R$ 20,00. Qual o troco?', opcoes: ['R$ 1,00', 'R$ 2,00', 'R$ 3,00', 'R$ 4,00'], correta: 1 },
      { texto: 'Um produto de R$ 90,00 foi parcelado em 3 vezes. Qual o valor de cada parcela?', opcoes: ['R$ 25,00', 'R$ 30,00', 'R$ 35,00', 'R$ 40,00'], correta: 1 }
    ],
    feedback: `Muito bem! Esses cálculos do dia a dia vão te ajudar em vários momentos, dentro e fora do trabalho.`
  },
  {
    id: 'tema8', numero: 8, titulo: 'Matemática no ambiente de trabalho', icone: '🏢',
    mensagemSah: `Agora vamos ver como a matemática aparece dentro de uma empresa, como na contagem de produtos e no controle de estoque.`,
    explicacao: `Exemplo: uma loja tinha 150 produtos em estoque. Foram vendidos 45 produtos. Quantos restaram?\n150 − 45 = 105 produtos`,
    curiosidade: `Muitas vagas de Jovem Aprendiz envolvem conferência de estoque e organização de materiais, por isso essa habilidade é bem valorizada.`,
    resumo: `No trabalho, usamos a matemática para contar produtos, organizar estoque e materiais.`,
    perguntas: [
      { texto: 'Uma loja tinha 150 produtos e vendeu 45. Quantos restaram?', opcoes: ['95', '100', '105', '110'], correta: 2 },
      { texto: 'Chegaram 30 novas caixas de material. Já havia 20 no estoque. Quantas caixas há agora?', opcoes: ['40', '45', '50', '55'], correta: 2 },
      { texto: 'Um escritório atendeu 8 clientes pela manhã e 6 à tarde. Quantos clientes no total?', opcoes: ['12', '13', '14', '15'], correta: 2 },
      { texto: 'Um estoque tinha 200 itens. Foram usados 75. Quantos restaram?', opcoes: ['115', '120', '125', '130'], correta: 2 },
      { texto: 'Você organizou 4 caixas com 10 documentos cada. Quantos documentos no total?', opcoes: ['30', '35', '40', '45'], correta: 2 }
    ],
    feedback: `Muito bem! Você já está mais preparada para lidar com números no seu primeiro emprego.`
  }
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
  {
    id: 'tema2', numero: 2, titulo: 'Construindo frases', icone: '✍️', tipo: 'quiz',
    mensagemSah: `Agora vamos aprender a escrever frases completas, que fazem sentido sozinhas.`,
    explicacao: `Uma frase precisa transmitir uma informação completa.\n\n❌ "Muito feliz."\n✔ "Fiquei muito feliz por participar da entrevista."`,
    curiosidade: `Frases completas deixam sua comunicação escrita muito mais clara, seja em um e-mail ou em uma redação.`,
    resumo: `Uma boa frase tem sentido completo, com sujeito e ação claros.`,
    perguntas: [
      { texto: 'Qual destas é uma frase completa?', opcoes: ['Muito cansada.', 'Cheguei muito cansada depois do trabalho.', 'Cansada hoje.', 'Bem cansada.'], correta: 1 },
      { texto: 'O que uma frase precisa ter para fazer sentido completo?', opcoes: ['Só palavras difíceis', 'Uma ideia completa', 'Muitas vírgulas', 'Ser bem curta'], correta: 1 },
      { texto: 'Qual frase está mais completa?', opcoes: ['Gostei muito.', 'Gostei muito da oportunidade de participar do processo.', 'Muito bom.', 'Gostei.'], correta: 1 },
      { texto: 'Qual opção completa melhor a frase: "Estou animada..."?', opcoes: ['Fim.', '...para começar esse novo desafio.', '.', ' '], correta: 1 },
      { texto: 'Por que é importante escrever frases completas?', opcoes: ['Para parecer inteligente', 'Para transmitir a ideia com clareza', 'Porque é obrigatório', 'Não é importante'], correta: 1 }
    ],
    feedback: `Muito bem! Frases completas deixam sua escrita muito mais clara.`
  },
  {
    id: 'tema3', numero: 3, titulo: 'Ligando ideias', icone: '✍️', tipo: 'quiz',
    mensagemSah: `Agora vamos aprender palavras que conectam ideias e deixam o texto mais organizado.`,
    explicacao: `Algumas palavras ajudam a conectar frases e ideias:\nPorque\nAlém disso\nPor isso\nTambém\nPorém\nEntão`,
    curiosidade: `Usar conectivos deixa seu texto mais fluido, como se as ideias estivessem "de mãos dadas".`,
    resumo: `Conectivos ligam ideias e deixam o texto mais organizado.`,
    perguntas: [
      { texto: 'Qual palavra indica uma explicação ou motivo?', opcoes: ['Porém', 'Porque', 'Também', 'Então'], correta: 1 },
      { texto: 'Qual palavra indica uma ideia contrária?', opcoes: ['Além disso', 'Porque', 'Porém', 'Também'], correta: 2 },
      { texto: 'Qual palavra soma uma nova informação?', opcoes: ['Além disso', 'Porém', 'Então', 'Por isso'], correta: 0 },
      { texto: 'Complete: "Estudei bastante, __ passei na prova."', opcoes: ['porém', 'por isso', 'também', 'porque'], correta: 1 },
      { texto: 'Complete: "Gosto de Matemática. __, gosto de Português."', opcoes: ['Porém', 'Além disso', 'Então', 'Porque'], correta: 1 }
    ],
    feedback: `Muito bem! Esses conectivos vão deixar seus textos muito mais organizados.`
  },
  {
    id: 'tema4', numero: 4, titulo: 'Organizando parágrafos', icone: '✍️', tipo: 'quiz',
    mensagemSah: `Agora vamos praticar a ordem certa das ideias em um texto.`,
    explicacao: `Um texto organizado apresenta as ideias em uma ordem lógica: primeiro o assunto, depois os detalhes, e por fim a conclusão.`,
    curiosidade: `Textos desorganizados são mais difíceis de entender, mesmo quando têm boas ideias.`,
    resumo: `A ordem das ideias é tão importante quanto as próprias ideias.`,
    perguntas: [
      { texto: 'O que deve vir primeiro em um texto organizado?', opcoes: ['A conclusão', 'A apresentação do assunto', 'Um exemplo qualquer', 'Nada em especial'], correta: 1 },
      { texto: 'Qual destas sequências está mais organizada?', opcoes: ['Conclusão, assunto, detalhes', 'Assunto, detalhes, conclusão', 'Detalhes, conclusão, assunto', 'Não importa a ordem'], correta: 1 },
      { texto: 'Por que a ordem das ideias é importante?', opcoes: ['Não é importante', 'Ajuda o leitor a entender melhor', 'Só deixa o texto maior', 'É só uma regra sem motivo'], correta: 1 },
      { texto: 'O que geralmente vem no final de um texto?', opcoes: ['A apresentação do assunto', 'A conclusão', 'Um novo assunto', 'Nada'], correta: 1 },
      { texto: 'Se as frases de um texto estão embaralhadas, o que acontece?', opcoes: ['O texto fica mais claro', 'O texto fica confuso', 'Não faz diferença', 'O texto fica mais bonito'], correta: 1 }
    ],
    feedback: `Muito bem! Organizar as ideias na ordem certa faz toda a diferença em um texto.`
  },
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
  {
    id: 'tema6', numero: 6, titulo: 'Redação guiada', icone: '✍️', tipo: 'redacao_livre',
    mensagemSah: `Agora vamos escrever sobre um tema que você conhece bem: a importância dos estudos. Antes de escrever, pense nas perguntas abaixo — elas vão te ajudar a organizar as ideias.`,
    temaRedacao: 'A importância dos estudos',
    guia: [
      'Você gosta de estudar? Por quê?',
      'O que você aprende na escola que considera importante?',
      'Como os estudos podem ajudar no seu futuro profissional?'
    ],
    modelo: {
      introducao: 'Estudar é importante para mim porque...',
      desenvolvimento: 'Na escola, aprendo coisas que me ajudam a...',
      conclusao: 'Por isso, pretendo continuar estudando para...'
    }
  },
  {
    id: 'tema7', numero: 7, titulo: 'Redação para entrevistas', icone: '✍️', tipo: 'redacao_livre',
    mensagemSah: `Esse tema aparece com frequência em processos seletivos: como você imagina o seu futuro profissional. Vamos praticar juntas.`,
    temaRedacao: 'Como imagino meu futuro profissional',
    modelo: {
      introducao: 'Quando imagino meu futuro profissional, penso em...',
      desenvolvimento: 'Para chegar lá, pretendo...',
      conclusao: 'Por isso, estou me preparando desde agora para...'
    }
  },
  {
    id: 'tema8', numero: 8, titulo: 'Redação de atualidades', icone: '✍️', tipo: 'redacao_livre',
    mensagemSah: `Agora vamos praticar escrever sobre temas atuais, usando uma linguagem simples e direta. O tema de hoje foi sorteado especialmente para você.`,
    temasSorteio: ['Uso da tecnologia', 'Redes sociais', 'Meio ambiente', 'Educação', 'Respeito', 'Família'],
    modelo: {
      introducao: 'Esse assunto é importante porque...',
      desenvolvimento: 'Na minha opinião...',
      conclusao: 'Por isso, acredito que...'
    }
  },
  {
    id: 'tema9', numero: 9, titulo: 'Escrevendo um e-mail', icone: '✍️', tipo: 'quiz',
    mensagemSah: `Vamos praticar a estrutura de um e-mail profissional mais uma vez, agora pensando em processos seletivos.`,
    explicacao: `Um e-mail profissional tem:\n✔ Saudação\n✔ Assunto\n✔ Corpo da mensagem\n✔ Agradecimento\n✔ Despedida\n\nExemplo:\nAssunto: Agradecimento pela entrevista\n"Olá! Gostaria de agradecer pela oportunidade de participar do processo seletivo. Fico muito feliz pela experiência e continuo à disposição caso precisem de mais alguma informação. Muito obrigada! Atenciosamente, Mayara"`,
    curiosidade: `Enviar um e-mail de agradecimento depois de uma entrevista é uma atitude muito bem vista pelos recrutadores.`,
    resumo: `Um bom e-mail tem saudação, assunto, corpo, agradecimento e despedida.`,
    perguntas: [
      { texto: 'O que deve aparecer no campo "Assunto" do e-mail?', opcoes: ['Nada', 'Um resumo do motivo do e-mail', 'Só o nome da empresa', 'Emojis'], correta: 1 },
      { texto: 'Qual é uma boa prática após uma entrevista?', opcoes: ['Não enviar nada', 'Enviar um e-mail de agradecimento', 'Ligar toda hora', 'Esquecer o assunto'], correta: 1 },
      { texto: 'Qual destas frases é uma despedida adequada?', opcoes: ['flw', 'Atenciosamente,', 'tchau', 'até mais tarde'], correta: 1 },
      { texto: 'O que deve vir no corpo do e-mail?', opcoes: ['O motivo do contato, de forma clara', 'Só uma saudação', 'Nada, só a despedida', 'Piadas'], correta: 0 },
      { texto: 'Por que é importante revisar o e-mail antes de enviar?', opcoes: ['Não é importante', 'Para evitar erros de escrita e garantir clareza', 'Só para deixar mais longo', 'Porque é obrigatório'], correta: 1 }
    ],
    feedback: `Muito bem! Agora você está ainda mais preparada para se comunicar por e-mail no ambiente profissional.`
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

/* Categorias disponíveis para as notas do Meu Caderno (Volume 1) */
const CATEGORIAS_CADERNO = ['Cursos', 'Entrevista', 'Matemática', 'Português', 'Redação', 'IA'];
