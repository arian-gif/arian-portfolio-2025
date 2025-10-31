import { Brain, Cpu, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-secondary">About Me</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-2xl bg-card border border-border animate-slide-up">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Engineering</h3>
              <p className="text-muted-foreground">
                Building neural networks and machine learning systems from the ground up.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card border border-border animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-flex p-4 rounded-full bg-secondary/10 mb-4">
                <Cpu className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Applied Intelligence</h3>
              <p className="text-muted-foreground">
                Bringing AI solutions into practical engineering applications.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-card border border-border animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex p-4 rounded-full bg-accent/10 mb-4">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Exploring cutting-edge technologies to solve real-world problems.
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert mx-auto text-center animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm passionate about combining artificial intelligence with engineering applications 
              to create intelligent systems that make a real impact. My journey spans from building 
              neural networks from scratch to developing autonomous systems and multi-agent AI platforms.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              With experience across multiple domains—from robotics and automation to software development 
              and machine learning—I bring a unique perspective to solving complex problems with elegant, 
              AI-powered solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
