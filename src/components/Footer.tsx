const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/retlawworks/' },
  { label: 'X',         href: 'https://x.com/retlawworks' },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem 2.5rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
          RetlawWorks
        </div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-dim)', textDecoration: 'none', fontFamily: "'Inter', sans-serif", fontSize: '0.68rem', letterSpacing: '0.1em', transition: 'color 0.3s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'var(--text-dim)'; }}
            >
              {label}
            </a>
          ))}
        </div>

        <p style={{ width: '100%', textAlign: 'center', marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)', fontFamily: "'Inter', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--text-dim)', marginBottom: '0.8rem' }}>
          © 2026 RetlawWorks. All rights reserved.
        </p>
        <p style={{ width: '100%', textAlign: 'center', fontFamily: "'Inter', sans-serif", fontSize: '0.58rem', color: 'var(--text-dim)', lineHeight: 1.7, opacity: 0.7, maxWidth: '680px', margin: '0 auto' }}>
          RetlawWorks is an independent service and is not affiliated with, authorized by, or endorsed by The Walt Disney Company or Oriental Land Co., Ltd. All Disney-related names and trademarks are the property of their respective owners.
        </p>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '1.6rem', paddingTop: '1.4rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.54rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-dim)', opacity: 0.5, marginBottom: '0.5rem' }}>
            Business information
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.54rem', color: 'var(--text-dim)', lineHeight: 1.9, opacity: 0.45, maxWidth: '560px', margin: '0 auto' }}>
            Operated by RetlawWorks, a sole proprietorship based in Japan.<br />
            Full business address and contact details are available upon request.<br />
            For inquiries, please use the contact form above.
          </p>
        </div>
      </div>
    </footer>
  );
}
