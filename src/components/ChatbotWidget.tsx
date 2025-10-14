import { useEffect } from 'react';

const ChatbotWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
(function() {
  const SUPABASE_URL = 'https://iwxerzbncpzknzfbryap.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eGVyemJuY3B6a256ZmJyeWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTQwMDQsImV4cCI6MjA3NTg3MDAwNH0.Jfyd5wYvSK82R_NxvNsMie0Rsqehk9PVXO5FNXrjnp8';
  const USER_ID = '9d812369-08b7-46f9-a445-20d7560b4a2c';
  
  const container = document.getElementById('chatbot-widget-9d812369-08b7-46f9-a445-20d7560b4a2c');
  if (!container) return;
  
  const chatHTML = \`
    <style>
      .chatbot-wrapper { position: fixed; bottom: 20px; right: 20px; z-index: 9999; }
      .chatbot-toggle { width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none; cursor: pointer; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center; transition: transform 0.2s; }
      .chatbot-toggle:hover { transform: scale(1.05); }
      .chatbot-toggle svg { width: 32px; height: 32px; color: white; }
      .chatbot-window { display: none; width: 400px; height: 600px; background: white; border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); flex-direction: column; overflow: hidden; position: absolute; bottom: 80px; right: 0; }
      .chatbot-window.open { display: flex; }
      .chatbot-header { padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; display: flex; justify-content: space-between; align-items: center; }
      .chatbot-header h3 { margin: 0; font-size: 18px; font-weight: 600; }
      .chatbot-close { background: none; border: none; color: white; font-size: 24px; cursor: pointer; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; }
      .chatbot-messages { flex: 1; overflow-y: auto; padding: 20px; background: #f8f9fa; }
      .chatbot-message { margin-bottom: 16px; display: flex; gap: 12px; align-items: flex-start; }
      .chatbot-message.user { flex-direction: row-reverse; }
      .chatbot-avatar { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
      .chatbot-avatar svg { width: 18px; height: 18px; color: white; }
      .chatbot-bubble { max-width: 70%; padding: 12px 16px; border-radius: 16px; word-wrap: break-word; }
      .chatbot-message.assistant .chatbot-bubble { background: white; box-shadow: 0 1px 2px rgba(0,0,0,0.1); }
      .chatbot-message.user .chatbot-bubble { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
      .chatbot-loading { display: flex; gap: 4px; padding: 12px; }
      .chatbot-loading div { width: 8px; height: 8px; background: #667eea; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out; }
      .chatbot-loading div:nth-child(1) { animation-delay: -0.32s; }
      .chatbot-loading div:nth-child(2) { animation-delay: -0.16s; }
      @keyframes bounce { 0%, 80%, 100% { transform: scale(0); } 40% { transform: scale(1); } }
      .chatbot-input-area { padding: 16px; background: white; border-top: 1px solid #e9ecef; display: flex; gap: 8px; }
      .chatbot-input { flex: 1; padding: 12px; border: 1px solid #dee2e6; border-radius: 8px; font-size: 14px; outline: none; }
      .chatbot-input:focus { border-color: #667eea; }
      .chatbot-send { padding: 12px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500; }
      .chatbot-send:hover { opacity: 0.9; }
      .chatbot-send:disabled { opacity: 0.5; cursor: not-allowed; }
    </style>
    
    <div class="chatbot-wrapper">
      <button class="chatbot-toggle" id="chatbot-toggle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </button>
      
      <div class="chatbot-window" id="chatbot-window">
        <div class="chatbot-header">
          <h3>Asistente Virtual</h3>
          <button class="chatbot-close" id="chatbot-close">&times;</button>
        </div>
        
        <div class="chatbot-messages" id="chatbot-messages">
          <div class="chatbot-message assistant">
            <div class="chatbot-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            </div>
            <div class="chatbot-bubble">¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?</div>
          </div>
        </div>
        
        <div class="chatbot-input-area">
          <input type="text" class="chatbot-input" id="chatbot-input" placeholder="Escribe tu mensaje...">
          <button class="chatbot-send" id="chatbot-send">Enviar</button>
        </div>
      </div>
    </div>
  \`;
  
  container.innerHTML = chatHTML;
  
  const toggle = document.getElementById('chatbot-toggle');
  const window = document.getElementById('chatbot-window');
  const close = document.getElementById('chatbot-close');
  const messages = document.getElementById('chatbot-messages');
  const input = document.getElementById('chatbot-input');
  const send = document.getElementById('chatbot-send');
  let isLoading = false;
  
  toggle.addEventListener('click', () => window.classList.toggle('open'));
  close.addEventListener('click', () => window.classList.remove('open'));
  
  async function sendMessage() {
    const message = input.value.trim();
    if (!message || isLoading) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    isLoading = true;
    const loadingId = addLoading();
    send.disabled = true;
    
    try {
      const response = await fetch(\`\${SUPABASE_URL}/functions/v1/chat-with-docs\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': \`Bearer \${SUPABASE_ANON_KEY}\`
        },
        body: JSON.stringify({ message, user_id: USER_ID })
      });
      
      const data = await response.json();
      removeLoading(loadingId);
      
      if (data.response) {
        addMessage(data.response, 'assistant');
      } else {
        addMessage('Lo siento, hubo un error. Por favor intenta de nuevo.', 'assistant');
      }
    } catch (error) {
      console.error('Error:', error);
      removeLoading(loadingId);
      addMessage('Lo siento, no pude conectarme. Por favor intenta de nuevo.', 'assistant');
    } finally {
      isLoading = false;
      send.disabled = false;
    }
  }
  
  function addMessage(text, role) {
    const messageDiv = document.createElement('div');
    messageDiv.className = \`chatbot-message \${role}\`;
    messageDiv.innerHTML = \`
      <div class="chatbot-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          \${role === 'assistant' 
            ? '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>'
            : '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>'
          }
        </svg>
      </div>
      <div class="chatbot-bubble">\${text}</div>
    \`;
    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;
  }
  
  function addLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'chatbot-message assistant';
    loadingDiv.id = 'loading-msg';
    loadingDiv.innerHTML = \`
      <div class="chatbot-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </div>
      <div class="chatbot-bubble">
        <div class="chatbot-loading"><div></div><div></div><div></div></div>
      </div>
    \`;
    messages.appendChild(loadingDiv);
    messages.scrollTop = messages.scrollHeight;
    return 'loading-msg';
  }
  
  function removeLoading(id) {
    const loading = document.getElementById(id);
    if (loading) loading.remove();
  }
  
  send.addEventListener('click', sendMessage);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
  });
})();
    `;
    
    document.body.appendChild(script);

    return () => {
      const container = document.getElementById('chatbot-widget-9d812369-08b7-46f9-a445-20d7560b4a2c');
      if (container) {
        container.remove();
      }
      script.remove();
    };
  }, []);

  return <div id="chatbot-widget-9d812369-08b7-46f9-a445-20d7560b4a2c"></div>;
};

export default ChatbotWidget;
