  // Active nav link on scroll
  function setActive(el) {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
  }

  // Update active nav on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) current = section.getAttribute('id');
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => observer.observe(r));

  // Form submit
  function handleSubmit() {
    const success = document.getElementById('formSuccess');
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 5000);
  }

  // Terms of Denial Modal Logic (Aggressive Version)
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById('denial-modal');
  
  // 1. Always lock the scroll when the page loads
  document.body.style.overflow = 'hidden';
  
  // 2. Ensure the modal is visible on every single load
  modal.classList.remove('hidden');
});

function acceptDenial() {
  const modal = document.getElementById('denial-modal');
  
  // 1. Hide the modal
  modal.classList.add('hidden');
  
  // 2. Restore scrolling capability
  document.body.style.overflow = 'auto'; 
  
  // Notice: The sessionStorage line has been intentionally deleted 
  // so the site never remembers their choice!
}