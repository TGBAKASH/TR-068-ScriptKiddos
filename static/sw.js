const CACHE_NAME = 'msacs-cache-v3';
const urlsToCache = [
  '/static/css/style.css',
  '/static/js/main.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Network-first strategy to prevent "Site can't be reached" loops from poor cache matches
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .catch((error) => {
          console.warn("Network fetch failed, attempting cache fallback", error);
          return caches.match(event.request);
      })
  );
});
