import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
const SUPABASE_URL = 'https://iwxerzbncpzknzfbryap.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eGVyemJuY3B6a256ZmJyeWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTQwMDQsImV4cCI6MjA3NTg3MDAwNH0.Jfyd5wYvSK82R_NxvNsMie0Rsqehk9PVXO5FNXrjnp8';
const USER_ID = '052872ec-48ce-476c-8ff8-d29f1dddb9b7';
const CHATBOT_ID = 'cd5b2b33-2d7f-4d2c-a2da-7e3de95e88d4';
export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{
    role: "user" | "assistant";
    content: string;
  }[]>([{
    role: "assistant",
    content: "👋 ¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?"
  }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Listen for openChat event
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('openChat', handleOpenChat);
    return () => window.removeEventListener('openChat', handleOpenChat);
  }, []);

  const sendMessage = async () => {
    const message = input.trim();
    if (!message || isLoading) return;
    const newMessages = [...messages, {
      role: "user" as const,
      content: message
    }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    try {
      const response = await fetch(SUPABASE_URL + '/functions/v1/chat-with-docs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': 'Bearer ' + SUPABASE_ANON_KEY
        },
        body: JSON.stringify({
          messages: newMessages,
          user_id: USER_ID,
          chatbot_id: CHATBOT_ID
        })
      });
      if (!response.ok || !response.body) {
        throw new Error('Failed to start stream');
      }
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      let assistantContent = "";
      setMessages(prev => [...prev, {
        role: "assistant",
        content: ""
      }]);
      while (true) {
        const {
          done,
          value
        } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, {
          stream: true
        });
        let newlineIndex;
        while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (line.startsWith(":") || line.trim() === "") continue;
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6).trim();
          if (jsonStr === "[DONE]") break;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.candidates?.[0]?.content?.parts?.[0]?.text || parsed.choices?.[0]?.delta?.content;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const newMsgs = [...prev];
                newMsgs[newMsgs.length - 1].content = assistantContent;
                return newMsgs;
              });
            }
          } catch (e) {
            // Ignore parsing errors for incomplete chunks
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Lo siento, no pude conectarme. Por favor intenta de nuevo."
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="fixed bottom-4 right-4 md:bottom-5 md:right-5 z-[9999]">
      <AnimatePresence>
        {isOpen && <motion.div initial={{
        opacity: 0,
        scale: 0.8,
        y: 20
      }} animate={{
        opacity: 1,
        scale: 1,
        y: 0
      }} exit={{
        opacity: 0,
        scale: 0.8,
        y: 20
      }} transition={{
        duration: 0.2
      }} className="fixed inset-x-4 top-20 bottom-20 md:absolute md:inset-auto md:bottom-20 md:right-0 md:mb-4">
            <div className={cn("relative w-full h-full md:w-[420px] md:h-[600px] md:max-h-[calc(100vh-140px)] rounded-2xl overflow-hidden p-[2px]")}>
              {/* Animated Outer Border */}
              <motion.div className="absolute inset-0 rounded-2xl border-2 border-primary/20" animate={{
            rotate: [0, 360]
          }} transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }} />

              {/* Inner Card */}
              <div className="relative flex flex-col w-full h-full rounded-xl border border-border overflow-hidden bg-background/95 backdrop-blur-xl">
                {/* Inner Animated Background */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} style={{
              backgroundSize: "200% 200%"
            }} />

                {/* Floating Particles */}
                {Array.from({
              length: 20
            }).map((_, i) => <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-primary/10" animate={{
              y: ["0%", "-140%"],
              x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
              opacity: [0, 1, 0]
            }} transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }} style={{
              left: `${Math.random() * 100}%`,
              bottom: "-10%"
            }} />)}

                {/* Header */}
                <div className="px-4 py-3 border-b border-border relative z-10 flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-foreground">Livs assistant </h2>
                  <button onClick={() => setIsOpen(false)} className="p-1 rounded-lg hover:bg-accent transition-colors">
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                </div>

                {/* Messages */}
                <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 text-sm flex flex-col relative z-10">
                  {messages.map((msg, i) => <motion.div key={i} initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.4
              }} className={cn("px-3 py-2 rounded-xl max-w-[80%] shadow-md backdrop-blur-md whitespace-pre-line", msg.role === "assistant" ? "bg-muted text-foreground self-start" : "bg-primary text-primary-foreground font-semibold self-end")}>
                      {msg.content}
                    </motion.div>)}

                  {/* AI Typing Indicator */}
                  {isLoading && <motion.div className="flex items-center gap-1 px-3 py-2 rounded-xl max-w-[30%] bg-muted self-start" initial={{
                opacity: 0
              }} animate={{
                opacity: [0, 1, 0.6, 1]
              }} transition={{
                repeat: Infinity,
                duration: 1.2
              }}>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200"></span>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse delay-400"></span>
                    </motion.div>}
                </div>

                {/* Input */}
                <div className="flex items-center gap-2 p-3 border-t border-border relative z-10">
                  <input className="flex-1 px-3 py-2 text-sm bg-muted/50 rounded-lg border border-border text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Escribe tu mensaje..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === "Enter" && sendMessage()} />
                  <button onClick={sendMessage} disabled={isLoading} className="p-2 rounded-lg bg-primary hover:bg-primary/90 transition-colors disabled:opacity-50">
                    <Send className="w-4 h-4 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button whileHover={{
      scale: 1.05
    }} whileTap={{
      scale: 0.95
    }} onClick={() => setIsOpen(!isOpen)} className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg flex items-center justify-center">
        {isOpen ? <X className="w-6 h-6 text-primary-foreground" /> : <MessageCircle className="w-6 h-6 text-primary-foreground" />}
      </motion.button>
    </div>;
};
export default ChatbotWidget;