import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBtmnALr07Ysq_JWK38c8L6iMrkwbct_Xk",
    authDomain: "crafty-aece5.firebaseapp.com",
    projectId: "crafty-aece5",
    storageBucket: "crafty-aece5.appspot.com",
    messagingSenderId: "257552266317",
    appId: "1:257552266317:web:d1614c7dfb4bed5e559804",
    measurementId: "G-GV815HGCZN"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;