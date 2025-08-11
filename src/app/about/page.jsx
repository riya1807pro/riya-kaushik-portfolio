"use client";
import SectionTemplate from "../../components/SectionTamplate.jsx";

export default function About() {
  return (
    <SectionTemplate title="About Me" image="/about.svg">
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 text-gray-800 px-6 py-16 rounded-3xl shadow-lg">
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Passionate frontend developer with expertise in React, Next.js, and Tailwind CSS.<br />
          I love building beautiful, responsive web apps with a focus on user experience and clean code.
        </p>
      </section>
    </SectionTemplate>
  );
}