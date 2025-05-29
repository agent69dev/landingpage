const countdown = document.getElementById("countdown");

// Always set eventDate to 5 days from now
const eventDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance <= 0) {
    clearInterval(interval);
    countdown.innerHTML = "Event Live!";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000);

// Mobile tap-to-toggle for creator images
document.querySelectorAll('.creator-card').forEach(card => {
  card.addEventListener('touchend', function (e) {
    // Prevent also triggering click events
    e.preventDefault();
    const defaultImg = card.querySelector('.default-image');
    const hoverImg = card.querySelector('.hover-image');
    if (defaultImg && hoverImg) {
      const isDefaultVisible = window.getComputedStyle(defaultImg).opacity !== "0";
      if (isDefaultVisible) {
        defaultImg.style.opacity = "0";
        hoverImg.style.opacity = "1";
        hoverImg.style.transform = "scale(1.08)";
      } else {
        defaultImg.style.opacity = "1";
        hoverImg.style.opacity = "0";
        hoverImg.style.transform = "scale(1)";
      }
    }
  });
});
