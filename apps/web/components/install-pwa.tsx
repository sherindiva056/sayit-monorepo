'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Camera, Volume2, Image as ImageIcon, Smartphone, X, ArrowUpRight, Share, PlusSquare } from 'lucide-react';

// Browsers only allow a site to install *itself* to the home screen, so the
// actual install + permission prompts must happen on the PWA's own domain.
// The modal explains what will happen, then hands the user over to it.
const PWA_URL = process.env.NEXT_PUBLIC_PWA_URL ?? 'https://app.sayit.id';
const OPEN_EVENT = 'sayit:install-open';

const permissions = [
  { icon: Camera, title: 'Kamera', text: 'Mengenali uang, tanggal kedaluwarsa, dan dokumen.' },
  { icon: Volume2, title: 'Suara', text: 'Membacakan hasil pengenalan dengan jelas.' },
  { icon: ImageIcon, title: 'Foto', text: 'Opsional, memindai gambar dari galeri.' },
];

/** Any button on the page can open the single shared install modal. */
export function InstallTrigger({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      {children}
    </button>
  );
}

/** Render once per page. */
export function InstallPwaDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsIos(/iphone|ipad|ipod/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const open = () => {
      const dialog = ref.current;
      if (!dialog || dialog.open) return;
      // Keep the page exactly where it is while the modal is open.
      document.documentElement.classList.add('modal-open');
      dialog.showModal();
      dialog.querySelector<HTMLButtonElement>('.install-primary')?.focus({ preventScroll: true });
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, [mounted]);

  const close = () => ref.current?.close();
  const proceed = () => {
    const url = new URL(PWA_URL);
    url.searchParams.set('install', '1');
    window.location.href = url.toString();
  };

  if (!mounted) return null;

  return createPortal(
    <dialog
      ref={ref}
      className="install-card"
      aria-labelledby="install-title"
      onClose={() => document.documentElement.classList.remove('modal-open')}
      onClick={(e) => e.target === ref.current && close()}
    >
      <div className="install-inner">
        <button type="button" className="install-close" onClick={close} aria-label="Tutup"><X size={18} /></button>

        <div className="install-head">
          <div className="install-icon"><Smartphone aria-hidden="true" size={26} /></div>
          <h2 id="install-title">Pasang SayIt di Home Screen</h2>
          <p>Buka SayIt dengan satu sentuhan dari layar utama.</p>
        </div>

        <p className="install-label">Izin yang akan diminta</p>
        <ul className="install-perms">
          {permissions.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <span className="install-perm-icon"><Icon aria-hidden="true" size={18} /></span>
              <div><strong>{title}</strong><p>{text}</p></div>
            </li>
          ))}
        </ul>

        {isIos && (
          <p className="install-ios">Di iPhone: ketuk <Share aria-label="Bagikan" size={15} /> lalu <PlusSquare aria-label="Tambah" size={15} /> <b>Tambah ke Layar Utama</b>.</p>
        )}

        <div className="install-actions">
          <button type="button" className="button primary install-primary" onClick={proceed}>Install SayIt<ArrowUpRight aria-hidden="true" size={18} /></button>
          <button type="button" className="install-later" onClick={close}>Nanti saja</button>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
