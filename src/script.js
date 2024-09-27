// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// navbar-fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// click diluar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// dark mode
const cek = document.querySelector("#toggle-dark");
const html = document.querySelector("html");
cek.addEventListener("click", function () {
  if (cek.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  cek.checked = true;
} else {
  cek.checked = false;
}

// efek mengetik
const element = document.querySelector("#mengetik");
const spanElement = element.querySelector("span");

// Ambil teks di luar elemen <span>
const textOutsideSpan = element.childNodes[0].textContent.trim(); // "Hello All👋, I'm"
const speed = 150; // Kecepatan mengetik (milidetik per karakter)
let i = 0;

// Kosongkan teks di luar <span>
element.childNodes[0].textContent = "";

// Fungsi untuk efek mengetik pada teks di luar <span>
function typeWriter() {
  if (i < textOutsideSpan.length) {
    element.childNodes[0].textContent += textOutsideSpan.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
