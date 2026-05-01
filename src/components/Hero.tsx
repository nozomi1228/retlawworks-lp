export default function Hero() {
  return (
    <div style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      <section
        id="hero"
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '5.5rem 2.5rem 3rem',
          maxWidth: '1100px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* ラップトップ + 植物 SVG */}
        <svg
          viewBox="0 0 280 190"
          fill="none"
          style={{
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-55%)',
            width: 'clamp(200px, 28vw, 320px)',
            opacity: 0.55,
            animation: 'heroFloat 15s ease-in-out infinite alternate',
            pointerEvents: 'none',
          }}
          className="hero-deco"
        >
          {/* スクリーン枠 */}
          <rect x="40" y="10" width="180" height="118" rx="5" stroke="var(--accent)" strokeWidth="1.2" fill="var(--illustration-fill)" opacity="0.6" />
          {/* スクリーン内ライン */}
          <line x1="60" y1="36" x2="195" y2="36" stroke="var(--illustration-stroke)" strokeWidth="1" opacity="0.4" />
          <line x1="60" y1="52" x2="175" y2="52" stroke="var(--illustration-stroke)" strokeWidth="1" opacity="0.3" />
          {/* バーチャート */}
          <rect x="80"  y="80" width="10" height="30" stroke="var(--accent)" strokeWidth="0.8" fill="var(--illustration-fill)" opacity="0.45" />
          <rect x="96"  y="68" width="10" height="42" stroke="var(--accent)" strokeWidth="0.8" fill="var(--illustration-fill)" opacity="0.55" />
          <rect x="112" y="74" width="10" height="36" stroke="var(--accent)" strokeWidth="0.8" fill="var(--illustration-fill)" opacity="0.45" />
          <rect x="128" y="60" width="10" height="50" stroke="var(--accent)" strokeWidth="0.8" fill="var(--illustration-fill)" opacity="0.55" />
          <rect x="144" y="68" width="10" height="42" stroke="var(--accent)" strokeWidth="0.8" fill="var(--illustration-fill)" opacity="0.45" />
          <line x1="72" y1="111" x2="165" y2="111" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.25" />
          {/* キーボードベース */}
          <path d="M15 128 L40 128 L220 128 L245 128 L258 150 L2 150Z" stroke="var(--illustration-stroke)" strokeWidth="1" fill="var(--illustration-fill)" opacity="0.28" />
          <line x1="38" y1="139" x2="222" y2="139" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.18" />
          {/* 植物 — 茎 */}
          <line x1="252" y1="150" x2="252" y2="95" stroke="var(--accent)" strokeWidth="1.2" opacity="0.5" />
          {/* 葉 右 */}
          <path d="M252 108 C260 98, 274 101, 270 114 C266 120, 254 117, 252 108Z" stroke="var(--accent)" strokeWidth="1" fill="var(--illustration-fill)" opacity="0.5" />
          {/* 葉 左 */}
          <path d="M252 120 C244 110, 230 113, 234 126 C238 132, 250 129, 252 120Z" stroke="var(--accent)" strokeWidth="1" fill="var(--illustration-fill)" opacity="0.4" />
          {/* 鉢 */}
          <path d="M244 150 L247 164 L257 164 L260 150Z" stroke="var(--illustration-stroke)" strokeWidth="1" fill="var(--illustration-fill)" opacity="0.38" />
          <line x1="243" y1="156" x2="261" y2="156" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.2" />
        </svg>

        <p
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 'clamp(0.78rem, 1.6vw, 0.9rem)',
            fontWeight: 300,
            color: 'var(--text-muted)',
            marginBottom: '1.4rem',
            opacity: 0,
            animation: 'heroUp 0.9s 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          ひとりで抱えていたIT課題、私たちが整理します。
        </p>

        <h1
          style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 'clamp(3rem, 6vw, 5.5rem)',
            fontWeight: 500,
            lineHeight: 1.25,
            color: 'var(--text-primary)',
            marginBottom: '1.8rem',
            opacity: 0,
            animation: 'heroUp 0.9s 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            maxWidth: '640px',
          }}
        >
          複雑を、<em style={{ fontStyle: 'normal', color: 'var(--accent)' }}>シンプル</em>に<br />再設計する。
        </h1>

        <p
          style={{
            fontFamily: "'Glacial Indifference', 'Noto Sans JP', sans-serif",
            fontSize: '0.85rem',
            lineHeight: 2,
            color: 'var(--text-muted)',
            maxWidth: '480px',
            marginBottom: '2.4rem',
            opacity: 0,
            animation: 'heroUp 0.9s 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          店舗運営 × テクノロジーのエンドツーエンド支援。<br />
          個人店に特化したITコンシェルジュが、<br />
          経営のボトルネックを一つずつ解消します。
        </p>

        <div style={{ opacity: 0, animation: 'heroUp 0.9s 2.1s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
          <a
            href="https://coconala.com/services/4098737?ref=top_histories&ref_kind=home&ref_no=1"
            className="cta-btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            相談してみる <span className="cta-arrow">→</span>
          </a>
        </div>

        {/* スクロールインジケーター */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            opacity: 0,
            animation: 'heroUp 0.9s 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          <span style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.56rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-dim)' }}>
            Scroll
          </span>
          <div style={{ width: '1px', height: '32px', background: 'linear-gradient(to bottom, var(--accent), transparent)', animation: 'scrollPulse 2.5s ease-in-out infinite' }} />
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-deco { display: none !important; }
        }
      `}</style>
    </div>
  );
}
