// Cargar el JSON
const jsonFilePath = '../files/eventos.json';

let jsonEventos;
const contServivios = "contenedorServiciosEventos";
const contTipos = "contenedorTiposEventos";

async function cargarJSON() {
    try {
        const response = await fetch(jsonFilePath);
        jsonEventos = await response.json();
        mostrarCardEventos(jsonEventos.ServiciosEventos,contServivios);
        mostrarCardEventos(jsonEventos.TiposEventos,contTipos);
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
    }
}

// Función para mostrar los servicios en la sección correspondiente
function mostrarCardEventos(servicios, contenedor) {
    const contenedorServicios = document.getElementById(contenedor);
    if (contenedorServicios) {
        servicios.forEach((servicio, index) => {
            const tarjetaServicio = document.createElement('div');
            tarjetaServicio.classList.add('tarjeta-servicio');
            if (index % 2 !== 0) { 
                tarjetaServicio.classList.add('tarjeta-impar');
            }

            const contenedorDetalle = document.createElement('div');
            contenedorDetalle.classList.add('detalle-servicio');

            const tituloServicio = document.createElement('h1');
            tituloServicio.classList.add('servicio-titulo');
            tituloServicio.innerText = servicio.titulo;

            const descripcionServicio = document.createElement('p');
            descripcionServicio.classList.add('servicio-descripcion');
            descripcionServicio.innerText = servicio.descripcion;

            contenedorDetalle.appendChild(tituloServicio);
            contenedorDetalle.appendChild(descripcionServicio);

            const contenedorImagen = document.createElement('div');
            contenedorImagen.classList.add('imagen-servicio');
            contenedorImagen.style.display = 'flex';
            contenedorImagen.style.justifyContent = 'center';

            const img = document.createElement('img');
            img.classList.add('imagen-svc');
            img.src = servicio.imagen;
            img.alt = '';
            img.onclick = function () {
                openModal(servicio);
            };

            const verMasTitulo = document.createElement('h2');
            verMasTitulo.classList.add('evento-vermas');
            verMasTitulo.innerText = 'Ver más..';

            contenedorImagen.appendChild(img);
            contenedorImagen.appendChild(verMasTitulo);

            if (index % 2 !== 0) {
                tarjetaServicio.appendChild(contenedorImagen);
                tarjetaServicio.appendChild(contenedorDetalle);
            } else {
                tarjetaServicio.appendChild(contenedorDetalle);
                tarjetaServicio.appendChild(contenedorImagen);
            }

            contenedorServicios.appendChild(tarjetaServicio);
        });
    }
}


window.onload = cargarJSON;



