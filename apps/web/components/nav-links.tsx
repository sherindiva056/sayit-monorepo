'use client';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const links = [
  { id: 'beranda', label: 'Beranda' },
  { id: 'tentang', label: 'Tentang Kami' },
  { id: 'fitur', label: 'Fitur' },
  { id: 'kontak', label: 'Kontak' },
];

export function NavLinks() {
  const [active, setActive] = useState('beranda');
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });
  const navRef = useRef<HTMLElement>(null);
  const lockRef = useRef(false);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const measure = useCallback(() => {
    const el = navRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`);
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
  }, [active]);

  useLayoutEffect(measure, [measure]);

  useEffect(() => {
    const update = () => {
      // While a click-triggered smooth scroll is running, keep the clicked item
      // active so the indicator glides once instead of stepping through sections.
      if (lockRef.current) {
        clearTimeout(lockTimer.current);
        lockTimer.current = setTimeout(() => { lockRef.current = false; }, 120);
        return;
      }
      const offset = window.innerHeight * 0.35;
      let current = links[0].id;
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = links[links.length - 1].id;
      }
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const onClick = (id: string) => {
    lockRef.current = true;
    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => { lockRef.current = false; }, 1000);
    setActive(id);
  };

  return (
    <nav ref={navRef} aria-label="Navigasi utama" className="nav-links">
      {links.map(({ id, label }) => (
        <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => onClick(id)}>
          {label}
        </a>
      ))}
      <span
        aria-hidden="true"
        className="nav-indicator"
        data-ready={indicator.ready}
        style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
      />
    </nav>
  );
}
