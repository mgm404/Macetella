let current = 0;
const slides = document.querySelectorAll('.slide');
const track = document.getElementById('track');

setInterval(() => {
  current = (current + 1) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
}, 3000);
