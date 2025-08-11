"use client";
import { motion } from "framer-motion";

export default function SectionTemplate({ title, image, children }) {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 px-4 py-16">
      <motion.img
        src={image}
        alt={title}
        className="w-40 sm:w-56 md:w-64 lg:w-72 mb-8 rounded-2xl shadow-2xl object-contain border-4 border-white"
        whileHover={{ scale: 1.08, rotate: 2 }}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      />
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text text-center drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <div className="w-full max-w-4xl bg-white/80 rounded-2xl shadow-xl p-6 sm:p-10 flex flex-col gap-6 items-center justify-center transition-all">
        {children}
      </div>
    </section>
  );
}