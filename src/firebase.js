// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOkB267yJeuzmB8yQS_OleLGWiESdQ4Rs",
    authDomain: "todo-2421f.firebaseapp.com",
    projectId: "todo-2421f",
    storageBucket: "todo-2421f.appspot.com",
    messagingSenderId: "740433501879",
    appId: "1:740433501879:web:c3167061a2483266637732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)