"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import styles from "./ProjectsPage.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const allProjects = [
  {
    num: "01",
    type: "WEB APP",
    date: "Q4 2024",
    title: "Doctor Appointment System",
    description: "A real-time web-based token system. Patients book appointments and get live token updates. Doctors manage queues, mark patients done/skipped, and control flow via a secure dashboard.",
    image: "/images/doc_token.png",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
    glow: "rgba(59, 130, 246, 0.3)",
    tech: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
    link: "https://github.com/ChaitanyaDalal/Doctor-Appointment-System",
  },
  {
    num: "02",
    type: "AI PLATFORM",
    date: "Q1 2025",
    title: "HyperTune — AI Fine-Tuning Platform",
    description: "A cutting-edge AI fine-tuning platform that automates model training with user-defined configs. Powered by Spheron's decentralised GPU network for scalable AI optimisation.",
    image: "/images/hack.png",
    gradient: "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
    glow: "rgba(5, 150, 105, 0.3)",
    tech: ["Python", "Flask", "PyTorch", "Hugging Face", "Spheron", "TailwindCSS"],
    link: "https://github.com/ChaitanyaDalal/HyperTune",
  },
  {
    num: "03",
    type: "AI BOT",
    date: "Q3 2024",
    title: "Minecraft Chatbot Integration",
    description: "An interactive Minecraft-themed chatbot powered by the Gemini API. Deployed on Render with a responsive frontend and plans for in-game player interaction features.",
    image: "/images/chatbot.png",
    gradient: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)",
    glow: "rgba(124, 58, 237, 0.3)",
    tech: ["Python", "Gemini API", "Render", "HTML", "CSS"],
    link: "https://iitbaba.onrender.com",
  },
  {
    num: "04",
    type: "HARDWARE",
    date: "Q2 2023",
    title: "Smart Card Door Security",
    description: "RFID smart card authentication system for door locks. Built with Raspberry Pi, Linux, and Python for physical access control.",
    image: "/images/placeholder.png",
    gradient: "linear-gradient(135deg, #7f1d1d 0%, #dc2626 100%)",
    glow: "rgba(220, 38, 38, 0.3)",
    tech: ["C++", "Python", "Raspberry Pi", "Linux", "RFID"],
    link: "#",
  },
];

function ProjectCard({ p, index }: { p: (typeof allProjects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt values
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useTransform(tiltY, [-100, 100], [4, -4]);
  const rotateY = useTransform(tiltX, [-100, 100], [-4, 4]);

  // Cursor-following circle — positioned relative to card top-left
  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    // Offset by half the circle size (45px) so it centres on the cursor
    cursorX.set(e.clientX - rect.left - 45);
    cursorY.set(e.clientY - rect.top - 45);
    // Tilt around card centre
    tiltX.set(e.clientX - rect.left - rect.width / 2);
    tiltY.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
    cursorX.set(-200);
    cursorY.set(-200);
    setHovered(false);
  }

  const isPlaceholder = p.image === "/images/placeholder.png";

  return (
    <motion.article
      className={styles.projectCard}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
    >
      {/* Meta row */}
      <div className={styles.projectMeta}>
        <div className={styles.metaLeft}>
          <span className={styles.metaNum}>{p.num}</span>
          <span className={styles.metaDash}>———</span>
          <span className={styles.metaType}>{p.type}</span>
        </div>
        <span className={styles.metaDate}>{p.date}</span>
      </div>

      {/* Title – bold sans-serif like reference */}
      <h2 className={styles.projectTitle}>{p.title}</h2>

      {/* Image card */}
      <motion.div
        ref={cardRef}
        className={styles.cardLink}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        <a
          href={p.link}
          target="_blank"
          rel="noreferrer"
          className={styles.imageBlock}
          style={{
            background: p.gradient,
            boxShadow: hovered
              ? `0 24px 60px ${p.glow}`
              : `0 8px 30px ${p.glow}`,
          }}
        >
          {/* Noise texture */}
          <div className={styles.noiseOverlay} />

          {/* Description + arrow */}
          <div className={styles.cardInfo}>
            <p className={styles.cardDesc}>{p.description}</p>
            <motion.div
              className={styles.cardArrowWrap}
              animate={hovered ? { x: 3, y: -3 } : { x: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={18} />
            </motion.div>
          </div>

          {/* VIEW DETAILS circle — follows the mouse cursor */}
          <motion.div
            className={styles.viewCircle}
            style={{ x: cursorX, y: cursorY }}
            animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.2, ease: "backOut" }}
          >
            <svg className={styles.viewSvg} viewBox="0 0 100 100">
              <defs>
                <path id={`cp-${p.num}`} d="M 50,50 m -30,0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0" />
              </defs>
              <motion.text
                fontSize="8"
                fill="white"
                letterSpacing="3"
                animate={{ rotate: 360 }}
                style={{ originX: "50px", originY: "50px" }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <textPath href={`#cp-${p.num}`}>VIEW DETAILS · VIEW DETAILS ·</textPath>
              </motion.text>
            </svg>
            <div className={styles.viewEye}>
              {/* Eye icon — matches reference */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                <circle cx="12" cy="12" r="3" fill="white" stroke="none" />
              </svg>
            </div>
          </motion.div>

          {/* Screenshot */}
          <div className={styles.imageWrapper}>
            {!isPlaceholder ? (
              <Image src={p.image} alt={p.title} fill className={styles.projectImage} unoptimized />
            ) : (
              <div className={styles.placeholderImg}>
                <span>CD</span>
                <p>Coming Soon</p>
              </div>
            )}
          </div>
        </a>
      </motion.div>

      {/* Tech pills – rectangular like reference */}
      <div className={styles.techStack}>
        {p.tech.map((t, i) => (
          <span key={i} className={styles.techPill}>{t}</span>
        ))}
      </div>
    </motion.article>
  );
}

export default function AllProjectsPage() {
  const leftCol = allProjects.filter((_, i) => i % 2 === 0);
  const rightCol = allProjects.filter((_, i) => i % 2 !== 0);

  return (
    <main className={styles.main}>
      <div className={styles.blueprintBg} />

      <div className={styles.container}>
        {/* Back nav */}
        <div className={styles.backNav}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={14} /> Back to home
          </Link>
        </div>

        {/* Page header – clean, minimal like reference */}
        <motion.div
          className={styles.pageHeader}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.overline}>CASE STUDIES</span>
          <h1 className={styles.mainTitle}>
            Curated <em className={styles.titleAccent}>Work</em>
          </h1>
        </motion.div>

        {/* Masonry grid */}
        <div className={styles.masonryGrid}>
          <div className={styles.gridCol}>
            {leftCol.map((p, i) => <ProjectCard key={p.num} p={p} index={i * 2} />)}
          </div>
          <div className={styles.gridCol} style={{ marginTop: "80px" }}>
            {rightCol.map((p, i) => <ProjectCard key={p.num} p={p} index={i * 2 + 1} />)}
          </div>
        </div>

        {/* Footer */}
        <motion.p
          className={styles.footerHint}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          More on{" "}
          <a href="https://github.com/ChaitanyaDalal" target="_blank" rel="noreferrer">GitHub ↗</a>
        </motion.p>
      </div>
    </main>
  );
}
