import "../styles/Pages.css";
import "../styles/Contact.css";
import React from "react";
import { useTranslation } from "react-i18next";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// fix domyślnych ikon Leaflet w webpack/CRA
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const PHONE = "+48 502 657 578";
const EMAIL = "oknabarczak@wp.pl";
const ADDRESS = "ul. Rzemieślnicza 48, 56-500 Syców";
const LAT = 51.3091;
const LNG = 17.7076;

// wymusza przeliczenie rozmiaru mapy po zamontowaniu (fix dla CRA/flex layout)
const InvalidateSize: React.FC = () => {
  const map = useMap();
  React.useEffect(() => {
    setTimeout(() => map.invalidateSize(), 100);
  }, [map]);
  return null;
};

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="page-container">
      <h1 className="page-title">{t('contact.title')}</h1>
      <p className="page-text">{t('contact.subtitle')}</p>

      <div className="contact-layout">
        <div className="contact-map">
          <MapContainer
            center={[LAT, LNG]}
            zoom={16}
            style={{ width: "100%", height: "600px" }}
            scrollWheelZoom={false}
          >
            <InvalidateSize />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[LAT, LNG]}>
              <Popup>
                <strong>Barczak Okna</strong><br />
                {ADDRESS}
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="contact-info">
          <div className="contact-card">
            <span className="contact-icon">📍</span>
            <div>
              <p className="contact-label">{t('contact.address')}</p>
              <p className="contact-value">{ADDRESS}</p>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📞</span>
            <div>
              <p className="contact-label">{t('contact.phone')}</p>
              <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="contact-value contact-link">
                {PHONE}
              </a>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon">✉️</span>
            <div>
              <p className="contact-label">{t('contact.email')}</p>
              <a href={`mailto:${EMAIL}`} className="contact-value contact-link">
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="contact-card">
            <span className="contact-icon">🕐</span>
            <div>
              <p className="contact-label">{t('contact.hours')}</p>
              <p className="contact-value">{t('contact.hoursValue')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;


