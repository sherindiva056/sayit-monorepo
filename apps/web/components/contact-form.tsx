'use client';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';
import { sendContactEmail } from '../lib/contact-email';

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const submit = useRef<HTMLButtonElement>(null);
  useEffect(() => { if (success && !dialog.current?.open) dialog.current?.showModal(); }, [success]);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setError(''); setPending(true);
    try {
      await sendContactEmail({ name: String(data.get('name') || ''), email: String(data.get('email') || ''), message: String(data.get('message') || ''), website: String(data.get('website') || '') });
      form.reset(); setSuccess(true);
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Koneksi bermasalah. Silakan coba lagi.'); }
    finally { setPending(false); }
  }

  return <>
    <form aria-labelledby="contact-title" aria-busy={pending} onSubmit={sendMessage} className="contact-form">
      <p id="form-note">Semua kolom wajib diisi. Pesanmu akan dikirim ke tim SayIt melalui email.</p>
      <fieldset disabled={pending} className="contact-fields">
        <div className="form-row">
          <div><label htmlFor="name">Nama lengkap</label><input id="name" name="name" autoComplete="name" required aria-required="true" aria-describedby="form-note" maxLength={100} /></div>
          <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required aria-required="true" maxLength={254} /></div>
        </div>
        <label htmlFor="message">Pesan</label><textarea id="message" name="message" rows={4} required aria-required="true" maxLength={5000} />
        <div className="contact-trap" aria-hidden="true"><label htmlFor="website">Biarkan kolom ini kosong</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      </fieldset>
      <button ref={submit} className="button primary" type="submit" disabled={pending}>{pending ? <>Mengirim pesan… <LoaderCircle aria-hidden="true" size={20}/></> : <>Kirim pesan <ArrowUpRight aria-hidden="true" size={20}/></>}</button>
      <p role="status" className="sr-only">{pending ? 'Pesan sedang dikirim. Mohon tunggu.' : ''}</p>
      <p role="alert" className="form-error">{error}</p>
    </form>
    <dialog ref={dialog} className="success-card" aria-labelledby="success-title" aria-describedby="success-description" onClose={() => { setSuccess(false); submit.current?.focus(); }}>
      <div className="success-check"><Check aria-hidden="true" size={30}/></div>
      <p className="eyebrow">TERIMA KASIH SUDAH MENGHUBUNGI KAMI</p>
      <h2 id="success-title">Pesan berhasil dikirim!</h2>
      <p id="success-description">Pesanmu sudah dikirim ke email tim SayIt. Terima kasih atas pertanyaan dan masukannya.</p>
      <button type="button" className="button primary" autoFocus onClick={() => dialog.current?.close()}>Selesai</button>
    </dialog>
  </>;
}
