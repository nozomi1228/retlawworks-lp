import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('page-loader');
    if (!loader) return;

    if (sessionStorage.getItem('rw_loaded')) {
      loader.style.display = 'none';
      return;
    }

    const timer = setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
        sessionStorage.setItem('rw_loaded', '1');
      }, 500);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
