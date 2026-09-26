import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../data/config';
import { MediaImage } from './MediaPlaceholder';
import { ChevronDown } from 'lucide-react';

export const FirstReveal = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1200); // Flower appears & photo fades
    const timer2 = setTimeout(() => setStep(2), 2600); // "Rose."
    const timer3 = setTimeout(() => setStep(3), 4800); // "But to me..."
    const timer4 = setTimeout(() => setStep(4), 7000); // "Sanu. ❤️"
    const timer5 = setTimeout(() => setStep(5), 9200); // "Happy Birthday. 27 September"

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5 } }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: 9000,
        backgroundColor: '#0D0206',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FAF6F0',
        overflow: 'hidden'
      }}
    >
      {/* Background Photo Reveal */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 0.35, scale: 1.02 }}
            transition={{ duration: 3.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              zIndex: 1
            }}
          >
            <MediaImage
              src={CONFIG.PHOTO_STORY[0]?.url || "/assets/photos/rose-hero.jpg"}
              alt={CONFIG.HER_NAME}
              className="img-cinematic"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(13,2,6,0.3) 0%, rgba(13,2,6,0.85) 100%)'
            }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Rhododendron Flower Graphic */}
      <AnimatePresence>
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -15 }}
            animate={{ opacity: 0.8, y: 0, rotate: 0 }}
            transition={{ duration: 2, ease: 'easeOut' }}
            style={{ zIndex: 10, marginBottom: '2rem' }}
          >
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10C45 30 25 35 10 50C30 55 35 75 50 90C55 70 75 65 90 50C70 45 65 25 50 10Z" fill="url(#rhodoGlow)" />
              <defs>
                <radialGradient id="rhodoGlow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(40)">
                  <stop stopColor="#E91E63" />
                  <stop offset="0.7" stopColor="#C2185B" />
                  <stop offset="1" stopColor="#D4AF37" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Text Sequence */}
      <div style={{ zIndex: 10, textAlign: 'center', minHeight: '180px', padding: '0 1.5rem' }}>
        {step >= 2 && (
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="font-serif"
            style={{ fontSize: '2.5rem', fontWeight: 400, letterSpacing: '0.05em', color: '#FAF6F0' }}
          >
            {CONFIG.HER_NAME}.
          </motion.h2>
        )}

        {step >= 3 && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1.5 }}
            className="font-serif"
            style={{ fontSize: '1.5rem', fontStyle: 'italic', marginTop: '0.75rem', color: '#F2CED8' }}
          >
            But to me...
          </motion.p>
        )}

        {step >= 4 && (
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8 }}
            className="font-serif text-gold"
            style={{ fontSize: '3.5rem', fontWeight: 600, marginTop: '0.75rem' }}
          >
            {CONFIG.NICKNAME} ❤️
          </motion.h1>
        )}

        {step >= 5 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            style={{ marginTop: '1.5rem' }}
          >
            <p style={{ fontSize: '1.25rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#FAF6F0' }}>
              Happy Birthday
            </p>
            <p className="font-handwriting" style={{ fontSize: '2rem', color: '#D4AF37', marginTop: '0.25rem' }}>
              {CONFIG.BIRTHDAY}
            </p>
          </motion.div>
        )}
      </div>

      {/* Skip/Enter Button after step 5 */}
      {step >= 5 && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onClick={onComplete}
          style={{
            position: 'absolute',
            bottom: '40px',
            zIndex: 20,
            background: 'rgba(212, 175, 55, 0.12)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '30px',
            color: '#FAF6F0',
            padding: '10px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.9rem',
            cursor: 'pointer'
          }}
        >
          Enter Your Story <ChevronDown size={16} />
        </motion.button>
      )}
    </motion.div>
  );
};
