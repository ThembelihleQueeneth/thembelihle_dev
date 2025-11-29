import { useState } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { Button } from './Button';
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";
import { ChatModal } from "./ChatModal"; // adjust the path

export const NavBar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 
                    bg-white/90 shadow-md backdrop-blur-sm fixed top-0 left-0 w-full z-50">
      <h1 className='text-yellow-500 font-bold ml-60'>TQM</h1>

      <ul className="flex gap-6">
        {["about", "experience", "stack", "projects", "contact", "gallery"].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={600}
              offset={-50}
              spy={true}
              activeClass="text-yellow-500 -translate-y-1"
              className="cursor-pointer text-black hover:text-yellow-500 transition-transform duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 mr-60">
        {/* Chat Icon Button */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="text-gray-700 hover:text-amber-500 text-2xl transition-transform duration-200"
        >
          <TbMessageChatbotFilled />
        </button>

        {/* Resume Download */}
        <a 
          href="/Maluka_Thembelihle_CV.pdf" 
          download="Maluka_Thembelihle_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={<FaDownload />} text="Resume" />
        </a>
      </div>

      {/* Chat Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </nav>
  );
};
