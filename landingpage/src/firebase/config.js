import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD9OfzH2ehszEbhvYbQEvUWinWq9botfZ0",
  authDomain: "landingpage-796de.firebaseapp.com",
  projectId: "landingpage-796de",
  storageBucket: "landingpage-796de.appspot.com",
  messagingSenderId: "988033634124",
  appId: "1:988033634124:web:9e831b2641398fa7cfc9e9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);