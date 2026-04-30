const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/retlawworks/' },
  { label: 'Threads',   href: 'https://www.threads.com/@retlawworks?xmt=AQF0Tl6656LT6NiT7kjhtAhgGI2KBr6IR4rGRVeQgShk23c' },
  { label: 'X',         href: 'https://x.com/retlawworks' },
  { label: 'note',      href: 'https://note.com/retlawworks' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem 2.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
          RetlawWorks
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-dim)', textDecoration: 'none', fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.68rem', letterSpacing: '0.1em', transition: 'color 0.3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-dim)'; }}
            >
              {label}
            </a>
          ))}
        </div>

        <div>
          <a
            href="#"
            style={{ color: 'var(--text-dim)', textDecoration: 'none', fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.68rem', transition: 'color 0.3s' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-dim)'; }}
          >
            特定商取引法に基づく表記
          </a>
        </div>

        <p style={{ width: '100%', textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--text-dim)' }}>
          © 2025 RetlawWorks. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
