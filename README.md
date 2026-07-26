# Minha Primeira Oportunidade 💗

Site estático (HTML + CSS + JavaScript puro, sem build) que implementa a jornada
da Sah com a Mayara, com base nos Volumes 1 a 10 da especificação oficial.

## Como publicar usando só o GitHub (GitHub Pages)

1. Crie um repositório novo no GitHub (ex.: `minha-primeira-oportunidade`).
2. Envie todos os arquivos desta pasta para a raiz do repositório (pelo site do
   GitHub: "Add file" → "Upload files", ou por linha de comando com `git`).
3. No repositório, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/ (root)`.
5. Salve. Em alguns minutos o GitHub mostrará o link do site, algo como:
   `https://seu-usuario.github.io/minha-primeira-oportunidade/`

Não é necessário Node, build, npm ou qualquer servidor — é HTML/CSS/JS puro,
o GitHub Pages serve os arquivos diretamente.

## Como o progresso é salvo

Como o site é 100% estático (sem backend), todo o progresso da Mayara
(cursos, temas, redações, simulações de entrevista, conquistas) é salvo no
`localStorage` do navegador que ela usa. Isso significa:

- O progresso continua se ela fechar e abrir o navegador de novo, **no mesmo
  aparelho e navegador**.
- Se ela trocar de aparelho/navegador ou limpar os dados do site, o progresso
  não aparece automaticamente em outro lugar.
- Em "Configurações" existe um botão para reiniciar a jornada (apaga tudo).
- No painel `#/admin` existe um botão "Exportar dados (JSON)" para baixar uma
  cópia do progresso salvo.

Se no futuro vocês quiserem sincronizar o progresso entre aparelhos ou dar
acesso real ao painel da Sah com login protegido, será necessário um backend
(ex.: Firebase, Supabase) — isso está fora do que "somente GitHub" permite,
mas posso te ajudar a adicionar depois, se quiser.

## Estrutura do projeto

```
index.html      → página única, monta a interface dentro de #app
styles.css      → design system oficial (Volume 10): cores, fontes, botões, cards
data.js         → todo o conteúdo textual (mensagens da Sah, perguntas, feedbacks)
app.js          → estado (localStorage), roteamento (#/rota) e telas
.nojekyll       → evita que o GitHub Pages tente processar os arquivos com Jekyll
```

## O que já está funcionando

- Onboarding completo (Telas 1–10 do Volume 2), no formato de conversa.
- Dashboard com o menu oficial (Volume 10).
- Cursos (Pacote Office, IA, Atendimento) com checklist e anotações (Volume 3).
- Português: Temas 1 (M antes de P/B), 8 (Interpretação de texto) e 9 (Sinônimos)
  totalmente funcionais, com as 5 perguntas de cada um.
- Matemática: Tema 1 (Adição) totalmente funcional.
- Redação: Tema 1 (Estrutura) e Tema 5 (Minha primeira redação, com modelo).
- Simulador de entrevistas (Volume 7): sorteia de 10 a 15 perguntas do banco
  fornecido, com dicas por categoria, e gera feedback ao final.
- Painel da Sah simplificado (Volume 8): progresso, cursos, histórico de
  entrevistas, redações e exportação de dados.
- Conquistas (Volume 10) e barra de progresso geral.

## ⏳ Conteúdo pendente (não inventado, conforme regra do Volume 9)

O Volume 9 diz explicitamente: *"a IA não poderá criar textos próprios para
substituir os existentes. Caso algum conteúdo esteja incompleto, solicitar
complementação ao desenvolvedor em vez de inventar."*

Por isso, os temas abaixo aparecem na plataforma com um aviso de "conteúdo
pendente" — o texto das 5 perguntas oficiais ainda não foi enviado nos
documentos:

- **Português:** Temas 2 (Uso do S), 3 (Uso do SS), 4 (Uso do Ç), 5 (Uso do Z),
  6 (Acentuação), 7 (Pontuação — só uma pergunta foi dada), 10 (Antônimos —
  exemplos dados, faltam as perguntas), 11 (Escrita Profissional) e
  12 (E-mail).
- **Matemática:** Temas 2 a 8 (Subtração, Multiplicação, Divisão, Porcentagem,
  Organização Financeira, Matemática do dia a dia, Matemática no trabalho) —
  cada um tem só 1 exemplo, faltam as 5 perguntas de cada.
- **Redação:** Temas 2, 3, 4, 6, 7, 8 e 9.
- **Questionário comportamental inicial (base DISC):** o Volume 2 pede 15
  perguntas, mas o texto de cada pergunta e das opções não foi enviado.
- **Banco de ~100 perguntas de entrevista:** o Volume 7 pede um banco de
  aproximadamente 100 perguntas; os documentos detalham cerca de 40. O site já
  usa todas as que foram fornecidas, sorteando de 10 a 15 por simulação.

Quando você enviar o texto completo desses temas, é só me passar que eu
completo `data.js` com o conteúdo oficial (sem inventar nada).

## Próximos passos sugeridos

1. Testar o fluxo completo localmente (basta abrir `index.html` no navegador).
2. Publicar no GitHub Pages seguindo o passo a passo acima.
3. Me enviar os conteúdos pendentes listados acima para completar os módulos.
4. Se quiser, no futuro, considerar um backend simples (Firebase/Supabase)
   para a Sah acompanhar o progresso da Mayara remotamente pelo painel admin,
   em vez de depender apenas do navegador da Mayara.
