import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Beranda from './pages/Beranda'
import TentangKami from './pages/TentangKami'
import StrukturOrganisasi from './pages/StrukturOrganisasi'
import Kegiatan from './pages/Kegiatan'
import Agenda from './pages/Agenda'
import Donasi from './pages/Donasi'
import TidakDitemukan from './pages/TidakDitemukan'
import { images } from './data/site'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/beranda" element={<Navigate to="/" replace />} />
        <Route path="*" element={<TidakDitemukan />} />
      </Route>
    </Routes>
  )
}
