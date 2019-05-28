$(function() {
      // Add a new burger.
//       $(".create-form").on("submit", function(event) {
//         event.preventDefault();

//         var newBurger = {
//             burger_name: $("#newburger").val().trim(),
//             devoured: 0
//         };

//         $.ajax("/api/burgers/" + id, {
// type:"POST",
// data: newBurger
//         }).then(
//             function(){
//                 console.log("You have added a new burger");
//                 location.reload();
//             });
//         });

        $(".burgerAvailable").on("click", function(event) {
           
            event.preventDefault();
           var id = $(this).attr("id");
           console.log("button clicked", id)
        //    var devouredStatus = {
        //        devoured= true
    // };

           $.ajax("/api/burgers/" + id, {
               type:"put"
           }).then(function() {
               console.log("burger devoured");
               location.reload();
           });
        });
    

    $(".delete-burger").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("id");
        console.log("burger deleted", id)
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });
    