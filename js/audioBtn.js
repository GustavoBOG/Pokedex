function asignarAudioBtn(rutaBtn) {
    const boton = document.getElementById(rutaBtn);
    const audio = new Audio("./css/audio/sonidoBtn.mp3");

    boton.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
    });
}
asignarAudioBtn("btnBuscar");
asignarAudioBtn("btnEliminar");
asignarAudioBtn("btnDerecha");
asignarAudioBtn("btnIzquierda");
asignarAudioBtn("btnArriba");
asignarAudioBtn("btnAbajo");
asignarAudioBtn("botonAudio");
asignarAudioBtn("btnModoOscuro");
asignarAudioBtn("btnInstrucciones");

asignarAudioBtn("acero");
asignarAudioBtn("agua");
asignarAudioBtn("bicho");
asignarAudioBtn("dragon");
asignarAudioBtn("electrico");
asignarAudioBtn("hada");
asignarAudioBtn("fantasma");
asignarAudioBtn("fuego");
asignarAudioBtn("hielo");
asignarAudioBtn("normal");
asignarAudioBtn("planta");
asignarAudioBtn("lucha");
asignarAudioBtn("psiquico");
asignarAudioBtn("roca");
asignarAudioBtn("siniestro");
asignarAudioBtn("tierra");
asignarAudioBtn("veneno");
asignarAudioBtn("volador");
