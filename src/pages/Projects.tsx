import "../styles/Pages.css";
const Projects: React.FC = () => {
  return (
    <section className="page-container">
      <h1 className="page-title">Nasze realizacje</h1>
      <p className="page-text">Przykłady naszych zrealizowanych projektów.</p>
      <img src="/images/projects.jpg" alt="Realizacje" className="page-image" />
    </section>
  );
};
export default Projects;
