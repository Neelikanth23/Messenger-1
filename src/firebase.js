import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBRli27OfEKkPKNcI6DrRhQMNOJNf7jZRs",
  authDomain: "messenger-clone-a9dba.firebaseapp.com",
  databaseURL: "https://messenger-clone-a9dba.firebaseio.com",
  projectId: "messenger-clone-a9dba",
  storageBucket: "messenger-clone-a9dba.appspot.com",
  messagingSenderId: "745766657162",
  appId: "1:745766657162:web:7acd2fab7b93e648146173",
  measurementId: "G-TS0N29YNEZ",
});

const db = firebaseApp.firestore();

export default db;
