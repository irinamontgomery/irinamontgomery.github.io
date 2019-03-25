// Make a variable for all my words  
var words = [
 "chocolate",
 "love",
 "candy",
 "flowers"
];

// get the length of the array and equal it to 0 
var countArray = 0;
// new var for my guesses that are equal to 0
var guesses = 0;
// This is where the computer chooses new word
var theWord = words[Math.floor(Math.random() * words.length)];
//new variable to get regular expression that will get the letters a-z globally
var regEx = /[a-z]/g;
// this will get the
// this gets the word length
var wordLength = theWord.match(regEx).length;
// this is the number of space in my word
var spaces = wordLength;
// this is a for loop to put in em dash for each letter in my selected word
for (var i = 0; i < wordLength; i++) {
    $('.letterSpaces').append('<span class="spaces emptyLetter' + i + '" style="padding:0px 30px; line-height:24px; font-size:20px;">&mdash;</span>');
}
// pass some parameter to make a guess 
function takeAGuess(guess) {
    var regExGuess = new RegExp(guess, 'g');
    if (regExGuess.test(theWord)) {
        for (var i = 0; i < wordLength; i++) {
            // the word that was randomly chosen has the letter they selected
            if (theWord[i] === guess) {
                // will subtract the number of spaces I still have left 
                spaces--;
                // will add letter to the space in uppercase
                $('.emptyLetter' + i).html(guess.toUpperCase());
                // if there are no more spaces left, this will say you won and ask you to play again. Which will then reload the page
                if (spaces === 0) {
                    $('.main').prepend('<div class="win transition" style="z-index:9; position:absolute; top:200px; left:50%; transform: translateX(-50%); font-size:200px; line-height:200px; color:green;">YOU WIN!<br /><button class="restart" style="font-size:50px; height:100px; line-height:70px; color:#fff; background-color:green; border: 2px solid #fff; border-radius:8px; z-index:9; position:relative;">RESTART?</button></div>');
                    $('.win').addClass('fadeIn');
                    $(fadeIn).fadein(3000);
                    $('.restart').on('click', function () {
                        location.reload();
                    });
                }
            }
        }
        // if guesses are not in the word 
    } else {
        guesses++;
        // this will change the picture
        switch (guesses) {
            case 1:
                $('.guy').attr('src', 'assets/img/1.png');
                break;
            case 2:
                $('.guy').attr('src', 'assets/img/2.png');
                break;
            case 3:
                $('.guy').attr('src', 'assets/img/3.png');
                break;
            case 4:
                $('.guy').attr('src', 'assets/img/4.png');
                break;
            case 5:
                $('.guy').attr('src', 'assets/img/5.png');
                break;
            case 6:
                $('.guy').attr('src', 'assets/img/6.png');
                break;
            case 7:
                $('.guy').attr('src', 'assets/img/7.png');
                // if you have guessed 7 guesses it will disable the letters
                $('.letter').addClass('disabled');
                //in my main section it will say you died, has a button for you to restart and if you click it then it will reload the page. 
                $('.main').prepend('<div class="ded transition" style="z-index:9; position:absolute; top:200px; left:50%; transform: translateX(-50%); font-size:200px; line-height:200px; color:#c00;">YOU DIED!<br /><button class="restart" style="font-size:50px; height:100px; line-height:70px; color:#fff; background-color:green; border: 2px solid #fff; border-radius:8px; z-index:9; position:relative;">RESTART?</button></div>');
                $('.ded').addClass('fadeIn');
                $('.restart').on('click', function () {
                    location.reload();
                });
                break;

            default:
                break;
        }
    }
}
// if selected letter was wrong, you can not click it again
$('.letter').on('click', function () {
    // this will make the selected letter disable and not be able to do anything 
    ($(this).hasClass('disabled')) ?
    null:
        (
            //
            $(this).addClass('disabled'), takeAGuess(event.target.value)
        );
});
