// Shows the translation result text inside the translation Output area.
const showTranslatedText = (translatedText) => {
    let translation = document.getElementById("textOutput")
    try {
        translation.innerText = translatedText.contents.translated
    }
// Returns the error message to the user inside the translation Output area.
    catch {
        translation.innerText = translatedText.error.message
    };
};
// Uses encoded text to concat user's input to the API URL after encoding it.
const translateText = (text) => {
    let encodedText = encodeURIComponent(text)
    fetch (`https://api.funtranslations.com/translate/yoda.json?text=${encodedText}`)
    .then(response => response.json())
        .then(data => showTranslatedText(data))
};
// Add's "click" event listener to the "translate" button.
let button = document.getElementById("translateButton")
button.addEventListener("click", event => {
    let textInput = document.getElementById("textInput").value
    translateText(textInput)
});