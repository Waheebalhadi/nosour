import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ColorShowcase from "@/components/ColorShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <ColorShowcase />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
