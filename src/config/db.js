import * as firebase from 'firebase';

 let config = {
  apiKey: "AIzaSyBGU48hgDAQON5hH6v68hkMYSjpsgvZ0C8",
  authDomain: "exercise10-29ceb.firebaseapp.com",
  databaseURL: "https://exercise10-29ceb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "exercise10-29ceb",
  storageBucket: "exercise10-29ceb.appspot.com",
  messagingSenderId: "958314745315",
  appId: "1:958314745315:web:4bccf16a0a7d476f0b64d6"
  };
let app = firebase.initializeApp(config);
export const db = app.database();