import { useEffect, useState } from "react";
import "../styles/Pages.css";
import { brands } from "../data/brand";

const Offer: React.FC = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    brands.map((brand) => brand.sections.map(() => 0))
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalId, setActiveModalId] = useState<number | null>(null);

  const generateHoverIndex = (brandIndex: number, sectionIndex: number) => {
    return brandIndex * 1000 + sectionIndex;
  };

  const toggleModal = (id: number) => {
    if (activeModalId === id) {
      setModalVisible(false);
      setIsPaused(false);
      setActiveModalId(null);
    } else {
      setModalVisible(true);
      setIsPaused(true);
      setActiveModalId(id);
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((brandIndexes, brandIndex) =>
          brandIndexes.map(
            (val, sectionIndex) =>
              (val + 1) %
              brands[brandIndex].sections[sectionIndex].images.length
          )
        )
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (
    brandIndex: number,
    sectionIndex: number,
    slideIndex: number
  ) => {
    setCurrentIndexes((prev) => {
      const newIndexes = [...prev];
      newIndexes[brandIndex][sectionIndex] = slideIndex;
      return newIndexes;
    });
  };

  return (
    <section className="page-container">
      {brands.map((brand, brandIndex) => (
        <div key={brand.id} className="brand-container">
          <div className="brand-div">
            <a href={brand.link} target="_blank" rel="noopener noreferrer">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </a>

            <h1 className="brand-title">{brand.name}</h1>
          </div>
          <p className="brand-text">{brand.description}</p>
          {brand.sections.map((section, sectionIndex) => (
            <div
              key={section.id}
              className={`offer-section ${
                sectionIndex % 2 === 0 ? "reverse" : ""
              }`}
              onMouseEnter={() =>
                setHoveredIndex(generateHoverIndex(brandIndex, sectionIndex))
              }
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="carousel-container">
                <button
                  className={`carousel-btn left ${
                    hoveredIndex ===
                    generateHoverIndex(brandIndex, sectionIndex)
                      ? "visible"
                      : "hidden"
                  }`}
                  onClick={() =>
                    goToSlide(
                      brandIndex,
                      sectionIndex,
                      (currentIndexes[brandIndex][sectionIndex] -
                        1 +
                        section.images.length) %
                        section.images.length
                    )
                  }
                >
                  &#10094;
                </button>
                <div className="carousel-image-wrapper">
                  <img
                    src={
                      section.images[currentIndexes[brandIndex][sectionIndex]]
                        .src
                    }
                    alt={section.title}
                    className="carousel-image small"
                  />
                  <div
                    className={`carousel-overlay ${
                      hoveredIndex ===
                      generateHoverIndex(brandIndex, sectionIndex)
                        ? "visible"
                        : "hidden"
                    }`}
                  >
                    {
                      section.images[currentIndexes[brandIndex][sectionIndex]]
                        .description
                    }
                  </div>
                </div>

                <button
                  className={`carousel-btn right ${
                    hoveredIndex ===
                    generateHoverIndex(brandIndex, sectionIndex)
                      ? "visible"
                      : "hidden"
                  }`}
                  onClick={() =>
                    goToSlide(
                      brandIndex,
                      sectionIndex,
                      (currentIndexes[brandIndex][sectionIndex] + 1) %
                        section.images.length
                    )
                  }
                >
                  &#10095;
                </button>
                <div
                  className={`carousel-dots ${
                    hoveredIndex ===
                    generateHoverIndex(brandIndex, sectionIndex)
                      ? "visible"
                      : "hidden"
                  }`}
                >
                  {section.images.map((_, slideIndex) => (
                    <span
                      key={slideIndex}
                      className={`dot ${
                        slideIndex === currentIndexes[brandIndex][sectionIndex]
                          ? "active"
                          : ""
                      }`}
                      onClick={() =>
                        goToSlide(brandIndex, sectionIndex, slideIndex)
                      }
                    ></span>
                  ))}
                </div>
                <button
                  className="name-button"
                  onClick={() =>
                    toggleModal(
                      section.images[currentIndexes[brandIndex][sectionIndex]]
                        .id
                    )
                  }
                >
                  {
                    section.images[currentIndexes[brandIndex][sectionIndex]]
                      .name
                  }
                </button>
                {activeModalId ===
                  section.images[currentIndexes[brandIndex][sectionIndex]].id &&
                  modalVisible && (
                    <div className="modal">
                      <div className="modal-content">
                        <span
                          className="close"
                          onClick={() =>
                            toggleModal(
                              section.images[
                                currentIndexes[brandIndex][sectionIndex]
                              ].id
                            )
                          }
                        >
                          &times;
                        </span>
                        <img
                          src={
                            section.images[
                              currentIndexes[brandIndex][sectionIndex]
                            ].srcModal ||
                            section.images[
                              currentIndexes[brandIndex][sectionIndex]
                            ].src
                          }
                          alt={section.title}
                          className="modal-image"
                        />
                        <h2>
                          {
                            section.images[
                              currentIndexes[brandIndex][sectionIndex]
                            ].name
                          }
                        </h2>
                        <p>
                          {
                            section.images[
                              currentIndexes[brandIndex][sectionIndex]
                            ].descriptionModal
                          }
                        </p>
                        <a
                          href={
                            section.images[
                              currentIndexes[brandIndex][sectionIndex]
                            ].link
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="orange-button"
                        >
                          Przejdź do strony {brand.name}
                        </a>
                      </div>
                    </div>
                  )}
              </div>
              <div className="text-container">
                <h2 className="section-title">{section.title}</h2>
                <p className="section-description">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Offer;
