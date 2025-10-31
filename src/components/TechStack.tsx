import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const technologies = [
    { name: "Python", category: "language" },
    { name: "PyTorch", category: "ml" },
    { name: "TensorFlow", category: "ml" },
    { name: "OpenCV", category: "ml" },
    { name: "FastAPI", category: "backend" },
    { name: "React", category: "frontend" },
    { name: "Node.js", category: "backend" },
    { name: "MongoDB", category: "database" },
    { name: "Docker", category: "devops" },
    { name: "Git", category: "devops" },
    { name: "MATLAB", category: "engineering" },
    { name: "Simulink", category: "engineering" },
  ];

  const categoryColors: Record<string, string> = {
    language: "bg-primary/20 text-primary border-primary/30",
    ml: "bg-secondary/20 text-secondary border-secondary/30",
    backend: "bg-accent/20 text-accent border-accent/30",
    frontend: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    database: "bg-green-500/20 text-green-400 border-green-500/30",
    devops: "bg-orange-500/20 text-orange-400 border-orange-500/30",
    engineering: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-secondary">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to build intelligent systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto animate-slide-up">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className={`text-base md:text-lg px-4 py-2 ${
                categoryColors[tech.category]
              }`}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
