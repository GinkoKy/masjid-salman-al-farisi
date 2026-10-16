# Masjid Salman Al-Farisi FT UNNES — React + Vite

Implementasi React berdasarkan desain referensi Stitch yang diberikan. Navigasi dibuat multi-halaman menggunakan React Router; gaya visual mengambil palet emerald/teal, pola titik, pasangan font Newsreader + Plus Jakarta Sans, kartu tipis, dan layout responsif dari desain.

## Menjalankan project

```bash
npm install
npm run dev
```

Untuk memeriksa build produksi:

```bash
npm run build
```

## Halaman

- `/` — Beranda
- `/tentang-kami` — Tentang Kami dan Misi
- `/struktur-organisasi` — Struktur Organisasi
- `/kegiatan` — Kegiatan & Dokumentasi
- `/agenda` — Agenda & Program
- `/donasi` — Infaq & Donasi

## Struktur kode

- `src/components/` — Navbar, Footer, heading, jadwal shalat, kartu misi, galeri, agenda.
- `src/layouts/MainLayout.jsx` — layout yang digunakan ulang antarhalaman.
- `src/pages/` — halaman berdasarkan route.
- `src/data/site.js` — navigasi, teks, dan sumber gambar.
- `src/index.css` — styling responsif.

## Penting sebelum dipublikasikan

- Waktu shalat yang ditampilkan pada widget adalah angka contoh dari desain mockup, bukan jadwal terverifikasi.
- Data agenda, nama pengurus, lokasi kontak, dan kanal donasi perlu diperiksa dengan pengurus resmi.
- Gambar menggunakan URL dari export Stitch. Pastikan gambar tersebut memang boleh digunakan untuk project dan tetap tersedia. Jika tidak, ganti dengan aset resmi di `public/images/`.
- Tidak ada rekening/QRIS palsu yang disertakan.
