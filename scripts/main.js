var burgerMenu = document.querySelector(".burger-menu");
var bars = document.querySelectorAll(".bar");
var navLinks = document.querySelector(".nav-links");
var ellipsesMenu = document.querySelector(".ellipses-menu")
var container = document.querySelector(".container")
const dropdown = document.querySelector('.ellipses-dropdown');


burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("showNav");
  container.classList.toggle("hideContent");
  burgerMenu.classList.toggle("active");

})

document.addEventListener("click", (e)=> {
  if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target))  {
    burgerMenu.classList.remove("active");
    navLinks.classList.remove("showNav");
    container.classList.remove("hideContent")
  }
})

ellipsesMenu.addEventListener("click", ()=> {
dropdown.classList.toggle("active")

})

document.addEventListener('click', (e) => {
  console.log(e.target);
  
  if (!dropdown.contains(e.target) && !ellipsesMenu.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});



