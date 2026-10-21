'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const sync = () => setLight(document.documentElement.dataset.theme === 'light');
    sync();
    const onStorage = (event: StorageEvent) => {
      if (event.key !== 'sayit-theme') return;
      document.documentElement.dataset.theme = event.newValue === 'light' ? 'light' : 'dark';
      sync();
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  function toggle() {
    const next = !light;
    document.documentElement.dataset.theme = next ? 'light' : 'dark';
    setLight(next);
    try { localStorage.setItem('sayit-theme', next ? 'light' : 'dark'); } catch { /* Theme still works when storage is unavailable. */ }
  }

  return <button type="button" role="switch" className="theme-toggle" onClick={toggle} aria-label="Mode terang" aria-checked={light} title={light ? 'Beralih ke mode gelap' : 'Beralih ke mode terang'}>
    <span className="theme-track" aria-hidden="true">
      <span className="theme-thumb" />
      <Moon className="theme-moon" size={16} />
      <Sun className="theme-sun" size={16} />
    </span>
  </button>;
}
