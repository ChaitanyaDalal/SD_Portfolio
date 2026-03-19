"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Contact.module.css";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className={styles.contactSection} ref={ref}>
      <motion.div
        className={styles.ctaBox}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.noiseOverlay}></div>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            I'm available for full-time roles & freelance projects.
          </h2>
          <p className={styles.ctaSubtitle}>
            I thrive on crafting dynamic web applications, and delivering seamless user experiences.
          </p>
          <a href="mailto:chaitanyadalal100@gmail.com" className={styles.ctaButton}>
            Get In Touch <ArrowRight size={20} />
          </a>
        </div>
      </motion.div>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>CD</div>
        <div className={styles.footerText}>
          I'm Chaitanya - a full-stack developer, freelancer & problem solver. Thanks for checking out my site!
        </div>
        
        <div className={styles.footerLinksGrid}>
          <div className={styles.linkCol}>
            <h4>GENERAL</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </div>
          <div className={styles.linkCol}>
            <h4>CONNECT</h4>
            <a href="https://www.linkedin.com/in/chaitanyadalal/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/ChaitanyaDalal" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://x.com/TheChaitanya101" target="_blank" rel="noreferrer">Twitter / X</a>
          </div>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Chaitanya Dalal. All rights reserved. Built with Next.js & Framer Motion.
        </div>
      </footer>
    </section>
  );
}
