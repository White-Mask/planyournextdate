self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/favicon.ico",
        '/favicon.webp',
        "/android-chrome-192x192.png",
        "/android-chrome-512x512.png",
        "/apple-touch-icon.png",
        '/img/aventura.svg',
        '/img/cultura.svg',
        '/img/desconectar.svg',
        '/img/naturaleza.svg',
        '/img/casera.svg',
        '/img/nocturna.svg',
        '/_astro/montserra....BDA6280a.woff2',
        '/_astro/hoisted.Bu7JbD2a.js',
        '/_astro/index.CLwaRr0z.css'
      ].map(function(url) {
        return fetch(url).then(function(response) {
          if (!response.ok) {
            throw new TypeError('Request failed: ' + url);
          }
          return cache.put(url, response);
        }).catch(function(error) {
          console.error('Error caching:', url, error);
        });
      }));
    })
  );
});
