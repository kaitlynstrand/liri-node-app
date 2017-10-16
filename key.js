console.log("this is loaded")

var Twitter = require('twitter');
 
var twitterKeys = {
  consumer_key: '3iEYqM41x0yjUrjVU3YAaoN2t',
  consumer_secret: 'qjyZmVxttRwVpVULZEGTirDFnFqWvFo88SEOGpWYLb0sGKwKtc',
  access_token_key: '919250568819957760-jATmVc6DhsY0y48XybmTuFn7NqeeEFi',
  access_token_secret: 'S6nkbB9vM1d0aElRlYDjTgLJretJ90T2CNRq2d9tCU2RM'
};
 
 module.exports = twitterKeys;

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

