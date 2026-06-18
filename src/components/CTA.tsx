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

const snsLinks = [
  { href: 'https://x.com/retlawworks',             Icon: XIcon,         label: 'X (Twitter)' },
  { href: 'https://www.instagram.com/retlawworks/', Icon: InstagramIcon, label: 'Instagram' },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <div style={{ background: '#1A2A45' }}>
      <section
        id="cta"
        ref={sectionRef}
        style={{ maxWidth: '900px', margin: '0 auto', padding: '9rem 2.5rem', textAlign: 'center' }}
      >
        {/* 店舗ドア SVG */}
        <div className="reveal" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <svg width="160" height="196" viewBox="0 0 140 170" fill="none">
            {/* 光の線（背後） */}
            <line x1="70" y1="0"   x2="50" y2="28" stroke="#C9A66B" strokeWidth="1" opacity="0.5" />
            <line x1="70" y1="0"   x2="70" y2="28" stroke="#C9A66B" strokeWidth="1" opacity="0.6" />
            <line x1="70" y1="0"   x2="90" y2="28" stroke="#C9A66B" strokeWidth="1" opacity="0.5" />
            {/* ドアフレーム */}
            <rect x="22" y="22" width="96" height="130" rx="2" stroke="rgba(244,241,234,0.35)" strokeWidth="1.5" fill="rgba(201,166,107,0.07)" opacity="0.8" />
            {/* ドアパネル */}
            <rect x="30" y="30" width="80" height="114" rx="1" stroke="#C9A66B" strokeWidth="1.8" fill="rgba(201,166,107,0.10)" opacity="0.85" />
            {/* ドア上部の採光窓 */}
            <path d="M38 30 A32 28 0 0 1 102 30" stroke="rgba(244,241,234,0.35)" strokeWidth="1.2" fill="none" opacity="0.7" />
            <line x1="70" y1="30" x2="70" y2="10" stroke="rgba(244,241,234,0.35)" strokeWidth="1" opacity="0.55" />
            {/* ドアノブ */}
            <circle cx="98" cy="90" r="5" stroke="#C9A66B" strokeWidth="1.5" fill="rgba(201,166,107,0.15)" opacity="0.9" />
            <line x1="93" y1="90" x2="85" y2="90" stroke="#C9A66B" strokeWidth="1.5" opacity="0.8" />
            {/* ドア縦パネルライン */}
            <line x1="70" y1="35" x2="70" y2="138" stroke="rgba(244,241,234,0.3)" strokeWidth="1" opacity="0.5" />
            {/* 敷居 */}
            <line x1="10" y1="152" x2="130" y2="152" stroke="rgba(244,241,234,0.4)" strokeWidth="1.5" opacity="0.7" />
            <rect x="16" y="147" width="108" height="6" rx="1" stroke="rgba(244,241,234,0.3)" strokeWidth="1" fill="rgba(201,166,107,0.08)" opacity="0.65" />
          </svg>
        </div>

        <div className="gold-line" style={{ marginLeft: 'auto', marginRight: 'auto' }} />
        <div className="reveal reveal-delay-1">
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.5rem, 3.5vw, 2rem)', fontWeight: 500, color: '#F4F1EA', marginBottom: '2rem', lineHeight: 1.4 }}>
            Your best Tokyo Disney trip starts here
          </h2>
        </div>

        <p className="reveal reveal-delay-2" style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: 'rgba(244, 241, 234, 0.72)', lineHeight: 2, maxWidth: '520px', margin: '0 auto 3rem' }}>
          Tell me about your trip, and I'll handle the rest —<br />
          so your family can focus on the magic.
        </p>

        <div className="reveal reveal-delay-3">
          <a href="#flow" className="cta-btn" style={{ background: '#C9A66B', color: '#1A2A45' }}>
            Build your plan <span className="cta-arrow">→</span>
          </a>
        </div>

        {/* SNS links */}
        <div className="reveal reveal-delay-4" style={{ marginTop: '3rem', paddingTop: '2.5rem', borderTop: '1px solid rgba(244, 241, 234, 0.13)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: 'rgba(244, 241, 234, 0.52)', marginBottom: '1.4rem', letterSpacing: '0.04em' }}>
            Or reach out on social media
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', alignItems: 'center' }}>
            {snsLinks.map(({ href, Icon, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: 'rgba(244, 241, 234, 0.65)', transition: 'color 0.25s ease, transform 0.25s ease', display: 'flex', alignItems: 'center' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = '#C9A66B';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(244, 241, 234, 0.65)';
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
