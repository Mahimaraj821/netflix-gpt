// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClpOMtygcPDchg-vwBnZOmQYgrbzZ6Ozw",
  authDomain: "netflix-gpt-23521.firebaseapp.com",
  projectId: "netflix-gpt-23521",
  storageBucket: "netflix-gpt-23521.firebasestorage.app",
  messagingSenderId: "969539975733",
  appId: "1:969539975733:web:af94ca5aeecdd19a394f7c",
  measurementId: "G-1LBTWMTQSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
