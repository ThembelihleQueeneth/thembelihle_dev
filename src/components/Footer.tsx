import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left Text */}
        <p className="text-gray-700 text-center md:text-left">
          © {new Date().getFullYear()} Thembelihle Queeneth Maluka. All rights reserved.
        </p>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-800 font-medium">
          {[
            { name: "About", to: "about" },
            { name: "Experience", to: "experience" },
            { name: "Stack", to: "stack" },
            { name: "Projects", to: "projects" },
            { name: "Contact", to: "contact" }
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-50}
                spy={true}
                activeClass="text-yellow-500 -translate-y-1"
                className="cursor-pointer text-gray-800 hover:text-yellow-500 transition-transform duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

      </div>
    </footer>
  );
};
