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
            fontFamily: "'Glacial Indifference', sans-serif",
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
        >
          RetlawWorks
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <nav style={{ display: 'flex', gap: '1.6rem', alignItems: 'center' }} className="desktop-nav">
            <a href="#solutions" className="nav-link">
              できること <span style={{ fontSize: '0.55rem', color: 'var(--text-dim)', marginLeft: '0.2rem' }}>Solutions</span>
            </a>
            <a href="#about" className="nav-link">
              私たちについて <span style={{ fontSize: '0.55rem', color: 'var(--text-dim)', marginLeft: '0.2rem' }}>About</span>
            </a>
            <a href="#voice" className="nav-link">
              お客様の声 <span style={{ fontSize: '0.55rem', color: 'var(--text-dim)', marginLeft: '0.2rem' }}>Voice</span>
            </a>
            <a href="#flow" className="nav-link">
              ご相談の流れ <span style={{ fontSize: '0.55rem', color: 'var(--text-dim)', marginLeft: '0.2rem' }}>Flow</span>
            </a>
            <a
              href="https://coconala.com/services/4098737?ref=top_histories&ref_kind=home&ref_no=1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Glacial Indifference', sans-serif",
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
              まずは相談する <span style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.55)', marginLeft: '0.2rem' }}>Contact</span>
            </a>
          </nav>

          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            aria-label="メニュー"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
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
          { href: '#solutions', label: 'できること' },
          { href: '#about',     label: '私たちについて' },
          { href: '#voice',     label: 'お客様の声' },
          { href: '#flow',      label: 'ご相談の流れ' },
          { href: '#cta',       label: 'まずは相談する' },
        ].map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            style={{
              fontFamily: "'Glacial Indifference', sans-serif",
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
