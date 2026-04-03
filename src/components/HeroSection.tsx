import Icon from "@/components/ui/icon";
import { STATS, MODULES, VALUES } from "@/components/data";

interface HeroSectionProps {
  onScrollTo: (href: string) => void;
}

export default function HeroSection({ onScrollTo }: HeroSectionProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg" style={{ paddingTop: "80px" }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)" }} />
        <div className="absolute top-24 left-12 w-16 h-16 pointer-events-none" style={{ borderTop: "2px solid var(--cyan)", borderLeft: "2px solid var(--cyan)", opacity: 0.5 }} />
        <div className="absolute bottom-24 right-12 w-16 h-16 pointer-events-none" style={{ borderBottom: "2px solid var(--cyan)", borderRight: "2px solid var(--cyan)", opacity: 0.5 }} />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest mb-8 animate-fade-up"
            style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", color: "var(--cyan)", fontFamily: "'Exo 2', sans-serif" }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-cyan" style={{ background: "var(--cyan)" }} />
            ROBOTIC VENDING · HORECA AUTOMATION
          </div>

          <h1
            className="font-black leading-none tracking-tight mb-6 animate-fade-up delay-200"
            style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(3rem, 9vw, 8rem)", color: "#fff" }}
          >
            IN ROBOTS
            <br />
            <span className="text-glow" style={{ color: "var(--cyan)" }}>WE TRUST</span>
          </h1>

          <p
            className="mx-auto mb-10 leading-relaxed animate-fade-up delay-300"
            style={{ maxWidth: "620px", fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "rgba(232,237,245,0.65)", fontFamily: "'IBM Plex Sans', sans-serif" }}
          >
            Роботизированные комплексы для HORECA на базе 6-осевого коллаборативного робота.
            Единый корпус <strong style={{ color: "rgba(232,237,245,0.9)" }}>Cubic</strong> — бесконечные возможности начинки.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up delay-400">
            <button
              onClick={() => onScrollTo("#contacts")}
              className="group flex items-center gap-3 px-8 py-4 rounded font-bold text-base transition-all duration-300"
              style={{ background: "var(--cyan)", color: "#070B12", fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.05em", boxShadow: "0 0 30px rgba(0,212,255,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 50px rgba(0,212,255,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.3)")}
            >
              Связаться с нами
              <Icon name="ArrowRight" size={18} />
            </button>
            <button
              onClick={() => onScrollTo("#models")}
              className="flex items-center gap-3 px-8 py-4 rounded font-semibold text-base transition-all duration-300"
              style={{ background: "transparent", color: "rgba(232,237,245,0.85)", border: "1px solid rgba(0,212,255,0.3)", fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.05em" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.7)"; e.currentTarget.style.color = "var(--cyan)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"; e.currentTarget.style.color = "rgba(232,237,245,0.85)"; }}
            >
              <Icon name="ChevronDown" size={18} />
              Смотреть модели
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-up delay-600">
            {STATS.map((s, i) => (
              <div key={i} className="p-5 rounded-lg text-center" style={{ background: "rgba(13,19,32,0.8)", border: "1px solid rgba(0,212,255,0.12)" }}>
                <div className="font-black leading-none animate-counter-glow" style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "2.5rem", color: "var(--cyan)" }}>
                  {s.value}
                  <span className="text-lg ml-1" style={{ color: "rgba(0,212,255,0.7)" }}>{s.unit}</span>
                </div>
                <div className="text-xs mt-1" style={{ color: "rgba(232,237,245,0.45)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
          <span className="text-xs tracking-widest" style={{ color: "rgba(0,212,255,0.4)", fontFamily: "'Exo 2', sans-serif" }}>SCROLL</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(0,212,255,0.4), transparent)" }} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-bold tracking-widest mb-4" style={{ color: "var(--cyan)", fontFamily: "'Exo 2', sans-serif" }}>О ПРОЕКТЕ</div>
              <h2 className="font-black leading-tight mb-6" style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#fff" }}>
                Между вендингом<br />и <span style={{ color: "var(--cyan)" }}>настоящим кафе</span>
              </h2>
              <p className="mb-5 leading-relaxed" style={{ color: "rgba(232,237,245,0.65)", fontSize: "1.05rem" }}>
                Botlegger — проект роботизированных комплексов класса <strong style={{ color: "#fff" }}>Robotic Vending</strong>. Мы заняли золотую середину: наш комплекс готовит напитки с точностью и качеством человека, но без персонала, перерывов и ошибок.
              </p>
              <p className="mb-8 leading-relaxed" style={{ color: "rgba(232,237,245,0.65)", fontSize: "1.05rem" }}>
                В основе — коллаборативный 6-осевой робот, способный выполнять сложные движения не хуже человеческой руки. На корпусе Cubic получен <strong style={{ color: "#fff" }}>патент РФ на изобретение</strong>.
              </p>
              <div className="flex items-start gap-3 px-5 py-4 rounded-lg" style={{ background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.2)" }}>
                <Icon name="Quote" size={20} style={{ color: "var(--cyan)", flexShrink: 0, marginTop: "2px" }} />
                <p className="text-sm italic" style={{ color: "rgba(232,237,245,0.8)" }}>
                  Мы верим, что автоматизация рутинных процессов освободит время человека на более полезное и творческое проявление его сущности.
                </p>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest mb-5" style={{ color: "rgba(232,237,245,0.4)", fontFamily: "'Exo 2', sans-serif" }}>
                МОДУЛЬНАЯ АРХИТЕКТУРА · CUBIC
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {MODULES.map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 p-5 rounded-lg text-center transition-all duration-300 cursor-default"
                    style={{ background: "var(--dark-card)", border: "1px solid rgba(0,212,255,0.1)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)"; e.currentTarget.style.background = "rgba(0,212,255,0.05)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.1)"; e.currentTarget.style.background = "var(--dark-card)"; }}
                  >
                    <div className="w-10 h-10 rounded flex items-center justify-center" style={{ background: "rgba(0,212,255,0.12)" }}>
                      <Icon name={m.icon} size={20} style={{ color: "var(--cyan)" }} />
                    </div>
                    <span className="text-xs font-medium leading-tight" style={{ color: "rgba(232,237,245,0.75)" }}>{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-4 rounded-lg text-center text-xs" style={{ background: "rgba(0,212,255,0.04)", border: "1px dashed rgba(0,212,255,0.2)", color: "rgba(0,212,255,0.6)", fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.05em" }}>
                + ЛЮБОЙ МОДУЛЬ ПО ЗАПРОСУ
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "var(--cyan)", fontFamily: "'Exo 2', sans-serif" }}>ЦЕННОСТИ</div>
              <h2 className="font-black" style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#fff" }}>
                Почему выбирают Botlegger
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  className="p-6 rounded-lg transition-all duration-300"
                  style={{ background: "var(--dark-card)", border: "1px solid rgba(0,212,255,0.08)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.08)"; e.currentTarget.style.transform = "none"; }}
                >
                  <div className="w-10 h-10 rounded flex items-center justify-center mb-4" style={{ background: "rgba(0,212,255,0.1)" }}>
                    <Icon name={v.icon} size={20} style={{ color: "var(--cyan)" }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Exo 2', sans-serif", color: "#fff" }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(232,237,245,0.55)" }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
