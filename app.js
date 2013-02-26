var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');


var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(8080);
