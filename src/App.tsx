import {
  education,
  highlights,
  honors,
  languages,
  profile,
  projects,
  skills,
  socials,
} from "./content";

const navItems = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "honors", label: "Honors" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <a className="nav__brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav__links" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__content">
            <div className="hero__intro">
              <img
                className="hero__photo"
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={112}
                height={112}
                loading="eager"
              />
              <div>
                <p className="hero__eyebrow">{profile.focus}</p>
                <h1 className="hero__name">{profile.name}</h1>
                <p className="hero__title">
                  {profile.title} · HKUST CPEG Graduate
                </p>
              </div>
            </div>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                View Projects
              </a>
              <a
                className="btn btn--ghost"
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
              >
                View CV
              </a>
              <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hero__stats">
            {highlights.map((h) => (
              <div className="stat" key={h.label}>
                <span className="stat__value">{h.value}</span>
                <span className="stat__label">{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section__title">
            <span className="section__index">01</span> Projects
          </h2>
          <div className="projects">
            {projects.map((p) => (
              <article className="card" key={p.title}>
                <div className="card__head">
                  <h3 className="card__title">{p.title}</h3>
                  <span className="card__period">{p.period}</span>
                </div>
                <p className="card__role">{p.role}</p>
                {p.supervisor && (
                  <p className="card__supervisor">Supervised by {p.supervisor}</p>
                )}
                <p className="card__desc">{p.description}</p>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {p.links && p.links.length > 0 && (
                  <div className="card__links">
                    {p.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                        <span aria-hidden="true"> ↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section__title">
            <span className="section__index">02</span> Skills
          </h2>
          <div className="skills">
            {skills.map((group) => (
              <div className="skill" key={group.name}>
                <h3 className="skill__name">{group.name}</h3>
                <ul className="skill__items">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="skill">
              <h3 className="skill__name">Languages</h3>
              <ul className="skill__items">
                {languages.map((l) => (
                  <li key={l.language}>
                    {l.language} · {l.fluency}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2 className="section__title">
            <span className="section__index">03</span> Education
          </h2>
          <div className="timeline">
            {education.map((e) => (
              <article className="timeline__item" key={e.institution}>
                <div className="timeline__marker" aria-hidden="true" />
                <div className="timeline__body">
                  <div className="timeline__head">
                    <h3>{e.institution}</h3>
                    <span className="timeline__period">{e.period}</span>
                  </div>
                  <p className="timeline__meta">
                    {e.degree} · {e.location}
                  </p>
                  <ul>
                    {e.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="honors" className="section">
          <h2 className="section__title">
            <span className="section__index">04</span> Honors
          </h2>
          <ul className="honors">
            {honors.map((h) => (
              <li className="honors__item" key={h.title}>
                <span className="honors__year">{h.year}</span>
                <span className="honors__title">{h.title}</span>
                <span className="honors__awarder">{h.awarder}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section section--contact">
          <h2 className="section__title">
            <span className="section__index">05</span> Contact
          </h2>
          <p className="contact__text">
            Open to robotics and embodied intelligence opportunities. The best
            way to reach me is by email.
          </p>
          <div className="contact__links">
            {socials.map((s) => (
              <a
                className="btn btn--ghost"
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {s.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Built with React + Vite</span>
      </footer>
    </div>
  );
}
