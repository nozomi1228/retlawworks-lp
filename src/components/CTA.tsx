import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

function XIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 8.5C17.5 5.5 14.5 4 12 4c-4.5 0-8 3.5-8 8s3.5 8 8 8c3.5 0 6.5-2 7.5-5" />
      <path d="M14 12c0 2.5-1 4-2 4s-2-1.5-2-4 1-4 2-4 2 1.5 2 4z" />
      <path d="M14 12c1 0 5 0 5 3" />
    </svg>
  );
}

const snsLinks = [
  { href: 'https://x.com/retlawworks',                  Icon: XIcon,         label: 'X (Twitter)' },
  { href: 'https://www.instagram.com/retlawworks/',      Icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://www.threads.com/@retlawworks',        Icon: ThreadsIcon,   label: 'Threads' },
];

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
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <svg width="160" height="196" viewBox="0 0 140 170" fill="none">
            {/* 光の線（背後） */}
            <line x1="70" y1="0"   x2="50" y2="28" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
            <line x1="70" y1="0"   x2="70" y2="28" stroke="var(--accent)" strokeWidth="1" opacity="0.4" />
            <line x1="70" y1="0"   x2="90" y2="28" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
            {/* ドアフレーム */}
            <rect x="22" y="22" width="96" height="130" rx="2" stroke="var(--illustration-stroke)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.6" />
            {/* ドアパネル */}
            <rect x="30" y="30" width="80" height="114" rx="1" stroke="var(--accent)" strokeWidth="1.8" fill="rgba(238,233,225,0.5)" opacity="0.8" />
            {/* ドア上部の採光窓 */}
            <path d="M38 30 A32 28 0 0 1 102 30" stroke="var(--illustration-stroke)" strokeWidth="1.2" fill="none" opacity="0.5" />
            <line x1="70" y1="30" x2="70" y2="10" stroke="var(--illustration-stroke)" strokeWidth="1" opacity="0.4" />
            {/* ドアノブ */}
            <circle cx="98" cy="90" r="5" stroke="var(--accent)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.8" />
            <line x1="93" y1="90" x2="85" y2="90" stroke="var(--accent)" strokeWidth="1.5" opacity="0.7" />
            {/* ドア縦パネルライン */}
            <line x1="70" y1="35" x2="70" y2="138" stroke="var(--illustration-stroke)" strokeWidth="1" opacity="0.35" />
            {/* 敷居 */}
            <line x1="10" y1="152" x2="130" y2="152" stroke="var(--illustration-stroke)" strokeWidth="1.5" opacity="0.65" />
            <rect x="16" y="147" width="108" height="6" rx="1" stroke="var(--illustration-stroke)" strokeWidth="1" fill="var(--illustration-fill)" opacity="0.5" />
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
        </div>

        {/* SNS 問い合わせ導線 */}
        <div className="reveal reveal-delay-4" style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: 'var(--text-dim)', marginBottom: '1.4rem', letterSpacing: '0.04em' }}>
            他の方法でもお気軽にご相談ください
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
            {snsLinks.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: 'var(--accent)', transition: 'color 0.25s ease, transform 0.25s ease', display: 'flex', alignItems: 'center' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                  (e.currentTarget as HTMLElement).style.transform = '';
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
