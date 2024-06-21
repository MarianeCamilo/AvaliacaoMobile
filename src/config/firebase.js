// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZOSLtJCAEiEWcisN-7r0jcqfTSu-Lqyk",
  authDomain: "avaliacaomobile-43ad1.firebaseapp.com",
  projectId: "avaliacaomobile-43ad1",
  storageBucket: "avaliacaomobile-43ad1.appspot.com",
  messagingSenderId: "936034909168",
  appId: "1:936034909168:web:30be505372857c55c03b35",
  measurementId: "G-E2R9XZL18M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);