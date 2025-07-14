"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return "loading...";

  return (
    <nav className="fixed w-full top-0 z-50 px-8 py-4 
      bg-gradient-to-r from-[#0f0c29]/60 via-[#302b63]/60 to-[#24243e]/60 
      backdrop-blur-xl shadow-lg flex justify-between items-center">

      {/* Left logo */}
      <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 tracking-widest cursor-pointer">
        Riya
      </div>

      {/* Hamburger menu for small screens */}
      <div className="lg:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Links for large screen */}
      <div className="hidden lg:flex gap-8 text-lg font-semibold">
        <NavLinks />
      </div>

      {/* Toggle links for small screen */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full flex flex-wrap justify-center gap-6 py-4 
          bg-gradient-to-r from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/80 backdrop-blur-lg">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

// Extracted links for reuse
const NavLinks = () => (
  <>
    <LinkItem href="/" color="pink-400">Home</LinkItem>
    <LinkItem href="/about" color="purple-400">About</LinkItem>
    <LinkItem href="/skills" color="indigo-400">Skills</LinkItem>
    <LinkItem href="/project" color="green-400">Projects</LinkItem>
    <LinkItem href="/contact" color="yellow-400">Contact</LinkItem>
    <LinkItem href="/resume" color="cyan-400">Resume</LinkItem>
  </>
);

// Reusable link item
const LinkItem = ({ href, color, children }) => (
  <Link href={href} className={`hover:text-${color} hover:underline underline-offset-4 
    transition duration-300 scale-100 hover:scale-105 text-white`}>
    {children}
  </Link>
);