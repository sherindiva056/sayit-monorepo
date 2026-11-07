import { Camera, Volume2, Check, ScanLine, AudioLines, FileText } from 'lucide-react';
import { BrandLogo } from './brand-logo';

const previews = [
  { kind: 'expiry', title: 'Baca tanggal', subtitle: 'Kenali sebelum dikonsumsi', result: '24 Agustus 2027', label: 'Tanggal kedaluwarsa' },
  { kind: 'money', title: 'Kenali uang', subtitle: 'Lebih yakin saat bertransaksi', result: 'Lima puluh ribu rupiah', label: 'Nominal uang' },
  { kind: 'document', title: 'Bacakan dokumen', subtitle: 'Tulisan menjadi suara', result: 'Dokumen siap dibacakan', label: 'Hasil pemindaian' },
];

export function AppShowcase() {
  return <div className="app-showcase" role="img" aria-label="Ilustrasi tiga tampilan SayIt: membaca tanggal kedaluwarsa, mengenali uang Rp50.000, dan membacakan dokumen. Bukan hasil pemindaian langsung.">
    <div className="showcase-halo" aria-hidden="true" />
    <div className="showcase-phones" aria-hidden="true">{previews.map(p => <div className={`app-phone app-phone-${p.kind}`} key={p.kind}>
      <div className="app-phone-island" /><div className="app-phone-status"><span>9:41</span><span>● ▰</span></div>
      <div className="app-phone-brand"><BrandLogo /><AudioLines size={18}/></div>
      <h3>{p.title}</h3><p className="app-phone-subtitle">{p.subtitle}</p>
      <div className={`app-camera-view camera-${p.kind}`}><ScanLine className="app-camera-corners" size={150} strokeWidth={.7}/>
        {p.kind === 'money' ? <div className="app-note"><span>BANK INDONESIA</span><strong>50.000</strong><span>LIMA PULUH RIBU RUPIAH</span></div> : p.kind === 'expiry' ? <div className="app-carton"><span>SUSU SEGAR</span><strong>Milk.</strong><span>BAIK SEBELUM</span><b>24 / 08 / 2027</b></div> : <div className="app-paper"><FileText size={24}/><i/><i/><i/><i/><i/></div>}
      </div>
      <div className="app-scan-status"><Check size={13}/> Informasi berhasil dikenali</div>
      <div className="app-voice-result"><Volume2 size={22}/><div><span>{p.label}</span><strong>{p.result}</strong></div></div>
      <div className="app-capture"><Camera size={24}/></div><span className="app-capture-label">Ketuk untuk mengenali</span>
    </div>)}</div>
    <div className="showcase-fade" aria-hidden="true" />
    <span className="showcase-caption">ILUSTRASI TAMPILAN APLIKASI</span>
  </div>;
}
