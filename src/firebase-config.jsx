
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDQ7rl7Vv88bpn6yrF8KTaHw5kVNQ9lvOg",
    authDomain: "we-news-40498.firebaseapp.com",
    projectId: "we-news-40498",
    storageBucket: "we-news-40498.appspot.com",
    messagingSenderId: "840908973193",
    appId: "1:840908973193:web:62a75d681329bf38621258",
    measurementId: "G-Q4ZF72JTHD"
  };
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);