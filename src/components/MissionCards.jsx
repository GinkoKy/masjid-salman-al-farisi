import { BookOpen, BookMarked, Users, HandCoins, Network, HeartHandshake, Landmark } from 'lucide-react'
import { missions } from '../data/site'

const icons = [BookOpen, BookMarked, Users, HandCoins, Network, HeartHandshake, Landmark]

export default function MissionCards() {
  return (
    <div className="mission-grid">
      {missions.map(([title, description], index) => {
        const Icon = icons[index]
        return (
          <article className="mission-card" key={title}>
            <div className="mission-icon"><Icon size={17} /></div>
            <h3>{title}</h3>
            <p>{description}</p>
            <span className="card-link">Pelajari misi <span aria-hidden="true">↗</span></span>
          </article>
        )
      })}
    </div>
  )
}
