import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCIXMKE0xSDNhdtPnR61FWL_zSSNUzyC2M",
  authDomain: "amzon-clone-747ec.firebaseapp.com",
  projectId: "amzon-clone-747ec",
  storageBucket: "amzon-clone-747ec.appspot.com",
  messagingSenderId: "353647592050",
  appId: "1:353647592050:web:245383c23fe49dc441f8eb",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
