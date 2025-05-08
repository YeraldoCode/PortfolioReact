// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKWOU9L8IktfGMIh3ZNB5zjxzs2bBofbc",
    authDomain: "my-portfolio-b4662.firebaseapp.com",
    projectId: "my-portfolio-b4662",
    storageBucket: "my-portfolio-b4662.firebasestorage.app",
    messagingSenderId: "528579117148",
    appId: "1:528579117148:web:97eaf9f8792535fafd2699",
    measurementId: "G-ER4MF231YH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Inicializa Firestore
const db = getFirestore(app);

export default db;