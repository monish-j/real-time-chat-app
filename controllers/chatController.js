const { addMessage, getMessages } = require('../models/chatModel');

const handleSocketConnection = (io) => {
    io.on('connection', (socket) => {
        console.log('a user connected');

        // Send existing messages to the new client
        socket.emit('chat history', getMessages());

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('chat message', (msg) => {
             addMessage(msg);
            io.emit('chat message', msg);
        });
    });
};

module.exports = handleSocketConnection;
