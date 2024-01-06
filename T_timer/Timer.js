let timerInterval;
let minutes = 5;
let seconds = 0;

const timer_TimeInput = document.getElementById("timer_Time");
const timerStatus = document.getElementById("textChange");

const timerStatusDisplay = document.querySelector("#timerStatus");
const timerDisplay = document.querySelector(".title");
const startButton = document.querySelector("#startBtn");
const resetButton = document.querySelector("#resetBtn");

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);

function play_timeOver_sound() {
  let audio = new Audio("sound/mixkit-software-interface-remove-2576.wav");
  audio.play();
}

document.body.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    startTimer();
  }
});

function startTimer() {
  //   Disable the start button during the timer
  startButton.disabled = true;
  if (startButton.disabled) {
    timerStatus.textContent = "Start button has been disabled ";
  } else {
    timerStatus.textContent = "Text will change";
  }

  const settedTime = timer_TimeInput.value;

  if (setTimer(settedTime)) {
    timerStatusDisplay.textContent = "Timer has Started";
    timerInterval = setInterval(updateTimer, 1000);
  }
  //   giveAlter(settedTime);
}

function setTimer(time) {
  const [min, sec] = time.split(":");
  if (!isNaN(sec)) {
    minutes = min;
    seconds = sec;
    return true;
  } else {
    timerStatusDisplay.textContent = "No Timer Has Set";
    startButton.disabled = false;
    timerStatus.textContent = "Start button has been enabled ";
    return false;
  }
}

function giveAlter(msg) {
  alert(msg);
}

function updateTimer() {
  if (seconds === 0 || seconds <= 0) {
    if (minutes === 0 || minutes <= 0) {
      // Timer is finished
      clearInterval(timerInterval);
      //   timerDisplay.textContent = "00:00";
      startButton.disabled = false;
      play_timeOver_sound();
      timerStatusDisplay.textContent = "--- -- ---";
      timerStatus.textContent = "Create by M Stranger Gaming";
      timerDisplay.textContent = "Time is over";
      return;
    }
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  // Update the timer display
  timerDisplay.textContent = `${padTime(minutes)}:${padTime(seconds)}`;
}

function resetTimer() {
  // Clear the interval and reset the timer values
  clearInterval(timerInterval);
  minutes = 0;
  seconds = 0;
  timerDisplay.textContent = "Timer";
  timerStatusDisplay.textContent = "Time has reset";
  startButton.disabled = false;
  timerStatus.textContent = "Start button has been enabled ";
}

function padTime(time) {
  // Pad the time values with leading zeros if necessary (e.g., 1 becomes 01)
  return time.toString().padStart(2, "0");
}
