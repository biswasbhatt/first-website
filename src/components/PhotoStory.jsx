import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONFIG } from '../data/config';
import { MediaImage } from './MediaPlaceholder';
import { X, Maximize2, Heart, Sparkles } from 'lucide-react';

export const PhotoStory = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section
      id="photo-story"
      style={{
        backgroundColor: '#120307',
        width: '100%',
        padding: '6rem 1.5rem',
        position: 'relative'
      }}
    >
      {/* Background Soft Glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '5%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(232, 153, 165, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#D4AF37',
            marginBottom: '0.5rem'
          }}>
            <Sparkles size={16} />
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Her Photo Story
            </span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FAF6F0' }}>
            The Moments That Keep You Close
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(250, 246, 240, 0.65)', marginTop: '0.5rem' }}>
            Click any photo to view in full screen
          </p>
        </motion.div>

        {/* Gallery Grid - Mixed Cinematic Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            alignItems: 'center'
          }}
        >
          {CONFIG.PHOTO_STORY.map((photo, index) => {
            const isFeatured = index === 0;
            const isPolaroid = index % 2 === 1;

            return (
              <motion.div
                key={photo.id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => setSelectedPhoto(photo)}
                className="interactive-card"
                style={{
                  gridColumn: isFeatured ? 'span 1' : 'span 1',
                  background: isPolaroid ? '#FAF6F0' : 'rgba(26, 5, 11, 0.75)',
                  color: isPolaroid ? '#120307' : '#FAF6F0',
                  padding: isPolaroid ? '14px 14px 28px 14px' : '12px',
                  borderRadius: isPolaroid ? '4px' : '16px',
                  boxShadow: '0 12px 35px rgba(0,0,0,0.5)',
                  border: isPolaroid ? 'none' : '1px solid rgba(212, 175, 55, 0.2)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                {/* Photo Container */}
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: isFeatured ? '380px' : '320px',
                    borderRadius: isPolaroid ? '2px' : '12px',
                    overflow: 'hidden'
                  }}
                >
                  <MediaImage
                    src={photo.url}
                    alt={photo.caption || CONFIG.HER_NAME}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  {/* Light leak / vignette overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)'
                  }} />

                  {/* Top Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(18, 3, 7, 0.65)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: '#D4AF37',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em'
                  }}>
                    {photo.tag || "Rose"}
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(6px)',
                    borderRadius: '50%',
                    padding: '8px',
                    color: '#FFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Caption / Note */}
                <div style={{ marginTop: '12px', textAlign: isPolaroid ? 'center' : 'left', padding: '0 4px' }}>
                  <p className={isPolaroid ? "font-handwriting" : "font-serif"} style={{
                    fontSize: isPolaroid ? '1.5rem' : '1.15rem',
                    fontWeight: isPolaroid ? 600 : 500,
                    color: isPolaroid ? '#2B0B14' : '#FAF6F0'
                  }}>
                    {photo.title}
                  </p>
                  {photo.caption && (
                    <p style={{
                      fontSize: '0.85rem',
                      color: isPolaroid ? 'rgba(43, 11, 20, 0.65)' : 'rgba(250, 246, 240, 0.6)',
                      marginTop: '2px'
                    }}>
                      {photo.caption}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 99999,
              backgroundColor: 'rgba(10, 2, 5, 0.95)',
              backdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
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
                cursor: 'pointer'
              }}
            >
              <X size={22} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.8)',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}
            >
              <MediaImage
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                style={{
                  maxWidth: '90vw',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
              <div style={{
                background: 'rgba(26, 5, 11, 0.9)',
                padding: '1rem 1.5rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#FAF6F0' }}>
                  {selectedPhoto.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#E899A5', marginTop: '2px' }}>
                  {selectedPhoto.caption || "Rose (Sanu ❤️)"}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
