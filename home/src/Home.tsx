import React from "react";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        🎬 Bienvenido a <span>CineScope</span>
      </header>

      <section className="home-content">
        <h2>Descubre los últimos estrenos</h2>
        <p>Explora las películas más populares, próximos estrenos y horarios en tu cine favorito.</p>

        <button className="explore-btn">Explorar Cartelera</button>
      </section>
    </div>
  );
};

export default Home;
