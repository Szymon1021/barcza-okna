import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="footer">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          {t('footer.rights', { year: new Date().getFullYear() })}
        </p>
        <div className="footer-links">
          <Link to="/polityka-prywatnosci" className="footer-item">
            {t('footer.privacy')}
          </Link>
          <Link to="/kontakt" className="footer-item">
            {t('footer.contact')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
