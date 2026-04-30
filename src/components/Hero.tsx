export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '8rem 2.5rem 6rem',
        maxWidth: '1100px',
        margin: '0 auto',
        position: 'relative',
      }}
    >
      {/* 同心円 SVG — 外側リングを60秒で回転 */}
      <svg
        viewBox="0 0 300 300"
        fill="none"
        style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: '300px',
          height: '300px',
          opacity: 0.12,
          animation: 'heroFloat 15s ease-in-out infinite alternate',
        }}
        className="hero-deco"
      >
        <g style={{ transformOrigin: '150px 150px', animation: 'svgRotate 60s linear infinite' }}>
          <circle cx="150" cy="150" r="120" stroke="var(--illustration-stroke)" strokeWidth="0.5" fill="none" opacity="0.4" />
          <circle cx="150" cy="150" r="80"  stroke="var(--illustration-stroke)" strokeWidth="0.5" fill="none" opacity="0.3" />
          <line x1="30"  y1="150" x2="270" y2="150" stroke="var(--illustration-stroke)" strokeWidth="0.3" opacity="0.2" />
          <line x1="150" y1="30"  x2="150" y2="270" stroke="var(--illustration-stroke)" strokeWidth="0.3" opacity="0.2" />
        </g>
        <circle cx="150" cy="150" r="40" stroke="var(--illustration-stroke)" strokeWidth="0.5" fill="var(--illustration-fill)" opacity="0.5" />
        <circle cx="150" cy="150" r="4"  fill="var(--accent)" opacity="0.6" />
      </svg>

      <p
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 'clamp(0.82rem, 1.8vw, 0.95rem)',
          fontWeight: 300,
          color: 'var(--text-muted)',
          marginBottom: '1.8rem',
          opacity: 0,
          animation: 'heroUp 0.9s 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        ひとりで抱えていたIT課題、私たちが整理します。
      </p>

      <h1
        style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 'clamp(2.4rem, 6.5vw, 4.2rem)',
          fontWeight: 500,
          lineHeight: 1.3,
          color: 'var(--text-primary)',
          marginBottom: '2.2rem',
          opacity: 0,
          animation: 'heroUp 0.9s 1.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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
          maxWidth: '520px',
          marginBottom: '3rem',
          opacity: 0,
          animation: 'heroUp 0.9s 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        店舗運営 × テクノロジーのエンドツーエンド支援。<br />
        個人店に特化したITコンシェルジュが、<br />
        経営のボトルネックを一つずつ解消します。
      </p>

      <div style={{ opacity: 0, animation: 'heroUp 0.9s 2.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
        <a
          href="https://coconala.com/services/4098737?ref=top_histories&ref_kind=home&ref_no=1"
          className="cta-btn-ghost"
          target="_blank"
          rel="noopener noreferrer"
        >
          相談してみる <span className="cta-arrow">→</span>
        </a>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0,
          animation: 'heroUp 0.9s 2.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        <span
          style={{
            fontFamily: "'Glacial Indifference', sans-serif",
            fontSize: '0.58rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--text-dim)',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '35px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'scrollPulse 2.5s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
