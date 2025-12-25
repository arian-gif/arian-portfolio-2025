import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const neural_network_text = `
    I built a neural network from scratch using NumPy to classify 30 individuals based on height 
    and weight as male or female. The model featured two inputs, one hidden layer with four activations, 
    and two outputs. I implemented backpropagation and gradient descent manually, using cross-entropy loss 
    for classification. It achieved high accuracy and low loss, confirming the correctness of my implementation. 
    I’ve also derived other machine learning algorithms, including Gradient Boosting, Decision Trees, 
    Linear Regression, and Logistic Regression.
    `;

    const ai_team_text = `
    I developed an agentic AI system that autonomously transforms high-level software requirements 
    into complete full-stack applications. A manager agent orchestrates specialized frontend, backend, 
    reviewer, and documentation agents across the software lifecycle. Agents run in parallel using Python’s asyncio to improve efficiency. 
    Generated code is automatically reviewed through iterative feedback loops for error detection and correction. Once validated, 
    documentation agents generate structured Markdown technical documentation.
    `;

    const delivery_bot_text = `
    I built a Delivery Bot in RobotC designed to autonomously deliver packages across a grid, 
    offering an assistive solution for individuals such as the elderly. The robot reads positional 
    instructions from a file, navigates using motor control and sensor feedback, and makes decisions 
    based on box color detection. I programmed functions for distance, rotation, and error correction 
    using encoders, touch, color, and gyro sensors. The bot determines its route, retrieves packages, 
    and returns to the origin while tracking delivery time and status. 
    `;

  const projects = [
    {
      title: "Neural Network from Scratch",
      description: neural_network_text,
      tags: ["Python", "NumPy","Scikit-learn", "Deep Learning"],
      github: "https://github.com/arian-gif/Neurel-Network"
    },
    {
      title: "Agentic Full-Stack Orchestrator",
      description: ai_team_text,
      tags: ["Agentic AI", "Async Systems", "FastAPI", "Python"],
      github: "https://github.com/arian-gif/agent-system",
      demo: "https://agentic-coder.netlify.app/",
    },
    {
      title: "Autonomous Navigation Robot",
      description: delivery_bot_text,
      tags: ["RobotC","CAD", "Embedded Systems", "Sensors"],
      github: "https://github.com/arian-gif/Robot-",
      demo: "https://www.youtube.com/watch?v=nHGaTSK0epw",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="text-2xl group-hover:transition-all text-center mb-2">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
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
                {project.demo ? (
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
                ) : null}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
