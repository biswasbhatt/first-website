import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config';
import { Heart, Sparkles, ChevronRight } from 'lucide-react';

export const FiveThings = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="five-things"
      style={{
        backgroundColor: '#16040A',
        width: '100%',
        padding: '6rem 1.5rem',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
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
            color: '#E899A5',
            marginBottom: '0.5rem'
          }}>
            <Heart size={16} fill="#E899A5" />
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Personal Reflections
            </span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FAF6F0' }}>
            Five Little Things About You
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(250, 246, 240, 0.65)', marginTop: '0.5rem' }}>
            The small details that make you so special to me
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {CONFIG.FIVE_THINGS.map((item, index) => {
            const isOpen = activeCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                onClick={() => setActiveCard(isOpen ? null : index)}
                className="interactive-card glass-panel"
                style={{
                  padding: '1.5rem 2rem',
                  border: isOpen ? '1px solid #D4AF37' : '1px solid rgba(248, 225, 231, 0.12)',
                  background: isOpen ? 'rgba(43, 11, 20, 0.85)' : 'rgba(26, 5, 11, 0.6)',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <span className="font-serif text-gold" style={{ fontSize: '1.8rem', fontWeight: 600 }}>
                      {item.number}
                    </span>
                    <h3 className="font-serif" style={{ fontSize: '1.4rem', color: '#FAF6F0', fontWeight: 500 }}>
                      {item.title}
                    </h3>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronRight size={20} style={{ color: '#D4AF37' }} />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{
                    marginTop: '1rem',
                    fontSize: '1.05rem',
                    color: '#F8E1E7',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(212, 175, 55, 0.15)',
                    paddingTop: '1rem'
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
