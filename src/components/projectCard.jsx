"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ title, description, live, github, image, skills }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg overflow-hidden hover:border-purple-400 hover:shadow-purple-500/30 transition-all"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
        <p className="text-gray-300 mt-2 text-sm leading-relaxed">{description}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-purple-300 border border-purple-400/20"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex gap-3">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow hover:opacity-90 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gray-700 text-white shadow hover:bg-gray-600 transition"
          >
            <FaGithub /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
}
