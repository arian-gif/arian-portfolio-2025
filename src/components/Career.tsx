import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Career = () => {
  const experiences = [
    {
      company: "BCS Automation",
      role: "AI Developer",
      period: "September 2025 - December 2025",
      description: "Description to be added.",
    },
    {
      company: "CoinWa",
      role: "AI Engineering Intern",
      period: "May 2025 - August 2025",
      description: "Description to be added.",
    },
    {
      company: "CoinWa",
      role: "Software Engineering Intern",
      period: "January 2025 - April 2025",
      description: "Description to be added.",
    },
    {
      company: "Sunlife",
      role: "Onsite Support",
      period: "May 2024 - August 2024",
      description: "Description to be added.",
    },
  ];

  return (
    <section id="career" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Career Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional experience in AI engineering and software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-x-2 bg-card/80 backdrop-blur border-l-4 border-l-primary animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-gradient-primary transition-all">
                        {exp.role}
                      </CardTitle>
                      <CardDescription className="text-base font-semibold text-foreground/80">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
