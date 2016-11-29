'use strict';

var express = require('express');
var app = express();
const path = require("path");

app.use((req, res) => {
  const filePath = path.join(__dirname, "public", "members.html");
  res.sendFile(filePath);
});

app.get('/api', function(req, res){
  res.send({greeting: 'Hello, world!'});
  console.
});

app.listen('3000', function(){
  console.log('You are listening on port 3000');
});
