"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Skills.module.css";
import Image from "next/image";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Flask", icon: "🌶️" },
    { name: "PHP", icon: "🐘" },
    { name: "JavaScript", icon: "🟨" },
    { name: "HTML / CSS", icon: "🎨" },
    { name: "Git", icon: "♦️" },
    { name: "GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "Linux", icon: "🐧" },
    { name: "Render", icon: "☁️" },
  ];

  return (
    <section id="skills" className={styles.skillsSection} ref={ref}>
      <motion.div
        className={styles.bentoGrid}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Box 1: Collaboration */}
        <div className={`${styles.bentoBox} ${styles.collaborationBox}`}>
          <div className={styles.ringsBg}>
            <div className={styles.ring}></div>
            <div className={styles.ring}></div>
            <div className={styles.ring}></div>
          </div>
          <div className={styles.avatarGlowWrapper}>
            <div className={styles.avatarImg}>
              <Image src="/images/dp.jpg" alt="Me" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
          </div>
          <div className={styles.collabText}>
            <span className={styles.overline}>COLLABORATION</span>
            <p>Open communication, async updates, zero surprises</p>
          </div>
        </div>

        {/* Box 4: Tech Stack (Tall Right Column) */}
        <div className={`${styles.bentoBox} ${styles.techBox}`}>
          <div className={styles.techGridBg}></div>
          <div className={styles.techContent}>
            <span className={styles.overline}>TECH STACK</span>
            <h3>Tools I ship production code with</h3>

            <div className={styles.pillsContainer}>
              {techStack.map((tech, i) => (
                <div key={i} className={styles.techPill}>
                  <span className={styles.techIcon}>{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>

            <div className={styles.bottomGraphic}>
              <div className={styles.fakeWindow}>
                <div className={styles.windowHeader}>
                  <span className={styles.dot}></span><span className={styles.dot}></span><span className={styles.dot}></span>
                  <div className={styles.urlBar}>chaitanyadalal.me</div>
                </div>
                <div className={styles.windowBody}>
                  <div className={styles.searchIcon}>🔍</div>
                  <h4>Built to Perform.</h4>
                  <p>Websites that impact your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Box 2: Timezones */}
        <div className={`${styles.bentoBox} ${styles.timezoneBox}`}>
          <div className={styles.timezoneText}>
            <p className="serifItalic">Flexible with time</p>
            <p className="serifItalic">zone communications</p>
          </div>
          <div className={styles.badges}>
            <span className={styles.badge}>🇬🇧 UK</span>
            <span className={styles.badge} style={{ borderColor: 'var(--primary)' }}>🇮🇳 INDIA</span>
            <span className={styles.badge}>🇺🇸 USA</span>
          </div>
          {/* Glowing Fake Globe */}
          <div className={styles.globeWrapper}>
            <div className={styles.earthGlow}></div>
          </div>
        </div>

        {/* Box 3: Let's Work Together */}
        <div className={`${styles.bentoBox} ${styles.workBox}`}>
          <div className={styles.wingsLogo}>
            <div className={styles.wingLeft}></div>
            <div className={styles.centerLogo}>CD</div>
            <div className={styles.wingRight}></div>
          </div>
          <p className={styles.workTitle}>Let's work together <br /> on your next project</p>
          <a href="mailto:chaitanyadalal100@gmail.com" className={styles.emailBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
            chaitanyadalal100@gmail.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
