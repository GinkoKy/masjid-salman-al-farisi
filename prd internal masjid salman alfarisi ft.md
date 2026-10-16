# Product Requirements Document (PRD) — Internal

| Item                    | Detail                                        |
| ----------------------- | --------------------------------------------- |
| **Nama Produk**         | Landing Page Masjid Salman Al-Farisi FT UNNES |
| **Versi Dokumen**       | v0.1                                          |
| **Status**              | Draft                                         |
| **Penulis**             | Zaydan                                        |
| **Product Owner**       | Zaydan                                        |
| **Project Manager**     | Zaydan                                        |
| **Tanggal Dibuat**      | 13-10-2026                                    |
| **Terakhir Diperbarui** | 13-10-2026                                    |
| **Dokumen Terkait**     | PRD Eksternal — [Tautan belum tersedia]       |

### Riwayat Perubahan

| Versi | Tanggal    | Penulis | Perubahan                  |
| ----- | ---------- | ------- | -------------------------- |
| v0.1  | 13-10-2026 | Zaydan  | Draft awal PRD Internal    |
| v1.0  | 16-10-2026 | Leo     | Revisi akhir PRD Eksternal |

---

## 1. Ringkasan Produk

Landing Page Masjid Salman Al-Farisi FT UNNES merupakan website yang dikembangkan untuk mendukung penyampaian informasi Masjid Salman Al-Farisi yang berada di lingkungan Fakultas Teknik Universitas Negeri Semarang. Website ini ditujukan terutama bagi mahasiswa FT sebagai media untuk mengenal masjid dan memperoleh informasi terkait aktivitas serta kegiatan yang diselenggarakan. Pengembangan dilakukan menggunakan ReactJS dan Vite, dengan Tailwind CSS dan Bootstrap sebagai teknologi pendukung antarmuka. Rincian kebutuhan dan fitur website akan ditentukan setelah koordinasi dengan PIC RISTEK, yaitu Fathiin, memperoleh tanggapan.

---

## 2. Tujuan Bisnis

### 2.1 Tujuan dan KPI Bisnis

| No  | Tujuan                                                           | Indikator Keberhasilan (KPI)                             | Target                                             | Tenggat                   |
| --- | ---------------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------- | ------------------------- |
| 1   | Mengembangkan landing page Masjid Salman Al-Farisi FT UNNES      | Website berhasil dikembangkan dan dapat diakses          | 1 website landing page                             | 16-10-2026                |
| 2   | Menyediakan media informasi digital bagi mahasiswa FT            | Informasi yang telah disepakati ditampilkan pada website | Seluruh informasi yang disepakati                  | 16-10-2026                |
| 3   | Memastikan website dapat digunakan pada berbagai perangkat       | Pengujian tampilan pada desktop dan perangkat mobile     | Tampilan dapat digunakan pada perangkat yang diuji | Sebelum pengumpulan akhir |
| 4   | Menyelesaikan proyek sesuai ketentuan Final Project DevXperience | Hasil pengembangan dikumpulkan sesuai ketentuan          | Seluruh persyaratan pengumpulan terpenuhi          | 16-10-2026                |

### 2.2 Strategi dan Penyelarasan

Proyek ini berfokus pada pengembangan media informasi digital bagi Masjid Salman Al-Farisi FT UNNES. Website diharapkan dapat membantu mahasiswa FT mengenal masjid serta memperoleh informasi mengenai kegiatan dan informasi organisasi yang nantinya disepakati bersama pihak RISTEK.

Proyek dikerjakan menggunakan ReactJS dan Vite sesuai ketentuan Final Project DevXperience. Tailwind CSS dan Bootstrap digunakan sebagai teknologi pendukung antarmuka. Pengembangan diprioritaskan pada kebutuhan utama website dan disesuaikan dengan waktu serta kapasitas tim.

### 2.3 Dampak Bisnis Jika Tidak Dikerjakan

Apabila proyek tidak diselesaikan, Masjid Salman Al-Farisi FT UNNES tidak memperoleh website landing page yang direncanakan sebagai media informasi digital. Selain itu, mahasiswa FT belum dapat memperoleh manfaat dari media informasi yang dikembangkan melalui proyek ini. Tim juga berisiko tidak memenuhi tenggat pengumpulan Final Project DevXperience.

---

## 3. Kebutuhan Teknis dan Non-Fungsional

### 3.1 Kebutuhan Non-Fungsional Detail

| Kategori       | Kebutuhan                                                   | Target Terukur                                                       | Cara Verifikasi                    |
| -------------- | ----------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------- |
| Performa       | Website dapat dimuat dan digunakan dengan baik              | Halaman utama dapat diakses tanpa kendala yang menghambat penggunaan | Pengujian langsung melalui browser |
| Keamanan       | Informasi sensitif tidak terekspos melalui kode sumber      | Tidak terdapat kredensial atau informasi rahasia pada repository     | Pemeriksaan kode sumber            |
| Ketersediaan   | Website dapat diakses melalui tautan deployment             | Website dapat dibuka ketika dilakukan evaluasi                       | Pengujian tautan deployment        |
| Skalabilitas   | Struktur kode mudah dipahami dan dikembangkan               | Struktur proyek dan komponen tersusun secara terorganisasi           | Pemeriksaan struktur kode          |
| Kompatibilitas | Website dapat digunakan pada browser modern                 | Fungsi dan tampilan utama berjalan pada browser yang diuji           | Pengujian melalui browser          |
| Responsivitas  | Tampilan menyesuaikan ukuran layar                          | Tidak terdapat elemen utama yang terpotong pada perangkat yang diuji | Pengujian desktop dan mobile       |
| Aksesibilitas  | Konten mudah dibaca dan elemen interaktif mudah dikenali    | Teks terbaca dan navigasi dapat digunakan                            | Pemeriksaan manual                 |
| Kepatuhan      | Konten dan identitas visual sesuai persetujuan pihak RISTEK | Konten yang dipublikasikan telah dikonfirmasi                        | Review bersama PIC RISTEK          |

### 3.2 Dependensi dan Aturan Teknis per Fitur

Fitur utama masih dalam tahap penentuan karena tim belum menerima tanggapan dari PIC RISTEK.

| ID Fitur | Dependensi (sistem/API/tim)             | Catatan Teknis   | Estimasi Effort  |
| -------- | --------------------------------------- | ---------------- | ---------------- |
| F-01     | Konfirmasi kebutuhan dari PIC RISTEK    | Belum ditentukan | Belum ditentukan |
| F-02     | Konfirmasi kebutuhan dan konten website | Belum ditentukan | Belum ditentukan |

### 3.3 Metrik MVP (Pengukuran Internal)

| Metrik                    | Target                                                   | Sumber Data                             | Pemilik            |
| ------------------------- | -------------------------------------------------------- | --------------------------------------- | ------------------ |
| Penyelesaian website      | Website berhasil dikembangkan dan di-deploy              | Repository GitHub dan tautan deployment | Zaydan             |
| Kelengkapan informasi     | Informasi yang disepakati berhasil ditampilkan           | Daftar kebutuhan dan konten             | Zaydan             |
| Penyelesaian fungsi utama | Seluruh fungsi yang disepakati dapat digunakan           | Hasil pengujian manual                  | Krishna dan Devina |
| Responsivitas             | Tampilan berfungsi dengan baik pada perangkat yang diuji | Hasil pengujian desktop dan mobile      | Krishna dan Devina |
| Kesesuaian kebutuhan      | Hasil pengembangan sesuai kebutuhan yang dikonfirmasi    | Hasil review bersama PIC RISTEK         | Zaydan             |

### 3.4 Batasan Internal

- Pengembangan dilakukan dalam periode Final Project DevXperience dengan tenggat akhir 16 Oktober 2026 pukul 23.59 WIB.
- Target pengguna utama adalah mahasiswa Fakultas Teknik UNNES.
- Teknologi utama yang digunakan adalah ReactJS dan Vite.
- Teknologi styling yang digunakan adalah Tailwind CSS dan Bootstrap.
- Fitur utama belum ditentukan karena masih menunggu konfirmasi kebutuhan dari PIC RISTEK.
- Pengembangan dilakukan oleh Zaydan, Krishna, dan Devina.
- Perubahan kebutuhan disesuaikan dengan waktu pengerjaan dan kapasitas tim.
- Revisi kepada pihak Ormawa mengikuti ketentuan Final Project DevXperience.

---

## 4. Security Check

Checklist keamanan disesuaikan dengan ruang lingkup landing page Masjid Salman Al-Farisi FT UNNES. Pemeriksaan dilakukan berdasarkan fitur yang benar-benar dikembangkan.

### 4.1 Klasifikasi Data

| Jenis Data       | Contoh                                           | Klasifikasi                                         | Perlindungan yang Diperlukan                                |
| ---------------- | ------------------------------------------------ | --------------------------------------------------- | ----------------------------------------------------------- |
| Informasi masjid | Nama, deskripsi, dan informasi kegiatan          | Publik                                              | Memastikan informasi yang ditampilkan telah dikonfirmasi    |
| Informasi kontak | Email atau akun media sosial organisasi          | Publik jika disetujui untuk dipublikasikan          | Memastikan informasi benar dan telah memperoleh persetujuan |
| Kredensial       | API key atau token jika digunakan                | Rahasia                                             | Tidak menyimpan kredensial dalam kode yang dipublikasikan   |
| Data pribadi     | Nama dan nomor telepon individu jika dicantumkan | Terbatas atau publik sesuai konteks dan persetujuan | Memastikan publikasi memperoleh izin yang diperlukan        |

### 4.2 Checklist Keamanan per Fase

| No   | Fase         | Pemeriksaan                                                                   | Tingkat | PIC                | Status                  | Bukti / Catatan                                                                              |
| ---- | ------------ | ----------------------------------------------------------------------------- | ------- | ------------------ | ----------------------- | -------------------------------------------------------------------------------------------- |
| S-01 | Desain       | Kebutuhan dan jenis data yang ditampilkan telah diidentifikasi                | Tinggi  | Zaydan             | Belum                   | Menunggu konfirmasi kebutuhan                                                                |
| S-02 | Desain       | Alur autentikasi dan otorisasi ditinjau apabila fitur tersebut diperlukan     | Tinggi  | Zaydan             | Belum                   | Disesuaikan dengan fitur final                                                               |
| S-03 | Desain       | Hak akses akun dan repository telah dibatasi sesuai kebutuhan                 | Sedang  | Zaydan             | Belum                   | Perlu pemeriksaan                                                                            |
| S-04 | Pengembangan | Validasi dan sanitasi input diterapkan apabila terdapat input pengguna        | Kritis  | Krishna dan Devina | Belum                   | Disesuaikan dengan fitur final                                                               |
| S-05 | Pengembangan | Kredensial rahasia tidak disimpan dalam kode yang dipublikasikan              | Kritis  | Krishna dan Devina | Belum                   | Pemeriksaan repository                                                                       |
| S-06 | Pengembangan | Password menggunakan hashing aman apabila fitur autentikasi dikembangkan      | Kritis  | Krishna dan Devina | Tidak Berlaku sementara | Tidak diperlukan jika tidak ada fitur autentikasi; evaluasi kembali setelah fitur ditetapkan |
| S-07 | Pengembangan | Koneksi HTTPS dan perlindungan data diterapkan sesuai kebutuhan deployment    | Kritis  | Tim pengembang     | Belum                   | Menunggu penentuan platform deployment                                                       |
| S-08 | Pengembangan | Manajemen sesi dan token ditinjau apabila fitur login dikembangkan            | Tinggi  | Krishna dan Devina | Tidak Berlaku sementara | Evaluasi kembali setelah fitur ditetapkan                                                    |
| S-09 | Pengembangan | Informasi sensitif tidak ditampilkan pada log atau pesan debug                | Sedang  | Krishna dan Devina | Belum                   | Pemeriksaan kode                                                                             |
| S-10 | Pengujian    | Analisis kode statis dilakukan apabila tersedia dan relevan                   | Tinggi  | Krishna dan Devina | Belum                   | Catat hasil pemeriksaan                                                                      |
| S-11 | Pengujian    | Dependensi dan library diperiksa terhadap kerentanan yang diketahui           | Tinggi  | Krishna dan Devina | Belum                   | Pemeriksaan dependensi                                                                       |
| S-12 | Pengujian    | Pengujian keamanan dilakukan sesuai fitur dan ruang lingkup website           | Tinggi  | Tim pengembang     | Belum                   | Disesuaikan dengan fitur final                                                               |
| S-13 | Pengujian    | Hak akses antarpengguna diuji apabila terdapat autentikasi dan peran pengguna | Kritis  | Tim pengembang     | Tidak Berlaku sementara | Evaluasi kembali setelah fitur ditetapkan                                                    |
| S-14 | Pra-rilis    | Konfigurasi deployment aman dan informasi debug tidak ditampilkan             | Tinggi  | Tim pengembang     | Belum                   | Pemeriksaan sebelum deployment                                                               |
| S-15 | Pra-rilis    | Kebutuhan backup dan pemulihan ditinjau sesuai infrastruktur yang digunakan   | Tinggi  | Tim pengembang     | Belum                   | Disesuaikan dengan platform deployment                                                       |
| S-16 | Pra-rilis    | Konten dan data pribadi yang dipublikasikan telah ditinjau                    | Tinggi  | Zaydan             | Belum                   | Menunggu konfirmasi konten                                                                   |
| S-17 | Pasca-rilis  | Monitoring ketersediaan website ditinjau sesuai kebutuhan                     | Sedang  | Tim pengembang     | Belum                   | Disesuaikan dengan platform deployment                                                       |
| S-18 | Pasca-rilis  | Kontak untuk pelaporan insiden tersedia apabila diperlukan                    | Tinggi  | Zaydan             | Belum                   | Mengikuti kebutuhan proyek                                                                   |
| S-19 | Pasca-rilis  | Pembaruan dependensi dan pemeriksaan keamanan ditinjau sesuai kebutuhan       | Sedang  | Tim pengembang     | Belum                   | Catatan pemeliharaan                                                                         |

**Status:** Belum, Berjalan, Lulus, Gagal, Tidak Berlaku (sertakan alasan).

**Tingkat:** Kritis, Tinggi, Sedang.

### 4.3 Penanganan Temuan Keamanan

| Tingkat Keparahan | Batas Waktu Perbaikan                                         | Keputusan Rilis                                                                 |
| ----------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Kritis            | Sebelum pengumpulan akhir                                     | Rilis ditahan sampai masalah diperbaiki                                         |
| Tinggi            | Sebelum pengumpulan akhir atau sesuai mitigasi yang disetujui | Rilis ditahan kecuali ada persetujuan risiko                                    |
| Sedang            | Sebelum pengumpulan jika berdampak pada fungsi utama          | Boleh dirilis jika tidak menghambat fungsi utama dan tersedia rencana perbaikan |
| Rendah            | Dicatat dalam daftar perbaikan                                | Boleh dirilis jika tidak menghambat penggunaan utama                            |

### 4.4 Persetujuan Security Gate

| Nama                     | Peran                       | Keputusan (Lulus / Lulus dengan Catatan / Tidak Lulus) | Tanggal |
| ------------------------ | --------------------------- | ------------------------------------------------------ | ------- |
| [Nama reviewer teknis]   | Tech Lead / Reviewer        | Belum ditinjau                                         | -       |
| [Nama reviewer jika ada] | Security Officer / Reviewer | Belum ditinjau                                         | -       |
| Zaydan                   | Product Owner               | Belum ditinjau                                         | -       |

---

## 5. Risiko dan Mitigasi

| Risiko                                            | Dampak                                                | Probabilitas | Mitigasi                                                                                | Pemilik            |
| ------------------------------------------------- | ----------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------- | ------------------ |
| Belum ada tanggapan dari PIC RISTEK               | Kebutuhan website dan konten belum dapat dipastikan   | Tinggi       | Melakukan tindak lanjut komunikasi dan mendokumentasikan kebutuhan yang sudah diketahui | Zaydan             |
| Pembagian tugas masih dalam proses                | Pekerjaan dapat tumpang tindih atau terlambat dimulai | Sedang       | Menetapkan pembagian tugas dan tenggat setiap anggota                                   | Zaydan             |
| Progres masih pada tahap struktur proyek          | Waktu implementasi dan pengujian menjadi terbatas     | Tinggi       | Memprioritaskan kebutuhan inti dan memantau progres setiap hari                         | Zaydan             |
| Perubahan kebutuhan setelah coding dimulai        | Pekerjaan perlu disesuaikan kembali                   | Sedang       | Mengonfirmasi ruang lingkup sebelum implementasi fitur dan mencatat perubahan           | Zaydan             |
| Konflik styling antara Tailwind CSS dan Bootstrap | Tampilan website tidak konsisten                      | Sedang       | Menetapkan aturan penggunaan kedua framework dan menguji komponen setelah integrasi     | Krishna dan Devina |
| Bug ditemukan mendekati tenggat                   | Kualitas website menurun atau pengumpulan terlambat   | Sedang       | Melakukan pengujian bertahap selama pengembangan                                        | Tim pengembang     |
| Website gagal diakses saat evaluasi               | Hasil proyek tidak dapat ditinjau dengan baik         | Sedang       | Melakukan deployment dan menguji tautan sebelum tenggat akhir                           | Tim pengembang     |

---

## 6. Sumber Daya

### 6.1 Tim Proyek

| Peran              | Nama             | Tanggung Jawab                                                                           | Alokasi (%)      |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------- | ---------------- |
| Product Owner      | Zaydan           | Menentukan prioritas kebutuhan dan memastikan hasil sesuai tujuan proyek                 | Belum ditentukan |
| Project Manager    | Zaydan           | Mengelola timeline, membagi tugas, memantau progres, dan berkoordinasi dengan PIC RISTEK | Belum ditentukan |
| UI/UX Designer     | Leo (tim mentor) | Menentukan desain antarmuka jika peran ini dibutuhkan secara terpisah                    | Belum ditentukan |
| Frontend Developer | Krishna          | Mengembangkan antarmuka website sesuai pembagian tugas tim                               | Belum ditentukan |
| Frontend Developer | Devina           | Mengembangkan antarmuka website sesuai pembagian tugas tim                               | Belum ditentukan |
| Backend Developer  | Tidak ditentukan | Belum ada kebutuhan backend yang dikonfirmasi                                            | -                |
| QA / Tester        | Seluruh tim      | Menguji fungsi, tampilan, navigasi, dan responsivitas website                            | Belum ditentukan |

### 6.2 Teknologi dan Tools

| Kategori                | Tools / Teknologi                                  |
| ----------------------- | -------------------------------------------------- |
| Frontend                | ReactJS                                            |
| Build Tool              | Vite                                               |
| Styling                 | Tailwind CSS dan Bootstrap                         |
| Version Control         | Git dan GitHub                                     |
| Repository              | https://github.com/GinkoKy/masjid-salman-al-farisi |
| Database                | Belum ditentukan; menunggu kebutuhan fitur         |
| Infrastruktur / Hosting | Belum ditentukan                                   |
| Desain                  | Belum ditentukan                                   |
| Manajemen proyek        | Belum ditentukan                                   |
| Komunikasi              | Belum ditentukan                                   |

### 6.3 Anggaran

| Komponen                  | Estimasi Biaya       | Catatan                                        |
| ------------------------- | -------------------- | ---------------------------------------------- |
| Sumber daya manusia       | Rp0                  | Dikerjakan oleh tim Final Project DevXperience |
| Infrastruktur dan lisensi | Belum ditentukan     | Menyesuaikan tools yang digunakan              |
| Lain-lain                 | Belum ditentukan     | Menyesuaikan kebutuhan proyek                  |
| **Total**                 | **Belum ditentukan** | Menunggu konfirmasi kebutuhan infrastruktur    |

---

## 7. Jadwal Proyek

### 7.1 Milestone

| Fase            | Kegiatan                                                        | Mulai                     | Selesai    | PIC                     | Status                               |
| --------------- | --------------------------------------------------------------- | ------------------------- | ---------- | ----------------------- | ------------------------------------ |
| 1. Discovery    | Koordinasi dengan PIC RISTEK dan analisis kebutuhan             | 13-10-2026                | 13-10-2026 | Zaydan                  | Menunggu tanggapan PIC               |
| 2. Desain       | Menentukan struktur halaman dan antarmuka berdasarkan kebutuhan | 13-10-2026                | 14-10-2026 | Zaydan, Krishna, Devina | Perlu dikonfirmasi                   |
| 3. Pengembangan | Implementasi komponen dan halaman website                       | 13-10-2026                | 15-10-2026 | Krishna dan Devina      | Berjalan; baru tahap struktur proyek |
| 4. Pengujian    | QA, pemeriksaan responsivitas, navigasi, dan fungsi utama       | 15-10-2026                | 16-10-2026 | Seluruh tim             | Belum dimulai                        |
| 5. Rilis        | Deployment dan pemeriksaan akses website                        | 15-10-2026                | 16-10-2026 | Seluruh tim             | Belum dimulai                        |
| 6. Evaluasi     | Review hasil dan pencatatan masukan                             | Sebelum pengumpulan akhir | 16-10-2026 | Zaydan dan tim          | Belum dimulai                        |

### 7.2 Timeline

Timeline proyek direncanakan menggunakan alat manajemen proyek yang disepakati oleh tim. Timeline akan memuat tugas, penanggung jawab, tenggat, dan status penyelesaian setiap pekerjaan.

---

## 8. Alur Komunikasi

### 8.1 Pemangku Kepentingan (Stakeholder)

| Stakeholder         | Peran                             | Kepentingan                                                                                 | Kontak                                      |
| ------------------- | --------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Zaydan              | Product Owner dan Project Manager | Menentukan prioritas kebutuhan, mengelola tim, dan memastikan proyek selesai sesuai tenggat | Belum dicantumkan                           |
| Krishna             | Frontend Developer                | Mengembangkan antarmuka website                                                             | Belum dicantumkan                           |
| Devina              | Frontend Developer                | Mengembangkan antarmuka website                                                             | Belum dicantumkan                           |
| Fathiin             | PIC RISTEK / Ormawa               | Memberikan informasi kebutuhan dan masukan untuk website                                    | Kontak sudah diperoleh; belum ada tanggapan |
| Mentor DevXperience | Mentor proyek                     | Memberikan arahan dan evaluasi sesuai ketentuan program                                     | Belum dicantumkan                           |

### 8.2 Rutinitas Komunikasi

| Pertemuan / Laporan   | Frekuensi                         | Peserta                  | Media                               | Tujuan                                       |
| --------------------- | --------------------------------- | ------------------------ | ----------------------------------- | -------------------------------------------- |
| Daily stand-up        | Harian                            | Zaydan, Krishna, Devina  | Media komunikasi tim                | Menyinkronkan progres dan kendala            |
| Koordinasi dengan PIC | Sesuai kebutuhan                  | Zaydan dan Fathiin       | Media komunikasi yang disepakati    | Mengonfirmasi kebutuhan dan konten website   |
| Review internal       | Setelah bagian pekerjaan selesai  | Seluruh tim              | Repository dan media komunikasi tim | Memeriksa implementasi dan menemukan masalah |
| Laporan progres       | Mengikuti ketentuan Final Project | Zaydan dan pihak terkait | Dokumen atau platform pengumpulan   | Melaporkan progres proyek                    |
| Review hasil          | Menjelang pengumpulan akhir       | Tim dan PIC RISTEK       | Media komunikasi yang disepakati    | Meminta masukan terhadap hasil pengembangan  |

### 8.3 Jalur Eskalasi

1. Anggota tim → Project Manager.
2. Project Manager → Product Owner, apabila peran tersebut ditetapkan terpisah.
3. Project Manager → PIC RISTEK untuk kebutuhan dan konfirmasi dari pihak Ormawa.
4. Project Manager → Mentor atau penyelenggara DevXperience untuk kendala terkait aturan dan ketentuan proyek.

### 8.4 Pengelolaan Perubahan (Internal)

Setiap perubahan kebutuhan dicatat oleh Project Manager dan ditinjau berdasarkan dampaknya terhadap ruang lingkup, jadwal, dan kapasitas tim. Perubahan yang berkaitan dengan kebutuhan Ormawa perlu dikonfirmasi kepada PIC RISTEK sebelum diterapkan.

Karena waktu pengerjaan terbatas, tim memprioritaskan kebutuhan utama yang telah disepakati. Perubahan yang berpotensi menghambat penyelesaian proyek harus didiskusikan terlebih dahulu bersama anggota tim. Perubahan yang telah disepakati kemudian digunakan sebagai acuan implementasi dan diselaraskan dengan PRD Eksternal.

---

## 9. Referensi Internal

| No  | Judul / Dokumen                    | Deskripsi                                                            | Tautan                                             |
| --- | ---------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------- |
| 1   | Repository GitHub                  | Repository kode sumber Landing Page Masjid Salman Al-Farisi FT UNNES | https://github.com/GinkoKy/masjid-salman-al-farisi |
| 2   | PRD Eksternal                      | Dokumen kebutuhan dan kesepakatan dengan pihak RISTEK                | Belum tersedia                                     |
| 3   | Dokumen Pembagian Tugas            | Pembagian pekerjaan anggota tim                                      | Belum tersedia                                     |
| 4   | Timeline Proyek                    | Jadwal kegiatan dan pemantauan progres                               | Belum tersedia                                     |
| 5   | Panduan Final Project DevXperience | Acuan pelaksanaan dan ketentuan pengumpulan proyek                   | https://s.id/FinalProjectProject-Dev               |

---

## Persetujuan Dokumen

| Nama    | Peran               | Tanda Tangan / Persetujuan | Tanggal |
| ------- | ------------------- | -------------------------- | ------- |
| Zaydan  | Project Manager     | Belum disetujui            | -       |
| Zaydan  | Product Owner       | Belum disetujui            | -       |
| Fathiin | PIC RISTEK / Ormawa | Menunggu konfirmasi        | -       |
