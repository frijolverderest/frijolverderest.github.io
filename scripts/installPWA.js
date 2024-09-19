let deferredPrompt;
const installButton = document.getElementById('installButton');

// Escuchar el evento 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevenir que se dispare automáticamente
    e.preventDefault();
    // Guardar el evento para usarlo más tarde
    deferredPrompt = e;
    // Mostrar el botón de instalación
    installButton.style.display = 'block';

    // Añadir evento al botón para lanzar el prompt de instalación
    installButton.addEventListener('click', () => {
        // Esconder el botón de instalación después de hacer clic
        installButton.style.display = 'none';
        // Mostrar el prompt de instalación
        deferredPrompt.prompt();
        // Esperar a la respuesta del usuario
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('El usuario aceptó instalar la PWA');
            } else {
                console.log('El usuario rechazó instalar la PWA');
            }
            // Limpiar el deferredPrompt
            deferredPrompt = null;
        });
    });
});

// Opcional: Detectar si la PWA ya está instalada
window.addEventListener('appinstalled', (event) => {
    console.log('¡Frijol Verde fue instalada exitosamente!');
});
