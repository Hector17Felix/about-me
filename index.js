//Barra de Navegacion Responsive
const navToggle = document.querySelector(".nav-toggle");
const navul = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
    navul.classList.toggle("menu_visible");
});

//Efecto Parallax
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

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
