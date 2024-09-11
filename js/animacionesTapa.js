// Retirar tapa movil

const animacionTapa = document
    .getElementById("tapaPokedexMovil")
    .addEventListener("click", () => {
        document.getElementById("tapaPokedexMovil").classList.add("abrirTapa");
    });

export default animacionTapa;
