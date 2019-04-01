

var axios = require("axios");
var moment = require("moment");
var fs = require("fs");
require("dotenv").config();
var keys = require("./keys");

console.log("liri running");

var command = process.argv[2];
var input = process.argv.slice(3).join(" ");
console.log(command, input);

function runLiri() {
  switch (command) {
    case "concert-this":
      concert();
      break;
    case "spotify-this-song":
      spotify();
      break;
    case "movie-this":
      movie();
      break;
    case "do-what-it-says":
      doThis();
      break;
    default:
      console.log("invalid command");
  }
}

function concert() {
  console.log("concert");
  var artistName =
    input === "null"
      ? "sorry Nobody is playing in your area! Try to search again"
      : input;
  var url =
    "https://rest.bandsintown.com/artists/" +
    artistName +
    "/events?app_id=codingbootcamp";
  axios.get(url).then(function(artist) {
    console.log(artistName + " is playing at ");
    console.log("Name of the venue: " + artist.data[0].venue.name);
    console.log(
      "Date of event: " + moment(artist.data[0].datetime).format("MM/DD/YYYY")
    );
  });

  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
  });
}

function spotify() {
  
  var Spotify = require("node-spotify-api");
  var spotify = new Spotify(keys.spotify);
 
  console.log("spotify");
 
    spotify.search(
    {
      type: "track",
      query: input || "the sign Ace of base",
      limit: 5
    },
    function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }
      //console.log(data.tracks.items[0]);
   
     console.log("Artist(s) Name: ", data.tracks.items[0].album.artists[0].name);
      console.log("Track Name: ", data.tracks.items[0].name);
     console.log("Preview URL: ", data.tracks.items[0].external_urls.spotify);
      console.log("Album: ", data.tracks.items[0].album.name);
      
    }
  );
}

function movie() {
  console.log("movie");
  var movieName = input ? input : "Mr. Nobody";
  var url =
    "http://www.omdbapi.com/?t=" +
    movieName +
    "&y=&plot=full&tomatoes=true&apikey=trilogy";
  axios.get(url).then(function(movie) {
    console.log("Title: ", movie.data.Title);
    console.log("Year: ", movie.data.Year);
    console.log("IMDB Rating: ", movie.data.imdbRating);
    console.log("Rotten Tomatoes Rating: ", movie.data.tomatoRating);
    console.log("Country: ", movie.data.Country);
    console.log("Language: ", movie.data.Language);
    console.log("Plot: ", movie.data.Plot);
    console.log("Actors: ", movie.data.Actors);
  });
}

function doThis() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }
    var someArray = data.split(",");
    command = someArray[0];
    input = someArray[1];
    runLiri();
  });
  console.log("");
}

runLiri();
