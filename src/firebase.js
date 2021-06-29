import firebase from "firebase"
  
// Configuration keys for our message app

const firebaseConfig = {
    apiKey: "AIzaSyCEHDW7n4UeSi3DVNPSC7N5R5UK1YRRQDY",
    authDomain: "message-application-60be3.firebaseapp.com",
    projectId: "message-application-60be3",
    storageBucket: "message-application-60be3.appspot.com",
    messagingSenderId: "1064579576326",
    appId: "1:1064579576326:web:121828ffd7163861e38987",
    measurementId: "G-QF1X7XPFPB"
  };

  // code to initialise app
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // invoking our database
  const db =firebaseApp.firestore();

  // invoking our authentication service

  const auth =firebase.auth();

  // google auth provider setup
  const provider = new firebase.auth.GoogleAuthProvider()

  //exporting our instances so that we can use them any where in our project
    export {auth,provider};
    export default db;
