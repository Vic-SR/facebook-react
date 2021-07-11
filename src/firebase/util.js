import firebaseConfig from "./config";
import firebase from "firebase";

firebase.initializeApp(firebaseConfig);

export default firebase.auth();