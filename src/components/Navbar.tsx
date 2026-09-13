import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { assetUrl } from "../utils/assets";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // zamknij menu po zmianie strony
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const changeLanguage = () => {
    const newLang = i18n.language.startsWith('pl') ? 'de' : 'pl';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="header">
        <div className="flex items-center">
          <Link to="/">
            <img src={assetUrl("/images/logo_barczak.jpg")} alt="Barczak Okna" className="logo" />
          </Link>
        </div>

        <div className={`list ${menuOpen ? "open" : ""}`}>
          <ul className="menu">
            <li>
              <Link
                to="/oferta"
                className={`menuItem ${location.pathname === "/oferta" ? "active" : ""}`}
              >
                {t('nav.offer')}
              </Link>
            </li>
            <li>
              <Link
                to="/kontakt"
                className={`menuItem ${location.pathname === "/kontakt" ? "active" : ""}`}
              >
                {t('nav.contact')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <img
            src={assetUrl(i18n.language.startsWith('pl') ? "/images/flag_de.png" : "/images/flag_pl.png")}
            alt={i18n.language.startsWith('pl') ? "DE" : "PL"}
            className="icon"
            onClick={changeLanguage}
            style={{ cursor: 'pointer' }}
          />
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
