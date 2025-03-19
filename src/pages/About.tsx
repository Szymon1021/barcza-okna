import "../styles/Pages.css";
const About: React.FC = () => {
  return (
    <section className="page-container">
      <h1 className="page-title">O nas</h1>
      <p className="page-text">
        Jesteśmy firmą z wieloletnim doświadczeniem w branży stolarki okiennej.
      </p>
      <img src="/images/about.jpg" alt="O nas" className="page-image" />
    </section>
  );
};
export default About;
