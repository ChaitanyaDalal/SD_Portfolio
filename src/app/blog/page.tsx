"use client";

import styles from "../projects/ProjectsPage.module.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
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
          <span className={styles.overline}>THOUGHTS & IDEAS</span>
          <h1 className={styles.mainTitle}>
            My <span className="serifItalic" style={{ color: "var(--accent)" }}>Blog</span>
          </h1>
        </div>
        
        <div style={{color: 'var(--textDark)', textAlign: 'center', fontSize: '1.2rem'}}>
          (Blog page content placeholder - your writing will go here!)
        </div>
      </div>
    </main>
  );
}
