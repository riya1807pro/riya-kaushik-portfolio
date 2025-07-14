"use client";
import { motion } from "framer-motion";

const My_Resume = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-6">
      
      {/* Heading with animation */}
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Resume
      </motion.h1>

      {/* Resume card */}
      <motion.div
        className="w-full max-w-5xl bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-white/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <iframe
          src="/resume.pdf"
          className="w-full h-[80vh] rounded-xl"
          title="Riya Resume"
        ></iframe>
      </motion.div>

      {/* Download button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white text-xl font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          <span>Download Resume</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4 4m0 0l4-4m-4 4V4" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default My_Resume;