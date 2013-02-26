var http = require('http');
var express = require('express');
var app = express();

var messages = [];

app.set('view engine', 'ejs');


app.get('/', function(req, res){
  res.render('chat', {previous_msgs:messages});
});

var server = http.createServer(app);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
  socket.emit('test', {tool:'color?'});

  socket.on('msg', function(data){
    messages.push({text:data.text, time:new Date().getTime(), user:data.user});
    io.sockets.emit('msg', {text:data.text, time:new Date().getTime(), user:data.user});
  });
});

server.listen(8080);
