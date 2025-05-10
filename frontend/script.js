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
function showSlides() {
        slides[slideIndex].classList.remove("active");
        slideIndex = (slideIndex + 1) % totalSlides; // Geser ke slide berikutnya
        slides[slideIndex].classList.add("active");

        // Geser slideshow
        const slideshowContainer = document.getElementById("slideshow");
        slideshowContainer.style.transform = `translateX(-${slideIndex * 100}%)`;

        setTimeout(showSlides, 5000); // Ganti slide setiap 5 detik
    }

    showSlides(); // Mulai slideshow
//============================== slideshow Home section end ===============================

//============================== Form Modal start ===============================
   function scrollToForm() {
      // Scroll the page smoothly to the form section
      document.getElementById("formSection").scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start" // Align the top of the section to the top of the viewport
      });
    }
//============================== Form Modal end ===============================