var words = [
 "chocolate",
 "love",
 "candy",
 "flowers"
];


var countArray = 0;
var guesses = 0;
var theWord = words[Math.floor(Math.random() * words.length)];
var regEx = /[a-z]/g;
var wordLength = theWord.match(regEx).length;
var spaces = wordLength;

for (var i = 0; i < wordLength; i++) {
    $('.letterSpaces').append('<span class="spaces emptyLetter' + i + '" style="padding:0px 30px; line-height:24px; font-size:20px;">&mdash;</span>');
}

function takeAGuess(guess) {
    var regExGuess = new RegExp(guess, 'g');
    if (regExGuess.test(theWord)) {
        for (var i = 0; i < wordLength; i++) {
            if (theWord[i] === guess) {
                spaces--;
                console.log(spaces);
                $('.emptyLetter' + i).html(guess.toUpperCase());
                if (spaces === 0) {
                    $('.main').prepend('<div class="win transition" style="z-index:9; position:absolute; top:200px; left:50%; transform: translateX(-50%); font-size:200px; line-height:200px; color:green;">YOU WIN!<br /><button class="restart" style="font-size:50px; height:100px; line-height:70px; color:#fff; background-color:green; border: 2px solid #fff; border-radius:8px; z-index:9; position:relative;">RESTART?</button></div>');
                    $('.win').addClass('fadeIn');
                    $('.restart').on('click', function () {
                        location.reload();
                    });
                }
            }
        }

    } else {
        guesses++;
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
                $('.letter').addClass('disabled');
                $('.main').prepend('<div class="ded transition" style="z-index:9; position:absolute; top:200px; left:50%; transform: translateX(-50%); font-size:200px; line-height:200px; color:#c00;">YOU DED!<br /><button class="restart" style="font-size:50px; height:100px; line-height:70px; color:#fff; background-color:green; border: 2px solid #fff; border-radius:8px; z-index:9; position:relative;">RESTART?</button></div>');
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

$('.letter').on('click', function () {
    ($(this).hasClass('disabled')) ?
    null:
        (
            $(this).addClass('disabled'), takeAGuess(event.target.value)
        );
});
