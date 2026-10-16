
import { HeartHandshake, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import ProgramCards from "../components/ProgramCards";

export default function Program({
  hero,
  section,
  programs,
  banner,
}) {
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

      <section className="section section-program">
        <div className="container">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />

          <ProgramCards programs={programs} />

          <div className="mission-banner program-banner">
            <HeartHandshake />

            <div>
              <strong>{banner.title}</strong>
              <p>{banner.description}</p>
            </div>

            <Link to={banner.buttonLink}>
              <MessageCircle size={14} />
              {banner.buttonText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
