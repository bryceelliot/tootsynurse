// Copyright year
const yrEl = document.getElementById('yr');
if (yrEl) yrEl.textContent = new Date().getFullYear();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-group')
  .forEach(el => observer.observe(el));

// Nav scroll frost (hero pages only)
const nav = document.getElementById('nav');
if (nav && nav.classList.contains('nav--hero')) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  }, { passive: true });
}
