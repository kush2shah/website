// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnRaENpsUMabfsujbiT3eOgYAxf5_qy94",
  authDomain: "portfolio-69fe7.firebaseapp.com",
  projectId: "portfolio-69fe7",
  storageBucket: "portfolio-69fe7.appspot.com",
  messagingSenderId: "908995318350",
  appId: "1:908995318350:web:28d12bc0626f636c1f691f",
  measurementId: "G-FRTFKDWJJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };