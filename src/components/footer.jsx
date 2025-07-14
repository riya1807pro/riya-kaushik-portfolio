"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-indigo-900 text-wheat py-2 bottom-0 fixed w-screen" 
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 text-white text-sm">
        <div className="mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} Riya Kaushik. All rights reserved.
        </div>
        <div className="flex space-x-6 text-lg">
          <a
            href="https://github.com/riya1807pro"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 text-white transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/riyakaushik-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 text-white transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};