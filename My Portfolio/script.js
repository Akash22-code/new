

// Intersection Observer for animation on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.project-card, .skill-item').forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(50px)';
  observer.observe(el);
});



// Parallax effect for profile image
window.addEventListener('mousemove', (e) => {
  const profileImg = document.querySelector('.profile-image');
  const x = (window.innerWidth - e.pageX * 2) / 90;
  const y = (window.innerHeight - e.pageY * 2) / 90;
  profileImg.style.transform = `translateY(-20px) rotateX(${y}deg) rotateY(${x}deg)`;
});
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader');

  // Minimum display time for loader (1.5 seconds)
  setTimeout(() => {
    loader.classList.add('hidden');

    // Remove loader from DOM after animation
    setTimeout(() => {
      loader.remove();
    }, 1000);
  }, 1500);
});


function hot() {
  window.open('https://drive.google.com/file/d/1j2nKbpfBrZXqJXrLF_3rB9k408FH_B7S/view?usp=sharing');
}















