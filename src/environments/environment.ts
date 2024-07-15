// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2eXTNe9Ig0wtF5wCmMd2BZfjpkRVTfDE",
  authDomain: "employee-mng-22e7c.firebaseapp.com",
  projectId: "employee-mng-22e7c",
  storageBucket: "employee-mng-22e7c.appspot.com",
  messagingSenderId: "848840361873",
  appId: "1:848840361873:web:ea239f4a99153a968bbc30",
  measurementId: "G-4E4EBBVLV6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);