var burgerMenu = document.querySelector(".burger-menu");
var bars = document.querySelectorAll(".bar");
var navLinks = document.querySelector(".nav-links");

var container = document.querySelector(".container")



burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("showNav");
  container.classList.toggle("hideContent");
  burgerMenu.classList.toggle("active");

})