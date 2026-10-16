import { ArrowRight, Landmark } from "lucide-react";

import { Link } from "react-router-dom";
import PrayerSchedule from "../components/PrayerSchedule";
import SectionHeading from "../components/SectionHeading";

import { images } from "../data/site";
import { berandaData } from "../data/beranda";

export default function Beranda() {
  const { hero, introduction, quote, navigationSection } = berandaData;

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-pattern" />

        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="hero-kicker">
              <Landmark size={15} />
              {hero.kicker}
            </div>

            <h1>
              {hero.title} &amp;{" "}
              <span>Keunggulan Teknologi</span>
            </h1>

            <p>{hero.description}</p>

            <div className="hero-actions">
              <Link
                className="button button-primary"
                to={hero.primaryButton.to}
              >
                {hero.primaryButton.label}
                <ArrowRight size={16} />
              </Link>

              <Link
                className="button button-outline"
                to={hero.secondaryButton.to}
              >
                {hero.secondaryButton.label}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <PrayerSchedule />

            <div className="hero-image-wrap">
              <img src={images.hero} alt={hero.imageAlt} />

              <span>{hero.imageCaption}</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="section section-intro">
        <div className="container intro-layout">
          <div>
            <SectionHeading
              eyebrow={introduction.eyebrow}
              title={introduction.title}
              description={introduction.description}
            />

            <p className="body-copy">{introduction.body}</p>
          </div>

          <aside className="quote-card">
            <span className="quote-label">{quote.label}</span>

            <blockquote>{quote.text}</blockquote>

            <div className="quote-footer">
              <span>{quote.footer}</span>
              <span>{quote.badge}</span>
            </div>
          </aside>
        </div>
      </section>

      {/* NAVIGATION SECTION */}
      <section className="section section-missions">
        <div className="container">
          <SectionHeading
            eyebrow={navigationSection.eyebrow}
            title={navigationSection.title}
            description={navigationSection.description}
          />

          <div className="page-link-grid">
            {navigationSection.links.map((item) => {
              const Icon = item.icon;

              return (
                <Link className="page-link-card" to={item.to} key={item.to}>
                  <span className="page-link-icon">
                    <Icon size={19} />
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="card-link">
                    {item.label}
                    <ArrowRight size={13} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
