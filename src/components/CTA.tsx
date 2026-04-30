import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <section
      id="cta"
      ref={sectionRef}
      style={{ borderTop: '1px solid var(--border)', textAlign: 'center', padding: '8rem 2.5rem', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}
    >
      <div className="reveal">
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.3rem, 3.2vw, 1.7rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2rem', lineHeight: 1.7 }}>
          まずは一度、<br />お店の課題を整理してみませんか？
        </h2>
      </div>

      {/* 収束線 SVG */}
      <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem', opacity: 0.7 }}>
        <svg width="180" height="70" viewBox="0 0 180 70" fill="none">
          <line x1="0"   y1="0" x2="90" y2="65" stroke="var(--illustration-stroke)" strokeWidth="0.4" opacity="0.14" />
          <line x1="40"  y1="0" x2="90" y2="65" stroke="var(--illustration-stroke)" strokeWidth="0.4" opacity="0.14" />
          <line x1="90"  y1="0" x2="90" y2="65" stroke="var(--illustration-stroke)" strokeWidth="0.4" opacity="0.14" />
          <line x1="140" y1="0" x2="90" y2="65" stroke="var(--illustration-stroke)" strokeWidth="0.4" opacity="0.14" />
          <line x1="180" y1="0" x2="90" y2="65" stroke="var(--illustration-stroke)" strokeWidth="0.4" opacity="0.14" />
          <circle cx="90" cy="65" r="6" stroke="var(--accent)" strokeWidth="0.7" fill="var(--illustration-fill)" opacity="0.55" />
          <circle cx="90" cy="65" r="2" fill="var(--accent)" opacity="0.5" />
          <line x1="20"  y1="22" x2="60"  y2="22" stroke="var(--illustration-stroke)" strokeWidth="0.3" opacity="0.1" />
          <line x1="120" y1="22" x2="160" y2="22" stroke="var(--illustration-stroke)" strokeWidth="0.3" opacity="0.1" />
        </svg>
      </div>

      <p className="reveal" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 2, maxWidth: '520px', margin: '0 auto 3rem' }}>
        &#34;何から始めればいいかわからない&#34;——その段階がベストタイミングです。<br />
        現在の状態がどれだけ整理されていなくても、気にせずそのままご相談ください。<br />
        60分のカウンセリングで、あなたのお店専用のアクションプランをお作りします。<br /><br />
        現在、初回お試し価格 <strong>2,000円</strong> でご提供中です。
      </p>

      <div className="reveal">
        <a
          href="https://coconala.com/services/4098737?ref=top_histories&ref_kind=home&ref_no=1"
          className="cta-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          相談してみる <span className="cta-arrow">→</span>
        </a>
        <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.65rem', color: 'var(--text-dim)', marginTop: '1rem' }}>
          ※安全でスムーズな決済のため、外部プラットフォーム（ココナラ）を使用します。
        </p>
      </div>
    </section>
  );
}
