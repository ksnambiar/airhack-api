const firebase = require('firebase')
const config = {
    apiKey: "AIzaSyChU9Ot8MCdRojD5IfmJKgYCAtAM4C-bu0",
    authDomain: "aerothon-5a1e4.firebaseapp.com",
    databaseURL: "https://aerothon-5a1e4.firebaseio.com",
    projectId: "aerothon-5a1e4",
    storageBucket: "aerothon-5a1e4.appspot.com",
    messagingSenderId: "647231323700"
  };
  firebase.initializeApp(config);

export const dataBase = firebase.dataBase()