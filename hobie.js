
var availApis = ['spotify']
var errorMessage = "Liri only supports Spotify song search right now please pass: spotify [keywords to search]"

// api we want to search and search term
var apiOption = process.argv[2]
if (availApis.includes(apiOption)) {
 var searchString = ""
 for (i=3; i < process.argv.length; i++) {
   searchString += process.argv[i] + " "
 }
 runSpotify(searchString)
 //we can call the correct api here
}
else {
 return console.log(errorMessage);  
}

function runSpotify(searchString) {
 //spotify stuff below
 var Spotify = require('node-spotify-api');

 var spotify = new Spotify({
   id: '6d58b64cb4db425fb40ea18642b3d65c',
   secret: '298fff5290f34b1b8dba0760e6e2cb07'
 });

 spotify.search({ type: 'track', query: 'All the Small Things' }).then(function(response) {
   var results = response.tracks.items
   for (i=0; i<results.length; i++) {
     var currentResult = results[i];
     var resultNum = i + 1
     //console.log(currentResult)
     console.log("Result " + resultNum);
     console.log(currentResult.artists[0].name);
     console.log(currentResult.name);
     console.log(currentResult.external_urls.spotify);
   }
 }).catch(function(err) {
   console.log(err);
 });
}