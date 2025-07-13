"use client"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-semibold text-lg">Riya Kaushik</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/riya1807pro" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/riyakaushik-webdev" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};
