// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVcNtXWBKSqu0dVihjCrdPF8PVvmWcLQY",
  authDomain: "banking-8d939.firebaseapp.com",
  projectId: "banking-8d939",
  storageBucket: "banking-8d939.appspot.com",
  messagingSenderId: "389231623000",
  appId: "1:389231623000:web:07ae584afdd13c4c51032d",
  measurementId: "G-CFL395LV6K"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, doc, setDoc,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail,fetchSignInMethodsForEmail };