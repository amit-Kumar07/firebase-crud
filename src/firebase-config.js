// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFAlbMPZz7gAJvbVrYPyYiJvBowHbwGXk",
  authDomain: "fir-crud-d8d81.firebaseapp.com",
  projectId: "fir-crud-d8d81",
  storageBucket: "fir-crud-d8d81.appspot.com",
  messagingSenderId: "611965955836",
  appId: "1:611965955836:web:c1635ed936e747c2f67179",
  measurementId: "G-VRGHMFKCNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
