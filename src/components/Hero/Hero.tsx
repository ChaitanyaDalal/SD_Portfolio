"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import ThreeScene from "./ThreeScene";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Optional: You can keep your ThreeScene beneath the text or place it somewhere else */}
      <ThreeScene />

      {/* Bottom Glowing gradient sphere/planet effect */}
      <div className={styles.bottomGlow}></div>

      <div className={styles.content} style={{ zIndex: 1, position: "relative" }}>

        <motion.div
          className={styles.pillsWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.statusPill}>
            <span className={styles.pulseDot}></span>
            <span>Available for new opportunities</span>
          </div>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Code that <span className="serifItalic">feels designed.</span>
          <br />
          Engineering that <span className="serifItalic">actually ships.</span>
        </motion.h1>

        <motion.div
          className={styles.introBadge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>Hello, I'm</span>
          <span style={{ fontWeight: "bold", color: "var(--primary)", fontSize: "1.2rem", marginLeft: "0.5rem", marginRight: "0.5rem", fontFamily: "'Playfair Display', serif" }}>Chaitanya</span>
          <span>a Full Stack Developer</span>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className={styles.primaryBtn}>
            Let's Connect <ArrowRight size={18} />
          </a>
          <a href="mailto:chaitanyadalal100@gmail.com" className={styles.secondaryLink}>
            <Mail size={18} /> chaitanyadalal100@gmail.com
          </a>
        </motion.div>
      </div>

    </section>
  );
}
