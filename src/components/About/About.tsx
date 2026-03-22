"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./About.module.css";
import dynamic from "next/dynamic";

const AboutScene = dynamic(() => import("./AboutScene"), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: '#050505' }} />
});

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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
            I hold an Advanced Diploma in Website Engineering and I'm currently pursuing a Minor in CSE from IIT Mandi.
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

        <div className={styles.bentoContainer}>


          <motion.div
            className={styles.photoCard}
            style={{ backgroundColor: '#050505', position: 'relative', overflow: 'hidden' }}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.glassPhoto} style={{ backgroundColor: '#050505', height: '100%', width: '100%' }}>
              <img
                src="/images/DP.jpg"
                alt="Chaitanya"
                className={styles.dpImage}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="eager"
                fetchPriority="high"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              <div className={styles.glassShimmer} />
              <div className={styles.floatingTag}>V-2025</div>
            </div>
          </motion.div>

          {/* Bottom Card: Audio Core */}
          <motion.div
            className={styles.gemCard}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className={styles.gemOverlay}>
              <span style={{ color: '#fff', fontSize: '0.65rem' }}>3D CORE POWERED BY REACT THREE FIBER</span>
            </div>

            <div className={styles.gemContainer}>
              {hasMounted && <AboutScene />}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
