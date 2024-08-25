import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Smile } from "lucide-react";

const ChatPage = ({ darkMode }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "System",
      text: "Welcome to the chat! Please be respectful and kind to all members.",
    },
    { id: 2, sender: "Alex", text: "Hi everyone! I'm new here." },
    { id: 3, sender: "Sam", text: "Welcome, Alex! Glad to have you join us." },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, sender: "You", text: newMessage },
      ]);
      setNewMessage("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`p-6 rounded-xl shadow-lg ${
        darkMode ? "bg-gray-800" : "bg-white"
      } flex flex-col`}
      style={{ height: "calc(100vh - 200px)", maxHeight: "600px" }}
    >
      <div className="flex items-center mb-4">
        <MessageCircle
          className={`w-6 h-6 mr-3 ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        />
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Chat
        </h2>
      </div>
      <div
        ref={chatContainerRef}
        className="flex-grow overflow-y-auto mb-4 space-y-4 pr-2"
      >
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-3 rounded-lg ${
              message.sender === "You"
                ? "bg-indigo-500 text-white ml-auto"
                : darkMode
                ? "bg-gray-700 text-white"
                : "bg-gray-200 text-gray-800"
            } max-w-[70%]`}
          >
            <p className="font-semibold">{message.sender}</p>
            <p>{message.text}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className={`flex-grow p-2 rounded-l-md ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"
          } focus:outline-none`}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-indigo-500 text-white rounded-r-md hover:bg-indigo-600 transition-colors duration-200"
        >
          <Send className="w-6 h-6" />
        </button>
        <button className="ml-2 p-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 transition-colors duration-200">
          <Smile className="w-6 h-6" />
        </button>
      </div>
    </motion.div>
  );
};

export default ChatPage;
