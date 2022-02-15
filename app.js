const yourCart = document.getElementById("your-cart");

function openYourCart() {
  yourCart.style.transform = "translateX(0)";
}
function closeYourCart() {
  yourCart.style.transform = "translateX(320px)";
}

const menu = document.getElementById("menu");
function menuToggle() {
  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
