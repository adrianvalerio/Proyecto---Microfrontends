import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="home">
      {/* Hero principal */}
      <section className="hero">
        <div className="hero-content">
          <h1>🎬 Bienvenido a <span>CineScope</span></h1>
          <p>
            Tu portal cinematográfico para descubrir los últimos estrenos, trailers y horarios de cine.
          </p>
          <button className="cta-btn">🍿 Explorar cartelera</button>
        </div>
      </section>

      {/* Sección de categorías */}
      <section className="categories">
        <h2>Explora por categoría</h2>
        <div className="category-grid">
          <div className="card">🎥 Estrenos</div>
          <div className="card">⭐ Más vistas</div>
          <div className="card">🎭 Clásicos</div>
          <div className="card">🕹️ Animación</div>
        </div>
      </section>

      {/* Sección destacada */}
      <section className="featured">
        <h2>Destacado de la semana</h2>
        <div className="featured-card">
          <img
            src="https://images.unsplash.com/photo-1505685296765-3a2736de412f"
            alt="película destacada"
          />
          <div className="featured-info">
            <h3>La Leyenda del Cine</h3>
            <p>
              Una historia épica sobre sueños, luces y el poder del séptimo arte.
            </p>
            <button className="watch-btn">Ver detalles</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 CineScope · Todos los derechos reservados
      </footer>
    </div>
  );
};

export default App;
