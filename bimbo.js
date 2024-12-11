const openMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.getElementById("close-menu-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

// Media query for mobile view
const isMobileView = window.matchMedia("(max-width: 768px)");

// Open menu functionality
openMenuBtn.addEventListener("click", () => {
  nav.style.left = "0";
  nav.style.opacity = "1";
  closeMenuBtn.style.display = "block";
  openMenuBtn.style.display = "none";
});

// Close menu functionality
closeMenuBtn.addEventListener("click", () => {
  closeNav();
});

// Close nav when a link is clicked, only for mobile view
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (isMobileView.matches) {
      closeNav();
    }
  });
});

// Function to close the nav
function closeNav() {
  nav.style.left = "-100%";
  nav.style.opacity = "0";
  openMenuBtn.style.display = "inline-block";
  closeMenuBtn.style.display = "none";
}

// Optional: Listen for screen size changes (for dynamic resizing)
isMobileView.addEventListener("change", () => {
  if (!isMobileView.matches) {
    // Reset navigation styles for larger screens
    nav.style.left = "0";
    nav.style.opacity = "1";
    openMenuBtn.style.display = "none";
    closeMenuBtn.style.display = "none";
  }
});


const heroBanner = document.querySelector('.hero');

// Array of background image URLs
const images = [
    'image/2.jpg',
    'image/5.jpg',
    'image/8.jpg',
];

let currentImageIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    heroBanner.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Initial background image setup
changeBackgroundImage();

// Change the background image every 2 seconds
setInterval(changeBackgroundImage, 4000);




 
 
 // Swiper Initialization
 document.addEventListener('DOMContentLoaded', function() {
    if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper', {
            loop: true,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 6000,
                disableOnInteraction: false
            }
        });
    } else {
        console.error('Swiper library not loaded');
    }
});



// Select all "Read More" buttons
const readMoreButtons = document.querySelectorAll('.read-more-btn');

readMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const serviceDescription = button.previousElementSibling;
        const moreText = serviceDescription.querySelector('.more-text');

        if (moreText.style.display === 'inline') {
            // Hide the extra text
            moreText.style.display = 'none';
            button.textContent = 'Read More';
        } else {
            // Show the extra text
            moreText.style.display = 'inline';
            button.textContent = 'Read Less';
        }
    });
});
