"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className={styles.about} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.overline}>KNOW ABOUT ME</p>
        <h2 className={styles.title}>
          Full-Stack Developer and <br />
          a little bit of <span className="serifItalic" style={{ color: "var(--accent)" }}>everything</span>
        </h2>
      </motion.div>

      <div className={styles.content}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            I'm Chaitanya, a proactive full-stack developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js.
          </p>
          <p>
            In addition to pursuing a Minor in CSE from IIT Mandi, I hold an Advanced Diploma in Website Engineering. When I'm not immersed in code, I'm exploring new ideas and staying curious.
          </p>
          <p>
            I believe in waking up each day eager to make a difference!
          </p>
          <div className={styles.socialAuth}>
            <a href="https://www.linkedin.com/in/chaitanyadalal/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/ChaitanyaDalal" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://x.com/TheChaitanya101" target="_blank" rel="noreferrer">X ↗</a>
          </div>
        </motion.div>

        {/* Bento Grid Glowing 3D element placeholder */}
        <motion.div
          className={styles.bentoGraphic}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.glowingBorder}>
            <div className={styles.bentoLogoWrapper}>
              {/* Replace with a 3D Canvas later! */}
              <div className={styles.fakeLogo}>CD</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
