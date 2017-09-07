import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAfSgN7uFzfMvB1zatuQiL0LC0PAbFvvqI",
    authDomain: "goalcoach-18e9e.firebaseapp.com",
    databaseURL: "https://goalcoach-18e9e.firebaseio.com",
    projectId: "goalcoach-18e9e",
    storageBucket: "goalcoach-18e9e.appspot.com",
    messagingSenderId: "34655913911"
  };

export const firebaseApp = firebase.initializeApp(config)