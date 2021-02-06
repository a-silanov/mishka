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

let addCart = document.querySelectorAll(".js-add-cart");
let cartPopup = document.querySelector(".cart");
let popup = cartPopup.querySelector(".cart__wrapper");

for (let i = 0; i < addCart.length; i++) {
  addCart[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("cart--active");
  })
};

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("cart--active")) {
      evt.preventDefault();
      cartPopup.classList.remove("cart--active");
    }
  }
});

cartPopup.addEventListener("mousedown", function (evt) {
  cartPopup.classList.remove("cart--active");
});

popup.addEventListener("mousedown", function (e) {
  e.stopPropagation();
});


function initMap() {
  let academy = { lat: 59.938635, lng: 30.323118 };
  let map = new google.maps.Map(
    document.getElementById("map"), {
    zoom: 17,
    center: academy,
    disableDefaultUI: true
  }
  );
  let marker = new google.maps.Marker({
    position: academy,
    map: map,
    icon: "/img/icon-map-pin.svg"
  });
}
