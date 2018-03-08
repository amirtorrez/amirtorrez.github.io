caches.match(event.request).then(function(response) {
  return response || fetch(event.request).then(function(r) {
    caches.open('v1').then(function(cache) {
      cache.put(event.request, r);
    });
    return r.clone();
  });
}).catch(function() {
  return caches.match('/offline.html');
});

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/84FAF2C3.asc.txt',
        '/offline.html'
      ]);
    })
  );
});
