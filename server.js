var express = require('express');
var request = require('request');
var morgan = require('morgan');
var serveStatic = require('serve-static');
var app = express()

// app.use(morgan('combined'))
app.use(serveStatic(__dirname + '/public'))

var router = express.Router();

router.get("/", function(req,res){
  res.send('index.html')
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Hey..i'm listening on 3000")
});
