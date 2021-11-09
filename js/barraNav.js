window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    let ventanaPosicion = window.scrollY > 0;
    header.classList.toggle("moverHeader", ventanaPosicion);
})