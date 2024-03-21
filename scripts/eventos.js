// Función para abrir el modal
function openModal(servicio) {
    document.getElementById('myModal').style.display = 'block';

    // Para el primer item
    document.querySelector('.carousel-inner .item:nth-child(1) .modal-img').src = servicio.carousel[0].src;//'files/imgeventos/graduacion2.jpg';
    document.querySelector('.carousel-inner .item:nth-child(1) h2').innerText =  servicio.carousel[0].titulo; //'Graduaciones 1';
    document.querySelector('.carousel-inner .item:nth-child(1) p').innerText = servicio.carousel[0].descripcion//'Disfruta de una decoración encantadora para tu graduación en Frijol Verde';

    // Para el segundo item
    document.querySelector('.carousel-inner .item:nth-child(2) .modal-img').src = servicio.carousel[1].src;//'files/imgeventos/graduacion.jpg';
    document.querySelector('.carousel-inner .item:nth-child(2) h2').innerText =  servicio.carousel[1].titulo; //'Graduaciones 2';
    document.querySelector('.carousel-inner .item:nth-child(2) p').innerText = servicio.carousel[1].descripcion//'Disfruta de una decoración encantadora para tu graduación en Frijol Verde';

    // Para el tercer item
    document.querySelector('.carousel-inner .item:nth-child(3) .modal-video').src = servicio.carousel[2].src;//'files/imgeventos/graduacionesv.mp4';
    document.querySelector('.carousel-inner .item:nth-child(3) h2').innerText =  servicio.carousel[2].titulo; //'Graduaciones 3';
    document.querySelector('.carousel-inner .item:nth-child(3) p').innerText = servicio.carousel[2].descripcion//'Disfruta de una decoración encantadora para tu graduación en Frijol Verde';
}


// Función para cerrar el modal
function closeModal() {
    var video = document.getElementById('videoGraduaciones'); //TODO: Cambiar por el id del video
    video.pause();
    document.getElementById('myModal').style.display = 'none';
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        var video = document.getElementById('videoGraduaciones');
        video.pause();
        modal.style.display = 'none';
    }
}

$(document).ready(function () {
    $('.carousel').on('touchstart', function (event) {
        const xClick = event.originalEvent.touches[0].pageX;
        $(this).one('touchmove', function (event) {
            const xMove = event.originalEvent.touches[0].pageX;
            const sensitivityInPx = 5; // Sensibilidad del deslizamiento (ajústala según tu preferencia)
            if (Math.floor(xClick - xMove) > sensitivityInPx) {
                $(this).carousel('next');
            }
            else if (Math.floor(xClick - xMove) < -sensitivityInPx) {
                $(this).carousel('prev');
            }
        });
        $(this).on('touchend', function () {
            $(this).off('touchmove');
        });
    });
});

window.addEventListener('scroll', function () {
    var video = document.getElementById('videoGraduaciones');
    var position = video.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (position < screenHeight && position > 0) {
        video.play();
    } else {
        video.pause();
    }
});
