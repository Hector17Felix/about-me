//Barra de Navegacion Responsive
let navToggle = document.querySelector(".nav-toggle");
let navul = document.querySelector(".menu");
const gifStarDiv = document.querySelector('.gifStarDiv');

navToggle.addEventListener("click", () => {
    navul.classList.toggle("menu_visible");

    if (gifStarDiv.style.display === 'none' ) {
        gifStarDiv.style.display = 'flex';
    } else {
        gifStarDiv.style.display = 'none';
    }
});

//Efecto Parallax
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
    } else {
    reveals[i].classList.remove("active");
    }
}
}
window.addEventListener("scroll", reveal);

//Quitar clases
setTimeout(function(){
    const elements = document.querySelectorAll("*");
    elements.forEach(element => {                 
    element.classList.remove("animate__animated", "animate__fadeIn", "animate__fadeInDown", "animate__fadeInUp", "animate__slower", "animate__slideInLeft",);
});
}, 2000);
