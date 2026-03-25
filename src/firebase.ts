import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAUThrw7LioS09gVQvayfFHcHPGvXjdJ6c",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "taste-of-tradition.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "taste-of-tradition",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "taste-of-tradition.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "512449693402",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:512449693402:web:2bf9b8c3f3ceabac0387e3",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-SN8P61SGFC"
};

// Check if critical configuration is present
const isConfigValid = !!(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId &&
  firebaseConfig.storageBucket
);

// Initialize Firebase
const app = isConfigValid ? initializeApp(firebaseConfig) : null;
const analytics = (isConfigValid && typeof window !== 'undefined') ? getAnalytics(app!) : null;
const db = isConfigValid ? getFirestore(app!) : null;
const storage = isConfigValid ? getStorage(app!) : null;

export { app, analytics, db, storage };
