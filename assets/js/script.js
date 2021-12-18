// set variable for the start button
var startButton = document.querySelector("#start-btn");

// use new variable for button to create event listener for the click - everytime hit clicks it starts timer
startButton.addEventListener("click", function() {
    
    //timer within the function - https://www.youtube.com/watch?v=_a4XCarxwr8
    const countdownEl = document.querySelector("#time-sec");
    let timeSecond = 59;
    countdownEl.innerHTML =`00:${timeSecond}`;
    const countdown = setInterval (()=>{
        timeSecond--;
        countdownEl.innerHTML =`00:${timeSecond}`;
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(countdown);
        }
    },1000)
  });




