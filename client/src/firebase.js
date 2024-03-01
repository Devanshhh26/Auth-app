// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "auth-app-73595.firebaseapp.com",
  projectId: "auth-app-73595",
  storageBucket: "auth-app-73595.appspot.com",
  messagingSenderId: "787450801545",
  appId: "1:787450801545:web:25a516d68f6b167c290558"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);