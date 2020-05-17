// Menu Btn
document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".nav__list").classList.toggle("show")
  );

// Portfolio
const portfolioItems = document.querySelectorAll(".portfolio__item");
portfolioItems.forEach((portfolioItem) => {
  portfolioItem.addEventListener("mouseover", () => {
    portfolioItem.childNodes[1].classList.add("image-blur");
  });

  portfolioItem.addEventListener("mouseout", () => {
    portfolioItem.childNodes[1].classList.remove("image-blur");
  });
});

// Scroll Btn
const backTop = document.querySelector(".btn__scroll--top");
backTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
});

// Colors
const loopAcccent = function () {
  const colors = ["#dd2c00", "#ff5722", "#16e0bd", "#00bcd4"];
  const randomNum = Math.floor(Math.random() * colors.length);
  document.documentElement.style.setProperty(
    "--accent-color",
    colors[randomNum]
  );
};

setInterval(loopAcccent, 20000);
