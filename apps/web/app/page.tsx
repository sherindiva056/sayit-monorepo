import { ArrowUpRight, ArrowRight, AudioLines, ScanLine, Banknote, CalendarDays, FileText, Camera, MoveUpRight, Smartphone } from 'lucide-react';
import { Reveal } from '../components/motion';
import { ContactForm } from '../components/contact-form';
import { ThemeToggle } from '../components/theme-toggle';
import { BrandLogo } from '../components/brand-logo';
import { NavLinks } from '../components/nav-links';
import { InstallTrigger, InstallPwaDialog } from '../components/install-pwa';
import { ProductPreview, FeatureIllustration } from '../components/product-preview';
const features = [
  { icon: Banknote, number: '01', title: 'Kenali Nominal Uang', description: 'Mendeteksi lembaran uang Rupiah dan menghitung totalnya.', detail: 'Lebih yakin dalam setiap transaksi.' },
  { icon: CalendarDays, number: '02', title: 'Baca Tanggal Kedaluwarsa', description: 'Menemukan dan membacakan teks tanggal pada kemasan makanan.', detail: 'Informasi kecil, arti yang besar.' },
  { icon: FileText, number: '03', title: 'Bacakan Dokumen', description: 'Mengubah teks dari kertas atau buku menjadi suara secara instan.', detail: 'Buka lebih banyak cerita.' },
];
export default function Home() {
  return <>
    <a href="#main" className="skip-link">Lewati ke konten utama</a>
    <header className="header shell"><a className="logo" href="#beranda" aria-label="SayIt, beranda"><BrandLogo /></a><NavLinks /><ThemeToggle /><InstallTrigger className="button nav-cta">Coba SayIt <ArrowUpRight aria-hidden="true" size={18} /></InstallTrigger></header>
    <main id="main" tabIndex={-1}>
      <section id="beranda" className="hero shell" aria-labelledby="hero-title"><div className="hero-copy"><p className="hero-kicker"><span className="status-dot" /> Dibuat untuk kemandirian</p><h1 id="hero-title" lang="en">Your World, <span>Voiced.</span></h1><p className="hero-description">Aplikasi asistif berbasis suara untuk membantu disabilitas netra mengenali informasi visual di sekitar hanya dengan satu sentuhan.</p><div className="actions"><InstallTrigger className="button primary">Install SayIt <ArrowUpRight aria-hidden="true" size={22} /></InstallTrigger><a className="button secondary" href="#fitur">Kenali Fitur <ArrowRight aria-hidden="true" size={20} /></a></div><p className="hero-note"><AudioLines aria-hidden="true" size={20} /> Arahkan kamera. Dengarkan dunia.</p></div>
        <ProductPreview />
      </section>
      <div className="principles"><div className="shell principles-inner"><span><Camera aria-hidden="true" /> Kamera sebagai mata</span><span><AudioLines aria-hidden="true" /> Suara sebagai panduan</span><span><ScanLine aria-hidden="true" /> Dirancang untuk kemudahan</span></div></div>
      <section id="tentang" aria-labelledby="about-title" className="section shell"><Reveal><div className="about-grid"><div><p className="eyebrow">01 / TENTANG KAMI</p><h2 id="about-title">Tentang SayIt<span className="accent">.</span></h2></div><div><p className="large-copy">Dunia penuh informasi.<br /><span className="muted">Setiap orang berhak mengaksesnya.</span></p><p>Berawal dari riset pemrosesan citra, SayIt dirancang untuk mendobrak hambatan informasi visual. Kami percaya teknologi harus inklusif. Aplikasi ini menggabungkan AI dan interaksi suara untuk memberikan kemandirian bagi penyandang disabilitas netra dalam aktivitas sehari-hari.</p></div></div></Reveal></section>
      <section id="fitur" aria-labelledby="features-title" className="section shell features"><Reveal><div className="section-heading"><div><p className="eyebrow">02 / FITUR UTAMA</p><h2 id="features-title">Satu sentuhan.<br />Banyak kemungkinan.</h2></div></div><div className="feature-grid">{features.map(({ icon: Icon, ...f }) => <article className="feature-card" key={f.number} aria-labelledby={`feature-${f.number}`}><FeatureIllustration number={f.number} /><div className="card-top"><div className="feature-icon"><Icon aria-hidden="true" size={29} /></div><span>{f.number}</span></div><h3 id={`feature-${f.number}`}>{f.title}</h3><p>{f.description}</p><div className="card-detail">{f.detail}<MoveUpRight aria-hidden="true" size={19} /></div></article>)}</div></Reveal></section>
      <section id="cara-kerja" className="section shell" aria-labelledby="how-title"><Reveal><div className="how-panel"><div><p className="eyebrow">DIBUAT UNTUK TERASA SEDERHANA</p><h2 id="how-title">Camera-First.<br />Voice-First.</h2><p>Interaksi yang mengutamakan kamera dan suara, dari awal hingga informasi terdengar.</p></div><ol className="steps">{[['Arahkan kamera', 'Arahkan ke uang, kemasan, atau dokumen.'], ['Sentuh untuk mengenali', 'Mulai pemindaian dengan satu sentuhan.'], ['Dengarkan informasinya', 'Hasil pengenalan dibacakan melalui suara.']].map(([title, text], i) => <li key={title}><span className="step-number">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></Reveal></section>
      <section id="prototipe" className="prototype shell" aria-labelledby="prototype-title"><p className="eyebrow">LANGKAH KECIL, AKSES LEBIH LUAS</p><h2 id="prototype-title">Kenali dunia dengan cara baru.</h2><p>Pasang SayIt langsung di layar utama ponselmu dan mulai kenali dunia dengan satu sentuhan.</p><div className="actions prototype-actions"><InstallTrigger className="button primary"><Smartphone aria-hidden="true" size={20} /> Pasang di Home Screen</InstallTrigger></div></section>
      <section id="kontak" className="section shell contact-grid" aria-labelledby="contact-title"><div><p className="eyebrow">03 / MARI TERHUBUNG</p><h2 id="contact-title">Hubungi Kami<span className="accent">.</span></h2><p>Punya pertanyaan atau ide untuk SayIt? Kami ingin mendengarnya.</p><div className="contact-mark" aria-hidden="true"><AudioLines size={80} strokeWidth={1.5} /></div></div><ContactForm /></section>
    </main><InstallPwaDialog /><footer className="shell footer"><a href="#beranda" className="logo" aria-label="SayIt, kembali ke beranda"><BrandLogo /></a><p>© {new Date().getFullYear()} SayIt. Akses untuk semua.</p></footer>
  </>;
  // 
}







