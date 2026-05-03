const splash = document.getElementById("splash-screen");
const siteShell = document.getElementById("site-shell");

window.addEventListener("load", () => {
  setTimeout(() => {
    splash.classList.add("hidden");
    siteShell.classList.remove("site-hidden");
    siteShell.classList.add("site-ready");
  }, 3000);
});

const menuBtn = document.getElementById("mobile-menu-btn");
const mobileDrawer = document.getElementById("mobile-drawer");
const mobileLinks = mobileDrawer ? mobileDrawer.querySelectorAll("a") : [];

if (menuBtn && mobileDrawer) {
  menuBtn.setAttribute("aria-expanded", "false");

  menuBtn.addEventListener("click", () => {
    const wasOpen = mobileDrawer.classList.contains("open");
    if (!wasOpen) {
      mobileDrawer.classList.add("open");
      menuBtn.setAttribute("aria-expanded", "true");
      document.documentElement.style.overflow = 'hidden';
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      document.documentElement.style.overflow = '';
    });
  });
}

const countdownEl = document.getElementById("hero-countdown");

if (countdownEl) {
  const targetDate = new Date(countdownEl.dataset.countdownTarget || "2026-09-01T00:00:00+05:30");
  const daysEl = countdownEl.querySelector("[data-countdown-days]");
  const hoursEl = countdownEl.querySelector("[data-countdown-hours]");
  const minutesEl = countdownEl.querySelector("[data-countdown-minutes]");
  const secondsEl = countdownEl.querySelector("[data-countdown-seconds]");

  const pad = (value) => String(value).padStart(2, "0");

  const updateCountdown = () => {
    const remaining = targetDate.getTime() - Date.now();

    if (remaining <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      countdownEl.setAttribute("aria-label", "IRSC 2026 is live");
      return;
    }

    const totalSeconds = Math.floor(remaining / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}
