// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUThrw7LioS09gVQvayfFHcHPGvXjdJ6c",
  authDomain: "taste-of-tradition.firebaseapp.com",
  projectId: "taste-of-tradition",
  storageBucket: "taste-of-tradition.firebasestorage.app",
  messagingSenderId: "512449693402",
  appId: "1:512449693402:web:2bf9b8c3f3ceabac0387e3",
  measurementId: "G-SN8P61SGFC"
};

// Initialize Firebase
const isConfigValid = firebaseConfig.projectId && firebaseConfig.apiKey && firebaseConfig.appId;

const app = isConfigValid ? initializeApp(firebaseConfig) : null;
const analytics = (isConfigValid && typeof window !== 'undefined') ? getAnalytics(app!) : null;
const db = isConfigValid ? getFirestore(app!) : null;

if (!isConfigValid) {
  console.warn("Firebase configuration is missing or incomplete. Some features like registration and admin panel may not work correctly.");
}

export { app, analytics, db };
