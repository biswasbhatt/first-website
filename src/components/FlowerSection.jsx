import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config';

export const FlowerSection = () => {
  return (
    <section
      id="flower-section"
      style={{
        backgroundColor: '#120307',
        width: '100%',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Soft Flower Radial Overlay */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(194, 24, 91, 0.12) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 75%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '750px', width: '100%', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Flower Illustration SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{ marginBottom: '2rem', display: 'inline-block' }}
        >
          <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 5C40 28 15 35 5 50C25 55 35 75 50 95C55 75 75 65 95 50C75 45 65 25 50 5Z" fill="url(#rhodoGradient)" />
            <circle cx="50" cy="50" r="8" fill="#F3E5AB" />
            <defs>
              <linearGradient id="rhodoGradient" x1="50" y1="5" x2="50" y2="95" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E91E63" />
                <stop offset="0.6" stopColor="#C2185B" />
                <stop offset="1" stopColor="#880E4F" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span style={{
            fontSize: '0.8rem',
            color: '#E899A5',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.75rem'
          }}>
            Rhododendron Tribute
          </span>

          <h2 className="font-serif" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#FAF6F0', marginBottom: '2rem' }}>
            {CONFIG.FLOWER_SECTION.TITLE}
          </h2>

          <div
            className="glass-panel"
            style={{
              padding: '3rem 2.5rem',
              border: '1px solid rgba(212, 175, 55, 0.2)',
              background: 'rgba(26, 5, 11, 0.75)'
            }}
          >
            {CONFIG.FLOWER_SECTION.POEM.map((line, idx) => (
              <p
                key={idx}
                className="font-serif"
                style={{
                  fontSize: idx === 0 || idx === 1 ? '1.4rem' : '1.6rem',
                  fontStyle: 'italic',
                  color: idx === 2 || idx === 3 ? '#FAF6F0' : '#F8E1E7',
                  lineHeight: 1.8,
                  marginBottom: '0.75rem'
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
