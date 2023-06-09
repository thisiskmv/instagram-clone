import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBALHlnSBbJOuYn7wLuxU8sEuEPl2mmfTI",
  authDomain: "mychat-ffe05.firebaseapp.com",
  projectId: "mychat-ffe05",
  storageBucket: "mychat-ffe05.appspot.com",
  messagingSenderId: "465212255587",
  appId: "1:465212255587:web:322eca8268caa9d8ba3756",
  measurementId: "G-F9RQR8JM38"
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()


