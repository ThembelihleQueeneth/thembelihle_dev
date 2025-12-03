import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { HiDownload } from "react-icons/hi";


export const About = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-yellow-50 to-gray-100 px-6 md:px-20 lg:px-60 py-20"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6 animate-fadeIn">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 animate-slideDown">
              Hi There 👋
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 animate-slideDown delay-100">
              I'm{" "}
              <span className="text-yellow-500 bg-yellow-100 px-3 py-1 rounded-lg inline-block transform hover:scale-105 transition-transform duration-300">
                Thembelihle
              </span>
            </h2>

            <p className="text-2xl md:text-3xl text-yellow-600 font-medium animate-slideDown delay-200">
              Queeneth Maluka
            </p>
          </div>

          <div className="animate-slideDown delay-300">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              A <span className="text-yellow-500 relative">
                FullStack
                <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform origin-left animate-expandWidth"></span>
              </span> Developer
            </h3>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed animate-slideDown delay-400">
            I have over a year of experience in full-stack development, 
            building responsive, accessible websites that deliver seamless user experiences. 
            I'm all  about solving complex problems with clean, maintainable code 
            and bringing innovative ideas to life.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 py-6 animate-slideDown delay-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">1+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500">20+</div>
              <div className="text-sm text-gray-600">Projects Done</div>
            </div>
            
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-4 animate-slideDown delay-600">
            <a
              href="#contact"
              className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a href="/Maluka_Thembelihle_CV.pdf" target="blank">
            <button
              className="px-6 py-3 border-2 border-yellow-500 text-yellow-600 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <HiDownload /> Download CV
            </button>
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 text-2xl pt-4 animate-slideDown delay-700">
            <a 
              href="https://github.com/ThembelihleQueeneth" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-md" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/thembelihle-maluka-287b542ba/" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-md" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:malukathembelihle95@gmail.com" 
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-yellow-500 hover:text-white transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-md" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail />
            </a>
            <button
              onClick={() => setIsChatOpen(true)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white hover:bg-yellow-600 transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-md animate-pulse"
            >
              <TbMessageChatbotFilled />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex justify-center md:justify-end animate-fadeIn delay-300">
          <div className="relative group">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full opacity-20 -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-500 rounded-full opacity-20 translate-y-8 -translate-x-8 group-hover:scale-110 transition-transform duration-500"></div>
            
            {/* Main image */}
            <div className="relative">
              {!imageLoaded && (
                <div className="w-80 h-80 bg-gray-200 rounded-3xl animate-pulse"></div>
              )}
              <img 
                src="/thembelihle.JPG"
                alt="Thembelihle Maluka" 
                className={`w-80 h-80 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-all duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-2xl shadow-xl transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full absolute"></div>
                  <span className="text-sm font-semibold text-gray-700 ml-2">Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Modal - You'll need to implement this component */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden animate-scaleIn">
            <div className="bg-yellow-500 p-4 flex items-center justify-between">
              <h3 className="text-white font-semibold text-lg">Chat with me</h3>
              <button
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-yellow-600 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-600">Chat functionality coming soon!</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expandWidth {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }
        
        .animate-expandWidth {
          animation: expandWidth 0.8s ease-out 0.5s forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </div>
  );
};