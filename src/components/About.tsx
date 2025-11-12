import { Brain, Cpu, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About Me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-glow transition-all animate-slide-up">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Engineering</h3>
              <p className="text-muted-foreground">
                I’m passionate about exploring AI and its power to solve real world problems.  
                What inspires me most is how it can enhance human capability and  
                drive innovation.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-glow transition-all animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex p-4 rounded-full bg-secondary/10 mb-4">
                <Cpu className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Applied Intelligence</h3>
              <p className="text-muted-foreground">
              I’m fascinated by how intelligent systems can make decisions
              that improve efficiency. What motivates 
              me is bridging theory with real world impact.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur border border-border/50 hover:shadow-glow transition-all animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
              I’m driven by the challenge of creating new technologies that push boundaries.  
              What excites me most is turning bold ideas into meaningful solutions  
              that shape the future.
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto text-center animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed tracking-wide">
            Hey, I’m Arian. I love the gym, music, sports, and a good show to unwind. 
            I stick to a push pull legs routine, and when I’m not lifting, I’m probably 
            listening to The Weeknd. I’m big on shows like Brooklyn Nine-Nine and Stranger Things, 
            and I’ll even throw on anime like Attack on Titan or Bleach when I’m in the mood for chaos. 
            I’m a huge fan of sports too, especially football and basketball, go Raptors! 
            I’ll even admit, I became a Jays fan the second they made the World Series. 
            Outside of that, I’ve been learning guitar, trying to keep my Spanish streak alive on Duolingo, 
            and playing chess whenever I get the chance. I try to keep life simple, learn a lot, 
            laugh often, lift heavy, and have fun along the way.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
