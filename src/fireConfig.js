import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtQWLeyDXajZYKKiMth5523Sy78qDjkVI",
  authDomain: "practice-ecommerce-570b4.firebaseapp.com",
  projectId: "practice-ecommerce-570b4",
  storageBucket: "practice-ecommerce-570b4.appspot.com",
  messagingSenderId: "668661256044",
  appId: "1:668661256044:web:f060d76058f6b2470f6d49",
  measurementId: "G-6Y30REBJBR",
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export default fireDB;
