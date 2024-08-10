var GHPATH = '/';
var APP_PREFIX = 'planyournextdate_';
var VERSION = 'version_01';
var URLS = [    
  `${GHPATH}`,
  `${GHPATH}index.html`,
  `${GHPATH}manifest.json`,
  `${GHPATH}favicon.ico`,
  `${GHPATH}favicon.webp`,
  `${GHPATH}android-chrome-192x192.png`,
  `${GHPATH}android-chrome-512x512.png`,
  `${GHPATH}apple-touch-icon.png`,
  `${GHPATH}img/aventura.svg`,
  `${GHPATH}img/cultura.svg`,
  `${GHPATH}img/desconectar.svg`,
  `${GHPATH}img/naturaleza.svg`,
  `${GHPATH}img/casera.svg`,
  `${GHPATH}img/nocturna.svg`,
  `${GHPATH}_astro/montserrat-latin-wght-normal.BDA6280a.woff2`,
];

var CACHE_NAME = APP_PREFIX + VERSION;

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      return cache.addAll(URLS);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX) === 0;
      });
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Deleting cache : ' + keyList[i]);
          return caches.delete(keyList[i]);
        }
      }));
    })
  );
});
