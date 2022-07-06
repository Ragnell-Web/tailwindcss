const hamburger = document.querySelector("#hamburger"),
  nav_menu = hamburger.nextElementSibling;
const nav_list = document.querySelector(".nav-list"),
  nav_link = nav_list.querySelectorAll(".nav-link");
const footer_list = document.querySelector(".footer-list"),
  footer_link = footer_list.querySelectorAll(".footer-link");
const dark_toggle = document.querySelector("#dark-toggle"),
  html = document.querySelector("html");

// hamburger
hamburger.onclick = function () {
  hamburger.classList.toggle("hamburger-active");
  nav_menu.classList.toggle("hidden");
};

// hidden hamburger
window.onclick = function (e) {
  if (e.target.classList.contains("hamburger-line")) return false;
  const isTrue = e.target != hamburger && e.target != nav_menu && !e.target.classList.contains("nav-link") && e.target != dark_toggle.nextElementSibling.children[0] && e.target != dark_toggle && !e.target.classList.contains("toggle-circle");
  if (isTrue) {
    hamburger.classList.remove("hamburger-active");
    nav_menu.classList.add("hidden");
  };
}

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
  const to_top = document.querySelector("#to-top");

  if (window.pageYOffset > fixed_nav) {
    header.classList.add("navbar-fixed");
    to_top.classList.remove("hidden");
    to_top.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    to_top.classList.add("hidden");
    to_top.classList.remove("flex");
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

// dark mode toggle
dark_toggle.onclick = () => {
  if (dark_toggle.checked) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
    // localStorage.theme = 'dark'
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    // localStorage.theme = 'light'
  }
}
if (localStorage.getItem("theme") == "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  dark_toggle.checked = true;
} else {
  dark_toggle.checked = false;
}