
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'




const firebaseConfig = {
  apiKey: "AIzaSyBlJ1ck9QMLhraNIs1PqXaKCMBA0ejA6l8",
  authDomain: "incubation-management-system.firebaseapp.com",
  projectId: "incubation-management-system",
  storageBucket: "incubation-management-system.appspot.com",
  messagingSenderId: "414512701805",
  appId: "1:414512701805:web:107dcc65b8814e82303a64",
  measurementId: "G-GC029GJBVJ"
};

// Initialize Firebase
const app =initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export default app;

