// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9SJambY_DHY7_p7ACIP5T50PQiR913rQ",
  authDomain: "pmovel-lobby.firebaseapp.com",
  projectId: "pmovel-lobby",
  storageBucket: "pmovel-lobby.appspot.com",
  messagingSenderId: "625010233535",
  appId: "1:625010233535:web:bc038dba9133604b4d760a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };