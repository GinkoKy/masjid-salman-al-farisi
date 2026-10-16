import logoMasjid from "../assets/images/logo-masjid.png";
import heroMasjid from "../assets/images/hero-masjid.jpg";
import strukturPengurus from "../assets/images/struktur-pengurus.png";
import bimbinganBaca from "../assets/images/activities/bimbingan-baca.jpg";
import kajianKeislaman from "../assets/images/activities/kajian-keislaman.jpg";
import pelatihanMultimedia from "../assets/images/activities/pelatihan-multimedia.jpg";
import jamaahMenyimak from "../assets/images/activities/jamaah-menyimak.jpg";
import sambutanDekanat from "../assets/images/activities/sambutan-dekanat.jpg";
import pembacaanTataTertib from "../assets/images/activities/pembacaan-tata-tertib.jpg";
import belajarBersama from "../assets/images/activities/belajar-bersama.jpg";
import terasIman from "../assets/images/activities/teras-iman.jpeg";

export const site = {
  name: "Masjid Salman Al-Farisi",
  organization: "FT UNNES",
  location:
    "Gedung PKM FT, Kampus Sekaran, Kec. Gunungpati, Kota Semarang, Jawa Tengah 50229",
  email: "Kontak resmi perlu dikonfirmasi oleh pengurus",
};

export const navigation = [
  { label: "Beranda", to: "/" },
  { label: "Tentang Kami", to: "/tentang-kami" },
  { label: "Struktur Takmir", to: "/struktur-organisasi" },
  { label: "Kegiatan & Dokumentasi", to: "/kegiatan" },
  { label: "Agenda & Event", to: "/agenda" },
];

export const images = {
  logo: logoMasjid,
  hero: heroMasjid,
  struktur: strukturPengurus,
};

export const activities = [
  {
    title: "Bimbingan Baca Al-Qur’an Mahasiswa Teknik",
    category: "PEMBINAAN",
    image: bimbinganBaca,
  },
  {
    title: "Kajian Keislaman Rangka Dies Natalis FT UNNES",
    category: "KAJIAN",
    image: kajianKeislaman,
  },
  {
    title: "Pelatihan Multimedia dan Desain Dakwah Kampus",
    category: "PELATIHAN",
    image: pelatihanMultimedia,
  },
  {
    title: "Jamaah Menyimak Kajian dan Tilawah",
    category: "IBADAH",
    image: jamaahMenyimak,
  },
  {
    title: "Sambutan Dekanat dan Pengurus Takmir FT UNNES",
    category: "KAMPUS",
    image: sambutanDekanat,
  },
  {
    title: "Belajar Baca Al-Qur'an Bersama Mahasiswa Teknik",
    category: "PEMBINAAN",
    image: belajarBersama,
  },
  {
    title: "Teras Iman: Kajian dan Diskusi Keislaman",
    category: "KAJIAN",
    image: terasIman,
  },
];

export const missions = [
  [
    "Ibadah & Kajian Berkualitas",
    "Menyelenggarakan kegiatan ibadah dan kajian keislaman yang rutin, berkualitas, dan mudah diakses oleh seluruh civitas FT UNNES.",
  ],
  [
    "Tahsin, Tahfidz & Tafsir",
    "Membina kemampuan membaca, memahami, dan menghafal Al-Qur’an melalui program tahsin, tahfidz, dan kajian tafsir.",
  ],
  [
    "Kepemimpinan & Soft Skill",
    "Mengembangkan potensi kepemimpinan, keorganisasian, dan soft skill mahasiswa melalui kegiatan kepemudaan masjid.",
  ],
  [
    "Kepedulian Sosial & ZISWAF",
    "Menumbuhkan budaya kepedulian sosial melalui program zakat, infak, sedekah, dan bakti masyarakat.",
  ],
  [
    "Sinergi Lembaga Kampus",
    "Menjalin sinergi dengan fakultas, UKM, dan lembaga kemahasiswaan lain dalam mewujudkan kampus yang religius dan harmonis.",
  ],
  [
    "Ruang Nyaman & Inklusif",
    "Menghadirkan masjid sebagai ruang yang nyaman, inklusif, dan ramah bagi seluruh civitas akademika serta masyarakat umum.",
  ],
  [
    "Pemakmuran Masjid",
    "Mengajak seluruh muslim untuk ikut berperan aktif dalam memakmurkan masjid sebagai wujud pembinaan umat.",
  ],
];

export const agendaItems = [
  {
    category: "Kajian Ilmu",
    title: "Kajian Rutin Civitas",
    frequency: "Jadwal perlu dikonfirmasi",
    description:
      "Kajian tematik dan tafsir keislaman untuk memperdalam literasi syariat serta merekatkan ukhuwah civitas akademika teknik.",
  },
  {
    category: "Khidmah",
    title: "Kerja Bakti Bersama JMS",
    frequency: "Jadwal perlu dikonfirmasi",
    description:
      "Gotong royong perawatan fasilitas dan ruang belajar bersama rekan-rekan Jamaah Muslim Scholarship.",
  },
  {
    category: "Ibadah",
    title: "Kerja Bakti Rutin Takmir",
    frequency: "Jadwal perlu dikonfirmasi",
    description:
      "Pembersihan karpet, tempat wudhu, dan penataan kelengkapan sholat untuk kenyamanan jamaah.",
  },
  {
    category: "Amalan Rutin",
    title: "Al-Kahfi & Yasinan Berjamaah",
    frequency: "Jadwal perlu dikonfirmasi",
    description:
      "Pembacaan Surat Al-Kahfi dan Yasinan secara berjamaah untuk memperkuat spiritualitas.",
  },
  {
    category: "Kebersihan",
    title: "Pembersihan Bersih Akbar",
    frequency: "Jadwal perlu dikonfirmasi",
    description: "Aksi bersih menyeluruh sarana ibadah bersama jamaah teknik.",
  },
  {
    category: "Kegiatan Khusus",
    title: "Peringatan PHBI & Khidmat Insidental",
    frequency: "Sesuai agenda",
    description:
      "Peringatan hari besar Islam, santunan dhuafa, ifthar jamai, dan kegiatan sosial keagamaan fakultas.",
  },
];
