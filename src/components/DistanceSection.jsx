import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config';
import { MediaImage } from './MediaPlaceholder';

export const DistanceSection = () => {
  return (
    <section
      id="distance"
      style={{
        position: 'relative',
        minHeight: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#16040A',
        overflow: 'hidden'
      }}
    >
      {/* Background Parallax Photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, opacity: 0.22 }}>
        <MediaImage
          src={CONFIG.DISTANCE_SECTION.BACKGROUND_PHOTO}
          alt="Distance background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #120307 0%, rgba(22, 4, 10, 0.75) 50%, #16040A 100%)'
        }} />
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '780px',
        width: '100%',
        margin: '0 auto',
        textAlign: 'center',
        padding: '2rem 1.5rem'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="glass-panel"
          style={{
            padding: '2.5rem 1.5rem',
            border: '1px solid rgba(248, 225, 231, 0.14)',
            background: 'rgba(26, 5, 11, 0.8)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.35)'
          }}
        >
          <span style={{
            fontSize: '0.8rem',
            color: '#D4AF37',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            display: 'block',
            marginBottom: '1rem'
          }}>
            Our Long Distance Story
          </span>

          <h2
            className="font-serif"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#FAF6F0',
              marginBottom: '1.5rem',
              fontWeight: 500
            }}
          >
            {CONFIG.DISTANCE_SECTION.TITLE}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {CONFIG.DISTANCE_SECTION.PARAGRAPHS.map((p, idx) => (
              <p
                key={idx}
                className={idx === 3 || idx === 4 ? "font-serif text-blush" : ""}
                style={{
                  fontSize: idx === 3 || idx === 4 ? '1.3rem' : '1.05rem',
                  fontStyle: idx === 3 || idx === 4 ? 'italic' : 'normal',
                  lineHeight: 1.7,
                  color: idx === 3 || idx === 4 ? '#F8E1E7' : 'rgba(250, 246, 240, 0.8)'
                }}
              >
                {p}
              </p>
            ))}
          </div>

          <div style={{
            marginTop: '2rem',
            display: 'inline-block',
            padding: '10px 24px',
            borderTop: '1px solid rgba(212, 175, 55, 0.25)',
            borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
            background: 'rgba(212, 175, 55, 0.03)'
          }}>
            <p className="font-handwriting" style={{ fontSize: 'clamp(1.35rem, 3vw, 1.8rem)', color: '#D4AF37' }}>
              "Different places. Same memories. One special person."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
