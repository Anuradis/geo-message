import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJo4Ggk_t25xlZF2ApT_eca2VuZviCtBQ",
  authDomain: "geoo-msg.firebaseapp.com",
  databaseURL: "https://geoo-msg.firebaseio.com",
  projectId: "geoo-msg",
  storageBucket: "geoo-msg.appspot.com",
  messagingSenderId: "907395683976",
  appId: "1:907395683976:web:7811f0af5632c1ac64313d"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
