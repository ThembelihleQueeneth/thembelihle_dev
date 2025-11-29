import { TbMessageChatbotFilled } from "react-icons/tb";
import { Button } from './Button';
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 
                    bg-white/90 shadow-md backdrop-blur-sm fixed top-0 left-0 w-full z-50">
      <h1 className='text-yellow-500 font-bold ml-60'>TQM</h1>

      <ul className="flex gap-6">
        <li>
          <Link 
            to="about"
            smooth={true}
            duration={600}
            offset={-50}
            spy={true}
            activeClass="text-yellow-500 -translate-y-1"
            className="cursor-pointer text-black hover:text-yellow-500 transition-transform duration-200"
          >
            About
          </Link>
        </li>

        <li>
          <Link 
            to="experience"
            smooth={true}
            duration={600}
            offset={-50}
            spy={true}
            activeClass="text-yellow-500 -translate-y-1"
            className="cursor-pointer text-black hover:text-yellow-500 transition-transform duration-200"
          >
            Experience
          </Link>
        </li>

        <li>
          <Link 
            to="stack"
            smooth={true}
            duration={600}
            offset={-50}
            spy={true}
            activeClass="text-yellow-500 -translate-y-1"
            className="cursor-pointer text-black hover:text-yellow-500 transition-transform duration-200"
          >
            Stack
          </Link>
        </li>

        <li>
          <Link 
            to="projects"
            smooth={true}
            duration={600}
            offset={-50}
            spy={true}
            activeClass="text-yellow-500 -translate-y-1"
            className="cursor-pointer text-black hover:text-yellow-500 transition-transform duration-200"
          >
            Projects
          </Link>
        </li>

        <li>
          <Link 
            to="contact"
            smooth={true}
            duration={600}
            offset={-50}
            spy={true}
            activeClass="text-yellow-500 -translate-y-1"
            className="cursor-pointer text-black hover:text-yellow-500 transition-transform duration-200"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            to="gallery"
            smooth={true}
            duration={600}
            offset={-50}
            spy={true}
            activeClass="text-yellow-500 -translate-y-1"
            className="cursor-pointer text-black hover:text-yellow-500 transition-transform duration-200"
          >
            Gallery
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4 mr-60">
        <TbMessageChatbotFilled className="text-gray-700 hover:text-amber-500 text-2xl" />
        <a 
          href="/Maluka_Thembelihle_CV.pdf" 
          download="Maluka_Thembelihle_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={<FaDownload />} text="Resume" />
        </a>
      </div>
    </nav>
  );
};
