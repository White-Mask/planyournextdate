self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/favicon.ico",
        "/favicon.webp",
        "/android-chrome-192x192.png",
        "/android-chrome-512x512.png",
        "/apple-touch-icon.png",
        "/img/aventura.svg",
        "/img/cultura.svg",
        "/img/desconectar.svg",
        "/img/naturaleza.svg",
        "/img/casera.svg",
        "/img/nocturna.svg",
        "/_astro/montserrat-latin-wght-normal.BDA6280a.woff2"
      ]);
    }).catch(function(error) {
      console.error('Error caching assets during install:', error);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
