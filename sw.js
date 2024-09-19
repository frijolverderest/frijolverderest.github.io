self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('frijol-verde-cache').then((cache) => {
        return cache.addAll([
          './',
          './index.html',
          './about.html',
          './contacto.html',
          './desayunos.html',
          './eventos.html',
          './eventos2.html',
          './indexdes.html',
          './nuestrmenu.html',
          './nuestrmenu.css',
          './nuestrmenudesarrollo.html',
          './nuestrmenudesarrollocopy.html',
          './platosjr.html',
          './CNAME',
          './scripts/actions.js',
          './scripts/eventos.js',
          './scripts/getEventos.js',
          './scripts/getMenu.js',
          './scripts/index.js',
          './scripts/script1.js',
          './styles/contacto.css',
          './styles/eventos.css',
          './styles/eventos2.css',
          './styles/footer.css',
          './styles/index.css',
          './styles/navbar.css',
          './styles/nuestrmenu.css',
          './styles/style.css',
          './manifest.json'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  