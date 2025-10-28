import { Award, Target, Heart, TrendingUp, Users2, CheckCircle } from "lucide-react";
import interiorWork from "@/assets/interior-work.jpg";

const features = [
  {
    icon: Award,
    title: "خبرة وجودة",
    description: "أكثر من 10 سنوات من الخبرة في مجال الدهانات مع التزام كامل بأعلى معايير الجودة العالمية"
  },
  {
    icon: Target,
    title: "دقة في التنفيذ",
    description: "نحرص على تقديم خدمة متقنة بدقة عالية واحترافية مميزة لضمان رضا عملائنا الكرام"
  },
  {
    icon: Heart,
    title: "رضا العملاء",
    description: "أولويتنا القصوى هي تحقيق رضا عملائنا من خلال خدمة مميزة ونتائج تفوق التوقعات"
  }
];

const stats = [
  { icon: TrendingUp, number: "10+", label: "سنوات من الخبرة", color: "from-primary to-accent" },
  { icon: CheckCircle, number: "1000+", label: "مشروع ناجح", color: "from-accent to-secondary" },
  { icon: Users2, number: "500+", label: "عميل راضٍ", color: "from-secondary to-primary" },
];

const About = () => {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Element - Left Side */}
          <div className="relative perspective-container order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-3d card-3d group">
              <img 
                src={interiorWork} 
                alt="أعمالنا الاحترافية" 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"></div>
              
              {/* Stats overlay on image */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div 
                      key={index}
                      className="glass-effect rounded-2xl p-4 text-center backdrop-blur-xl shadow-3d transform hover:scale-110 transition-all duration-300"
                    >
                      <div className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${stat.color} p-2`}>
                        <stat.icon className="w-full h-full text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-white/90 text-xs font-semibold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating decorations */}
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/30 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Text Content - Right Side */}
          <div className="animate-fade-in-up order-1 md:order-2">
            <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-primary/10 rounded-full">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold">من نحن</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              نسور المستقبل
              <br />
              <span className="text-gradient">للتجارة والدهانات</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              شركة نسور المستقبل للتجارة هي <span className="font-bold text-primary">وكيل معتمد لدهانات جوتن</span> في جدة، المملكة العربية السعودية. 
              نفخر بتقديم أفضل منتجات الدهانات العالمية بجودة استثنائية وأسعار تنافسية.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              نؤمن بأن كل مشروع يستحق الأفضل، لذلك نحرص على تقديم حلول متكاملة تناسب جميع الاحتياجات، 
              من المنازل السكنية إلى المشاريع التجارية الكبرى مع خدمة عملاء متميزة.
            </p>

            {/* Features list with 3D cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative flex items-start gap-5 p-6 rounded-2xl bg-card shadow-soft hover:shadow-3d transition-all duration-500 animate-scale-in card-3d border border-border/50"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Icon with gradient background */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary p-3.5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-3d">
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover decoration */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
