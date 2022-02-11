import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAzgH-bwApsIegMPEnL-QcFoxkfYfAzA3A",
  authDomain: "wasweissichwohin.firebaseapp.com",
  projectId: "wasweissichwohin",
  storageBucket: "wasweissichwohin.appspot.com",
  messagingSenderId: "811873523066",
  appId: "1:811873523066:web:949c8d0c2e84c9986e72c3"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }