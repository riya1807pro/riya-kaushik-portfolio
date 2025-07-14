"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiRedux, SiExpress, SiBootstrap,
  SiCplusplus, SiPostman, SiVercel
} from "react-icons/si";

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

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const SkillItem = ({ icon, name, level }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.1, rotate: 1 }}
    className="group relative p-6 rounded-3xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 shadow-lg transition-all duration-500 cursor-pointer overflow-hidden"
    title={level}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/10 to-indigo-400/20 opacity-0 group-hover:opacity-20 transition duration-500 rounded-3xl"></div>
    <div className="text-5xl mb-4 text-white dark:text-gray-200 group-hover:rotate-3 transition duration-300">
      {icon}
    </div>
    <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
      {name}
    </div>
    <div className="text-xs text-purple-600 dark:text-purple-300 mt-1">{level}</div>
  </motion.div>
);

const Skills = () => {
  return (
   <section className="py-20 bg-gradient-to-br from-gray-50 via-purple-100 to-indigo-200 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <img
      src="/skill.svg"
      alt="skill image"
      className="w-full mb-6 h-72 transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_rgba(192,132,252,0.4)] rounded-3xl"
    />
    <h2 className="text-4xl font-bold mb-14 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white bg-clip-text">
      🚀 Tech Stack / Skills
    </h2>
    <motion.div
      variants={gridVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
    >
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </motion.div>
    <p className="mt-24 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
      <span className="font-semibold">
        React.js · Next.js · Tailwind CSS · Redux Toolkit · Node.js · Express.js · GitHub · C++ DSA
      </span>
    </p>
  </div>
</section>
  );
};

export default Skills;