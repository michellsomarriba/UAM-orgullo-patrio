import { Link } from "react-router";

export default function Specialties() {
  return (
    <section className="options-section responsive-options-section">
      <h2>Our Specialties</h2>
      <div className="options-flex">
        <Link to="/mariscos" className="option-card">
          <img src="images/mariscos.webp" alt="Mariscos" />
          <p>Mariscos</p>
        </Link>
        <Link to="/caracoles" className="option-card">
          <img src="images/caracoles.webp" alt="Caracoles" />
          <p>Caracoles</p>
        </Link>
        <Link to="/cangrejos" className="option-card">
          <img src="images/cangrejos.jpg" alt="Cangrejos" />
          <p>Cangrejos</p>
        </Link>
        <Link to="/rondon" className="option-card">
          <img src="images/rondon.jpg" alt="Rondón" />
          <p>Rondón</p>
        </Link>
        <Link to="/pan-de-coco" className="option-card">
          <img src="images/pan-de-coco.webp" alt="Pan de Coco" />
          <p>Pan de Coco</p>
        </Link>
        <Link to="/pati" className="option-card">
          <img src="images/pati.jpg" alt="Patí" />
          <p>Patí</p>
        </Link>
      </div>
    </section>
  );
}
