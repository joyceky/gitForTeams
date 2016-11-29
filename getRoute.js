'use strict';


var express = require('express');
var app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 8000);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/api', function(req, res) {

  console.log('Git Wonder Women on port ', app.get('port'));

  });
});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(app.get('port'), function() {
  console.log('Listening on port', app.get('port'));
});

module.exports = app;
