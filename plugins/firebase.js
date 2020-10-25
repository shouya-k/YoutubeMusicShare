import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  apiKey: process.env.ApiKey,
  authDomain: process.env.AuthDomain,
  databaseURL: process.env.DatabaseURL,
  projectId: process.env.ProjectId,
  storageBucket: process.env.StorageBucket,
  messagingSenderId: process.env.MessagingSenderId,
  appId: process.env.AppId,
  measurementId: process.env.MeasurementId,
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
