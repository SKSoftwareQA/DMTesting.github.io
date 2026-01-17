// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Swipers
new Swiper("#heroSwiper", {
  loop: true,
  autoplay: { delay: 3500, disableOnInteraction: false },
  pagination: { el: ".hero .swiper-pagination", clickable: true },
  navigation: { nextEl: ".hero .swiper-button-next", prevEl: ".hero .swiper-button-prev" }
});

new Swiper("#testimonialsSwiper", {
  loop: true,
  autoplay: { delay: 4200, disableOnInteraction: false },
  pagination: { el: "#testimonials .swiper-pagination", clickable: true }
});
