import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAjQRpsTLK8lH7tLtv8yi8cuTkqnqoDwEc",
  authDomain: "react-crud-5b64a.firebaseapp.com",
  databaseURL: "https://react-crud-5b64a.firebaseio.com",
  projectId: "react-crud-5b64a",
  storageBucket: "react-crud-5b64a.appspot.com",
  messagingSenderId: "120437847953",
  appId: "1:120437847953:web:a1ab651168e43cb4af4c30",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
