// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRkYJd1jVu6o9yLoNraoe4lwCWko4MIGE",
  authDomain: "blogging-app-1867e.firebaseapp.com",
  projectId: "blogging-app-1867e",
  storageBucket: "blogging-app-1867e.appspot.com",
  messagingSenderId: "409166081337",
  appId: "1:409166081337:web:e52fab9347724ec23e8ce8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);