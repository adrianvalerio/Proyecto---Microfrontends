import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: "/home", icon: "🏠", label: "Home" },
    { path: "/movies", icon: "🎬", label: "Movies" },
  ];

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
            alignSelf: open ? "flex-end" : "center",
          }}
        >
          {open ? "⏴" : "⏵"}
        </button>

        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              style={{
                background: isActive ? "#374151" : "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                width: "100%",
                marginBottom: "0.5rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = "#374151";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = "transparent";
              }}
            >
              <span>{item.icon}</span>
              {open && <span>{item.label}</span>}
            </button>
          );
        })}
      </div>

      {/* Área de contenido */}
      <main
        style={{
          flex: 1,
          background: "#0f172a",
          color: "#facc15",
          overflowY: "auto",
          padding: "2rem",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;