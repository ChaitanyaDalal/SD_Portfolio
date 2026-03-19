"use client";

import styles from "../projects/ProjectsPage.module.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ContactPage() {
  return (
    <main className={styles.main}>
      <div className={styles.blueprintBg}></div>
      <div className={styles.container}>
        <div className={styles.backNav}>
          <Link href="/" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to home
          </Link>
        </div>

        <div className={styles.pageHeader}>
          <span className={styles.overline}>SAY HELLO</span>
          <h1 className={styles.mainTitle}>
            Contact <span className="serifItalic" style={{ color: "var(--accent)" }}>Me</span>
          </h1>
        </div>
        
        <div style={{color: 'var(--textDark)', textAlign: 'center', fontSize: '1.2rem'}}>
          (Contact page content placeholder - we'll build out your calendar/form here!)
        </div>
      </div>
    </main>
  );
}
