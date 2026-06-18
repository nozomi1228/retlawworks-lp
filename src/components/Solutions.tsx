import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

const cards = [
  {
    title: 'Your personal Tokyo Disney plan',
    price: 'From $300',
    desc: 'A custom day-by-day strategy built around your family — ride priorities, timing, dining, and a foolproof payment setup. Delivered as a clear, easy-to-follow guide.',
  },
  {
    title: "The Tokyo fan's guide, ready to download",
    price: 'From $25',
    desc: "A self-guided PDF covering the essentials — how to buy tickets that actually work, app setup, and the timing tricks locals use. Perfect if you'd rather plan it yourself.",
  },
];

/* タブレット＋ダッシュボード SVG（イラスト左、テキスト右） */
function TabletSVG() {
  return (
    <svg viewBox="0 0 160 200" fill="none" style={{ width: 'clamp(220px, 28vw, 340px)', height: 'auto', flexShrink: 0 }}>
      {/* タブレット本体 */}
      <rect x="15" y="8" width="130" height="174" rx="10" stroke="var(--accent)" strokeWidth="1.8" fill="var(--illustration-fill)" opacity="0.85" />
      {/* スクリーン */}
      <rect x="23" y="22" width="114" height="140" rx="3" stroke="var(--illustration-stroke)" strokeWidth="1" fill="rgba(244,241,235,0.4)" opacity="0.75" />
      {/* ホームボタン */}
      <circle cx="80" cy="174" r="6" stroke="var(--illustration-stroke)" strokeWidth="1.2" fill="none" opacity="0.6" />
      {/* カレンダーアイコン */}
      <rect x="32" y="32" width="36" height="34" rx="2" stroke="var(--accent)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.8" />
      <line x1="32" y1="42" x2="68" y2="42" stroke="var(--accent)" strokeWidth="1.2" opacity="0.7" />
      <line x1="44" y1="32" x2="44" y2="42" stroke="var(--accent)" strokeWidth="1.2" opacity="0.65" />
      <line x1="56" y1="32" x2="56" y2="42" stroke="var(--accent)" strokeWidth="1.2" opacity="0.65" />
      <rect x="36" y="48" width="6" height="6" stroke="var(--illustration-stroke)" strokeWidth="1" fill="none" opacity="0.65" />
      <rect x="47" y="48" width="6" height="6" stroke="var(--illustration-stroke)" strokeWidth="1" fill="none" opacity="0.65" />
      <rect x="58" y="48" width="6" height="6" stroke="var(--illustration-stroke)" strokeWidth="1" fill="none" opacity="0.65" />
      {/* チャットアイコン */}
      <rect x="92" y="32" width="36" height="34" rx="5" stroke="var(--accent)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.75" />
      <line x1="100" y1="44" x2="120" y2="44" stroke="var(--illustration-stroke)" strokeWidth="1.2" opacity="0.6" />
      <line x1="100" y1="52" x2="116" y2="52" stroke="var(--illustration-stroke)" strokeWidth="1.2" opacity="0.5" />
      <path d="M92 62 L92 68 L99 63 L128 63" stroke="var(--illustration-stroke)" strokeWidth="1" fill="none" opacity="0.5" />
      {/* バーチャート */}
      <line x1="32" y1="140" x2="128" y2="140" stroke="var(--illustration-stroke)" strokeWidth="1" opacity="0.55" />
      <rect x="40"  y="124" width="10" height="16" stroke="var(--accent)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.7" />
      <rect x="55"  y="112" width="10" height="28" stroke="var(--accent)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.85" />
      <rect x="70"  y="118" width="10" height="22" stroke="var(--accent)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.7" />
      <rect x="85"  y="106" width="10" height="34" stroke="var(--accent)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.85" />
      <rect x="100" y="112" width="10" height="28" stroke="var(--accent)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.7" />
      <rect x="115" y="120" width="10" height="20" stroke="var(--accent)" strokeWidth="1.5" fill="var(--illustration-fill)" opacity="0.65" />
    </svg>
  );
}

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <div style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      <section
        id="solutions"
        ref={sectionRef}
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '7rem 2.5rem' }}
      >
        {/* イラスト左、テキスト右のレイアウト */}
        <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '5rem', alignItems: 'start', marginBottom: '4rem' }} className="solutions-intro">
          <div className="reveal solutions-illust-left" style={{ paddingTop: '1rem' }}>
            <TabletSVG />
          </div>
          <div>
            <div className="gold-line" />
            <div className="reveal">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>Solutions</p>
              <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 500, lineHeight: 1.4, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Everything sorted,<br />before you even land
              </h2>
            </div>
          </div>
        </div>

        <div className="solutions-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {cards.map((card, i) => (
            <SolutionCard key={card.title} card={card} delay={i + 1} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .solutions-intro { grid-template-columns: 1fr !important; }
          .solutions-illust-left { display: none !important; }
          .solutions-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function SolutionCard({ card, delay }: { card: typeof cards[0]; delay: number }) {
  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      style={{ background: 'var(--bg-card)', padding: '2rem', transition: 'all 0.35s ease', position: 'relative', cursor: 'default' }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = 'var(--bg-card-hover)';
        el.style.transform = 'translateY(-2px)';
        el.style.boxShadow = 'var(--shadow-sm)';
        const bar = el.querySelector('.card-top-bar') as HTMLElement;
        if (bar) bar.style.width = '100%';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.background = 'var(--bg-card)';
        el.style.transform = '';
        el.style.boxShadow = '';
        const bar = el.querySelector('.card-top-bar') as HTMLElement;
        if (bar) bar.style.width = '0';
      }}
    >
      <div className="card-top-bar" style={{ position: 'absolute', top: 0, left: 0, width: 0, height: '2px', background: 'var(--accent)', transition: 'width 0.35s ease' }} />
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{card.title}</p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.06em', marginBottom: '0.8rem', opacity: 0.75 }}>{card.price}</p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.8 }}>{card.desc}</p>
    </div>
  );
}
