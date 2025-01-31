//Burger

const burgerMenu = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list-link");
const body = document.body;

if (burgerMenu && nav) {
  function toggleMenu() {
    nav.classList.toggle("active");
    burgerMenu.classList.toggle("toggle");

    const expanded =
      burgerMenu.getAttribute("aria-expanded") === "true" || false;
    burgerMenu.setAttribute("aria-expanded", !expanded);

    body.classList.toggle("no-scroll");
  }

  function closeMenu() {
    nav.classList.remove("active");
    burgerMenu.classList.remove("toggle");
    burgerMenu.setAttribute("aria-expanded", false);

    body.classList.remove("no-scroll");
  }

  burgerMenu.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!nav.contains(target) && !burgerMenu.contains(target)) {
      closeMenu();
    }
  });

  // Active menu
  let currentPage = window.location.pathname.split("/").pop().split("?")[0];

  if (currentPage === "") {
    currentPage = "index.html";
  }

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href").split("?")[0];

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
} else {
  console.error("Burger menu or navigation not found on this page.");
}
