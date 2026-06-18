export default function Hero() {
  return (
    <div style={{ background: '#1A2A45', position: 'relative' }}>
      <section
        id="hero"
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '5.5rem 2.5rem 3rem',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        <h1
          style={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
            fontWeight: 500,
            lineHeight: 1.25,
            color: '#F4F1EA',
            marginBottom: '1.8rem',
            opacity: 0,
            animation: 'heroUp 0.9s 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            maxWidth: '760px',
          }}
        >
          Your perfect Tokyo Disney trip,<br />
          designed by a Tokyo local who's{' '}
          <em style={{ fontStyle: 'italic', color: '#C9A66B' }}>obsessed</em>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.95rem',
            lineHeight: 1.9,
            color: '#A9B4C6',
            maxWidth: '440px',
            marginBottom: '2.8rem',
            opacity: 0,
            animation: 'heroUp 0.9s 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          }}
        >
          Planned by a Tokyo local who knows the parks inside out —
          made just for your family.
        </p>

        <div style={{ opacity: 0, animation: 'heroUp 0.9s 2.0s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
          <a
            href="#flow"
            className="cta-btn"
            style={{ background: '#C9A66B', color: '#1A2A45', borderColor: '#C9A66B' }}
          >
            Build your plan <span className="cta-arrow">→</span>
          </a>
        </div>

        {/* Scroll indicator */}
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
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.56rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#9DB0CC',
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: '1px',
              height: '32px',
              background: 'linear-gradient(to bottom, #9DB0CC, transparent)',
              animation: 'scrollPulse 2.5s ease-in-out infinite',
            }}
          />
        </div>
      </section>
    </div>
  );
}
