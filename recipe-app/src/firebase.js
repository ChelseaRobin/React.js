// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // authentication
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8awZrMCSUgLfLNqKF-qF4l_aHhfEVXDM",
  authDomain: "recipebook-7130f.firebaseapp.com",
  projectId: "recipebook-7130f",
  storageBucket: "recipebook-7130f.appspot.com",
  messagingSenderId: "194162277925",
  appId: "1:194162277925:web:47f5ff735ec4fb374309cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;