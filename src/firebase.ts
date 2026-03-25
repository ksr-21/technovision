import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUThrw7LioS09gVQvayfFHcHPGvXjdJ6c",
  authDomain: "taste-of-tradition.firebaseapp.com",
  projectId: "taste-of-tradition",
  storageBucket: "taste-of-tradition.firebasestorage.app",
  messagingSenderId: "512449693402",
  appId: "1:512449693402:web:2bf9b8c3f3ceabac0387e3",
  measurementId: "G-SN8P61SGFC"
};

// Check if critical configuration is present
const isConfigValid = !!(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

// Initialize Firebase
const app = isConfigValid ? initializeApp(firebaseConfig) : null;
const analytics = (isConfigValid && typeof window !== 'undefined') ? getAnalytics(app!) : null;
const db = isConfigValid ? getFirestore(app!) : null;
const storage = isConfigValid ? getStorage(app!) : null;

export { app, analytics, db, storage };
