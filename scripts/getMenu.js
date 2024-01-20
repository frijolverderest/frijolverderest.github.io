// Ruta del archivo JSON
const jsonFilePath = 'txt/menu.json';

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

   // Muestra los platos de entradas
   //mostrarPlatosEntradas(platos.menu.entradas);
   //mostrarPlatosConFrijol(platos.menu.entradas);

const contenedorEntradas = document.getElementById('menuEntradas');
cargarCategoria(contenedorEntradas, menu.entradas);
const contenedorFrijol = document.getElementById('menuConFrijol');
cargarCategoria(contenedorFrijol, menu.platosConFrijol);
const contenedorRio = document.getElementById('menuDelRio');
cargarCategoria(contenedorRio, menu.delRio);
const contenedorCarnes = document.getElementById('menuCarnes');
cargarCategoria(contenedorCarnes, menu.carnes);
const contenedorBebidas = document.getElementById('menuBebidas');
cargarCategoria(contenedorBebidas, menu.bebidas);



}

function cargarCategoria(contenedor, categoria) {
  categoria.forEach((plato) => {
    const platoDiv = document.createElement('div');
    platoDiv.classList.add('card', 'platep');
    platoDiv.onclick = () => showDetails(`p${plato.id}`);
    //platoDiv.addEventListener('mouseover', () => showDetails(`p${entrada.id}`));
    //platoDiv.addEventListener('mouseout', () => closeModal());

    const img = document.createElement('img');
    img.classList.add('platep-img');
    img.src = `files/imgOurMenu/${plato.fotografias[0]}`;
    img.alt = `Plato ${plato.id} - Foto 1`;


    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'platep-details');

    const titulo = document.createElement('h3');
    titulo.classList.add('card-title');
    titulo.textContent = plato.nombre;


    const descripcion = document.createElement('p');
    descripcion.classList.add('card-text');
    descripcion.textContent = plato.descripcionCorta;

    const precio = document.createElement('h3');
    precio.classList.add('card-title');
    precio.textContent = "$"+ plato.precio.toFixed(3);

    cardBody.appendChild(titulo);
    cardBody.appendChild(descripcion);
    cardBody.appendChild(precio);
    platoDiv.appendChild(img);
    platoDiv.appendChild(cardBody);
    contenedor.appendChild(platoDiv);
  });
}


// Función para mostrar el modal con detalles del plato
function showDetails(platoId) {
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
}

// Función para cerrar el modal
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Llama a la función para cargar el JSON al cargar la página
window.onload = cargarJSON;



