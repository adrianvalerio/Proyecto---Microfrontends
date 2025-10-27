import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="home">
      {/* Hero principal */}
      <section className="hero">
        <div className="hero-content">
          <h1>CINEMAX</h1>
          <p className="description">
            Disfruta de los mejores estrenos con la mejor calidad de imagen y sonido
          </p>
          <button className="cta-btn">Ver Cartelera</button>
        </div>
      </section>

      {/* Servicios */}
      <section className="section services">
        <h2>✨ Nuestros Servicios</h2>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">🎥</span>
            <h3>Proyección HD</h3>
            <p>Imagen nítida en todas nuestras salas</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🔊</span>
            <h3>Sonido Premium</h3>
            <p>Sistema de audio envolvente</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🍿</span>
            <h3>Snack Bar</h3>
            <p>Variedad de alimentos y bebidas</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>CINEMAX</h3>
            <p>La mejor experiencia cinematográfica</p>
          </div>
          <div>
            <h4>Enlaces</h4>
            <ul>
              <li>Cartelera</li>
              <li>Próximos Estrenos</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 CINEMAX - Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default App;