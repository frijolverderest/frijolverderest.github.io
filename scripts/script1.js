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
    return (intersectionArea / elementArea) >= 0.40;
}

$(document).ready(function() {
    // Función para manejar el clic en los botones de categoría
    $('.btnc').on('click', function() {
      $('.btnc').removeClass('bar-active'); // Eliminar la clase "active" de todos los botones
      $(this).addClass('bar-active'); // Agregar la clase "active" al botón clickeado
      var target = $(this).data('target'); // Obtener el objetivo de la sección
      $('html, body').animate({
        scrollTop: $(target).offset().top // Desplazar suavemente a la sección objetivo
      }, 800);
    });
});

// Función para resaltar automáticamente el botón de categoría mientras se desplaza
window.addEventListener('scroll', function() {
    var scrollDistance = $(window).scrollTop();
    $('.btnc').each(function(i) {
        var target = $(this).data('target'); // Obtener el objetivo de la sección asociada al botón
        var section = $(target); // Seleccionar la sección asociada al botón
        if (isElementInViewport(section[0])) {
            $('.btnc').removeClass('bar-active'); // Eliminar la clase "active" de todos los botones
            $(this).addClass('bar-active'); // Agregar la clase "active" al botón correspondiente
        }
    });
});

