import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA0y0QIIAQZUPU-0L9uCCq5x8dudOt5rI8",
    authDomain: "facebook-clone-b9aef.firebaseapp.com",
    databaseURL: "https://facebook-clone-b9aef.firebaseio.com",
    projectId: "facebook-clone-b9aef",
    storageBucket: "facebook-clone-b9aef.appspot.com",
    messagingSenderId: "394207488611",
    appId: "1:394207488611:web:2601aa045027856bbea656",
    measurementId: "G-BQZ8PZ9SC7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;