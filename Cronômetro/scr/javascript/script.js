const timerE1 = document.getElementById('timer');
let intervalID = 0;
let timer = 0;

const formatTime = (time) => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

}

const setTimer = (time) => {
    timerE1.innerText = formatTime(time);
}

const toggleTimer = () => {
    const button = document.getElementById('power');
    const action = button.getAttribute('action');

    clearInterval(intervalID);

    if(action == 'start' || action == 'continue'){
        intervalID = setInterval(() => {
            timer += 1;
            setTimer(timer);
        }, 10);
        button.setAttribute('action', 'pause');
        button.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }else if(action == 'pause'){
        button.setAttribute('action', 'continue');
        button.innerHTML = '<i class = "fa-solid fa-play"></i>';
    }
}

const resetTimer = () => {
    clearInterval(intervalID);
    timer = 0;
    setTimer(timer);
    const button = document.getElementById('power');
    button.setAttribute('action', 'start');
    button.innerHTML = '<i class="fa-solid fa-play"></i>';
}

document.getElementById('power').addEventListener('click', toggleTimer);
document.getElementById('reset').addEventListener('click', resetTimer);