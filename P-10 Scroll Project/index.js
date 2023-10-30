// pageYOffset is a read-only window property that returns the number of pixels the document has been scrolled vertically.

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// sidebar hidden func

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
linksContainer.classList.toggle("show-links");
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {

  const scrollHeight = window.pageYOffset;
 
  if (scrollHeight > 500) {
    navbar.classList.add("fixed-nav");

    topLink.classList.add("show-link");
  } 
  else {
    navbar.classList.remove("fixed-nav");

    topLink.classList.remove("show-link");
  }

});