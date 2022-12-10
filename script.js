// Shows the translation result text on the translation Output area.
const showTranslatedText = (translatedText) => {
    let translation = document.getElementById("textOutput")
    translation.innerText = translatedText.contents.translated
};
// Uses encoded text to concat user's input to the API URL after encoding it.
const translateText = (text) => {
    let encodedText = encodeURIComponent(text)
    fetch (`https://api.funtranslations.com/translate/yoda.json?text=${encodedText}`)
    .then(response => response.json())
        .then(data => showTranslatedText(data))
    .catch(error => console.log(error))
};
// Add's "click" event listener to the "translate" button.
let button = document.getElementById("translateButton")
button.addEventListener("click", event => {
    let textInput = document.getElementById("textInput").value
    translateText(textInput)
});