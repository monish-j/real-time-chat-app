# real-time-chat-app

Welcome to the Real-Time Chat App! This project provides instant messaging capabilities with real-time updates. Using Socket.io, this app offers a seamless and interactive chat experience for users. This project serves as a demonstration of real-time communication using WebSockets.

## Features

- **Real-Time Messaging**: Send and receive messages instantly.
- **User-Friendly Interface**: Simple and clean design for easy navigation.
- **Persistent Chat History**: View past messages when reconnecting.

## Technologies Used

- **Backend**: [Express.js](https://expressjs.com/)
- **Frontend**: HTML, CSS, JavaScript
- **WebSockets**: [Socket.io](https://socket.io/)
- **Testing**: Jest for integration testing

## Code Structure

- **Server**: Built using Express.js, the server handles WebSocket connections and HTTP requests.
- **Routes**: Manages API endpoints for serving static files.
- **Models**: Handles data storage and retrieval for chat messages.
- **Controllers**: Manages WebSocket events and interactions.
- **Public Folder**: Contains frontend files (HTML, CSS, JavaScript).
- **Tests**: Includes integration tests for the chat functionality.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/real-time-chat-app.git

2. Navigate to the project directory:
   ```sh
   cd real-time-chat-app
   
3. Install dependencies:
  ```sh
  npm install

 ## Usage
1. Start the server:
 ```sh
  npm start

2. Open your browser and navigate to http://localhost:3000 to use the chat app.

## Development Process

 The app was developed with a focus on real-time communication and user experience. User feedback was gathered through informal testing, leading to several iterations and 
 improvements. The project follows the MVC pattern for better code organization and maintainability.
  
