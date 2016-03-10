//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=cb5a9ed44f1d8c2013040f360b9e200d
var express = require('express');
var app = express();
var ejs = require('ejs');
var request = require('request');
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', function (req, res){
  request('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=cb5a9ed44f1d8c2013040f360b9e200d', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var weatherObject = JSON.parse(body); // Show the HTML for the Google homepage.

      var data = {};
      data.weather = weatherObject.list[0].weather;
      data.pageTitle = "this is the weather for moscow";
      console.log(data)
      res.render('weather', { data: data });

    }
  })


});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
