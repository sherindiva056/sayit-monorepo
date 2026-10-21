import { ArrowUpRight, ArrowRight, AudioLines, ScanLine, Banknote, CalendarDays, FileText, Camera, MoveUpRight } from 'lucide-react';
import { Reveal } from '../components/motion';
import { ContactForm } from '../components/contact-form';
import { ThemeToggle } from '../components/theme-toggle';
import { BrandLogo } from '../components/brand-logo';
import { ProductPreview, FeatureIllustration } from '../components/product-preview';
const features = [
  { icon: Banknote, number: '01', title: 'Kenali Nominal Uang', description: 'Mendeteksi lembaran uang Rupiah dan menghitung totalnya.', detail: 'Lebih yakin dalam setiap transaksi.' },
  { icon: CalendarDays, number: '02', title: 'Baca Tanggal Kedaluwarsa', description: 'Menemukan dan membacakan teks tanggal pada kemasan makanan.', detail: 'Informasi kecil, arti yang besar.' },
  { icon: FileText, number: '03', title: 'Bacakan Dokumen', description: 'Mengubah teks dari kertas atau buku menjadi suara secara instan.', detail: 'Buka lebih banyak cerita.' },
];
export default function Home() {
  return <>
    <a href="#main" className="skip-link">Lewati ke konten utama</a>
    <header className="header shell"><a className="logo" href="#beranda" aria-label="SayIt, beranda"><BrandLogo /></a><nav aria-label="Navigasi utama"><a href="#beranda" aria-current="page">Beranda</a><a href="#tentang">Tentang Kami</a><a href="#fitur">Fitur</a><a href="#kontak">Kontak</a></nav><ThemeToggle /><a className="button nav-cta" href="#prototipe">Coba Prototipe <ArrowUpRight aria-hidden="true" size={18} /></a></header>
    <main id="main" tabIndex={-1}>
      <section id="beranda" className="hero shell" aria-labelledby="hero-title"><div className="hero-copy"><p className="hero-kicker"><span className="status-dot" /> Dibuat untuk kemandirian</p><h1 id="hero-title" lang="en">Your World, <span>Voiced.</span></h1><p className="hero-description">Aplikasi asistif berbasis suara untuk membantu disabilitas netra mengenali informasi visual di sekitar hanya dengan satu sentuhan.</p><div className="actions"><a className="button primary" href="#fitur">Pelajari Fitur <ArrowUpRight aria-hidden="true" size={22} /></a><a className="button secondary" href="#cara-kerja">Cara Kerja <ArrowRight aria-hidden="true" size={20} /></a></div><p className="hero-note"><AudioLines aria-hidden="true" size={20} /> Arahkan kamera. Dengarkan dunia.</p></div>
        <ProductPreview />
      </section>
      <div className="principles"><div className="shell principles-inner"><span><Camera aria-hidden="true" /> Kamera sebagai mata</span><span><AudioLines aria-hidden="true" /> Suara sebagai panduan</span><span><ScanLine aria-hidden="true" /> Dirancang untuk kemudahan</span></div></div>
      <section id="tentang" aria-labelledby="about-title" className="section shell"><Reveal><div className="about-grid"><div><p className="eyebrow">01 / TENTANG KAMI</p><h2 id="about-title">Tentang SayIt<span className="accent">.</span></h2></div><div><p className="large-copy">Dunia penuh informasi.<br /><span className="muted">Setiap orang berhak mengaksesnya.</span></p><p>Berawal dari riset pemrosesan citra, SayIt dirancang untuk mendobrak hambatan informasi visual. Kami percaya teknologi harus inklusif. Aplikasi ini menggabungkan AI dan interaksi suara untuk memberikan kemandirian bagi penyandang disabilitas netra dalam aktivitas sehari-hari.</p></div></div></Reveal></section>
      <section id="fitur" aria-labelledby="features-title" className="section shell features"><Reveal><div className="section-heading"><div><p className="eyebrow">02 / FITUR UTAMA</p><h2 id="features-title">Satu sentuhan.<br />Banyak kemungkinan.</h2></div><p>Fitur Utama SayIt membantu mengubah informasi visual sehari-hari menjadi suara yang bermakna.</p></div><div className="feature-grid">{features.map(({ icon: Icon, ...f }) => <article className="feature-card" key={f.number} aria-labelledby={`feature-${f.number}`}><FeatureIllustration number={f.number} /><div className="card-top"><div className="feature-icon"><Icon aria-hidden="true" size={29} /></div><span>{f.number}</span></div><h3 id={`feature-${f.number}`}>{f.title}</h3><p>{f.description}</p><div className="card-detail">{f.detail}<MoveUpRight aria-hidden="true" size={19} /></div></article>)}</div></Reveal></section>
      <section id="cara-kerja" className="section shell" aria-labelledby="how-title"><Reveal><div className="how-panel"><div><p className="eyebrow">DIBUAT UNTUK TERASA SEDERHANA</p><h2 id="how-title">Camera-First.<br />Voice-First.</h2><p>Interaksi yang mengutamakan kamera dan suara, dari awal hingga informasi terdengar.</p></div><ol className="steps">{[['Arahkan kamera', 'Arahkan ke uang, kemasan, atau dokumen.'], ['Sentuh untuk mengenali', 'Mulai pemindaian dengan satu sentuhan.'], ['Dengarkan informasinya', 'Hasil pengenalan dibacakan melalui suara.']].map(([title, text], i) => <li key={title}><span className="step-number">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol></div></Reveal></section>
      <section id="prototipe" className="prototype shell" aria-labelledby="prototype-title"><p className="eyebrow">LANGKAH KECIL, AKSES LEBIH LUAS</p><h2 id="prototype-title">Kenali dunia dengan cara baru.</h2><p>SayIt sedang dalam tahap pengembangan. Hubungi kami untuk informasi ketersediaan prototipe.</p><a className="button primary" href="#kontak">Tanyakan prototipe <ArrowUpRight aria-hidden="true" size={21} /></a></section>
      <section id="kontak" className="section shell contact-grid" aria-labelledby="contact-title"><div><p className="eyebrow">03 / MARI TERHUBUNG</p><h2 id="contact-title">Hubungi Kami<span className="accent">.</span></h2><p>Punya pertanyaan atau ide untuk SayIt? Kami ingin mendengarnya.</p><div className="contact-mark" aria-hidden="true"><AudioLines size={80} strokeWidth={1.5} /></div></div><ContactForm /></section>
      <div className="shell policy-grid">
        <section id="privasi" className="policy-card" aria-labelledby="privacy-title">
          <h2 id="privacy-title">Kebijakan privasi</h2>
          <p>Nama, email, dan pesan yang kamu isi digunakan untuk menanggapi pertanyaanmu. Pesan diteruskan ke sayitipb@gmail.com melalui EmailJS dan penyedia email yang terhubung.</p>
          <p>Isi pesan tersimpan di kotak masuk tim SayIt. Hindari mengirim data sensitif yang tidak diperlukan. Kebijakan data aplikasi akan tersedia sebelum peluncuran.</p>
        </section>
        <section id="aksesibilitas" className="policy-card" aria-labelledby="access-title">
          <h2 id="access-title">Aksesibilitas</h2>
          <p>Halaman ini mendukung navigasi keyboard, label formulir, kontras tinggi, dan pengurangan gerakan.</p>
          <p>Pengujian bersama pengguna pembaca layar masih diperlukan untuk memastikan kemudahan penggunaannya. Kepatuhan penuh WCAG AAA belum diverifikasi.</p>
        </section>
      </div>
    </main><footer className="shell footer"><a href="#beranda" className="logo" aria-label="SayIt, kembali ke beranda"><BrandLogo /></a><p>© {new Date().getFullYear()} SayIt. Akses untuk semua.</p><nav aria-label="Informasi legal"><a href="#privasi">Privasi</a><a href="#aksesibilitas">Aksesibilitas</a></nav></footer>
  </>;
}







