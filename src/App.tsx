import { useEffect, useState } from "react";
import { navOrder, site, type Lang } from "./content";

const STORAGE_KEY = "site-lang";

// The Aliyun deployment serves a mainland-facing audience, so it opens in
// Chinese; GitHub Pages keeps the English default. An explicit choice already
// stored by the visitor still wins over both.
const ZH_DEFAULT_HOSTS = [
  "boring180.asia",
  "www.boring180.asia",
  "boring180.oss-cn-hongkong.aliyuncs.com",
];

function initialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === "en" || saved === "zh") return saved;
  if (ZH_DEFAULT_HOSTS.includes(window.location.hostname)) return "zh";
  return window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const c = site[lang];
  const { ui, profile } = c;

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = ui.documentTitle;
  }, [lang, ui.documentTitle]);

  const sectionIndex = (id: (typeof navOrder)[number]) =>
    String(navOrder.indexOf(id) + 1).padStart(2, "0");

  return (
    <div className="page">
      <header className="nav">
        <a className="nav__brand" href="#top">
          {profile.name}
        </a>
        <nav className="nav__links" aria-label="Primary">
          {navOrder.map((id) => (
            <a key={id} href={`#${id}`}>
              {ui.nav[id]}
            </a>
          ))}
          <button
            type="button"
            className="nav__lang"
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            aria-label={ui.toggleAria}
          >
            {ui.toggleLabel}
          </button>
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
                alt={profile.name}
                width={112}
                height={112}
                loading="eager"
              />
              <div>
                <p className="hero__eyebrow">{profile.focus}</p>
                <h1 className="hero__name">{profile.name}</h1>
                <p className="hero__title">
                  {profile.title} · {ui.heroSuffix}
                </p>
              </div>
            </div>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                {ui.viewProjects}
              </a>
              <a
                className="btn btn--ghost"
                href={profile.cv}
                target="_blank"
                rel="noreferrer"
              >
                {ui.viewCv}
              </a>
              <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                {ui.getInTouch}
              </a>
            </div>
          </div>
          <div className="hero__stats">
            {c.highlights.map((h) => (
              <div className="stat" key={h.value}>
                <span className="stat__value">{h.value}</span>
                <span className="stat__label">{h.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section__title">
            <span className="section__index">{sectionIndex("projects")}</span>{" "}
            {ui.sections.projects}
          </h2>
          <div className="projects">
            {c.projects.map((p) => (
              <article className="card" key={p.title}>
                <div className="card__head">
                  <h3 className="card__title">{p.title}</h3>
                  <span className="card__period">{p.period}</span>
                </div>
                <p className="card__role">{p.role}</p>
                {p.supervisor && (
                  <p className="card__supervisor">
                    {ui.supervisorPrefix}
                    {p.supervisor}
                  </p>
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
            <span className="section__index">{sectionIndex("skills")}</span>{" "}
            {ui.sections.skills}
          </h2>
          <div className="skills">
            {c.skills.map((group) => (
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
              <h3 className="skill__name">{ui.languagesTitle}</h3>
              <ul className="skill__items">
                {c.languages.map((l) => (
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
            <span className="section__index">{sectionIndex("education")}</span>{" "}
            {ui.sections.education}
          </h2>
          <div className="timeline">
            {c.education.map((e) => (
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
          <figure className="figure">
            <img
              className="figure__img"
              src={c.degreeFigure.src}
              alt={c.degreeFigure.alt}
              width={c.degreeFigure.width}
              height={c.degreeFigure.height}
              loading="lazy"
            />
            <figcaption className="figure__caption">
              {c.degreeFigure.caption}
            </figcaption>
          </figure>
        </section>

        <section id="experience" className="section">
          <h2 className="section__title">
            <span className="section__index">{sectionIndex("experience")}</span>{" "}
            {ui.sections.experience}
          </h2>
          <div className="timeline">
            {c.experience.map((e) => (
              <article className="timeline__item" key={e.organization}>
                <div className="timeline__marker" aria-hidden="true" />
                <div className="timeline__body">
                  <div className="timeline__head">
                    <h3>{e.organization}</h3>
                    <span className="timeline__period">{e.period}</span>
                  </div>
                  <p className="timeline__meta">
                    {e.role} · {e.location}
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
            <span className="section__index">{sectionIndex("honors")}</span>{" "}
            {ui.sections.honors}
          </h2>
          <ul className="honors">
            {c.honors.map((h) => (
              <li className="honors__item" key={h.title}>
                <span className="honors__year">{h.year}</span>
                <span className="honors__title">{h.title}</span>
                <span className="honors__awarder">{h.awarder}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="friends" className="section">
          <h2 className="section__title">
            <span className="section__index">{sectionIndex("friends")}</span>{" "}
            {ui.sections.friends}
          </h2>
          <div className="friends">
            {c.friends.map((f) => (
              <a
                className="friend"
                key={f.name}
                href={f.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="friend__avatar"
                  src={f.avatar}
                  alt={f.name}
                  width={56}
                  height={56}
                  loading="lazy"
                />
                <div className="friend__info">
                  <h3 className="friend__name">{f.name}</h3>
                  <p className="friend__bio">{f.bio}</p>
                  <p className="friend__desc">{f.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="resources" className="section">
          <h2 className="section__title">
            <span className="section__index">{sectionIndex("resources")}</span>{" "}
            {ui.sections.resources}
          </h2>
          <p className="section__lead">{ui.resourcesLead}</p>
          <div className="resources">
            {c.resources.map((group) => (
              <article className="resource" key={group.name}>
                <div className="resource__head">
                  <h3 className="resource__name">{group.name}</h3>
                  {group.source && (
                    <a
                      className="resource__source"
                      href={group.source.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {group.source.label}
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  )}
                </div>
                <p className="resource__desc">{group.description}</p>
                <ul className="resource__links">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        <span className="resource__code">{link.label}</span>
                        {link.course && (
                          <span className="resource__course">
                            {link.course[lang]}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--contact">
          <h2 className="section__title">
            <span className="section__index">{sectionIndex("contact")}</span>{" "}
            {ui.sections.contact}
          </h2>
          <p className="contact__text">{ui.contactText}</p>
          <div className="contact__links">
            {c.socials.map((s) => (
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
        <span>{ui.footerNote}</span>
      </footer>
    </div>
  );
}
