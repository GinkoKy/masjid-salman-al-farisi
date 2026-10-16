import { CalendarDays, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import AgendaCards from "../components/AgendaCards";

export default function Agenda({ hero, section, agendas, banner }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow-pill">
            <span /> {hero.eyebrow}
          </span>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>
        </div>
      </section>

      <section className="section section-agenda-preview">
        <div className="container">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />

          <AgendaCards agendas={agendas} />

          <div className="mission-banner agenda-banner">
            <CalendarDays />

            <div>
              <strong>{banner.title}</strong>
              <p>{banner.description}</p>
            </div>

            <Link to={'https://wa.me/6285600201973'}>
              <MessageCircle size={14} />
              {banner.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
