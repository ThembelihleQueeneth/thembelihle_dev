import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbMessageChatbotFilled } from "react-icons/tb";
import thembelihle from '../assets/1-13acafe1.png';
import { ChatModal } from "../components/ChatModal"; // adjust path

export const About = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div 
      id="about"
      className="flex items-center justify-between bg-gray-50 ml-60 mr-60 py-20"
    >
      {/* LEFT SIDE CONTENT */}
      <div className="max-w-xl m-10">
        <h1 className="text-3xl font-semibold text-gray-700">Hi There,</h1>

        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          I'm <span className="text-yellow-500 px-2 rounded ">Thembelihle</span>
        </h2>

        <p className="text-3xl text-yellow-500 mt-1">Queeneth Maluka</p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-3">
          A <span className="text-yellow-500">FullStack</span> Developer
        </h3>

        <p className="text-gray-600 mt-4 leading-relaxed">
          I have over a year of experience in full-stack development. 
          I build websites that work smoothly on any device and are easy for everyone to use. 
          I focus on solving hard problems with clean, practical code that gets the job done right.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 text-2xl mt-6 text-gray-700">
          <a href="https://github.com/ThembelihleQueeneth" className="hover:text-yellow-500 transition" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/thembelihle-maluka-287b542ba/" className="hover:text-yellow-500 transition" target="_blank"><FaLinkedin /></a>
          <a href="mailto:malukathembelihle95@gmail.com" className="hover:text-yellow-500 transition" target="_blank"><MdEmail /></a>

          {/* Chat button */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="hover:text-yellow-500 transition text-2xl"
          >
            <TbMessageChatbotFilled />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div>
        <img 
          src={thembelihle} 
          alt="Thembelihle Maluka" 
          className="w-80 h-80 m-10 object-cover rounded-3xl shadow-lg"
        />
      </div>

      {/* Chat Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
};
