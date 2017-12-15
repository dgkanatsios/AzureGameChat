const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
  perMessageDeflate: false //required for Web App for Containers
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

let userId = 0;
io.on('connection', function (socket) {
  socket.userId = userId++;
  console.log('a user connected, user id: ' + socket.userId);

  socket.on('chat', function (msg) {
    console.log('message from user#' + socket.userId + ": " + msg);
    io.emit('chat', {
      id: socket.userId,
      msg: msg
    });
  });
});

http.listen(3000, function () {
  console.log('listening on *:3000');
});