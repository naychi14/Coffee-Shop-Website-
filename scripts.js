/* modal popup  
--------------*/

const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

// Show modal on first visit
window.onload = function () {
  if (!localStorage.getItem("visited")) {
    modal.style.display = "block";
    localStorage.setItem("visited", true);
  }
};

// Close modal
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


/* Image Slideshow  
--------------*/

let slideIndex = 0;
// ⬇️ change this selector to target .slide instead of img
const slides = document.querySelectorAll('.slideshow .slide');

function showSlide() {
  // hide all slides
  slides.forEach(slide => slide.classList.remove('active'));

  // move to next slide
  slideIndex = (slideIndex + 1) % slides.length;

  // show the current slide
  slides[slideIndex].classList.add('active');
}

// show the first slide immediately
slides[0].classList.add('active');

// rotate every 3 seconds
setInterval(showSlide, 3000);




/* form success message  
------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Show popup
    successMessage.classList.add("show");

    // Reset form
    form.reset();

    // Hide popup after 3 seconds
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 3000);
  });
});




/* Search bar  
--------------*/

// Search filter for equipment
document.addEventListener("DOMContentLoaded", () => {
  // Search functionality
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const filter = this.value.toLowerCase();
      const items = document.querySelectorAll(".equipment-item");

      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(filter)) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
});


/* nav bar  
--------------*/

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const dropdowns = document.querySelectorAll(".dropdown > a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Optional: make dropdowns expandable on small screens
dropdowns.forEach(link => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // stop direct link navigation
      link.parentElement.classList.toggle("open");
    }
  });
});
