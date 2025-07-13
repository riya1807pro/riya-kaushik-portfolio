"use client";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" />, level: "Expert" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" />, level: "Expert" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: "Expert" },
  { name: "React", icon: <FaReact className="text-cyan-500" />, level: "Advanced" },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: "Advanced" },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" />, level: "Advanced" },
  { name: "Git", icon: <FaGitAlt className="text-red-500" />, level: "Advanced" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: "Intermediate" },
];

const SkillSection = () => {
  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-gray-50 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          id="skills-heading"
          className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map(({ name, icon, level }) => (
            <div
              key={name}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-indigo-100 dark:border-indigo-900 flex flex-col items-center hover:scale-105 hover:shadow-xl transition duration-300"
              aria-label={name}
            >
              <div className="mb-3 text-4xl">{icon}</div>
              <p className="text-xl font-semibold text-center text-gray-700 dark:text-gray-200">{name}</p>
              <span className="mt-2 text-sm text-indigo-500 dark:text-indigo-300">{level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;