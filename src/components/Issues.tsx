import { useRef } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

const problems = [
  '予約対応に追われ、接客の質が下がっていると感じる',
  'オンライン上の店舗情報が最適化されていない',
  '導入したツールが運用に乗らず、放置されている',
  '日々のオペレーションに手作業が多く、スケールしない',
  '課題の優先順位が見えず、何から着手すべきかわからない',
];

export default function Issues() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  return (
    <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <section
        id="problems"
        ref={sectionRef}
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '7rem 2.5rem' }}
      >
        {/* テキスト左、イラスト右 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '5rem', alignItems: 'start' }} className="issues-grid">
          <div>
            <div className="reveal">
              <p style={{ fontFamily: "'Glacial Indifference', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>Issues</p>
              <h2 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 500, lineHeight: 1.6, color: 'var(--text-primary)', marginBottom: '3rem' }}>
                その忙しさの正体、<br />&#34;仕組みの不在&#34;かもしれません。
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {problems.map((text, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.2rem 0', borderBottom: '1px solid var(--border)' }}
                >
                  <div style={{ flexShrink: 0, width: '6px', height: '6px', marginTop: '0.65rem', border: '1px solid var(--accent)', borderRadius: '50%' }} />
                  <p style={{ fontFamily: "'Noto Sans JP', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* チェックリスト ノートイラスト */}
          <div className="reveal issues-illust" style={{ paddingTop: '3.5rem' }}>
            <svg width="180" height="230" viewBox="0 0 200 250" fill="none">
              {/* ノート表紙 */}
              <rect x="28" y="18" width="144" height="210" rx="4" stroke="var(--illustration-stroke)" strokeWidth="1" fill="var(--illustration-fill)" opacity="0.45" />
              {/* 上部ライン */}
              <line x1="28" y1="50" x2="172" y2="50" stroke="var(--illustration-stroke)" strokeWidth="0.5" opacity="0.25" />
              {/* スパイラル綴じ */}
              <circle cx="72"  cy="18" r="5" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="none" opacity="0.3" />
              <circle cx="100" cy="18" r="5" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="none" opacity="0.3" />
              <circle cx="128" cy="18" r="5" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="none" opacity="0.3" />
              {/* アイテム1: 未チェック */}
              <rect x="46" y="63" width="13" height="13" rx="1.5" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="none" opacity="0.4" />
              <line x1="67" y1="69" x2="158" y2="69" stroke="var(--illustration-stroke)" strokeWidth="0.8" opacity="0.3" />
              {/* アイテム2: チェック済み（accent） */}
              <rect x="46" y="90" width="13" height="13" rx="1.5" stroke="var(--accent)" strokeWidth="0.9" fill="rgba(139,115,85,0.08)" opacity="0.7" />
              <polyline points="49,97 54,103 62,91" stroke="var(--accent)" strokeWidth="1.3" fill="none" opacity="0.75" />
              <line x1="67" y1="96" x2="158" y2="96" stroke="var(--illustration-stroke)" strokeWidth="0.8" opacity="0.3" />
              {/* アイテム3: 未チェック */}
              <rect x="46" y="117" width="13" height="13" rx="1.5" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="none" opacity="0.4" />
              <line x1="67" y1="123" x2="148" y2="123" stroke="var(--illustration-stroke)" strokeWidth="0.8" opacity="0.25" />
              {/* アイテム4: 未チェック */}
              <rect x="46" y="144" width="13" height="13" rx="1.5" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="none" opacity="0.4" />
              <line x1="67" y1="150" x2="155" y2="150" stroke="var(--illustration-stroke)" strokeWidth="0.8" opacity="0.22" />
              {/* アイテム5: 未チェック */}
              <rect x="46" y="171" width="13" height="13" rx="1.5" stroke="var(--illustration-stroke)" strokeWidth="0.8" fill="none" opacity="0.35" />
              <line x1="67" y1="177" x2="150" y2="177" stroke="var(--illustration-stroke)" strokeWidth="0.8" opacity="0.2" />
              {/* 時計（右下） */}
              <circle cx="148" cy="210" r="16" stroke="var(--accent)" strokeWidth="0.9" fill="var(--illustration-fill)" opacity="0.5" />
              <line x1="148" y1="210" x2="148" y2="199" stroke="var(--accent)" strokeWidth="1.1" opacity="0.55" />
              <line x1="148" y1="210" x2="157" y2="216" stroke="var(--accent)" strokeWidth="1.1" opacity="0.55" />
              <circle cx="148" cy="210" r="2" fill="var(--accent)" opacity="0.5" />
            </svg>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .issues-grid { grid-template-columns: 1fr !important; }
          .issues-illust { display: none !important; }
        }
      `}</style>
    </div>
  );
}
