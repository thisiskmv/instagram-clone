import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from 'firebase/compat/app';
// import {storage} from 'firebase/compat/storage';
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDLHfV-jjhT1lOld__oJuG5HUdaj12IFMI",
  authDomain: "newchat-92cb9.firebaseapp.com",
  projectId: "newchat-92cb9",
  storageBucket: "newchat-92cb9.appspot.com",
  messagingSenderId: "211748575230",
  appId: "1:211748575230:web:379d9ec626d692482ed2af"
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
// const auth2 = firebase.auth()
export const storage = getStorage();
// export const storage2 = firebase.storage()
export const db = getFirestore()


