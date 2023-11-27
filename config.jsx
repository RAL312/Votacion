// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSSTPh1-ewbqJijL3cGlSgVZ1lln4dMOM",
  authDomain: "votacionsi.firebaseapp.com",
  projectId: "votacionsi",
  storageBucket: "votacionsi.appspot.com",
  messagingSenderId: "302711496871",
  appId: "1:302711496871:web:2c1610fc403e8ae181fb82"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
