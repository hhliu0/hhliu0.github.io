// Burger menu nav selections

const burger = document.querySelector("#burger-menu");
const navLinks = document.querySelector(".nav-links");
const langSel = document.querySelector(".lang-sel");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  langSel.classList.toggle("show");
});
  
const linkList = document.querySelectorAll(".nav-link, .lang-opts a");

linkList.forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    langSel.classList.remove("show");
  })
);

// Scroll to top button
let scrollbutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollbutton.style.display = "block";
    } else {
      scrollbutton.style.display = "none";
    }
  }
  
// When the user clicks on the scrollbutton, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Contact Form //
const submitBtn = document.querySelector('.submit-btn');

submitBtn.addEventListener('click', () => {
  submitBtn.classList.toggle('active');
});
