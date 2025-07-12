"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return ("loading....");

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 shadow transition-colors duration-500">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-pink-500 cursor-pointer transition-colors duration-300">
        Riya Kaushik
      </div>

      {/* Links */}
      <div className="flex gap-8 text-lg text-gray-600 dark:text-gray-300">
        <Link href="/" className="hover:text-pink-500 transition-colors duration-300 cursor-pointer">
          Home
        </Link>
        <Link href="/about" className="hover:text-pink-500 transition-colors duration-300 cursor-pointer">
          About
        </Link>
        <Link href="/skills" className="hover:text-pink-500 transition-colors duration-300 cursor-pointer">
          Skills
        </Link>
        <Link href="/project" className="hover:text-pink-500 transition-colors duration-300 cursor-pointer">
          Projects
        </Link>
        <Link href="/contact" className="hover:text-pink-500 transition-colors duration-300 cursor-pointer">
          Contact
        </Link>
      </div>
    </nav>
  );
};
