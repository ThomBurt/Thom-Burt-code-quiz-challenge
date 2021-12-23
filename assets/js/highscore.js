var goBack = document.querySelector('#button-go-back')


var goBackButton = document.querySelector("#button-go-back")
goBackButton.addEventListener("click", goBackToIndex)

    function goBackToIndex()
{
console.log('hello')
window.location.assign("index.html");

}


// var highScoreHandler = function() {
//     var highScores = JSON.parse(window.localStorage.getItem(value, score)) || [];
//     console.log("highScores" + highScores)
//     document.querySelector("#highScoreTextField").textContent = highScores;
//   }



// function passValues() {
//      var score = document.querySelector('#highScoreTextField').localStorage.getItem(score);
//      score.textContent = score; 
//      score.appendChild(score);
//      console.log(score);
//      };

// function passingValue(){
//     var scores = document.querySelector('#highScoreTextField');
//     scores.className = "hide";
// }