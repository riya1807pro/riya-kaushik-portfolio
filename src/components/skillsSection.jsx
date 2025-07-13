"use client";
import React from "react";
import { motion } from "framer-motion";
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

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SkillItem = ({ icon, name, level }) => (
  <motion.div
    variants={itemVariants}
    className="group relative overflow-hidden p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transition duration-500 hover:shadow-pink-500/50 hover:scale-105 cursor-pointer"
    title={level}
  >
    <div className="text-5xl mb-3 text-pink-600 group-hover:rotate-6 transition duration-300">
      {icon}
    </div>
    <div className="text-base font-medium text-gray-800 dark:text-gray-200">
      {name}
    </div>
    <div className="text-xs text-indigo-500 dark:text-indigo-300 mt-1">{level}</div>
    <div className="absolute -inset-0.5 bg-pink-500 opacity-0 group-hover:opacity-10 blur-lg rounded-xl transition duration-500"></div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-pink-600">
          🚀 Tech Stack / Skills
        </h2>
        <motion.div
          variants={gridVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
        >
          {skills.map((skill) => (
            <SkillItem key={skill.name} {...skill} />
          ))}
        </motion.div>
        <p className="mt-14 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          <span className="font-semibold">
            React.js · Next.js · Tailwind CSS · Redux Toolkit · Node.js · Express.js · GitHub · C++ DSA
          </span>
        </p>
      </div>
    </section>
  );
};

export default Skills;
