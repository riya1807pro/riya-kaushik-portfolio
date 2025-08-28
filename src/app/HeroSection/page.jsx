"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [projects, setProjects] = useState(0);
  const [leetcode, setLeetcode] = useState(0);
  const [internships, setInternships] = useState(0);

  // Counter animation
  useEffect(() => {
    let p = 0, l = 0, i = 0;
    const interval = setInterval(() => {
      if (p < 20) p++;
      if (l < 70) l++;
      if (i < 2) i++;
      setProjects(p);
      setLeetcode(l);
      setInternships(i);
      if (p === 20 && l === 70 && i === 2) clearInterval(interval);
    }, 50);
  }, []);

  // ✅ Direct Resume Download from public folder
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // <-- public folder me rakhi file
    link.download = "Riya-Kaushik-Resume.pdf"; // file ka naam jo download hote time dikhna chahiye
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white px-6">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Riya Kaushik 👋 <br />
          <span className="text-gray-300">Frontend Developer & Designer</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Building modern, interactive, and professional web experiences with{" "}
          <span className="text-teal-400 font-semibold">
            React, Next.js & TailwindCSS
          </span>
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link href="#projects">
            <Button className="px-6 py-3 text-lg font-medium bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-90">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          {/* ✅ Direct Download Resume */}
          <Button
            onClick={handleDownload}
            className="px-6 py-3 text-lg font-medium flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Counters */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <div className="p-6 rounded-xl bg-gray-800 shadow-lg">
            <h3 className="text-3xl font-bold text-teal-400">{projects}+</h3>
            <p className="text-gray-400 mt-1">Projects Completed</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800 shadow-lg">
            <h3 className="text-3xl font-bold text-blue-400">{leetcode}+</h3>
            <p className="text-gray-400 mt-1">LeetCode Problems</p>
          </div>
          <div className="p-6 rounded-xl bg-gray-800 shadow-lg">
            <h3 className="text-3xl font-bold text-purple-400">{internships}</h3>
            <p className="text-gray-400 mt-1">Internships</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
