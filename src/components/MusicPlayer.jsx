import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { CONFIG } from '../data/config';

export const MusicPlayer = ({ isUnlocked }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const synthRef = useRef(null);

  // Start the track immediately after unlock because the unlock action is the first user gesture.
  useEffect(() => {
    if (!isUnlocked || !audioRef.current) return;

    const audio = audioRef.current;
    audio.currentTime = CONFIG.MUSIC_START_TIME || 0;
    audio.volume = volume;
    audio.load();

    const startAfterUnlock = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setAudioError(false);
      } catch (err) {
        console.warn('Audio autoplay is blocked until user interaction. Using fallback.', err);
        setAudioError(true);
        startSynthAudio();
      }
    };

    const timer = window.setTimeout(startAfterUnlock, 500);
    return () => window.clearTimeout(timer);
  }, [isUnlocked, volume]);

  // Fallback romantic ambient synth using Web Audio API
  const startSynthAudio = () => {
    try {
      if (synthRef.current) return;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioCtx();
      
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Gentle pentatonic warmth notes
      const freqs = [261.63, 329.63, 392.00, 493.88, 523.25]; // C4, E4, G4, B4, C5
      let step = 0;

      const timer = setInterval(() => {
        if (ctx.state === 'closed') return;
        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freqs[step % freqs.length], ctx.currentTime);

        noteGain.gain.setValueAtTime(0.001, ctx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.5);
        noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.5);

        osc.connect(noteGain);
        noteGain.connect(masterGain);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 3.6);

        step++;
      }, 1600);

      synthRef.current = { ctx, timer, masterGain };
      setIsPlaying(true);
    } catch (e) {
      console.error("Synth fallback failed", e);
    }
  };

  const stopSynthAudio = () => {
    if (synthRef.current) {
      clearInterval(synthRef.current.timer);
      synthRef.current.ctx.close();
      synthRef.current = null;
    }
  };

  const togglePlay = () => {
    if (audioError) {
      if (isPlaying) {
        stopSynthAudio();
        setIsPlaying(false);
      } else {
        startSynthAudio();
      }
      return;
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setAudioError(false);
          })
          .catch((err) => {
            console.warn("Audio playback is blocked until user interaction. Falling back to synth.", err);
            setAudioError(true);
            startSynthAudio();
          });
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (audioRef.current) audioRef.current.volume = newVol;
    if (synthRef.current) synthRef.current.masterGain.gain.setValueAtTime(newVol * 0.15, synthRef.current.ctx.currentTime);
    setIsMuted(newVol === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      if (audioRef.current) audioRef.current.volume = volume;
    } else {
      setIsMuted(true);
      if (audioRef.current) audioRef.current.volume = 0;
    }
  };

  if (!isUnlocked) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={CONFIG.MUSIC_TRACK}
        preload="auto"
        loop
        onError={() => setAudioError(true)}
      />

      <div
        className="glass-panel"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 900,
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          borderRadius: '30px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          background: 'rgba(26, 5, 11, 0.85)',
          backdropFilter: 'blur(12px)'
        }}
      >
        {/* Equalizer animation */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '16px', width: '18px' }}>
          {[0.4, 0.8, 0.5, 0.9].map((heightScale, i) => (
            <div
              key={i}
              style={{
                width: '3px',
                height: isPlaying ? '100%' : '20%',
                backgroundColor: '#D4AF37',
                borderRadius: '2px',
                transformOrigin: 'bottom',
                animation: isPlaying ? `equalizerPulse 1.2s ease-in-out infinite alternate ${i * 0.2}s` : 'none'
              }}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          aria-label="Toggle Music"
          style={{
            background: 'rgba(212, 175, 55, 0.15)',
            border: '1px solid rgba(212, 175, 55, 0.3)',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            color: '#FAF6F0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
        </button>

        {/* Title */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.8rem', color: '#FAF6F0', fontWeight: 500 }}>
            {CONFIG.MUSIC_TITLE}
          </span>
          <span style={{ fontSize: '0.65rem', color: 'rgba(250, 246, 240, 0.5)' }}>
            Sanu's Song
          </span>
        </div>

        {/* Volume Controls */}
        <button
          onClick={toggleMute}
          aria-label="Toggle Mute"
          style={{ background: 'none', border: 'none', color: '#FAF6F0', cursor: 'pointer', padding: '2px' }}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          style={{
            width: '60px',
            accentColor: '#D4AF37',
            cursor: 'pointer'
          }}
        />

        <style>{`
          @keyframes equalizerPulse {
            0% { transform: scaleY(0.3); }
            100% { transform: scaleY(1); }
          }
        `}</style>
      </div>
    </>
  );
};
