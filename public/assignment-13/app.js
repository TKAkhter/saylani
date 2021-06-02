var btndis = document.getElementById('disabled');
var interval;

function start() {
    // interval = setInterval(timer, 10);
    var start = document.querySelector('#min');
    var startBtn = document.querySelector('#disabled')
    startBtn.disabled = true;
    start.classList.add("time");
    var submit = document.querySelector('#countdown').value;
    start.innerHTML = submit;
    var min = document.querySelector('#min');
    var fiveMinutes = (submit * 60) - 1,
        display = document.querySelector('.time');
    var interval = startTimer(fiveMinutes, display);
    return interval;
}

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    var interval = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        document.querySelector('#sec').style.display = 'none';
        document.querySelector('.separator').style.display = 'none';

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
    return interval;
}

function pause() {
    clearInterval(interval);
    btndis.disabled = false
}