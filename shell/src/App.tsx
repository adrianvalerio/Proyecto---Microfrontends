import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Layout = React.lazy(() =>
  import("layout/Layout").then((m) => ({ default: m.default }))
);

const Home = React.lazy(() =>
  import("home/HomeApp").then((m) => ({ default: m.default }))
);

const Movies = React.lazy(() =>
  import("movies/Movies").then((m) => ({ default: m.default }))
);

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Cargando layout...</div>}>
        <Layout>
          <Suspense fallback={<div>Cargando contenido...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="*" element={<div>Página no encontrada</div>} />
            </Routes>
          </Suspense>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;