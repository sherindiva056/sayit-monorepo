


import { Camera, Fingerprint, Volume2 } from 'lucide-react';

export function SunsetScene() {

  return <div className="sunset-scene">
    <div className="sunset-art" aria-hidden="true" />
    <div className="night-stars" aria-hidden="true" />

    <div className="moving-clouds" aria-hidden="true">
      {[0,1,2].map(i => <svg key={i} className={`weather-cloud weather-cloud-${i}`} viewBox="0 0 300 140"><defs><filter id={`cloud-soft-${i}`} x="-20%" y="-30%" width="140%" height="160%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="3" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="12"/><feGaussianBlur stdDeviation="2"/></filter><linearGradient id={`cloud-tone-${i}`} x2="0" y2="1"><stop stopColor="#fff8e8"/><stop offset="1" stopColor="#edb7a2"/></linearGradient></defs><path d="M35 109C2 100 10 65 43 64C38 28 81 15 104 40C124-3 184 2 194 45C228 19 257 45 253 68C292 64 304 104 266 115C202 131 90 129 35 109Z" fill={`url(#cloud-tone-${i})`} filter={`url(#cloud-soft-${i})`}/></svg>)}
    </div>
    <div className="shop-atmosphere" aria-hidden="true">
      <span className="shop-light-ray" />
      {Array.from({ length: 10 }, (_, i) => <i className="shop-mote" key={i} style={{ left: `${47 + (i * 17) % 43}%`, top: `${23 + (i * 13) % 58}%`, animationDelay: `${-i * 1.7}s`, animationDuration: `${9 + i % 4 * 2}s` }} />)}
    </div>


  </div>;
}






export function HeroSteps() {
  return <section className="hero-guide shell" aria-label="Cara menggunakan SayIt">
    <div className="hero-guide-heading"><p className="eyebrow">CARA MENGGUNAKAN SAYIT</p><h2>Dari kamera, jadi suara.</h2><p>Cukup tiga langkah untuk mengenali informasi di sekitarmu.</p></div>
    <ol className="hero-step-list" aria-label="Tiga langkah menggunakan SayIt">
      {[[Camera,'Arahkan kamera','Ke uang, kemasan, atau dokumen.'],[Fingerprint,'Sentuh untuk mengenali','Mulai dengan satu sentuhan.'],[Volume2,'Dengarkan informasinya','SayIt membacakan hasilnya.']].map(([Icon,title,detail],i) => { const StepIcon = Icon as typeof Camera; return <li key={i}><span className="sky-step-icon"><StepIcon aria-hidden="true" size={23}/></span><div><span className="sky-step-count">LANGKAH 0{i+1}</span><h2>{title as string}</h2><p>{detail as string}</p></div></li>; })}
    </ol>
  </section>;
}




