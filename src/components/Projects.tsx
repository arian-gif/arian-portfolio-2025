import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Neural Network from Scratch",
      description: "Built a complete neural network implementation from the ground up using pure Python and NumPy. Includes forward and backward propagation, various activation functions, and gradient descent optimization.",
      tags: ["Python", "NumPy", "Deep Learning", "Mathematics"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Agent Coding System",
      description: "Developed a multi-agent AI system featuring a Coder Agent that writes code and a Documentar Agent that automatically generates comprehensive documentation. Demonstrates autonomous collaboration between specialized AI agents.",
      tags: ["AI Agents", "Python", "LangChain", "Automation"],
      github: "#",
      demo: "#",
    },
    {
      title: "Autonomous Navigation Robot",
      description: "Programmed an autonomous robot using RobotC to handle real-time navigation and dynamic path adjustments based on sensor feedback. Implemented sensor fusion and obstacle avoidance algorithms.",
      tags: ["RobotC", "Embedded Systems", "Sensors", "Control Systems"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of AI and engineering projects that showcase my skills in building intelligent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-gradient-primary transition-all">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 group/btn hover:border-primary"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover/btn:text-primary" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 gradient-primary text-white"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
