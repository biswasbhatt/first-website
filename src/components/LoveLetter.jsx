import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config';
import { Heart } from 'lucide-react';

export const LoveLetter = () => {
  return (
    <section
      id="love-letter"
      style={{
        backgroundColor: '#16040A',
        width: '100%',
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Soft Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(232, 153, 165, 0.04) 50%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '780px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '2rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#D4AF37',
            marginBottom: '0.5rem'
          }}>
            <Heart size={14} fill="#D4AF37" />
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              For you
            </span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FAF6F0' }}>
            {CONFIG.LOVE_LETTER.TITLE}
          </h2>
        </motion.div>

        {/* Parchment Love Letter Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          style={{
            background: 'linear-gradient(135deg, rgba(37, 8, 17, 0.95) 0%, rgba(26, 5, 11, 0.98) 100%)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '20px',
            padding: 'clamp(1.25rem, 3vw, 2rem)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8), inset 0 0 40px rgba(212, 175, 55, 0.05)',
            position: 'relative'
          }}
        >
          {/* Rhododendron Decorative Top Corner Motif */}
          <div style={{ position: 'absolute', top: '24px', right: '24px', opacity: 0.4 }}>
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
              <path d="M50 10C40 30 20 35 10 50C30 55 35 75 50 90C55 70 75 65 90 50C70 45 65 25 50 10Z" fill="#D4AF37" />
            </svg>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {CONFIG.LOVE_LETTER.PARAGRAPHS.map((para, index) => {
              const isGreeting = index === 0;
              const isHighlight = index === 2 || index === 5 || index === 7;
              const isClosing = index >= 8;

              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: index * 0.06 }}
                  className={
                    isGreeting
                      ? "font-serif text-gold"
                      : isHighlight
                      ? "font-serif text-blush"
                      : isClosing
                      ? "font-handwriting"
                      : "font-sans"
                  }
                  style={{
                    fontSize: isGreeting
                      ? '1.5rem'
                      : isHighlight
                      ? '1.1rem'
                      : isClosing
                      ? '1.4rem'
                      : '1rem',
                    lineHeight: 1.6,
                    color: isGreeting
                      ? '#D4AF37'
                      : isHighlight
                      ? '#F8E1E7'
                      : isClosing
                      ? '#E899A5'
                      : 'rgba(250, 246, 240, 0.85)',
                    whiteSpace: 'pre-line',
                    fontWeight: isGreeting || isClosing ? 600 : 400
                  }}
                >
                  {para}
                </motion.p>
              );
            })}
          </div>

          {/* Bottom Bloom Flourish */}
          <div style={{
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(212, 175, 55, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Heart size={14} fill="#E899A5" style={{ color: '#E899A5' }} />
              <span className="font-handwriting" style={{ fontSize: '1.2rem', color: '#D4AF37' }}>
                Forever yours
              </span>
            </div>
            <span className="font-serif" style={{ fontSize: '1.1rem', color: '#FAF6F0' }}>
              — Shivam
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
