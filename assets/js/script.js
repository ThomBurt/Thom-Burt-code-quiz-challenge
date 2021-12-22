var questionsEl = document.querySelector("#questions");
var paragraph1 = document.querySelector("#paragraph-pg1");
var optionsEl = document.querySelector("#options");

// var score = timeSecond;


// var correctPopup = document.querySelector('#correct')
// var wrongPopup = document.querySelector('#wrong')


//sound fx
var soundFxCorrect = new Audio("audio/correct.mp3");
var soundFxWrong = new Audio("audio/wrong.mp3");

// set variable for the start button
var startButton = document.querySelector("#start-btn");
let timeSecond = questions.length *15;
// use new variable for button to create event listener for the click - everytime hit clicks it starts timer
startButton.addEventListener("click", function() {
    
    //timer within the function - https://www.youtube.com/watch?v=_a4XCarxwr8
    const countdownEl = document.querySelector("#time-sec");
    countdownEl.innerHTML =`00:${timeSecond}`;
    const countdown = setInterval (()=>{
        timeSecond--;
        countdownEl.innerHTML =`00:${timeSecond}`;
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(countdown);
        }
    },1000)
  });


  //START GAME BUTTON PRESS
  let currentQuestionIndex = 0;

  function startGame() {
    
    var currentQuestion = questions[currentQuestionIndex];

    startButton.className = "hide";
    paragraph1.className = "hide";
    optionsEl.classList.remove('hide');
    questionsEl.className = "hide";
    optionsEl.textContent = "";      // makes H1 go away

 
// question
      var h1 = document.createElement("H1");
      h1.style.textAlign = "center";
      h1.textContent = questions[currentQuestionIndex].question;
      optionsEl.appendChild(h1);

//answer    
    currentQuestion.options.forEach((answer, index) => {
      var buttonOption = document.createElement("button");
      buttonOption.setAttribute("class", "option-buttons")
      buttonOption.textContent  = `${index + 1}. ${answer}`;
      buttonOption.addEventListener('click', function () {
        answerClick(answer);
      });
    
      optionsEl.append(buttonOption)
    });
}
    function answerClick(answer) {
      console.log('answer function')
      if (answer === questions[currentQuestionIndex].answer) {
        //console.log("right answer")
        soundFxCorrect.play();
       // correctPopup.classList.remove('hide');
        //wrongPopup.className = "hide";
      } else {
        timeSecond = timeSecond-15;  // minus 15 if wrong
        //console.log("wrong answer")
        soundFxWrong.play()
       // wrongPopup.classList.remove('hide');
        //correctPopup.className = "hide";
      }
      currentQuestionIndex++;
      startGame();
    }
  

function scorePage() {
    // when there are no more questions left, head to the score page and stop the timer
   var finalQuestion = questions[currentQuestionIndex];
   
    if(questions > questions.length) {
        countdown = setInterval(); 

    }
}


    startButton.addEventListener("click", startGame);