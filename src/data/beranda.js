
import {
  BookOpen,
  CalendarDays,
  Images,
  Landmark,
} from 'lucide-react'

export const berandaData = {
  hero: {
    kicker: 'Rumah Ibadah, Rumah Ilmu, dan Rumah Ukhuwah bagi Seluruh Civitas FT UNNES',
    title: 'Pusat Ibadah, Pembinaan, dan Pengabdian',
    description:
      'Terbuka bagi dosen, pegawai, mahasiswa, dan masyarakat umum. Mari bersama memakmurkan masjid dan membangun generasi yang beriman serta berilmu.',

    primaryButton: {
      label: 'Lihat Agenda & Kegiatan',
      to: '/agenda',
    },

    secondaryButton: {
      label: 'Salurkan Infaq Online',
      to: '/donasi',
    },

    imageAlt: 'Ilustrasi arsitektur masjid pada rancangan website',
    imageCaption: 'Masjid Salman Al-Farisi FT UNNES',
  },

  introduction: {
    eyebrow: 'SELAMAT DATANG',
    title: 'Ruang Ibadah, Ilmu, dan Pengabdian',
    description:
      'Masjid Salman Al-Farisi FT UNNES menjadi ruang kebersamaan untuk bertumbuh dalam iman, ilmu, akhlak, dan kontribusi bagi masyarakat.',
    body:
      'Jelajahi profil organisasi, struktur takmir, dokumentasi kegiatan, serta agenda program melalui halaman yang tersedia di website ini.',
  },

  quote: {
    label: '✦ NILAI KEBERSAMAAN',
    text:
      '“Memakmurkan masjid, membina insan teknik yang beriman, berilmu, berakhlak mulia, dan bermanfaat bagi masyarakat.”',
    footer: 'Masjid Salman Al-Farisi FT UNNES',
    badge: 'BERSAMA',
  },

  navigationSection: {
    eyebrow: 'JELAJAHI WEBSITE',
    title: 'Temukan Informasi yang Kamu Butuhkan',
    description:
      'Setiap menu membuka halaman tersendiri agar informasi lebih mudah dijelajahi.',

    links: [
      {
        icon: Landmark,
        title: 'Tentang Kami',
        description:
          'Kenali visi, orientasi, dan misi Masjid Salman Al-Farisi.',
        to: '/tentang-kami',
        label: 'Jelajahi profil',
      },
      {
        icon: BookOpen,
        title: 'Struktur Takmir',
        description:
          'Lihat informasi kepengurusan dan amanah organisasi.',
        to: '/struktur-organisasi',
        label: 'Lihat struktur',
      },
      {
        icon: Images,
        title: 'Kegiatan & Dokumentasi',
        description:
          'Telusuri dokumentasi aktivitas dan pembinaan jamaah.',
        to: '/kegiatan',
        label: 'Lihat galeri',
      },
      {
        icon: CalendarDays,
        title: 'Agenda & Program',
        description:
          'Temukan informasi program dan agenda kegiatan masjid.',
        to: '/agenda',
        label: 'Jelajahi agenda',
      },
    ],
  },
}
