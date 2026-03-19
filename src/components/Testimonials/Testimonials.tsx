"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "He's Not Just a Developer, He's a True Partner",
    text: "Chaitanya is open-minded, curious, and deeply invested in the projects he chooses to work on. He takes your product vision and brings it to life.",
    name: "Sarah Chen",
    title: "Product Owner",
    color: "#6b21a8" // purple glow
  },
  {
    quote: "An Artist with Code Who Delivers Real Results",
    text: "He is constantly advancing his craft, ensuring our implementation adheres to the newest standards for speed and efficiency.",
    name: "Michael Davis",
    title: "Founder / CTO",
    color: "#1d4ed8" // blue glow
  },
  {
    quote: "Simply the best developer I've worked with.",
    text: "He quite literally ran with our design requirements, translating everything into a robust, accessible platform. Super happy with the final product.",
    name: "Jennifer Wilson",
    title: "Agency Founder",
    color: "#0f766e" // teal glow
  },
  {
    quote: "Exceptional Problem Solver",
    text: "Whenever we hit a technical roadblock, Chaitanya was the first to dive in and untangle the mess. His ability to debug complex systems is unmatched.",
    name: "Raj Patel",
    title: "Lead Engineer",
    color: "#c2410c" // orange glow
  },
  {
    quote: "Fast, Reliable, and Pixel-Perfect",
    text: "I was blown away by how quickly the UI went from Figma to functional code. Not a single padding or margin was out of place. Highly recommended.",
    name: "Emily Thorne",
    title: "UI/UX Designer",
    color: "#be185d" // pink glow
  },
  {
    quote: "A Visionary Builder",
    text: "Working with Chaitanya on our AI integration felt effortless. He understands both the business logic and the technical depth required to scale apps.",
    name: "David Kim",
    title: "Startup Co-founder",
    color: "#16a34a" // green glow
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className={styles.testimonialsSection} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.overline}>TESTIMONIALS</p>
        <h2 className={styles.title}>
          Word on the street <span className="serifItalic" style={{ color: "var(--accent)" }}>about me</span>
        </h2>
      </motion.div>

      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* First Set */}
          <div className={styles.marqueeSet}>
            {testimonials.map((test, idx) => (
              <div 
                key={`a-${idx}`} 
                className={styles.card}
                style={{ '--glowColor': test.color } as React.CSSProperties}
              >
                <div className={styles.cardInner}>
                  <h3 className={styles.quoteTitle}>{test.quote}</h3>
                  <p className={styles.quoteText}>{test.text}</p>
                  <div className={styles.author}>
                    <div className={styles.avatarPlaceholder} />
                    <div className={styles.authorInfo}>
                      <h4>{test.name}</h4>
                      <p>{test.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicated Set for infinite duplicate scroll */}
          <div className={styles.marqueeSet}>
            {testimonials.map((test, idx) => (
              <div 
                key={`b-${idx}`} 
                className={styles.card}
                style={{ '--glowColor': test.color } as React.CSSProperties}
              >
                <div className={styles.cardInner}>
                  <h3 className={styles.quoteTitle}>{test.quote}</h3>
                  <p className={styles.quoteText}>{test.text}</p>
                  <div className={styles.author}>
                    <div className={styles.avatarPlaceholder} />
                    <div className={styles.authorInfo}>
                      <h4>{test.name}</h4>
                      <p>{test.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
