import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

const steps = [
  {
    num: '01',
    label: 'Contact',
    title: 'まずはメッセージを送る',
    desc: 'ココナラから「相談希望」と送るだけ。テンプレートは不要です。何を相談していいかわからない状態でも問題ありません。',
    micro: '※決済の安全性とやり取りの透明性を担保するため、国内最大級のスキルマーケット「ココナラ」のシステムを利用しています。',
  },
  {
    num: '02',
    label: 'Session',
    title: '60分の課題整理カウンセリング',
    desc: '現状の課題をヒアリングし、あなたのお店専用の「アクションプラン」を作成します。専門知識は一切不要です。',
    micro: null,
  },
  {
    num: '03',
    label: 'Clear',
    title: 'まず何をすべきかが明確に',
    desc: 'カウンセリング後には「明日、まず何から手をつけるべきか」がクリアになります。その上で、必要なサポートがあればご提案します。',
    micro: null,
  },
];

/* ステップアイコン SVG */
function StepIcon({ step }: { step: number }) {
  if (step === 0) {
    // 封筒
    return (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="10" width="36" height="24" rx="2" stroke="var(--accent)" strokeWidth="1.2" fill="var(--illustration-fill)" opacity="0.6" />
        <polyline points="4,10 22,26 40,10" stroke="var(--accent)" strokeWidth="1.2" fill="none" opacity="0.55" />
      </svg>
    );
  }
  if (step === 1) {
    // 吹き出し
    return (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect x="4" y="6" width="36" height="26" rx="5" stroke="var(--accent)" strokeWidth="1.2" fill="var(--illustration-fill)" opacity="0.6" />
        <path d="M10 32 L10 40 L20 32 Z" stroke="var(--accent)" strokeWidth="1.2" fill="var(--illustration-fill)" opacity="0.55" />
        <line x1="12" y1="16" x2="32" y2="16" stroke="var(--accent)" strokeWidth="1" opacity="0.45" />
        <line x1="12" y1="22" x2="26" y2="22" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
      </svg>
    );
  }
  // 電球
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <path d="M22 6 C14 6, 8 12, 8 20 C8 26, 12 30, 16 33 L16 37 L28 37 L28 33 C32 30, 36 26, 36 20 C36 12, 30 6, 22 6Z"
        stroke="var(--accent)" strokeWidth="1.2" fill="var(--illustration-fill)" opacity="0.6" />
      <line x1="17" y1="40" x2="27" y2="40" stroke="var(--accent)" strokeWidth="1.2" opacity="0.5" />
      <line x1="19" y1="43" x2="25" y2="43" stroke="var(--accent)" strokeWidth="1.2" opacity="0.4" />
      <line x1="22" y1="14" x2="22" y2="28" stroke="var(--accent)" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
    </svg>
  );
}

export default function Flow() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <div style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      <section
        id="flow"
        ref={sectionRef}
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '7rem 2.5rem' }}
      >
        <div className="reveal" style={{ marginBottom: '4rem' }}>
          <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>Flow</p>
          <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 500, lineHeight: 1.6, color: 'var(--text-primary)' }}>
            3ステップで、明日の一手が見えてきます。
          </h2>
        </div>

        {/* 横並び3カード */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px', background: 'var(--border)' }} className="flow-steps">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal${i > 0 ? ` reveal-delay-${i}` : ''}`}
              style={{ background: 'var(--bg-primary)', padding: '2.5rem 2rem', position: 'relative' }}
            >
              {/* ステップ番号 */}
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '3rem', fontWeight: 700, color: 'var(--accent)', opacity: 0.18, lineHeight: 1, marginBottom: '1rem' }}>{step.num}</p>
              {/* アイコン */}
              <div style={{ marginBottom: '1.2rem' }}>
                <StepIcon step={i} />
              </div>
              {/* ラベル */}
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>{step.label}</p>
              {/* タイトル */}
              <h3 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.8rem', lineHeight: 1.5 }}>{step.title}</h3>
              {/* 説明 */}
              <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.82rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.9 }}>{step.desc}</p>
              {step.micro && (
                <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.66rem', color: 'var(--text-dim)', marginTop: '0.8rem', lineHeight: 1.6 }}>{step.micro}</p>
              )}
              {/* カード間の矢印（最後以外） */}
              {i < steps.length - 1 && (
                <div style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', zIndex: 1 }} className="flow-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <polyline points="8,4 16,12 8,20" stroke="var(--accent)" strokeWidth="1" opacity="0.35" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .flow-steps { grid-template-columns: 1fr !important; }
          .flow-arrow { display: none !important; }
        }
      `}</style>
    </div>
  );
}
