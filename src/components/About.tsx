import { useEffect, useRef, useState } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

function AboutSVG() {
  const [visible, setVisible] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (svgRef.current) observer.observe(svgRef.current);
    return () => observer.disconnect();
  }, []);

  const t = (delay: string) => ({
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(10px)',
  });

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 260"
      fill="none"
      style={{ width: '200px', flexShrink: 0, opacity: 0.7 }}
      className="about-illust"
    >
      <rect x="40" y="60" width="120" height="140" rx="4" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="var(--illustration-fill)" style={t('0ms')} />
      <line x1="40" y1="90"  x2="160" y2="90"  stroke="var(--illustration-stroke)" strokeWidth="0.3" style={t('150ms')} />
      <line x1="40" y1="120" x2="160" y2="120" stroke="var(--illustration-stroke)" strokeWidth="0.3" opacity="0.6" style={t('300ms')} />
      <line x1="40" y1="150" x2="160" y2="150" stroke="var(--illustration-stroke)" strokeWidth="0.3" opacity="0.6" style={t('450ms')} />
      <path d="M90 105 C90 98, 80 95, 80 102 C80 108, 90 115, 90 115 C90 115, 100 108, 100 102 C100 95, 90 98, 90 105Z" stroke="var(--accent)" strokeWidth="0.8" fill="var(--illustration-fill)" style={t('600ms')} />
      <text x="75" y="145" fontFamily="Glacial Indifference, monospace" fontSize="18" fill="var(--accent)" opacity="0.35" style={t('750ms')}>&lt;/&gt;</text>
      <circle cx="100" cy="40" r="15" stroke="var(--illustration-stroke)" strokeWidth="0.5" fill="none" opacity="0.3" style={t('900ms')} />
      <circle cx="100" cy="40" r="3"  fill="var(--accent)" opacity="0.4" style={t('1050ms')} />
    </svg>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ borderTop: '1px solid var(--border)', padding: '7rem 2.5rem', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}
    >
      <div className="reveal">
        <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>About</p>
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.4rem, 3.2vw, 1.9rem)', fontWeight: 500, lineHeight: 1.7, color: 'var(--text-primary)', marginBottom: '3rem' }}>
          テクノロジーで、<br />本業に集中できる環境をつくる。
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'start' }} className="about-content">
        <div>
          {[
            'RetlawWorks（レトラワークス）は、個人経営の店舗に特化したITコンシェルジュです。',
            '提供するのは、単なるツールの導入ではありません。お店の業務フロー全体を見渡し、本当に効果のあるポイントにテクノロジーを組み込む「仕組みづくり」です。',
            'かつて"人を笑顔にする現場"で学んだ、ホスピタリティの原則。それをテクノロジーの力と掛け合わせることで、専門用語の翻訳から、ツール選定、運用定着まで——あなたが接客とサービスに100%集中できる環境を、ワンストップで整えます。',
          ].map((text, i) => (
            <p
              key={i}
              className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 2.2, marginBottom: '1.5rem' }}
            >
              {text}
            </p>
          ))}
          <div className="reveal reveal-delay-3" style={{ padding: '2rem 0', borderTop: '1px solid var(--border)', marginTop: '1.5rem' }}>
            <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '1rem', fontStyle: 'italic', color: 'var(--accent)', letterSpacing: '0.03em', lineHeight: 1.8, opacity: 0.7 }}>
              "RetlawWorks" ——この名前には、"テクノロジーで人を笑顔にする"という想いを込めています。
            </p>
          </div>
        </div>

        <AboutSVG />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-content { grid-template-columns: 1fr !important; }
          .about-illust { display: none !important; }
        }
      `}</style>
    </section>
  );
}
