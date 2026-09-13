import { useEffect, useState } from "react";
import "../styles/Home.css";
import "../styles/Project.css";
import { useTranslation } from "react-i18next";
import { assetUrl } from "../utils/assets";

const IMAGE_SRCS = [
  "/images/WhatsApp%20Image%202026-03-31%20at%2016.12.53.jpeg",
  "/images/WhatsApp%20Image%202026-05-30%20at%2007.07.46.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2017.57.41.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.22.33.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.23.01.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.23.18.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.23.49.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.23.51%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.23.51.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.26.05.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.25%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.25.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.26%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.26.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.27%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.27.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.28%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.28%20%282%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.28.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.30%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.30.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.31%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.31.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.32%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.32.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.33%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.33%20%282%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.33%20%283%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.33%20%284%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.33.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.34.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.35%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.35.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.36%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.36.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.29.37.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.40.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.41%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.41.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.42%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.42.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.43%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.43%20%282%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.43.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.44%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.44.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.45%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.45%20%282%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.45.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.46%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.46%20%282%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.46.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.47%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.47.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.48%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.48.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.49.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.50%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.50.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.51%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.51.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.52%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.52.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.53.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.54%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.54.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.55%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.55.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.56.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.32.57.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.36.56.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.36.58.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.36.59%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.36.59.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.00%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.00.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.01%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.01%20%282%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.01.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.02%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.02.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.03%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.03.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.04%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.04%20%282%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.04.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.37.05.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.41.08.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.41.11%20%281%29.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.41.11.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2018.41.12.jpeg",
  "/images/WhatsApp%20Image%202026-06-10%20at%2051.jpeg",
];

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const basePath = process.env.PUBLIC_URL || "";

  const projects = IMAGE_SRCS.map((src) => ({
    src: `${basePath}${src}`,
    description: t("project.projects.project5"),
  }));

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
          <img src={assetUrl(projects[current].src)} alt="Home Slide" className="home-image" />
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
        <img src={assetUrl("/images/logo_barczak.jpg")} alt="Barczak Okna" className="home-text-logo" />
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
              <img src={assetUrl(p.src)} alt={`Realizacja ${i + 1}`} className="project-tile-image" />
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
            <img src={assetUrl(projects[lightbox].src)} alt="Realizacja" className="lightbox-image" />
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

