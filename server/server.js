const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const shortid = require('shortid');
const io = require('socket.io')(http, {
  perMessageDeflate: false //required for Web App for Containers on Azure
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.userId = shortid.generate();
  console.log(`a user connected, user id: ${socket.userId}`);

  socket.on('chat', function (msg) {
    console.log(`message from user# ${socket.userId}: ${msg}`);
    io.emit('chat', {
      id: socket.userId,
      msg: msg
    });
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(port, function () {
  console.log(`listening on *:${port}`);
});