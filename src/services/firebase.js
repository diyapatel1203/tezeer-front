// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmjqjeRiHgoDC5-IITBTAL0a33u3omSwg",
  authDomain: "react-web-ad482.firebaseapp.com",
  projectId: "react-web-ad482",
  storageBucket: "react-web-ad482.appspot.com",
  messagingSenderId: "680280447208",
  appId: "1:680280447208:web:1357f135a8c5aec29e915d",
  measurementId: "G-C7CYECT39N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
