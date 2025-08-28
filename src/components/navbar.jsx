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

    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Riya-Kaushik-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <nav
      className="fixed w-full top-0 z-50 px-8 py-4 
      bg-gradient-to-r from-black/70 via-blue-900/70 to-gray-900/70
      backdrop-blur-lg shadow-xl flex justify-between items-center border-b border-blue-500/30"
    >
      {/* Left logo */}
      <div className="text-3xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 
        tracking-wider cursor-pointer drop-shadow-md">
        Riya Kaushik
      </div>

      {/* Hamburger menu for small screens */}
      <div
        className="lg:hidden text-white text-3xl cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Links for large screen */}
      <div className="hidden lg:flex gap-8 text-lg font-semibold">
        <NavLinks />
      </div>

      {/* Toggle links for small screen */}
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full flex flex-col items-center gap-6 py-6 
          bg-gradient-to-b from-black/95 via-blue-950/95 to-gray-900/95 
          backdrop-blur-xl shadow-lg border-t border-blue-500/20"
        >
          <NavLinks />
<button onClick={()=>handleDownload()} className="absolute top-0 right-0">Resume</button>

        </div>
        
      )}
    </nav>
  );
};

// Extracted links for reuse
const NavLinks = () => (
  <>
    <LinkItem href="#home" color="pink-400">Home</LinkItem>
    <LinkItem href="#about" color="purple-400">About</LinkItem>
    <LinkItem href="#skills" color="indigo-400">Skills</LinkItem>
    <LinkItem href="#projects" color="green-400">Projects</LinkItem>
    <LinkItem href="#contact" color="yellow-400">Contact</LinkItem>
  </>
);

// Reusable link item
const LinkItem = ({ href, color, children }) => (
  <Link
    href={href}
    className={`relative text-white transition duration-300 hover:scale-110`}
  >
    <span className={`hover:text-${color} drop-shadow-[0_0_6px_rgba(255,255,255,0.7)]`}>
      {children}
    </span>
  </Link>
);
