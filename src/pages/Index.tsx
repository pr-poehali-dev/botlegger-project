import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О проекте", href: "#about" },
  { label: "Модели", href: "#models" },
  { label: "Проекты", href: "#projects" },
  { label: "Конструктор решений", href: "#constructor" },
  { label: "Партнёрам", href: "#partners" },
  { label: "Контакты", href: "#contacts" },
];

const STATS = [
  { value: "6", unit: "осей", label: "коллаборативный робот" },
  { value: "4", unit: "модели", label: "в линейке продуктов" },
  { value: "~1", unit: "год", label: "средняя окупаемость" },
  { value: "2019", unit: "", label: "год основания, патент РФ" },
];

const MODULES = [
  { icon: "Snowflake", label: "Ледогенератор" },
  { icon: "Coffee", label: "Кофемашина" },
  { icon: "Droplets", label: "Гранитор" },
  { icon: "Container", label: "Диспенсеры" },
  { icon: "IceCream2", label: "Установка мороженого" },
  { icon: "Waves", label: "Система промывки" },
];

const VALUES = [
  { icon: "Zap", title: "Инновационность", desc: "6-осевой коллаборативный робот выполняет движения не хуже человеческой руки" },
  { icon: "Shield", title: "Надёжность", desc: "Патент РФ на изобретение. Точность и стабильность промышленного оборудования" },
  { icon: "Clock", title: "Экономия времени", desc: "Полный цикл производства напитка — без персонала, 24/7, без перерывов" },
  { icon: "Layers", title: "Модульность", desc: "Единый корпус Cubic — меняйте начинку под свои задачи без замены комплекса" },
  { icon: "TrendingUp", title: "Окупаемость", desc: "Средний срок окупаемости — 1 год. Между вендингом и обычным кафе по цене" },
  { icon: "Heart", title: "Забота о людях", desc: "Автоматизация рутины освобождает человека для творческого и полезного труда" },
];

const ROBOTS = [
  {
    id: "bartender",
    title: "Робот-Бартендер",
    tag: "FLAGSHIP",
    tagColor: "#00D4FF",
    img: "https://cdn.poehali.dev/projects/cf9a22d8-8feb-4d00-a130-01d1c0f965ec/files/a4730501-5241-4952-802b-3c80dace8ae1.jpg",
    desc: "Флагманская модель, с которой начинался Botlegger в 2019 году. Готовит коктейли, миксы и безалкогольные напитки. Патент РФ на изобретение.",
    specs: ["Коктейли и миксы", "Безалкогольные напитки", "Диспенсеры напитков", "Система промывки"],
  },
  {
    id: "icecream",
    title: "Робот-Мороженщик",
    tag: "NEW",
    tagColor: "#A78BFA",
    img: "https://cdn.poehali.dev/projects/cf9a22d8-8feb-4d00-a130-01d1c0f965ec/files/4e9319d5-c99b-46fb-bb2c-819d2d2339bb.jpg",
    desc: "Автоматическое приготовление мороженого. Модуль интегрируется в корпус Cubic с промышленными установками холодного хранения.",
    specs: ["Мягкое мороженое", "Топпинги и добавки", "Хранение продуктов", "Точный розлив"],
  },
  {
    id: "coffee",
    title: "Кофейно-Слэшовый",
    tag: "В ЭКСПЛУАТАЦИИ",
    tagColor: "#34D399",
    img: "https://cdn.poehali.dev/projects/cf9a22d8-8feb-4d00-a130-01d1c0f965ec/files/1d833dd4-b72f-4130-841c-f98bcb7dfa0d.jpg",
    desc: "Кофейно-слэшовый сетап. Сейчас проходит обкатку в Екатеринбурге. Кофемашина и гранитор в одном корпусе.",
    specs: ["Кофемашина", "Гранитор (слэш)", "Автоочистка", "Горячие и холодные напитки"],
  },
  {
    id: "server",
    title: "Робот-Сервировщик",
    tag: "ВЕЛКОМ-ЗОНА",
    tagColor: "#FB923C",
    img: "https://cdn.poehali.dev/projects/cf9a22d8-8feb-4d00-a130-01d1c0f965ec/files/a4730501-5241-4952-802b-3c80dace8ae1.jpg",
    desc: "Разливает напитки из бутылок на мероприятиях. Участвует в корпоративных ивентах и выставках по всей России.",
    specs: ["Разлив из бутылок", "Приветственная зона", "Мероприятия и выставки", "Сценарное программирование"],
  },
];

const PLACEMENTS = [
  { icon: "Building2", title: "Торговые центры", desc: "Высокая проходимость, увеличение среднего чека арендаторов" },
  { icon: "Utensils", title: "Рестораны и кафе", desc: "Дополнительная точка продаж без найма персонала" },
  { icon: "Hotel", title: "Отели и курорты", desc: "Круглосуточное обслуживание гостей в зонах ресепшн" },
  { icon: "Plane", title: "Аэропорты", desc: "Быстрое обслуживание в зонах ожидания и вылета" },
  { icon: "Gamepad2", title: "Развлекательные центры", desc: "Аттракцион и точка питания в одном флаконе" },
  { icon: "Users", title: "Корпоративные мероприятия", desc: "Запоминающийся элемент для конференций и ивентов" },
];

const CONTACTS = {
  email: "info@botlegger.ru",
  phone: "+7 (343) 000-00-00",
  telegram: "https://t.me/botlegger",
  youtube: "https://youtube.com/botlegger",
};

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark-bg)", color: "#E8EDF5" }}>

      {/* ── NAV ── */}
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
                onClick={() => scrollTo(l.href)}
                className="nav-link text-sm font-medium"
                style={{ color: "rgba(232,237,245,0.7)", fontFamily: "'IBM Plex Sans', sans-serif" }}
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("#contacts")}
            className="hidden lg:flex items-center gap-2 px-5 py-2 rounded text-sm font-semibold transition-all duration-200"
            style={{
              background: "var(--cyan)",
              color: "#070B12",
              fontFamily: "'Exo 2', sans-serif",
              letterSpacing: "0.05em",
            }}
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
                onClick={() => scrollTo(l.href)}
                className="text-left px-6 py-3 text-sm hover:text-[var(--cyan)] transition-colors"
                style={{ color: "rgba(232,237,245,0.8)" }}
              >
                {l.label}
              </button>
            ))}
            <div className="px-6 pt-2">
              <button
                onClick={() => scrollTo("#contacts")}
                className="w-full py-3 rounded font-semibold text-sm"
                style={{ background: "var(--cyan)", color: "#070B12" }}
              >
                Оставить заявку
              </button>
            </div>
          </div>
        )}
      </nav>

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
              onClick={() => scrollTo("#contacts")}
              className="group flex items-center gap-3 px-8 py-4 rounded font-bold text-base transition-all duration-300"
              style={{ background: "var(--cyan)", color: "#070B12", fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.05em", boxShadow: "0 0 30px rgba(0,212,255,0.3)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 50px rgba(0,212,255,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.3)")}
            >
              Связаться с нами
              <Icon name="ArrowRight" size={18} />
            </button>
            <button
              onClick={() => scrollTo("#models")}
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
                    onClick={() => scrollTo("#contacts")}
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

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-32 relative" style={{ background: "rgba(13,19,32,0.5)" }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-xs font-bold tracking-widest mb-3" style={{ color: "var(--cyan)", fontFamily: "'Exo 2', sans-serif" }}>СВЯЗАТЬСЯ С НАМИ</div>
              <h2 className="font-black mb-6" style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "#fff" }}>
                Обсудим ваш проект
              </h2>
              <p className="mb-10 leading-relaxed" style={{ color: "rgba(232,237,245,0.6)", fontSize: "1.05rem" }}>
                Оставьте контакты — мы свяжемся в течение одного рабочего дня, проконсультируем по моделям и рассчитаем стоимость под ваши задачи.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                {[
                  { icon: "Mail", label: "Email", value: CONTACTS.email, href: `mailto:${CONTACTS.email}` },
                  { icon: "Phone", label: "Телефон", value: CONTACTS.phone, href: `tel:${CONTACTS.phone}` },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded flex items-center justify-center" style={{ background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.2)" }}>
                      <Icon name={c.icon} size={18} style={{ color: "var(--cyan)" }} />
                    </div>
                    <div>
                      <div className="text-xs" style={{ color: "rgba(232,237,245,0.4)" }}>{c.label}</div>
                      <div className="font-medium group-hover:text-[var(--cyan)] transition-colors" style={{ color: "#fff" }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {[
                  { icon: "Send", href: CONTACTS.telegram, label: "Telegram" },
                  { icon: "Youtube", href: CONTACTS.youtube, label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded flex items-center justify-center transition-all duration-200"
                    style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)", color: "rgba(232,237,245,0.5)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)"; e.currentTarget.style.color = "var(--cyan)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)"; e.currentTarget.style.color = "rgba(232,237,245,0.5)"; }}
                  >
                    <Icon name={s.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-8" style={{ background: "var(--dark-card)", border: "1px solid rgba(0,212,255,0.15)" }}>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(0,212,255,0.1)", border: "2px solid var(--cyan)" }}>
                    <Icon name="Check" size={28} style={{ color: "var(--cyan)" }} />
                  </div>
                  <h3 className="font-bold text-xl mb-2" style={{ fontFamily: "'Exo 2', sans-serif", color: "#fff" }}>Заявка отправлена!</h3>
                  <p style={{ color: "rgba(232,237,245,0.55)" }}>Мы свяжемся с вами в течение одного рабочего дня</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "'Exo 2', sans-serif", color: "#fff" }}>Оставить заявку</h3>
                  {[
                    { name: "name", placeholder: "Ваше имя", type: "text", required: true },
                    { name: "email", placeholder: "Email", type: "email", required: true },
                    { name: "phone", placeholder: "Телефон", type: "tel", required: false },
                  ].map((f) => (
                    <input
                      key={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.required}
                      value={formData[f.name as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [f.name]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200"
                      style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.15)", color: "#fff", fontSize: "0.95rem" }}
                      onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)"; e.currentTarget.style.background = "rgba(0,212,255,0.07)"; }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)"; e.currentTarget.style.background = "rgba(0,212,255,0.04)"; }}
                    />
                  ))}
                  <textarea
                    placeholder="Расскажите о вашем проекте (необязательно)"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200 resize-none"
                    style={{ background: "rgba(0,212,255,0.04)", border: "1px solid rgba(0,212,255,0.15)", color: "#fff", fontSize: "0.95rem" }}
                    onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.5)"; e.currentTarget.style.background = "rgba(0,212,255,0.07)"; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(0,212,255,0.15)"; e.currentTarget.style.background = "rgba(0,212,255,0.04)"; }}
                  />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg font-bold text-base transition-all duration-300 flex items-center justify-center gap-3"
                    style={{ background: "var(--cyan)", color: "#070B12", fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.05em", boxShadow: "0 0 20px rgba(0,212,255,0.2)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(0,212,255,0.4)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.2)")}
                  >
                    Отправить заявку
                    <Icon name="Send" size={16} />
                  </button>
                  <p className="text-center text-xs" style={{ color: "rgba(232,237,245,0.3)" }}>
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#privacy" style={{ color: "rgba(0,212,255,0.6)", textDecoration: "underline" }}>политикой конфиденциальности</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050810", borderTop: "1px solid rgba(0,212,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded flex items-center justify-center" style={{ background: "var(--cyan)" }}>
                  <div className="w-3 h-3 border-2 border-[#070B12] rounded-sm" />
                </div>
                <span className="font-bold text-lg tracking-widest" style={{ fontFamily: "'Exo 2', sans-serif", color: "#fff" }}>BOTLEGGER</span>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(232,237,245,0.4)" }}>Robotic Vending для HORECA. Патент РФ. С 2019 года.</p>
              <div className="flex items-center gap-2">
                {[{ icon: "Send", href: CONTACTS.telegram }, { icon: "Youtube", href: CONTACTS.youtube }].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 rounded flex items-center justify-center transition-all"
                    style={{ background: "rgba(0,212,255,0.08)", color: "rgba(232,237,245,0.4)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--cyan)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(232,237,245,0.4)"; }}
                  >
                    <Icon name={s.icon} size={16} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest mb-4" style={{ color: "rgba(232,237,245,0.3)", fontFamily: "'Exo 2', sans-serif" }}>НАВИГАЦИЯ</div>
              <div className="flex flex-col gap-2.5">
                {NAV_LINKS.map((l) => (
                  <button key={l.label} onClick={() => scrollTo(l.href)} className="text-left text-sm transition-colors hover:text-[var(--cyan)]" style={{ color: "rgba(232,237,245,0.5)" }}>
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest mb-4" style={{ color: "rgba(232,237,245,0.3)", fontFamily: "'Exo 2', sans-serif" }}>КОНТАКТЫ</div>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${CONTACTS.email}`} className="text-sm transition-colors hover:text-[var(--cyan)]" style={{ color: "rgba(232,237,245,0.5)" }}>{CONTACTS.email}</a>
                <a href={`tel:${CONTACTS.phone}`} className="text-sm transition-colors hover:text-[var(--cyan)]" style={{ color: "rgba(232,237,245,0.5)" }}>{CONTACTS.phone}</a>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold tracking-widest mb-4" style={{ color: "rgba(232,237,245,0.3)", fontFamily: "'Exo 2', sans-serif" }}>ДОКУМЕНТЫ</div>
              <div className="flex flex-col gap-2.5">
                <a href="#privacy" className="text-sm transition-colors hover:text-[var(--cyan)]" style={{ color: "rgba(232,237,245,0.5)" }}>Политика конфиденциальности</a>
                <a href="#terms" className="text-sm transition-colors hover:text-[var(--cyan)]" style={{ color: "rgba(232,237,245,0.5)" }}>Пользовательское соглашение</a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid rgba(0,212,255,0.06)" }}>
            <p className="text-xs" style={{ color: "rgba(232,237,245,0.25)" }}>© 2019–2026 Botlegger. Все права защищены. Патент РФ на изобретение.</p>
            <p className="text-xs italic" style={{ color: "rgba(0,212,255,0.3)", fontFamily: "'Exo 2', sans-serif", letterSpacing: "0.1em" }}>IN ROBOTS WE TRUST</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
