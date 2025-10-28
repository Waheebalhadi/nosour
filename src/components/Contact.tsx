import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "الموقع",
    content: "حي الفضيلة، جدة، المملكة العربية السعودية",
    link: "https://www.google.com/maps/place/%D8%AF%D9%87%D8%A7%D9%86%D8%A7%D8%AA+%D8%AC%D9%88%D8%AA%D9%86+%D8%B4%D8%B1%D9%83%D8%A9+%D9%86%D8%B3%D9%88%D8%B1+%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D9%82%D8%A8%D9%84+%D9%84%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9+%D8%AD%D9%8A+%D8%A7%D9%84%D9%81%D8%B6%D9%8A%D9%84%D8%A9%E2%80%AD/@21.3133869,39.271328,17z"
  },
  {
    icon: Phone,
    title: "الهاتف",
    content: "اتصل بنا الآن",
    link: "tel:+966123456789"
  },
  {
    icon: Mail,
    title: "البريد الإلكتروني",
    content: "info@nesoor-future.sa",
    link: "mailto:info@nesoor-future.sa"
  },
  {
    icon: Clock,
    title: "ساعات العمل",
    content: "السبت - الخميس: 8 صباحاً - 10 مساءً",
    link: null
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نحن هنا للإجابة على استفساراتكم وخدمتكم على مدار الساعة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card 
              key={index}
              className="group card-3d border-0 shadow-soft hover:shadow-medium transition-all duration-500 bg-card overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.icon === MapPin ? "_blank" : undefined}
                      rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-2xl card-3d animate-scale-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.558934771935!2d39.271328!3d21.3133869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3b5af8685ea81%3A0x745c97160eeeceb1!2z2K_Zh9in2YbYp9iqINis2YjYqtmGINi02LHZg9ipINmG2LPZiNixINin2YTZhdiz2KrZgtio2YQg2YTZhNiq2KzYp9ix2Kkg2K3ZiiDYp9mE2YHYttmK2YTYqQ!5e0!3m2!1sar!2ssa!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع الشركة"
            className="w-full"
          ></iframe>
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-glow font-bold text-lg px-12 py-6 rounded-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://wa.me/966123456789", "_blank")}
          >
            تواصل عبر واتساب
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
