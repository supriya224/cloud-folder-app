// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from 'firebase/analytics'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "cloud-folder-app-d8644.firebaseapp.com",
  projectId: "cloud-folder-app-d8644",
  storageBucket: "cloud-folder-app-d8644.appspot.com",
  messagingSenderId: "1044731424582",
  appId: "1:1044731424582:web:5d31726202b48716b5bf47"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
