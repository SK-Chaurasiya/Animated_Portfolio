/* ================================================
        TODO: Menu icon active link 
   ================================================ */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};



/* ================================================
          TODO: Scroll section active link 
   ================================================ */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector("header nav a[href*=\"" + id + "\"]").classList.add('active');
      });
    };
  });

  /* ============= Sticky navbar ================= */
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);


  /* ================================================================
      TODO: remove toggle icon and when click navbar link (scroll)
     ================================================================ */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};



/* ================================================
        TODO: Scroll Reveal link 
   ================================================ */
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
  origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container .services-box, .portfolio-container .portfolio-box, .contact form', {
  origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, about-img', {
  origin: 'left'
});
ScrollReveal().reveal('.home-content p, about-content', {
  origin: 'right'
});


/* ================================================
        TODO: Scroll section active link 
   ================================================ */
var typed = new Typed(".multiple-text", {
  strings: ["Fronted Developer", "YouTube", "Blogger", "Video Edition", "Motion Graphic"],
  typeSpeed: 100,
  backSpeed: 100,
  BackDelay: 1000,
  loop: true
});