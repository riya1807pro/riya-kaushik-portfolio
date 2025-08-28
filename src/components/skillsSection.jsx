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

// animation configs
const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SkillItem = ({ icon, name, level }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.08, rotate: 1 }}
    className="group relative p-6 rounded-2xl bg-gray-800/40 backdrop-blur-lg border border-gray-600/40 shadow-lg transition-all duration-500 cursor-pointer hover:border-purple-400 hover:shadow-purple-500/30"
    title={level}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-30 transition duration-500 rounded-2xl"></div>
    <div className="text-5xl mb-4 text-indigo-300 group-hover:text-pink-300 transition duration-300">
      {icon}
    </div>
    <div className="text-lg font-semibold text-white">{name}</div>
    <div className="text-xs text-purple-300 mt-1">{level}</div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.12),transparent_70%)]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.img
          src="/skill.svg"
          alt="skill image"
          className="w-full mb-10 h-72 rounded-3xl shadow-lg hover:shadow-[0_0_35px_rgba(129,140,248,0.4)] transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          ⚡ Tech Stack / Skills
        </motion.h2>

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

        <p className="mt-12 text-lg sm:text-xl text-indigo-300 max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold">
            React.js · Next.js · Tailwind CSS · Redux Toolkit · Node.js · Express.js · GitHub · C++ DSA
          </span>
        </p>
      </div>
    </section>
  );
};

export default Skills;
