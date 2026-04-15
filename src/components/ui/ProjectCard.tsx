"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { useState } from "react";

interface ProjectProps {
  project: {
    name: string;
    tools: string[];
    role: string;
    description: string;
    liveUrl?: string;
    github?: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative w-full h-full rounded-2xl overflow-hidden bg-white border border-slate-200/80"
      style={{
        boxShadow: '0 2px 16px -4px rgba(100,120,150,0.08), 0 1px 4px -1px rgba(100,120,150,0.06)',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -4,
        boxShadow: '0 16px 40px -8px rgba(74,163,130,0.15), 0 4px 12px -4px rgba(74,163,130,0.1)',
      }}
    >
      {/* Top gradient accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-[#4aa382] via-[#c46482] to-[#8264c4]" />

      {/* Header — editor controls */}
      <div className="px-5 py-3 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-rose-400/70" />
          <div className="h-3 w-3 rounded-full bg-amber-400/70" />
          <div className="h-3 w-3 rounded-full bg-emerald-400/70" />
        </div>

        <p className="text-[#4aa382] font-mono font-medium text-sm truncate max-w-[300px]">
          {project.name}.js
        </p>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#4aa382] transition-colors"
              aria-label="View live site"
            >
              <FiExternalLink size={15} />
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#4aa382] transition-colors"
              aria-label="View source code"
            >
              <FiGithub size={15} />
            </a>
          )}
        </div>
      </div>

      {/* Code content */}
      <div className="p-5 bg-[#f8f9fc]">
        <pre className="font-mono text-[12px] md:text-[13px] whitespace-pre-wrap break-words leading-relaxed">
          <code>
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span className="text-[#7c52c8]">const</span>
              <span className="mx-2 text-slate-700">project</span>
              <span className="text-[#c46482]">=</span>
              <span className="text-slate-400 ml-2">{"{"}</span>
            </motion.div>

            {/* name */}
            <motion.div
              className="ml-5 my-1.5"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <span className="text-[#2d6fa8]">name</span>
              <span className="text-slate-400 mx-1">:</span>
              <span className="text-slate-400">&apos;</span>
              <span className="text-[#c46482]">{project.name}</span>
              <span className="text-slate-400">&apos;,</span>
            </motion.div>

            {/* tools */}
            <motion.div
              className="ml-5 my-1.5"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <span className="text-[#2d6fa8]">tools</span>
              <span className="text-slate-400 mx-1">: [</span>
              <div className="inline flex-wrap">
                {project.tools.map((tag, i) => (
                  <span key={i}>
                    <span className="text-[#c46482]">&apos;{tag}&apos;</span>
                    {i < project.tools.length - 1 && (
                      <span className="text-slate-400">, </span>
                    )}
                  </span>
                ))}
              </div>
              <span className="text-slate-400">],</span>
            </motion.div>

            {/* role */}
            <motion.div
              className="ml-5 my-1.5"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <span className="text-[#2d6fa8]">myRole</span>
              <span className="text-slate-400 mx-1">:</span>
              <span className="text-slate-400">&apos;</span>
              <span className="text-[#e08030]">{project.role}</span>
              <span className="text-slate-400">&apos;,</span>
            </motion.div>

            {/* description */}
            <motion.div
              className="ml-5 my-1.5"
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <span className="text-[#2d6fa8]">description</span>
              <span className="text-slate-400 mx-1">:</span>
              <span className="text-slate-400">&apos;</span>
              <span
                className="text-[#4aa382] break-words"
                style={{ wordBreak: "break-word" }}
              >
                {project.description}
              </span>
              <span className="text-slate-400">&apos;,</span>
            </motion.div>

            {/* closing */}
            <motion.div
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <span className="text-slate-400">{"}"}</span>
            </motion.div>
          </code>
        </pre>
      </div>

      {/* Hover overlay */}
      {project.liveUrl && project.liveUrl !== "#" && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: 'rgba(248,249,252,0.94)',
            backdropFilter: 'blur(4px)',
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? 'auto' : 'none',
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#4aa382] text-white font-medium rounded-xl flex items-center gap-2 hover:bg-[#3d8a6e] transition-colors shadow-sm text-sm"
            >
              <FiExternalLink size={14} />
              View Project
            </a>
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-colors shadow-sm text-sm"
              >
                <FiGithub size={14} />
                View Code
              </a>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
