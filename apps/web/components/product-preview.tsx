import { AudioLines, Aperture, Banknote, Camera, Check, FileText, Volume2 } from 'lucide-react';
import { BrandLogo } from './brand-logo';

/** A static illustration, not an interactive camera or a claim of live recognition. */
export function ProductPreview() {
  return <div className="mobile-preview" role="img" aria-label="Ilustrasi aplikasi SayIt di handphone: kamera mengenali uang Rp50.000 lalu membacakan nominalnya. Bukan kamera langsung.">
    <div className="phone-orbit orbit-inner" /><div className="phone-orbit orbit-outer" />
    <div className="phone-badge"><span className="status-dot" /> CAMERA-FIRST. VOICE-FIRST.</div>
    <div className="phone-device">
      <div className="phone-status"><span>9:41</span><span>● ▰</span></div>
      <div className="phone-wordmark"><BrandLogo /></div>
      <div className="phone-camera"><div className="phone-frame"><i/><i/><i/><i/>
        <div className="phone-banknote"><span>BANK INDONESIA</span><strong>50000</strong><span>LIMA PULUH RIBU RUPIAH</span><Aperture aria-hidden="true" size={36}/></div>
        <div className="phone-scanline" />
      </div></div>
      <div className="phone-detected"><Check aria-hidden="true" size={13}/> Uang berhasil dikenali</div>
      <div className="phone-result"><Volume2 aria-hidden="true" size={23}/><div><span>Nominal uang</span><strong>Lima puluh ribu rupiah</strong></div></div>
      <div className="phone-shutter"><Camera aria-hidden="true" size={26}/></div>
      <p className="phone-hint">Ketuk untuk mengenali</p>
    </div>
    <div className="phone-audio-card"><div><AudioLines aria-hidden="true" size={24}/></div><p><strong>Informasi jadi suara.</strong><span>Kemandirian dalam genggaman.</span></p></div>
    <span className="phone-caption">ILUSTRASI TAMPILAN APLIKASI</span>
  </div>;
}

export function FeatureIllustration({ number }: { number: string }) {
  return <div className={`feature-illustration illustration-${number}`} aria-hidden="true">
    {number === '01' ? <><div className="mini-money money-back">20.000</div><div className="mini-money money-front"><Banknote size={30}/><strong>50.000</strong><span>RUPIAH</span></div><div className="mini-result"><Volume2 size={17}/> Total Rp70.000</div></> : number === '02' ? <><div className="package-label"><span>BAIK DIGUNAKAN SEBELUM</span><strong>24 / 08 / 2027</strong><div className="barcode"/></div><div className="date-frame"/><div className="mini-result"><Check size={16}/> Tanggal ditemukan</div></> : <><div className="document-paper"><FileText size={24}/><i/><i/><i/><i/><i/></div><div className="document-audio"><AudioLines size={24}/><span>Membacakan dokumen<span className="audio-progress"/></span></div></>}
  </div>;
}
