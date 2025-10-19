// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMgZ1S6tiFqg3E1cGMxVpw-TjL0hPXsgw",
  authDomain: "dragon-news-breaking-e6059.firebaseapp.com",
  projectId: "dragon-news-breaking-e6059",
  storageBucket: "dragon-news-breaking-e6059.firebasestorage.app",
  messagingSenderId: "481509387063",
  appId: "1:481509387063:web:f37d143d8c199599e2c8b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);