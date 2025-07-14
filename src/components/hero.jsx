"use client"
import { useEffect, useState } from "react";

const Hero = () => {
  const [projects, setProjects] = useState(0);
  const [skills, setSkills] = useState(0);

  // counter animation
  useEffect(() => {
    let p = 0;
    let s = 0;

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
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">
      <h1 className="text-7xl font-extrabold mb-4">Riya Kaushik</h1>
      <p className="text-xl mb-8">Frontend Developer | ReactJS | Tailwind</p>

      <div className="flex gap-12 text-4xl font-bold">
        <div className="flex flex-col items-center">
          <span className="text-pink-400">{projects}+</span>
          <p className="text-base mt-2">Projects</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-cyan-400">{skills}+</span>
          <p className="text-base mt-2">Skills</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;