import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "الرئيسية", id: "hero" },
    { label: "خدماتنا", id: "services" },
    { label: "الألوان", id: "colors" },
    { label: "من نحن", id: "about" },
    { label: "تواصل معنا", id: "contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'glass-effect shadow-3d border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl rotate-45 shadow-3d group-hover:rotate-[60deg] transition-transform duration-500"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white -rotate-45 group-hover:-rotate-[60deg] transition-transform duration-500">ن</span>
              </div>
            </div>
            <div className="text-right hidden md:block">
              <h2 className="text-xl font-bold text-white leading-tight">نسور المستقبل</h2>
              <p className="text-xs text-white/80">دهانات جوتن المعتمدة</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="relative px-5 py-2.5 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 rounded-xl blur-sm transition-opacity duration-300"></div>
              </button>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/90">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">0555-123-456</span>
            </div>
            <Button 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="bg-white text-primary hover:bg-white/90 font-bold shadow-3d hover:scale-105 transition-all duration-300"
            >
              احجز استشارة مجانية
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white glass-effect rounded-xl shadow-3d hover:scale-105 transition-transform"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-effect border-t border-white/10 shadow-3d">
          <div className="container mx-auto px-4 py-6 space-y-3">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="w-full text-right px-6 py-4 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 card-3d animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/20 space-y-3">
              <div className="flex items-center gap-3 text-white px-6">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">0555-123-456</span>
              </div>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-white text-primary hover:bg-white/90 font-bold shadow-3d"
              >
                احجز استشارة مجانية
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
