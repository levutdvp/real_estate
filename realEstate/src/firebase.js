// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c1147.firebaseapp.com",
  projectId: "mern-estate-c1147",
  storageBucket: "mern-estate-c1147.appspot.com",
  messagingSenderId: "706890097129",
  appId: "1:706890097129:web:6b3e20de2a62da6f702b78"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);