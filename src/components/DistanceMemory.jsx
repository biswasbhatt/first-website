import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config';
import { Heart, Navigation } from 'lucide-react';

export const DistanceMemory = () => {
  return (
    <section
      id="distance-memory"
      style={{
        backgroundColor: '#120307',
        width: '100%',
        padding: '7rem 1.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '850px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ marginBottom: '3rem' }}
        >
          <span style={{
            fontSize: '0.8rem',
            color: '#E899A5',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem'
          }}>
            Connected Under One Sky
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FAF6F0' }}>
            {CONFIG.DISTANCE_MAP.TITLE}
          </h2>
        </motion.div>

        {/* Abstract Map Canvas Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="glass-panel"
          style={{
            position: 'relative',
            width: '100%',
            height: '280px',
            borderRadius: '24px',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            background: 'radial-gradient(circle at center, rgba(37, 8, 17, 0.9) 0%, rgba(18, 3, 7, 0.98) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            overflow: 'hidden',
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)'
          }}
        >
          {/* Subtle Grid Map Lines */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }}>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.8" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Connected Arc Line */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}>
            <motion.path
              d="M 180 140 Q 425 40 670 140"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#E899A5" />
                <stop offset="100%" stopColor="#C2185B" />
              </linearGradient>
            </defs>
          </svg>

          {/* Node Shivam (Point A) */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              left: '15%',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 10
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.25, 1], boxShadow: ['0 0 10px #D4AF37', '0 0 25px #D4AF37', '0 0 10px #D4AF37'] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#D4AF37',
                border: '3px solid #120307'
              }}
            />
            <span style={{ fontSize: '0.85rem', color: '#D4AF37', fontWeight: 600, marginTop: '8px' }}>
              {CONFIG.DISTANCE_MAP.POINT_A}
            </span>
          </motion.div>

          {/* Glowing Center Heart */}
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            style={{
              position: 'absolute',
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              color: '#E899A5'
            }}
          >
            <Heart size={24} fill="#E899A5" style={{ filter: 'drop-shadow(0 0 10px #E899A5)' }} />
          </motion.div>

          {/* Node Rose (Point B) */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              right: '15%',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              zIndex: 10
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.25, 1], boxShadow: ['0 0 10px #C2185B', '0 0 25px #E91E63', '0 0 10px #C2185B'] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#E91E63',
                border: '3px solid #120307'
              }}
            />
            <span style={{ fontSize: '0.85rem', color: '#E899A5', fontWeight: 600, marginTop: '8px' }}>
              {CONFIG.DISTANCE_MAP.POINT_B}
            </span>
          </motion.div>
        </motion.div>

        {/* Text Sequence Below Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ marginTop: '2.5rem' }}
        >
          <p className="font-serif" style={{ fontSize: '1.4rem', color: '#FAF6F0', marginBottom: '0.75rem' }}>
            {CONFIG.DISTANCE_MAP.SUBTITLE}
          </p>
          <p className="font-handwriting" style={{ fontSize: '1.8rem', color: '#D4AF37' }}>
            "{CONFIG.DISTANCE_MAP.FINAL_NOTE}"
          </p>
        </motion.div>
      </div>
    </section>
  );
};
