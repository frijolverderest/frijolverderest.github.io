// Ruta del archivo JSON
const jsonFilePath = '../files/menu.json';

// Variable global para almacenar los datos de los platos
let platos;

// Función para cargar el archivo JSON
async function cargarJSON() {
  try {
    const response = await fetch(jsonFilePath);
    platos = await response.json();
    // Muestra los platos
    mostrarPlatos(platos.menu);

  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
  }
}



// Función para mostrar los platos en la sección correspondiente
function mostrarPlatos(menu) {
  const contenedorEntradas = document.getElementById('menuEntradas');
  if (contenedorEntradas) {
    cargarCategoria(contenedorEntradas, menu.entradas);
  }

  const contenedorFrijol = document.getElementById('menuConFrijol');
  if (contenedorFrijol) {
    cargarCategoria(contenedorFrijol, menu.platosConFrijol);
  }

  const contenedorRio = document.getElementById('menuDelRio');
  if (contenedorRio) {
    cargarCategoria(contenedorRio, menu.delRio);
  }

  const contenedorCarnes = document.getElementById('menuCarnes');
  if (contenedorCarnes) {
    cargarCategoria(contenedorCarnes, menu.carnes);
  }

  const contenedorBebidas = document.getElementById('menuBebidas');
  if (contenedorBebidas) {
    cargarCategoria(contenedorBebidas, menu.bebidas);
  }
  
  const contenedorPostres = document.getElementById('menuPostres');
  if (contenedorPostres) {
    cargarCategoria(contenedorPostres, menu.postres);
  }

  const contenedorDesayunos = document.getElementById('menuDesayunos');
  if (contenedorDesayunos) {
    cargarCategoria(contenedorDesayunos, menu.desayunos);
  }
  const contenedorPlatosjr= document.getElementById('menuPlatosjr');
  if (contenedorPlatosjr) {
    cargarCategoria(contenedorPlatosjr, menu.platosJunior);
  }
}

function cargarCategoria(contenedor, categoria) {
  categoria.forEach((plato) => {
    const platoDiv = document.createElement('div');
    platoDiv.classList.add('plato-card'); // Agrega la clase 'plato-card'
    //platoDiv.classList.add('animated'); // Agrega la clase 'animated' para iniciar la animación
    
  platoDiv.onclick = () => showDetails(plato);
   // platoDiv.style.opacity = '0'; // Inicia invisible
    //platoDiv.style.transition = 'transform: scale(0.5)';
   // platoDiv.style.animation = 'zoomIn 0.5s ease-out';
   //platoDiv.classList.add('zoomIn');

    //platoDiv.addEventListener('mouseover', () => showDetails(`p${entrada.id}`));
    //platoDiv.addEventListener('mouseout', () => closeModal());
    
    const platoDetallesDiv = document.createElement('div');
    platoDetallesDiv.classList.add('plato-detalles');

    const platoH2 = document.createElement('h2');
    platoH2.classList.add('plato-nombre');
    platoH2.textContent = plato.nombre.toUpperCase();

    const descripcionP = document.createElement('p');
    descripcionP.classList.add('plato-descripcion');
    descripcionP.textContent = plato.descripcionCorta;

    const platoHr = document.createElement('hr');
    platoHr.classList.add('plato-hr');

    const precioP = document.createElement('p');
    precioP.classList.add('plato-precio');
    precioP.textContent = "$" + plato.precio.toFixed(3);

//******* */

    const img = document.createElement('img');
    img.classList.add('plato-img');
    img.src = `files/imgmenu/${plato.fotografias[0]}`;
    img.alt = `Plato ${plato.id} - Foto 1`;


    platoDetallesDiv.appendChild(platoH2);
    platoDetallesDiv.appendChild(descripcionP);
    platoDetallesDiv.appendChild(platoHr);
    platoDetallesDiv.appendChild(precioP);

    platoDiv.appendChild(platoDetallesDiv);
    platoDiv.appendChild(img);

    contenedor.appendChild(platoDiv);

 
    

  });
}


function showDetails(_plato) {
  document.getElementById('myModal').style.display = 'block';

  // Para el primer item
  document.querySelector('.carousel-inner .item:nth-child(1) .modal-img').src = `files/imgmenu/${_plato.fotografias[0]}`;//'files/imgeventos/graduacion2.jpg';
  document.querySelector('.carousel-inner .item:nth-child(1) h2').innerText =  _plato.nombre; //'Graduaciones 1';
  document.querySelector('.carousel-inner .item:nth-child(1) p').innerText = _plato.descripcionCorta; //'Disfruta de una decoración encantadora para tu graduación en Frijol Verde';

  // Para el segundo item
  document.querySelector('.carousel-inner .item:nth-child(2) .modal-img').src = `files/imgmenu/${_plato.fotografias[0]}`;//'files/imgeventos/graduacion.jpg';
  document.querySelector('.carousel-inner .item:nth-child(2) h2').innerText =  _plato.nombre; //'Graduaciones 2';
  document.querySelector('.carousel-inner .item:nth-child(2) p').innerText = _plato.descripcionCorta;//'Disfruta de una decoración encantadora para tu graduación en Frijol Verde';

  // Para el tercer item
  document.querySelector('.carousel-inner .item:nth-child(3) .modal-video').src =`files/imgmenu/${_plato.fotografias[0]}`;//'files/imgeventos/graduacionesv.mp4';
  document.querySelector('.carousel-inner .item:nth-child(3) h2').innerText =   _plato.nombre; //'Graduaciones 3';
  document.querySelector('.carousel-inner .item:nth-child(3) p').innerText = _plato.descripcionCorta;//'Disfruta de una decoración encantadora para tu graduación en Frijol Verde';
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



/*


// Función para mostrar el modal con detalles del plato
function showDetails(plato) {
  const platepContainer = document.querySelector('.platep');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalDetails = document.getElementById('modal-details');

  // Obtener información del plato desde el JSON
  const platoIndex = parseInt(platoId.replace('p', '')) - 1;
  const plato = platos.menu.entradas[platoIndex];

  // Actualizar contenido del modal
  modalImg.src = `files/imgOurMenu/${platoId}.jpeg`;
  modalImg.alt = `Plato ${platoIndex + 1}`;
  modalDetails.innerHTML = `
    <h2>${plato.nombre}</h2>
    <p>${plato.descripcionLarga}</p>
    <p>Precio: $${plato.precio.toFixed(2)}</p>
    <!-- Agrega más detalles según sea necesario -->
  `;

  // Mostrar el modal
  platepContainer.style.zIndex = 0;
  modal.style.display = 'block';
}
*/
/*
// Función para mostrar el modal con detalles del plato
function showDetails(platoId) {
  const platepContainer = document.querySelector('.platep');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalDetails = document.getElementById('modal-details');

  // Recorrer todas las categorías del menú
  for (const categoria in platos.menu) {
    if (platos.menu.hasOwnProperty(categoria)) {
      // Buscar el plato por su ID dentro de la categoría actual
      const plato = platos.menu[categoria].find(plato => plato.id === parseInt(platoId.replace('p', '')));

      // Si se encuentra el plato, actualizar el contenido del modal
      if (plato) {
        modalImg.src = `files/imgOurMenu/${platoId}.jpeg`;
        modalImg.alt = `Plato ${plato.id}`;
        modalDetails.innerHTML = `
          <h2>${plato.nombre}</h2>
          <p>${plato.descripcionLarga}</p>
          <p>Precio: $${plato.precio.toFixed(2)}</p>
          <!-- Agrega más detalles según sea necesario -->
        `;

        // Mostrar el modal
        platepContainer.style.zIndex = 0;
        modal.style.display = 'block';

        // Salir del bucle al encontrar el plato
        return;
      }
    }
  }

  // Si no se encuentra el plato, puedes manejarlo como desees (por ejemplo, mostrar un mensaje de error)
  console.log(`No se encontró el plato con ID ${platoId}`);
}*/

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
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

// Llama a la función para cargar el JSON al cargar la página
window.onload = cargarJSON;



document.addEventListener('DOMContentLoaded', (event) => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'scale(1)';
          } else {
              entry.target.style.opacity = 0;
              entry.target.style.transform = 'scale(0.5)';
          }
      });
  }, { threshold: 0.1 }); // Ajusta el umbral según necesidad

  // Observa todos los elementos .plato-card
  document.querySelectorAll('.plato-card').forEach(card => {
      observer.observe(card);
  });

  // Función para observar elementos .plato-card agregados dinámicamente
  function observarElementosDinamicos() {
      document.querySelectorAll('.plato-card').forEach(card => {
          observer.observe(card);
      });
  }

  // Llama a la función para observar los elementos dinámicos
  observarElementosDinamicos();
});