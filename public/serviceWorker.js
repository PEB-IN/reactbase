// Cache version
const CACHE_NAME = "my-app-cache-v1";
const urlsToCache = [
  "/index.html",
  "/static/js/bundle.js",
  "/static/js/main.js",
  "/static/css/main.css",
];

// Install event: Cache files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activate event: Remove old caches
self.addEventListener("activate", (event) => {
  // console.log("service worker activate event");
  // event.waitUntil(
  //   caches.keys().then((cacheNames) => {
  //     return Promise.all(
  //       cacheNames.map((cache) => {
  //         if (cache !== CACHE_NAME) {
  //           console.log("Deleting old cache:", cache);
  //           return caches.delete(cache);
  //         }
  //       })
  //     );
  //   })
  // );
});

self.addEventListener("fetch", (event) => {
  event.respondwith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Fetch event: Serve cached content when offline
// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       return response || fetch(event.request);
//     })
//   );
// });

// Register service worker function
// function register() {
//   if ("serviceWorker" in navigator) {
//     window.addEventListener("load", () => {
//       navigator.serviceWorker
//         .register("/serviceWorker.js")
//         .then((reg) => {
//           console.log("registration succeeded and res is", reg);
//         })
//         .catch((err) => {
//           console.error("SW registration failed with error:", err);
//         });
//     });
//   }
// }

// Unregister service worker function
// function unregister() {
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker.ready
//       .then((registration) => {
//         registration.unregister();
//       })
//       .catch((error) => {
//         console.error("Error during service worker unregistration:", error);
//       });
//   }
// }

// register();
