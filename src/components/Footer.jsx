import { MapPin, Mail, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import { images, site } from '../data/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-about">
          <Link to="/" className="footer-brand"><img src={images.logo} alt="" /><span>{site.name} <small>{site.organization}</small></span></Link>
          <p>Pusat peradaban spiritual dan pembinaan karakter insan teknik Universitas Negeri Semarang. Mewadahi civitas akademika dan masyarakat untuk beribadah, menuntut ilmu, serta menebar kemanfaatan.</p>
        </div>
        <div className="footer-contact">
          <span className="eyebrow">LOKASI SEKRETARIAT</span>
          <p><MapPin size={16} /> {site.location}</p>
          <p><Mail size={16} /> Kontak resmi: tambahkan informasi terverifikasi</p>
          <p><Instagram size={16} /> Instagram: tambahkan akun resmi</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Masjid Salman Al-Farisi FT UNNES. Informasi perlu diverifikasi oleh pengurus.</div>
    </footer>
  )
}
