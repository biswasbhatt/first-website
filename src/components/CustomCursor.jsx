import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-card') ||
        target.closest('.photo-card');

      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: pos.y,
          left: pos.x,
          width: '8px',
          height: '8px',
          backgroundColor: '#D4AF37',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          boxShadow: '0 0 10px rgba(212, 175, 55, 0.8)'
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: pos.y,
          left: pos.x,
          width: isHovered ? '48px' : '28px',
          height: isHovered ? '48px' : '28px',
          border: isHovered
            ? '1px solid rgba(232, 153, 165, 0.8)'
            : '1px solid rgba(212, 175, 55, 0.35)',
          backgroundColor: isHovered ? 'rgba(232, 153, 165, 0.08)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s ease-out, height 0.25s ease-out, border-color 0.25s ease-out, background-color 0.25s ease-out',
          zIndex: 9998
        }}
      />
    </>
  );
};
