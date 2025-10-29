import { Button } from "@/components/ui/button";
import { ArrowLeft, Paintbrush, Sparkles, Award } from "lucide-react";
import heroPaint from "@/assets/hero-paint.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroPaint} 
          alt="دهانات جوتن الاحترافية" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-accent/90 to-secondary/95"></div>
      </div>
      
      {/* Animated 3D floating elements */}
      <div className="absolute inset-0 overflow-hidden perspective-container">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary-glow/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* 3D Paint drops decoration */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-white/40 rounded-full shadow-3d animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-white/30 rounded-full shadow-3d animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-white/50 rounded-full shadow-3d animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
     
          {/* Main Title with 3D effect */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            نسور المستقبل
            <br />
            <span className="inline-block perspective-container">
              <span className="inline-block hover:rotate-y-hover transition-transform duration-500" style={{ transformStyle: 'preserve-3d' }}>
                للتجارة والدهانات
              </span>
            </span>
          </h1>
          
          {/* Subtitle with gradient */}
          <div className="relative inline-block mb-4">
            <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-yellow-300 animate-pulse" />
            <p className="text-2xl md:text-3xl text-white/95 mb-8 max-w-3xl mx-auto font-bold leading-relaxed shadow-2xl">
              نقدم أفضل حلول الدهانات والديكورات للمنازل والمشاريع التجارية
              <br />
              <span className="text-white/80 text-xl">بجودة عالمية وخبرة محلية متميزة</span>
            </p>
          </div>
          
          {/* CTA Buttons with 3D effect */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="group bg-white text-primary hover:bg-white/90 font-bold text-xl px-10 py-7 rounded-2xl shadow-3d hover:shadow-glow transition-all duration-300 hover:scale-110 hover:-translate-y-2"
            >
              <span className="flex items-center gap-3">
                استكشف خدماتنا
                <ArrowLeft className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="glass-effect text-white border-2 border-white/40 hover:bg-white/20 font-bold text-xl px-10 py-7 rounded-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-3d"
            >
              تواصل معنا
            </Button>
          </div>

          {/* Stats - 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { number: "10+", label: "سنوات خبرة" },
              { number: "1000+", label: "مشروع ناجح" },
              { number: "100%", label: "رضا العملاء" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-6 shadow-3d card-3d animate-scale-in backdrop-blur-xl"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/90 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator with animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center shadow-3d">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
