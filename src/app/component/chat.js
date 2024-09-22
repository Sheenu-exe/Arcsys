'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaCamera, FaArrowLeft } from 'react-icons/fa';
import { GoTrash } from 'react-icons/go';
import { FaCircleArrowLeft } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { motion } from 'framer-motion';
import { TiThMenu } from "react-icons/ti";


const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState("Samay");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const users = ['Maheep', 'Samay', 'Arpit'];

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, { text: message, sent: true }]);
      setMessage('');

      setTimeout(() => {
        const randomBot = users[Math.floor(Math.random() * users.length)];
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: `This is a bot response.`, sent: false },
        ]);
      }, 1000);
    }
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setMessages([]); 
    setIsSidebarOpen(false); 
  };

  return (
    <div className="relative flex h-[90vh] w-full max-w-[1200px] mx-auto overflow-hidden rounded-lg">
      
      <aside
        className={`fixed md:relative z-20  top-0 left-0 h-[100vh] md:h-auto md:static w-64 bg-[#121212] p-4 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <h3 className="mb-2 text-gray-400">ALL YOUR CHATS</h3>

        <div className="bg-[#e9967a] text-black p-2 rounded-md mb-2">
          <IoChatbubbles className="inline mr-2" size={18} />
          Chat Images: ON
        </div>

        <p className="text-gray-500 text-sm mb-4">
          When a bot sends you images, you will be charged one secondary image
        </p>

        <ul className="space-y-2">
          {users.map((user) => (
            <li
              key={user}
              className={`p-2 rounded-md flex items-center cursor-pointer ${
                selectedUser === user ? 'bg-[#e9967a] text-black' : 'bg-[#1e1e1e] text-gray-500'
              }`}
              onClick={() => handleUserClick(user)}
            >
              <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
              <div>
                <div>{user}</div>
                <div className="text-sm">No messages yet...</div>
              </div>
            </li>
          ))}
        </ul>

        <button className="w-full text-[#e9967a] p-2 rounded-md mt-4 text-left">
          <span className="mr-2">+</span> Create new bot
        </button>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <main className="flex-1 bg-[#121212] flex flex-col h-[90vh] md:h-auto">
        <div className="bg-[#1e1e1e] p-4 flex justify-between items-center">
          <div className="flex items-center">
            <button
              className="text-white mr-4 md:hidden"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <TiThMenu size={20} />
            </button>
            <div className="w-8 h-8 bg-gray-500 rounded-full mr-2"></div>
            <span>{selectedUser || 'Select a user'}</span>
          </div>
          <div className="flex justify-center items-center">
            <button className="mr-2 flex gap-1 items-center">
              <FaCircleArrowLeft size={20} /> Back
            </button>
            <button className="flex gap-1 items-center">
              <GoTrash size={18} /> Delete
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`chat ${msg.sent ? 'chat-end' : 'chat-start'} mb-4`}
            >
              <div
                className={`chat-bubble ${
                  msg.sent ? 'bg-[#e9967a] text-black' : 'bg-[#1e1e1e] text-white'
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
          <div ref={chatEndRef}></div>
        </div>

        <div className="p-4">
          <div className="relative flex gap-5">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              className="w-[95%] bg-[#1e1e1e] rounded-full px-4 py-2 pr-10"
              placeholder="Message"
            />
            <button
              onClick={handleSendMessage}
              className="bg-[#e9967a] text-[#1e1e1e] rounded-full p-2 px-3"
            >
              <FiSend size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chat;
