import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyCdKYi9h2dKt-UaK4YUcIV8gnIX8zufbPY",
  authDomain: "wasweissichwohin-52b98.firebaseapp.com",
  projectId: "wasweissichwohin-52b98",
  storageBucket: "wasweissichwohin-52b98.appspot.com",
  messagingSenderId: "863593627104",
  appId: "1:863593627104:web:a50aef2ceb3a8a36eb3f85"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { projectFirestore, projectAuth, projectStorage, timestamp }