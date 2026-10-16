import { CalendarDays, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import AgendaCards from '../components/AgendaCards'

export default function Agenda() {
  return (
    <>
      <section className="page-hero"><div className="container"><span className="eyebrow-pill"><span /> KALENDER DAKWAH & KHIDMAH KAMPUS</span><h1>Agenda & Program</h1><p>Informasi kajian, amalan berjamaah, kegiatan sosial, dan gotong royong takmir.</p></div></section>
      <section className="section section-agenda-preview"><div className="container"><SectionHeading eyebrow="PROGRAM TERJADWAL" title="Agenda Masjid Salman Al-Farisi" description="Jadwal berikut merupakan konten awal dari mockup dan perlu dikonfirmasi oleh pengurus." /><AgendaCards />
        <div className="mission-banner agenda-banner"><CalendarDays /><div><strong>Ingin mengusulkan kegiatan?</strong><p>Hubungi pengurus melalui saluran resmi setelah informasinya ditambahkan.</p></div><Link to="/donasi"><MessageCircle size={14} /> Hubungi kami</Link></div>
      </div></section>
    </>
  )
}
