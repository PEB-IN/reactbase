import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDJ14QgFaaqT55_0YpPmawgQ6rtHgBWQTk",
  authDomain: "rareflowers-3c204.firebaseapp.com",
  databaseURL: "https://rareflowers-3c204-default-rtdb.firebaseio.com",
  projectId: "rareflowers-3c204",
  storageBucket: "rareflowers-3c204.firebasestorage.app",
  messagingSenderId: "717784001827",
  appId: "1:717784001827:web:83b0bd010628d2ce317096",
  measurementId: "G-FNK1FPTP3W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export default app;

// Firebase Notification

export const messaging = getMessaging(app);
export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BGLLEMxJ2-ULONpeRY3O5vaozz_6BkU9I6cxPXB7PMkf6E3EA5SLjBOC80xcKHuqMu0zpsUPIbZSL9hzF_ASdQU",
    });
    console.log(token, "webtoken");
  }
};
