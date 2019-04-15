import Firebase from 'firebase';
let config = {

    apiKey: "AIzaSyAHl8qm6v6vWgY_TeojfHHuy-ZTpSXo4Ag",
    authDomain: "fir-demo-de298.firebaseapp.com",
    databaseURL: "https://fir-demo-de298.firebaseio.com",
    projectId: "fir-demo-de298",
    storageBucket: "fir-demo-de298.appspot.com",
    messagingSenderId: "371636300770"

};

let app = Firebase.initializeApp(config);
export const db = app.database();