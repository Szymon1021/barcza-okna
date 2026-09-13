import "../styles/Pages.css";
import { useTranslation } from "react-i18next";
import { assetUrl } from "../utils/assets";

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="page-container">
      <h1 className="page-title">{t('about.title')}</h1>
      <p className="page-text">
        {t('about.subtitle')}
      </p>
      <img src={assetUrl("/images/about.jpg")} alt={t('about.imageAlt')} className="page-image" />
    </section>
  );
};
export default About;
