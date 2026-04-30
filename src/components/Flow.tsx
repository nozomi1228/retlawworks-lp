import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

const steps = [
  {
    num: '01',
    label: 'Contact',
    title: 'まずはメッセージを送る',
    desc: 'ココナラから「相談希望」と送るだけ。テンプレートは不要です。\n何を相談していいかわからない状態でも問題ありません。',
    micro: '※決済の安全性とやり取りの透明性を担保するため、国内最大級のスキルマーケット「ココナラ」のシステムを利用しています。',
  },
  {
    num: '02',
    label: 'Session',
    title: '60分の課題整理カウンセリング',
    desc: '現状の課題をヒアリングし、あなたのお店専用の「アクションプラン」を作成します。\n専門知識は一切不要です。',
    micro: null,
  },
  {
    num: '03',
    label: 'Clear',
    title: 'まず何をすべきかが明確に',
    desc: 'カウンセリング後には「明日、まず何から手をつけるべきか」がクリアになります。\nその上で、必要なサポートがあればご提案します。無理に進めることはありません。',
    micro: null,
  },
];

export default function Flow() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <section
      id="flow"
      ref={sectionRef}
      style={{ borderTop: '1px solid var(--border)', padding: '7rem 2.5rem', maxWidth: '1100px', margin: '0 auto', position: 'relative' }}
    >
      <div className="reveal">
        <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.5rem' }}>Flow</p>
        <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.4rem, 3.2vw, 1.9rem)', fontWeight: 500, lineHeight: 1.7, color: 'var(--text-primary)', marginBottom: '3rem' }}>
          3ステップで、明日の一手が見えてきます。
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }} className="flow-wrapper">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
              style={{ display: 'grid', gridTemplateColumns: '70px 1fr', gap: '2rem', padding: '2.5rem 0', borderBottom: '1px solid var(--border)', alignItems: 'start' }}
            >
              <div style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent)', opacity: 0.25, lineHeight: 1 }}>{step.num}</div>
              <div>
                <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem' }}>{step.label}</p>
                <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>{step.title}</h3>
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.82rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-line' }}>{step.desc}</p>
                {step.micro && (
                  <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.68rem', color: 'var(--text-dim)', marginTop: '0.8rem', lineHeight: 1.6 }}>{step.micro}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal flow-illustration" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.85 }}>
          <svg width="130" height="320" viewBox="0 0 130 320" fill="none">
            <line x1="45" y1="30" x2="45" y2="290" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.22" />
            {/* Node 01 */}
            <circle cx="45" cy="60"  r="13" stroke="var(--accent)" strokeWidth="0.8" fill="var(--illustration-fill)" opacity="0.65" />
            <circle cx="45" cy="60"  r="4"  fill="var(--accent)" opacity="0.55" />
            <line x1="58" y1="55" x2="95" y2="42" stroke="var(--illustration-stroke)" strokeWidth="0.4" strokeDasharray="4 3" opacity="0.3" />
            <line x1="58" y1="65" x2="95" y2="72" stroke="var(--illustration-stroke)" strokeWidth="0.4" strokeDasharray="4 3" opacity="0.2" />
            {/* Node 02 */}
            <circle cx="45" cy="160" r="13" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="var(--illustration-fill)" opacity="0.42" />
            <circle cx="45" cy="160" r="4"  fill="var(--illustration-stroke)" opacity="0.35" />
            <line x1="58" y1="155" x2="95" y2="144" stroke="var(--illustration-stroke)" strokeWidth="0.4" strokeDasharray="4 3" opacity="0.25" />
            <line x1="58" y1="165" x2="95" y2="172" stroke="var(--illustration-stroke)" strokeWidth="0.4" strokeDasharray="4 3" opacity="0.18" />
            {/* Node 03 */}
            <circle cx="45" cy="260" r="13" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="var(--illustration-fill)" opacity="0.42" />
            <circle cx="45" cy="260" r="4"  fill="var(--illustration-stroke)" opacity="0.35" />
            <line x1="58" y1="255" x2="95" y2="245" stroke="var(--illustration-stroke)" strokeWidth="0.4" strokeDasharray="4 3" opacity="0.25" />
            <line x1="58" y1="265" x2="95" y2="272" stroke="var(--illustration-stroke)" strokeWidth="0.4" strokeDasharray="4 3" opacity="0.18" />
            <line x1="8" y1="60"  x2="32" y2="60"  stroke="var(--illustration-stroke)" strokeWidth="0.3" opacity="0.15" />
            <line x1="8" y1="160" x2="32" y2="160" stroke="var(--illustration-stroke)" strokeWidth="0.3" opacity="0.15" />
            <line x1="8" y1="260" x2="32" y2="260" stroke="var(--illustration-stroke)" strokeWidth="0.3" opacity="0.15" />
            <circle cx="112" cy="105" r="2"   fill="var(--accent)" opacity="0.2" />
            <circle cx="14"  cy="200" r="1.5" fill="var(--illustration-stroke)" opacity="0.2" />
            <circle cx="118" cy="225" r="2"   fill="var(--illustration-stroke)" opacity="0.15" />
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .flow-wrapper { display: block !important; }
          .flow-illustration { display: none !important; }
        }
      `}</style>
    </section>
  );
}
