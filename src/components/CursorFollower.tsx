import { useEffect, useRef, useState } from 'react';

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const pos       = useRef({ x: 0, y: 0 });
  const current   = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [hidden,  setHidden]  = useState(false);
  const rafId     = useRef<number>(0);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setHidden(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) setHovered(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) setHovered(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout',  onOut);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.12);
      current.current.y = lerp(current.current.y, pos.current.y, 0.12);
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout',  onOut);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        borderRadius: '50%',
        border: '1px solid rgba(139, 115, 85, 0.3)',
        background: 'rgba(139, 115, 85, 0.15)',
        marginLeft: hovered ? '-16px' : '-7px',
        marginTop:  hovered ? '-16px' : '-7px',
        width:  hovered ? '32px' : '14px',
        height: hovered ? '32px' : '14px',
        transition: 'width 0.3s ease, height 0.3s ease, margin 0.3s ease, background 0.3s ease',
        willChange: 'transform',
      }}
    />
  );
}
