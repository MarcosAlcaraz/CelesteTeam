import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBqnvNEUl_L-V01lVB1H_Bt7Vvo_KC8QVA",
  authDomain: "ingeneria-de-software2.firebaseapp.com",
  databaseURL: "https://ingeneria-de-software2-default-rtdb.firebaseio.com",
  projectId: "ingeneria-de-software2",
  storageBucket: "ingeneria-de-software2.appspot.com",
  messagingSenderId: "12140850908",
  appId: "1:12140850908:web:520535eb6d9dca8fd94e19"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;

