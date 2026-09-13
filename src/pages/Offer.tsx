import { useState } from "react";
import "../styles/Offer.css";
import { brands } from "../data/brand";
import { useTranslation } from "react-i18next";
import { assetUrl } from "../utils/assets";
import type { Image } from "../types";

const Offer: React.FC = () => {
  const { t } = useTranslation();
  const [activeImg, setActiveImg] = useState<Image | null>(null);
  const [activeBrandName, setActiveBrandName] = useState<string>("");

  const openModal = (img: Image, brandName: string) => {
    setActiveImg(img);
    setActiveBrandName(brandName);
  };

  const closeModal = () => setActiveImg(null);

  return (
    <section className="page-container">
      {brands.map((brand) => (
        <div key={brand.id} className="brand-container">
          <div className="brand-div">
            <a href={brand.link} target="_blank" rel="noopener noreferrer">
              <img src={assetUrl(brand.logo)} alt={brand.name} className="brand-logo" />
            </a>
            <h2 className="brand-title">{brand.name}</h2>
          </div>
          <p className="brand-text">
            {brand.descriptionKey ? t(brand.descriptionKey) : brand.description}
          </p>

          {brand.sections.map((section) => (
            <div key={section.id} className="offer-section-block">
              <h3 className="offer-section-heading">
                {section.titleKey ? t(section.titleKey) : section.title}
              </h3>
              <p className="offer-section-desc">
                {section.descriptionKey ? t(section.descriptionKey) : section.description}
              </p>
              <div className="offer-grid">
                {section.images.map((img) => (
                  <div
                    key={img.id}
                    className="offer-tile"
                    onClick={() => openModal(img, brand.name)}
                  >
                    <img src={assetUrl(img.src)} alt={img.name} className="offer-tile-img" />
                    <div className="offer-tile-overlay">
                      <span>{img.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      {activeImg && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <img
              src={assetUrl(activeImg.srcModal || activeImg.src)}
              alt={activeImg.name}
              className="modal-image"
            />
            <h2>{activeImg.name}</h2>
            <p>
              {activeImg.descriptionModalKey
                ? t(activeImg.descriptionModalKey)
                : activeImg.descriptionModal}
            </p>
            <a
              href={activeImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="orange-button"
            >
              {t("offer.goToWebsite")} {activeBrandName}
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Offer;
