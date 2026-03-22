"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Correct Path: /audio/music.mp3
    const audio = new Audio("/audio/music.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {
          // Audio play requires user interaction; will start on first click
        });
        setIsPlaying(true);
      }
    };

    window.addEventListener("click", startAudio);

    return () => {
      window.removeEventListener("click", startAudio);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="audio-control-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px' }}>

      {/* Sound Visualizer Bars */}
      <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '12px', width: '20px' }}>
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            animate={!isMuted && isPlaying ? {
              height: [2, 12, 4, 10, 2],
            } : { height: 2 }}
            transition={{
              repeat: Infinity,
              duration: 0.4 + i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              width: '2px',
              backgroundColor: isMuted ? 'rgba(255,255,255,0.1)' : '#00f7ff',
              borderRadius: '1px'
            }}
          />
        ))}
      </div>

      <button
        onClick={toggleMute}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: isMuted ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.9)',
          display: 'flex',
          alignItems: 'center',
          padding: '4px'
        }}
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      <style jsx>{`
        .audio-control-wrapper {
          margin-left: 15px;
          padding-left: 15px;
          border-left: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
}
