/* ==========================================================================
   Configuração do Firebase — projeto "minha-primeira-oportunidade".
   A apiKey do Firebase não é um segredo: ela só identifica o projeto.
   A segurança de verdade fica nas Regras do Firestore (exigem login)
   e nos usuários cadastrados no Authentication.
   ========================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyCLYMMI8DJC5m3GKRr0pSiYn09bYJVPKog",
  authDomain: "minha-primeira-oportunidade.firebaseapp.com",
  projectId: "minha-primeira-oportunidade",
  storageBucket: "minha-primeira-oportunidade.firebasestorage.app",
  messagingSenderId: "1021017868173",
  appId: "1:1021017868173:web:0ddbf84d3460ecf3fbdfc4"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

/* Todo o progresso fica em um único documento compartilhado. Tanto a
   Mayara quanto a Sah fazem login (cada uma com seu próprio e-mail e
   senha, cadastrados no Firebase Authentication), e as duas leem e
   escrevem nesse mesmo documento. */
const DOC_ESTADO = db.collection('estados').doc('mayara');
