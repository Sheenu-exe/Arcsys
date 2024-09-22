'use client';
import React, { useState } from 'react';
import { TbPencilBolt } from "react-icons/tb";
import { SlMagicWand } from "react-icons/sl";
import { IoMdHome } from "react-icons/io";
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io'; 

import Chat from './chat';

const ChatInterface = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
    
      <header className="flex justify-between items-center h-[10vh] p-4 mx-4 md:mx-10">
        <div className="flex items-center">
          <div className="text-[#e9967a] boldFont text-lg md:text-xl">Logo</div>
         
          <button className="text-xl text-[#e9967a] ml-4 md:hidden" onClick={toggleDrawer}>
            <FaBars />
          </button>
         
          <div
            className={`fixed top-0 left-0 w-64 h-full bg-[#121212] p-6 transition-transform transform z-[1000] ${
              isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
            } md:hidden`}
          >
            <button className="text-2xl text-[#e9967a] mb-6" onClick={toggleDrawer}>
              <IoMdClose />
            </button>
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-[#e9967a] flex items-center gap-1">
                <IoMdHome className="text-2xl" /> Explore
              </a>
              <a href="#" className="text-white flex items-center gap-1">
                <TbPencilBolt className="text-2xl" /> Create
              </a>
              <a href="#" className="text-white flex items-center gap-1">
                <SlMagicWand className="text-2xl" /> Edit
              </a>
            </nav>
          </div>
         
          <nav className="hidden md:flex gap-5 ml-6">
            <a href="#" className="text-[#e9967a] flex items-center gap-1">
              <IoMdHome className="text-2xl" /> Explore
            </a>
            <a href="#" className="text-white flex items-center gap-1">
              <TbPencilBolt className="text-2xl" /> Create
            </a>
            <a href="#" className="text-white flex items-center gap-1">
              <SlMagicWand className="text-2xl" /> Edit
            </a>
          </nav>
        </div>
        <button className="bg-[#e9967a] text-black px-4 py-1 rounded-full text-sm md:text-base">
          Login
        </button>
      </header>

    
      <div className="flex-1 w-full flex justify-center items-center p-4">
        <Chat />
      </div>

  
      <footer className="flex flex-col md:flex-row justify-between items-center p-4 h-[15vh] text-[#e9967a]">
        <span className="boldFont text-lg md:text-2xl mx-4 md:mx-8">Logo</span>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm md:text-base">
          <span className="mr-0 md:mr-4">Contact@000000000.tech</span>
          <div className="flex gap-2">
            <a href="www.telegram.com" title="Telegram">
              <PiTelegramLogoLight className="inline-block" size={24}  />
            </a>
            <a href="www.instagram.com" title="Instagram">
              <FaInstagram className="inline-block" size={24}  />
            </a>
            <a href="www.x.com" title="X (Twitter)">
              <FaXTwitter className="inline-block" size={24}  />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChatInterface;
