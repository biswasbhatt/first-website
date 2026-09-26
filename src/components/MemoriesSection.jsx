import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config';
import { MediaImage } from './MediaPlaceholder';
import { Calendar, MapPin, Heart } from 'lucide-react';

export const MemoriesSection = () => {
  return (
    <section
      id="memories"
      style={{
        backgroundColor: '#16040A',
        width: '100%',
        padding: '6rem 1.5rem',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <span style={{
            fontSize: '0.8rem',
            color: '#D4AF37',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '0.5rem'
          }}>
            Digital Keepsakes
          </span>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FAF6F0' }}>
            Our Little Collection of Memories
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {CONFIG.MEMORIES.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="glass-panel interactive-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(248, 225, 231, 0.12)',
                background: 'rgba(26, 5, 11, 0.75)'
              }}
            >
              <div style={{ height: '240px', width: '100%', overflow: 'hidden' }}>
                <MediaImage
                  src={item.url}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '1.5rem' }}>
                <h3 className="font-serif" style={{ fontSize: '1.25rem', color: '#FAF6F0', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(250, 246, 240, 0.6)', fontSize: '0.8rem' }}>
                  {item.date && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={13} style={{ color: '#D4AF37' }} />
                      <span>{item.date}</span>
                    </div>
                  )}
                  {item.location && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} style={{ color: '#E899A5' }} />
                      <span>{item.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
