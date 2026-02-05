// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => navLinks.classList.toggle("open"));
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Swipers (Hero + Testimonials)
document.addEventListener("DOMContentLoaded", () => {
  if (window.Swiper) {
    const heroEl = document.querySelector("#heroSwiper");
    if (heroEl) {
      new Swiper("#heroSwiper", {
        loop: true,
        grabCursor: true,
        spaceBetween: 16,
        autoplay: { delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true },
        pagination: { el: "#heroSwiper .swiper-pagination", clickable: true },
        navigation: { nextEl: "#heroSwiper .swiper-button-next", prevEl: "#heroSwiper .swiper-button-prev" }
      });
    }

    const testEl = document.querySelector("#testimonialsSwiper");
    if (testEl) {
      new Swiper("#testimonialsSwiper", {
        loop: true,
        grabCursor: true,
        spaceBetween: 14,
        autoplay: { delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true },
        pagination: { el: "#testimonialsSwiper .swiper-pagination", clickable: true },
        navigation: { nextEl: "#testimonialsSwiper .swiper-button-next", prevEl: "#testimonialsSwiper .swiper-button-prev" },
        breakpoints: {
          0: { slidesPerView: 1 },
          780: { slidesPerView: 2 },
          1040: { slidesPerView: 3 }
        }
      });
    }
  }

  // Reveal (safe)
  const revealEls = document.querySelectorAll(".reveal");
  const reveal = () => {
    revealEls.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 120) el.classList.add("active");
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();
});

// Rocket fire scroll-to-top
const rocketBtn = document.getElementById("rocketBtn");
if (rocketBtn) {
  rocketBtn.addEventListener("click", () => {
    rocketBtn.classList.add("rocket-fire");

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      rocketBtn.classList.remove("rocket-fire");
      // Bring it back after animation so user can reuse
      setTimeout(() => (rocketBtn.style.opacity = "1"), 50);
    }, 850);
  });
}
