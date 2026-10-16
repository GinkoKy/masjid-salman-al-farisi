import { HandHeart, BookOpen, Users, HeartHandshake } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import MissionCards from '../components/MissionCards'

export default function TentangKami() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow-pill"><span /> PROFIL & ORIENTASI</span><h1>Tentang Masjid Salman Al-Farisi</h1><p>Ruang ibadah, pembinaan karakter, ilmu, dan pengabdian bagi civitas akademika Fakultas Teknik UNNES.</p></div></section>
      <section className="section"><div className="container about-page-grid">
        <div><SectionHeading eyebrow="TENTANG KAMI" title="Episentrum Spiritual & Pembinaan Karakter Insan Teknik" /><p className="body-copy">Masjid Salman Al-Farisi berada di lingkungan Fakultas Teknik Universitas Negeri Semarang. Masjid menjadi tempat melaksanakan ibadah dan ruang bertumbuh bagi mahasiswa, dosen, tenaga kependidikan, serta masyarakat.</p><p className="body-copy">Melalui kajian rutin, pembinaan Al-Qur’an, kegiatan sosial, dan kepemudaan Islami, masjid mengupayakan keseimbangan ilmu pengetahuan, keimanan, akhlak, dan kontribusi nyata bagi masyarakat.</p></div>
        <aside className="quote-card"><span className="quote-label">✦ VISI KELEMBAGAAN</span><blockquote>“Memakmurkan masjid sebagai pusat peradaban Islam yang unggul dalam membina insan teknik yang beriman, berilmu, berakhlak mulia, dan berkontribusi nyata bagi masyarakat.”</blockquote><div className="quote-footer"><span>Landasan Ikhtiar Takmir</span><span>VISI</span></div></aside>
      </div></section>
      <section className="section section-missions"><div className="container"><SectionHeading eyebrow="ARAH & KOMITMEN STRATEGIS" title="Misi Organisasi: 7 Misi Pokok Takmir" description="Arah pengabdian yang menyatukan ibadah, ilmu, kepemimpinan, kepedulian, dan pemakmuran masjid." /><MissionCards /></div></section>
      <section className="section"><div className="container values-grid">
        <article><BookOpen /><h3>Ibadah & Ilmu</h3><p>Menghadirkan ruang ibadah dan kajian yang bermanfaat.</p></article>
        <article><Users /><h3>Pembinaan Insan Teknik</h3><p>Mendorong karakter, kepemimpinan, dan kolaborasi mahasiswa.</p></article>
        <article><HeartHandshake /><h3>Pengabdian</h3><p>Menguatkan kepedulian sosial dan kemanfaatan bagi masyarakat.</p></article>
      </div></section>
    </>
  )
}
