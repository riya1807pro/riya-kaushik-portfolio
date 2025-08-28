"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const aboutPoints = [
  "💻 Frontend Developer skilled in building responsive and interactive web apps using React, Next.js & TailwindCSS",
  "📚 Strong foundation in Computer Engineering from GBN Govt. Polytechnic, Nilokheri",
  "⚡ Developed 20+ projects demonstrating expertise in UI/UX and full-stack development",
  "🔥 Solved 70+ Data Structures & Algorithms problems on LeetCode and continuously improving problem-solving skills",
  "🌐 Practical experience with TRPC, Redux Toolkit, and modern web development tools",
  "🚀 Passionate about learning new technologies, optimizing performance, and delivering user-focused solutions",
];

export default function About() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Small intro line */}
        <motion.p
          className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A motivated frontend developer who enjoys crafting modern, scalable,
          and user-friendly applications with a focus on clean design and performance.
        </motion.p>

        {/* Bullet Points with Animation */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {aboutPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="bg-gray-800/40 border border-gray-700 hover:bg-gray-800/60 transition-all duration-300 shadow-lg rounded-2xl">
                <CardContent className="p-4 text-gray-200 text-left text-base">
                  {point}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
