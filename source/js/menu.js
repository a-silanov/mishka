let menuButton = document.querySelector(".js-button");
let menu = document.querySelector(".js-menu");
let subMenu = document.querySelector(".js-submenu");

menuButton.classList.remove("main-nav__toggle--no-js");
menu.classList.remove("main-nav__list--no-js");
subMenu.classList.remove("submenu--no-js");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menuButton.classList.contains("main-nav__toggle--active")) {
    menu.classList.remove("main-nav__list--active");
    subMenu.classList.remove("submenu--active");
    menuButton.classList.remove("main-nav__toggle--active");
  } else {
    menu.classList.add("main-nav__list--active");
    subMenu.classList.add("submenu--active");
    menuButton.classList.add("main-nav__toggle--active");
  };
}
)
