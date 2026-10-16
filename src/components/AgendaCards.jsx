import { CalendarDays, ArrowUpRight } from 'lucide-react'
import { agendaItems } from '../data/site'

export default function AgendaCards() {
  return (
    <div className="agenda-grid">
      {agendaItems.map((item) => (
        <article className="agenda-card" key={item.title}>
          <div className="agenda-meta"><span className="agenda-tag">{item.category}</span><span>{item.frequency}</span></div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="agenda-card-bottom"><CalendarDays size={15} /><span>Detail agenda dikonfirmasi pengurus</span><ArrowUpRight size={15} /></div>
        </article>
      ))}
    </div>
  )
}
