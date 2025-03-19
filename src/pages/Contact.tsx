import "../styles/Pages.css";
const Contact: React.FC = () => {
  return (
    <section className="page-container">
      <h1 className="page-title">Kontakt</h1>
      <p className="page-text">
        Skontaktuj się z nami, aby dowiedzieć się więcej.
      </p>
      <img src="/images/contact.jpg" alt="Kontakt" className="page-image" />
    </section>
  );
};
export default Contact;
