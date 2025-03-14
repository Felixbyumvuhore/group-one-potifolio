document.querySelector(".hamburger").addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".nav-menu").classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".hamburger").classList.remove("active");
    document.querySelector(".nav-menu").classList.remove("active");
  });
});

// Add smooth scrolling to all navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const nav = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  if (
    !nav.contains(e.target) &&
    !hamburger.contains(e.target) &&
    nav.classList.contains("active")
  ) {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Add section reveal on scroll
const sections = document.querySelectorAll(".section");
const revealSection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

sections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// Add smooth hover effect for cards
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `perspective(1000px) rotateX(${
      (y - rect.height / 2) / 20
    }deg) rotateY(${-(x - rect.width / 2) / 20}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
  });
});

// Optimize image loading
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.classList.add("loaded");
  });
});

// Add error handling for form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // Add form validation and submission logic here
    alert("Thank you for your message! We will get back to you soon.");
  });
