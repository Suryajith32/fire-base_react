
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyDRnZnE2NqX3yKCgU2bLEwkfbvYu1HsStU",
  authDomain: "react-authentication-606ed.firebaseapp.com",
  projectId: "react-authentication-606ed",
  storageBucket: "react-authentication-606ed.appspot.com",
  messagingSenderId: "474102311440",
  appId: "1:474102311440:web:ad754373647aa78d393895",
  measurementId: "G-PEHT9GHFJZ"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export default app;

