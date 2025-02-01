import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD0dNs1FBQK9VhKSjexiaiHPyE9ONWrBcA",
  authDomain: "web-push-notification-dec68.firebaseapp.com",
  projectId: "web-push-notification-dec68",
  storageBucket: "web-push-notification-dec68.firebasestorage.app",
  messagingSenderId: "501508287202",
  appId: "1:501508287202:web:831e59416d095a77dc4cbb",
  measurementId: "G-2LHW33LP3G",
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
        "BIodo7iqonpDUsRCR8KBfo_zGRO7mtcHkPPLkQnaNs8xWeYAxM_lHdDDCV0qpCIuKI_iUdGnNOGdI8SmtHde9pw",
    });
    // console.log(token);
  }
};
