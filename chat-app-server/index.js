const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");
require("dotenv").config();

const app = express();
app.use(cors());

// Create the server
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }, // Allow all origins (You can restrict this later)
});

// Set up WebSocket connection
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    
    // Listen for messages from the client
    socket.on("sendMessage", (data) => {
        io.emit("receivedMessage", data);  // Emit message to all clients
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// Start the server on the specified port
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
