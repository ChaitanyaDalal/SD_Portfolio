"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import IntroSequence from "@/components/Intro/IntroSequence";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("introSeen") || (typeof window !== "undefined" && window.innerWidth < 1024)) {
      setIntroDone(true);
      setHeroVisible(true);
    }
  }, []);

  const finishIntro = () => {
    setIntroDone(true);
    sessionStorage.setItem("introSeen", "true");
  };

  const preFinishIntro = () => {
    setHeroVisible(true);
  };

  return (
    <main>
      <AnimatePresence>
        {!introDone && (
          <motion.div key="intro" exit={{ opacity: 0 }} transition={{ duration: 0.4 }} style={{ position: "relative", zIndex: 9999 }}>
            <IntroSequence onComplete={finishIntro} onPreComplete={preFinishIntro} />
          </motion.div>
        )}
      </AnimatePresence>
      
      {heroVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Testimonials />
          <Contact />
        </motion.div>
      )}
    </main>
  );
}
