const hamburger = document.querySelector("#hamburger"),
  nav_menu = hamburger.nextElementSibling;
const nav_list = document.querySelector(".nav-list"),
  nav_link = nav_list.querySelectorAll(".nav-link");
const footer_list = document.querySelector(".footer-list"),
  footer_link = footer_list.querySelectorAll(".footer-link");

// hamburger
hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger-active");
  nav_menu.classList.toggle("hidden");
};

// nav link
nav_list.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    for (const nav of nav_link) {
      nav.classList.remove("active");
    }
    e.target.classList.add("active");
  }
});

// navbar fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixed_nav = header.offsetTop;

  if (window.pageYOffset > fixed_nav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// footer
footer_list.onclick = function (e) {
  if (e.target.classList.contains("footer-link")) {
    for (const nav of nav_link) {
      nav.classList.remove("active");
    }
    // e.target.classList.add("active");
  }
};
