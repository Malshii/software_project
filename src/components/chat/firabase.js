import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
//import { getStorage } from "firebase/compat/storage";

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyD95i_gh3SW8loiQJ07V15rB61alkg0xFY",
    authDomain: "firechat-b2c9f.firebaseapp.com",
    projectId: "firechat-b2c9f",
    storageBucket: "firechat-b2c9f.appspot.com",
    messagingSenderId: "451385195995",
    appId: "1:451385195995:web:fc980698b0326b2b9b7bfe",
    measurementId: "G-TWKCZSEQH2"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
//const storage = getStorage(app);
//export default storage;


export {db ,auth}
