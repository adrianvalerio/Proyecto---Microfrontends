import React, { Suspense, lazy } from "react";

    const Layout = lazy(() => import("layout/Layout"));

const App = () => {
  return (
    <Suspense fallback={<div>Cargando layout remoto...</div>}>
      <Layout />
    </Suspense>
  );
};

export default App;
