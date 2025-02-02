// services/socket.js (Frontend WebSocket Client)
import { io } from "socket.io-client";  // Import the Socket.IO client
import { BASE_URL } from "./ServerURl";  // Correct import from serverURL.js

export const socket = io(BASE_URL, {
    transports: ["websocket"],  // Use WebSocket transport
});
