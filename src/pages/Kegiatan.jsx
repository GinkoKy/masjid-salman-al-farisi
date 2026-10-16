import SectionHeading from '../components/SectionHeading'
import ActivityGallery from '../components/ActivityGallery'

export default function Kegiatan() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow-pill"><span /> DOKUMENTASI & AKTIVITAS NYATA</span><h1>Kegiatan & Dokumentasi</h1><p>Jejak aktivitas pembinaan, kajian, ibadah, dan kolaborasi civitas akademika FT UNNES.</p></div></section>
      <section className="section"><div className="container"><SectionHeading eyebrow="GALERI KEGIATAN" title="Aktivitas yang Menghidupkan Masjid" description="Pilih dokumentasi kegiatan untuk mengenal aktivitas masjid lebih dekat." /><ActivityGallery /><p className="small-note">Catatan: pastikan foto dan keterangannya berasal dari dokumentasi resmi organisasi sebelum website dipublikasikan.</p></div></section>
    </>
  )
}
