// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
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
