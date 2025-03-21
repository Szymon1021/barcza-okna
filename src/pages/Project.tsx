import { useState, useEffect } from "react";
import "../styles/Project.css";

const projects = [
  {
    src: "/images/project1.png",
    description:
      "Nowoczesne okna w budynku mieszkalnym – elegancja i energooszczędność.",
  },
  {
    src: "/images/project2.png",
    description:
      "Przeszklone fasady aluminiowe – nowoczesne rozwiązania dla biurowców.",
  },
  {
    src: "/images/project3.png",
    description:
      "Klasyczne drewniane okna w zabytkowej kamienicy – połączenie stylu i funkcjonalności.",
  },
  {
    src: "/images/project4.png",
    description:
      "Klasyczne drewniane okna w zabytkowej kamienicy – połączenie stylu i funkcjonalności.",
  },
];

const Project: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="project-container">
      <div
        className="project-carousel"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          className={`project-carousel-btn left ${
            hovered ? "visible" : "hidden"
          }`}
          onClick={() =>
            setCurrent(current === 0 ? projects.length - 1 : current - 1)
          }
        >
          &#10094;
        </button>
        <div className="project-carousel-image-wrapper">
          <img
            src={projects[current].src}
            alt="Projekt"
            className="project-carousel-image"
          />
          <div
            className={`project-carousel-overlay ${
              hovered ? "visible" : "hidden"
            }`}
          >
            {projects[current].description}
          </div>
        </div>
        <div
          className={`project-carousel-dots ${hovered ? "visible" : "hidden"}`}
        >
          {projects.map((_, index) => (
            <span
              key={index}
              className={`project-dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <button
          className={`project-carousel-btn right ${
            hovered ? "visible" : "hidden"
          }`}
          onClick={() => setCurrent((current + 1) % projects.length)}
        >
          &#10095;
        </button>
      </div>
      <h1 className="project-title">Nasze realizacje</h1>
      <p className="project-text">
        Przykłady naszych zrealizowanych projektów.
      </p>
    </section>
  );
};

export default Project;
