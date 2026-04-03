import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModelsSection from "@/components/ModelsSection";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark-bg)", color: "#E8EDF5" }}>
      <Navbar onScrollTo={scrollTo} />
      <HeroSection onScrollTo={scrollTo} />
      <ModelsSection onScrollTo={scrollTo} />
      <ContactSection onScrollTo={scrollTo} />
    </div>
  );
}
