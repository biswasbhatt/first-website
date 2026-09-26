import React, { useState } from 'react';
import { Heart, Image as ImageIcon, Film } from 'lucide-react';

export const MediaImage = ({ src, alt, className, style, onClick }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={`media-placeholder image-placeholder ${className || ''}`} 
        style={{
          width: '100%',
          height: '100%',
          minHeight: '260px',
          background: 'linear-gradient(135deg, rgba(37, 8, 17, 0.9) 0%, rgba(26, 5, 11, 0.95) 100%)',
          border: '1px solid rgba(248, 225, 231, 0.15)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyConstraint: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)',
          ...style
        }}
        onClick={onClick}
      >
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '-20%',
          width: '140%',
          height: '140%',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: 'rgba(212, 175, 55, 0.12)',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          color: '#D4AF37'
        }}>
          <Heart size={24} style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.4))' }} />
        </div>

        <p className="font-serif" style={{ fontSize: '1.25rem', color: '#FAF6F0', marginBottom: '0.25rem', fontWeight: 500 }}>
          {alt || "Ruby (Sanu ❤️)"}
        </p>
        <span style={{ fontSize: '0.75rem', color: 'rgba(250, 246, 240, 0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Photo Asset ({src ? src.split('/').pop() : 'Missing'})
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onClick={onClick}
      onError={() => setHasError(true)}
    />
  );
};

export const MediaVideo = ({ src, poster, className, style, controls = true, ...props }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div 
        className={`media-placeholder video-placeholder ${className || ''}`}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '300px',
          background: 'linear-gradient(135deg, rgba(35, 9, 25, 0.9) 0%, rgba(18, 3, 7, 0.95) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          ...style
        }}
      >
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(232, 153, 165, 0.15)',
          border: '1px solid rgba(232, 153, 165, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          color: '#E899A5'
        }}>
          <Film size={26} />
        </div>
        <p className="font-serif" style={{ fontSize: '1.2rem', color: '#FAF6F0', marginBottom: '0.25rem' }}>
          Memory Video Frame
        </p>
        <span style={{ fontSize: '0.75rem', color: 'rgba(250, 246, 240, 0.5)' }}>
          {src ? src.split('/').pop() : 'Video File'}
        </span>
      </div>
    );
  }

  return (
    <video
      src={src}
      poster={poster}
      className={className}
      style={style}
      onError={() => setHasError(true)}
      {...props}
    />
  );
};
