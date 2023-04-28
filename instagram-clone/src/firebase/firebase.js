import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDQ3S3UmcmPyHgurhjzmGUO4rweo6-bWms",
  authDomain: "chat-app-77f94.firebaseapp.com",
  projectId: "chat-app-77f94",
  storageBucket: "chat-app-77f94.appspot.com",
  messagingSenderId: "516443862035",
  appId: "1:516443862035:web:9208077af580e3f8ea7be6",
  measurementId: "G-C7H45MEW33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);