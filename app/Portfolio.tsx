"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  ArrowDownToLine,
  Sun,
  Moon,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../components/ui/animated-grid-pattern";
import TypingAnimation from "../components/ui/typing-animation";
import { FadeText } from "../components/ui/fade-text";
import { FaDocker, FaAws, FaJenkins, FaLinux, FaPython, FaGitAlt } from "react-icons/fa";
import { SiKubernetes, SiTerraform, SiGithubactions, SiGnubash, SiAnsible, SiPrometheus, SiGrafana } from "react-icons/si";

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
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
    { name: "AWS", icon: FaAws, color: "text-orange-500" },
    { name: "Terraform", icon: SiTerraform, color: "text-purple-500" },
    { name: "Jenkins", icon: FaJenkins, color: "text-red-500" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-400" },
    { name: "Linux", icon: FaLinux, color: "text-yellow-600" },
    { name: "Bash", icon: SiGnubash, color: "text-gray-600" },
    { name: "Python", icon: FaPython, color: "text-yellow-500" },
    { name: "Git", icon: FaGitAlt, color: "text-red-400" },
    { name: "Ansible", icon: SiAnsible, color: "text-red-600" },
    { name: "Prometheus", icon: SiPrometheus, color: "text-orange-600" },
    { name: "Grafana", icon: SiGrafana, color: "text-orange-400" },
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
              {["About", "Experience", "Skills", "Education", "Contact"].map(
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
                icon={<SiKubernetes className="text-blue-500" size={20} />}
                text="Container Orchestration"
                darkMode={darkMode}
              />
              <Skill
                icon={<FaAws className="text-orange-500" size={20} />}
                text="Cloud Architecture"
                darkMode={darkMode}
              />
              <Skill
                icon={<SiTerraform className="text-purple-500" size={20} />}
                text="Infrastructure as Code"
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
                  text="DevOps & SRE Specialist,"
                />
              </span>{" "}
              with a strong foundation in <span>cloud infrastructure and automation.</span>{" "}
              I am passionate about building{" "}
              <span className="font-bold">
                scalable, highly available systems{" "}
              </span>{" "}
              and leveraging my skills to optimize CI/CD pipelines in the{" "}
              <span className="font-bold">digital world.</span> As I seek to
              transition into a professional role, I am excited to contribute to{" "}
              <span className="font-bold">real-world cloud architectures</span>,
              collaborate with{" "}
              <span className="font-bold">innovative teams</span>, and
              continually grow my expertise in{" "}
              <span className="font-bold">Site Reliability Engineering</span>.
            </p>
          </section>

          <section id="experience" className="mb-16">
            <h2
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Work Experience
            </h2>
            <div className="space-y-8 rounded">
              <ExperienceCard
                role="DevOps Engineer"
                company="Ecosmob Technologies"
                image="/ecosmob.png"
                duration="Sep 2025 - Present"
                description="Managed and scaled cloud infrastructure, streamlined deployments, and improved system reliability in a full-time capacity."
                achievements={[
                  "Optimized CI/CD pipelines, reducing deployment times significantly.",
                  "Managed cloud resources to ensure high availability and cost efficiency.",
                  "Collaborated with cross-functional teams to resolve infrastructure bottlenecks.",
                ]}
                technologies={["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Linux"]}
                darkMode={darkMode}
              />
              <ExperienceCard
                role="DevOps Trainee"
                company="Ecosmob Technologies"
                image="/ecosmob.png"
                duration="Jun 2025 - Aug 2025"
                description="Received hands-on training in DevOps methodologies, focusing on cloud provisioning, containerization, and automation."
                achievements={[
                  "Assisted in configuring automated deployment pipelines.",
                  "Gained practical experience in managing Linux-based environments.",
                ]}
                technologies={["Linux", "Git", "Bash", "Docker"]}
                darkMode={darkMode}
              />
              <ExperienceCard
                role="DevOps Intern"
                company="1Rivet India"
                image="/1Rivet.jpg"
                duration="Jan 2025 - May 2025"
                description="Completed a comprehensive DevOps internship focused on modern cloud infrastructure and CI/CD practices."
                achievements={[
                  "Contributed to infrastructure automation and deployment workflows.",
                  "Collaborated with the engineering team to optimize system reliability.",
                ]}
                technologies={["Docker", "Linux", "Git", "Bash"]}
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
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
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

          <section id="education" className="mb-16">
            <h2
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Education Journey
            </h2>
            <div className="space-y-8 rounded">
              {[
                {
                  image: "/vnsgu.png",
                  degree: "Master's in Computer Application (MSc. CA)",
                  institution: "Veer Narmad South Gujarat University (DUIAS), Surat",
                  duration: "July 2023 - April 2025",
                  score: "8.3 CGPA",
                },
                {
                  image: "/vnsgu.png",
                  degree: "Bachelors in Computer Application (BCA)",
                  institution: "Veer Narmad South Gujarat University (DUIAS), Surat",
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
              ].map(
                (
                  edu: {
                    image: string;
                    degree: string;
                    institution: string;
                    duration: string;
                    score: string;
                    status?: string;
                  },
                  index
                ) => (
                <div
                  key={index}
                  className={`${
                    darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
                  } rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition duration-300`}
                >
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                      <Image
                        src={edu.image}
                        alt="institution logo"
                        width={48}
                        height={48}
                        className="rounded-lg flex-shrink-0"
                      />
                      <h3
                        className={`text-xl md:text-2xl font-semibold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {edu.degree}
                        {edu.status && (
                          <span className="ml-3 px-2 py-1 text-xs font-semibold text-white bg-green-500 rounded-full align-middle">
                            {edu.status}
                          </span>
                        )}
                      </h3>
                    </div>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      darkMode ? "bg-gray-700 text-blue-400" : "bg-blue-100 text-blue-800"
                    } w-fit mt-2 md:mt-0 whitespace-nowrap self-start md:self-center`}>
                      {edu.duration}
                    </span>
                  </div>
                  <h4 className={`text-lg font-medium mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {edu.institution}
                  </h4>
                  {edu.score && (
                    <div className="mt-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full ${
                          darkMode
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-200 text-gray-700"
                        } text-sm font-medium`}
                      >
                        Score: {edu.score}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="mb-16">
            <h2
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Professional Certifications
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { title: "Python", icon: "🐍", url: "https://drive.google.com/file/d/1ZC1knyoM4CbuvwZsoYHvqWC1jung3r4k/view" },
                { title: "MERN Stack", icon: "⚛️", url: "https://drive.google.com/file/d/1zQZ6G9E5IGZiPmzdOWo-eFVlGvNOI37r/view" },
                { title: "Full Stack Web", icon: "🌐", url: "https://drive.google.com/file/d/1ddIdNaADx42Sl2d4Z16xSFWM8-ka8l0u/view" },
                { title: "Block Chain", icon: "⛓️", url: "https://drive.google.com/file/d/1Bc-1ULprzCOR1cU-uNDxchF7Zm2logIW/view" },
                { title: "Data Analytics", icon: "📊", url: "https://drive.google.com/file/d/12ztEYrxyMCnfqyu2x1kQUaoJdRzc_F1G/view" },
                { title: "Digital Marketing", icon: "📱", url: "https://drive.google.com/file/d/101OuPZgvPwvJHtEP0zQxD1G_LbQ64Vhi/view" },
                { title: "Leadership", icon: "👥", url: "https://drive.google.com/file/d/1Gf4zksNJSAr577Age6Qwk-ZNHwXZGATv/view" },
              ].map((cert, index) => (
                <a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    darkMode
                      ? "bg-gray-800 border-spacing-3 text-white hover:bg-gray-700"
                      : "bg-white hover:bg-gray-50 shadow-sm text-black"
                  } rounded-md p-4 shadow-md flex flex-col items-center justify-center space-y-2 transition duration-300 text-center`}
                >
                  <span className="text-3xl mb-1">{cert.icon}</span>
                  <span className={`text-sm font-medium`}>
                    {cert.title}
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section id="contact" className="mb-16">
            <h2
              className={`text-3xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Let&apos;s Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className={`${
                  darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
                } rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300`}
              >
                <h3
                  className={`text-xl font-semibold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:aftabshaikh907860@gmail.com"
                    className={`${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-black"
                    } rounded-md p-3 shadow-sm flex items-center space-x-3 transition duration-300`}
                  >
                    <Mail className="flex-shrink-0" size={20} />
                    <span className="text-sm font-medium">aftabshaikh907860@gmail.com</span>
                  </a>
                  <div
                    className={`${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-black"
                    } rounded-md p-3 shadow-sm flex items-center space-x-3 transition duration-300`}
                  >
                    <Phone className="flex-shrink-0" size={20} />
                    <span className="text-sm font-medium">+91 7383656326</span>
                  </div>
                  <div
                    className={`${
                      darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-black"
                    } rounded-md p-3 shadow-sm flex items-center space-x-3 transition duration-300`}
                  >
                    <MapPin className="flex-shrink-0" size={20} />
                    <span className="text-sm font-medium">21/24 B, Sudhanagar, Valsad, Gujarat</span>
                  </div>
                </div>
              </div>

              <div
                className={`${
                  darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
                } rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300`}
              >
                <h3
                  className={`text-xl font-semibold mb-6 ${
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
                      className={`${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-black"
                      } rounded-md p-3 shadow-sm flex flex-col items-center justify-center space-y-2 transition duration-300`}
                    >
                      <social.icon className="flex-shrink-0" size={24} />
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

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
  icon: ReactNode;
  text: string;
  darkMode: boolean;
}

function Skill({ icon, text, darkMode }: SkillProps) {
  return (
    <div
      className={`flex items-center ${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
      } rounded-full px-4 py-2 shadow-md gap-2`}
    >
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

interface ExperienceProps {
  role: string;
  company: string;
  image?: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  darkMode: boolean;
}

function ExperienceCard({
  role,
  company,
  image,
  duration,
  description,
  achievements,
  technologies,
  darkMode,
}: ExperienceProps) {
  return (
    <div
      className={`${
        darkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-700"
      } rounded-lg shadow-md p-4 md:p-6 hover:shadow-lg transition duration-300`}
    >
      <div className="flex flex-col md:flex-row justify-between mb-2">
        <h3
          className={`text-xl md:text-2xl font-semibold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {role}
        </h3>
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          darkMode ? "bg-gray-700 text-blue-400" : "bg-blue-100 text-blue-800"
        } w-fit mt-2 md:mt-0`}>
          {duration}
        </span>
      </div>
      <div className="flex items-center space-x-3 mb-4">
        {image && (
          <Image
            src={image}
            alt={`${company} logo`}
            width={32}
            height={32}
            className="rounded-md object-cover"
          />
        )}
        <h4 className={`text-lg font-medium ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          {company}
        </h4>
      </div>
      <p
        className={`mb-4 text-sm md:text-base ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {description}
      </p>
      {achievements.length > 0 && (
        <div className="mb-4">
          <h4
            className={`font-semibold mb-2 text-sm md:text-base ${
              darkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Key Achievements:
          </h4>
          <ul className="list-disc list-inside text-sm space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="mt-4">
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
    </div>
  );
}




