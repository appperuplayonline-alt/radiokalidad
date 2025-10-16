const CACHE_NAME = 'radio-naranjos-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.webmanifest',
  'https://i.postimg.cc/nzVkBbwD/IMG-20251004-WA0085-1.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    )
  );
});
