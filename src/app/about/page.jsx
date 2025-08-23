"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const points = [
  "• Strong foundation in React, Next.js, and Tailwind CSS.",
  "• Learning core subjects like Computer Networks, Operating Systems , DBMS, and DSA.",
  "• Solved 80+ Leetcode problems.",
  "• Exploring backend with Node.js & Express.",
  "• Experienced with Git, GitHub, and clean version control.",
  "• Open to collaborations and challenging builds."
]

const About = () => {
  return (
    <div className="container px-4 py-2 w-screen ">
      <motion.p
        className="text-5xl font-extrabold text-white text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me 🚀
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-tr from-blue-950 via-purple-900 to-pink-900 rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        {/* Left image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <motion.img 
            src="/about.svg" 
            alt="about image" 
            className="h-80 w-72 rounded-xl shadow-lg"
            whileHover={{ scale: 1.08, rotate: 2 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          />
        </div>

        {/* Right content */}
        <div className="w-full md:w-2/3">
        <span  className="block mb-4 text-lg sm:text-xl text-rose-200">
          I’m RIya Kaushik, passionate about learning new technologies and integrating them in my projects.
         I’m currently focusing on strengthening my core fundamental skills. 
        </span>
          <ul className="space-y-2 text-lg sm:text-xl text-rose-200">
            {points.map((point, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-3 list-items-disc"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + idx * 0.2 }}
              >
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
          <span className="block mt-6 text-lg sm:text-xl text-rose-200">
          Looking forward to exploring full-stack web development and new technologies to strengthen my skills and deep knowledge in the tech world
          </span>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center  gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-pink-700 via-purple-800 to-blue-950 text-white px-4 py-2 rounded-lg shadow-lg hover:from-pink-600 hover:to-blue-900 transition duration-300"
          >
            Contact Me
          </motion.button>
        </Link>
        <Link href="/resume">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-r from-pink-700 via-purple-800 to-blue-950 text-white px-8 py-2 rounded-lg shadow-lg hover:from-pink-600 hover:to-blue-900 transition duration-300"
        >
          Resume
        </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default About;