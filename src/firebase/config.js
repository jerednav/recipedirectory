import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUQawm7UK31IQBA5UwJcR1XXVAk6adEYs",
  authDomain: "recipe-test-9653a.firebaseapp.com",
  projectId: "recipe-test-9653a",
  storageBucket: "recipe-test-9653a.appspot.com",
  messagingSenderId: "489022688446",
  appId: "1:489022688446:web:242ce62d6b41e918dea2ef",
  measurementId: "G-PNCJDZ8MEE",
};

//initialize firebase
firebase, initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
