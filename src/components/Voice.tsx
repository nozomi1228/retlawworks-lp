import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

const voices = [
  {
    industry: 'Italian Restaurant',
    stars: '★★★★★',
    problem: 'お悩み：予約の電話対応に追われ、ランチタイムの接客に集中できなかった',
    text: 'ネット予約の導入で、営業中の電話がほぼゼロに。正直、もっと早くお願いすればよかったです。「こんな初歩的なことも聞いていいのかな」と最初は不安でしたが、本当に丁寧に対応してくださって、ITアレルギーの自分でも安心でした。',
    name: '— 都内イタリアン オーナー K.T様',
  },
  {
    industry: 'Hair Salon',
    stars: '★★★★★',
    problem: 'お悩み：LINE公式を作ったまま放置。リピーター施策が何もできていなかった',
    text: 'カウンセリングで「まずLINEだけに集中しましょう」と優先順位を整理してもらえたのが大きかったです。自動応答の設定後、リピート予約率が目に見えて上がりました。技術的なことは全部お任せできるのが本当にありがたい。',
    name: '— 横浜市 美容サロン オーナー M.S様',
  },
  {
    industry: 'Clinic',
    stars: '★★★★★',
    problem: 'お悩み：Googleマップの情報が古いまま。新規の患者さんに見つけてもらえていない気がしていた',
    text: 'MEO対策をしていただいてから、「Googleで見つけました」という新規の方が明らかに増えました。アクションプランで今後やるべきことも明確になり、ひとりで抱えていたモヤモヤが一気に晴れた感覚です。',
    name: '— 川崎市 内科クリニック 院長 Y.N様',
  },
];

export default function Voice() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <section
      id="voice"
      ref={sectionRef}
      style={{ borderTop: '1px solid var(--border)', padding: '7rem 2.5rem', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'start', marginBottom: '3rem' }} className="reveal voice-header">
        <div>
          <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>Voice</p>
          <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.4rem, 3.2vw, 1.9rem)', fontWeight: 500, lineHeight: 1.7, color: 'var(--text-primary)' }}>
            ご利用いただいた方の声
          </h2>
        </div>

        <svg width="190" height="165" viewBox="0 0 190 165" fill="none" style={{ flexShrink: 0, opacity: 0.85 }} className="voice-deco">
          <rect x="10" y="10" width="115" height="72" rx="7" stroke="var(--illustration-stroke)" strokeWidth="0.7" fill="var(--illustration-fill)" opacity="0.42" />
          <line x1="26" y1="34" x2="106" y2="34" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.3" />
          <line x1="26" y1="48" x2="86"  y2="48" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.25" />
          <line x1="26" y1="62" x2="96"  y2="62" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.2" />
          <rect x="62" y="96" width="118" height="55" rx="7" stroke="var(--accent)" strokeWidth="0.7" fill="var(--illustration-fill)" opacity="0.35" />
          <circle cx="90"  cy="124" r="3.5" fill="var(--accent)" opacity="0.38" />
          <circle cx="104" cy="124" r="3.5" fill="var(--accent)" opacity="0.38" />
          <circle cx="118" cy="124" r="3.5" fill="var(--accent)" opacity="0.38" />
          <circle cx="132" cy="124" r="3.5" fill="var(--accent)" opacity="0.38" />
          <circle cx="146" cy="124" r="3.5" fill="var(--accent)" opacity="0.28" />
          <circle cx="66" cy="88" r="3" fill="var(--illustration-stroke)" opacity="0.2" />
          <circle cx="5"   cy="130" r="2" fill="var(--accent)" opacity="0.15" />
          <circle cx="185" cy="42"  r="2" fill="var(--illustration-stroke)" opacity="0.15" />
        </svg>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {voices.map((v, i) => (
          <VoiceCard key={i} voice={v} delay={i + 1} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .voice-header { grid-template-columns: 1fr !important; }
          .voice-deco { display: none !important; }
        }
      `}</style>
    </section>
  );
}

function VoiceCard({ voice, delay }: { voice: typeof voices[0]; delay: number }) {
  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '2rem', transition: 'box-shadow 0.3s ease' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
    >
      <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>{voice.industry}</p>
      <p style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>{voice.stars}</p>
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: 'var(--text-muted)', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>{voice.problem}</p>
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.2rem' }}>{voice.text}</p>
      <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>{voice.name}</p>
    </div>
  );
}
