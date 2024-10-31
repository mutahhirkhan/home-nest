// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC30jcBmZafDxyalh-RDzSEvMkwrk9UAQM",
  authDomain: "onlinelect.firebaseapp.com",
  databaseURL: "https://onlinelect.firebaseio.com",
  projectId: "onlinelect",
  storageBucket: "onlinelect.appspot.com",
  messagingSenderId: "635522905588",
  appId: "1:635522905588:web:1e1af480bc95ada2ee75a1",
  measurementId: "G-1VQP14326Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);