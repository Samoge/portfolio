var hamburger = document.querySelector('.hamburger_menu')
var showlinks = document.querySelector('.smoothmenu')
// var backdrop = document.querySelector('.backdrop')

function Addclass() {
    hamburger.classList.toggle('show')
    showlinks.classList.toggle('smoothmenushow')
}

ScrollReveal({
    reset: true,
    duration: 2000,
    distance: "90px",
  });

  ScrollReveal().reveal(".headerright", {
    delay: 100,
    origin: "top-right",
  });

  ScrollReveal().reveal(".every", {
    delay: 150,
    origin: "bottom",
  });