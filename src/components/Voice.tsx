import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

const promises = [
  {
    title: 'A plan made entirely around your family',
    desc: "Never a copy-paste template — every detail is tailored to you.",
  },
  {
    title: "No upselling — just what's actually worth your money",
    desc: "I'll tell you what's worth it — and what isn't.",
  },
  {
    title: 'Quick, clear replies in writing',
    desc: 'No language barrier, no confusion — just straightforward help.',
  },
];

export default function Voice() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <section
        id="voice"
        ref={sectionRef}
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '7rem 2.5rem' }}
      >
        <div className="gold-line" />
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>Promise</p>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 500, lineHeight: 1.4, color: 'var(--text-primary)' }}>
            What you can expect
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="voice-grid">
          {promises.map((p, i) => (
            <PromiseCard key={i} promise={p} delay={i + 1} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .voice-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function PromiseCard({ promise, delay }: { promise: typeof promises[0]; delay: number }) {
  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '2rem', transition: 'box-shadow 0.3s ease', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
    >
      <div style={{ width: '24px', height: '1px', background: 'var(--accent)', marginBottom: '1.4rem', opacity: 0.6 }} />
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: '0.8rem', flexGrow: 1 }}>{promise.title}</p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.8 }}>{promise.desc}</p>
    </div>
  );
}
