"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import AudioControls from "../Navigation/AudioControls";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/projects" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.navbarWrapper}>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={styles.navbar}
      >
        <div className={styles.container}>
          <div className={styles.links}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.name} href={link.href} className={`${styles.navLink} ${isActive ? styles.active : ""}`}>
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className={styles.indicator}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className={styles.navbarRight}>
            <AudioControls />
            <Link href="/contact" className={styles.ctaButton}>
              Book a Call
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
