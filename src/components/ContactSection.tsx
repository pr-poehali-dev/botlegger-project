import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS, CONTACTS } from "@/components/data";

interface ContactSectionProps {
  onScrollTo: (href: string) => void;
}

export default function ContactSection({ onScrollTo }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
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
                  <button key={l.label} onClick={() => onScrollTo(l.href)} className="text-left text-sm transition-colors hover:text-[var(--cyan)]" style={{ color: "rgba(232,237,245,0.5)" }}>
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
    </>
  );
}
