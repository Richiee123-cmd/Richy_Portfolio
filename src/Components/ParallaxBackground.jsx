import { useEffect, useRef } from 'react';

const DOTS = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  speed: Math.random() * 0.4 + 0.1,
  opacity: Math.random() * 0.4 + 0.1,
}));

const ORBS = [
  { x: 15, y: 20, size: 500, color: 'rgba(200,255,0,0.04)', speed: 0.15 },
  { x: 75, y: 60, size: 400, color: 'rgba(255,107,53,0.04)', speed: 0.25 },
  { x: 45, y: 85, size: 350, color: 'rgba(96,165,250,0.04)', speed: 0.2 },
  { x: 85, y: 15, size: 300, color: 'rgba(200,255,0,0.03)', speed: 0.1 },
];

export default function ParallaxBackground() {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const orbsRef = useRef([]);
  const scrollY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    const animate = () => {
      const sy = scrollY.current;

      // Move dots
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return;
        const d = DOTS[i];
        const translateY = sy * d.speed;
        dot.style.transform = `translateY(${translateY}px)`;
      });

      // Move orbs
      orbsRef.current.forEach((orb, i) => {
        if (!orb) return;
        const o = ORBS[i];
        const translateY = sy * o.speed;
        orb.style.transform = `translateY(${translateY}px)`;
      });

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={containerRef} style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 0,
      overflow: 'hidden'
    }}>
      {/* Glowing orbs */}
      {ORBS.map((orb, i) => (
        <div
          key={i}
          ref={el => orbsRef.current[i] = el}
          style={{
            position: 'absolute',
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            transform: 'translateY(0)',
            willChange: 'transform',
          }}
        />
      ))}

      {/* Floating dots */}
      {DOTS.map((dot, i) => (
        <div
          key={dot.id}
          ref={el => dotsRef.current[i] = el}
          style={{
            position: 'absolute',
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: '50%',
            background: 'var(--accent)',
            opacity: dot.opacity,
            transform: 'translateY(0)',
            willChange: 'transform',
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,255,0,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,255,0,0.015) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />
    </div>
  );
}