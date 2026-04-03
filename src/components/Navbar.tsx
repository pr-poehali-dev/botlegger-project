import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "@/components/data";

interface NavbarProps {
  onScrollTo: (href: string) => void;
}

export default function Navbar({ onScrollTo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    onScrollTo(href);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,11,18,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: "var(--cyan)", boxShadow: "0 0 12px var(--cyan-glow)" }}>
            <div className="w-3 h-3 border-2 border-[#070B12] rounded-sm" />
          </div>
          <span className="font-bold text-lg tracking-widest" style={{ fontFamily: "'Exo 2', sans-serif", color: "#fff" }}>
            BOTLEGGER
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="nav-link text-sm font-medium"
              style={{ color: "rgba(232,237,245,0.7)", fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleNav("#contacts")}
          className="hidden lg:flex items-center gap-2 px-5 py-2 rounded text-sm font-semibold transition-all duration-200"
          style={{ background: "var(--cyan)", color: "#070B12", fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.05em" }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px var(--cyan-glow)")}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
        >
          Оставить заявку
        </button>

        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--cyan)" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden absolute top-16 left-0 right-0 py-4 flex flex-col gap-1"
          style={{ background: "rgba(7,11,18,0.98)", borderBottom: "1px solid rgba(0,212,255,0.15)" }}
        >
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNav(l.href)}
              className="text-left px-6 py-3 text-sm hover:text-[var(--cyan)] transition-colors"
              style={{ color: "rgba(232,237,245,0.8)" }}
            >
              {l.label}
            </button>
          ))}
          <div className="px-6 pt-2">
            <button
              onClick={() => handleNav("#contacts")}
              className="w-full py-3 rounded font-semibold text-sm"
              style={{ background: "var(--cyan)", color: "#070B12" }}
            >
              Оставить заявку
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
