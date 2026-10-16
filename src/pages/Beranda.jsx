import { ArrowRight, BookOpen, CalendarDays, Images, Landmark } from 'lucide-react'
import { Link } from 'react-router-dom'
import PrayerSchedule from '../components/PrayerSchedule'
import SectionHeading from '../components/SectionHeading'
import { images } from '../data/site'

const pageLinks = [
  { icon: Landmark, title: 'Tentang Kami', description: 'Kenali visi, orientasi, dan misi Masjid Salman Al-Farisi.', to: '/tentang-kami', label: 'Jelajahi profil' },
  { icon: BookOpen, title: 'Struktur Takmir', description: 'Lihat informasi kepengurusan dan amanah organisasi.', to: '/struktur-organisasi', label: 'Lihat struktur' },
  { icon: Images, title: 'Kegiatan & Dokumentasi', description: 'Telusuri dokumentasi aktivitas dan pembinaan jamaah.', to: '/kegiatan', label: 'Lihat galeri' },
  { icon: CalendarDays, title: 'Agenda & Program', description: 'Temukan informasi program dan agenda kegiatan masjid.', to: '/agenda', label: 'Jelajahi agenda' },
]

export default function Beranda() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-pattern" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="hero-kicker"><Landmark size={15} /> EPISENTRUM SPIRITUALITAS SIVITAS AKADEMIKA FT UNNES</div>
            <h1>Memadukan Nilai Spiritualitas Islam &amp; <span>Keunggulan Teknologi</span></h1>
            <p>Pusat Ibadah, Pembinaan, dan Pengabdian Sivitas Akademika Fakultas Teknik Universitas Negeri Semarang. Terbuka bagi dosen, tenaga kependidikan, mahasiswa, dan masyarakat umum.</p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/agenda">Lihat Agenda & Kegiatan <ArrowRight size={16} /></Link>
              <Link className="button button-outline" to="/donasi">Salurkan Infaq Online <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="hero-visual">
            <PrayerSchedule />
            <div className="hero-image-wrap"><img src={images.mosque} alt="Ilustrasi arsitektur masjid pada rancangan website" /><span>Masjid Salman Al-Farisi FT UNNES</span></div>
          </div>
        </div>
      </section>

      <section className="section section-intro">
        <div className="container intro-layout">
          <div>
            <SectionHeading eyebrow="SELAMAT DATANG" title="Ruang Ibadah, Ilmu, dan Pengabdian" description="Masjid Salman Al-Farisi FT UNNES menjadi ruang kebersamaan untuk bertumbuh dalam iman, ilmu, akhlak, dan kontribusi bagi masyarakat." />
            <p className="body-copy">Jelajahi profil organisasi, struktur takmir, dokumentasi kegiatan, serta agenda program melalui halaman yang tersedia di website ini.</p>
          </div>
          <aside className="quote-card">
            <span className="quote-label">✦ NILAI KEBERSAMAAN</span>
            <blockquote>“Memakmurkan masjid, membina insan teknik yang beriman, berilmu, berakhlak mulia, dan bermanfaat bagi masyarakat.”</blockquote>
            <div className="quote-footer"><span>Masjid Salman Al-Farisi FT UNNES</span><span>BERSAMA</span></div>
          </aside>
        </div>
      </section>

      <section className="section section-missions">
        <div className="container">
          <SectionHeading eyebrow="JELAJAHI WEBSITE" title="Temukan Informasi yang Kamu Butuhkan" description="Setiap menu membuka halaman tersendiri agar informasi lebih mudah dijelajahi." />
          <div className="page-link-grid">
            {pageLinks.map(({ icon: Icon, title, description, to, label }) => (
              <Link className="page-link-card" to={to} key={to}>
                <span className="page-link-icon"><Icon size={19} /></span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="card-link">{label} <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
