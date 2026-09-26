import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../data/config';
import { MediaImage } from './MediaPlaceholder';
import { FallingPetals } from './FallingPetals';
import { Gift, Heart, X } from 'lucide-react';

export const SurpriseSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="surprise"
      style={{
        backgroundColor: '#16040A',
        width: '100%',
        padding: '7rem 1.5rem',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '750px', width: '100%', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-panel"
          style={{
            padding: '3.5rem 2rem',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            background: 'linear-gradient(135deg, rgba(37, 8, 17, 0.9) 0%, rgba(26, 5, 11, 0.95) 100%)',
            borderRadius: '24px',
            boxShadow: '0 15px 45px rgba(0,0,0,0.7)'
          }}
        >
          <div style={{
            width: '60px',
            height: '60px',
            margin: '0 auto 1.5rem auto',
            borderRadius: '50%',
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#D4AF37'
          }}>
            <Gift size={26} />
          </div>

          <h3 className="font-serif text-gold" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
            {CONFIG.SURPRISE.INITIAL_PROMPT}
          </h3>

          <p className="font-serif" style={{ fontSize: '1.4rem', color: '#FAF6F0', marginBottom: '2rem' }}>
            {CONFIG.SURPRISE.SUBTITLE}
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="interactive-card"
            style={{
              padding: '14px 32px',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #D4AF37 0%, #B8860B 100%)',
              color: '#120307',
              fontWeight: 600,
              fontSize: '1rem',
              border: 'none',
              boxShadow: '0 4px 25px rgba(212, 175, 55, 0.4)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'transform 0.2s ease'
            }}
          >
            {CONFIG.SURPRISE.BUTTON_TEXT}
          </button>
        </motion.div>
      </div>

      {/* Surprise Fullscreen Modal Reveal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              backgroundColor: '#0D0206',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              overflow: 'hidden'
            }}
          >
            <FallingPetals density={35} intensity="high" />

            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(212, 175, 55, 0.2)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                color: '#FAF6F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 100
              }}
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              style={{
                maxWidth: '520px',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 10
              }}
            >
              <div style={{
                height: '360px',
                width: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                marginBottom: '2rem'
              }}>
                <MediaImage
                  src={CONFIG.SURPRISE.FEATURED_PHOTO}
                  alt={CONFIG.HER_NAME}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <p className="font-serif text-gold" style={{ fontSize: '1.8rem', fontWeight: 600 }}>
                  {CONFIG.SURPRISE.REVEAL_NAME_1}
                </p>
                <p className="font-serif text-rose" style={{ fontSize: '1.6rem', marginTop: '0.25rem', fontStyle: 'italic' }}>
                  {CONFIG.SURPRISE.REVEAL_NAME_2}
                </p>

                <p className="font-serif" style={{ fontSize: '1.35rem', color: '#FAF6F0', marginTop: '1.5rem', lineHeight: 1.6 }}>
                  "{CONFIG.SURPRISE.QUOTE}"
                </p>

                <h2 className="font-serif text-gold" style={{ fontSize: '2.5rem', marginTop: '1.5rem', fontWeight: 600 }}>
                  {CONFIG.SURPRISE.FINAL_WISH}
                </h2>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
