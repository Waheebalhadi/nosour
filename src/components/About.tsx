import { Award, Target, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "خبرة وجودة",
    description: "سنوات من الخبرة في مجال الدهانات مع التزام كامل بأعلى معايير الجودة"
  },
  {
    icon: Target,
    title: "دقة في التنفيذ",
    description: "نحرص على تقديم خدمة متقنة بدقة عالية لضمان رضا عملائنا"
  },
  {
    icon: Heart,
    title: "رضا العملاء",
    description: "أولويتنا هي تحقيق رضا عملائنا من خلال خدمة مميزة ونتائج مبهرة"
  }
];

const About = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              من نحن
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              شركة نسور المستقبل للتجارة هي وكيل معتمد لدهانات جوتن في جدة، المملكة العربية السعودية. 
              نفخر بتقديم أفضل منتجات الدهانات العالمية بجودة استثنائية وأسعار تنافسية.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              نؤمن بأن كل مشروع يستحق الأفضل، لذلك نحرص على تقديم حلول متكاملة تناسب جميع الاحتياجات، 
              من المنازل السكنية إلى المشاريع التجارية الكبرى.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent p-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual Element */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl card-3d">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="text-7xl font-bold mb-4">10+</div>
                  <div className="text-2xl font-semibold">سنوات من الخبرة</div>
                  <div className="w-24 h-1 bg-white mx-auto mt-4 rounded-full"></div>
                  <div className="text-5xl font-bold mt-8">1000+</div>
                  <div className="text-xl font-semibold mt-2">مشروع ناجح</div>
                </div>
              </div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
