"use client"
import { useEffect, useState } from "react";

const Hero = () => {
  const [projects, setProjects] = useState(0);
  const [skills, setSkills] = useState(0);

  useEffect(() => {
    let p = 0, s = 0;
    const interval = setInterval(() => {
      if (p < 20) p++;
      if (s < 10) s++;
      setProjects(p);
      setSkills(s);
      if (p === 20 && s === 10) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 text-gray-800 rounded-3xl shadow-2xl transition-all duration-500 pt-20 md:pt-0  md:scale-100">
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <p className="text-4xl md:text-7xl font-bold mb-6 tracking-wide text-center">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
            R
          </span>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
            i
          </span>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
            y
          </span>
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text drop-shadow-lg">
            a&nbsp;Kaushik
          </span>
        </p>
        <p className="text-2xl mb-10 font-medium text-gray-700">
          Frontend Developer | ReactJS | Tailwind
        </p>
        <div className="flex gap-16 text-4xl font-bold">
          <div className="flex flex-col items-center">
            <span className="text-pink-500 transition-all duration-300">{projects}+</span>
            <p className="text-lg mt-2 text-gray-700">Projects</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-indigo-500 transition-all duration-300">{skills}+</span>
            <p className="text-lg mt-2 text-gray-700">Skills</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center px-8 py-16">
        <img
          src="/hero.svg"
          alt="Hero Illustration"
          className="w-full max-w-lg h-auto rounded-3xl shadow-2xl transition-all duration-500 object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;