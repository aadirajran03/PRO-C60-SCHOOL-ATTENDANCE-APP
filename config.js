 import * as firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAtBR_rYqo5taGTFzXJ4MyxUMBTwzbznc8",
  authDomain: "school-attendance-app-5baee.firebaseapp.com",
  databaseURL: "https://school-attendance-app-5baee-default-rtdb.firebaseio.com",
  projectId: "school-attendance-app-5baee",
  storageBucket: "school-attendance-app-5baee.appspot.com",
  messagingSenderId: "991201194477",
  appId: "1:991201194477:web:463cbcdb93b12b43e577e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  export default firebase.database()
 

  