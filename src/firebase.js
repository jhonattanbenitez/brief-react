import firebase from 'firebase'; 

var firebaseApp = firebase.initializeApp({
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
    apiKey: "AIzaSyCS6KDs26E1ea1zCpDWjz09dLOqAAVLEso",
    authDomain: "brief-react.firebaseapp.com",
    databaseURL: "https://brief-react-default-rtdb.firebaseio.com",
    projectId: "brief-react",
    storageBucket: "brief-react.appspot.com",
    messagingSenderId: "542938133919",
    appId: "1:542938133919:web:cbc71c0f0dd78fe02479aa",
    measurementId: "G-NHTTCXM3JZ"

 
});

var db = firebaseApp.firestore();

export  {db};