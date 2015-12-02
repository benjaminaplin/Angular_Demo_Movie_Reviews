var express = require('express');
var request = require('request');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var app = express()

// app.use(morgan('combined'))
app.use(serveStatic(__dirname + '/public'))

var router = express.Router();

router.get('/reviews', function(req,res){
  var apiKey = 'c4edec026df80c72268790750153e92b%3A8%3A48762272';
  var url = 'http://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=' + apiKey;
  request.get(url, function(err, response, body){
      var data = JSON.parse(body);
      data = data.results;
      res.send(data)
  });
})

app.use('/api', router);

app.listen(process.env.PORT || 3000, function(){
  console.log("Hey..i'm listening on 3000")
});
 