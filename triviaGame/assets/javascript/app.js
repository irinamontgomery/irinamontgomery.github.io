let score = 0;
var unanswered = 0;
var number = 60;
let mcTimester;

$('#start').on('click', function () {
    $('#start').fadeOut(1000).queue(function () {
        $('#game').fadeIn(1000);

    });

    mcTimester = window.setInterval(function () {
        timerFunction()
    }, 1000);
});

function doneFunction() {
    clearInterval(mcTimester);
    $('#game').fadeOut(1000).queue(function () {


        // if ($('.q1 input:checked').val() === 'true') {
        for (var i = 1; i < $('.question').length +
            1; i++) {
            if ($('.question.' + i + ' input:checked').val() === 'true') {
                score++;
            } else if ($('.question.' + i + ' input:checked').length === 0) {
                unanswered++;
            }
        }


        $('#correct span').html(score);
        $('#incorrect span').html(5 - score);
        $('#unanswered span').html(unanswered);

        $('#results').fadeIn(1000);
    })


}

function timerFunction() {
    if (number > 0) {
        $('#timer').html(number + ' seconds left...');
        number--;
    } else {
        $('#timer').html('all donesies!');
        $("input[type=radio]").attr('disabled', true);
        doneFunction();
    }
}

$('#done').on('click', function () {
    number = 0;
});
