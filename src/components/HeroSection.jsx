import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config';
import { MediaImage } from './MediaPlaceholder';
import { ChevronDown, Heart } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '520px',
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#120307'
      }}
    >
      {/* Background Image with Dark Gradient Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
        <MediaImage
          src={CONFIG.HERO.HERO_PHOTO}
          alt={CONFIG.HER_NAME}
          className="img-cinematic"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(18, 3, 7, 0.4) 0%, rgba(18, 3, 7, 0.75) 60%, rgba(18, 3, 7, 0.98) 100%)'
        }} />
      </div>

      {/* Floating Accent Glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '380px',
        height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      {/* Hero Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '850px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '20px',
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            marginBottom: '1.5rem'
          }}>
            <Heart size={14} style={{ color: '#E899A5' }} />
            <span style={{ fontSize: '0.85rem', color: '#D4AF37', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              {CONFIG.BIRTHDAY}
            </span>
          </div>

          <h1
            className="font-serif"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#FAF6F0',
              marginBottom: '1rem',
              textShadow: '0 4px 20px rgba(0,0,0,0.8)'
            }}
          >
            Happy Birthday, <span className="text-gold">{CONFIG.NICKNAME} ❤️</span>
          </h1>

          <p
            className="font-serif"
            style={{
              fontSize: 'clamp(1.15rem, 2.5vw, 1.6rem)',
              fontStyle: 'italic',
              color: 'rgba(250, 246, 240, 0.85)',
              lineHeight: 1.6,
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto'
            }}
          >
            "{CONFIG.HERO.SUBTITLE}"
          </p>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#distance"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { duration: 1, delay: 1 }, y: { repeat: Infinity, duration: 2, ease: 'easeInOut' } }}
        style={{
          position: 'absolute',
          bottom: '36px',
          zIndex: 10,
          color: 'rgba(250, 246, 240, 0.65)',
          textDecoration: 'none',
          fontSize: '0.85rem',
          letterSpacing: '0.1em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <span>{CONFIG.HERO.SCROLL_TEXT}</span>
        <ChevronDown size={18} style={{ color: '#D4AF37' }} />
      </motion.a>
    </section>
  );
};
