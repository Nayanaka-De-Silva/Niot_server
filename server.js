// Import our needed packages
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();

// Define the port that's going to be used
const port = process.env.PORT || 4000;

// Initialize a simple http server
const server = http.createServer(app);

// Initialize the WebSocket server
const wss = new WebSocket.Server({ server });

// Check for incoming connections
wss.on('connection', (ws)=>{
    // When a connection has been made, this function will run
    ws.on('message', (message)=>{
        // This function will run when the server receives a message
        console.log(`Received message ${message}`);
        ws.send(`Server received: ${message}`);
    });
    ws.send('Welcome to NIoT server');
    console.log('New client connected.'); 
});

server.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
})