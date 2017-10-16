//these are my variables for the command line inputs (array)
var liriArray = process.argv;
var liriRequest = liriArray[2];
//var userInput = liriArray[3];
//userInput for multiple strings
var userInput = ""
for (i=3; i < liriArray.length; i++) {
	userInput += liriArray[i] + " "
}

//these are variables for requiring the node modules I installed 
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var omdb = require('request');
var fileSystem = require('node-fs');

// // //1 `node liri.js my-tweets`
// // //This will show your last 20 tweets and when they were created at in your terminal/bash window.
if (liriRequest === 'my-tweets') {
	var twitter = new Twitter ({
		consumer_key: '3iEYqM41x0yjUrjVU3YAaoN2t',
		consumer_secret: 'qjyZmVxttRwVpVULZEGTirDFnFqWvFo88SEOGpWYLb0sGKwKtc',
		access_token_key: '919250568819957760-jATmVc6DhsY0y48XybmTuFn7NqeeEFi',
		access_token_secret: 'S6nkbB9vM1d0aElRlYDjTgLJretJ90T2CNRq2d9tCU2RM'
	});
	var params = {screen_name: 'CodingKK'};
	twitter.get('statuses/user_timeline', params, function(error, response, body) {
				//console.log(tweets.created_at)
				console.log(tweets)
			});
};

//2 node spotify-this-song
if (liriRequest === 'spotify-this-song') {
	var spotify = new Spotify ({
		id: '0840c211a3684bc78087c3f960309a5f',
		secret: 'cf993dc4aca14712b27d7aa1d5fff258'
	});
	spotify.search({type: 'track', query: userInput, limit: 20}).then(function(response, error, body) {
		//console.log(response)
		var results = response.tracks.items
		//console.log(response)
		//console.log(JSON.parse(results))
		//console.log(results[0])
		for (i = 0; i < results.length; i++) {
			//console.log(JSON.parse(results[0]))
			var trackResult = results[i];
			var resultNum = i + 1
			//console.log(trackResult)
			console.log('Result Number: ' + resultNum);
			console.log('Artist: ' + trackResult.artists[0].name);
			console.log('Song Name: ' + trackResult.name);
			console.log('Spotify URL: ' + trackResult.external_urls.spotify);
			console.log('Album: ' + trackResult.album.name);
			console.log('----------------')
			//console.log(trackResult)
		}
	})
};


// // //    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// // // Loop through all the words in the node argument
// // // // And do a little for-loop magic to handle the inclusion of "+"s
if (liriRequest === 'movie-this') {

	var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=40e9cece";
	console.log(queryUrl)
	omdb(queryUrl, function(error, response, body) {
	    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating " + JSON.parse(body).imdbRating);
    //console.log("Rotten Tomatoes Rating " + JSON.parse(body).//rottontomatoes.value());
    console.log("Country " + JSON.parse(body).Country);
    console.log("Language " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(boy).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);

  });
}

//if (liriRequest === 'do-what-it-says')


// // // 4. `node liri.js do-what-it-says`
// // //    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// // //      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
// // //      * Feel free to change the text in that document to test out the feature for other commands.
// if (liriRequest === "do-what-it-says") {
// 		console.log(filesystem.data)
// }


// // ### BONUS
// // * In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.
// // * Make sure you append each command you run to the `log.txt` file. 
// // * Do not overwrite your file each time you run a command.

//   //fs.writeFile("bank.txt", userWithdrawal, function(dataFile) {
//   //});