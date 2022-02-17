
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDGW1swdL3DW72r08mgZ8rQQk_29oDR1V0",
    authDomain: "exahzr-fe88d.firebaseapp.com",
    projectId: "exahzr-fe88d",
    storageBucket: "exahzr-fe88d.appspot.com",
    messagingSenderId: "44216097772",
    appId: "1:44216097772:web:f8537f52529d29f5c13ec9",
    measurementId: "G-C17E7BL806"
  };

const defaultProject = initializeApp(firebaseConfig);
let defaultStorage = getStorage(defaultProject);
let defaultFirestore = getFirestore(defaultProject);