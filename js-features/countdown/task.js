function moveTime() {
  const timer = document.getElementById('timer');
  timer.textContent -= 1;
  if (timer.textContent == 0) {
    alert('Вы победили в конкурсе');
    clearInterval(moveInterval);
  }
}

const moveInterval = setInterval(moveTime, 1000);