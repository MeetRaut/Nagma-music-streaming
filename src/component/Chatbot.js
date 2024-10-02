// src/components/Chatbot.js
import React, { useState } from 'react';
import botImage from "../images/bot.jpg"

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages((prev) => [...prev, { type: 'user', text: input }]);
      // Simulate bot response
      setMessages((prev) => [
        ...prev,
        { type: 'bot', text: `Nagma Bot:\n${input}` },
      ]);
      setInput('');
    }
  };

  return (
    <div className="relative">
      {/* Chatbot Icon Button */}
      <button
        onClick={handleToggle}
        className="focus:outline-none border-2 border-purple-500 rounded-full"
      >
        <img
          src={botImage} // Replace with your chatbot icon URL
          alt="Chatbot"
          className="h-10 w-10 rounded-full"
        />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 bg-white rounded-lg shadow-lg w-80 h-96 p-4 flex flex-col">
          {/* Chat Header */}
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="text-lg font-semibold text-purple-600">Nagma bot</h2>
            <button onClick={handleToggle} className="text-gray-500 hover:text-gray-700">
              ✖️
            </button>
          </div>
          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto pr-2" style={{ maxHeight: 'calc(100% - 80px)' }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded-lg ${
                  msg.type === 'user' ? 'bg-purple-100 text-purple-800 self-end' : 'bg-gray-200 text-gray-800 self-start'
                } max-w-xs`}
                style={{
                  overflowWrap: 'break-word', // Ensures long words break and wrap to the next line
                  wordBreak: 'break-word', // Additional property to handle word breaking
                }}
              >
                {/* Sender's name and message */}
                <span className="font-semibold">{msg.type === 'bot' ? 'Nagma Bot:' : 'You:'}</span>
                <div>{msg.type === 'bot' ? msg.text.slice(10) : msg.text}</div> {/* Removes sender from text for user messages */}
              </div>
            ))}
          </div>
          {/* Input and Send Section */}
          <div className="flex mt-2">
            <input
              type="text"
              className="border border-gray-300 rounded-lg p-2 flex-grow focus:outline-none focus:border-purple-600 text-black"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button
              className="bg-purple-600 text-white rounded-lg px-4 ml-2 hover:bg-purple-700 transition"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
