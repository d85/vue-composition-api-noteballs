import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCxMVc18Q-kuifphYU1Rzv8S7BTrXSbv3Y',
  authDomain: 'noteballs-39cae.firebaseapp.com',
  projectId: 'noteballs-39cae',
  storageBucket: 'noteballs-39cae.appspot.com',
  messagingSenderId: '27441100534',
  appId: '1:27441100534:web:fa0e4d72764d97954eded7'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
  db,
  auth
}