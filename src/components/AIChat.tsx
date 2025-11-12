import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "./ui/textarea";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


// Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm Arian's AI assistant. Feel free to ask me about his projects, skills, or experience! You can also ask me to help you get in touch with him.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage("");
    setError(null);

    // Add user message immediately
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: newMessages,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Add assistant response
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: data.message.content,
        },
      ]);
    } catch (err) {
      console.error("Chat error:", err);
      setError("Sorry, I'm having trouble connecting. Please try again later.");
      
      // Add error message to chat
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment, or feel free to reach out directly via email.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-glow gradient-primary text-white z-50 hover:scale-110 transition-smooth"
        size="icon"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[450px] z-50 flex flex-col shadow-2xl border-border/50 bg-card/95 backdrop-blur-lg animate-fade-in">
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
                  } animate-fade-in`}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground p-3 rounded-lg flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            )}
            
            {/* Error message */}
            {error && (
              <div className="flex justify-center">
                <div className="bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-2 rounded text-sm">
                  {error}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 resize-none overflow-y-auto h-12 p-3"
              disabled={isLoading}
            />
            <Button
              onClick={handleSend}
              className="gradient-primary text-white h-12 w-12 flex items-center justify-center"
              disabled={isLoading || !message.trim()}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default AIChat;