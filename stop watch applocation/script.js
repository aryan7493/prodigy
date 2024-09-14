let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateDisplay, 1000);
        startStopBtn.textContent = 'Stop';
        isRunning = true;
    } else {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        startStopBtn.textContent = 'Start';
        isRunning = false;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    elapsedTime = 0;
    updateDisplay();
    startStopBtn.textContent = 'Start';
    isRunning = false;
});

function updateDisplay() {
    const time = Date.now() - startTime;
    const hours = Math.floor((time / 3600000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

updateDisplay();  // Initialize display to 00:00:00
