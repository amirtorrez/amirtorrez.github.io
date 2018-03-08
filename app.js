self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/84FAF2C3.asc.txt',
        '/assets/offline.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
		console.log(event.request)
      return caches.match('/assets/offline.html');
    })
  );
});
