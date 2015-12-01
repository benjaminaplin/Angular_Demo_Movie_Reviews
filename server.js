var express = require('express');
var request = require('request');
var ejs = require('ejs');
var app = express()

app.set('view-engine', 'ejs')
app.use( express.static( 'public') );

app.get("/", function(req,res){
  res.render('index.ejs')
})

app.listen(process.env.PORT || 3000, function(){
  console.log("Hey..i'm listening on 3000")
});
