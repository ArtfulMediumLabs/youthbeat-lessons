import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import {
  getFirestore, collection, getDocs, where, query, addDoc, getDoc,
} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { UserSchema } from './constants.js';

// Translators
function fromFirestoreTranslator(firestoreUser) {
  return {
    email: firestoreUser[UserSchema.email],
    grade: firestoreUser[UserSchema.grade],
    city: firestoreUser[UserSchema.city],
    name: firestoreUser[UserSchema.name],
    state: firestoreUser[UserSchema.state],
    school: firestoreUser[UserSchema.school],
    accessToken: firestoreUser[UserSchema.accessToken],
  };
}

function toFirestoreTranslator(user) {
  return {
    [UserSchema.email]: user.email,
    [UserSchema.accessToken]: user.accessToken,
    [UserSchema.grade]: user.grade,
    [UserSchema.city]: user.city,
    [UserSchema.name]: user.name,
    [UserSchema.state]: user.state,
    [UserSchema.school]: user.school,
    [UserSchema.accessToken]: user.accessToken,
  };
}

const firebaseConfig = {
  apiKey: 'AIzaSyCJWVI9xuJeCVgHcgE-i0LS8eb2U4pKAQs',
  authDomain: 'youth-beat-dev.firebaseapp.com',
  projectId: 'youth-beat-dev',
  storageBucket: 'youth-beat-dev.appspot.com',
  messagingSenderId: '683042270033',
  appId: '1:683042270033:web:7f53a2a299f74672890170',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);
const userRef = collection(DB, 'user');

export async function getUser(accessToken) {
  const userQuery = query(userRef, where(UserSchema.accessToken, '==', accessToken));
  const userQueryResponse = await getDocs(userQuery);

  return userQueryResponse.docs.length === 0
    ? null
    : fromFirestoreTranslator(userQueryResponse.docs[0].data());
}

export async function createUser(user) {
  const newUserDocReference = await addDoc(collection(DB, 'user'), toFirestoreTranslator(user));

  const userData = await getDoc(newUserDocReference);
  return userData;
}
