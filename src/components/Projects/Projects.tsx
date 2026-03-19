"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Projects.module.css";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

const projectData = [
  {
    title: "Doctor Appointment System",
    description: "A real-time web-based token system where patients book appointments and get live token updates. Doctors manage queues, mark patients done/skipped, and control flow via a secure dashboard.",
    image: "/images/doc_token.png",
    link: "https://github.com/ChaitanyaDalal/Doctor-Appointment-System",
    github: "https://github.com/ChaitanyaDalal/Doctor-Appointment-System",
    tags: ["PHP", "Real-time", "MySQL", "JavaScript"],
    color: "rgba(59, 130, 246, 0.15)"
  },
  {
    title: "HyperTune — AI Fine-Tuning Platform",
    description: "A cutting-edge AI fine-tuning platform that automates model training with user-defined configs. Powered by Spheron's decentralised GPU network for scalable AI optimisation.",
    image: "/images/hack.png",
    link: "https://github.com/ChaitanyaDalal/HyperTune",
    github: "https://github.com/ChaitanyaDalal/HyperTune",
    tags: ["Python", "Flask", "PyTorch", "Hugging Face", "Spheron"],
    color: "rgba(16, 185, 129, 0.15)"
  },
  {
    title: "Minecraft Chatbot Integration",
    description: "An interactive Minecraft-themed chatbot powered by the Gemini API. Deployed on Render with a responsive frontend and plans for in-game player interaction.",
    image: "/images/chatbot.png",
    link: "https://iitbaba.onrender.com",
    github: "",
    tags: ["Python", "Gemini API", "Render", "HTML/CSS"],
    color: "rgba(168, 85, 247, 0.15)"
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className={styles.projectsSection} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>
          Curated <span className="serifItalic" style={{ color: "var(--accent)", marginLeft: "0.5rem" }}>work</span>
        </h2>
      </motion.div>

      <div className={styles.projectList}>
        {projectData.map((project, idx) => {
          return (
            <motion.div 
              key={idx} 
              className={styles.projectCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div 
                className={styles.imageBlock} 
                style={{ backgroundColor: project.color, boxShadow: `0 0 80px ${project.color}` }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.projectImage}
                    unoptimized
                  />
                </div>
              </div>

              <div className={styles.contentBlock}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                
                <ul className={styles.projectTags}>
                  {project.tags.map((tag, tagIdx) => (
                    <li key={tagIdx} className={styles.tagPill}>{tag}</li>
                  ))}
                </ul>

                <div className={styles.projectLinks}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className={styles.iconLink}>
                      <Github size={20} /> Code
                    </a>
                  )}
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noreferrer" className={styles.iconLink}>
                      <ExternalLink size={20} /> Live Site
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
         className={styles.seeAllContainer}
         initial={{ opacity: 0, y: 30 }}
         animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
         transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Link href="/projects" className={styles.seeAllLink}>
          View full archive <ArrowRight size={20} />
        </Link>
      </motion.div>
    </section>
  );
}
