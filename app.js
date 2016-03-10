//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=cb5a9ed44f1d8c2013040f360b9e200d
var express = require('express');
var app = express();
var ejs = require('ejs');
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', function (req, res) {
  res.render('weather');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});


var request = require('request');
request('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=cb5a9ed44f1d8c2013040f360b9e200d', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var weatherObject = JSON.parse(body); // Show the HTML for the Google homepage.
    console.log(weatherObject.list[0].weather);
  }
})
