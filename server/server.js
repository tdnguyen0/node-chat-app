const path = require('path');
const express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// listen to connection
io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server starts on port ${port}`);
});

module.exports = {app};
