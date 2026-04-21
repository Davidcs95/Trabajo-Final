document.addEventListener('DOMContentLoaded', () => {

const carruseles = document.querySelectorAll('.carrusel');

carruseles.forEach((carrusel) => {
    let slides = carrusel.querySelectorAll('.slide');
    let index = 0;

    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 3000);
});
});
        





