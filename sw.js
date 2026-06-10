/* DOPPELGÄNGER v3.2 — neutralizador de caché antigua */
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
});
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({type:'window'}))
      .then(clients => Promise.all(clients.map(client => client.navigate(client.url))))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request, {cache:'no-store'}).catch(() => new Response('Sin conexión. Recarga cuando vuelva la red.', {status: 503, headers:{'Content-Type':'text/plain; charset=utf-8'}})));
});
