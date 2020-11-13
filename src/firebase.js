import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhU5dLM7zqVyhIZdE2-QOq9928ysAcx-E",
    authDomain: "lojateste-fa8d0.firebaseapp.com",
    databaseURL: "https://lojateste-fa8d0.firebaseio.com",
    projectId: "lojateste-fa8d0",
    storageBucket: "lojateste-fa8d0.appspot.com",
    messagingSenderId: "226543027382",
    appId: "1:226543027382:web:10d086cac1b44aff515217",
    measurementId: "G-SQ4Y9J2HT2"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export { db, auth, storage, functions};