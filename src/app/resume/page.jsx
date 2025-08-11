"use client"
import My_Resume from "../../components/my-resume"
const Resume = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 text-gray-800 px-6 py-16 rounded-3xl shadow-lg">
    <img src="/resume.pdf" alt="Resume" className="w-64 h-64 mb-8 rounded-2xl shadow-lg object-contain" />
    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">Resume</h1>
    <div className="w-full max-w-4xl">
      <My_Resume />
    </div>
  </section>
);
export default Resume;