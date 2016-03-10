//http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=cb5a9ed44f1d8c2013040f360b9e200d
var express = require('express');
var app = express();
var ejs = require('ejs');
var request = require('request');
var sendmail = require('sendmail')();
var port = process.env.PORT || 8080;


app.set('view engine', 'ejs');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));


app.post('/process_the_form', function(req,res){



    sendmail({
        from: req.body.email,
        to: 'david@???.com',
        subject: 'New contact form submission from '+ req.body.name,
        content: req.body.comment,
      }, function(err, reply) {

        if(err){
          res.send('there was an error');
          console.log('hey there was error!!!!!!!', err)

        }
        else {
          res.send('YOUR FORM WAS SUBMITTED, THANKS')

        }
        //console.log(err && err.stack);
        //console.dir(reply);
    });


  console.log(req.body);



})

app.get('/get_the_weather_from_the_api_please', function(req,res){
  request('http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=cb5a9ed44f1d8c2013040f360b9e200d', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  });
})


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

app.listen(port, function () {
  console.log('App listening on port '+port+'!');
});
