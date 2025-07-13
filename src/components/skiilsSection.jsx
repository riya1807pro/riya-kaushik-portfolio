"use client";
import React from "react";

const SkillSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Git", "Node.js"].map(skill => (
            <div
              key={skill}
              className="bg-white text-black dark:bg-gray-800 p-6 rounded-xl shadow hover:scale-105 transition duration-300"
            >
              <p className="text-xl font-semibold text-center text-gray-700 dark:text-gray-200">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
