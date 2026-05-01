import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

const cards = [
  { title: 'MEO対策',         en: 'MEO Optimization',    desc: 'Googleマップの情報設計で、ローカル検索からの集客を強化' },
  { title: 'LINE公式構築',    en: 'LINE Setup',           desc: '公式アカウントの構築から自動応答の設計まで' },
  { title: 'ネット予約の導入', en: 'Reservation System',  desc: '無料ツールを活用した予約導線の構築。電話対応コストを削減' },
  { title: 'AI秘書システム',   en: 'AI Secretary',         desc: '問い合わせ対応・事務処理をAIで自動化' },
  { title: 'Excel・自動化',    en: 'Data & Automation',    desc: '売上管理・シフト作成をExcel/GASで仕組み化' },
  { title: 'チャットボット導入', en: 'Chatbot Integration', desc: 'よくある質問への自動応答で、対応工数を最小化' },
  { title: 'お店のマニュアル作成', en: 'Operations Manual', desc: 'スマホ対応の業務マニュアルで、属人化を解消' },
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
            <div className="reveal">
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>Solutions</p>
              <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 500, lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                たとえば、こんなアプローチがあります。
              </h2>
            </div>
            <p className="reveal" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '2.5rem' }}>
              まずは課題整理カウンセリングで、あなたのお店の課題を整理します。<br />
              60分後には&#34;明日、何から手をつけるべきか&#34;がクリアになります。
            </p>

            {/* メインサービスカード */}
            <div
              className="reveal"
              style={{
                background: 'linear-gradient(135deg, #f1eee8, #f8f5f0)',
                border: '1px solid var(--border-accent)',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.7rem' }}>First Step</p>
              <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>課題整理カウンセリング</h3>
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.68rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '1rem' }}>Issue Assessment Counseling</p>
              <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.3rem' }}>
                課題の棚卸しと優先順位の整理。あなたのお店専用の「アクションプラン」を作成します。
              </p>
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.78rem', color: 'var(--accent)', marginBottom: '1.6rem', letterSpacing: '0.04em' }}>
                お試し価格 <strong style={{ fontSize: '1.4rem', fontWeight: 700 }}>¥2,000</strong>
              </p>
              <a href="https://coconala.com/services/4098737?ref=top_histories&ref_kind=home&ref_no=1" className="cta-btn" target="_blank" rel="noopener noreferrer">
                相談してみる <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        <p className="reveal" style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--text-dim)', marginBottom: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
          ▼ カウンセリング後にご提案できるソリューションの一例
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--border)' }}>
          {cards.map((card, i) => (
            <SolutionCard key={card.title} card={card} delay={Math.min(i + 1, 7)} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .solutions-intro { grid-template-columns: 1fr !important; }
          .solutions-illust-left { display: none !important; }
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
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{card.title}</p>
      <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '0.7rem' }}>{card.en}</p>
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.8rem', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.7 }}>{card.desc}</p>
    </div>
  );
}
