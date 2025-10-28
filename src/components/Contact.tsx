import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "الموقع",
    content: "حي الفضيلة، جدة",
    subContent: "المملكة العربية السعودية",
    link: "https://www.google.com/maps/place/%D8%AF%D9%87%D8%A7%D9%86%D8%A7%D8%AA+%D8%AC%D9%88%D8%AA%D9%86+%D8%B4%D8%B1%D9%83%D8%A9+%D9%86%D8%B3%D9%88%D8%B1+%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84+%D9%84%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9+%D8%AD%D9%8A+%D8%A7%D9%84%D9%81%D8%B6%D9%8A%D9%84%D8%A9%E2%80%AD/@21.3133869,39.271328,17z",
    color: "from-primary to-accent"
  },
  {
    icon: Phone,
    title: "الهاتف",
    content: "اتصل بنا الآن",
    subContent: "+966 12 345 6789",
    link: "tel:+966123456789",
    color: "from-accent to-secondary"
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    content: "info@nesoor-future.sa",
    subContent: "نرد خلال 24 ساعة",
    link: "mailto:info@nesoor-future.sa",
    color: "from-secondary to-primary"
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    content: "السبت - الخميس",
    subContent: "8 صباحاً - 10 مساءً",
    link: null,
    color: "from-primary-glow to-accent"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-32 px-4 bg-gradient-to-b from-background to-primary/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-2 bg-primary/10 rounded-full">
            <MessageSquare className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold">تواصل معنا</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            نحن <span className="text-gradient">هنا لخدمتك</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نحن متواجدون للإجابة على استفساراتكم وخدمتكم في أي وقت
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 perspective-container">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="group relative border-0 shadow-soft hover:shadow-3d transition-all duration-500 bg-card overflow-hidden animate-scale-in card-3d"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient top bar */}
              <div className={`h-1.5 bg-gradient-to-r ${info.color} animate-gradient`}></div>
              
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardContent className="p-7">
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="relative mb-5">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} p-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-3d`}>
                      <info.icon className="w-full h-full text-white" />
                    </div>
                    {/* Icon glow */}
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${info.color} blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {info.title}
                  </h3>
                  
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.icon === MapPin ? "_blank" : undefined}
                      rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                      className="text-primary hover:text-primary-glow transition-colors duration-300 font-semibold mb-2 text-base group-hover:scale-105 inline-block"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-foreground font-semibold mb-2 text-base">{info.content}</p>
                  )}
                  
                  <p className="text-muted-foreground text-sm">{info.subContent}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="rounded-3xl overflow-hidden shadow-3d card-3d animate-scale-in mb-12 border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.558934771935!2d39.271328!3d21.3133869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3b5af8685ea81%3A0x745c97160eeeceb1!2z2K_Zh9in2YbYp9iqINis2YjYqtmGINi02LHZg9ipINmG2LPZiNixINin2YTZhdiz2KrZgtio2YQg2YTZhNiq2KzYp9ix2Kkg2K3ZiiDYp9mE2YHYttmK2YTYqQ!5e0!3m2!1sar!2ssa!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع الشركة"
            className="w-full"
          ></iframe>
        </div>

        {/* CTA Section */}
        <div className="relative glass-effect rounded-3xl p-12 text-center shadow-3d backdrop-blur-xl border border-primary/20 animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              جاهز لبدء مشروعك؟
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر خاص لمشروعك
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-primary to-accent text-white hover:shadow-glow font-bold text-lg px-12 py-7 rounded-2xl transition-all duration-300 hover:scale-110 shadow-3d"
                onClick={() => window.open("https://wa.me/966123456789", "_blank")}
              >
                <MessageSquare className="ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                تواصل عبر واتساب
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="glass-effect border-2 border-primary text-primary hover:bg-primary/10 font-bold text-lg px-12 py-7 rounded-2xl transition-all duration-300 hover:scale-110 shadow-soft"
                onClick={() => window.location.href = "tel:+966123456789"}
              >
                <Phone className="ml-2 h-6 w-6" />
                اتصل بنا مباشرة
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
