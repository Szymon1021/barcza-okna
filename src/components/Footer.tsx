import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          © 2024 Barczak Okna. Wszelkie prawa zastrzeżone.
        </p>
        <div className="footer-links">
          <Link to="/polityka-prywatnosci" className="footer-item">
            Polityka Prywatności
          </Link>
          <Link to="/kontakt" className="footer-item">
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
