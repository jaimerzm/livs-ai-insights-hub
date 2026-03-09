import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Star, Wifi, Car, Coffee, TreePine, Mountain, UtensilsCrossed, Users, ChevronDown, Menu, X, Heart, Shield, Clock, PawPrint, Ban, Volume2, CalendarCheck, MessageCircle, ExternalLink, Navigation, BedDouble, Snowflake } from 'lucide-react';
import { motion } from 'framer-motion';

import heroImg from '@/assets/demo/casita-beneroso-hero.jpg';
import room1Img from '@/assets/demo/casita-room1.jpg';
import room2Img from '@/assets/demo/casita-room2.jpg';
import room3Img from '@/assets/demo/casita-room3.jpg';
import natureImg from '@/assets/demo/casita-nature.jpg';
import diningImg from '@/assets/demo/casita-dining.jpg';
import poolImg from '@/assets/demo/casita-pool.jpg';

const PHONE = '+34 675 76 31 92';
const PHONE_CLEAN = '34675763192';
const ADDRESS = 'C. Juan María De Castro, 12, 11180 Alcalá de los Gazules, Cádiz';
const EMAIL = 'info@casitabeneroso.com';
const WHATSAPP_MSG = encodeURIComponent('Hola, me gustaría consultar disponibilidad en La Casita Beneroso.');
const MAPS_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.0!2d-5.7261!3d36.4617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDI3JzQyLjEiTiA1wrA0Myc0MC4wIlc!5e0!3m2!1ses!2ses!4v1700000000000';
const MAPS_LINK = 'https://maps.app.goo.gl/XN6uNtp1cVBL5j3dA';

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Sobre Nosotros', href: '#nosotros' },
  { label: 'Información', href: '#info' },
  { label: 'Contacto', href: '#contacto' },
];

const rooms = [
  {
    name: 'Suite El Olivo',
    image: room1Img,
    description: 'Habitación doble con vigas de madera originales, baño privado y vistas al olivar. Perfecta para parejas que buscan romanticismo y tranquilidad.',
    capacity: '2 personas',
    price: '85€',
    features: ['Cama King Size', 'Baño privado', 'Vistas al olivar', 'Calefacción', 'WiFi', 'Ropa de cama incluida'],
  },
  {
    name: 'Habitación La Piedra',
    image: room2Img,
    description: 'Encantadora habitación con muros de piedra vista, mobiliario rústico de época y ventana panorámica con vistas al valle.',
    capacity: '2 personas',
    price: '75€',
    features: ['Cama doble', 'Piedra vista', 'Vistas al valle', 'Armario antiguo', 'WiFi', 'Toallas incluidas'],
  },
  {
    name: 'Suite Familiar La Chimenea',
    image: room3Img,
    description: 'Amplia suite con chimenea de leña, zona de estar y capacidad para toda la familia. El refugio perfecto para noches frías.',
    capacity: '4 personas',
    price: '120€',
    features: ['Chimenea', 'Zona de estar', 'Cama doble + sofá cama', 'Baño completo', 'WiFi', 'Calefacción'],
  },
];

const services = [
  { icon: Coffee, title: 'Desayuno Casero', desc: 'Productos locales y recetas tradicionales cada mañana, incluido en el precio' },
  { icon: Wifi, title: 'WiFi Gratuito', desc: 'Conexión de alta velocidad en todas las instalaciones' },
  { icon: Car, title: 'Parking Privado', desc: 'Aparcamiento gratuito dentro de la finca' },
  { icon: TreePine, title: 'Jardín y Huerto', desc: 'Pasea por nuestros jardines y recoge frutas del huerto' },
  { icon: Mountain, title: 'Rutas de Senderismo', desc: 'Guías y mapas de rutas por el Parque Natural de los Alcornocales' },
  { icon: UtensilsCrossed, title: 'Cenas Especiales', desc: 'Bajo petición, cenas con productos de la tierra (15€/persona)' },
  { icon: PawPrint, title: 'Pet Friendly', desc: 'Tus mascotas son bienvenidas (consultar condiciones)' },
  { icon: BedDouble, title: 'Cuna y Trona', desc: 'Disponibles sin coste adicional para los más pequeños' },
  { icon: Snowflake, title: 'Aire Acondicionado', desc: 'Climatización en todas las habitaciones' },
];

const gallery = [heroImg, room1Img, room2Img, room3Img, natureImg, diningImg, poolImg];

const testimonials = [
  { name: 'María y Carlos', text: 'Un lugar mágico. Nos sentimos como en casa pero rodeados de naturaleza. Volveremos seguro.', rating: 5, date: 'Octubre 2024' },
  { name: 'Familia López', text: 'Los niños disfrutaron muchísimo del huerto y los animales. Los desayunos son espectaculares.', rating: 5, date: 'Agosto 2024' },
  { name: 'Ana García', text: 'Perfecto para desconectar. El silencio, las vistas y la amabilidad de los anfitriones. 10/10.', rating: 5, date: 'Septiembre 2024' },
  { name: 'Peter & Sarah', text: 'A hidden gem in Andalusia. The hosts are incredibly warm and the setting is breathtaking.', rating: 5, date: 'July 2024' },
];

const nearbyAttractions = [
  { name: 'Parque Natural de los Alcornocales', distance: '0 km (dentro del parque)', type: 'Naturaleza' },
  { name: 'Alcalá de los Gazules (centro)', distance: '2 min en coche', type: 'Pueblo' },
  { name: 'Ruta de los Pueblos Blancos', distance: '15 min', type: 'Turismo' },
  { name: 'Playa de Bolonia (Tarifa)', distance: '45 min', type: 'Playa' },
  { name: 'Jerez de la Frontera', distance: '50 min', type: 'Ciudad' },
  { name: 'Cádiz capital', distance: '1h', type: 'Ciudad' },
  { name: 'Gibraltar', distance: '1h', type: 'Turismo' },
  { name: 'Ronda', distance: '1h 15 min', type: 'Pueblo' },
];

const houseRules = [
  { icon: CalendarCheck, title: 'Check-in / Check-out', desc: 'Check-in: 15:00 - 21:00 · Check-out: antes de las 12:00. Horarios flexibles bajo petición.' },
  { icon: Ban, title: 'Política de cancelación', desc: 'Cancelación gratuita hasta 7 días antes. Cancelaciones posteriores: 50% del importe. No-show: 100%.' },
  { icon: PawPrint, title: 'Mascotas', desc: 'Se admiten mascotas pequeñas y medianas (máx. 15kg). Consultar al reservar. Suplemento de 10€/noche.' },
  { icon: Volume2, title: 'Normas de convivencia', desc: 'Silencio a partir de las 23:00. No se permite fumar en el interior. Zona de fumadores en el jardín.' },
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

    // Position chatbot above WhatsApp button
    const style = document.createElement('style');
    style.textContent = `
      #demo-chatbot-casita .chatbot-wrapper { position: fixed !important; bottom: 90px !important; right: 24px !important; z-index: 9998 !important; }
      #demo-chatbot-casita .chatbot-toggle { position: relative !important; bottom: auto !important; right: auto !important; }
      #demo-chatbot-casita .chatbot-window { bottom: 70px !important; right: 0 !important; }
    `;
    document.head.appendChild(style);

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
      if (defaultChatbot) defaultChatbot.style.display = '';
      const demoContainer = document.getElementById(containerId);
      if (demoContainer) demoContainer.remove();
      link.remove();
      script.remove();
      style.remove();
    };
  }, []);

  const [contactForm, setContactForm] = useState({
    nombre: '', email: '', telefono: '', checkin: '', checkout: '', huespedes: '2', habitacion: '', mensaje: ''
  });

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setContactForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, me gustaría consultar disponibilidad:\n- Nombre: ${contactForm.nombre}\n- Entrada: ${contactForm.checkin}\n- Salida: ${contactForm.checkout}\n- Huéspedes: ${contactForm.huespedes}\n- Habitación: ${contactForm.habitacion || 'Sin preferencia'}\n${contactForm.mensaje ? '- Mensaje: ' + contactForm.mensaje : ''}`;
    window.open(`https://wa.me/${PHONE_CLEAN}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <Helmet>
        <title>La Casita Beneroso | Alojamiento Rural en Alcalá de los Gazules, Cádiz</title>
        <meta name="description" content="Alojamiento rural con encanto en Alcalá de los Gazules, Cádiz. Rodeado del Parque Natural de los Alcornocales. Desayuno casero incluido, parking gratuito. Reserva directa sin comisiones." />
        <meta name="robots" content="noindex, nofollow" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "Alojamiento Rural La Casita Beneroso",
          "address": { "@type": "PostalAddress", "streetAddress": "C. Juan María De Castro, 12", "addressLocality": "Alcalá de los Gazules", "postalCode": "11180", "addressRegion": "Cádiz", "addressCountry": "ES" },
          "telephone": PHONE,
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "28" },
          "priceRange": "75€ - 120€"
        })}</script>
      </Helmet>

      {/* Navbar with phone */}
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
            <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: '#5B3A29', color: '#FFF' }}>
              <Phone size={14} /> {PHONE}
            </a>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <a href={`tel:${PHONE}`} className="p-2 rounded-full" style={{ backgroundColor: '#5B3A29', color: '#FFF' }}>
              <Phone size={18} />
            </a>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: '#5B3A29' }}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
            {NAV_LINKS.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full text-left py-2 text-sm" style={{ color: '#5B3A29' }}>
                {l.label}
              </button>
            ))}
            <a href={`tel:${PHONE}`} className="block w-full text-center py-2.5 rounded-full text-white font-semibold text-sm mt-2" style={{ backgroundColor: '#5B3A29' }}>
              📞 Llamar ahora: {PHONE}
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="La Casita Beneroso - Alojamiento Rural en Alcalá de los Gazules" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4 max-w-3xl"
        >
          <p className="text-lg md:text-xl tracking-[0.3em] uppercase mb-4 opacity-90">Alcalá de los Gazules · Cádiz</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "'Georgia', serif" }}>La Casita Beneroso</h1>
          <p className="text-base md:text-lg mb-2 opacity-90 flex items-center justify-center gap-2">
            <Star size={18} fill="#D4A853" color="#D4A853" /> <span className="font-semibold">5.0</span> en Google · Parque Natural de los Alcornocales
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">Desconecta en plena naturaleza. Desayuno casero incluido, trato directo y sin comisiones.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${PHONE_CLEAN}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold transition hover:opacity-90 text-lg" style={{ backgroundColor: '#25D366' }}>
              <MessageCircle size={22} /> Consultar Disponibilidad
            </a>
            <button onClick={() => scrollTo('#habitaciones')} className="px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white/20 transition">
              Ver Habitaciones
            </button>
          </div>
          <p className="mt-4 text-sm opacity-75">📞 También puede llamar: {PHONE}</p>
        </motion.div>
        <button onClick={() => scrollTo('#habitaciones')} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Direct Booking Banner */}
      <section className="py-4 px-4 text-center" style={{ backgroundColor: '#5B3A29' }}>
        <p className="text-white text-sm md:text-base font-medium">
          🏷️ <strong>Reserve directo y ahorre</strong> — Sin intermediarios, sin comisiones. Trato personal con el propietario.
        </p>
      </section>

      {/* Intro */}
      <section className="py-20 px-4" style={{ backgroundColor: '#FAF6F1' }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Bienvenidos</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#5B3A29' }}>Un refugio donde el tiempo se detiene</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#6B5B4E' }}>
              Enclavada en el corazón de Alcalá de los Gazules, rodeada del Parque Natural de los Alcornocales, 
              La Casita Beneroso es una antigua casa de campo restaurada con mimo, conservando su esencia rústica 
              y dotándola de todas las comodidades modernas. Aquí, cada amanecer trae consigo el canto de los pájaros, 
              el aroma del pan recién horneado y la promesa de un día sin prisas.
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
            <p className="mt-3 text-sm" style={{ color: '#6B5B4E' }}>Desayuno casero incluido en todas las habitaciones</p>
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
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
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
                  <a 
                    href={`https://wa.me/${PHONE_CLEAN}?text=${encodeURIComponent(`Hola, me interesa la habitación "${room.name}" (${room.price}/noche). ¿Está disponible?`)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full text-white font-semibold text-sm transition hover:opacity-90" 
                    style={{ backgroundColor: '#25D366' }}
                  >
                    <MessageCircle size={16} /> Consultar Disponibilidad
                  </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div 
                key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#FAF6F1' }}>
                  <s.icon size={24} style={{ color: '#5B3A29' }} />
                </div>
                <h3 className="text-base font-bold mb-1" style={{ color: '#5B3A29' }}>{s.title}</h3>
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
                <img src={img} alt={`La Casita Beneroso - Foto ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" loading="lazy" style={{ minHeight: i === 0 ? '400px' : '200px' }} />
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
            <img src={diningImg} alt="Sobre nosotros - La Casita Beneroso" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Nuestra Historia</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#5B3A29' }}>Quiénes Somos</h2>
            <p className="mb-4 leading-relaxed" style={{ color: '#6B5B4E' }}>
              La Casita Beneroso nació del sueño de una familia que decidió restaurar la casa de sus abuelos y compartirla 
              con el mundo. Cada piedra, cada viga y cada rincón cuenta una historia de generaciones.
            </p>
            <p className="mb-6 leading-relaxed" style={{ color: '#6B5B4E' }}>
              Hoy, tras años de cuidadosa restauración, ofrecemos un espacio donde la autenticidad del campo gaditano se 
              combina con el confort que mereces. Cultivamos nuestro propio huerto, elaboramos conservas artesanales 
              y nos esforzamos porque cada huésped se sienta parte de nuestra familia.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Heart, label: 'Con amor', sub: 'Atención personalizada' },
                { icon: Star, label: '5.0 ★', sub: 'en Google Maps' },
                { icon: Clock, label: 'Experiencia', sub: 'Años acogiendo viajeros' },
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
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Opiniones reales</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#5B3A29' }}>Lo Que Dicen Nuestros Huéspedes</h2>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={20} fill="#D4A853" color="#D4A853" />)}</div>
              <span className="font-bold text-lg" style={{ color: '#5B3A29' }}>5.0</span>
              <span className="text-sm" style={{ color: '#6B5B4E' }}>en Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <p className="text-sm mb-4 italic leading-relaxed" style={{ color: '#6B5B4E' }}>"{t.text}"</p>
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold" style={{ color: '#5B3A29' }}>— {t.name}</p>
                  <p className="text-xs" style={{ color: '#8B6F47' }}>{t.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: '#5B3A29' }}>
              Ver todas las reseñas en Google Maps <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Info Section: House Rules + Nearby + How to Get There */}
      <section id="info" className="py-20 px-4" style={{ backgroundColor: '#FAF6F1' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#8B6F47' }}>Información práctica</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#5B3A29' }}>Todo Lo Que Necesita Saber</h2>
          </div>

          {/* House Rules */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#5B3A29' }}>📋 Normas de la Casa</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {houseRules.map((rule, i) => (
                <motion.div 
                  key={rule.title}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FAF6F1' }}>
                    <rule.icon size={20} style={{ color: '#5B3A29' }} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1" style={{ color: '#5B3A29' }}>{rule.title}</h4>
                    <p className="text-sm" style={{ color: '#6B5B4E' }}>{rule.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Nearby Attractions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#5B3A29' }}>📍 Qué Ver Cerca</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyAttractions.map((place, i) => (
                <motion.div 
                  key={place.name}
                  initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-xl p-5 shadow-sm"
                >
                  <span className="text-xs px-2 py-0.5 rounded-full mb-2 inline-block" style={{ backgroundColor: '#FAF6F1', color: '#8B6F47' }}>{place.type}</span>
                  <h4 className="font-bold text-sm mb-1" style={{ color: '#5B3A29' }}>{place.name}</h4>
                  <p className="text-xs flex items-center gap-1" style={{ color: '#6B5B4E' }}>
                    <Navigation size={12} /> {place.distance}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How to Get There */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#5B3A29' }}>🚗 Cómo Llegar</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <Car size={28} className="mx-auto mb-3" style={{ color: '#5B3A29' }} />
                <h4 className="font-bold mb-2" style={{ color: '#5B3A29' }}>En coche</h4>
                <p className="text-sm" style={{ color: '#6B5B4E' }}>Desde Cádiz: 1h por A-381. Desde Sevilla: 1h 30 min por A-375. Parking gratuito en la finca.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <MapPin size={28} className="mx-auto mb-3" style={{ color: '#5B3A29' }} />
                <h4 className="font-bold mb-2" style={{ color: '#5B3A29' }}>Dirección</h4>
                <p className="text-sm mb-2" style={{ color: '#6B5B4E' }}>{ADDRESS}</p>
                <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-medium inline-flex items-center gap-1 hover:underline" style={{ color: '#5B3A29' }}>
                  Abrir en Google Maps <ExternalLink size={12} />
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm text-center">
                <Phone size={28} className="mx-auto mb-3" style={{ color: '#5B3A29' }} />
                <h4 className="font-bold mb-2" style={{ color: '#5B3A29' }}>¿Se pierde?</h4>
                <p className="text-sm mb-2" style={{ color: '#6B5B4E' }}>No se preocupe, llámenos y le guiamos hasta la puerta.</p>
                <a href={`tel:${PHONE}`} className="text-sm font-semibold hover:underline" style={{ color: '#5B3A29' }}>{PHONE}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="w-full">
        <iframe 
          src={MAPS_EMBED}
          width="100%" 
          height="350" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación de La Casita Beneroso en Google Maps"
        />
      </section>

      {/* Contact / Reservation */}
      <section id="contacto" className="py-20 px-4" style={{ backgroundColor: '#5B3A29' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.2em] uppercase mb-3" style={{ color: '#D4A853' }}>Contacto y Reservas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Consulte Disponibilidad</h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Contacte directamente con nosotros por WhatsApp, teléfono o el formulario. 
              <strong> Sin intermediarios, sin comisiones.</strong> Le respondemos en menos de 1 hora.
            </p>
          </div>

          {/* Quick contact buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <a href={`https://wa.me/${PHONE_CLEAN}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 rounded-xl text-white font-semibold text-lg transition hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}>
              <MessageCircle size={24} /> WhatsApp
            </a>
            <a href={`tel:${PHONE}`} className="flex items-center justify-center gap-3 py-4 rounded-xl text-white font-semibold text-lg border-2 border-white/30 hover:bg-white/10 transition">
              <Phone size={24} /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center justify-center gap-3 py-4 rounded-xl text-white font-semibold text-lg border-2 border-white/30 hover:bg-white/10 transition">
              <Mail size={24} /> Email
            </a>
          </div>

          {/* Contact form that sends to WhatsApp */}
          <form onSubmit={handleContactSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-1 text-center" style={{ color: '#5B3A29' }}>Formulario de consulta</h3>
            <p className="text-sm text-center mb-6" style={{ color: '#6B5B4E' }}>Al enviar, se abrirá WhatsApp con su consulta lista para enviar</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Nombre completo *</label>
                <input name="nombre" required value={contactForm.nombre} onChange={handleContactChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Email</label>
                <input name="email" type="email" value={contactForm.email} onChange={handleContactChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Teléfono</label>
                <input name="telefono" value={contactForm.telefono} onChange={handleContactChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Habitación preferida</label>
                <select name="habitacion" value={contactForm.habitacion} onChange={handleContactChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }}>
                  <option value="">Sin preferencia</option>
                  {rooms.map(r => <option key={r.name} value={r.name}>{r.name} ({r.price}/noche)</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Fecha de entrada *</label>
                <input name="checkin" type="date" required value={contactForm.checkin} onChange={handleContactChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Fecha de salida *</label>
                <input name="checkout" type="date" required value={contactForm.checkout} onChange={handleContactChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Número de huéspedes</label>
                <select name="huespedes" value={contactForm.huespedes} onChange={handleContactChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }}>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1?'persona':'personas'}</option>)}
                </select>
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-medium mb-1" style={{ color: '#5B3A29' }}>Comentarios o peticiones especiales</label>
              <textarea name="mensaje" rows={3} value={contactForm.mensaje} onChange={handleContactChange} className="w-full px-4 py-2.5 rounded-lg border text-sm" style={{ borderColor: '#E8DDD0' }} placeholder="Ej: Viajamos con mascota, necesitamos cuna..." />
            </div>
            <button type="submit" className="mt-6 w-full py-3 rounded-full text-white font-semibold text-lg transition hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: '#25D366' }}>
              <MessageCircle size={22} /> Enviar Consulta por WhatsApp
            </button>
            <p className="text-center text-xs mt-3" style={{ color: '#8B6F47' }}>
              También puede llamar directamente al <a href={`tel:${PHONE}`} className="font-semibold underline" style={{ color: '#5B3A29' }}>{PHONE}</a>
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 text-center text-white" style={{ backgroundColor: '#3A2518' }}>
        <p className="text-xl font-bold mb-2">🏡 La Casita Beneroso</p>
        <p className="text-sm opacity-80 mb-1">Alojamiento Rural con Encanto</p>
        <p className="text-sm opacity-70 mb-1">{ADDRESS}</p>
        <p className="text-sm opacity-70 mb-4">
          <a href={`tel:${PHONE}`} className="hover:underline">{PHONE}</a> · <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <a href={`https://wa.me/${PHONE_CLEAN}?text=${WHATSAPP_MSG}`} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full text-sm font-semibold text-white flex items-center gap-2 hover:opacity-90 transition" style={{ backgroundColor: '#25D366' }}>
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full text-sm font-semibold text-white flex items-center gap-2 border border-white/30 hover:bg-white/10 transition">
            <MapPin size={16} /> Google Maps
          </a>
        </div>
        <p className="text-xs opacity-50">© {new Date().getFullYear()} La Casita Beneroso. Todos los derechos reservados.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${PHONE_CLEAN}?text=${WHATSAPP_MSG}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} color="white" />
      </a>
    </div>
  );
};

export default CasitaBeneroso;
