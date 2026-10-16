import { activities } from '../data/site'

export default function ActivityGallery() {
  return (
    <div className="activity-grid">
      {activities.map((item) => (
        <article className="activity-card" key={item.title}>
          <img src={item.image} alt={item.title} loading="lazy" />
          <div className="activity-overlay">
            <span>{item.category}</span>
            <h3>{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  )
}
