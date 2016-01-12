// MODULES
var express = require('express');
var path = require('path');

var app = express();

// CONFIGURATION
var port = process.env.PORT || 8000;

// MIDDLEWARE
app.use(express.static(__dirname + '/client'));

// Routes
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// START THE APP
app.listen(port, function() {
  console.log("Simple blog post server listening on port " + port + "!");
});