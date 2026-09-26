import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Heart, KeyRound, Sparkles } from 'lucide-react';
import { CONFIG } from '../data/config';
import { FallingPetals } from './FallingPetals';
import { MediaImage } from './MediaPlaceholder';

export const PasswordGate = ({ onUnlock }) => {
  const [inputPassword, setInputPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isShaking, setIsShaking] = useState(false);
  const [isUnlocking, setIsUnlocking] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputPassword.trim()) return;

    if (inputPassword.trim().toLowerCase() === CONFIG.PASSWORD.toLowerCase()) {
      setIsUnlocking(true);
      setTimeout(() => {
        onUnlock();
      }, 1400);
    } else {
      setIsShaking(true);
      setErrorMsg("Not this one... try again ❤️");
      setTimeout(() => setIsShaking(false), 600);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 1.2 } }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: 9999,
          backgroundColor: '#0D0206',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Ambient Background Image of Rose */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden' }}>
          <MediaImage
            src={CONFIG.HERO.HERO_PHOTO}
            alt={CONFIG.HER_NAME}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.38,
              filter: 'brightness(0.85) contrast(1.05)'
            }}
          />
          {/* Luxury Dark Burgundy Overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at center, rgba(43, 11, 20, 0.55) 0%, rgba(22, 4, 10, 0.85) 60%, rgba(13, 2, 6, 0.98) 100%)'
          }} />
        </div>

        {/* Dense Raining Hearts & Rhododendron Petals */}
        <FallingPetals density={50} intensity="high" includeHearts={true} />

        {/* Warm Golden Glow Behind Card */}
        <div style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'rgba(212, 175, 55, 0.15)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 2
        }} />

        {/* Center Lock Screen Card */}
        <motion.div
          animate={
            isUnlocking
              ? { scale: 1.08, opacity: 0, filter: 'blur(10px)' }
              : isShaking
              ? { x: [-8, 8, -6, 6, -3, 3, 0] }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: isUnlocking ? 1.2 : 0.4 }}
          className="glass-panel"
          style={{
            maxWidth: '440px',
            width: '100%',
            padding: '2.5rem 2rem',
            border: '1px solid rgba(212, 175, 55, 0.35)',
            boxShadow: '0 18px 55px rgba(0, 0, 0, 0.85), 0 0 35px rgba(212, 175, 55, 0.15)',
            position: 'relative',
            zIndex: 10,
            background: 'rgba(26, 5, 11, 0.85)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Framed Portrait of Rose right on the Lock Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              width: '110px',
              height: '110px',
              margin: '0 auto 1.25rem auto'
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid rgba(212, 175, 55, 0.7)',
                boxShadow: '0 0 25px rgba(212, 175, 55, 0.4), 0 8px 20px rgba(0, 0, 0, 0.7)',
                position: 'relative'
              }}
            >
              <MediaImage
                src={CONFIG.HERO.HERO_PHOTO}
                alt={CONFIG.HER_NAME}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* Small Glowing Lock Icon Badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '-2px',
                right: '-2px',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#120307',
                boxShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              {isUnlocking ? <Heart size={16} fill="#120307" /> : <Lock size={15} />}
            </div>
          </motion.div>

          <h2 className="font-serif" style={{ fontSize: '1.8rem', color: '#FAF6F0', marginBottom: '0.5rem', fontWeight: 500 }}>
            A little something for Sanu...
          </h2>

          <p style={{ fontSize: '0.9rem', color: 'rgba(250, 246, 240, 0.75)', marginBottom: '1.75rem', lineHeight: 1.5 }}>
            Some things are meant to be opened only by the right person.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                placeholder="Enter the secret..."
                value={inputPassword}
                onChange={(e) => {
                  setInputPassword(e.target.value);
                  setErrorMsg('');
                }}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '30px',
                  background: 'rgba(13, 2, 6, 0.85)',
                  border: errorMsg ? '1px solid #E899A5' : '1px solid rgba(212, 175, 55, 0.35)',
                  color: '#FAF6F0',
                  fontSize: '0.95rem',
                  outline: 'none',
                  textAlign: 'center',
                  letterSpacing: '0.1em',
                  transition: 'border-color 0.3s ease'
                }}
              />
              <KeyRound
                size={18}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'rgba(212, 175, 55, 0.7)'
                }}
              />
            </div>

            {errorMsg && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '0.85rem', color: '#E899A5', margin: '-4px 0 0 0' }}
              >
                {errorMsg}
              </motion.p>
            )}

            <button
              type="submit"
              className="interactive-card"
              style={{
                width: '100%',
                padding: '12px 24px',
                borderRadius: '30px',
                background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
                color: '#120307',
                fontWeight: 600,
                fontSize: '0.95rem',
                border: 'none',
                boxShadow: '0 4px 20px rgba(212, 175, 55, 0.35)',
                transition: 'transform 0.2s ease, boxShadow 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              Unlock My Gift <Heart size={16} fill="#120307" />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
