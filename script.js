
const showTranslatedText = (translatedText) => {
//    console.log(translatedText)
    let translation = document.getElementById("textOutput")
    translation.innerText = translatedText.contents.translated
};

const translateText = (text) => {
    let encodedText = encodeURIComponent(text)
//    console.log(encodedText)
    fetch (`https://api.funtranslations.com/translate/yoda.json?text=${encodedText}`)
    .then(response => response.json())
        .then(data => showTranslatedText(data))
    .catch(error => console.log(error.error.message))
};

let button = document.getElementById("translateButton")
button.addEventListener("click", event => {
    let textInput = document.getElementById("textInput").value
    translateText(textInput)
});