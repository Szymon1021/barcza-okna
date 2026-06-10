import { useEffect, useMemo, useState } from "react";
import "../styles/Home.css";
import "../styles/Project.css";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const projects = useMemo(() => [
    { src: "/images/project1.png", description: t("project.projects.project1") },
    { src: "/images/project2.png", description: t("project.projects.project2") },
    { src: "/images/project3.png", description: t("project.projects.project3") },
    { src: "/images/project4.png", description: t("project.projects.project4") },
    { src: "/images/WhatsApp%20Image%202026-03-31%20at%2016.12.53.jpeg", description: t("project.projects.project5") },
    { src: "/images/WhatsApp%20Image%202026-05-30%20at%2007.07.46.jpeg", description: t("project.projects.project6") },
    { src: "/images/WhatsApp%20Image%202026-06-10%20at%2017.57.41.jpeg", description: t("project.projects.project7") },
  ], [t]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [projects.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null)
        setLightbox((lightbox + 1) % projects.length);
      if (e.key === "ArrowLeft" && lightbox !== null)
        setLightbox((lightbox - 1 + projects.length) % projects.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, projects.length]);

  return (
    <div className="home-container">
      {/* Karuzela */}
      <div
        className="home-carousel"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          className={`home-carousel-btn left ${hovered ? "visible" : "hidden"}`}
          onClick={() => setCurrent(current === 0 ? projects.length - 1 : current - 1)}
        >
          &#10094;
        </button>
        <div className="home-carousel-image-wrapper">
          <img src={projects[current].src} alt="Home Slide" className="home-image" />
        </div>
        <div className={`home-carousel-dots ${hovered ? "visible" : "hidden"}`}>
          {projects.map((_, index) => (
            <span
              key={index}
              className={`home-dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
        <button
          className={`home-carousel-btn right ${hovered ? "visible" : "hidden"}`}
          onClick={() => setCurrent((current + 1) % projects.length)}
        >
          &#10095;
        </button>
      </div>

      {/* Tekst powitalny */}
      <div className="home-text">
        <h1>{t('home.welcome')}</h1>
        <p>{t('home.subtitle')}</p>
      </div>

      {/* Sekcja realizacji */}
      <div className="home-projects">
        <h2 className="home-projects-title">{t('project.title')}</h2>
        <p className="home-projects-subtitle">{t('project.subtitle')}</p>
        <div className="home-projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-tile" onClick={() => setLightbox(i)}>
              <img src={p.src} alt={`Realizacja ${i + 1}`} className="project-tile-image" />
              <div className="project-tile-overlay">
                <p>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="project-lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-btn left"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + projects.length) % projects.length); }}
          >
            &#10094;
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={projects[lightbox].src} alt="Realizacja" className="lightbox-image" />
            <p className="lightbox-caption">{projects[lightbox].description}</p>
          </div>
          <button
            className="lightbox-btn right"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % projects.length); }}
          >
            &#10095;
          </button>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>&#10005;</button>
        </div>
      )}
    </div>
  );
};

export default Home;

