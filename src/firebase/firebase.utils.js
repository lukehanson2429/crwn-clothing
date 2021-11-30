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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;