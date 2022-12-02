let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cartItem.classList.remove("active");
};

const slider = () => {
  const imageNames = ["0", "1", "2", "3"];
  const images = imageNames.map((img) => `${img}.png`);

  const container = document.querySelector(".slider-images");

  images.forEach((img) => {
    const imgElement = document.createElement("img");

    imgElement.src = `images/slider/${img}`;

    container.appendChild(imgElement);
  });

  let currentImage = 0;
  let imageSize = window.innerWidth > 1280 ? 6 : 9;

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1280) {
      imageSize = 6;
    } else {
      imageSize = 9;
    }
  });

  const buttons = document.querySelectorAll("[data-btn]");

  const handleBtnClick = (type) => {
    if (type === "prev") {
      if (currentImage < 1) {
        currentImage = images.length;
      }
      currentImage = currentImage - 1;
      container.style.transform = `translateX(-${currentImage * imageSize}0vw)`;
    }
    if (type === "next") {
      if (currentImage >= images.length - 1) {
        currentImage = -1;
      }
      currentImage = currentImage + 1;
      container.style.transform = `translateX(-${currentImage * imageSize}0vw)`;
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => handleBtnClick(btn.dataset.btn));
  });

  setInterval(() => handleBtnClick("next"), 2500);
};
slider();
