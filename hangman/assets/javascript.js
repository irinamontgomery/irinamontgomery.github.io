var words = [
 "javascript",
 "love",
 "adventure",
 "picture"
];
/*var el = document.getElementById("demo");
el.innerHTML = words;*/

var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";

}
var remainingLetters = word.length;

while (remainingLetters > 0) {
    var guess = prompt("Guess a letter, or click Cancel to stop my awesome game.");
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
/*var word = words[Math.floor(Math.random() * words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;*/