import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEjmSXITvmopDiRrRYO7BfsdHSxywHBhI",
  authDomain: "challenge-48cc3.firebaseapp.com",
  projectId: "challenge-48cc3",
  storageBucket: "challenge-48cc3.firebasestorage.app",
  messagingSenderId: "526747059417",
  appId: "1:526747059417:web:6672dff361624e2f762ac8",
  measurementId: "G-B4BWZ4XR20"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
