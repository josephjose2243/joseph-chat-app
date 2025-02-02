import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { socket } from "../Services/Socket";


const ChatComponent = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state.chat.messages);

    useEffect(() => {
        socket.on("receiveMessage", (data) => {
            dispatch(addMessage(data));
        });

        return () => {
            socket.off("receiveMessage");
        };
    }, [dispatch]);

    const sendMessage = () => {
        if (message.trim()) {
            socket.emit("sendMessage", message);
            dispatch(addMessage(message));
            setMessage("");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Real-Time Chat </h2>
            <div className="chat-box border p-3 mb-3" style={{ height: "300px", overflowY: "scroll" }}>
                {chatMessages.map((msg, index) => (
                    <div key={index} className="alert alert-secondary">{msg}</div>
                ))}
            </div>
            <div className="d-flex">
                <input
                    type="text"
                    className="form-control me-2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                />
                <button className="btn btn-primary" onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatComponent;
