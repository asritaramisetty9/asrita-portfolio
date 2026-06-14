'use client';

import React, { useEffect, useRef } from 'react';

export default function Spotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      const { clientX, clientY } = e;
      spotlightRef.current.style.setProperty('--x', `${clientX}px`);
      spotlightRef.current.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-10 hidden md:block"
      style={{
        background: 'radial-gradient(700px circle at var(--x, -1000px) var(--y, -1000px), rgba(168, 85, 247, 0.07) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 80%)',
      }}
    />
  );
}
