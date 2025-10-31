import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Career from "@/components/Career";
import About from "@/components/About";
import Contact from "@/components/Contact";
import AIChat from "@/components/AIChat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Career />
        <About />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
