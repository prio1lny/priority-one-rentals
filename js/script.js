document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const yearTarget = document.querySelector('[data-year]');
  const faqButtons = document.querySelectorAll('.faq-question');
  const contactForm = document.querySelector('[data-contact-form]');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.getAttribute('data-open') === 'true';
      navLinks.setAttribute('data-open', String(!isOpen));
    });
  }

  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }

  faqButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      if (!item) return;
      item.classList.toggle('open');
    });
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = document.querySelector('[data-form-status]');
      if (status) {
        status.textContent = 'Thanks for reaching out. Our team will get back to you shortly.';
      }
      contactForm.reset();
    });
  }
});
