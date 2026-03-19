"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./IntroSequence.module.css";

const codeSnippets = [
  "[OK] Booting System Kernel...",
  "Loading neural pathways...",
  "Mounting /dev/sda1...",
  "Establishing Secure Connection...",
  "Decrypting assets...",
  "Bypassing mainframe security...",
  "Initializing UI Components...",
  "Compiling React nodes...",
  "Fetching 3D Meshes...",
  "Executing sequence 0x7F8B..."
];

export default function IntroSequence({ onComplete, onPreComplete }: { onComplete: () => void, onPreComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "glitch" | "black" | "macbook">("loading");
  const [codes, setCodes] = useState<{ id: number, text: string, top: string, left: string }[]>([]);
  const [targetScale, setTargetScale] = useState(2);

  useEffect(() => {
    // Dynamic Javascript precision: Calculating the exact scale so the Macbook's inner screen exactly blankets the window.
    const calculateScale = () => {
      const scaleX = window.innerWidth / 976; // laptop width is 1000px, screen inner width is 976px
      const scaleY = window.innerHeight / 576; // laptop height is 600px, screen inner height is 576px
      // We scale slightly past 1.0 to ensure the black bezels are fully off-screen!
      setTargetScale(Math.max(scaleX, scaleY) * 1.02); 
    };
    calculateScale();
    
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, []);

  useEffect(() => {
    if (phase === "loading") {
      // 5-8 seconds duration. 60 steps * 100ms = 6.0 seconds
      const totalSteps = 60; 
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const currentProgress = Math.floor((currentStep / totalSteps) * 100);
        
        setProgress(currentProgress > 100 ? 100 : currentProgress);

        // Add random code snippets to background
        if (Math.random() > 0.4) {
          setCodes(prev => [
            ...prev.slice(-12),
            {
              id: Date.now() + Math.random(),
              text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
              top: `${Math.floor(Math.random() * 80 + 10)}%`,
              left: `${Math.floor(Math.random() * 70 + 10)}%`
            }
          ]);
        }

        if (currentStep >= totalSteps) {
          clearInterval(interval);
          setTimeout(() => setPhase("glitch"), 200);
        }
      }, 100); 
      return () => clearInterval(interval);
    }

    if (phase === "glitch") {
      setTimeout(() => setPhase("black"), 600); // 0.6s of hardcore glitch distortion
    }

    if (phase === "black") {
      setTimeout(() => setPhase("macbook"), 2000); // Pitch black for exactly 2 seconds
    }

    if (phase === "macbook") {
      setTimeout(() => {
        onPreComplete(); // Load the heavy 3D canvas 1.5s early!
      }, 1500);

      setTimeout(() => {
        onComplete();
      }, 3200); 
    }
  }, [phase, onComplete]);



  return (
    <div className={styles.introContainer}>
      <AnimatePresence>
        {(phase === "loading" || phase === "glitch") && (
          <motion.div 
            key="loading"
            className={`${styles.loadingScreen} ${phase === "glitch" ? styles.glitchActive : ""}`}
            exit={{ opacity: 0 }}
          >
            {/* Background CMD Snippets */}
            {codes.map((code) => (
              <div 
                key={code.id} 
                className={styles.cmdSnippet} 
                style={{ top: code.top, left: code.left }}
              >
                {code.text}
              </div>
            ))}

            <div className={`${styles.loadingCenter} ${phase === "glitch" ? styles.glitchDistort : ""}`}>
              <div className={styles.loadingText}>SYSTEM BOOT...</div>
              <div className={styles.barContainer}>
                <div className={styles.barFill} style={{ width: `${Math.min(progress, 100)}%` }}></div>
              </div>
              <div className={styles.percentage}>{Math.min(progress, 100)}%</div>
            </div>

            {/* Glitch Overlay Clones targeting the primary progress bar */}
            {phase === "glitch" && (
              <>
                <div className={`${styles.loadingCenter} ${styles.glitchClone1}`}>
                  <div className={styles.loadingText}>SYSTEM BOOT...</div>
                  <div className={styles.barContainer}>
                    <div className={styles.barFill} style={{ width: `100%` }}></div>
                  </div>
                  <div className={styles.percentage}>100%</div>
                </div>
                <div className={`${styles.loadingCenter} ${styles.glitchClone2}`}>
                  <div className={styles.loadingText}>SYSTEM BOOT...</div>
                  <div className={styles.barContainer}>
                    <div className={styles.barFill} style={{ width: `100%` }}></div>
                  </div>
                  <div className={styles.percentage}>100%</div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "black" && (
        <div className={styles.blackScreen}></div>
      )}

      {phase === "macbook" && (
        <motion.div 
          className={styles.macbookWrapper}
          initial={{ scale: 0.1, y: 150, opacity: 0 }}
          animate={{ scale: [0.1, 0.4, targetScale], y: [150, 0, 0], opacity: [0, 1, 1] }}
          transition={{ duration: 3.2, times: [0, 0.5, 1], ease: [0.6, 0.01, -0.05, 0.9] }}
        >
          <div className={styles.macbook}>
            <div className={styles.screen}>
              <div className={styles.screenInner}>
                <div className={styles.heroPreviewImageWrapper}></div>
              </div>
            </div>
            <div className={styles.keyboard}></div>
          </div>
        </motion.div>
      )}



      <button 
        onClick={() => { onPreComplete(); onComplete(); }} 
        className={styles.skipBtn}
      >
        Skip Intro
      </button>
    </div>
  );
}
