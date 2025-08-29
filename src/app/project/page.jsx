"use client";

import React from "react";
import ProjectCard from "../../components/projectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Dashboard - Real-time Data Sync",
    description:
      "DashSync is a Next.js + TypeScript web application that aggregates trending movies and *top news articles, personalised to each user’s *preferences (genre + category) and authentication.",
    live: "https://datasync-dashboard.vercel.app/",
    github: "https://github.com/riya1807pro/datasync-dashboard",
    image: "/datasync.png",
    skills: [
      "Next.js 15",
      "TypeScript",
      "TailwindCSS",
      "Redux Toolkit + RTK Query",
      "Clerk",
      "NewsAPI / TMDB API",
      "vercel",
    ],
  },
  {
    title: "React Redux CRUD (Posts App)",
    description:
      "A CRUD app to create, edit, delete posts using Redux Toolkit and localStorage.",
    live: "https://redux-posts-app-lake.vercel.app/",
    github: "https://github.com/riya1807pro/redux-posts-app",
    image: "/crud_app.png",
    skills: ["React", "Redux Toolkit", "Tailwind CSS", "Vite"],
  },
  {
    title: "My Developer Portfolio",
    description:
      "My personal portfolio website built with Next.js, Tailwind CSS, Framer Motion.",
    live: "https://cryptotracke.vercel.app/",
    github: "https://github.com/riya1807pro/riya-kaushik-portfolio",
    image: "/portfolio.PNG",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,0.15),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-14"
        >
          🚀 Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
