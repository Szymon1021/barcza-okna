import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="header">
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="Barczak Okna" className="logo" />
          </Link>
        </div>
        <div className="list">
          <ul className="menu">
            <li>
              <Link to="/oferta" className="menuItem">
                Oferta
              </Link>
            </li>
            <li>
              <Link to="/project" className="menuItem">
                Galeria realizacji
              </Link>
            </li>

            <li>
              <Link to="/o-nas" className="menuItem">
                Dlaczego Barczak
              </Link>
            </li>

            <li>
              <Link to="/kontakt" className="menuItem">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <img
            src="https://www.teamplast.pl/images/de.png"
            alt="DE"
            className="icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
