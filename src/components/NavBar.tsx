import { useState, useEffect } from "react";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { Button } from './Button';
import { FaDownload } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { ChatModal } from "./ChatModal";

export const NavBar = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = ["about", "experience", "stack", "projects", "contact"];

  // Track scroll position for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 shadow-lg backdrop-blur-md py-3"
            : "bg-white/90 shadow-md backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <ScrollLink
            to="about"
            smooth={true}
            duration={600}
            className="cursor-pointer group"
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent transition-transform duration-200 group-hover:scale-110">
              TQM
            </h1>
          </ScrollLink>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            {sections.map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  activeClass="text-yellow-500 font-semibold"
                  className="relative cursor-pointer text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-medium group"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </ScrollLink>
              </li>
            ))}

            <li>
              <RouterLink
                to="/journey"
                className="relative cursor-pointer text-gray-700 hover:text-yellow-500 transition-colors duration-200 font-medium group"
                target="blank"
              >
                Journey
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </RouterLink>
            </li>
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              aria-label="Open chatbot"
              onClick={() => setIsChatOpen(true)}
              className="relative text-gray-700 hover:text-amber-500 text-2xl transition-all duration-200 hover:scale-110 group"
            >
              <TbMessageChatbotFilled />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </button>

            <a
              href="/Maluka_Thembelihle_CV.pdf"
              download="Maluka_Thembelihle_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button icon={<FaDownload />} text="Resume" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 z-50"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            <ul className="flex flex-col gap-6">
              {sections.map((section) => (
                <li key={section}>
                  <ScrollLink
                    to={section}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    spy={true}
                    activeClass="text-yellow-500 font-semibold"
                    className="cursor-pointer text-gray-700 hover:text-yellow-500 transition-colors duration-200 text-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                </li>
              ))}

              <li>
                <RouterLink
                  to="/journey"
                  className="cursor-pointer text-gray-700 hover:text-yellow-500 transition-colors duration-200 text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Journey
                </RouterLink>
              </li>
            </ul>

            <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={() => {
                  setIsChatOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 text-gray-700 hover:text-amber-500 transition-colors duration-200 text-lg font-medium"
              >
                <TbMessageChatbotFilled className="text-2xl" />
                Chat with me
              </button>

              <a
                href="/Maluka_Thembelihle_CV.pdf"
                download="Maluka_Thembelihle_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button icon={<FaDownload />} text="Download Resume" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      <ChatModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};