$(document).ready(function () {

    var pink = Math.floor(Math.random() * 12) + 1;
    var yellow = Math.floor(Math.random() * 12) + 1;
    var blue = Math.floor(Math.random() * 12) + 1;
    var purple = Math.floor(Math.random() * 12) + 1;
    var wins = 0;
    var math = 0;
    var losses = 0;
    var randomNumber = Math.floor((Math.random() * 120) + 19);

    $('#randomNumber').html(' ' + randomNumber);

    //    function configmath() {
    //        $('#wins').append(wins);
    //        $('#losses').append(losses);
    //        $('.math').append(math);
    //    }

    function reset() {
        pink = Math.floor(Math.random() * 12) + 1;
        yellow = Math.floor(Math.random() * 12) + 1;
        blue = Math.floor(Math.random() * 12) + 1;
        purple = Math.floor(Math.random() * 12) + 1;
        randomNumber = Math.floor((Math.random() * 120) + 19);
        $('#randomNumber').html(' ' + randomNumber);
        math = 0;
    }

    function config(score) {

        if (score === randomNumber) {
            wins++;
            $('#wins').html(' ' + wins);
            reset();
        }
        if (score > randomNumber) {
            losses++;
            $('#losses').html(' ' + losses);
            reset();
        }

        $('#score').html(math);
    }

    $('.crystal').on('click', function () {
        var id = $(this).attr('id');

        switch (id) {
            case 'yellow':
                math = math + yellow;
                break;
            case 'blue':
                math = math + blue;
                break;
            case 'purple':
                math = math + purple;
                break;
            case 'pink':
                math = math + pink;
                break;
        }
        config(math);
    });

    /*
        $('#pink').click(function () {
            math = math + yellow;
            config(math);
        });
        $('#yellow').click(function () {
            math = math + blue;
            config(math);
        });
        $('#blue').click(function () {
            math = math + purple;
            config(math);
        });
        $('#purple').click(function () {
            math = math + pink;
            config(math);
        });
    */

});

