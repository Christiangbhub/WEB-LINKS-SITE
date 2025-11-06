var icon = document.querySelector(".burger-menu");
var menu = document.querySelector(".top-nav");

icon.addEventListener("click", () => {
  console.log("clicked");

  menu.classList.toggle("active");
});
