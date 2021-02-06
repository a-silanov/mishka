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
