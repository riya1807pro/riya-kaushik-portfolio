"use client";
import SectionTemplate from "../../components/SectionTamplate.jsx";
import projects from "../data/projects.json";
import ProjectCard from "../../components/projectCard.jsx";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <SectionTemplate title="Projects" image="/projects.svg">
      <section className="min-w-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-pink-50 to-purple-100 px-10 ml-14 py-8">
        <div className="w-full grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center ">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full flustify-center"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </SectionTemplate>
  );
}