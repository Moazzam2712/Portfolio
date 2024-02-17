import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD8CsmDEs69iBRNyzMg8X5F9uw0-cYM7qY",
  authDomain: "moazzam-portfolio.firebaseapp.com",
  projectId: "moazzam-portfolio",
  storageBucket: "moazzam-portfolio.appspot.com",
  messagingSenderId: "67133995459",
  appId: "1:67133995459:web:6a389f530c6d242d976576"
};

export const app = initializeApp(firebaseConfig);

export const db= getFirestore() 