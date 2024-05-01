import { conectaAPI } from "./conectaAPI.js";
import construyeCard from "./mostrarVideos.js";

const resultado = document.querySelector("[data-resultado]");

async function filtrarVideo(evento){
    evento.preventDefault();

    const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
    const busqueda = await conectaAPI.buscarVideos(datosDeBusqueda);
    //console.log(busqueda)

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busqueda.forEach(video=>lista.appendChild(construyeCard(video.titulo,video.descripcion,video.url,video.imagen)));

    if (busqueda.length==0) {
        lista.innerHTML = `<h2 class="mensaje__titulo">No se encontraron resultados para ${datosDeBusqueda}</h2>`
    }

}

const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click",evento=>filtrarVideo(evento))