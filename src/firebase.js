// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkrQfdcLsG_cCJElwaal_5T8fw6uTdqZI",
    authDomain: "commerce-store-react.firebaseapp.com",
    projectId: "commerce-store-react",
    storageBucket: "commerce-store-react.appspot.com",
    messagingSenderId: "406006948539",
    appId: "1:406006948539:web:cbf55747910a84c40bbf9e",
    measurementId: "G-6088H3FYWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };