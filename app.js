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

self.addEventListener('fetch', function(event) {
	caches.match(event.request).then(function(response) {
		console.log("online")
		alert("online");
	}).catch(function() {
		return caches.match('/offline.html');
		alert("offline");
	});
});