import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <div style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border)' }}>
      <section
        id="about"
        ref={sectionRef}
        style={{ maxWidth: '900px', margin: '0 auto', padding: '8rem 2.5rem', textAlign: 'center' }}
      >
        <div className="gold-line" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
        <div className="reveal">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>About</p>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.7rem, 3.8vw, 2.4rem)', fontWeight: 500, lineHeight: 1.4, color: 'var(--text-primary)', marginBottom: '3rem' }}>
            Who's behind RetlawWorks
          </h2>
        </div>

        {/* Coffee cup SVG — centered */}
        <div className="reveal reveal-delay-1" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <svg width="220" height="235" viewBox="0 0 160 170" fill="none">
            <path d="M52 42 C52 30, 62 30, 62 18" stroke="var(--illustration-stroke)" strokeWidth="1.5" fill="none" opacity="0.65" />
            <path d="M72 40 C72 24, 82 28, 82 12"  stroke="var(--illustration-stroke)" strokeWidth="1.5" fill="none" opacity="0.7" />
            <path d="M92 42 C92 30, 102 26, 102 38" stroke="var(--illustration-stroke)" strokeWidth="1.5" fill="none" opacity="0.6" />
            <ellipse cx="80" cy="52" rx="42" ry="9" stroke="var(--accent)" strokeWidth="1.8" fill="rgba(238,233,225,0.7)" opacity="0.9" />
            <path d="M38 52 L46 138 L114 138 L122 52 Z" stroke="var(--accent)" strokeWidth="1.8" fill="var(--illustration-fill)" opacity="0.85" />
            <path d="M118 74 C148 74, 148 118, 118 118" stroke="var(--accent)" strokeWidth="1.8" fill="none" opacity="0.8" />
            <ellipse cx="80" cy="143" rx="58" ry="11" stroke="var(--illustration-stroke)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.7" />
            <ellipse cx="80" cy="143" rx="46" ry="7"  stroke="var(--illustration-stroke)" strokeWidth="1" fill="none" opacity="0.45" />
            <path d="M70 80 C70 72, 80 70, 80 78 C80 70, 90 72, 90 80 C90 92, 80 100, 80 100 C80 100, 70 92, 70 80Z"
              stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.5" />
            <line x1="80" y1="78" x2="80" y2="100" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
          </svg>
        </div>

        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p className="reveal reveal-delay-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1.8rem' }}>
            A Tokyo local who knows the parks inside out.
          </p>
          <p className="reveal reveal-delay-3" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '3rem' }}>
            I've spent years exploring Tokyo Disney Resort — learning its rhythms, its hidden efficiencies, and the small details that turn a good day into an unforgettable one. I live near the parks, so I stay current with every system change, app update, and seasonal shift.
          </p>

          <div className="reveal reveal-delay-4 about-trust" style={{ paddingTop: '2.5rem', borderTop: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'left' }}>
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="3" y="5" width="22" height="20" rx="2" stroke="var(--accent)" strokeWidth="1.4" fill="none" opacity="0.8" />
                    <line x1="3" y1="11" x2="25" y2="11" stroke="var(--accent)" strokeWidth="1.2" opacity="0.6" />
                    <line x1="9"  y1="5"  x2="9"  y2="11" stroke="var(--accent)" strokeWidth="1.2" opacity="0.6" />
                    <line x1="19" y1="5"  x2="19" y2="11" stroke="var(--accent)" strokeWidth="1.2" opacity="0.6" />
                    <rect x="7"  y="15" width="4" height="4" rx="0.5" stroke="var(--accent)" strokeWidth="1" fill="rgba(139,115,85,0.15)" opacity="0.75" />
                    <rect x="13" y="15" width="4" height="4" rx="0.5" stroke="var(--accent)" strokeWidth="1" fill="rgba(139,115,85,0.15)" opacity="0.75" />
                    <rect x="7"  y="20" width="4" height="3" rx="0.5" stroke="var(--accent)" strokeWidth="1" fill="none" opacity="0.5" />
                  </svg>
                ),
                title: 'Hundreds of days in the parks',
                desc: 'As a passionate annual passholder and lifelong fan.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="14" cy="14" r="10" stroke="var(--accent)" strokeWidth="1.4" fill="none" opacity="0.8" />
                    <line x1="14" y1="14" x2="14" y2="7"  stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
                    <line x1="14" y1="14" x2="19" y2="18" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
                    <circle cx="14" cy="14" r="1.5" fill="var(--accent)" opacity="0.8" />
                  </svg>
                ),
                title: 'Always current',
                desc: "Living near the parks means I know today's rules, not last year's.",
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="10" cy="9" r="4" stroke="var(--accent)" strokeWidth="1.4" fill="none" opacity="0.8" />
                    <circle cx="20" cy="9" r="3" stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.6" />
                    <path d="M2 23 C2 17, 18 17, 18 23" stroke="var(--accent)" strokeWidth="1.4" fill="none" opacity="0.8" />
                    <path d="M18 20 C18 17, 26 17, 26 20" stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.55" />
                  </svg>
                ),
                title: 'Built for overseas families',
                desc: 'I understand exactly where international visitors get stuck.',
              },
            ].map(({ icon, title, desc }) => (
              <div key={title}>
                <div style={{ marginBottom: '0.7rem', opacity: 0.9 }}>{icon}</div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem', lineHeight: 1.4 }}>{title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.76rem', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .about-trust { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}
