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
document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;
  const slideCount = slides.length;
  
  // Atur lebar slider berdasarkan jumlah slide
  slider.style.width = `${slideCount * 100}%`;
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }
  
  function updateSlider() {
    const translateValue = -currentIndex * (100 / slideCount);
    slider.style.transform = `translateX(${translateValue}%)`;
  }
  
  setInterval(nextSlide, 3000);
});
//============================== slideshow Home section end ===============================
