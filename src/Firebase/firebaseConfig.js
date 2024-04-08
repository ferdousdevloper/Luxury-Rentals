// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9p8KhWjGRb3BRoeh-ZfhdI4F934fC4i4",
  authDomain: "assignment-9-d175c.firebaseapp.com",
  projectId: "assignment-9-d175c",
  storageBucket: "assignment-9-d175c.appspot.com",
  messagingSenderId: "454509855108",
  appId: "1:454509855108:web:07633f1a4174bce4d29dd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;