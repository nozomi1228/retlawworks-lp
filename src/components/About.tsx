import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <div style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border)' }}>
      <section
        id="about"
        ref={sectionRef}
        style={{ maxWidth: '900px', margin: '0 auto', padding: '8rem 2.5rem', textAlign: 'center' }}
      >
        <div className="reveal">
          <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>About</p>
          <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.7rem, 3.8vw, 2.4rem)', fontWeight: 500, lineHeight: 1.55, color: 'var(--text-primary)', marginBottom: '3rem' }}>
            テクノロジーで、<br />本業に集中できる環境をつくる。
          </h2>
        </div>

        {/* コーヒーカップ SVG — センター配置 */}
        <div className="reveal reveal-delay-1" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', opacity: 0.65 }}>
          <svg width="150" height="160" viewBox="0 0 160 170" fill="none">
            {/* スチーム */}
            <path d="M52 42 C52 30, 62 30, 62 18" stroke="var(--illustration-stroke)" strokeWidth="1.1" fill="none" opacity="0.4" />
            <path d="M72 40 C72 24, 82 28, 82 12"  stroke="var(--illustration-stroke)" strokeWidth="1.1" fill="none" opacity="0.45" />
            <path d="M92 42 C92 30, 102 26, 102 38" stroke="var(--illustration-stroke)" strokeWidth="1.1" fill="none" opacity="0.35" />
            {/* カップ上部の縁 */}
            <ellipse cx="80" cy="52" rx="42" ry="9" stroke="var(--accent)" strokeWidth="1.2" fill="rgba(238,233,225,0.7)" opacity="0.65" />
            {/* カップ本体 */}
            <path d="M38 52 L46 138 L114 138 L122 52 Z" stroke="var(--accent)" strokeWidth="1.3" fill="var(--illustration-fill)" opacity="0.6" />
            {/* ハンドル */}
            <path d="M118 74 C148 74, 148 118, 118 118" stroke="var(--accent)" strokeWidth="1.3" fill="none" opacity="0.55" />
            {/* ソーサー */}
            <ellipse cx="80" cy="143" rx="58" ry="11" stroke="var(--illustration-stroke)" strokeWidth="1" fill="var(--illustration-fill)" opacity="0.45" />
            <ellipse cx="80" cy="143" rx="46" ry="7"  stroke="var(--illustration-stroke)" strokeWidth="0.5" fill="none" opacity="0.22" />
            {/* ラテアートの葉 (小さく) */}
            <path d="M70 80 C70 72, 80 70, 80 78 C80 70, 90 72, 90 80 C90 92, 80 100, 80 100 C80 100, 70 92, 70 80Z"
              stroke="var(--accent)" strokeWidth="0.8" fill="none" opacity="0.28" />
            <line x1="80" y1="78" x2="80" y2="100" stroke="var(--accent)" strokeWidth="0.6" opacity="0.2" />
          </svg>
        </div>

        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          {[
            'RetlawWorks（レトラワークス）は、個人経営の店舗に特化したITコンシェルジュです。',
            '提供するのは、単なるツールの導入ではありません。お店の業務フロー全体を見渡し、本当に効果のあるポイントにテクノロジーを組み込む「仕組みづくり」です。',
            'かつて"人を笑顔にする現場"で学んだ、ホスピタリティの原則。それをテクノロジーの力と掛け合わせることで、専門用語の翻訳から、ツール選定、運用定着まで——あなたが接客とサービスに100%集中できる環境を、ワンストップで整えます。',
          ].map((text, i) => (
            <p
              key={i}
              className={`reveal reveal-delay-${i + 2}`}
              style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.92rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 2.2, marginBottom: '1.4rem' }}
            >
              {text}
            </p>
          ))}

          <div className="reveal reveal-delay-5" style={{ paddingTop: '2.5rem', borderTop: '1px solid var(--border)', marginTop: '1rem' }}>
            <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--accent)', letterSpacing: '0.04em', lineHeight: 1.8, opacity: 0.7 }}>
              "RetlawWorks" ——この名前には、"テクノロジーで人を笑顔にする"という想いを込めています。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
