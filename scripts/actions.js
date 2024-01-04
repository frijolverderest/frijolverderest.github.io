// JavaScript para el efecto de parallax en la imagen
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const scrolled = window.scrollY;
    parallax.style.transform = 'translateY(' + (scrolled * 0.05) + 'px)';
});
