import { initializeApp } from 'firebase/app';
import * as firebaseAuth from "firebase/auth";
import * as firestore from "firebase/firestore";
import * as storage from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0ONa_RedJp88zgU8bpoj5q2dcUb1VYqo",
  authDomain: "olx-test-3e410.firebaseapp.com",
  projectId: "olx-test-3e410",
  storageBucket: "olx-test-3e410.appspot.com",
  messagingSenderId: "892282331149",
  appId: "1:892282331149:web:362be2f783b2e100187544",
  measurementId: "G-VHTMBVK6RV"
};

const app = initializeApp(firebaseConfig);
const db = firestore.getFirestore();

const firebaseExports = { app, db, firebaseAuth, firestore, storage };
export default firebaseExports;