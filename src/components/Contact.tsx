import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-primary">Get In Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            <Button
              size="lg"
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-3 hover:border-primary hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="https://github.com/ariankhan" target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8 group-hover:text-primary transition-colors" />
                <div className="text-center">
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-muted-foreground">@ariankhan</div>
                </div>
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-3 hover:border-primary hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="https://linkedin.com/in/ariankhan" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8 group-hover:text-primary transition-colors" />
                <div className="text-center">
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Arian Khan</div>
                </div>
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-auto py-6 flex flex-col items-center gap-3 hover:border-primary hover:bg-primary/10 transition-smooth group"
              asChild
            >
              <a href="mailto:arian@example.com">
                <Mail className="h-8 w-8 group-hover:text-primary transition-colors" />
                <div className="text-center">
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">Send a message</div>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
