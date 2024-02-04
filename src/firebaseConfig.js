import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC5bPRH9RFUjDZjapcVVX_qWmKxIQ40fA",
  authDomain: "bethune-43390.firebaseapp.com",
  projectId: "bethune-43390",
  storageBucket: "bethune-43390.appspot.com",
  messagingSenderId: "859655692148",
  appId: "1:859655692148:web:c6ddb4601a4c45efd79621",
  measurementId: "G-CLRZBQ8FN6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

