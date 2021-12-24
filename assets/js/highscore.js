var goBack = document.querySelector('#button-go-back')
let clearHighScoreBtn = document.getElementById('clear-high-score-btn')



var goBackButton = document.querySelector("#button-go-back")
goBackButton.addEventListener("click", goBackToIndex)

function goBackToIndex() {
    console.log('hello')
    window.location.assign("index.html");

}


function getHighScores() {

    var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

    highScores.sort(function (a, b) {
        return b.score - a.score;
    });

    for (var i = 0; i < highScores.length; i++) {
        let ptext = document.createElement("P");
        ptext.innerText = highScores[i].initials + " - " + highScores[i].score;

        let highScoreEl = document.querySelector(".high-score-p");
        highScoreEl.appendChild(ptext);

    }

}

function clearHighScores() {
    window.localStorage.removeItem("highScores");
    window.location.reload();
}
getHighScores();

clearHighScoreBtn.addEventListener("click", clearHighScores)