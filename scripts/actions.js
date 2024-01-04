// JavaScript para el efecto de parallax en la imagen
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrolled = window.scrollY;
    parallax.style.transform = 'translateY(' + (scrolled * 0.05) + 'px)';
});

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
