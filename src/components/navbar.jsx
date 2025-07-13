"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return "loading....";

  return (
    <nav className="-z-20 flex justify-between items-center px-8 py-4 border-y-indigo-500 border-2 backdrop-blur-2xl bg-cyan-500 shadow transition-colors duration-200">
      {/* Logo */}
      <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-pink-500 cursor-pointer transition-colors duration-300">
        Riya Kaushik
      </div>

      {/* Links */}
      <div className="flex gap-8 text-lg text-amber-800 ">
        <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-pink-500 cursor-pointer transition-colors duration-300">
          Home
        </Link>
        <Link href="/about" className="text-amber-800 hover:text-green-500 text-2xl transition-colors duration-300 cursor-pointer no-underline">
          About
        </Link>
        <Link href="/skills" className="text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-pink-500 cursor-pointer transition-colors duration-300">
          Skills
        </Link>
        <Link href="/project" className="text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-pink-500 cursor-pointer transition-colors duration-300">
          Projects
        </Link>
        <Link href="/contact" className="text-2xl font-bold text-gray-800 dark:text-gray-100 hover:text-pink-500 cursor-pointer transition-colors duration-300">
          Contact
        </Link>
      </div>
    </nav>
  );
};
