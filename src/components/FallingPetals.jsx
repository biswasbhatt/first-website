import React, { useEffect, useRef } from 'react';

export const FallingPetals = ({ density = 18, intensity = 'normal', includeHearts = true }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const count = reducedMotion
      ? Math.min(density, 12)
      : intensity === 'high'
        ? Math.min(Math.round(density * 1.5), 34)
        : Math.round(density * 0.8);
    const particles = [];

    const petalColors = [
      '#C2185B', // Deep Rhododendron pink
      '#E91E63', // Vibrant Rhododendron pink
      '#D87082', // Soft Rose
      '#F8E1E7', // Blush Pink
      '#AD1457'  // Deep Burgundy Rose
    ];

    const heartColors = [
      '#E899A5', // Soft blush rose
      '#F8E1E7', // Light blush
      '#E91E63', // Vibrant pink heart
      '#D4AF37', // Champagne gold heart
      '#FF4081'  // Glowing romantic pink
    ];

    for (let i = 0; i < count; i++) {
      const isHeart = includeHearts && Math.random() > 0.45; // ~55% hearts, ~45% petals
      particles.push({
        isHeart,
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: isHeart ? Math.random() * 8 + 7 : Math.random() * 7 + 5,
        speedY: reducedMotion ? Math.random() * 0.5 + 0.3 : Math.random() * 1.2 + 0.6,
        speedX: Math.random() * 0.7 - 0.35,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.025,
        color: isHeart 
          ? heartColors[Math.floor(Math.random() * heartColors.length)]
          : petalColors[Math.floor(Math.random() * petalColors.length)],
        opacity: Math.random() * 0.55 + 0.35,
        oscillation: Math.random() * Math.PI * 2,
        oscillationSpeed: Math.random() * 0.025 + 0.015
      });
    }

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-p.size / 2, -p.size, -p.size, -p.size / 2, 0, p.size);
      ctx.bezierCurveTo(p.size, -p.size / 2, p.size / 2, -p.size, 0, 0);
      ctx.fill();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, p.size * 0.7);
      ctx.stroke();

      ctx.restore();
    };

    const drawHeart = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      // Soft glow
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;

      const s = p.size;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.2, 0, s);
      ctx.bezierCurveTo(s, s * 0.2, s * 0.5, -s * 0.3, 0, s * 0.3);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.oscillation += p.oscillationSpeed;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.oscillation) * 0.8;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 25) {
          p.y = -25;
          p.x = Math.random() * width;
        }
        if (p.x > width + 25) p.x = -25;
        if (p.x < -25) p.x = width + 25;

        if (p.isHeart) {
          drawHeart(p);
        } else {
          drawPetal(p);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, intensity, includeHearts]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5
      }}
    />
  );
};
