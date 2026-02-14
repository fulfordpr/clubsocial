// main.js — lightweight site scripts
// set year
document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if (el) el.textContent = y;
});

// Carousel auto-cycle
document.addEventListener('DOMContentLoaded', function () {
  const slidesEl = document.querySelector('.slides');
  if (!slidesEl) return;
  const total = slidesEl.children.length;
  let index = 0;
  const intervalMs = 3500;
  let timer = null;

  const dotsEl = document.querySelector('.carousel-dots');
  // create dots
  for (let i = 0; i < total; i++) {
    const btn = document.createElement('button');
    btn.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(btn);
  }

  const dotButtons = Array.from(dotsEl.children);

  function updateDots() {
    dotButtons.forEach((b, i) => b.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = (i + total) % total;
    slidesEl.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
  }

  function next() { goTo(index + 1); }
  function prev() { goTo(index - 1); }

  document.querySelector('.carousel-next')?.addEventListener('click', () => { pause(); next(); });
  document.querySelector('.carousel-prev')?.addEventListener('click', () => { pause(); prev(); });

  function start() {
    if (timer) return;
    timer = setInterval(() => { next(); }, intervalMs);
  }
  function pause() { if (timer) { clearInterval(timer); timer = null; } }

  // pause on hover/focus
  const inner = document.querySelector('.carousel-inner');
  inner?.addEventListener('mouseenter', pause);
  inner?.addEventListener('mouseleave', start);
  inner?.addEventListener('focusin', pause);
  inner?.addEventListener('focusout', start);

  // touch swipe support
  let touchStartX = 0;
  inner?.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; pause(); });
  inner?.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { if (dx < 0) next(); else prev(); }
    start();
  });

  // initialize
  updateDots();
  start();
});
