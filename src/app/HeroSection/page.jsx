import React from 'react'
import { FaGithub, FaLinkedin, FaFileDownload, FaArrowRight } from "react-icons/fa";
import ResumeButton from "../../components/ResumeButton"


function HeroSection() {
  return (
    <div>
       <div className="w-screen h-screen flex flex-col md:flex-row items-center justify-center px-6 py-2
  ">
      
      {/* Left Image */}
      <div className="flex justify-center md:w-1/2 mb-10 md:mb-0">
        <img 
          src="/hero.svg" 
          alt="hero image" 
          className="w-72 h-72 md:w-[400px] md:h-[400px] object-contain drop-shadow-2xl animate-pulse" 
          />
      </div>

      {/* Right Text & Icons */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 space-y-6">
        <p 
    className="text-[84px] md:text-[100px] font-semibold text-white
    bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text ">
          Riya Kaushik
        </p>

         <h2 className=" md:text-3xl text-white font-semibold">
           Frontend Developer | React.js Specialist 🚀<br/>
         </h2>
        <h5 className=" md:text-3xl text-white font-semibold">
          - a frontend developer crafting clean, responsive web apps with React, Next.js, and Tailwind CSS.
        </h5>
        
  <ResumeButton resumeUrl="/resume.pdf" resumeName="Riya_Kaushik_Resume.pdf" className="mt-8" />

  
        <div className="flex space-x-6 mt-1 text-white" >
          <a href="https://github.com/riya1807pro" target="_blank" 
            className="text-white hover:text-pink-600 text-4xl transition transform hover:scale-125">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/riyakaushik-webdev" target="_blank" 
            className="text-white hover:text-purple-600 text-4xl transition transform hover:scale-125">
            <FaLinkedin />
          </a>
          <a href="/resume.pdf" download
            className="text-white hover:text-indigo-600 text-4xl transition transform hover:scale-125">
            <FaFileDownload />
          </a>
          <a href="/project"
            className="text-white hover:text-green-600 text-4xl transition transform hover:scale-125">
            <FaArrowRight />
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection
