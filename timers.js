var interval;
var timeElapsed = 0;
var timer = document.getElementById("timer");

function startTimer() {
    document.getElementById("start").addEventListener("click", function(){
        console.log("start");
        interval = setInterval(timerFunction, 600); //up to 10 mins
  })

}
startTimer();


function timerFunction() {
    timer.innerText = "Time Elapsed: " + timeElapsed++;

}


function pauseTimer() {
    document.getElementById("pause").addEventListener("click", function(){
        console.log("pause");
        timer.innerText = timer.innerText;
        clearInterval(interval);
  })

}
pauseTimer();


function resetTimer () {
  document.getElementById("reset").addEventListener("click", function(){
    console.log("reset");
    timer.innerText = "Stop Watch";
    clearInterval(interval);
    timeElapsed = 0

  })

}

resetTimer();
