let navToggle = document.querySelector(".nav-toggle");
var navul = document.querySelector(".menu");
let closed = document.querySelector(".navegul");

navToggle.addEventListener("click", () => {
    navul.classList.toggle("menu_visible");
});
