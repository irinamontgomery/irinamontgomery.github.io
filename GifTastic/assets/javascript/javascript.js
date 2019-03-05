$(document).ready(function () {
    var topics = ['Minnie Mouse', 'Frozen', 'Trolls', 'Toy Story', 'Grinch Stole Christmas', 'Barney', 'Paw Patrol', 'Moana', 'The Lego Movie', 'Peter Rabbit', 'Tangled', 'Despicable Me', 'Incredibles', 'Alvin and the Chipmunks', 'Cars', 'Minions', 'The Peanut Movie', 'Talking tom', 'Barbie Dreamtopia', 'My Little Pony'];

    //renders topic buttons
    function renderButtons() {
        $('#buttons').empty();

        for (var i = 0; i < topics.length; i++) {
            var newButton = $("<button class='btn'>");
            newButton.attr('data-person', topics[i]);
            newButton.text(topics[i]);

            $('#buttons').append(newButton)
        }
    }

    renderButtons();
    // addes new topic items 
    $('#add-movie').on("click", function (event) {

        event.preventDefault();
        var movies = $('#topics-input').val().trim();
        topics.push(movies);
        renderButtons();
    });

    $(document).on('click', ".btn", function () {
        $('#GifArea').empty();
        var movies = $(this).attr('data-person');
        console.log($(this));
        var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + movies + '&api_key=dc6zaTOxFJmzC&limit=10';
        console.log(queryURL)
        $.ajax({
                url: queryURL,
                method: "GET"
            })
            .done(function (response) {
                console.log(response.data[0].rating);

                var results = response.data;
                console.log(results);



                //$('.rating').html("Rated " + results[0].rating);
                //$('.image').html('<img class= "img-thumbnail" src"' + theStillImage + ' " date-state="still"' + '>');
                //$('.image').html('<img class="img-thumbnail" src="' + videoImage + ' "data-state="still"' + '>');
                for (var k = 0; k < results.length; k++) {
                    var theStillImage = results[k].images.original_still.url
                    var videoImage = results[k].images.original.url
                    var rating = results[k].rating;
                    console.log(rating);
                    var newDiv = $('<div>');
                    var newImage = $('<img>');
                    newImage.attr('src', videoImage);
                    newImage.attr('data-still', theStillImage);
                    newImage.attr('data-animate', videoImage);
                    newImage.attr('data-isStill', false);
                    newImage.addClass("img-thumbnail");

                    var h2 = $("<h2>");
                    h2.text("Rated: " + rating);
                    newDiv.append(newImage);
                    newDiv.append(h2);
                    $('#GifArea').append(newDiv);
                }
            });
    });
    $(document).on('click', ".img-thumbnail", function () {

        var isStill = $(this).attr("data-isStill");
        console.log(isStill, typeof isStill);
        if (isStill == "true") {
            $(this).attr('src', $(this).attr('data-animate'))
            $(this).attr("data-isStill", false);
        } else {
            $(this).attr('src', $(this).attr('data-still'))
            $(this).attr("data-isStill", true);
        }
        //var src = ($(this).attr('src') === theStillImage) ? theStillImage : videoImage;
        //$(this).attr('src', src);
        console.log($(".img-thumbnail"));
    }); // end of image click
});
