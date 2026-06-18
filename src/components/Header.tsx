import { useState } from 'react';
import { useScrolled } from '../hooks/useScrollY';

export default function Header() {
  const scrolled = useScrolled(50);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((v) => !v);
    document.body.style.overflow = menuOpen ? '' : 'hidden';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: scrolled ? '0.8rem 2.5rem' : '1.2rem 2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.4s ease',
          background: scrolled ? 'var(--header-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: scrolled ? 'var(--text-primary)' : '#F4F1EA',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = scrolled ? 'var(--accent)' : '#C9A66B')}
          onMouseLeave={(e) => (e.currentTarget.style.color = scrolled ? 'var(--text-primary)' : '#F4F1EA')}
        >
          RetlawWorks
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <nav style={{ display: 'flex', gap: '1.6rem', alignItems: 'center' }} className="desktop-nav">
            {(() => {
              const c = scrolled ? undefined : 'rgba(244, 241, 234, 0.8)';
              return (<>
                <a href="#solutions" className="nav-link" style={{ color: c }}>Solutions</a>
                <a href="#about"     className="nav-link" style={{ color: c }}>About</a>
                <a href="#voice"     className="nav-link" style={{ color: c }}>What to expect</a>
                <a href="#flow"      className="nav-link" style={{ color: c }}>How it works</a>
              </>);
            })()}
            <a
              href="#flow"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.68rem',
                letterSpacing: '0.08em',
                color: 'var(--bg-primary)',
                background: 'var(--accent)',
                padding: '0.5rem 1rem',
                borderRadius: '2px',
                textDecoration: 'none',
                transition: 'background 0.3s ease, transform 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--accent-light)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
                (e.currentTarget as HTMLElement).style.transform = '';
              }}
            >
              Get started
            </a>
          </nav>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            aria-label="メニュー"
            onClick={toggleMenu}
          >
            <span style={scrolled ? {} : { background: '#F4F1EA' }} />
            <span style={scrolled ? {} : { background: '#F4F1EA' }} />
            <span style={scrolled ? {} : { background: '#F4F1EA' }} />
          </button>
        </div>
      </header>

      {/* モバイルメニュー */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'var(--header-bg)',
          backdropFilter: 'blur(30px)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem',
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.4s, visibility 0.4s',
        }}
      >
        {[
          { href: '#solutions', label: 'Solutions' },
          { href: '#about',     label: 'About' },
          { href: '#voice',     label: 'What to expect' },
          { href: '#flow',      label: 'How it works' },
          { href: '#flow',      label: 'Get started' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              letterSpacing: '0.1em',
              color: 'var(--text-primary)',
              textDecoration: 'none',
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
}
