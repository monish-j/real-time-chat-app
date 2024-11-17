const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const chatRoutes = require('./routes/chatRoutes');
const handleSocketConnection = require('./controllers/chatController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));
app.use('/', chatRoutes);

handleSocketConnection(io);

if (require.main === module) {
    server.listen(3000, () => {
        console.log('listening on *:3000');
    });
}

module.exports = { app, server };
