import { useEffect, useState } from 'react';

export default function Loader() {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>('visible');

  useEffect(() => {
    if (sessionStorage.getItem('rw_loaded')) {
      setPhase('gone');
      return;
    }
    const show = setTimeout(() => {
      setPhase('fading');
    }, 1600);
    return () => clearTimeout(show);
  }, []);

  useEffect(() => {
    if (phase !== 'fading') return;
    const hide = setTimeout(() => {
      setPhase('gone');
      sessionStorage.setItem('rw_loaded', '1');
    }, 700);
    return () => clearTimeout(hide);
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--loader-bg)',
        transition: 'opacity 0.6s ease, visibility 0.6s',
        opacity: phase === 'fading' ? 0 : 1,
        visibility: phase === 'fading' ? 'hidden' : 'visible',
        pointerEvents: phase === 'fading' ? 'none' : 'auto',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: "'Glacial Indifference', sans-serif",
            fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
            fontWeight: 700,
            letterSpacing: '0.18em',
            color: 'var(--accent)',
            opacity: 0,
            animation: 'fadeIn 0.8s 0.2s ease forwards',
          }}
        >
          RetlawWorks
        </div>
        <div
          style={{
            width: 0,
            height: '1px',
            background: 'var(--accent)',
            margin: '1rem auto 0',
            animation: 'expandLine 1s 0.5s ease forwards',
          }}
        />
      </div>
    </div>
  );
}
