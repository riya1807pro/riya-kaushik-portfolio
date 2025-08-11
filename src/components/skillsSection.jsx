"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiBootstrap, SiCplusplus, SiPostman, SiVercel } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", level: "Expert" },
  { icon: <FaCss3Alt />, name: "CSS3", level: "Expert" },
  { icon: <FaJs />, name: "JavaScript", level: "Expert" },
  { icon: <FaReact />, name: "React.js", level: "Advanced" },
  { icon: <SiNextdotjs />, name: "Next.js", level: "Advanced" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Advanced" },
  { icon: <SiRedux />, name: "Redux Toolkit", level: "Advanced" },
  { icon: <SiBootstrap />, name: "Bootstrap", level: "Intermediate" },
  { icon: <FaNodeJs />, name: "Node.js", level: "Intermediate" },
  { icon: <SiExpress />, name: "Express.js", level: "Intermediate" },
  { icon: <FaGitAlt />, name: "Git & GitHub", level: "Advanced" },
  { icon: <SiPostman />, name: "Postman", level: "Intermediate" },
  { icon: <SiVercel />, name: "Vercel", level: "Intermediate" },
  { icon: <SiCplusplus />, name: "C++ DSA", level: "Intermediate" },
];

const SkillItem = ({ icon, name, level }) => (
  <div className="group relative p-6 rounded-3xl bg-white/80 border border-purple-100 shadow-lg transition-all duration-500 cursor-pointer overflow-hidden hover:scale-105">
    <div className="text-5xl mb-4 text-indigo-400 group-hover:rotate-3 transition duration-300">{icon}</div>
    <div className="text-lg font-semibold text-gray-800">{name}</div>
    <div className="text-xs text-purple-600 mt-1">{level}</div>
  </div>
);

const Skills = () => (
  <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-100 to-indigo-100">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <img src="/skill.svg" alt="skill image" className="w-full mb-6 h-72 transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-lg rounded-3xl" />
      <h2 className="text-4xl font-bold mb-14 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
        🚀 Tech Stack / Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill) => <SkillItem key={skill.name} {...skill} />)}
      </div>
      <p className="mt-24 text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
        <span className="font-semibold">
          React.js · Next.js · Tailwind CSS · Redux Toolkit · Node.js · Express.js · GitHub · C++ DSA
        </span>
      </p>
    </div>
  </section>
);

export default Skills;