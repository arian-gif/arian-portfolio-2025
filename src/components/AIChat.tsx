import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content: "Hi! I'm Arian's AI assistant. Feel free to ask me about his projects, skills, or experience!",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: message },
      {
        role: "assistant",
        content: "Thanks for your message! This is a demo chat interface. In a full implementation, this would connect to an AI backend to answer questions about Arian's work and experience.",
      },
    ];

    setMessages(newMessages);
    setMessage("");
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 h-14 w-14 rounded-full shadow-glow gradient-primary text-white z-50 hover:scale-110 transition-smooth"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 left-6 w-96 h-[500px] z-50 flex flex-col shadow-2xl border-border/50 bg-card/95 backdrop-blur-lg animate-fade-in">
          {/* Header */}
          <div className="p-4 border-b border-border gradient-primary text-white rounded-t-lg">
            <h3 className="font-semibold">Chat with Arian's AI</h3>
            <p className="text-sm opacity-90">Ask me anything about Arian!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === "user"
                      ? "gradient-primary text-white"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="gradient-primary text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default AIChat;
