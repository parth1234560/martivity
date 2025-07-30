import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBjjUp2mRREv_dPNihSWVzVlPhVCUgh7A0",
  authDomain: "matovitymain.firebaseapp.com",
  projectId: "matovitymain",
  storageBucket: "matovitymain.firebasestorage.app",
  messagingSenderId: "636177403321",
  appId: "1:636177403321:web:6fd20352c9d77ea5c8ba68",
  measurementId: "G-G93VTNL1WS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app; 