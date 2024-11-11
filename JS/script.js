// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child, remove } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8sjCPBK53x9BKDe8I4T5MjjZMD1tH2fc",
  authDomain: "katrikiaplicacion.firebaseapp.com",
  projectId: "katrikiaplicacion",
  storageBucket: "katrikiaplicacion.appspot.com",
  messagingSenderId: "131447050140",
  appId: "1:131447050140:web:23d567f609bd247eb60259"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default {app,database}