import { useEffect, useState } from "react";
import "../styles/Pages.css";

const sections = [
  {
    title: "Okna",
    description:
      "Najlepsze okna dla Twojego domu - trwałość i elegancja. Wybierając nasze okna, inwestujesz w nowoczesne rozwiązania technologiczne, które zapewniają wysoką jakość oraz estetykę. Dzięki zaawansowanej konstrukcji oferują doskonałą izolację termiczną i akustyczną. Idealne dla domów energooszczędnych.",
    images: [
      {
        src: "/images/window1.png",
        description:
          "Okna PCV - trwałość i nowoczesność. Charakteryzują się wysoką odpornością na warunki atmosferyczne oraz łatwością w utrzymaniu czystości. Dzięki innowacyjnym rozwiązaniom zapewniają doskonałą izolację cieplną.",
      },
      {
        src: "/images/window2.png",
        description:
          "Okna aluminiowe - elegancja i wytrzymałość. Nowoczesne i stylowe, doskonale sprawdzają się w budynkach o dużych przeszkleniach. Ich solidna konstrukcja zapewnia bezpieczeństwo i długowieczność użytkowania.",
      },
      {
        src: "/images/window3.png",
        description:
          "Okna drewniane - klasyka i naturalność. Wykonane z najwyższej jakości drewna, łączą tradycję z nowoczesnymi technologiami. Oferują ciepły, elegancki wygląd oraz doskonałe właściwości izolacyjne.",
      },
    ],
  },
  {
    title: "Stolarka PCV",
    description:
      "Energooszczędne i trwałe rozwiązania dla Twojego domu. Nasza stolarka PCV zapewnia doskonałą izolację termiczną i akustyczną, co pozwala na znaczne oszczędności energii. Nowoczesne wzornictwo pozwala na dopasowanie do każdej aranżacji wnętrza.",
    images: [
      {
        src: "/images/pcv1.png",
        description:
          "Stolarka PCV - energooszczędność i trwałość. Doskonała opcja dla nowoczesnych domów, gdzie liczy się komfort i redukcja kosztów ogrzewania. Solidne wykonanie gwarantuje wieloletnią niezawodność.",
      },
      {
        src: "/images/pcv2.png",
        description:
          "Nowoczesne profile PCV do każdego wnętrza. Elegancki design i najwyższa jakość wykonania sprawiają, że nasze okna są idealnym wyborem do każdego stylu architektonicznego.",
      },
    ],
  },
  {
    title: "Ślusarka aluminiowa",
    description:
      "Wytrzymałość i nowoczesny design w systemach aluminiowych. Aluminiowe konstrukcje wyróżniają się wysoką odpornością na korozję i warunki atmosferyczne. Ich nowoczesny wygląd nadaje prestiż każdej nieruchomości. Idealne do biurowców i nowoczesnych domów.",
    images: [
      {
        src: "/images/aluminium1.png",
        description:
          "Ślusarka aluminiowa - wytrzymałość i elegancja. Systemy aluminiowe charakteryzują się dużą trwałością i stabilnością konstrukcji, co sprawia, że są idealne do dużych przeszkleń.",
      },
      {
        src: "/images/aluminium2.png",
        description:
          "Systemy aluminiowe do nowoczesnych budynków. Minimalistyczny design i wyjątkowa odporność na czynniki zewnętrzne sprawiają, że są chętnie wybierane w budownictwie komercyjnym i mieszkaniowym.",
      },
    ],
  },
  {
    title: "Osłony przeciwsłoneczne",
    description:
      "Nowoczesne rolety i żaluzje dla Twojego domu. Skuteczna ochrona przed nadmiernym nasłonecznieniem, zapewniająca komfort termiczny i wizualny. Oferujemy szeroką gamę modeli dopasowanych do różnych potrzeb użytkowników. Idealne rozwiązanie dla domów i biur.",
    images: [
      {
        src: "/images/shade1.png",
        description:
          "Rolety zewnętrzne - ochrona i komfort. Pomagają regulować temperaturę wewnątrz pomieszczenia, zapewniając większą prywatność oraz zabezpieczenie przed niepożądanym światłem.",
      },
      {
        src: "/images/shade2.png",
        description:
          "Żaluzje fasadowe - styl i funkcjonalność. Nowoczesne rozwiązanie dla osób ceniących elegancki wygląd oraz możliwość regulacji ilości światła wpadającego do wnętrza.",
      },
    ],
  },
];

const Offer: React.FC = () => {
  const [currentIndexes, setCurrentIndexes] = useState(sections.map(() => 0));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((val, i) => (val + 1) % sections[i].images.length)
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (sectionIndex: number, slideIndex: number) => {
    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[sectionIndex] = slideIndex;
      return newIndexes;
    });
  };

  return (
    <section className="page-container">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`offer-section ${index % 2 === 0 ? "reverse" : ""}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="carousel-container">
            <button
              className={`carousel-btn left ${
                hoveredIndex === index ? "visible" : "hidden"
              }`}
              onClick={() =>
                goToSlide(
                  index,
                  (currentIndexes[index] - 1 + section.images.length) %
                    section.images.length
                )
              }
            >
              &#10094;
            </button>
            <div className="carousel-image-wrapper">
              <img
                src={section.images[currentIndexes[index]].src}
                alt={section.title}
                className="carousel-image small"
              />
              <div
                className={`carousel-overlay ${
                  hoveredIndex === index ? "visible" : "hidden"
                }`}
              >
                {section.images[currentIndexes[index]].description}
              </div>
            </div>
            <div
              className={`carousel-dots ${
                hoveredIndex === index ? "visible" : "hidden"
              }`}
            >
              {section.images.map((_, slideIndex) => (
                <span
                  key={slideIndex}
                  className={`dot ${
                    slideIndex === currentIndexes[index] ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index, slideIndex)}
                ></span>
              ))}
            </div>
            <button
              className={`carousel-btn right ${
                hoveredIndex === index ? "visible" : "hidden"
              }`}
              onClick={() =>
                goToSlide(
                  index,
                  (currentIndexes[index] + 1) % section.images.length
                )
              }
            >
              &#10095;
            </button>
          </div>
          <div className="text-container">
            <h2 className="section-title">{section.title}</h2>
            <p className="section-description">{section.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Offer;
