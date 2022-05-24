// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiyK31K8jA2sY94rft0E9IwjoIHynwtf4",
    authDomain: "bentley-car-manufactuters.firebaseapp.com",
    projectId: "bentley-car-manufactuters",
    storageBucket: "bentley-car-manufactuters.appspot.com",
    messagingSenderId: "918105574066",
    appId: "1:918105574066:web:d809413b41b6ad16f657ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
