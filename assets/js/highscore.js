var goBack = document.querySelector('#button-go-back')


var goBackButton = document.querySelector("#button-go-back")
goBackButton.addEventListener("click", goBackToIndex)

    function goBackToIndex()
{
console.log('hello')
window.location.assign("index.html");

}