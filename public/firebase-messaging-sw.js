importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyDJ14QgFaaqT55_0YpPmawgQ6rtHgBWQTk",
  authDomain: "rareflowers-3c204.firebaseapp.com",
  databaseURL: "https://rareflowers-3c204-default-rtdb.firebaseio.com",
  projectId: "rareflowers-3c204",
  storageBucket: "rareflowers-3c204.firebasestorage.app",
  messagingSenderId: "717784001827",
  appId: "1:717784001827:web:83b0bd010628d2ce317096",
  measurementId: "G-FNK1FPTP3W",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };
  console.log(notificationOptions, notificationTitle);
  alert("Notification Recieved");
  self.registration.showNotification(notificationTitle, notificationOptions);
});
