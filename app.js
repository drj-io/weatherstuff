//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=cb5a9ed44f1d8c2013040f360b9e200d
var express = require('express');
var app = express();
var ejs = require('ejs');

app.use(express.static('public'));
app.use()

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
