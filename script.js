(function () {
  const targetDate = new Date(2026, 5, 10, 0, 0, 0);

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    const timerContainer = document.getElementById("timerContainer");
    const expiredDiv = document.getElementById("expiredMsg");

    if (diff <= 0) {
      if (timerContainer) timerContainer.style.display = "none";
      if (expiredDiv) {
        expiredDiv.style.display = "block";
        expiredDiv.innerHTML =
          "✨ Событие уже наступило! Мы вместе! ✨<br>Свадьба состоялась 10 июня 2026! 🎉";
      }
      return;
    }

    if (timerContainer) timerContainer.style.display = "flex";
    if (expiredDiv) expiredDiv.style.display = "none";

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);

    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    const weeksElem = document.getElementById("weeks");
    const daysElem = document.getElementById("days");
    const hoursElem = document.getElementById("hours");
    const minutesElem = document.getElementById("minutes");
    const secondsElem = document.getElementById("seconds");

    if (weeksElem) weeksElem.textContent = weeks < 10 ? "0" + weeks : weeks;
    if (daysElem) daysElem.textContent = days < 10 ? "0" + days : days;
    if (hoursElem) hoursElem.textContent = hours < 10 ? "0" + hours : hours;
    if (minutesElem)
      minutesElem.textContent = minutes < 10 ? "0" + minutes : minutes;
    if (secondsElem)
      secondsElem.textContent = seconds < 10 ? "0" + seconds : seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
