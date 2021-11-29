import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyC49cpHQt5zO3qpRNCEG0vmDo3QgB8h_8s",
    authDomain: "crwn-clothing-321a2.firebaseapp.com",
    projectId: "crwn-clothing-321a2",
    storageBucket: "crwn-clothing-321a2.appspot.com",
    messagingSenderId: "647998610484",
    appId: "1:647998610484:web:ac8dfc5b790ef7d4da3e61",
    measurementId: "G-N7BQ1LSN5D"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;