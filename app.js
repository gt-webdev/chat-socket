var http = require('http');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.render('chat', {});
});

var server = http.createServer(app);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  socket.emit('test', {tool:'color?'});

  socket.on('msg', function(data){
    io.sockets.emit('msg', {text:data.text, time:new Date().getTime()});
  });
});

server.listen(8080);
