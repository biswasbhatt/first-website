import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config';
import { MediaImage } from './MediaPlaceholder';
import { FallingPetals } from './FallingPetals';

export const FinalSection = () => {
  return (
    <section
      id="final-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '560px',
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0D0206'
      }}
    >
      <FallingPetals density={20} intensity="normal" />

      {/* Fullscreen Photo with Slow Cinematic Zoom */}
      <motion.div
        animate={{ scale: [1, 1.08] }}
        transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      >
        <MediaImage
          src={CONFIG.FINAL_SECTION.HERO_PHOTO}
          alt={CONFIG.HER_NAME}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(13, 2, 6, 0.4) 0%, rgba(13, 2, 6, 0.9) 100%)'
        }} />
      </motion.div>

      {/* Final Text Sequence */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '800px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="font-serif text-gold" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: 600, marginBottom: '0.5rem' }}>
            {CONFIG.FINAL_SECTION.HEADING}
          </h2>

          <p style={{ fontSize: '1.2rem', color: '#FAF6F0', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            {CONFIG.FINAL_SECTION.DATE}
          </p>

          <p className="font-serif" style={{ fontSize: '1.4rem', color: '#F8E1E7', fontStyle: 'italic', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            "{CONFIG.FINAL_SECTION.TAGLINE}"
          </p>

          <p className="font-serif" style={{ fontSize: '1.6rem', color: '#FAF6F0', marginBottom: '2rem' }}>
            {CONFIG.FINAL_SECTION.SIGNATURE}
          </p>

          <p className="font-handwriting" style={{ fontSize: '2rem', color: '#D4AF37', marginBottom: '2.5rem' }}>
            {CONFIG.FINAL_SECTION.CLOSING}
          </p>

          {/* Rhododendron Flower Graphic Fade-In */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            style={{ display: 'inline-block' }}
          >
            <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
              <path d="M50 10C40 30 20 35 10 50C30 55 35 75 50 90C55 70 75 65 90 50C70 45 65 25 50 10Z" fill="url(#finalRhodo)" />
              <circle cx="50" cy="50" r="6" fill="#F3E5AB" />
              <defs>
                <radialGradient id="finalRhodo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(40)">
                  <stop stopColor="#E91E63" />
                  <stop offset="0.7" stopColor="#C2185B" />
                  <stop offset="1" stopColor="#D4AF37" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
