let navToggle = document.querySelector(".nav-toggle");
var navul = document.querySelector(".menu");
let closed = document.querySelector(".navegul");

navToggle.addEventListener("click", () => {
    navul.classList.toggle("menu_visible");
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
    } else {
    reveals[i].classList.remove("active");
    }
}
}

window.addEventListener("scroll", reveal);