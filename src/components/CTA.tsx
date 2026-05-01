import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <div style={{ background: 'linear-gradient(to bottom, var(--bg-primary) 0%, rgba(139,115,85,0.07) 100%)', borderTop: '1px solid var(--border)' }}>
      <section
        id="cta"
        ref={sectionRef}
        style={{ maxWidth: '900px', margin: '0 auto', padding: '9rem 2.5rem', textAlign: 'center' }}
      >
        {/* 店舗ドア SVG */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', opacity: 0.6 }}>
          <svg width="130" height="160" viewBox="0 0 140 170" fill="none">
            {/* 光の線（背後） */}
            <line x1="70" y1="0"   x2="50" y2="28" stroke="var(--accent)" strokeWidth="0.6" opacity="0.18" />
            <line x1="70" y1="0"   x2="70" y2="28" stroke="var(--accent)" strokeWidth="0.6" opacity="0.22" />
            <line x1="70" y1="0"   x2="90" y2="28" stroke="var(--accent)" strokeWidth="0.6" opacity="0.18" />
            {/* ドアフレーム */}
            <rect x="22" y="22" width="96" height="130" rx="2" stroke="var(--illustration-stroke)" strokeWidth="1" fill="var(--illustration-fill)" opacity="0.35" />
            {/* ドアパネル */}
            <rect x="30" y="30" width="80" height="114" rx="1" stroke="var(--accent)" strokeWidth="1.3" fill="rgba(238,233,225,0.5)" opacity="0.55" />
            {/* ドア上部の採光窓 */}
            <path d="M38 30 A32 28 0 0 1 102 30" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="none" opacity="0.3" />
            <line x1="70" y1="30" x2="70" y2="10" stroke="var(--illustration-stroke)" strokeWidth="0.6" opacity="0.22" />
            {/* ドアノブ */}
            <circle cx="98" cy="90" r="5" stroke="var(--accent)" strokeWidth="1.1" fill="var(--illustration-fill)" opacity="0.55" />
            <line x1="93" y1="90" x2="85" y2="90" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
            {/* ドア縦パネルライン */}
            <line x1="70" y1="35" x2="70" y2="138" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.18" />
            {/* 敷居 */}
            <line x1="10" y1="152" x2="130" y2="152" stroke="var(--illustration-stroke)" strokeWidth="1.2" opacity="0.4" />
            <rect x="16" y="147" width="108" height="6" rx="1" stroke="var(--illustration-stroke)" strokeWidth="0.5" fill="var(--illustration-fill)" opacity="0.3" />
          </svg>
        </div>

        <div className="reveal reveal-delay-1">
          <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '2rem', lineHeight: 1.65 }}>
            まずは一度、<br />お店の課題を整理してみませんか？
          </h2>
        </div>

        <p className="reveal reveal-delay-2" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 2.1, maxWidth: '560px', margin: '0 auto 3rem' }}>
          &#34;何から始めればいいかわからない&#34;——その段階がベストタイミングです。<br />
          現在の状態がどれだけ整理されていなくても、気にせずそのままご相談ください。<br />
          60分のカウンセリングで、あなたのお店専用のアクションプランをお作りします。<br /><br />
          現在、初回お試し価格 <strong>2,000円</strong> でご提供中です。
        </p>

        <div className="reveal reveal-delay-3">
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
    </div>
  );
}
