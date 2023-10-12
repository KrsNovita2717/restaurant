self.addEventListener('install', (_event) => {
  console.log('Installing Service Worker ...');
});

self.addEventListener('activate', (_event) => {
  console.log('Activating Service Worker ...');
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});