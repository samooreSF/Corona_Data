var express = require('express');
var app = express();
var server = require('http').Server(app);


app.use(express.static(__dirname + '/corona'));




app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server.listen(process.env.PORT || 4001);
module.exports = app;
