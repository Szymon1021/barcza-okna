import { useEffect, useState } from "react";
import "../styles/Home.css";

const images = [
  {
    src: "/images/home1.png",
    description:
      "Nowoczesne okna dla Twojego domu. Zapewniają doskonałą izolację termiczną, minimalizując straty ciepła i redukując rachunki za energię. Dostępne w różnych wariantach kolorystycznych i stylach.",
  },
  {
    src: "/images/home2.png",
    description:
      "Eleganckie rozwiązania do wnętrz. Okna, które łączą funkcjonalność z estetyką, nadając wnętrzu wyjątkowy charakter. Wybór idealny dla osób ceniących design i komfort.",
  },
  {
    src: "/images/home3.png",
    description:
      "Innowacyjne technologie okienne. Wykorzystujemy najnowsze osiągnięcia technologiczne, aby zwiększyć bezpieczeństwo, trwałość i energooszczędność naszych produktów.",
  },
  {
    src: "/images/home4.png",
    description:
      "Wytrzymałe i stylowe okna do każdego budynku. Dzięki solidnym materiałom i nowoczesnemu designowi są odporne na warunki atmosferyczne i zapewniają długowieczność.",
  },
];

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="home-container">
      <div
        className="home-carousel"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <button
          className={`home-carousel-btn left ${hovered ? "visible" : "hidden"}`}
          onClick={() =>
            setCurrent(current === 0 ? images.length - 1 : current - 1)
          }
        >
          &#10094;
        </button>
        <div className="home-carousel-image-wrapper">
          <img
            src={images[current].src}
            alt="Home Slide"
            className="home-image"
          />
          <div
            className={`home-carousel-overlay ${
              hovered ? "visible" : "hidden"
            }`}
          >
            {images[current].description}
          </div>
        </div>
        <div className={`home-carousel-dots ${hovered ? "visible" : "hidden"}`}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`home-dot ${index === current ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <button
          className={`home-carousel-btn right ${
            hovered ? "visible" : "hidden"
          }`}
          onClick={() => setCurrent((current + 1) % images.length)}
        >
          &#10095;
        </button>
      </div>
      <div className="home-text">
        <h1>Witamy w Barczak Okna</h1>
        <p>Najwyższa jakość okien i drzwi dla Twojego domu.</p>
      </div>
    </div>
  );
};

export default Home;
