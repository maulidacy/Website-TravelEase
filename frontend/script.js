//============================== Navbar start ===============================
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
//============================== Navbar end ===============================


//============================== slideshow Home section start ===============================
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(changeSlide, 5000);  // Change image every 5 seconds

//============================== slideshow Home section end ===============================