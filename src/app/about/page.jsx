"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h1
        className="text-4xl font-extrabold text-zinc-900 text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me 🚀
      </motion.h1>

      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 bg-indigo-300 rounded-xl shadow-xl p-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Left side image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-72 h-auto">
            <img
              src="/contact_image.svg"
              alt="About illustration"
              className="w-72 md:w-96 h-auto object-contain rounded-xl shadow-xl"
            />
          </div>
        </div>

        {/* Right side text */}
        <div className="w-full md:w-1/2">
          <p className="text-lg sm:text-xl text-gray-900 leading-relaxed">
            Hi, I'm <span className="font-bold">Riya Kaushik</span> — a
            Frontend-focused Developer currently exploring Full Stack
            Development. I love turning complex ideas into clean, user-friendly
            interfaces.
            <br />
            <br />
            My primary stack:{" "}
            <span className="font-semibold">React, Next.js, Tailwind CSS</span>{" "}
            on the frontend, and Node.js + Express on the backend basics. I’m
            also steadily working on my{" "}
            <span className="font-semibold">
              Data Structures & Algorithms in C++
            </span>{" "}
            to strengthen problem-solving.
            <br />
            <br />
            Lately, I’ve been exploring how to integrate{" "}
            <span className="font-semibold">AI APIs</span> into my Next.js
            projects for dynamic, modern apps. When not coding, you’ll find me
            improving my GitHub portfolio, applying for internships, or
            experimenting with side projects. Always open to collaborations and
            challenges that push me out of my comfort zone.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center mt-10 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-950 text-white px-6 py-3 rounded-lg border-2 border-gray-950 hover:bg-gray-800"
          >
            Contact Me
          </motion.button>
        </Link>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-950 text-white px-6 py-3 rounded-lg border-2 border-gray-950 hover:bg-gray-800"
        >
          Resume
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
