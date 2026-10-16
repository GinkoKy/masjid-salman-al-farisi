import { MapPin, Phone, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { images, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner md:flex">
        <div className="footer-about">
          <Link to="/" className="footer-brand">
            <img src={images.logo} alt="" />
            <span>
              {site.name} <small>{site.organization}</small>
            </span>
          </Link>
          <p>
            Pusat peradaban spiritual dan pembinaan karakter insan teknik
            Universitas Negeri Semarang. Mewadahi dosen, mahasiswa, dan
            masyarakat untuk beribadah, menuntut ilmu, serta menebar
            kemanfaatan.
          </p>
        </div>
        <div className="footer-contact mt-3 md:mt-0 md:ml-auto">
          <span className="eyebrow">LOKASI SEKRETARIAT</span>
          <p className="my-2">
            <MapPin size={16} />
            <a href="https://maps.app.goo.gl/SRLe43DRoRRSENbX8">
              FT UNNES, Sekaran, Kec. Gn. Pati, Kota Semarang, Jawa Tengah 50229
            </a>
          </p>
          <p className="my-2">
            <Phone size={16} />
            <a href="https://wa.me/6285600201973">
              +62 856 0020 1973 ( Fathiin )
            </a>
          </p>
          <p className="my-2">
            <Instagram size={16} />{" "}
            <a href="https://instagram.com/masjidsalman.ftunnes">
              @masjidsalman.ftunnes
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} Masjid Salman Al-Farisi FT UNNES.
      </div>
    </footer>
  );
}
