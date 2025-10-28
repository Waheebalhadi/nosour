import { useState } from "react";

const colors = [
  { name: "أزرق كلاسيكي", code: "#2C5F8D", category: "كلاسيكي" },
  { name: "أخضر نعناعي", code: "#48A9A6", category: "عصري" },
  { name: "رمادي أنيق", code: "#6B7280", category: "محايد" },
  { name: "بيج دافئ", code: "#D4A574", category: "دافئ" },
  { name: "أبيض ناصع", code: "#FFFFFF", category: "محايد" },
  { name: "فيروزي مشرق", code: "#40E0D0", category: "عصري" },
  { name: "بني داكن", code: "#6F4E37", category: "دافئ" },
  { name: "أزرق سماوي", code: "#87CEEB", category: "كلاسيكي" },
];

const ColorShowcase = () => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            معرض الألوان
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر من بين مجموعة واسعة من الألوان الأنيقة والعصرية
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Color Preview */}
          <div className="order-2 md:order-1">
            <div 
              className="w-full h-96 rounded-3xl shadow-2xl transition-all duration-500 card-3d border-8 border-white"
              style={{ backgroundColor: selectedColor.code }}
            >
              <div className="h-full flex flex-col justify-end p-8 bg-gradient-to-t from-black/50 to-transparent">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedColor.name}
                </h3>
                <p className="text-white/90 text-lg">
                  {selectedColor.code}
                </p>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    selectedColor.code === color.code 
                      ? 'ring-4 ring-primary shadow-glow scale-105' 
                      : 'hover:scale-105 shadow-soft hover:shadow-medium'
                  }`}
                >
                  <div 
                    className="h-32 w-full"
                    style={{ backgroundColor: color.code }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-bold">{color.name}</p>
                      <p className="text-sm opacity-90">{color.category}</p>
                    </div>
                  </div>
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
