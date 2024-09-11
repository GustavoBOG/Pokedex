
const sonidoBotones = document.querySelectorAll('button')
sonidoBotones.forEach(boton => {
    boton.addEventListener('click', () => {
        const audio = new Audio("./css/audio/sonidoBtn.mp3"); 
        audio.play();
    });
});