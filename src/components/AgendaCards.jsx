import { CalendarDays, ArrowUpRight } from "lucide-react";
import { agendaItems } from "../data/site";

export default function AgendaCards({ agendas = [] }) {
  return (
    <div className="agenda-grid">
      {agendas.map((agenda) => (
        <article className="agenda-card" key={agenda.id}>
          <div className="agenda-meta">
            <span className="agenda-tag">{agenda.category}</span>
            <span>{agenda.frequency}</span>
          </div>
          <h3>{agenda.title}</h3>
          <p>{agenda.description}</p>
          <div className="agenda-card-bottom">
            <CalendarDays size={15} />
            <span>{agenda.schedule}</span>
          </div>
        </article>
      ))}
    </div>
  );
}
