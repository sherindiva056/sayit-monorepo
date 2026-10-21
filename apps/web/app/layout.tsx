import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'SayIt — Your World, Voiced.', description: 'Kenali uang, tanggal kedaluwarsa, dan dokumen melalui kamera dan suara bersama SayIt.', icons: { icon: '/brand/sayit-symbol.svg', apple: '/brand/sayit-app-orange.png' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "try{document.documentElement.dataset.theme=localStorage.getItem('sayit-theme')==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}" }} /></head><body>{children}</body></html>;
}
