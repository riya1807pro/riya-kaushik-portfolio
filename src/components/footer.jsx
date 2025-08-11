"use client"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 text-gray-700 py-4 shadow-lg border-t border-indigo-200 transition-all">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm">
      <div className="mb-2 md:mb-0 flex-1 flex justify-center md:justify-start">
        <span className="font-medium tracking-wide text-gray-700">
          &copy; {new Date().getFullYear()} Riya Kaushik. All rights reserved.
        </span>
      </div>
      <div className="flex gap-6 flex-1 justify-center md:justify-end">
        <a
          href="https://github.com/riya1807pro"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl p-2 hover:bg-pink-200/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
          aria-label="GitHub"
        >
          <FaGithub className="text-2xl group-hover:text-pink-400 transition duration-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/riyakaushik-webdev"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl p-2 hover:bg-indigo-200/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl group-hover:text-indigo-400 transition duration-200" />
        </a>
      </div>
    </div>
  </footer>
);