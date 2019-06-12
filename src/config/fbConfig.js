 import firebase, { firestore } from 'firebase/app'
 import 'firebase/auth'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBxzAT-eig4j0mYV2yLe76insEpGV0tlZM",
    authDomain: "planz-94b46.firebaseapp.com",
    databaseURL: "https://planz-94b46.firebaseio.com",
    projectId: "planz-94b46",
    storageBucket: "planz-94b46.appspot.com",
    messagingSenderId: "241157411971",
    appId: "1:241157411971:web:2d354b92cce7de30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase