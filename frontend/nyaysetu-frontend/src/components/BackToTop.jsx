import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 9999,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "var(--primary-blue, #2563EB)",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "1.2rem",
        boxShadow: "0 4px 12px rgba(37,99,235,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.3s, transform 0.2s",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}