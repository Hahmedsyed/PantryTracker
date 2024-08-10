// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABolmZxLw0_48TKYWWWcW5t4aTBBROh4c",
  authDomain: "pantrytracker-458a3.firebaseapp.com",
  projectId: "pantrytracker-458a3",
  storageBucket: "pantrytracker-458a3.appspot.com",
  messagingSenderId: "737613842503",
  appId: "1:737613842503:web:81e7ed180399a1f1408962",
  measurementId: "G-NV27P3NDPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}