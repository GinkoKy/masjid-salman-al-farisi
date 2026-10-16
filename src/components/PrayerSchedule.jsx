import { Clock3 } from 'lucide-react'

const prayers = [
  ['Subuh', '04.28'],
  ['Dzuhur', '11.52'],
  ['Ashar', '15.08'],
  ['Maghrib', '17.58'],
  ['Isya', '19.09'],
]

export default function PrayerSchedule() {
  return (
    <div className="prayer-widget">
      <div className="prayer-widget-label"><Clock3 size={13} /> CONTOH TAMPILAN JADWAL SHALAT</div>
      <div className="prayer-grid">
        {prayers.map(([name, time], index) => (
          <div className={`prayer-slot ${index === 1 ? 'is-active' : ''}`} key={name}>
            <span>{name}</span><strong>{time}</strong>
          </div>
        ))}
      </div>
      <p className="prayer-note">Jam di atas hanya contoh dari mockup Stitch. Ganti dengan jadwal resmi setempat sebelum dipublikasikan.</p>
    </div>
  )
}
