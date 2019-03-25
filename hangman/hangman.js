var words = [
 "javascript",
 "love",
 "adventure",
 "picture"
];

var myWordsDiv = $(".secret-word")
/*var el = document.getElementById("demo");
el.innerHTML = words;*/

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";

}
var remainingLetters = word.length;

while (remainingLetters > 0) {
    var guess = document.getElementById("guess").onkeyup = function () {
        myFunction()
    };

    function myFunction() {
        var x = document.getElementById("guess");
        x.value = x.value.toUpperCase();
    }
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Hey you only a single Letter now. Read the directions")
    } else {
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
alert("goodjob!! The answer was " + word + ".");

var myWordsDiv = $("<div>");
myWordsDiv.text(words[i]);
/*var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;*/
