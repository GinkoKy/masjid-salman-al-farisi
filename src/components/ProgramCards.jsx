
import {
  BookOpen,
  BookMarked,
  Users,
  HeartHandshake,
  HandCoins,
  CalendarCheck,
  BookHeart,
} from "lucide-react";

const programIcons = [
  BookOpen,
  BookMarked,
  Users,
  HeartHandshake,
  HandCoins,
  CalendarCheck,
  BookHeart,
];

export default function ProgramCards({ programs = [] }) {
  return (
    <div className="program-grid">
      {programs.map((program, index) => {
        const Icon = programIcons[index % programIcons.length];

        return (
          <article className="program-card" key={program.id}>
            <div className="program-card-top">
              <span className="program-icon">
                <Icon size={23} strokeWidth={1.7} />
              </span>

              <span className="program-number">
                {String(program.id).padStart(2, "0")}
              </span>
            </div>

            <span className="program-category">
              {program.category}
            </span>

            <h3>{program.title}</h3>

            <p>{program.description}</p>
          </article>
        );
      })}
    </div>
  );
}
