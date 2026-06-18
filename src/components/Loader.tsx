import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    // 2回目以降の訪問はローダーをスキップ
    if (sessionStorage.getItem('rw_loaded')) {
      loader.style.display = 'none';
      return;
    }

    // CSS animation が全フェーズ（約4.75s）を完結させる。
    // JS はタイミング後に DOM から除去するだけ。
    const timer = setTimeout(() => {
      loader.style.display = 'none';
      sessionStorage.setItem('rw_loaded', '1');
    }, 4800);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
