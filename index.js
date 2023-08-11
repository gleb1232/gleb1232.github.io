const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
function getTimeRemaining(seconds) {
  const hours = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor(seconds / 60) - (hours * 60);
  const second = seconds % 60;
  return {
    hours,
    minutes,
    second
  }
}
const createTimerAnimator = (value) => {
  return (seconds) => {
    let timeinterval = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(timeinterval);
      }
      const time = getTimeRemaining(seconds)
      seconds = seconds - 1;
      timerEl.textContent = time.hours + ':' + time.minutes + ':' + time.second;
    }, 1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});