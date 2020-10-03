import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBywJcxoUzcazjD6n-bf1L5mFeJCzLIVJ0",
    authDomain: "nwitter-6d705.firebaseapp.com",
    databaseURL: "https://nwitter-6d705.firebaseio.com",
    projectId: "nwitter-6d705",
    storageBucket: "nwitter-6d705.appspot.com",
    messagingSenderId: "745180270104",
    appId: "1:745180270104:web:6626694d7f2df15d7ffd6d"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);