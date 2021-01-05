import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyAbbqRZ7WaZXSj1Go5vY9KxjJH4OSQ1Q4Q",
  authDomain: "story-hub-7f6fe.firebaseapp.com",
  databaseURL: "https://story-hub-7f6fe-default-rtdb.firebaseio.com",
  projectId: "story-hub-7f6fe",
  storageBucket: "story-hub-7f6fe.appspot.com",
  messagingSenderId: "745303964965",
  appId: "1:745303964965:web:c90f1cfc1057e2372e2ecc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();
