import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Career = () => {
  const BCS_text = `
    As an AI Developer at BCS Automation, I engineered intelligent automation systems 
    integrating machine learning, MCP frameworks, and cloud analytics. I developed an 
    LSTM Auto-Encoder in PyTorch that predicted equipment failures weeks in advance 
    with 92% accuracy, significantly reducing unplanned downtime. Additionally, 
    I built a multi-agent AI system using MCPs that autonomously generated engineering documentation, 
    significantly reducing operational costs and manual processing time.
    `;

    const CoinWa_ai_text = `
    As an AI Engineer Intern at CoinWa, a financial literacy startup, I developed an 
    interactive AI tutor using LangChain that allowed users to engage in real-time 
    conversations and learn financial concepts dynamically. The system leveraged 
    LLMs through Ollama for local deployment and integrated adaptive feedback to 
    personalize lessons based on user responses. I also built a Duolingo-style AI 
    module powered by an ANN-based classifier that analyzed user performance and 
    recommended targeted lessons.`

    const CoinWa_software_text = `
    As a Software Engineer Intern at CoinWa, I helped build a Duolingo like financial 
    literacy app using Flutter and Dart aimed at educating youth through gamified learning. 
    I implemented secure authentication, structured lessons, and interactive quizzes to 
    improve engagement and retention. The backend, built with Node.js and MongoDB, 
    handled user data and progress tracking. Additionally, I optimized the UI for responsiveness 
    across devices and collaborated with the team using Git and GitHub to deliver a 
    polished, high-performance product.
    `;
    
    const SunLife_text = `
      As an Onsite Support Intern at Sun Life, I provided technical support and system 
      maintenance for employees across multiple departments. I installed and configured 
      company software on new devices, performed hardware upgrades including RAM 
      replacements, and managed system updates through ServiceNow and SCCM. 
      By resolving technical issues efficiently and ensuring smooth device onboarding, 
      I helped improve overall system reliability and employee productivity.
      `;

  const experiences = [
    {
      company: "BCS Automation",
      role: "AI Developer",
      period: "September 2025 - December 2025",
      description: BCS_text,
      image: "/images/BCS.png",
    },
    {
      company: "CoinWa",
      role: "AI Engineering Intern",
      period: "May 2025 - August 2025",
      description: CoinWa_ai_text,
      image: "/images/coinwa.jpg",
    },
    {
      company: "CoinWa",
      role: "Software Engineering Intern",
      period: "January 2025 - April 2025",
      description: CoinWa_software_text,
      image: "/images/coinwa.jpg",
    },
    {
      company: "Sun Life",
      role: "Onsite Support",
      period: "May 2024 - August 2024",
      description: SunLife_text,
      image: "/images/sunlife.png",
    },
  ];

  return (
    <section id="career" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Career Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional experience in AI engineering and software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-glow transition-all duration-300 hover:-translate-x-2 bg-card/80 backdrop-blur border-l-4 border-l-primary animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 w-full overflow-hidden bg-muted">
                <img
                  src={exp.image}
                  alt={`${exp.company} logo`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover transition-all">
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