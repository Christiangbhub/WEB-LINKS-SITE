var icon = document.querySelector(".burger-menu");
var menu = document.querySelector(".top-nav");

icon.addEventListener("click", (e) => {
  console.log(e);

  menu.classList.toggle("active");
});
