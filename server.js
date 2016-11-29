'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/api', function(req, res){
  res.send({greeting: 'Hello, world!'});
});

app.listen('3000', function(){
  console.log('You are listening on port 3000');
});
