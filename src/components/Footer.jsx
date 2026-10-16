import { MapPin, Phone, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner md:flex">
        <div className="footer-about">
          <Link to="/" className="footer-brand"><img src={images.logo} alt="" /><span>{site.name} <small>{site.organization}</small></span></Link>
          <p>Pusat peradaban spiritual dan pembinaan karakter insan teknik Universitas Negeri Semarang. Mewadahi dosen, mahasiswa, dan masyarakat untuk beribadah, menuntut ilmu, serta menebar kemanfaatan.</p>
        </div>
        <div className="footer-contact mt-3 md:mt-0 md:ml-auto">
          <span className="eyebrow">LOKASI SEKRETARIAT</span>
          <p className='my-2'><MapPin size={16} /> {site.location}</p>
          <p className='my-2'><Phone size={16} /> (024) 8508101  •  FT UNNES</p>
          <p className='my-2'><Instagram size={16} /> @masjidsalman.ftunnes</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Masjid Salman Al-Farisi FT UNNES. Informasi perlu diverifikasi oleh pengurus.</div>
    </footer>
  )
}
