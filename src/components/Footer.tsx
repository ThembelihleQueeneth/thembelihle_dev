import { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { ChatModal } from "../components/ChatModal";
import { FaWhatsapp } from "react-icons/fa";


export const Footer = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT TEXT */}
        <p className="text-gray-700 text-center md:text-left text-sm md:text-base">
          © {new Date().getFullYear()} Thembelihle Queeneth Maluka. All rights reserved.
        </p>

        {/* NAVIGATION LINKS */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-800 font-medium">
          {[{ name: "About", to: "about" },
            { name: "Experience", to: "experience" },
            { name: "Stack", to: "stack" },
            { name: "Projects", to: "projects" },
            { name: "Contact", to: "contact" },
            { name: "Gallery", to: "gallery" }].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-50}
                spy={true}
                activeClass="text-yellow-500"
                className="cursor-pointer text-gray-800 hover:text-yellow-500 hover:-translate-y-1 transition-all duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-2xl text-gray-700">
          <a
            href="https://github.com/ThembelihleQueeneth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/thembelihle-maluka-287b542ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:malukathembelihle95@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition-transform duration-200"
          >
            <MdEmail />
          </a>
          <a
            href="0793316193"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition-transform duration-200"
          >
            <FaWhatsapp />
          </a>

          {/* Chat Modal Button */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="hover:text-yellow-500 hover:scale-110 transition-transform duration-200"
          >
            <TbMessageChatbotFilled />
          </button>
        </div>
      </div>

      {/* Chat Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </footer>
  );
};
