// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEp_jpLNwU2Kiam6OjblOBpd8sqqESC3E",
  authDomain: "react-native-85dee.firebaseapp.com",
  projectId: "react-native-85dee",
  storageBucket: "react-native-85dee.appspot.com",
  messagingSenderId: "1046114541095",
  appId: "1:1046114541095:web:f61c124a1981f42008f802",
  measurementId: "G-XXRQV0YKW3"
};

// Initialize Firebase
const appi = initializeApp(firebaseConfig);
const analytics = getAnalytics(appi);