$(document).ready(function () {

    var config = {
        // Initialize Firebase

        apiKey: "AIzaSyCPBGBHGc2ysYxiSCUySC8t93kT1C7zgio",
        authDomain: "train-scheduler-42746.firebaseapp.com",
        databaseURL: "https://train-scheduler-42746.firebaseio.com",
        projectId: "train-scheduler-42746",
        storageBucket: "train-scheduler-42746.appspot.com",
        messagingSenderId: "500133461641"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    $('#add-train-btn').on('click', function (event) {
        event.preventDefault();
        var trainName = $("#train-name-input").val().trim();
        var trainDestination = $('#destination-input').val().trim();
        var firstTrain = $('#first-train-input').val().trim();
        var trainFreuency = $('#frequency-input').val().trim();

        var newTrain = {
            name: trainName,
            destination: trainDestination,
            start: firstTrain,
            frequency: trainFreuency
        };
        database.ref().push(newTrain);
        alert("New Train has been Added");

        $('#train-name-input').val('');
        $('#destination-input').val('');
        $('#first-train-input').val('');
        $('#frequency-input').val('');
    });
    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot.val());

        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var firstTrain = childSnapshot.val().start;
        var trainFrequency = childSnapshot.val().frequency;
        var trainFrequency;
        var myfirstTime = 0;

        var firstTimeConverted = moment(myfirstTime, "HH:mm").subtract(1, "years");
        console.log(firstTimeConverted);

        var currentTime = moment();
        console.log('The current time is: ' + moment(currentTime).format("HH:mm"));

        var differenceTime = moment().diff(moment(firstTimeConverted), "minutes");
        console.log("Time diffenrence is: " + moment(differenceTime).format("HH:mm"));

        var timeRemainder = differenceTime % trainFrequency;
        console.log(moment(timeRemainder).format("HH:mm"));

        var minutesTillTrain = trainFrequency - timeRemainder;
        console.log('Minutes until the train gets here ' + moment(minutesTillTrain).format("HH:mm"));

        var nextTrain = moment().add(minutesTillTrain, "minutes");
        console.log('The next train will arrive in ' + moment(nextTrain).format("HH:mm"));

        $('.table').append('<tr><td>' + trainName + '</td><td>' +
            trainDestination + '</td> <td>' + +trainFrequency + '</td><td>' + moment(nextTrain).format('HH:mm') + '</td><td>' + minutesTillTrain + '</td></tr>');
    });

});
