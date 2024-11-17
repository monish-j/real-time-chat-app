var socket = io();
var form = document.getElementById('form');
var input = document.getElementById('input');
var userName = prompt("Enter your name:");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (input.value) {
        socket.emit('chat message', { name: userName, message: input.value });
        input.value = '';
    }
});

socket.on('chat history', function(messages) {
    messages.forEach(function(data) {
        var item = document.createElement('li');
        item.textContent = data.name + ": " + data.message;
        document.getElementById('messages').appendChild(item);
    });
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('chat message', function(data) {
    var item = document.createElement('li');
    item.textContent = data.name + ": " + data.message;
    document.getElementById('messages').appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});


