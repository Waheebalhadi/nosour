import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Home, Building2, Sparkles, Shield, Users, Brush, Star } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "دهانات داخلية وخارجية",
    description: "مجموعة واسعة من الدهانات عالية الجودة للاستخدام الداخلي والخارجي بألوان متنوعة ومتميزة",
    color: "from-primary to-primary-glow",
    features: ["مقاومة للرطوبة", "ألوان ثابتة", "سهلة التطبيق"]
  },
  {
    icon: Home,
    title: "حلول للمنازل",
    description: "دهانات مخصصة للمنازل السكنية بجودة عالية وأسعار منافسة تناسب جميع الميزانيات",
    color: "from-secondary to-accent",
    features: ["آمنة صحياً", "روائح خفيفة", "تجف بسرعة"]
  },
  {
    icon: Building2,
    title: "المشاريع التجارية",
    description: "حلول متكاملة للمباني التجارية والمشاريع الكبرى بكفاءة عالية واحترافية مميزة",
    color: "from-accent to-primary",
    features: ["متانة عالية", "ضمان ممتد", "فريق محترف"]
  },
  {
    icon: Sparkles,
    title: "ديكورات حديثة",
    description: "تشطيبات ديكورية عصرية وأنيقة تضيف لمسة جمالية مميزة لمساحتك الخاصة",
    color: "from-primary-glow to-secondary",
    features: ["تصاميم عصرية", "تنفيذ دقيق", "استشارات مجانية"]
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "منتجات أصلية 100% مع ضمان الجودة من جوتن العالمية والتزام كامل بالمعايير",
    color: "from-secondary to-primary",
    features: ["معتمدة دولياً", "فحص جودة", "ضمان شامل"]
  },
  {
    icon: Users,
    title: "استشارات مجانية",
    description: "فريق خبراء متخصص لتقديم الاستشارات والنصائح المجانية لاختيار الأنسب لك",
    color: "from-accent to-primary-glow",
    features: ["خبراء معتمدون", "توصيات شخصية", "متابعة مستمرة"]
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-4 bg-gradient-to-b from-background to-muted overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-primary/10 rounded-full">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold">خدماتنا</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            خدماتنا <span className="text-gradient">المتميزة</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من الخدمات والحلول الاحترافية لتلبية جميع احتياجاتكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative border-0 shadow-soft hover:shadow-3d transition-all duration-500 bg-card overflow-hidden animate-scale-in transform-gpu hover:-translate-y-4 hover:rotate-y-hover"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Gradient top bar */}
              <div className={`h-2 bg-gradient-to-r ${service.color} animate-gradient`}></div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative">
                {/* Icon container with 3D effect */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-3d`}>
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  {/* Icon shadow */}
                  <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <CardDescription className="text-base text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </CardDescription>
                
                {/* Features list */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              {/* Hover decoration */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <Brush className="w-full h-full text-primary transform rotate-45" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
