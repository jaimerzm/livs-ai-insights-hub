import React, { useEffect } from 'react';

const LovableChatbot: React.FC = () => {
  useEffect(() => {
    // Initialize Lovable Chatbot when component mounts
    const initChatbot = () => {
      if (window.LovableChatbot) {
        window.LovableChatbot.open();
      }
    };

    // Check if script is already loaded
    if (window.LovableChatbot) {
      initChatbot();
    } else {
      // Wait for script to load
      const checkChatbot = setInterval(() => {
        if (window.LovableChatbot) {
          clearInterval(checkChatbot);
          initChatbot();
        }
      }, 100);

      return () => clearInterval(checkChatbot);
    }
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <div 
        id="lovable-chatbot-container" 
        className="w-full h-full rounded-lg overflow-hidden"
      />
    </div>
  );
};

// Declare window.LovableChatbot type
declare global {
  interface Window {
    LovableChatbot: any;
    ChatbotConfig: {
      supabaseUrl: string;
      supabaseKey: string;
    };
  }
}

export default LovableChatbot;
