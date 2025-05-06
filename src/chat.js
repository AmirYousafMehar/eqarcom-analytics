import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // Replace with your backend URL

const Chat = ({ roomId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {

    socket.emit('connection',{roomId})
    // Join the room
    socket.emit('joinRoom', { roomId });
   
    // Listen for mes sages
    socket.on('chatMessage', (msg) => {
      console.log(msg)
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
   
    // Listen for notifications
    socket.on('notification', (notification) => {
      console.log('Notification received:', notification.message);
    });

    return () => {
      socket.off('chatMessage');
      socket.off('notification');
    };
  }, [roomId]);

  const sendMessage = () => {

    let payload = {
      user:'testTenn200',
      message:message
    }
    if (message.trim()) {
      socket.emit('chatMessage', { roomId, payload });
      setMessage('');
    }
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid black', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.message} <small>({new Date(msg.timestamp).toLocaleTimeString()})</small>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
