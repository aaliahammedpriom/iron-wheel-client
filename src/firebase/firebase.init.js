// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8IWz93eNilR-KPoFhbuTywdD-dd5i6zY",
  authDomain: "iron-wheel.firebaseapp.com",
  projectId: "iron-wheel",
  storageBucket: "iron-wheel.firebasestorage.app",
  messagingSenderId: "188781713556",
  appId: "1:188781713556:web:89d4bb20abc5fb92d13c81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
 export default auth;