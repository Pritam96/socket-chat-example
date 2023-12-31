const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Handle Sockets
io.on('connection', (socket) => {
  //   console.log('A new user has connected', socket.id);
  socket.on('user-message', (message) => {
    // console.log('A New User Message', message);
    io.emit('message', message);
  });
});

app.use(express.static('./public'));

server.listen(3000, console.log('Server is running on port 3000'));
