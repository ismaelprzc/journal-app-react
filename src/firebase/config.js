// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoBeKKsmkiM6wF8f-iv4MvOsDKaPAiH00",
  authDomain: "react-curso-11655.firebaseapp.com",
  projectId: "react-curso-11655",
  storageBucket: "react-curso-11655.appspot.com",
  messagingSenderId: "380553276803",
  appId: "1:380553276803:web:53118ed475e8338af69ab6",
  measurementId: "G-C58ZCHD50E",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
