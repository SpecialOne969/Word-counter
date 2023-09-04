//Declare variables to be used
var textArea = document.querySelector(".input");
var wordCount = document.querySelector(".wordCount");
var charCount = document.querySelector(".charCount");
var uniqueCount = document.querySelector(".uniqueCount");

//add event listener
textArea.addEventListener("input", counts);

//Declare a function
function counts(){
    var textValue = textArea.value.trim();
    var words = textValue === "" ? 0 : textValue.split(/\s+/).length;
    var characters = textValue.length;
    var uniqueWords = new Set(textValue.match(/\b\w+\b/g)).size;// set in js

    wordCount.innerHTML = "Word : " + words;
    charCount.innerHTML = " Character count : " + characters;
    uniqueCount.innerHTML = "Unique count : " + uniqueWords;
}