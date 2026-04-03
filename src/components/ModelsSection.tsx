import Icon from "@/components/ui/icon";
import { ROBOTS, PLACEMENTS } from "@/components/data";

interface ModelsSectionProps {
  onScrollTo: (href: string) => void;
}

export default function ModelsSection({ onScrollTo }: ModelsSectionProps) {
  return (
    <>
      {/* ── MODELS ── */}
      <section id="models" className="py-32" style={{ background: "rgba(13,19,32,0.5)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "var(--cyan)", fontFamily: "'Exo 2', sans-serif" }}>ЛИНЕЙКА ПРОДУКТОВ</div>
            <h2 className="font-black" style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#fff" }}>
              4 модели для любых задач
            </h2>
            <p className="mt-3 mx-auto" style={{ maxWidth: "500px", color: "rgba(232,237,245,0.5)", fontSize: "1rem" }}>
              Единый корпус Cubic — разная начинка. Выберите модификацию или соберите своё решение.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {ROBOTS.map((r) => (
              <div key={r.id} className="robot-card rounded-xl overflow-hidden flex flex-col" style={{ background: "var(--dark-card)", border: "1px solid rgba(0,212,255,0.1)" }}>
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img src={r.img} alt={r.title} className="robot-img w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--dark-card) 0%, transparent 60%)" }} />
                  <div
                    className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold tracking-widest"
                    style={{ background: `${r.tagColor}20`, border: `1px solid ${r.tagColor}50`, color: r.tagColor, fontFamily: "'Exo 2', sans-serif" }}
                  >
                    {r.tag}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Exo 2', sans-serif", color: "#fff" }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(232,237,245,0.55)" }}>{r.desc}</p>
                  <div className="flex flex-col gap-1.5 mb-5">
                    {r.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs" style={{ color: "rgba(232,237,245,0.5)" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--cyan)" }} />
                        {spec}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => onScrollTo("#contacts")}
                    className="w-full py-2.5 rounded text-sm font-semibold transition-all duration-200"
                    style={{ background: "rgba(0,212,255,0.1)", color: "var(--cyan)", border: "1px solid rgba(0,212,255,0.2)", fontFamily: "'Exo 2', sans-serif" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--cyan)"; e.currentTarget.style.color = "#070B12"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(0,212,255,0.1)"; e.currentTarget.style.color = "var(--cyan)"; }}
                  >
                    Узнать подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "var(--cyan)", fontFamily: "'Exo 2', sans-serif" }}>ГДЕ РАЗМЕСТИТЬ CUBIC</div>
            <h2 className="font-black" style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#fff" }}>
              Реализованные проекты
            </h2>
            <p className="mt-3 mx-auto" style={{ maxWidth: "500px", color: "rgba(232,237,245,0.5)" }}>
              Botlegger работает в торговых центрах, на мероприятиях, в ресторанах и отелях по всей России
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {PLACEMENTS.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-xl transition-all duration-300"
                style={{ background: "var(--dark-card)", border: "1px solid rgba(0,212,255,0.08)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.25)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.08)"; }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(0,212,255,0.1)" }}>
                  <Icon name={p.icon} size={22} style={{ color: "var(--cyan)" }} />
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ fontFamily: "'Exo 2', sans-serif", color: "#fff" }}>{p.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(232,237,245,0.5)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-xl p-10 text-center" style={{ background: "var(--dark-card)", border: "1px dashed rgba(0,212,255,0.2)" }}>
            <Icon name="Images" size={40} style={{ color: "rgba(0,212,255,0.3)", margin: "0 auto 12px" }} />
            <p className="font-semibold mb-1" style={{ color: "rgba(232,237,245,0.4)", fontFamily: "'Exo 2', sans-serif" }}>ФОТОГАЛЕРЕЯ С МЕРОПРИЯТИЙ</p>
            <p className="text-sm" style={{ color: "rgba(232,237,245,0.25)" }}>Добавьте фотографии из папки — галерея будет здесь</p>
          </div>
        </div>
      </section>
    </>
  );
}
