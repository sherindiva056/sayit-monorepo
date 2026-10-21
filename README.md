# SayIt

Monorepo untuk website marketing, aplikasi mobile, dan model SayIt.

| Folder | Isi |
| --- | --- |
| `apps/web` | Website marketing Next.js yang sudah berjalan |
| `apps/mobile` | Tempat kode aplikasi dari tim; framework belum ditentukan |
| `models` | Tempat kode model dari tim; runtime belum ditentukan |
| `packages` | Tempat modul bersama jika nanti dibutuhkan |

Saat ini hanya `apps/web` yang terdaftar sebagai npm workspace. Folder lain masih kosong; bukan aplikasi atau model yang sudah berjalan.

Jalankan dari root:

```sh
npm install
npm run dev:web
```

Build web: `npm run build:web`. Pemeriksaan TypeScript web: `npm run typecheck`.

Konfigurasi EmailJS lokal ada di `apps/web/.env.local`, dengan contoh di `apps/web/.env.example`. File `.env.local` tidak ikut Git. Untuk hosting website, atur Root Directory menjadi `apps/web` dan isi tiga variabel EmailJS pada environment hosting.

Masukkan kode aplikasi ke `apps/mobile` dan kode model ke `models` setelah diterima dari tim. Pertahankan file manifest dan lockfile bawaan teknologi masing-masing. Tambahkan workspace npm untuk mobile hanya jika memang menggunakan ekosistem Node.js. Model berukuran besar disimpan terpisah dari kode, misalnya dengan penyimpanan artefak atau Git LFS; `models/artifacts/` diabaikan Git.
