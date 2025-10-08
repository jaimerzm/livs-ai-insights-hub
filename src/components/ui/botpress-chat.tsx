import React, { useEffect } from 'react';

const BotpressChat: React.FC = () => {
  useEffect(() => {
    // Initialize Botpress when component mounts
    const initBotpress = () => {
      if (window.botpress) {
        window.botpress.on("webchat:ready", () => {
          window.botpress.open();
        });
        window.botpress.init({
          "botId": "bb75a8b6-54ba-4dd1-ab41-2fe272ca9b99",
          "configuration": {
            "version": "v2",
            "botName": "Livs Support Agent",
            "botAvatar": "https://files.bpcontent.cloud/2025/10/05/11/20251005114727-PVVBUNQ0.png",
            "botDescription": "",
            "website": {},
            "email": {},
            "phone": {},
            "termsOfService": {},
            "privacyPolicy": {},
            "color": "#5F8BFF",
            "variant": "solid",
            "headerVariant": "glass",
            "themeMode": "dark",
            "fontFamily": "inter",
            "radius": 3.5,
            "feedbackEnabled": false,
            "footer": "[⚡ by Botpress](https://botpress.com/?from=webchat)",
            "soundEnabled": false,
            "proactiveMessageEnabled": false,
            "proactiveBubbleMessage": "Hi! 👋 Need help?",
            "proactiveBubbleTriggerType": "afterDelay",
            "proactiveBubbleDelayTime": 10
          },
          "clientId": "ccb124d2-67e6-4120-a586-6617279419a8",
          "selector": "#webchat"
        });
      }
    };

    // Check if script is already loaded
    if (window.botpress) {
      initBotpress();
    } else {
      // Wait for script to load
      const checkBotpress = setInterval(() => {
        if (window.botpress) {
          clearInterval(checkBotpress);
          initBotpress();
        }
      }, 100);

      return () => clearInterval(checkBotpress);
    }
  }, []);

  return (
    <div className="relative w-full h-full min-h-[500px]">
      <div 
        id="webchat" 
        className="w-full h-full rounded-lg overflow-hidden"
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[30px] bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-[9999]"
      />
    </div>
  );
};

// Declare window.botpress type
declare global {
  interface Window {
    botpress: any;
  }
}

export default BotpressChat;
