// JavaScript para el efecto de parallax en la imagen
/* 
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrolled = window.scrollY;
    parallax.style.transform = 'translateY(' + (scrolled * 0.05) + 'px)';
});

*/
window.addEventListener('scroll', function() {
    const plateps = document.querySelectorAll('.plato-card');
    const scrolled = window.scrollY;

    plateps.forEach((platep) => {
        // Calcula la posición relativa y aplica transformación translateY
        //platep.style.transform = 'translateY(' + (scrolled * 0.05) + 'px)';

        /// Agrega la clase de animación cuando el elemento está mayormente visible en la pantalla
if (isElementInViewport(platep)) {
    // Si el elemento está mayormente visible, añadir la clase 'zoomIn' y ajustar la opacidad
    platep.classList.remove('zoomOut');
    platep.classList.add('zoomIn');
    platep.style.opacity = '1'; // Ajusta la opacidad según sea necesario
    platep.style.transition = 'transform 0.5s, opacity 0.5s';
    platep.style.animation = 'zoomIn 0.5s ease-out';
} else {
    // Si el elemento no está mayormente visible, agregar la clase 'zoomOut' para ocultarlo
    platep.classList.remove('zoomIn');
    platep.classList.add('zoomOut');
    platep.style.opacity = '0'; // Inicia invisible
    platep.style.transition = 'transform 0.5s, opacity 0.5s';
    platep.style.transition = 'transform: scale(0.5)';
    platep.style.animation = 'zoomOut 0.5s ease-out';
}

    });
});

// Función para verificar si un elemento está en la vista
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // Calcular el área visible
    const viewportArea = windowHeight * windowWidth;

    // Calcular el área del elemento
    const elementArea = rect.width * rect.height;

    // Calcular el área de intersección
    const intersectionArea = Math.max(0, Math.min(rect.right, windowWidth) - Math.max(rect.left, 0)) *
        Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));

    // Determinar si al menos el 10% del elemento es visible
    return (intersectionArea / elementArea) >= 0.15;
}




