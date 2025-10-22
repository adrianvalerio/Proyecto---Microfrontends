import React, { useState } from "react";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: open ? "200px" : "60px",
          background: "#1f2937",
          color: "white",
          transition: "width 0.3s ease",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: open ? "flex-start" : "center",
          padding: "1rem",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            marginBottom: "2rem",
            fontSize: "1.2rem",
          }}
        >
          {open ? "⏴" : "⏵"}
        </button>

        <button
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          🏠 {open && "Home"}
        </button>
      </div>

      {/* Área de contenido */}
      <main
        style={{
          flex: 1,
          background: "#f9fafb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children ? children : <h2>Bienvenido al layout remoto</h2>}
      </main>
    </div>
  );
};

export default Layout;
