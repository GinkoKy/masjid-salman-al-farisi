import { Link } from "react-router-dom";

export default function TidakDitemukan() {
  return (
    <section className="not-found">
      <span className="eyebrow-pill">
        <span /> 404
      </span>
      <h1>Halaman tidak ditemukan</h1>
      <p>Alamat yang kamu buka tidak tersedia.</p>
      <Link className="button button-primary" to="/">
        Kembali ke Beranda
      </Link>
    </section>
  );
}
