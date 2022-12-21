// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEtO_7zgSErkQRZB-gh5SMBM91VnWzz5U",
  authDomain: "flashlogin-b15ae.firebaseapp.com",
  projectId: "flashlogin-b15ae",
  storageBucket: "flashSlogin-b15ae.appspot.com",
  messagingSenderId: "134916354346",
  appId: "1:134916354346:web:8d88e529abeb538f9eee53"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };