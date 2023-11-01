import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBkwdvBvdZ4MehFeY0PNOqlJK2DIJeJVLY",
    authDomain: "ecommerce-p-b7d90.firebaseapp.com",
    projectId: "ecommerce-p-b7d90",
    storageBucket: "ecommerce-p-b7d90.appspot.com",
    messagingSenderId: "1096421140052",
    appId: "1:1096421140052:web:57fd8eb2c413ce4cfa6fc1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);