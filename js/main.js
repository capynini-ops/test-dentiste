/* Cabinet Dentaire Le Chesnay — main.js */

// Navbar shadow on scroll
(function () {
  const nav = document.querySelector('.navbar');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();

// Highlight current page in nav
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
  });
})();

// Scroll reveal
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

// Set current year in footers
(function () {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();

// Contact form (front-end demo validation only)
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    const alertBox = document.getElementById('formAlert');
    if (alertBox) {
      alertBox.classList.remove('d-none');
      form.reset();
      form.classList.remove('was-validated');
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
})();
