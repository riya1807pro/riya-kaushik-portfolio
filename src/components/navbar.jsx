"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-lg border-b border-slate-200 transition-all duration-300 sm:mb-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="#home"
          className="text-2xl font-extrabold tracking-tight text-gray-900 hover:text-pink-500 transition-all duration-200 rounded-xl px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          Riya Kaushik
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 rounded-xl text-gray-800 hover:text-pink-500 hover:bg-pink-100/60 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-2xl text-gray-900 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {/* Mobile Nav Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-white/95 backdrop-blur-xl shadow-lg border-t border-slate-200 px-4 py-4`}
      >
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="block mb-2 px-4 py-2 rounded-xl text-gray-800 hover:text-pink-500 hover:bg-pink-100/60 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 font-medium"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};