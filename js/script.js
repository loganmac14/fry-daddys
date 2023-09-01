const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("nav ul");
const header = document.querySelector("header");
const body = document.body;

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
  if (body.style.overflow === 'hidden') {
    body.style.overflow = 'auto';
} else {
    body.style.overflow = 'hidden';
}
})