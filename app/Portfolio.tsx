"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  SquareArrowOutUpRight,
  Linkedin,
  Instagram,
  ArrowDownToLine,
  Sun,
  Moon,
  Twitter,
} from "lucide-react";
import HyperText from "../components/ui/hyper-text";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";
import TypingAnimation from "../components/ui/typing-animation";
import { FadeText } from "../components/ui/fade-text";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const skills = [
    { name: "HTML", image: "/html.png" },
    { name: "CSS", image: "/css.png" },
    { name: "JavaScript", image: "/javascript.png" },
    { name: "Node.js", image: "/nodejs.png" },
    { name: "React.js", image: "/reactjs.png" },
    { name: "Express.js", image: "/expressjs.png" },
    { name: "SQL", image: "/sql.png" },
    { name: "NoSQL", image: "/nosql.png" },
    { name: "Java", image: "/java.png" },
    { name: "Python", image: "/python.jpeg" },
    { name: "Firebase", image: "/firebase.png" },
    { name: "Appwrite", image: "/appwrite.jpeg" },
    { name: "Google Cloud", image: "/googlecloud.png" },
    { name: "Vercel", image: "/vercel.png" },
    { name: "Git", image: "/git.png" },
    { name: "GitHub", image: "/github.png" },
    { name: "Docker", image: "/docker.png" },
    { name: "MySQL", image: "/mysql.png" },
    { name: "PostgreSQL", image: "/postgres.png" },
    { name: "MongoDB", image: "/mongodb.png" },
    { name: "Firestore", image: "/firestore.jpeg" },
  ];

  const profilePic = "/profilephoto.jpg";
  const backgroundPic = "/background.gif";

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900" : "bg-gray-100"
      } transition-colors duration-300 relative `}
    >
      <AnimatedGridPattern
        numSquares={100}
        maxOpacity={darkMode ? 0.5 : 0.8}
        duration={2.5}
        repeatDelay={0.5}
        className={cn(
          "absolute inset-0 w-full h-full",
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
        )}
      />
      <div className="relative z-10">
        <header
          className={`${
            darkMode ? "bg-gray-800 bg-opacity-90" : "bg-white bg-opacity-90"
          } shadow-md sticky top-0 z-50 transition-all duration-300`}
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4 items-center">
              {["About", "Projects", "Skills", "Education", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`px-2 py-1 md:px-3 md:py-2 rounded-md text-sm font-medium ${
                        darkMode
                          ? "text-gray-300 hover:bg-gray-700"
                          : "text-gray-700 hover:bg-gray-200"
                      } transition-colors duration-200`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li>
                <a
                  href="/_Aftab_Shaikh_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p
                    className={`flex gap-1 ${
                      darkMode
                        ? "bg-blue-600 text-white"
                        : "bg-black text-white"
                    } p-2 rounded hover:bg-slate-400 transition-colors duration-300`}
                  >
                    <ArrowDownToLine className="mr-2" />
                    Resume
                  </p>
                </a>
              </li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-full ${
                    darkMode
                      ? "bg-gray-700 text-yellow-300"
                      : "bg-gray-200 text-gray-700"
                  } transition-colors duration-200`}
                  aria-label={
                    darkMode ? "Switch to light mode" : "Switch to dark mode"
                  }
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main
          className={`container mx-auto px-4 md:px-6 lg:px-8 py-8 max-w-4xl ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <section className="mb-[100px] relative">
            <div className="h-48 md:h-64 lg:h-96 overflow-hidden rounded-t-lg">
              <Image
                src={backgroundPic}
                alt="Cover Image"
                width={1200}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <Image
                src={profilePic}
                alt="Profile Picture"
                width={160}
                height={160}
                className="rounded-full border-4 object-cover h-32 w-32 md:h-40 md:w-40 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
          </section>

          <section id="about" className="mb-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-6"
            >
              <Skill
                icon="/web.png"
                text="Web Development"
                darkMode={darkMode}
              />
              <Skill
                icon="/backend.png"
                text="Backend Developer"
                darkMode={darkMode}
              />
              <Skill
                icon="/gear.png"
                text="Performance Optimization"
                darkMode={darkMode}
              />
            </motion.div>
            {/* About me descriptin */}
            <p
              className={`mb-6 mt-4 text-lg leading-relaxed max-w-2xl mx-auto text-center ${
                darkMode
                  ? "bg-gray-800 bg-opacity-50 text-gray-200"
                  : "bg-white bg-opacity-50 text-gray-700"
              } p-4 rounded-lg shadow-sm`}
            >
              Hello!{" "}
              <span className="">
                I&apos;m{" "}
                <TypingAnimation
                  className="text-xl font-bold inline-block text-black dark:text-white underline"
                  text="Shaikh Aftab"
                />
              </span>
              , a dedicated student and aspiring{" "}
              <span>
                <FadeText
                  className="text-2xl inline-block font-bold text-black dark:text-white"
                  direction="up"
                  framerProps={{
                    show: { transition: { delay: 0.2 } },
                  }}
                  text="Full Stack Web Developer,"
                />
              </span>{" "}
              with a strong foundation in <span>modern web technologies.</span>{" "}
              I am passionate about building{" "}
              <span className="font-bold">
                functional, user-centered applications{" "}
              </span>{" "}
              and leveraging my skills to bring ideas to life in the{" "}
              <span className="font-bold">digital world.</span> As I seek to
              transition into a professional role, I am excited to contribute to{" "}
              <span className="font-bold">real-world projects</span>,
              collaborate with{" "}
              <span className="font-bold">innovative teams</span>, and
              continually grow my expertise in{" "}
              <span className="font-bold">software development</span>.
            </p>
          </section>

          <section id="projects" className="mb-16">
            <h2
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Projects
            </h2>
            <div className="space-y-8 rounded">
              <ProjectCard
                title="Social Media App"
                description="A social media application built with React.js, Appwrite, and TanStack Query. The app allows users to create profiles, post updates, interact with other users, and more."
                features={[
                  "User authentication and authorization",
                  "Profile creation and editing",
                  "Post creation, editing, and deletion",
                  "Like and save functionalities",
                  "Real-time updates using TanStack Query",
                  "Backend powered by Appwrite for managing users and storing data",
                ]}
                technologies={["React.js", "Appwrite", "TanStack Query"]}
                githubLink="https://github.com/AFTABSHIAKH786/PetsProducts-MERN-APP"
                demoLink=""
                darkMode={darkMode}
              />
              <ProjectCard
                title="Event Broker (Event Management System)"
                description="Our Event Management Platform is a web application built using React, Firebase, NodeJS, Express, and Material UI. The development process was streamlined with the help of AI tools such as V0 and Claude."
                features={[
                  "Event Listing",
                  "Ticket Booking using Razorpay payment gateway",
                  "Ticket confirmation scanner",
                ]}
                technologies={[
                  "React",
                  "Firebase",
                  "NodeJS",
                  "Express",
                  "Material UI",
                ]}
                githubLink="https://github.com/AFTABSHIAKH786/Event-Booking-System"
                demoLink="https://event-booking-system-ahxg.vercel.app/"
                darkMode={darkMode}
              />
              <ProjectCard
                title="Pets Product E-commerce Site"
                description="An e-commerce application created using the MERN (MongoDB, Express, React.js and Node.js) stack."
                features={[
                  "Product Display page",
                  "Product description page",
                  "Cart page",
                  "Product ordering",
                  "Admin functionalities (updating customer, reviewing orders)",
                ]}
                technologies={["MongoDB", "Express", "React.js", "Node.js"]}
                githubLink="https://github.com/AFTABSHIAKH786/PetsProducts-MERN-APP"
                demoLink=""
                darkMode={darkMode}
              />
            </div>
          </section>

          <section id="skills" className="mb-16">
            <h2
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Skills
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className={`${
                    darkMode
                      ? "bg-white border-spacing-3"
                      : "bg-white hover:bg-gray-50 shadow-sm"
                  } rounded-md p-3 shadow-md flex items-center space-x-2 transition duration-300`}
                >
                  <Image
                    src={skill.image}
                    alt={skill.name}
                    width={40}
                    height={40}
                  />
                  <span
                    className={`text-sm ${
                      darkMode ? "text-black " : "text-black"
                    }`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </main>

        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <section id="education" className="mb-16">
            <h2
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Education Journey
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
              <div className="space-y-8">
                {[
                  {
                    image: "/vnsgu.png",
                    degree: "Master's in Computer Application (MSc. CA)",
                    institution:
                      "Veer Narmad South Gujarat University (DUIAS), Surat",
                    duration: "July 2023 - April 2025",
                    score: "FY score 8.3 CGPA",
                    status: "Current",
                  },
                  {
                    image: "/vnsgu.png",
                    degree: "Bachelors in Computer Application (BCA)",
                    institution:
                      "Veer Narmad South Gujarat University (DUIAS), Surat",
                    duration: "October 2020 - April 2023",
                    score: "8.5 CGPA",
                  },
                  {
                    image: "/gseb.jpeg",
                    degree: "HSC (Science Stream)",
                    institution: "Gujarat Secondary Board of Education (GSEB)",
                    duration: "March 2020",
                    score: "6 CGPA",
                  },
                  {
                    image: "/gseb.jpeg",
                    degree: "SSC",
                    institution: "Gujarat Secondary Board of Education (GSEB)",
                    duration: "March 2018",
                    score: "6.5 CGPA",
                  },
                ].map((edu, index) => (
                  <div key={index} className="relative pl-10">
                    <div
                      className={`absolute left-2 top-5 w-5 h-5 rounded-full ${
                        darkMode ? "bg-blue-500" : "bg-blue-600"
                      } transform -translate-x-1/2`}
                    ></div>
                    <div
                      className={`${
                        darkMode ? "bg-gray-800" : "bg-white"
                      } rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={edu.image}
                            alt="institution logo"
                            width={48}
                            height={48}
                            className="rounded-lg"
                          />
                          <div>
                            <h3
                              className={`text-xl font-bold ${
                                darkMode ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {edu.degree}
                              {edu.status && (
                                <span className="ml-2 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                                  {edu.status}
                                </span>
                              )}
                            </h3>
                            <p
                              className={`text-sm ${
                                darkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span
                          className={`text-sm ${
                            darkMode ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {edu.duration}
                        </span>
                        <span
                          className={`px-3 py-1 rounded-full ${
                            darkMode
                              ? "bg-gray-700 text-blue-400"
                              : "bg-blue-100 text-blue-800"
                          } text-sm font-medium`}
                        >
                          {edu.score}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="certifications" className="mb-16">
            <h2
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Professional Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Python",
                  icon: "🐍",
                  url: "https://drive.google.com/file/d/1ZC1knyoM4CbuvwZsoYHvqWC1jung3r4k/view",
                  color: "bg-green-500",
                },
                {
                  title: "MERN Stack",
                  icon: "⚛️",
                  url: "https://drive.google.com/file/d/1zQZ6G9E5IGZiPmzdOWo-eFVlGvNOI37r/view",
                  color: "bg-blue-500",
                },
                {
                  title: "Full Stack Web Development",
                  icon: "🌐",
                  url: "https://drive.google.com/file/d/1ddIdNaADx42Sl2d4Z16xSFWM8-ka8l0u/view",
                  color: "bg-purple-500",
                },
                {
                  title: "Block Chain Technology",
                  icon: "⛓️",
                  url: "https://drive.google.com/file/d/1Bc-1ULprzCOR1cU-uNDxchF7Zm2logIW/view",
                  color: "bg-yellow-500",
                },
                {
                  title: "Data Analytics",
                  icon: "📊",
                  url: "https://drive.google.com/file/d/12ztEYrxyMCnfqyu2x1kQUaoJdRzc_F1G/view",
                  color: "bg-red-500",
                },
                {
                  title: "Digital Marketing",
                  icon: "📱",
                  url: "https://drive.google.com/file/d/101OuPZgvPwvJHtEP0zQxD1G_LbQ64Vhi/view",
                  color: "bg-indigo-500",
                },
                {
                  title: "Leadership and Strategy",
                  icon: "👥",
                  url: "https://drive.google.com/file/d/1Gf4zksNJSAr577Age6Qwk-ZNHwXZGATv/view",
                  color: "bg-teal-500",
                },
              ].map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50"
                  } rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl group`}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`${cert.color} w-12 h-12 rounded-lg flex items-center justify-center text-2xl`}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-lg font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        } group-hover:text-blue-500 transition-colors duration-300`}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        View Certificate →
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="mb-16">
            <h2
              className={`text-3xl font-bold mb-8 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Let&apos;s Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-lg p-6`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:aftabshaikh907860@gmail.com"
                    className={`flex items-center space-x-3 ${
                      darkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    } transition-colors duration-300`}
                  >
                    <Mail className="flex-shrink-0" size={20} />
                    <span>aftabshaikh907860@gmail.com</span>
                  </a>
                  <div
                    className={`flex items-center space-x-3 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <Phone className="flex-shrink-0" size={20} />
                    <span>+91 7383656326</span>
                  </div>
                  <div
                    className={`flex items-center space-x-3 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <MapPin className="flex-shrink-0" size={20} />
                    <span>21/24 B, Sudhanagar, Valsad, Gujarat</span>
                  </div>
                </div>
              </div>

              <div
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-lg shadow-lg p-6`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Social Links
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      url: "https://www.linkedin.com/in/aftab-shaikh-327a2b21b/",
                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      url: "https://github.com/AFTABSHIAKH786",
                    },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      url: "https://www.instagram.com/aftab__shaikh__777/",
                    },
                    {
                      icon: Twitter,
                      label: "Twitter",
                      url: "https://x.com/AftabSh26849541",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 ${
                        darkMode
                          ? "text-gray-300 hover:text-blue-400"
                          : "text-gray-600 hover:text-blue-600"
                      } transition-colors duration-300`}
                    >
                      <social.icon className="flex-shrink-0" size={20} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer
          className={`${
            darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-800 text-white"
          } py-4`}
        >
          <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Shaikh Aftab</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

interface SkillProps {
  icon: string;
  text: string;
  darkMode: boolean;
}

function Skill({ icon, text, darkMode }: SkillProps) {
  return (
    <div
      className={`flex items-center ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
      } rounded-full px-3 py-1 shadow-md gap-1`}
    >
      <img src={icon} alt="icon" className="h-5 w-5" />
      <span className="text-xs font-medium">{text}</span>
    </div>
  );
}

interface ProjectProps {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  githubLink: string;
  demoLink: string;
  darkMode: boolean;
}

function ProjectCard({
  title,
  description,
  features,
  technologies,
  githubLink,
  demoLink,
  darkMode,
}: ProjectProps) {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
      } rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition duration-300`}
    >
      <h3
        className={`text-xl md:text-2xl font-semibold mb-2 ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>
      <p
        className={`mb-4 text-sm md:text-base ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </p>
      <div className="mb-4">
        <h4
          className={`font-semibold mb-2 text-sm md:text-base ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Key Features:
        </h4>
        <ul className="list-disc list-inside text-sm">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h4
          className={`font-semibold mb-2 text-sm md:text-base ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`${
                darkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-200 text-gray-700"
              } px-2 py-1 rounded-md text-xs md:text-sm`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center ${
            darkMode
              ? "text-blue-400 hover:text-blue-300"
              : "text-blue-600 hover:text-blue-800"
          } text-sm`}
        >
          <Github className="mr-1" size={16} />
          GitHub
        </a>
        {demoLink && (
          <a
            href={demoLink}
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HyperText
              className={`text-sm font-bold ${
                darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-600 hover:text-blue-800"
              } underline`}
              text="LiveDemo"
            />
            <SquareArrowOutUpRight className="ml-1 w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}




