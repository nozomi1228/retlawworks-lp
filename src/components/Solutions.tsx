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

export default function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      style={{ borderTop: '1px solid var(--border)', padding: '7rem 2.5rem', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}
    >
      <div className="reveal">
        <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>Solutions</p>
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.4rem, 3.2vw, 1.9rem)', fontWeight: 500, lineHeight: 1.7, color: 'var(--text-primary)', marginBottom: '3rem' }}>
          たとえば、こんなアプローチがあります。
        </h2>
      </div>

      <p className="reveal" style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 2, marginBottom: '3rem' }}>
        まずは課題整理カウンセリングで、あなたのお店の課題を整理します。<br />
        60分後には&#34;明日、何から手をつけるべきか&#34;がクリアになります。
      </p>

      {/* メインサービスカード */}
      <div
        className="reveal"
        style={{
          background: 'linear-gradient(135deg, #f1eee8, #f8f5f0)',
          border: '1px solid var(--border-accent)',
          padding: '3rem',
          marginBottom: '1.5rem',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-md)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
        <div>
          <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.8rem' }}>First Step</p>
          <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.2rem, 2.8vw, 1.5rem)', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>課題整理カウンセリング</h3>
          <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '1.2rem' }}>Issue Assessment Counseling</p>
          <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            課題の棚卸しと優先順位の整理。あなたのお店専用の「アクションプラン」を作成します。
          </p>
          <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.78rem', color: 'var(--accent)', marginBottom: '1.8rem', letterSpacing: '0.04em' }}>
            お試し価格 <strong style={{ fontSize: '1.5rem', fontWeight: 700 }}>¥2,000</strong>
          </p>
          <a
            href="https://coconala.com/services/4098737?ref=top_histories&ref_kind=home&ref_no=1"
            className="cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            相談してみる <span className="cta-arrow">→</span>
          </a>
        </div>

        {/* ネットワーク SVG — 3円が脈動 */}
        <svg
          viewBox="0 0 160 160"
          fill="none"
          style={{ width: '160px', height: '160px', flexShrink: 0 }}
          className="solution-main-illust"
        >
          <circle cx="80" cy="40" r="12" stroke="var(--accent)" strokeWidth="0.8" fill="var(--illustration-fill)"
            style={{ animation: 'breathe 4s ease-in-out 0s infinite' }} />
          <circle cx="40" cy="100" r="12" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="var(--illustration-fill)"
            style={{ animation: 'breathe 4s ease-in-out 1.3s infinite' }} />
          <circle cx="120" cy="100" r="12" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="var(--illustration-fill)"
            style={{ animation: 'breathe 4s ease-in-out 2.6s infinite' }} />
          <line x1="80" y1="52" x2="45" y2="90"  stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.5" />
          <line x1="80" y1="52" x2="115" y2="90" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.5" />
          <line x1="52" y1="100" x2="108" y2="100" stroke="var(--illustration-stroke)" strokeWidth="0.3" strokeDasharray="3 3" opacity="0.3" />
          <circle cx="80" cy="40" r="3" fill="var(--accent)" opacity="0.6" />
        </svg>
      </div>

      <p className="reveal" style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.68rem', letterSpacing: '0.12em', color: 'var(--text-dim)', marginBottom: '1.8rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
        ▼ カウンセリング後にご提案できるソリューションの一例
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'var(--border)' }}>
        {cards.map((card, i) => (
          <SolutionCard key={card.title} card={card} delay={i + 1} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .solution-main-illust { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function SolutionCard({ card, delay }: { card: typeof cards[0]; delay: number }) {
  return (
    <div
      className={`reveal reveal-delay-${Math.min(delay, 7)}`}
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
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{card.title}</p>
      <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.6rem', color: 'var(--text-dim)', letterSpacing: '0.08em', marginBottom: '0.7rem' }}>{card.en}</p>
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.7 }}>{card.desc}</p>
    </div>
  );
}
