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
  apiKey: "AIzaSyD0dNs1FBQK9VhKSjexiaiHPyE9ONWrBcA",
  authDomain: "web-push-notification-dec68.firebaseapp.com",
  projectId: "web-push-notification-dec68",
  storageBucket: "web-push-notification-dec68.firebasestorage.app",
  messagingSenderId: "501508287202",
  appId: "1:501508287202:web:831e59416d095a77dc4cbb",
  measurementId: "G-2LHW33LP3G",
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

  self.registration.showNotification(notificationTitle, notificationOptions);
});
