
import {
  BookOpen,
  BookMarked,
  Users,
  HandCoins,
  Network,
  HeartHandshake,
  Landmark,
} from 'lucide-react'

import { missions } from '../data/site'

const icons = [
  Landmark,
  BookOpen,
  Users,
  HandCoins,
  Network,
  HeartHandshake,
  BookMarked,
]

const pillarLabels = [
  'Pilar Pembinaan Ibadah',
  "Pilar Al-Qur'an Terpadu",
  'Pilar Kepemudaan & Kaderisasi',
  'Pilar Kesejahteraan Sosial',
  'Pilar Kolaborasi Kelembagaan',
  'Pilar Kenyamanan & Layanan',
  'Pilar Dakwah Partisipatif',
]

export default function MissionCards() {
  return (
    <div className="mission-grid">
      {missions.map(([title, description], index) => {
        const Icon = icons[index] || Landmark
        const pillar =
          pillarLabels[index] || 'Pilar Pengembangan Masjid'

        return (
          <article
            className={`mission-card ${
              index === 6 ? 'mission-card-featured' : ''
            }`}
            key={title}
          >
            <div className="mission-card-top">
              <span className="mission-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              {index !== 6 && (
                <span className="mission-icon">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
              )}
            </div>

            <div className="mission-card-content">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>

            <div className="mission-card-footer">
              <span className="mission-pillar">{pillar}</span>
            </div>
          </article>
        )
      })}
    </div>
  )
}
