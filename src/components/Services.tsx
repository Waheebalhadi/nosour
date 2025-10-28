import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Home, Building2, Sparkles, Shield, Users } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "دهانات داخلية وخارجية",
    description: "مجموعة واسعة من الدهانات عالية الجودة للاستخدام الداخلي والخارجي بألوان متنوعة",
    color: "from-primary to-primary-glow"
  },
  {
    icon: Home,
    title: "حلول للمنازل",
    description: "دهانات مخصصة للمنازل السكنية بجودة عالية وأسعار منافسة",
    color: "from-secondary to-accent"
  },
  {
    icon: Building2,
    title: "المشاريع التجارية",
    description: "حلول متكاملة للمباني التجارية والمشاريع الكبرى بكفاءة عالية",
    color: "from-accent to-primary"
  },
  {
    icon: Sparkles,
    title: "ديكورات حديثة",
    description: "تشطيبات ديكورية عصرية وأنيقة تضيف لمسة جمالية مميزة",
    color: "from-primary-glow to-secondary"
  },
  {
    icon: Shield,
    title: "ضمان الجودة",
    description: "منتجات أصلية 100% مع ضمان الجودة من جوتن العالمية",
    color: "from-secondary to-primary"
  },
  {
    icon: Users,
    title: "استشارات مجانية",
    description: "فريق خبراء متخصص لتقديم الاستشارات والنصائح المجانية",
    color: "from-accent to-primary-glow"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            خدماتنا المتميزة
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات والحلول لتلبية جميع احتياجاتكم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group card-3d border-0 shadow-soft hover:shadow-medium transition-all duration-500 bg-card overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <CardHeader>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
