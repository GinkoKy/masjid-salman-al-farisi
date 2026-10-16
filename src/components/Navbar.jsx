import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, HandHeart } from "lucide-react";
import { navigation, images, site } from "../data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
          aria-label="Masjid Salman Al-Farisi, beranda"
        >
          <img src={images.logo} alt="" className="brand-logo" />
          <span className="brand-name">{site.name}</span>
        </Link>

        <nav
          className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}
          aria-label="Navigasi utama"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/donasi" className="mobile-donation" onClick={closeMenu}>
            <HandHeart size={16} /> Infaq & Donasi
          </Link>
        </nav>

        <Link to="/donasi" className="donation-button">
          <HandHeart size={16} /> <span>Infaq & Donasi</span>
        </Link>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
