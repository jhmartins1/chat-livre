// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2FM5dnTwuAxkYdRfJWimRrifg5RaV6mA",
  authDomain: "chat-livre.firebaseapp.com",
  projectId: "chat-livre",
  storageBucket: "chat-livre.appspot.com",
  messagingSenderId: "133283429179",
  appId: "1:133283429179:web:46b73a5cb30c76cd63951e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
