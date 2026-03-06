import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Star, Wifi, Car, Coffee, TreePine, Mountain, UtensilsCrossed, Calendar, Users, ChevronDown, Menu, X, Heart, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

import heroImg from '@/assets/demo/casita-beneroso-hero.jpg';
import room1Img from '@/assets/demo/casita-room1.jpg';
import room2Img from '@/assets/demo/casita-room2.jpg';
import room3Img from '@/assets/demo/casita-room3.jpg';
import natureImg from '@/assets/demo/casita-nature.jpg';
import diningImg from '@/assets/demo/casita-dining.jpg';
import poolImg from '@/assets/demo/casita-pool.jpg';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Reservar', href: '#reservar' },
  { label: 'Contacto', href: '#contacto' },
];

const rooms = [
  {
    name: 'Suite El Olivo',
    image: room1Img,
    description: 'Habitación doble con vigas de madera originales, baño privado y vistas al olivar. Perfecta para parejas que buscan romanticismo y tranquilidad.',
    capacity: '2 personas',
    price: '85€',
    features: ['Cama King Size', 'Baño privado', 'Vistas al olivar', 'Calefacción'],
  },
  {
    name: 'Habitación La Piedra',
    image: room2Img,
    description: 'Encantadora habitación con muros de piedra vista, mobiliario rústico de época y ventana panorámica con vistas al valle.',
    capacity: '2 personas',
    price: '75€',
    features: ['Cama doble', 'Piedra vista', 'Vistas al valle', 'Armario antiguo'],
  },
  {
    name: 'Suite Familiar La Chimenea',
    image: room3Img,
    description: 'Amplia suite con chimenea de leña, zona de estar y capacidad para toda la familia. El refugio perfecto para noches frías.',
    capacity: '4 personas',
    price: '120€',
    features: ['Chimenea', 'Zona de estar', 'Cama doble + sofá cama', 'Baño completo'],
  },
];

const services = [
  { icon: Coffee, title: 'Desayuno Casero', desc: 'Productos locales y recetas tradicionales cada mañana' },
  { icon: Wifi, title: 'WiFi Gratuito', desc: 'Conexión en todas las instalaciones' },
  { icon: Car, title: 'Parking Privado', desc: 'Aparcamiento gratuito dentro de la finca' },
  { icon: TreePine, title: 'Jardín y Huerto', desc: 'Pasea por nuestros jardines y recoge frutas del huerto' },
  { icon: Mountain, title: 'Rutas de Senderismo', desc: 'Guías y mapas de rutas cercanas disponibles' },
  { icon: UtensilsCrossed, title: 'Cenas Especiales', desc: 'Bajo petición, cenas con productos de la tierra' },
];

const gallery = [heroImg, room1Img, room2Img, room3Img, natureImg, diningImg, poolImg];

const testimonials = [
  { name: 'María y Carlos', text: 'Un lugar mágico. Nos sentimos como en casa pero rodeados de naturaleza. Volveremos seguro.', rating: 5 },
  { name: 'Familia López', text: 'Los niños disfrutaron muchísimo del huerto y los animales. Los desayunos son espectaculares.', rating: 5 },
  { name: 'Ana García', text: 'Perfecto para desconectar. El silencio, las vistas y la amabilidad de los anfitriones. 10/10.', rating: 5 },
];

const CasitaBeneroso = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    // Hide the default LIVS chatbot on this demo page
    const defaultChatbot = document.getElementById('chatbot-widget-052872ec-48ce-476c-8ff8-d29f1dddb9b7');
    if (defaultChatbot) defaultChatbot.style.display = 'none';

    // Create container for demo chatbot
    const containerId = 'demo-chatbot-casita';
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      document.body.appendChild(container);
    }

    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://botsupreme.lovable.app/chatbot-widget.css';
    document.head.appendChild(link);

    // Load chatbot script
    const script = document.createElement('script');
    script.textContent = `
(function() {
  var SUPABASE_URL = 'https://iwxerzbncpzknzfbryap.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3eGVyemJuY3B6a256ZmJyeWFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyOTQwMDQsImV4cCI6MjA3NTg3MDAwNH0.Jfyd5wYvSK82R_NxvNsMie0Rsqehk9PVXO5FNXrjnp8';
  var USER_ID = '052872ec-48ce-476c-8ff8-d29f1dddb9b7';
  var CHATBOT_ID = '624e10fe-e021-4328-b25d-3814cc36ecee';
  var THEMES = {
    'classic-light': { background:'#FFFFFF', headerBg:'#FFFFFF', headerText:'#000000', userBubble:'#000000', userText:'#FFFFFF', botBubble:'#F7F7F8', botText:'#000000', inputBg:'#F7F7F8', inputBorder:'#E5E5E5', buttonBg:'#000000', buttonText:'#FFFFFF', accent:'#000000' },
    'classic-dark': { background:'#1A1A1A', headerBg:'#1A1A1A', headerText:'#FFFFFF', userBubble:'#FFFFFF', userText:'#000000', botBubble:'#2D2D2D', botText:'#FFFFFF', inputBg:'#2D2D2D', inputBorder:'#404040', buttonBg:'#FFFFFF', buttonText:'#000000', accent:'#FFFFFF' },
    'ocean-blue': { background:'#F0F9FF', headerBg:'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)', headerText:'#FFFFFF', userBubble:'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)', userText:'#FFFFFF', botBubble:'#E0F2FE', botText:'#0C4A6E', inputBg:'#FFFFFF', inputBorder:'#BAE6FD', buttonBg:'#0EA5E9', buttonText:'#FFFFFF', accent:'#0EA5E9' },
    'forest-green': { background:'#F0FDF4', headerBg:'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)', headerText:'#FFFFFF', userBubble:'linear-gradient(135deg, #22C55E 0%, #16A34A 100%)', userText:'#FFFFFF', botBubble:'#DCFCE7', botText:'#14532D', inputBg:'#FFFFFF', inputBorder:'#BBF7D0', buttonBg:'#22C55E', buttonText:'#FFFFFF', accent:'#22C55E' },
    'sunset-warm': { background:'#FFF7ED', headerBg:'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', headerText:'#FFFFFF', userBubble:'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', userText:'#FFFFFF', botBubble:'#FFEDD5', botText:'#7C2D12', inputBg:'#FFFFFF', inputBorder:'#FED7AA', buttonBg:'#F97316', buttonText:'#FFFFFF', accent:'#F97316' },
    'purple-haze': { background:'#FAF5FF', headerBg:'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)', headerText:'#FFFFFF', userBubble:'linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)', userText:'#FFFFFF', botBubble:'#F3E8FF', botText:'#581C87', inputBg:'#FFFFFF', inputBorder:'#E9D5FF', buttonBg:'#A855F7', buttonText:'#FFFFFF', accent:'#A855F7' },
    'neon-glow': { background:'#0F0F1A', headerBg:'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)', headerText:'#FFFFFF', userBubble:'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)', userText:'#FFFFFF', botBubble:'#1E1E2E', botText:'#E0E0FF', inputBg:'#1E1E2E', inputBorder:'#3B3B5C', buttonBg:'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)', buttonText:'#FFFFFF', accent:'#06B6D4' },
    'rose-gold': { background:'#FFF1F2', headerBg:'linear-gradient(135deg, #FB7185 0%, #E11D48 100%)', headerText:'#FFFFFF', userBubble:'linear-gradient(135deg, #FB7185 0%, #E11D48 100%)', userText:'#FFFFFF', botBubble:'#FFE4E6', botText:'#881337', inputBg:'#FFFFFF', inputBorder:'#FECDD3', buttonBg:'#FB7185', buttonText:'#FFFFFF', accent:'#FB7185' }
  };
  var settings = { bot_name:'Asistente Virtual', icon_background_color:'#000000', icon_color:'#FFFFFF', icon_image_url:null, interface_theme:'classic-dark', bot_avatar_url:null, show_avatar:true, custom_css:null };
  var container = document.getElementById('demo-chatbot-casita');
  if (!container) return;
  async function loadSettings() {
    try {
      var resp = await fetch(SUPABASE_URL + '/rest/v1/chatbot_settings?user_id=eq.' + USER_ID + '&chatbot_id=eq.' + CHATBOT_ID + '&select=bot_name,icon_background_color,icon_color,icon_image_url,interface_theme,bot_avatar_url,show_avatar,custom_css', { headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + SUPABASE_ANON_KEY } });
      if (resp.ok) { var data = await resp.json(); if (data && data[0]) { var d = data[0]; settings.bot_name = d.bot_name || settings.bot_name; settings.icon_background_color = d.icon_background_color || settings.icon_background_color; settings.icon_color = d.icon_color || settings.icon_color; settings.icon_image_url = d.icon_image_url || null; settings.interface_theme = d.interface_theme || 'classic-dark'; settings.bot_avatar_url = d.bot_avatar_url || null; settings.show_avatar = d.show_avatar !== false; settings.custom_css = d.custom_css || null; } }
    } catch(e) { console.warn('[Chatbot] Settings load warning', e); }
  }
  function setBg(el, val) { el.style.setProperty('background', val, 'important'); }
  function applyTheme() {
    var theme = THEMES[settings.interface_theme] || THEMES['classic-dark']; container._theme = theme;
    var ic = container.querySelector('.chatbot-inner-card'); if (ic) ic.style.setProperty('background', theme.background, 'important');
    var hdr = container.querySelector('.chatbot-header'); if (hdr) { setBg(hdr, theme.headerBg); hdr.style.setProperty('border-bottom-color', theme.inputBorder, 'important'); }
    var hTitle = container.querySelector('.chatbot-header h3'); if (hTitle) hTitle.style.setProperty('color', theme.headerText, 'important');
    var closeB = container.querySelector('.chatbot-close'); if (closeB) closeB.style.setProperty('color', theme.headerText, 'important');
    var msgArea = container.querySelector('.chatbot-messages'); if (msgArea) msgArea.style.setProperty('background', theme.background, 'important');
    var inArea = container.querySelector('.chatbot-input-area'); if (inArea) { inArea.style.setProperty('background', theme.background, 'important'); inArea.style.setProperty('border-top-color', theme.inputBorder, 'important'); }
    var inp = container.querySelector('.chatbot-input'); if (inp) { inp.style.setProperty('background', theme.inputBg, 'important'); inp.style.setProperty('border-color', theme.inputBorder, 'important'); inp.style.setProperty('color', theme.botText, 'important'); }
    var sendB = container.querySelector('.chatbot-send'); if (sendB) { setBg(sendB, theme.buttonBg); sendB.style.setProperty('color', theme.buttonText, 'important'); var svg = sendB.querySelector('svg'); if (svg) svg.style.setProperty('color', theme.buttonText, 'important'); }
    var toggleB = container.querySelector('.chatbot-toggle'); if (toggleB) { toggleB.style.setProperty('background', theme.accent, 'important'); toggleB.style.setProperty('color', theme.buttonText, 'important'); var tSvg = toggleB.querySelector('svg'); if (tSvg) tSvg.style.setProperty('color', theme.buttonText, 'important'); }
    var msgs = container.querySelectorAll('.chatbot-message'); for (var i = 0; i < msgs.length; i++) styleMsg(msgs[i]);
  }
  function styleMsg(msgDiv) {
    var theme = container._theme; if (!theme) return; var bubble = msgDiv.querySelector('.chatbot-bubble'); if (!bubble) return;
    var isUser = msgDiv.classList.contains('user'); setBg(bubble, isUser ? theme.userBubble : theme.botBubble); bubble.style.setProperty('color', isUser ? theme.userText : theme.botText, 'important');
    var kids = bubble.querySelectorAll(isUser ? '*' : '*:not(.chatbot-action-btn):not(.chatbot-action-btn *)'); for (var j = 0; j < kids.length; j++) kids[j].style.setProperty('color', isUser ? theme.userText : theme.botText, 'important');
    var btns = bubble.querySelectorAll('.chatbot-action-btn'); for (var k = 0; k < btns.length; k++) { setBg(btns[k], theme.buttonBg.indexOf('gradient') !== -1 ? theme.buttonBg : theme.accent); btns[k].style.setProperty('color', theme.buttonText, 'important'); var bk = btns[k].querySelectorAll('*'); for (var l = 0; l < bk.length; l++) bk[l].style.setProperty('color', theme.buttonText, 'important'); }
  }
  function escapeHtml(t) { var d = document.createElement('div'); d.textContent = t; return d.innerHTML; }
  function parseActionButtons(text) { var buttons = []; var clean = text; var s, e, content, parts; while ((s = clean.indexOf('[BTN:')) !== -1) { e = clean.indexOf(']', s); if (e === -1) break; content = clean.substring(s + 5, e); parts = content.split('|'); if (parts.length === 3) { buttons.push({ label: parts[0].trim(), url: parts[1].trim(), type: parts[2].trim() }); } clean = clean.substring(0, s) + clean.substring(e + 1); } return { text: clean.trim(), buttons: buttons }; }
  function createButtonsHtml(buttons) { if (!buttons.length) return ''; var theme = container._theme || THEMES['classic-dark']; var html = '<div class="chatbot-action-buttons">'; for (var i = 0; i < buttons.length; i++) { var b = buttons[i]; var icon = b.type==='phone'?'📞':b.type==='email'?'📧':'🔗'; var href = escapeHtml(b.url); var tgt = b.type==='link'?' target="_blank" rel="noopener noreferrer"':''; html += '<a href="'+href+'"'+tgt+' class="chatbot-action-btn" style="background:'+theme.accent+';color:'+theme.buttonText+'"><span class="btn-label">'+icon+' '+escapeHtml(b.label)+'</span></a>'; } return html + '</div>'; }
  function formatMarkdown(text) { if (!text) return ''; text = escapeHtml(text); text = text.replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>'); text = text.replace(/(?<!\\*)\\*([^*]+?)\\*(?!\\*)/g, '<em>$1</em>'); var lines = text.split('\\n'); var result = []; var inList = false; for (var i = 0; i < lines.length; i++) { var line = lines[i]; var li = line.match(/^[-*•]\\s+(.+)/); if (li) { if (!inList) { result.push('<ul>'); inList = true; } result.push('<li>'+li[1]+'</li>'); } else { if (inList) { result.push('</ul>'); inList = false; } if (line.trim()) result.push('<p>'+line+'</p>'); } } if (inList) result.push('</ul>'); return result.join(''); }
  async function init() {
    await loadSettings();
    var iconHtml = settings.icon_image_url ? '<img src="'+settings.icon_image_url+'" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
    container.innerHTML = '<div class="chatbot-wrapper"><button class="chatbot-toggle" style="background:'+settings.icon_background_color+';color:'+settings.icon_color+';">'+iconHtml+'</button><div class="chatbot-window" id="cw-demo-casita"><div class="chatbot-inner-card"><div class="chatbot-header"><h3>'+escapeHtml(settings.bot_name)+'</h3><button class="chatbot-close">&times;</button></div><div class="chatbot-messages" id="cm-demo-casita"></div><div class="chatbot-input-area"><input type="text" class="chatbot-input" id="ci-demo-casita" placeholder="Escribe tu mensaje..." /><button class="chatbot-send" id="cs-demo-casita"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button></div></div></div></div>';
    applyTheme();
    if (settings.custom_css) { var s = document.createElement('style'); s.textContent = settings.custom_css; document.head.appendChild(s); }
    var msgs = document.getElementById('cm-demo-casita');
    addMessage('¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?', 'assistant', msgs);
    var toggle = container.querySelector('.chatbot-toggle'); var win = document.getElementById('cw-demo-casita'); var closeBtn = container.querySelector('.chatbot-close'); var input = document.getElementById('ci-demo-casita'); var sendBtn = document.getElementById('cs-demo-casita');
    var isLoading = false; var history = [{ role: 'assistant', content: '¡Hola! Soy tu asistente virtual. ¿En qué puedo ayudarte hoy?' }];
    toggle.addEventListener('click', function() { win.classList.toggle('open'); });
    closeBtn.addEventListener('click', function() { win.classList.remove('open'); });
    function addMessage(text, role, target) { target = target || msgs; var div = document.createElement('div'); div.className = 'chatbot-message ' + role; var avatarHtml = ''; if (role === 'assistant' && settings.show_avatar && settings.bot_avatar_url) { avatarHtml = '<img src="'+settings.bot_avatar_url+'" style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0" />'; } var bubble = document.createElement('div'); bubble.className = 'chatbot-bubble'; if (role === 'user') { bubble.textContent = text; } else { var p = parseActionButtons(text); bubble.innerHTML = formatMarkdown(p.text) + createButtonsHtml(p.buttons); } if (avatarHtml) { var avDiv = document.createElement('div'); avDiv.innerHTML = avatarHtml; div.appendChild(avDiv.firstChild); } div.appendChild(bubble); target.appendChild(div); target.scrollTop = target.scrollHeight; styleMsg(div); return div; }
    function updateMessage(div, text) { var bubble = div.querySelector('.chatbot-bubble'); if (bubble) { var p = parseActionButtons(text); bubble.innerHTML = formatMarkdown(p.text) + createButtonsHtml(p.buttons); styleMsg(div); msgs.scrollTop = msgs.scrollHeight; } }
    async function sendMessage() { var msg = input.value.trim(); if (!msg || isLoading) return; history.push({ role: 'user', content: msg }); addMessage(msg, 'user'); input.value = ''; isLoading = true; sendBtn.disabled = true; var loadDiv = document.createElement('div'); loadDiv.className = 'chatbot-message assistant'; loadDiv.innerHTML = '<div class="chatbot-bubble"><div class="chatbot-loading"><div class="chatbot-loading-dot"></div><div class="chatbot-loading-dot"></div><div class="chatbot-loading-dot"></div></div></div>'; msgs.appendChild(loadDiv); msgs.scrollTop = msgs.scrollHeight; styleMsg(loadDiv); try { var resp = await fetch(SUPABASE_URL + '/functions/v1/chat-with-docs', { method: 'POST', headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + SUPABASE_ANON_KEY }, body: JSON.stringify({ messages: history, chatbot_id: CHATBOT_ID }) }); loadDiv.remove(); if (!resp.ok || !resp.body) throw new Error('Stream failed'); var reader = resp.body.getReader(); var decoder = new TextDecoder(); var buf = ''; var done = false; var content = ''; var aDiv = addMessage('', 'assistant'); while (!done) { var chunk = await reader.read(); if (chunk.done) break; buf += decoder.decode(chunk.value, { stream: true }); var ni; while ((ni = buf.indexOf('\\n')) !== -1) { var line = buf.slice(0, ni); buf = buf.slice(ni + 1); if (line.endsWith('\\r')) line = line.slice(0, -1); if (line.startsWith(':') || !line.trim() || !line.startsWith('data: ')) continue; var json = line.slice(6).trim(); if (json === '[DONE]') { done = true; break; } try { var parsed = JSON.parse(json); var c = (parsed.candidates && parsed.candidates[0] && parsed.candidates[0].content && parsed.candidates[0].content.parts && parsed.candidates[0].content.parts[0] && parsed.candidates[0].content.parts[0].text) || (parsed.choices && parsed.choices[0] && parsed.choices[0].delta && parsed.choices[0].delta.content); if (c) { content += c; updateMessage(aDiv, content); } } catch(e) { buf = line + '\\n' + buf; break; } } } history.push({ role: 'assistant', content: content }); } catch(e) { loadDiv.remove(); var errMsg = 'Lo siento, no pude conectarme. Intenta de nuevo.'; addMessage(errMsg, 'assistant'); history.push({ role: 'assistant', content: errMsg }); } finally { isLoading = false; sendBtn.disabled = false; } }
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', function(e) { if (e.key === 'Enter') sendMessage(); });
  }
  init();
})();
    `;
    document.body.appendChild(script);

    return () => {
      // Cleanup: show default chatbot again, remove demo chatbot
      if (defaultChatbot) defaultChatbot.style.display = '';
      const demoContainer = document.getElementById(containerId);
      if (demoContainer) demoContainer.remove();
      link.remove();
      script.remove();
    };
  }, []);
  const [reservaForm, setReservaForm] = useState({
    nombre: '', email: '', telefono: '', checkin: '', checkout: '', huespedes: '2', habitacion: '', mensaje: ''
  });

  const handleReservaChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setReservaForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleReservaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias! Su solicitud de reserva ha sido recibida. Nos pondremos en contacto en menos de 24 horas.');
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <Helmet>
        <title>La Casita Beneroso | Alojamiento Rural con Encanto</title>
        <meta name="description" content="Alojamiento rural con encanto en plena naturaleza. Habitaciones acogedoras, desayunos caseros y actividades al aire libre. Reserva tu escapada." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <button onClick={() => scrollTo('#inicio')} className="text-xl font-bold" style={{ color: '#5B3A29' }}>
            🏡 La Casita Beneroso
          </button>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm font-medium hover:opacity-70 transition" style={{ color: '#5B3A29' }}>
                {l.label}
              </button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: '#5B3A29' }}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full text-left py-2 text-sm" style={{ color: '#5B3A29' }}>
                {l.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="La Casita Beneroso" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-3xl"
        >
          <p className="text-lg md:text-xl tracking-[0.3em] uppercase mb-4 opacity-90">Alojamiento Rural con Encanto</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Georgia', serif" }}>La Casita Beneroso</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">Descubre la paz del campo, el calor de la chimenea y los sabores de la tierra en un rincón único</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo('#reservar')} className="px-8 py-3 rounded-full text-white font-semibold transition hover:opacity-90" style={{ backgroundColor: '#5B3A29' }}>
              Reservar Ahora
            </button>
            <button onClick={() => scrollTo('#habitaciones')} className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/20 transition">
              Ver Habitaciones
            </button>
          </div>
        </motion.div>
        <button onClick={() => scrollTo('#habitaciones')} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Intro */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FAF6F1' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Bienvenidos</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#5B3A29' }}>Un refugio donde el tiempo se detiene</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#6B5B4E' }}>
              Enclavada entre colinas verdes y olivares centenarios, La Casita Beneroso es una antigua casa de campo restaurada con 
              mimo, conservando su esencia rústica y dotándola de todas las comodidades modernas. Aquí, cada amanecer trae consigo el 
              canto de los pájaros, el aroma del pan recién horneado y la promesa de un día sin prisas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms */}
      <section id="habitaciones" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Alojamiento</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#5B3A29' }}>Nuestras Habitaciones</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <motion.div 
                key={room.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white border"
                style={{ borderColor: '#E8DDD0' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm font-semibold" style={{ backgroundColor: '#5B3A29' }}>
                    desde {room.price}/noche
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2" style={{ color: '#5B3A29' }}>{room.name}</h3>
                  <p className="text-sm mb-4" style={{ color: '#6B5B4E' }}>{room.description}</p>
                  <div className="flex items-center gap-2 mb-4 text-sm" style={{ color: '#8B6F47' }}>
                    <Users size={16} /> <span>{room.capacity}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map(f => (
                      <span key={f} className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#FAF6F1', color: '#5B3A29' }}>{f}</span>
                    ))}
                  </div>
                  <button onClick={() => scrollTo('#reservar')} className="w-full py-2.5 rounded-full text-white font-semibold text-sm transition hover:opacity-90" style={{ backgroundColor: '#5B3A29' }}>
                    Reservar Esta Habitación
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-20 px-4" style={{ backgroundColor: '#FAF6F1' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Comodidades</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#5B3A29' }}>Servicios e Instalaciones</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FAF6F1' }}>
                  <s.icon size={28} style={{ color: '#5B3A29' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#5B3A29' }}>{s.title}</h3>
                <p className="text-sm" style={{ color: '#6B5B4E' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galeria" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Imágenes</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#5B3A29' }}>Galería Fotográfica</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-xl cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Galería ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" style={{ minHeight: i === 0 ? '400px' : '200px' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Vista ampliada" className="max-w-full max-h-[90vh] rounded-lg" />
          <button className="absolute top-6 right-6 text-white" onClick={() => setSelectedImage(null)}><X size={32} /></button>
        </div>
      )}

      {/* About */}
      <section id="nosotros" className="py-20 px-4" style={{ backgroundColor: '#FAF6F1' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={diningImg} alt="Sobre nosotros" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Nuestra Historia</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#5B3A29' }}>Sobre Nosotros</h2>
            <p className="mb-4 leading-relaxed" style={{ color: '#6B5B4E' }}>
              La Casita Beneroso nació del sueño de una familia que decidió restaurar la casa de sus abuelos y compartirla 
              con el mundo. Cada piedra, cada viga y cada rincón cuenta una historia de generaciones.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: '#6B5B4E' }}>
              Hoy, tras años de cuidadosa restauración, ofrecemos un espacio donde la autenticidad del campo se 
              combina con el confort que mereces. Cultivamos nuestro propio huerto, elaboramos conservas artesanales 
              y nos esforzamos porque cada huésped se sienta parte de nuestra familia.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Heart, label: 'Con amor', sub: 'Atención personalizada' },
                { icon: Shield, label: 'Confianza', sub: '+200 reseñas positivas' },
                { icon: Clock, label: 'Desde 2015', sub: 'Años de experiencia' },
              ].map(item => (
                <div key={item.label} className="text-center">
                  <item.icon size={24} className="mx-auto mb-2" style={{ color: '#5B3A29' }} />
                  <p className="text-sm font-bold" style={{ color: '#5B3A29' }}>{item.label}</p>
                  <p className="text-xs" style={{ color: '#8B6F47' }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Opiniones</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#5B3A29' }}>Lo Que Dicen Nuestros Huéspedes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={t.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border" style={{ borderColor: '#E8DDD0', backgroundColor: '#FDFBF8' }}
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => <Star key={j} size={16} fill="#D4A853" color="#D4A853" />)}
                </div>
                <p className="text-sm mb-4 italic" style={{ color: '#6B5B4E' }}>"{t.text}"</p>
                <p className="text-sm font-bold" style={{ color: '#5B3A29' }}>— {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section id="reservar" className="py-20 px-4" style={{ backgroundColor: '#5B3A29' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#D4A853' }}>Reservas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Reserve Su Estancia</h2>
            <p className="text-white/80">Complete el formulario y le confirmaremos la disponibilidad en menos de 24 horas</p>
          </div>
          <form onSubmit={handleReservaSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Nombre completo *</label>
                <input name="nombre" required value={reservaForm.nombre} onChange={handleReservaChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Email *</label>
                <input name="email" type="email" required value={reservaForm.email} onChange={handleReservaChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Teléfono</label>
                <input name="telefono" value={reservaForm.telefono} onChange={handleReservaChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Habitación preferida</label>
                <select name="habitacion" value={reservaForm.habitacion} onChange={handleReservaChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }}>
                  <option value="">Seleccione...</option>
                  {rooms.map(r => <option key={r.name} value={r.name}>{r.name} ({r.price}/noche)</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Fecha de entrada *</label>
                <input name="checkin" type="date" required value={reservaForm.checkin} onChange={handleReservaChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Fecha de salida *</label>
                <input name="checkout" type="date" required value={reservaForm.checkout} onChange={handleReservaChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Número de huéspedes</label>
                <select name="huespedes" value={reservaForm.huespedes} onChange={handleReservaChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }}>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1?'persona':'personas'}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Comentarios o peticiones especiales</label>
              <textarea name="mensaje" rows={3} value={reservaForm.mensaje} onChange={handleReservaChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
            </div>
            <button type="submit" className="mt-6 w-full py-3 rounded-full text-white font-semibold text-lg transition hover:opacity-90" style={{ backgroundColor: '#5B3A29' }}>
              Solicitar Reserva
            </button>
          </form>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Contacto</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#5B3A29' }}>¿Tiene Alguna Pregunta?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: MapPin, title: 'Dirección', info: 'Camino de Beneroso s/n, 29100\nMálaga, Andalucía' },
              { icon: Phone, title: 'Teléfono', info: '+34 612 345 678\nLlamadas y WhatsApp' },
              { icon: Mail, title: 'Email', info: 'info@casitabeneroso.com\nReservas y consultas' },
            ].map(c => (
              <div key={c.title} className="p-8 rounded-2xl" style={{ backgroundColor: '#FAF6F1' }}>
                <c.icon size={32} className="mx-auto mb-4" style={{ color: '#5B3A29' }} />
                <h3 className="font-bold mb-2" style={{ color: '#5B3A29' }}>{c.title}</h3>
                <p className="text-sm whitespace-pre-line" style={{ color: '#6B5B4E' }}>{c.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500 text-sm">📍 Mapa interactivo — Integración con Google Maps disponible</p>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 text-center text-white" style={{ backgroundColor: '#3A2518' }}>
        <p className="text-xl font-bold mb-2">🏡 La Casita Beneroso</p>
        <p className="text-sm opacity-70 mb-4">Alojamiento Rural con Encanto · Málaga, Andalucía</p>
        <p className="text-xs opacity-50">© {new Date().getFullYear()} La Casita Beneroso. Todos los derechos reservados.</p>
        <p className="text-xs opacity-40 mt-2">Demo creada por <span className="font-semibold">LIVS</span> — Soluciones Web con IA</p>
      </footer>
    </div>
  );
};

export default CasitaBeneroso;
