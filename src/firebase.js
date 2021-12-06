import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyC4RbQhi4Zjf9rYXnEEWI1udMK9J1hvXS0",
  authDomain: "fir-test-app-23067.firebaseapp.com",
  projectId: "fir-test-app-23067",
  storageBucket: "fir-test-app-23067.appspot.com",
  messagingSenderId: "591373555520",
  appId: "1:591373555520:web:184cffa2c9b7a0428b4ca5"
})

export const auth = app.auth()
export default app
