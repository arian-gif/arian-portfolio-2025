import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const TechStack = () => {
  const techCategories = [
    { name: "Languages", icon: "💻", technologies: ["Python", "TypeScript", "JavaScript", "C++", "SQL"] },
    { name: "AI/ML Frameworks", icon: "🤖", technologies: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "Hugging Face", "OpenCV"] },
    { name: "AI Development", icon: "🔗", technologies: ["LangChain", "LangGraph", "AutoGen", "Ollama", "MCPs"] },
    { name: "Web & Backend", icon: "⚡", technologies: ["React", "Node.js", "Flask", "FastAPI"] },
    { name: "Tools & IDEs", icon: "🛠️", technologies: ["Git", "Cursor", "Jupyter", "Google Colab", "VS Code", "Postman"] }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-secondary">🧩 My Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-slide-up">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-glow hover:border-primary/50 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl" role="img" aria-label={category.name}>
                    {category.icon}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-sm px-3 py-1 bg-background/50 border-border/50 hover:bg-primary/10 hover:border-primary/50 transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
