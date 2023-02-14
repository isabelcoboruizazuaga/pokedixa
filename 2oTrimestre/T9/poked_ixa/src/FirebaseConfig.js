
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIBoeyfBZkS1elm6Qt7evOa1qt7i962bY",

  authDomain: "tiendaropavue.firebaseapp.com",

  projectId: "tiendaropavue",

  storageBucket: "tiendaropavue.appspot.com",

  messagingSenderId: "1024848279402",

  appId: "1:1024848279402:web:cb56d35ca9c8c91341d713"

};



const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);