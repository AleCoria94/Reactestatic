// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjz41-J3F9kTOL2sLsbq08KOjwOrLMlCA",
  authDomain: "vomea-ecommerce.firebaseapp.com",
  projectId: "vomea-ecommerce",
  storageBucket: "vomea-ecommerce.appspot.com",
  messagingSenderId: "1098542062724",
  appId: "1:1098542062724:web:58981e90674cd3add4f6d1",
  measurementId: "G-ZNT55EWQSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;