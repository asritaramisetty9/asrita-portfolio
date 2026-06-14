'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  pulseSpeed: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const starCount = 120;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      if (!canvas) return;
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          speedX: (Math.random() - 0.5) * 0.04,
          speedY: (Math.random() - 0.5) * 0.04,
          opacity: Math.random() * 0.7 + 0.3,
          pulseSpeed: (Math.random() * 0.01 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - window.innerWidth / 2) * 0.04;
      mouseRef.current.targetY = (e.clientY - window.innerHeight / 2) * 0.04;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation for parallax
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      ctx.fillStyle = '#ffffff';

      stars.forEach((star) => {
        // Stars render relative to the mouse parallax offsets
        const renderX = star.x + mouseRef.current.x * (star.size * 0.6);
        const renderY = star.y + mouseRef.current.y * (star.size * 0.6);

        // Move stars slowly
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around boundaries
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Pulsing glowing opacity
        star.opacity += star.pulseSpeed;
        if (star.opacity > 0.95 || star.opacity < 0.15) {
          star.pulseSpeed = -star.pulseSpeed;
        }

        // Clamp opacity safely
        const alpha = Math.max(0.1, Math.min(0.95, star.opacity));
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(renderX, renderY, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 bg-[#0A0A0A]"
    />
  );
}
