// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgJth5YSuUbjbyB_HqVBAmdJ8d46xL51A",
  authDomain: "mychat-6ff18.firebaseapp.com",
  projectId: "mychat-6ff18",
  storageBucket: "mychat-6ff18.appspot.com",
  messagingSenderId: "809419211287",
  appId: "1:809419211287:web:ee902028327f9d0d2b9252",
  measurementId: "G-YSRR1KE7H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);