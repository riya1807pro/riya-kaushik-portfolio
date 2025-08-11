"use client";
const ProjectCard = ({ project }) => (
  <div className="w-72 bg-white/80 border border-purple-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
    <img src={project.image || '/placeholder.png'} alt={project.title} className="w-full h-36 object-cover border-b border-purple-100" />
    <div className="p-4 flex flex-col gap-2 flex-1 h-52">
      <h2 className="text-lg font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">{project.title}</h2>
      <div className="text-gray-600 text-sm max-h-16 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-purple-50 rounded">
        {project.description}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.skills.map((skill, idx) => (
          <span key={idx} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">{skill}</span>
        ))}
      </div>
      <div className="flex gap-2 mt-2">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-pink-200 to-purple-200 text-gray-800 font-semibold shadow transition-all hover:scale-105 hover:bg-opacity-80 text-xs">
          GitHub
        </a>
        <a href={project.live} target="_blank" rel="noopener noreferrer"
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-200 to-pink-200 text-gray-800 font-semibold shadow transition-all hover:scale-105 hover:bg-opacity-80 text-xs">
          Live
        </a>
      </div>
    </div>
  </div>
);
export default ProjectCard;