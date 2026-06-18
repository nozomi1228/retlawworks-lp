import { useEffect, useRef, useState } from 'react';
import { useRevealAnimation } from '../hooks/useIntersectionObserver';

const questions = [
  {
    id: 'q1',
    label: "Who's traveling?",
    options: ['Family with young kids', 'Family with teens', 'Couple', 'Solo'],
  },
  {
    id: 'q2',
    label: 'What matters most?',
    options: ['Thrill rides', 'Character meets & greets', 'Shows & parades', 'Food & dining'],
  },
  {
    id: 'q3',
    label: 'Your ideal pace?',
    options: ['See everything', 'Relaxed and flexible'],
  },
  {
    id: 'q4',
    label: 'Budget style?',
    options: ['Maximize value', 'Premium experience'],
  },
];

const responses: Record<string, Record<string, string>> = {
  q1: {
    'Family with young kids': "Wonderful — the parks are pure magic through a child's eyes.",
    'Family with teens':      "Great — I'll balance thrills with moments everyone enjoys.",
    'Couple':                 "Lovely — a Tokyo Disney trip for two has its own kind of magic.",
    'Solo':                   "Respect — solo park days are underrated. Let's make it perfect.",
  },
  q2: {
    'Thrill rides':             "Noted — I know exactly when to hit them with the shortest waits.",
    'Character meets & greets': "Lovely — these moments become the photos you'll treasure most.",
    'Shows & parades':          "Great choice — timing and seating make all the difference here.",
    'Food & dining':            "A person after my own heart — the food here is half the fun.",
  },
  q3: {
    'See everything':       "Ambitious — I love it. I'll map a route that misses nothing.",
    'Relaxed and flexible': "Perfect — the best memories often happen between the plans.",
  },
  q4: {
    'Maximize value':     "Smart — I'll show you where every yen counts most.",
    'Premium experience': "Wonderful — I'll make sure every upgrade is truly worth it.",
  },
};

type Answers = Record<string, string>;

const inputStyle: React.CSSProperties = {
  width: '100%',
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.88rem',
  color: 'var(--text-primary)',
  background: 'var(--bg-card)',
  border: '1px solid var(--border)',
  padding: '0.85rem 1rem',
  outline: 'none',
  transition: 'border-color 0.25s',
  borderRadius: 0,
};

export default function Flow() {
  const sectionRef = useRef<HTMLElement>(null);
  useRevealAnimation(sectionRef);

  const [answers, setAnswers]       = useState<Answers>({});
  const [name, setName]             = useState('');
  const [email, setEmail]           = useState('');
  const [extra, setExtra]           = useState('');
  const [submitting, setSubmitting]       = useState(false);
  const [submitted, setSubmitted]         = useState(false);
  const [leaving, setLeaving]             = useState(false);
  const [error, setError]                 = useState('');
  const [lockedHeight, setLockedHeight]   = useState<number | null>(null);

  const handleSelect = (qId: string, option: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: option }));
  };

  const handleSubmit = async (e: React.FormEvent | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/xnjykooq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          "Who's traveling":   answers.q1 || '—',
          'What matters most': answers.q2 || '—',
          'Ideal pace':        answers.q3 || '—',
          'Budget style':      answers.q4 || '—',
          message:             extra || '—',
        }),
      });
      if (res.ok) {
        setLockedHeight(sectionRef.current?.offsetHeight ?? null);
        setLeaving(true);
        setTimeout(() => setSubmitted(true), 450);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      <section
        id="flow"
        ref={sectionRef}
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '7rem 2.5rem',
          minHeight: lockedHeight ?? undefined,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* ヘッダー — submitted 後も DOM に残し高さを保持（maxHeight 崩壊なし） */}
        <div style={{
          opacity: leaving || submitted ? 0 : 1,
          pointerEvents: leaving || submitted ? 'none' : 'auto',
          transition: 'opacity 0.4s ease',
        }}>
          <div className="gold-line" />
          <div className="reveal" style={{ marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1.2rem' }}>Plan</p>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', fontWeight: 500, lineHeight: 1.4, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Build your plan
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              Answer a few quick questions and I'll craft a custom Tokyo Disney plan, made just for your family.
            </p>
          </div>
        </div>

        {/* 共通コンテナ — 完了画面を中央配置 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: submitted ? 'center' : 'stretch',
          justifyContent: submitted ? 'center' : 'flex-start',
          flex: submitted ? 1 : undefined,
        }}>

        {submitted ? (
          /* ── 完了画面 ── */
          <div className="success-screen">
            {/* ゴールドチェックマーク */}
            <div className="success-icon" aria-hidden="true">
              <svg width="64" height="64" viewBox="0 0 56 56" fill="none">
                {/* 円 — stroke-dasharray = 2π × 22 ≈ 138.23、上端から描画するため -90deg 回転 */}
                <circle
                  cx="28" cy="28" r="22"
                  stroke="#C9A66B" strokeWidth="1.5"
                  className="check-circle"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '28px 28px' }}
                />
                {/* チェック — パス長 ≈ 30 */}
                <path
                  d="M17 28 L24 35 L39 19"
                  stroke="#C9A66B" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="check-mark"
                />
              </svg>
            </div>

            <h2 className="success-title" style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: 'clamp(1.35rem, 3vw, 1.85rem)',
              fontWeight: 500,
              color: '#1A2A45',
              lineHeight: 1.45,
              marginBottom: '1.4rem',
              maxWidth: '480px',
            }}>
              Thank you — your trip is in good hands.
            </h2>

            <p className="success-sub" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 300,
              color: '#6B655B',
              lineHeight: 1.9,
              maxWidth: '420px',
            }}>
              I'll personally review your answers and get back to you within 24 hours with the first details of your plan.
            </p>
          </div>
        ) : (
          /* ── フォーム（leaving 中はフェードアウト） ── */
          <div style={{
            opacity: leaving ? 0 : 1,
            transition: 'opacity 0.4s ease',
            pointerEvents: leaving ? 'none' : 'auto',
          }}>
            <form className="reveal reveal-delay-1" onSubmit={handleSubmit} noValidate>

              {/* Q1〜Q4 */}
              {questions.map((q) => (
                <div key={q.id} style={{ marginBottom: '2.5rem' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.04em', marginBottom: '1rem' }}>
                    {q.label}
                  </p>
                  <div
                    className={q.options.length === 2 ? 'opts-2' : 'opts-4'}
                    style={{ display: 'grid', gap: '0.6rem', gridTemplateColumns: `repeat(${q.options.length === 2 ? 2 : 2}, 1fr)` }}
                  >
                    {q.options.map((opt) => {
                      const selected = answers[q.id] === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => handleSelect(q.id, opt)}
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.82rem',
                            fontWeight: selected ? 500 : 300,
                            color: selected ? 'var(--text-primary)' : 'var(--text-muted)',
                            background: selected ? 'var(--accent-dim)' : 'var(--bg-card)',
                            border: `1px solid ${selected ? 'var(--accent)' : 'var(--border)'}`,
                            padding: '0.75rem 1rem',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            borderRadius: 0,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                            lineHeight: 1.4,
                          }}
                          onMouseEnter={(e) => {
                            if (!selected) {
                              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-accent)';
                              (e.currentTarget as HTMLElement).style.background = 'var(--bg-card-hover)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!selected) {
                              (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                              (e.currentTarget as HTMLElement).style.background = 'var(--bg-card)';
                            }
                          }}
                        >
                          <span style={{
                            flexShrink: 0,
                            width: '10px',
                            height: '10px',
                            border: `1px solid ${selected ? 'var(--accent)' : 'var(--illustration-stroke)'}`,
                            borderRadius: '50%',
                            background: selected ? 'var(--accent)' : 'transparent',
                            transition: 'all 0.2s ease',
                          }} />
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* 返しの一言 */}
                  <div style={{ minHeight: '2rem', marginTop: '0.75rem' }}>
                    {answers[q.id] && responses[q.id]?.[answers[q.id]] && (
                      <p
                        key={answers[q.id]}
                        className="reply-msg"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: '0.8rem',
                          fontStyle: 'italic',
                          fontWeight: 300,
                          color: '#A8804A',
                          margin: 0,
                          lineHeight: 1.6,
                          opacity: 0,
                        }}
                      >
                        {responses[q.id][answers[q.id]]}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* 区切り線 */}
              <div style={{ borderTop: '1px solid var(--border)', marginBottom: '2.5rem' }} />

              {/* 連絡先フィールド */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }} className="contact-fields">
                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                    Your name <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane"
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--border-accent)'; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--border)'; }}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                    Your email <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    style={inputStyle}
                    onFocus={(e) => { (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--border-accent)'; }}
                    onBlur={(e)  => { (e.currentTarget as HTMLInputElement).style.borderColor = 'var(--border)'; }}
                  />
                </div>
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', opacity: 0.85 }}>
                Anything else about your Japan trip — food, manners, hidden spots? Just ask. I'm always happy to help.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', display: 'block', marginBottom: '0.4rem' }}>
                  Anything else? <span style={{ fontWeight: 300, opacity: 0.6 }}>(optional)</span>
                </label>
                <textarea
                  value={extra}
                  onChange={(e) => setExtra(e.target.value)}
                  placeholder="Dates, special requests, questions..."
                  rows={3}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '90px' }}
                  onFocus={(e) => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'var(--border-accent)'; }}
                  onBlur={(e)  => { (e.currentTarget as HTMLTextAreaElement).style.borderColor = 'var(--border)'; }}
                />
              </div>

              {/* エラー */}
              {error && (
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: '#b94040', marginBottom: '1rem' }}>
                  {error}
                </p>
              )}

              {/* 送信ボタン — type="button" で form submit をトリガーせず onClick のみで処理 */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="cta-btn"
                style={{ opacity: submitting ? 0.6 : 1, cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? 'Sending...' : 'Get my custom plan'}
                {!submitting && <span className="cta-arrow">→</span>}
              </button>
            </form>
          </div>
        )}

        </div>{/* /共通コンテナ */}
      </section>

      <style>{`
        /* ── 返し一言 ── */
        @keyframes replyFadeIn {
          from { opacity: 0; transform: translateY(7px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .reply-msg {
          animation: replyFadeIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* ── 完了画面 キーフレーム ── */
        @keyframes successIconIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawMark {
          to { stroke-dashoffset: 0; }
        }
        @keyframes successFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* 完了画面 レイアウト */
        .success-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0.5rem 1rem 1.5rem;
        }

        /* チェックアイコン本体 */
        .success-icon {
          opacity: 0;
          transform: scale(0.8);
          animation: successIconIn 0.5s ease-out forwards;
          margin-bottom: 2.8rem;
        }

        /* 円の描画 — 開始を stroke-dashoffset: 138.23 に設定 */
        .check-circle {
          stroke-dasharray: 138.23;
          stroke-dashoffset: 138.23;
          animation: drawCircle 0.7s ease-out forwards;
        }

        /* チェックマーク描画 — 0.5s 遅延で円の後に描く */
        .check-mark {
          stroke-dasharray: 30;
          stroke-dashoffset: 30;
          animation: drawMark 0.35s 0.5s ease-out forwards;
        }

        /* メインメッセージ — チェック完了後 0.5s から */
        .success-title {
          opacity: 0;
          transform: translateY(10px);
          animation: successFadeUp 0.6s 0.5s ease-out forwards;
        }

        /* サブメッセージ — さらに 0.15s 後 */
        .success-sub {
          opacity: 0;
          transform: translateY(10px);
          animation: successFadeUp 0.6s 0.65s ease-out forwards;
        }

        /* prefers-reduced-motion: draw演出をスキップ、単純フェードに */
        @media (prefers-reduced-motion: reduce) {
          @keyframes replyFadeIn { from { opacity: 0; } to { opacity: 1; } }
          .reply-msg     { animation-duration: 0.2s; }

          .success-icon  { transform: scale(1); animation: successIconIn 0.3s ease-out forwards; }
          .check-circle  { stroke-dashoffset: 0; animation: none; }
          .check-mark    { stroke-dashoffset: 0; animation: none; }
          .success-title { transform: translateY(0); animation: successFadeUp 0.3s 0.1s ease-out forwards; }
          .success-sub   { transform: translateY(0); animation: successFadeUp 0.3s 0.2s ease-out forwards; }
        }

        @media (max-width: 600px) {
          .opts-2, .opts-4 { grid-template-columns: 1fr !important; }
          .contact-fields  { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
