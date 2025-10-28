import { useState } from "react";
import { Droplet, Check } from "lucide-react";
import colorsShowcase from "@/assets/colors-showcase.jpg";

const colors = [
  { name: "أزرق كلاسيكي", code: "#2C5F8D", category: "كلاسيكي", popular: true },
  { name: "فيروزي مشرق", code: "#40E0D0", category: "عصري", popular: true },
  { name: "أخضر نعناعي", code: "#48A9A6", category: "عصري", popular: false },
  { name: "رمادي أنيق", code: "#6B7280", category: "محايد", popular: true },
  { name: "بيج دافئ", code: "#D4A574", category: "دافئ", popular: false },
  { name: "أبيض ناصع", code: "#FFFFFF", category: "محايد", popular: true },
  { name: "بني داكن", code: "#6F4E37", category: "دافئ", popular: false },
  { name: "أزرق سماوي", code: "#87CEEB", category: "كلاسيكي", popular: false },
];

const ColorShowcase = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-muted to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <img src={colorsShowcase} alt="معرض الألوان" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-primary/10 rounded-full">
            <Droplet className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold">الألوان المتاحة</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            معرض <span className="text-gradient">الألوان</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            اختر من بين مجموعة واسعة من الألوان الأنيقة والعصرية لتحويل مساحتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center perspective-container">
          {/* Color Preview - Large 3D Card */}
          <div className="order-2 md:order-1 animate-scale-in">
            <div className="relative">
              {/* Main color display */}
              <div 
                className="relative w-full h-[500px] rounded-3xl shadow-3d transition-all duration-700 card-3d border-8 border-white overflow-hidden group"
                style={{ backgroundColor: selectedColor.code }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Paint drip effect */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-20 bg-white/30 rounded-b-full group-hover:h-32 transition-all duration-500"></div>
                
                {/* Color info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-4 py-2 glass-effect rounded-full text-white font-bold text-sm">
                      {selectedColor.category}
                    </div>
                    {selectedColor.popular && (
                      <div className="px-4 py-2 bg-yellow-400/90 rounded-full text-gray-900 font-bold text-sm flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        الأكثر طلباً
                      </div>
                    )}
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-2xl">
                    {selectedColor.name}
                  </h3>
                  <p className="text-white/90 text-xl font-semibold drop-shadow-lg">
                    {selectedColor.code}
                  </p>
                </div>
              </div>
              
              {/* 3D shadow effect */}
              <div 
                className="absolute inset-0 rounded-3xl blur-2xl opacity-40 -z-10 transform translate-y-8"
                style={{ backgroundColor: selectedColor.code }}
              ></div>
            </div>
          </div>

          {/* Color Palette - Interactive Grid */}
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-6">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform-gpu ${
                    selectedColor.code === color.code 
                      ? 'ring-4 ring-primary shadow-3d scale-110 z-10' 
                      : 'hover:scale-105 shadow-soft hover:shadow-medium'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Color block */}
                  <div 
                    className="h-40 w-full transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      backgroundColor: color.code,
                      border: color.code === "#FFFFFF" ? "2px solid #e5e7eb" : "none"
                    }}
                  ></div>
                  
                  {/* Overlay with info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start justify-end p-5">
                    <p className="font-bold text-white text-lg mb-1">{color.name}</p>
                    <p className="text-white/90 text-sm mb-2">{color.category}</p>
                    <p className="text-white/70 text-xs font-mono">{color.code}</p>
                  </div>
                  
                  {/* Selection indicator */}
                  {selectedColor.code === color.code && (
                    <div className="absolute top-3 right-3 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-3d animate-scale-in">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  {/* Popular badge */}
                  {color.popular && selectedColor.code !== color.code && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-yellow-400 rounded-full text-xs font-bold text-gray-900">
                      مميز
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorShowcase;
