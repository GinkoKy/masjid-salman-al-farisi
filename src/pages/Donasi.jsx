import { HandCoins, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

export default function Donasi() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow-pill">
            <span /> PARTISIPASI & KEMAKMURAN
          </span>
          <h1>Infaq & Donasi</h1>
          <p>
            Dukung kegiatan ibadah, pembinaan, dan kemanfaatan Masjid Salman
            Al-Farisi.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container donation-layout">
          <div>
            <SectionHeading
              eyebrow="BERBAGI MANFAAT"
              title="Salurkan Infaq dengan Aman"
              description="Gunakan hanya kanal donasi resmi yang telah dikonfirmasi oleh pengurus masjid."
            />
            <p className="body-copy">
              Kontribusi jamaah dapat mendukung kegiatan keagamaan, pemeliharaan
              fasilitas, dan program sosial. Informasi rekening, QRIS, dan
              narahubung belum dimasukkan karena perlu diverifikasi dari sumber
              resmi.
            </p>
          </div>
          <aside className="donation-card">
            <div className="donation-icon">
              <HandCoins size={25} />
            </div>
            <h2>Informasi Donasi Resmi</h2>
            <p>
              Tambahkan QRIS, rekening, dan narahubung resmi setelah disetujui
              pengurus.
            </p>
            <div className="notice">
              <ShieldCheck size={18} />
              <p>
                Jangan gunakan informasi pembayaran contoh untuk transaksi
                nyata.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
