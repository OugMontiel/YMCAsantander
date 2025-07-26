// Nuevo Service Worker para deshabilitar cache

self.addEventListener('install', event => {
    // No se cachea nada
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    // Desregistrar este Service Worker para deshabilitar cache
    event.waitUntil(
        self.registration.unregister()
        .then(() => {
            return self.clients.matchAll()
            .then(clients => {
                clients.forEach(client => client.navigate(client.url));
            });
        })
    );
});

self.addEventListener('fetch', event => {
    // No se utiliza caché, simplemente forwardear la petición
    event.respondWith(fetch(event.request));
});

