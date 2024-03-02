    // Función para abrir el modal
    function openModal() {
        document.getElementById('myModal').style.display = 'block';
    }

    // Función para cerrar el modal
    function closeModal() {
  
        var video = document.getElementById('videoGraduaciones');
    video.pause();
    document.getElementById('myModal').style.display = 'none';
    }

    // Cerrar el modal si se hace clic fuera de él
    window.onclick = function(event) {
        var modal = document.getElementById('myModal');
        if (event.target == modal) {
            var video = document.getElementById('videoGraduaciones');
            video.pause();
            modal.style.display = 'none';
        }
    }

    $(document).ready(function(){
        $('.carousel').on('touchstart', function(event){
            const xClick = event.originalEvent.touches[0].pageX;
            $(this).one('touchmove', function(event){
                const xMove = event.originalEvent.touches[0].pageX;
                const sensitivityInPx = 5; // Sensibilidad del deslizamiento (ajústala según tu preferencia)
                if(Math.floor(xClick - xMove) > sensitivityInPx){
                    $(this).carousel('next');
                }
                else if(Math.floor(xClick - xMove) < -sensitivityInPx){
                    $(this).carousel('prev');
                }
            });
            $(this).on('touchend', function(){
                $(this).off('touchmove');
            });
        });
    });
    
    window.addEventListener('scroll', function() {
    var video = document.getElementById('videoGraduaciones');
    var position = video.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (position < screenHeight && position > 0) {
        video.play();
    } else {
        video.pause();
    }
});
