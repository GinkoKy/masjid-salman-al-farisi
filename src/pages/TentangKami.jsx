
import SectionHeading from '../components/SectionHeading'
import MissionCards from '../components/MissionCards'
import { tentangKamiData } from '../data/tentangkami'

export default function TentangKami() {
  const {
    hero,
    introduction,
    vision,
    mission,
    values,
  } = tentangKamiData

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow-pill">
            <span /> {hero.label}
          </span>

          <h1>{hero.title}</h1>

          <p>{hero.description}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-page-grid">
          <div>
            <SectionHeading
              eyebrow={introduction.eyebrow}
              title={introduction.title}
            />

            {introduction.paragraphs.map((paragraph, index) => (
              <p className="body-copy" key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="quote-card">
            <span className="quote-label">
              {vision.label}
            </span>

            <blockquote>{vision.text}</blockquote>

            <div className="quote-footer">
              <span>{vision.footer}</span>
              <span>{vision.badge}</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-missions">
        <div className="container">
          <SectionHeading
            eyebrow={mission.eyebrow}
            title={mission.title}
            description={mission.description}
          />

          <MissionCards />
        </div>
      </section>

      <section className="section">
        <div className="container values-grid">
          {values.map((item) => {
            const Icon = item.icon

            return (
              <article key={item.title}>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
