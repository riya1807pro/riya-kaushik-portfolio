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
  { icon: <FaHtml5 />, name: "HTML5", level: "Expert", percent: 95 },
  { icon: <FaCss3Alt />, name: "CSS3", level: "Expert", percent: 95 },
  { icon: <FaJs />, name: "JavaScript", level: "Expert", percent: 90 },
  { icon: <FaReact />, name: "React.js", level: "Advanced", percent: 85 },
  { icon: <SiNextdotjs />, name: "Next.js", level: "Advanced", percent: 85 },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", level: "Advanced", percent: 90 },
  { icon: <SiRedux />, name: "Redux Toolkit", level: "Advanced", percent: 80 },
  { icon: <SiBootstrap />, name: "Bootstrap", level: "Intermediate", percent: 70 },
  { icon: <FaNodeJs />, name: "Node.js", level: "Intermediate", percent: 70 },
  { icon: <SiExpress />, name: "Express.js", level: "Intermediate", percent: 65 },
  { icon: <FaGitAlt />, name: "Git & GitHub", level: "Advanced", percent: 85 },
  { icon: <SiPostman />, name: "Postman", level: "Intermediate", percent: 70 },
  { icon: <SiVercel />, name: "Vercel", level: "Intermediate", percent: 75 },
  { icon: <SiCplusplus />, name: "C++ DSA", level: "Intermediate", percent: 80 },
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

const SkillItem = ({ icon, name, level, percent }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ scale: 1.08, rotate: 1 }}
    className="group relative p-6 rounded-2xl bg-gray-800/40 backdrop-blur-lg border border-gray-600/40 shadow-lg transition-all duration-500 cursor-pointer hover:border-purple-400 hover:shadow-purple-500/30"
    title={level}
  >
    {/* Hover glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-40 transition duration-500 rounded-2xl"></div>

    {/* Icon */}
    <div className="text-5xl mb-4 text-indigo-300 group-hover:text-pink-300 transition duration-300">
      {icon}
    </div>

    {/* Name */}
    <div className="text-lg font-semibold text-white">{name}</div>

    {/* Level Badge */}
    <div
      className={`mt-2 px-3 py-1 rounded-full text-xs font-medium inline-block transition 
        ${
          level === "Expert"
            ? "bg-green-500/20 text-green-300 border border-green-500/30"
            : level === "Advanced"
            ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
            : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
        }`}
    >
      {level}
    </div>

    {/* Progress Bar */}
    <div className="mt-4 w-full h-2 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
      />
    </div>

    {/* Percentage Label */}
    <div className="text-xs text-gray-400 mt-1">{percent}%</div>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(129,140,248,0.12),transparent_70%)]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Image */}
        <motion.img
          src="/skill.svg"
          alt="skill image"
          className="w-full mb-10 h-72 rounded-3xl shadow-lg hover:shadow-[0_0_35px_rgba(129,140,248,0.4)] transition-transform duration-500"
          whileHover={{ scale: 1.05 }}
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          ⚡ Tech Stack / Skills
        </motion.h2>

        {/* Grid */}
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

        {/* Footer text */}
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
