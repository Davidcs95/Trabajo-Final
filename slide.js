const slides = document.querySelectorAll('.slide');
let indiceActual = 0;
function cambiarImagen() {
    slides[indiceActual].classList.remove('active');
    indiceActual = (indiceActual + 1) % slides.length;
    slides[indiceActual].classList.add('active');
}
setInterval(cambiarImagen, 3000);