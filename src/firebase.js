import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDvsH68vurRJvXJa32L4hz5Y04nOLnWR6g",
	authDomain: "linkedin-dea35.firebaseapp.com",
	projectId: "linkedin-dea35",
	storageBucket: "linkedin-dea35.appspot.com",
	messagingSenderId: "878647694988",
	appId: "1:878647694988:web:b2880d4d49367008f84da9",
	measurementId: "G-P9TN0F421S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
//
const db = firebaseApp.firestore();
//
const auth = firebase.auth();
//

export { db, auth };
