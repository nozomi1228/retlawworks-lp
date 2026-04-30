import { useEffect, useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

function AnimatedPath({ d, opacity }: { d: string; opacity: number }) {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray  = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          path.style.transition = 'stroke-dashoffset 2s cubic-bezier(0.16, 1, 0.3, 1)';
          path.style.strokeDashoffset = '0';
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(path);
    return () => observer.disconnect();
  }, []);

  return (
    <path
      ref={pathRef}
      d={d}
      stroke="var(--illustration-stroke)"
      strokeWidth="1"
      fill="none"
      opacity={opacity}
    />
  );
}

const problems = [
  '予約対応に追われ、接客の質が下がっていると感じる',
  'オンライン上の店舗情報が最適化されていない',
  '導入したツールが運用に乗らず、放置されている',
  '日々のオペレーションに手作業が多く、スケールしない',
  '課題の優先順位が見えず、何から着手すべきかわからない',
];

export default function Issues() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <section
      id="problems"
      ref={sectionRef}
      style={{
        borderTop: '1px solid var(--border)',
        padding: '7rem 2.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      <div className="reveal">
        <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>Issues</p>
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.4rem, 3.2vw, 1.9rem)', fontWeight: 500, lineHeight: 1.7, color: 'var(--text-primary)', marginBottom: '3rem' }}>
          その忙しさの正体、<br />&#34;仕組みの不在&#34;かもしれません。
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="problems-wrapper">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {problems.map((text, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.3rem 0', borderBottom: '1px solid var(--border)' }}
            >
              <div style={{ flexShrink: 0, width: '6px', height: '6px', marginTop: '0.65rem', border: '1px solid var(--accent)', borderRadius: '50%' }} />
              <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8 }}>{text}</p>
            </div>
          ))}
        </div>

        <div className="reveal problems-illustration" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="220" height="280" viewBox="0 0 220 280" fill="none">
            <AnimatedPath d="M40 40 C80 60, 60 100, 110 80 C160 60, 120 140, 180 120 C200 110, 140 180, 180 200" opacity={0.5} />
            <AnimatedPath d="M60 30 C100 70, 40 90, 100 110 C140 120, 80 160, 140 180 C170 190, 120 220, 160 240" opacity={0.35} />
            <AnimatedPath d="M30 70 C70 50, 90 120, 130 100 C170 80, 100 170, 170 160" opacity={0.25} />
            <circle cx="110" cy="140" r="20" stroke="var(--accent)" strokeWidth="0.8" fill="var(--illustration-fill)" opacity="0.6" />
            <circle cx="110" cy="140" r="3" fill="var(--accent)" opacity="0.5" />
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problems-wrapper { grid-template-columns: 1fr !important; }
          .problems-illustration { display: none !important; }
        }
      `}</style>
    </section>
  );
}
