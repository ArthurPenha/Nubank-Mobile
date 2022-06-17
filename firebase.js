import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBE0tuF-6FSIqff_6b7l1RiFed-cjdnraU",
  authDomain: "fir-auth-4af97.firebaseapp.com",
  projectId: "fir-auth-4af97",
  storageBucket: "fir-auth-4af97.appspot.com",
  messagingSenderId: "497823923418",
  appId: "1:497823923418:web:0de8d56184c917a6ddf9e3"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)