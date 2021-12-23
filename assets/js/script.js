var questionsEl = document.querySelector("#questions");
var paragraph1 = document.querySelector("#paragraph-pg1");
var optionsEl = document.querySelector("#options");
var highScoreBoxEl = document.querySelector('#high-score-box');
var submitButtonEl = document.querySelector('#submit-btn');


// var correctPopup = document.querySelector('#correct')
// var wrongPopup = document.querySelector('#wrong')
let countdown;

//sound fx
var soundFxCorrect = new Audio("audio/correct.mp3");
var soundFxWrong = new Audio("audio/wrong.mp3");

// set variable for the start button
var startButton = document.querySelector("#start-btn");
var timeSecond = questions.length *15;
// use new variable for button to create event listener for the click - everytime hit clicks it starts timer
startButton.addEventListener("click", function() {
    
    //timer within the function - https://www.youtube.com/watch?v=_a4XCarxwr8
    var countdownEl = document.querySelector("#time-sec");
    countdownEl.innerHTML =`00:${timeSecond}`;

    countdown = setInterval (()=>{
        timeSecond--;
        countdownEl.innerHTML =`00:${timeSecond}`;
        if(timeSecond <= 0 || timeSecond < 1){
            clearInterval(countdown);
            endQuiz();
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
      if (currentQuestionIndex === questions.length){
          endQuiz();
      } else {
        startGame();
      }


      }
  

function endQuiz() {
  clearInterval(countdown);
  questionsEl.classList.remove('hide');
    questionsEl.textContent = "All done!";
    optionsEl.textContent = "Your final score is " + [timeSecond] + ".";
    optionsEl.setAttribute("class", "final-score-text")
    highScoreBoxEl.classList.remove('hide');
    highScoreBoxEl.setAttribute("class", "high-score-div")
    
}






    startButton.addEventListener("click", startGame);
    
    
    submitButtonEl.addEventListener("click", function(){
      var value = document.getElementById('input').value;
      var score = timeSecond;
      localStorage.setItem(value, score);
      window.location.href = "highscores.html";
        passingValue();

     
           });


    // function passingValue(){
    //   var scores = document.querySelector('#highScoreTextField');
    //   scores.className = "hide";
      // localStorage.getItem(value, score);
      // scores.textContent = scores; 
      // console.log(scores);
    //}
        










    //TODO - how to get it into the text field of high scores   --    pull it from local storage?
        // var highScoreTextField = document.querySelector("#highScoreTextField");
        // highScoreTextField.textContent = (value + score);
       

      
    
    // function setHighScoreTextBox(){
    //   var value = []
    // }


  //   var highScoreHandler = function() {
  //    var highScores = JSON.parse(window.localStorage.getItem(value, score)) || [];
  //    console.log("highScores" + highScores)
  //    document.querySelector("#highScoreTextField").textContent = highScores;
  //  }



//scores and local storage

  //   var highScoreHandler = function() {
  //     var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
  //     console.log("highScores" + highScores)
  //     event.preventDefault();
  //     var initialsInput = document.querySelector("input[name='initials']");

  //     if (!initialsInput) {
  //       alert("You need to enter your initials");
  //           return false;
  //     };
    

  //   var highScoreObj = {
  //     name: initialsInput,
  //     score: finalScore
  //   };

  //   highScores.push(highScoreObj);       
  //   console.log(highScores);

  //   localStorage.setItem("highScores", JSON.stringify(highScores));

  //   window.location.href= "highscores.html"
  // };


  // var loadHighScore = function() {
  //   var savedHighScore = localStorage.getItem("highScores");
  //   if (!savedHighScores) {
  //     return false;
  //   }
  //   savedHighScores = JSON.parse(savedHighScores);

  //   for (var i = 0; i < savedHighScores.length ; i++) {
  //     createHighScore(savedHighScores[i]);
  //   }
  // }