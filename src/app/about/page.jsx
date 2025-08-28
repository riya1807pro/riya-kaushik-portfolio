"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const aboutPoints = [
  "💻 Passionate Frontend Developer specialized in React, Next.js & TailwindCSS",
  "📚 Strong Computer Engineering background from GBN Govt. Polytechnic, Nilokheri",
  "⚡ Built 20+ projects showcasing UI/UX and full-stack skills",
  "🔥 Solved 70+ DSA problems on LeetCode & growing daily",
  "🌐 Hands-on experience with TRPC, Redux Toolkit, and modern web tools",
  "🚀 Always exploring new technologies & sharpening problem-solving skills",
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
          A motivated developer who loves crafting modern, user-friendly, and high-performing web applications.
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
