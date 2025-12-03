import React, { useState, useEffect } from "react";
import { motion, useScroll,  } from "framer-motion";
import { Link as RouterLink } from "react-router-dom"; // for page navigation
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const YELLOW = "#FFD600";
const BLACK = "#0B0B0B";
const SOFT = "#F7F7F8";

type Scene = {
  id: string;
  year: string;
  title: string;
  bullets: string[];
  Illustration: React.FC<{ className?: string }>;
};

/* Illustrations */
const HeroIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 600 420" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: SOFT, stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: "#FFFBEA", stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" rx="24" fill="url(#bgGrad)" />
    <g transform="translate(70,70)">
      <rect x="40" y="40" rx="16" width="420" height="250" fill="#fff" stroke="#E6E6E6" strokeWidth="3"/>
      <rect x="60" y="70" rx="10" width="380" height="160" fill="#F5F9FF" />
      <g transform="translate(120,130)">
        <motion.circle 
          cx="30" cy="-10" r="10" fill={YELLOW}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <rect x="0" y="0" width="120" height="10" rx="6" fill="#FFF" stroke="#E0E0E0" strokeWidth="2"/>
        <g transform="translate(0,22)">
          <motion.path 
            d="M6 6c10 8 38 8 58 0" 
            stroke="#222" 
            strokeWidth="3" 
            fill="none" 
            strokeLinecap="round"
            animate={{ d: ["M6 6c10 8 38 8 58 0", "M6 2c10 12 38 12 58 0", "M6 6c10 8 38 8 58 0"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </g>
      </g>
    </g>
    <g transform="translate(20,240)">
      <motion.circle 
        cx="480" cy="60" r="56" fill={YELLOW}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="460" cy="48" r="8" fill={BLACK}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="500" cy="48" r="8" fill={BLACK}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path 
        d="M470 76c8 12 30 12 38 0" 
        stroke={BLACK} 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  </svg>
);

const Scene2021Illustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" rx="20" fill="#fff" />
    <g transform="translate(18,18)">
      <motion.circle 
        cx="80" cy="80" r="44" fill={YELLOW}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx="68" cy="74" r="6" fill={BLACK} />
      <circle cx="92" cy="74" r="6" fill={BLACK} />
      <path d="M70 92c6 4 14 4 20 0" stroke={BLACK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <rect x="160" y="40" rx="10" width="180" height="120" fill="#F8FAFF" stroke="#E6E6E6" strokeWidth="2"/>
      <text x="170" y="80" fontSize="14" fill="#222" fontFamily="sans-serif" fontWeight="600">New student</text>
      <text x="170" y="104" fontSize="12" fill="#666" fontFamily="sans-serif">Didn't know how to</text>
      <text x="170" y="122" fontSize="12" fill="#666" fontFamily="sans-serif">use a computer</text>
    </g>
  </svg>
);

const Scene2022Illustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" rx="20" fill="#fff" />
    <g transform="translate(18,18)">
      <rect x="24" y="40" rx="10" width="160" height="120" fill="#FFF4F4" stroke="#FFD6D6" strokeWidth="2"/>
      <text x="36" y="80" fontSize="14" fill="#222" fontFamily="sans-serif" fontWeight="600">Relaxed</text>
      <text x="36" y="104" fontSize="12" fill="#666" fontFamily="sans-serif">Underperformed</text>
      <text x="36" y="122" fontSize="12" fill="#666" fontFamily="sans-serif">academically</text>
      <g transform="translate(210,40)">
        <circle cx="80" cy="80" r="44" fill="#FFC857" />
        <path d="M64 88c10 6 24 6 34 0" stroke={BLACK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

const Scene2023Illustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" rx="20" fill="#fff" />
    <g transform="translate(18,18)">
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      >
        <circle cx="60" cy="80" r="32" fill={YELLOW} />
        <circle cx="50" cy="74" r="5" fill={BLACK} />
        <circle cx="70" cy="74" r="5" fill={BLACK} />
        <path d="M48 90c8 6 16 6 24 0" stroke={BLACK} strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.g>
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      >
        <circle cx="140" cy="80" r="32" fill="#FFC857" />
        <circle cx="130" cy="74" r="5" fill={BLACK} />
        <circle cx="150" cy="74" r="5" fill={BLACK} />
        <path d="M128 90c8 6 16 6 24 0" stroke={BLACK} strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.g>
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
      >
        <circle cx="220" cy="80" r="32" fill="#FFD9A6" />
        <circle cx="210" cy="74" r="5" fill={BLACK} />
        <circle cx="230" cy="74" r="5" fill={BLACK} />
        <path d="M208 90c8 6 16 6 24 0" stroke={BLACK} strokeWidth="2" fill="none" strokeLinecap="round" />
      </motion.g>
      <text x="24" y="150" fontSize="14" fill="#222" fontFamily="sans-serif" fontWeight="600">New friends & motivation</text>
    </g>
  </svg>
);

const Scene2024Illustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 420 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" rx="20" fill="#fff" />
    <g transform="translate(18,18)">
      <rect x="40" y="40" rx="12" width="320" height="140" fill="#F0F9FF" stroke="#B3E5FC" strokeWidth="2"/>
      <text x="56" y="84" fontSize="16" fill="#222" fontFamily="sans-serif" fontWeight="700">WIL at Hiteknology Solutions</text>
      <text x="56" y="110" fontSize="13" fill="#666">Sep 2024 - Jun 2025</text>
      <text x="56" y="135" fontSize="12" fill="#888">Fell in love with building websites</text>
      <g transform="translate(280,120)">
        <motion.circle 
          cx="20" cy="-12" r="18" fill={YELLOW}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </g>
    </g>
  </svg>
);

const SceneTeacherIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 420 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" rx="20" fill="#fff" />
    <g transform="translate(18,18)">
      <rect x="40" y="40" rx="8" width="160" height="110" fill="#FFF7E6" stroke="#F2D88B" strokeWidth="2"/>
      <text x="48" y="74" fontSize="14" fill="#222" fontWeight="600">Assistant teacher</text>
      <text x="48" y="94" fontSize="11" fill="#666">The most challenging</text>
      <text x="48" y="110" fontSize="11" fill="#666">job yet</text>
      <g transform="translate(220,40)">
        <circle cx="60" cy="60" r="44" fill={YELLOW} />
        <circle cx="50" cy="54" r="6" fill={BLACK} />
        <circle cx="70" cy="54" r="6" fill={BLACK} />
        <path d="M48 72c8 8 20 8 28 0" stroke={BLACK} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

const SceneMLabIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 420 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" rx="20" fill="#fff" />
    <g transform="translate(18,18)">
      <rect x="30" y="40" rx="10" width="360" height="160" fill="#EAF8FF" stroke="#C8F0FF" strokeWidth="2"/>
      <text x="48" y="84" fontSize="16" fill="#222" fontWeight="700">mLab CodeTribe — Trainee</text>
      <text x="48" y="110" fontSize="13" fill="#666">Training that made me job-ready</text>
      <text x="48" y="135" fontSize="20" fill="#222">🎓</text>
      <text x="75" y="137" fontSize="11" fill="#888">Diploma in Computer Science</text>
      <g transform="translate(300,130)">
        <motion.circle 
          cx="20" cy="-12" r="18" fill={YELLOW}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </g>
    </g>
  </svg>
);

const SceneTodayIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 420 300" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="trophy" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor: YELLOW, stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: "#FFB800", stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" rx="20" fill="#fff" />
    <g transform="translate(18,18)">
      <text x="24" y="50" fontSize="20" fill="#222" fontFamily="sans-serif" fontWeight="800">🏆 1st place</text>
      <text x="24" y="76" fontSize="13" fill="#666">LVH Hackathon</text>
      <text x="24" y="110" fontSize="14" fill="#222" fontWeight="600">Skills:</text>
      <text x="24" y="132" fontSize="12" fill="#666">React · TypeScript · Node · SQL</text>
      <g transform="translate(260,90)">
        <motion.circle 
          cx="40" cy="20" r="34" fill="url(#trophy)"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="22" y="28" fontSize="11" fill={BLACK} fontWeight="800">NOW</text>
      </g>
    </g>
  </svg>
);

const scenes: Scene[] = [
  { id: "s2021", year: "2021", title: "The Beginning — Tshwane University of Technology", bullets: ["Accepted into TUT for a Diploma in Computer Science","Didn't know how to use a computer","Coding classes felt overwhelming"], Illustration: Scene2021Illustration },
  { id: "s2022", year: "2022", title: "A Difficult Lesson", bullets: ["Understood basics","Relaxed and underperformed","Learned discipline matters"], Illustration: Scene2022Illustration },
  { id: "s2023", year: "2023", title: "A Shift in Mindset", bullets: ["Befriended hardworking classmates","Took my course seriously and did great"], Illustration: Scene2023Illustration },
  { id: "s2024", year: "2024", title: "Final Year & WIL", bullets: ["Finished strong academically","WIL at Hiteknology Solutions (Sep 2024 - Jun 2025)","Fell in love with building websites"], Illustration: Scene2024Illustration },
  { id: "s2025", year: "June 2025", title: "Assistant Teacher — A Tough Detour", bullets: ["Highly challenging job","Confirmed my passion for tech"], Illustration: SceneTeacherIllustration },
  { id: "smlab", year: "2025", title: "mLab CodeTribe — Transformation", bullets: ["🎓 Graduated from TUT with Diploma in Computer Science (May 2025)","Software developer trainee","Extraordinary training","Became job-ready"], Illustration: SceneMLabIllustration },
  { id: "stoday", year: "2025", title: "Ready For The Real World", bullets: ["1st place — LVH Hackathon","Skills: HTML, React, TypeScript, Node.js, PostgreSQL, MySQL","Available for opportunities"], Illustration: SceneTodayIllustration },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-yellow-400 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default function CartoonStorytellingApp() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", ...scenes.map(s => s.id), "contact"];
      const scrollPos = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black antialiased">
      <ProgressBar />
      
      {/* NAV */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 w-11/12 max-w-5xl bg-white/90 backdrop-blur-md shadow-lg rounded-2xl p-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold bg-linear-to-r from-yellow-500 to-amber-600 bg-clip-text text-transparent transition-transform duration-200 group-hover:scale-110">
              TQM
            </h1>
          <div className="text-sm">
            <div className="font-bold">My Journey</div>
            <div className="text-xs text-gray-500">From Zero to Developer</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-2">
          {scenes.slice(0, 4).map((s) => (
            <a 
              key={s.id} 
              href={`#${s.id}`} 
              className={`text-xs px-3 py-1.5 rounded-lg transition-all ${activeSection === s.id ? 'bg-yellow-400 text-black font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {s.year}
            </a>
          ))}
        </div>
        <a href="/Maluka_Thembelihle_CV.pdf" target="blank" className="text-sm px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all shadow-sm hover:shadow-md">Download CV</a>
      </motion.nav>

      {/* HERO */}
      <header id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-linear-to-b from-yellow-50 to-white opacity-50"></div>
        <div className="max-w-5xl mx-auto px-6 text-center py-20 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.div variants={fadeUp}>
              <motion.h1 
                className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-linear-to-r from-black via-gray-800 to-black"
                animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                My Software Development Journey
              </motion.h1>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                From not even knowing how to use a computer in 2021 to becoming a confident software developer — a story of grit, learning, and growth.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <a href="#s2021" className="px-8 py-4 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-black font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Start the Story →
              </a>
              <a href="#contact" className="px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-yellow-400 text-gray-800 font-semibold transition-all">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.02, rotateZ: 1 }} 
                transition={{ type: "spring", stiffness: 200 }}
              >
                <HeroIllustration className="w-full max-w-2xl h-auto drop-shadow-2xl" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* TIMELINE */}
      <main className="max-w-6xl mx-auto px-6 space-y-32 py-32">
        {scenes.map((scene, idx) => (
          <motion.section 
            id={scene.id} 
            key={scene.id} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }} 
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
          >
            <motion.div 
              variants={fadeUp} 
              className="w-full md:w-1/2 flex justify-center"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, rotateZ: -5 }} 
                whileInView={{ scale: 1, opacity: 1, rotateZ: 0 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
              >
                <scene.Illustration className="w-full max-w-md h-auto shadow-2xl rounded-3xl" />
              </motion.div>
            </motion.div>

            <motion.div variants={fadeUp} className="w-full md:w-1/2">
              <motion.div 
                initial={{ x: idx % 2 === 0 ? -20 : 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-yellow-100 to-yellow-200 text-yellow-900 font-bold text-sm shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
                  {scene.year}
                </div>
                <h3 className="text-3xl md:text-4xl font-black mt-6 leading-tight">{scene.title}</h3>
                <ul className="mt-6 space-y-4">
                  {scene.bullets.map((b, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-4"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <div className="w-4 h-4 rounded-full bg-linear-to-br from-yellow-400 to-yellow-500 mt-1.5 shrink-0 shadow-md"></div>
                      <div className="text-gray-700 leading-relaxed text-lg">{b}</div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </motion.section>
        ))}
      </main>

      {/* CONTACT */}
      <motion.section 
        id="contact" 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-linear-to-br from-yellow-100 via-yellow-200 to-yellow-300 py-24 text-center px-6 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-black text-black"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p 
            className="mt-4 text-lg text-black/80 max-w-xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            I'm actively seeking opportunities to contribute and grow as a developer. HTML, CSS, React, TypeScript, Node.js, PostgreSQL, MySQL.
          </motion.p>
          <motion.a 
            href="mailto:malukathembelihle95@gmail.com" 
            className="mt-8 inline-block px-10 py-4 bg-black text-white rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -2 }}
          >
            Get In Touch →
          </motion.a>
        </div>
      </motion.section>

     <footer className="bg-gray-100 border-t border-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT TEXT */}
        <p className="text-gray-700 text-center md:text-left text-sm md:text-base">
          © {new Date().getFullYear()} Thembelihle Queeneth Maluka. All rights reserved.
        </p>

        {/* NAVIGATION LINKS */}
        <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-800 font-medium">
         

          {/* Journey link goes to /journey page */}
          <li>
            <RouterLink
              to="/"
              className="cursor-pointer text-gray-800 hover:text-yellow-500 hover:-translate-y-1 transition-all duration-200"
            >
              Go to Home Page
            </RouterLink>
          </li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 text-2xl text-gray-700">
          <RouterLink
            to="https://github.com/ThembelihleQueeneth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition-transform duration-200"
          >
            <FaGithub />
          </RouterLink>
          <RouterLink
            to="https://www.linkedin.com/in/thembelihle-maluka-287b542ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition-transform duration-200"
          >
            <FaLinkedin />
          </RouterLink>
          <RouterLink
            to="mailto:malukathembelihle95@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition-transform duration-200"
          >
            <MdEmail />
          </RouterLink>
          <RouterLink
            to="https://wa.me/0793316193"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition-transform duration-200"
          >
            <FaWhatsapp />
          </RouterLink>

         
        </div>
      </div>

   
    </footer>
    </div>
  );
}