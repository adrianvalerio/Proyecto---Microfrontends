import React, { useState } from "react";

const Sidebar: React.FC = () => {
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

      {/* Content area (vacío por ahora) */}
      <div style={{ flex: 1, background: "#f9fafb" }}></div>
    </div>
  );
};

export default Sidebar;
