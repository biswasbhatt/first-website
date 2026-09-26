import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../data/config';
import { MediaVideo } from './MediaPlaceholder';
import { Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';

const VideoPlayerFrame = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const newProgress = parseFloat(e.target.value);
    const duration = videoRef.current.duration || 1;
    videoRef.current.currentTime = (newProgress / 100) * duration;
    setProgress(newProgress);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  return (
    <div
      className="glass-panel"
      style={{
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(212, 175, 55, 0.25)',
        boxShadow: '0 16px 40px rgba(0,0,0,0.6)',
        background: 'rgba(18, 3, 7, 0.9)',
        position: 'relative'
      }}
    >
      {/* Video Container */}
      <div style={{ position: 'relative', width: '100%', minHeight: '260px', backgroundColor: '#000' }}>
        <MediaVideo
          ref={videoRef}
          src={video.url}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          style={{ width: '100%', maxHeight: '420px', objectFit: 'contain', display: 'block' }}
        />

        {/* Big Center Play Overlay Button */}
        {!isPlaying && (
          <button
            onClick={togglePlay}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(212, 175, 55, 0.85)',
              border: 'none',
              color: '#120307',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 25px rgba(212, 175, 55, 0.5)',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <Play size={28} style={{ marginLeft: '4px' }} />
          </button>
        )}
      </div>

      {/* Custom Control Bar */}
      <div style={{ padding: '1rem 1.25rem', background: 'rgba(26, 5, 11, 0.95)', borderTop: '1px solid rgba(248, 225, 231, 0.1)' }}>
        {/* Progress bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          style={{
            width: '100%',
            height: '4px',
            accentColor: '#D4AF37',
            marginBottom: '0.75rem',
            cursor: 'pointer'
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={togglePlay}
              style={{ background: 'none', border: 'none', color: '#FAF6F0', cursor: 'pointer' }}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button
              onClick={toggleMute}
              style={{ background: 'none', border: 'none', color: '#FAF6F0', cursor: 'pointer' }}
            >
              {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <span style={{ fontSize: '0.9rem', color: '#FAF6F0', fontWeight: 500 }}>
              {video.title}
            </span>
          </div>

          <button
            onClick={toggleFullscreen}
            style={{ background: 'none', border: 'none', color: '#D4AF37', cursor: 'pointer' }}
          >
            <Maximize size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const VideoSection = () => {
  return (
    <section
      id="video-story"
      style={{
        backgroundColor: '#120307',
        width: '100%',
        padding: '6rem 1.5rem',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '950px', width: '100%', margin: '0 auto' }}>
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
            <Film size={16} />
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Motion Memories
            </span>
          </div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#FAF6F0' }}>
            Some Moments Deserve to Be Relived
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {CONFIG.VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id || idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
            >
              <VideoPlayerFrame video={video} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
