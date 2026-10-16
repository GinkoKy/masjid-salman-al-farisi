import { UsersRound, ShieldCheck, ThumbsUp } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { images } from "../data/site";

export default function StrukturOrganisasi() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow-pill">
            <span /> AMANAH & KEPENGURUSAN
          </span>
          <h1>Struktur Organisasi</h1>
          <p>
            Susunan Pengurus & Dewan Kemakmuran Masjid Salman Al-Farisi FT
            UNNES.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container committee-page">
          <SectionHeading
            eyebrow="STRUKTUR ORGANISASI"
            title="Sinergi dalam Memakmurkan Masjid"
            description="Sinergi berkelanjutan antara jajaran pimpinan, dosen pembina, dan mahasiswa Takmir Muda."
            centered
          />
          <div className="committee-poster">
            <img
              src={images.struktur}
              alt="Poster struktur organisasi dari desain referensi Stitch"
            />
          </div>
          <div className="values-grid">
            <article>
              <UsersRound />
              <h3>Kolaborasi</h3>
              <p>
                Koordinasi pengurus dan civitas akademika untuk mendukung
                kegiatan masjid.
              </p>
            </article>
            <article>
              <ShieldCheck />
              <h3>Amanah</h3>
              <p>
                Setiap peran dijalankan dengan tanggung jawab dan keterbukaan.
              </p>
            </article>
            <article>
              <ThumbsUp />
              <h3>Ramah</h3>
              <p>
                Melayani keperluan jamaah dan masyarakat dengan sikap hangat dan bersahabat.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
