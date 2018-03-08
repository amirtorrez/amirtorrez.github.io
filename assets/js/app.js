self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/84FAF2C3.asc.txt',
        '/acercade',
        '/blog/etiquetas',
        '/primer-entrada',
        '/offline.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match("/offline.html")
  );
});
