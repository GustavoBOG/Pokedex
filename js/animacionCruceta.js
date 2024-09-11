export function animacionCruceta(direccion, urlImagen) {
    // Función para cambiar la imagen de la cruceta
    function cambiarImagen(idImagen, nuevaUrl) {
        document.getElementById(idImagen).src = nuevaUrl;
    }

    // Función que añade los eventos para animar la cruceta
    function agregarEventos(direccion, urlImagen) {
        const boton = document.getElementById(`btn${direccion}`);

        // Funcionamiento en PC y móvil
        boton.addEventListener("mousedown", () => cambiarImagen("imgCruceta", urlImagen));
        boton.addEventListener("touchstart", () => cambiarImagen("imgCruceta", urlImagen));

        boton.addEventListener("mouseup", () => cambiarImagen("imgCruceta", "./css/img/crucetaNormal.png"));
        boton.addEventListener("touchend", () => cambiarImagen("imgCruceta", "./css/img/crucetaNormal.png"));
    }

    // Llamar a la función que agrega los eventos
    agregarEventos(direccion, urlImagen);
}

// Llamadas a la función para cada dirección
animacionCruceta("Arriba", "./css/img/flechaArriba.png");
animacionCruceta("Abajo", "./css/img/flechaAbajo.png");
animacionCruceta("Derecha", "./css/img/flechaDerecha.png");
animacionCruceta("Izquierda", "./css/img/flechaIzquierda.png");
