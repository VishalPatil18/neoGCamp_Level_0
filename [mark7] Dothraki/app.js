var buttonTrns = document.querySelector("#btn-translate");
var inputBox = document.querySelector("#txt-input");
var outputBox = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/dothraki.json";

function createURL(input) {
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something is wrong! Server not responding, try again later.");
}

function clickHandler() {
    var inputText = inputBox.value;

    fetch(createURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translation = json.contents.translated;
        outputBox.innerText = translation;
    })
    .catch(errorHandler)
}

buttonTrns.addEventListener("click", clickHandler)