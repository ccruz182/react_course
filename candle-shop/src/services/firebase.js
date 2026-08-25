// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "reactcourse-6e5b7.firebaseapp.com",
  projectId: "reactcourse-6e5b7",
  storageBucket: "reactcourse-6e5b7.firebasestorage.app",
  messagingSenderId: "410998728358",
  appId: "",
  measurementId: "G-EEFN9L5PEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAnalytics(app);
export const db = getFirestore(app);

export default app;
