import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD6MI8gVJEbWsMcEdPUlyXUxvGU5UZILBY",
  authDomain: "e-commerce-6460d.firebaseapp.com",
  projectId: "e-commerce-6460d",
  storageBucket: "e-commerce-6460d.appspot.com",
  messagingSenderId: "1054822299651",
  appId: "1:1054822299651:web:3ecff096da46fe21d57636",
  measurementId: "G-NH771RXWS1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
