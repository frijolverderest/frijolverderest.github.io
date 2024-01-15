// JavaScript para el efecto de parallax en la imagen
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrolled = window.scrollY;
    parallax.style.transform = 'translateY(' + (scrolled * 0.05) + 'px)';
});

 
window.addEventListener('scroll', function() {
    const plateps = document.querySelectorAll('.platep');
    const scrolled = window.scrollY;

    plateps.forEach((platep) => {
        // Calcula la posición relativa y aplica transformación translateY
        //platep.style.transform = 'translateY(' + (scrolled * 0.05) + 'px)';

        // Agrega la clase de animación cuando el elemento está visible en la pantalla
        if (isElementInViewport(platep)) {
            platep.classList.add('zoomIn');
        } else {
            // Puedes quitar la clase aquí si prefieres que la animación se reinicie cada vez que el elemento sale de la vista
            platep.classList.remove('zoomIn');
        }
    });
});

// Función para verificar si un elemento está en la vista
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



function showDetails(plateId) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalDetails = document.getElementById('modal-details');

    modalImg.src = `../files/imgOurMenu/${plateId}.jpeg`;

    // Texto de prueba para la descripción larga del plato
    modalDetails.innerHTML = "<h2>Nombre del plato</h2><p>Esta es una descripción larga de ejemplo para el plato. Incluye detalles sobre los ingredientes y la preparación del plato. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>";

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
