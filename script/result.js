const timer = document.querySelector('.timer');
let time = 600;

setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    timer.innerHTML = `${minutes}:${seconds}`;
    time--;
}