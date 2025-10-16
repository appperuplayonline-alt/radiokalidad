self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('radio-kalidad-cache').then(cache => {
      return cache.addAll(['./index_Radio_Kalidad_original.html', './manifest.webmanifest']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(resp => resp || fetch(e.request)));
});
