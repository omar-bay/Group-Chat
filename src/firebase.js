import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "<YOUR APIKEY>",
    authDomain: "person-chat-sad.firebaseapp.com",
    projectId: "person-chat-sad",
    storageBucket: "person-chat-sad.appspot.com",
    messagingSenderId: "718154717708",
    appId: "<YOUR APPID>",
    measurementId: "<YOUR MEASUREMENTID>"


})

const db = firebaseApp.firestore();

export default db;