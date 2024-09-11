export function animacionCruceta(direccion, urlImagen) {
    // Al hacer clic en el botón, cambiamos a imagen con perspectiva
    function animarCruceta(direccion, urlImagen) {
        // Funcionamiento en PC
        document
            .getElementById(`btn${direccion}`)
            .addEventListener("mousedown", function () {
                /* Disminuir el tamaño a la imagen seleccionada */
                function animarImg(idImagen) {
                    document.getElementById(idImagen).src = urlImagen;
                }
                animarImg("imgCruceta");
            });
        // Funcionamiento en movil
        document
            .getElementById(`btn${direccion}`)
            .addEventListener("touchstart", function () {
                /* Disminuir el tamaño a la imagen seleccionada */
                function animarImg(idImagen) {
                    document.getElementById(idImagen).src = urlImagen;
                }
                animarImg("imgCruceta");
            });
    }

    // Al soltar el clic, volvemos al tamaño original
    function desAnimarCruceta(btn, idImagen, urlImagen) {
        // Funcionamiento en PC
        document
            .getElementById(`btn${direccion}`)
            .addEventListener("mouseup", function () {
                /* Disminuir el tamaño a la imagen seleccionada */
                function animarImg(idImagen) {
                    document.getElementById(idImagen).src =
                        "./css/img/crucetaNormal.png";
                }
                animarImg("imgCruceta");
            });
        // Funcionamiento en movil
        document
            .getElementById(`btn${direccion}`)
            .addEventListener("touchend", function () {
                /* Disminuir el tamaño a la imagen seleccionada */
                function animarImg(idImagen) {
                    document.getElementById(idImagen).src = urlImagen;
                }
                animarImg("imgCruceta");
            });
    }

    animarCruceta(direccion, urlImagen);
    desAnimarCruceta(direccion, urlImagen);
}

animacionCruceta("Arriba", "./css/img/flechaArriba.png");
animacionCruceta("Abajo", "./css/img/flechaAbajo.png");
animacionCruceta("Derecha", "./css/img/flechaDerecha.png");
animacionCruceta("Izquierda", "./css/img/flechaIzquierda.png");
