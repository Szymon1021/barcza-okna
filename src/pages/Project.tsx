import { useEffect, useMemo, useState } from "react";
import "../styles/Project.css";
import { useTranslation } from "react-i18next";

const Project: React.FC = () => {
  const { t } = useTranslation();
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
    <section className="project-container">
      <h1 className="project-title">{t("project.title")}</h1>
      <p className="project-text">{t("project.subtitle")}</p>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-tile" onClick={() => setLightbox(i)}>
            <img src={p.src} alt={`Projekt ${i + 1}`} className="project-tile-image" />
            <div className="project-tile-overlay">
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="project-lightbox" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-btn left"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + projects.length) % projects.length);
            }}
          >
            &#10094;
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={projects[lightbox].src} alt="Projekt" className="lightbox-image" />
            <p className="lightbox-caption">{projects[lightbox].description}</p>
          </div>
          <button
            className="lightbox-btn right"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % projects.length);
            }}
          >
            &#10095;
          </button>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            &#10005;
          </button>
        </div>
      )}
    </section>
  );
};

export default Project;
