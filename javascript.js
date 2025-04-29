window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section-box');
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('fade-in');
    }, index * 200); // Stagger the animations
  });
});
