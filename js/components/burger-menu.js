const burgerMenuOverlay = document.querySelector(".burger-menu-overlay");
const burgerMenuButton = document.querySelector(".burger-menu-button");
const burgerMenuContent = document.querySelector(".burger-menu-content");

const handleClick = () => {
  if (burgerMenuOverlay.classList.contains("opened")) {
    burgerMenuOverlay.classList.remove("opened");
    burgerMenuContent.classList.remove("opened");
    burgerMenuButton.classList.remove("opened");
  } else {
    burgerMenuOverlay.classList.add("opened");
    burgerMenuContent.classList.add("opened");
    burgerMenuButton.classList.add("opened");
  }
};

burgerMenuButton.addEventListener("click", handleClick);
