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
    <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <section
        id="voice"
        ref={sectionRef}
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '7rem 2.5rem' }}
      >
        <div className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>Voice</p>
          <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 500, lineHeight: 1.6, color: 'var(--text-primary)' }}>
            ご利用いただいた方の声
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="voice-grid">
          {voices.map((v, i) => (
            <VoiceCard key={i} voice={v} delay={i + 1} />
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .voice-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function VoiceCard({ voice, delay }: { voice: typeof voices[0]; delay: number }) {
  return (
    <div
      className={`reveal reveal-delay-${delay}`}
      style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', padding: '2rem', transition: 'box-shadow 0.3s ease', display: 'flex', flexDirection: 'column' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)'; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
    >
      <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.8rem' }}>{voice.industry}</p>
      <p style={{ color: 'var(--accent)', fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>{voice.stars}</p>
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.76rem', fontWeight: 300, color: 'var(--text-muted)', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>{voice.problem}</p>
      <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.2rem', flexGrow: 1 }}>{voice.text}</p>
      <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.72rem', color: 'var(--text-dim)', letterSpacing: '0.05em' }}>{voice.name}</p>
    </div>
  );
}
