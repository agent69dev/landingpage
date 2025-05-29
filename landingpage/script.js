const countdown = document.getElementById("countdown");

// Update event date to 5 days from today (May 29, 2025)
const eventDate = new Date("2025-06-03T00:00:00").getTime();

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
