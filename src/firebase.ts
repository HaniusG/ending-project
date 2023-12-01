import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCfptuBZyxh1hYVvbYVLpP3WobWDJiCIVc",
  authDomain: "tasks-78f89.firebaseapp.com",
  projectId: "tasks-78f89",
  storageBucket: "tasks-78f89.appspot.com",
  messagingSenderId: "676451334802",
  appId: "1:676451334802:web:37d11b8d1da9582e22c44b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, app, db }

