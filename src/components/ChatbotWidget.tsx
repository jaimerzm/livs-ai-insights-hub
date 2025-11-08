import { useEffect } from 'react';

export const ChatbotWidget = () => {
  useEffect(() => {
    // Add KaTeX CSS
    const katexLink = document.createElement('link');
    katexLink.rel = 'stylesheet';
    katexLink.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css';
    document.head.appendChild(katexLink);

    // Add Marked.js
    const markedScript = document.createElement('script');
    markedScript.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    document.body.appendChild(markedScript);

    // Add KaTeX main script
    const katexScript = document.createElement('script');
    katexScript.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js';
    katexScript.defer = true;
    document.body.appendChild(katexScript);

    // Add KaTeX auto-render
    const katexAutoRender = document.createElement('script');
    katexAutoRender.src = 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js';
    katexAutoRender.defer = true;
    document.body.appendChild(katexAutoRender);

    const scriptContent = `
const K='AIzaSyDB_uI5M6-aTFNVQhW0N2ZqWTVFc17exU0',C=\`### **LIVS: Company Profile**

*   **Name:** LIVS
*   **Website:** \\\`https://livs.es/\\\`
*   **Activity:** AI consulting, training, and implementation for businesses; corporate website creation and improvement.
*   **Mission:** To help companies use AI for growth and efficiency through innovative, personalized solutions.
*   **Legal:**
    *   **Ownership:** Society created by two founding partners.
    *   **Jurisdiction:** Spain. Governed by Spanish law.
    *   **Compliance:** Adheres to LSSI-CE (Law 34/2002), GDPR (EU 2016/679), and LOPDGDD (Law 3/2018).
*   **Status:** A new company seeking its first client testimonials ("iniciando nuestro camino").

---

### **Services & Pricing**

*   **Primary Offering:** AI Consulting for businesses, including needs analysis, custom strategy implementation, and team training.
*   **Training Method:** "Aprendizaje por Videollamada" - live, interactive, personalized virtual training sessions.
*   **Service Offer: "Pack Completo"**
    *   **Price:** €400 initial fee + €90/month optional maintenance.
    *   **Stated Value:** €1200 + €149/month.
    *   **Includes:** Full initial implementation, monthly system maintenance, updates, priority support, and personalized team training.
*   **Specific AI Solutions Offered:**
    *   **Chatbot Empresarial:** Custom 24/7 chatbot with company-specific data.
    *   **Gestor de Reservas:** Automated booking management system.
    *   **Automatización de llamadas:** Automated management of incoming/outgoing calls with logging.
    *   **Gestor de Correos:** Automatic email management, classification, and response generation.
    *   **Automatización de Redes Sociales:** Automated user replies, post description generation, and content management.
    *   **Página Web:** Development of professional landing pages and conversion-optimized websites.

---

### **Claimed Benefits & Statistics**

*   **LIVS Client Averages:**
    *   **Efficiency Increase:** +85%
    *   **Operating Cost Reduction:** -40%
    *   **Productivity Increase:** up to +85%
    *   **Decision-Making Improvement:** +60% accuracy, +30% additional precision.
    *   **Customer Satisfaction:** 90% of end-users report higher satisfaction.
*   **Sourced Industry Statistics:**
    *   **McKinsey:** 63% of companies using AI report increased revenue.
    *   **Deloitte:** AI automation can save 20-30 hours per employee per week.
    *   **BCG:** AI-adopting companies are 35% more likely to outperform competitors.
    *   **Gartner, McKinsey & IDC (2025):** Sourced for strategic benefits like error reduction, scalability, and risk detection.

---

### **Professional Certifications**

*   **Provider:** All listed certifications were completed via Santander Open Academy.
*   **Google:** "Inteligencia Artificial y productividad" (22h, 8 modules). Completed: Jan 27, 2025. S/N: OA-2025-041100100906.
*   **Microsoft:** "Copilot" (8h, 2 modules). Completed: Apr 22, 2025. S/N: OA-2025-042200103255Z.
*   **MIT:** "IA Generativa" (28h, 8 modules). Completed: Feb 2, 2025. S/N: OA-2025-020200783310.
*   **OpenAI:** "Curso de ChatGPT" (8h, 2 modules). Completed: Feb 3, 2025. S/N: OA-2025-020300786108.
*   **Microsoft:** "Prompting responsable: maximiza la IA en tu negocio" (12h, 2 modules). Completed: Apr 22, 2025. S/N: OA-2025-042200103264Z.

---

### **Referenced External AI Case Studies**

*   **Zara:** Reduced excess inventory by 50%.
*   **Banco Santander:** Decreased fraud by 70%.
*   **Stitch Fix:** Grew from a startup to a multi-billion dollar company using recommendation algorithms.
*   **Lemonade:** Processes insurance claims in seconds.
*   **Duolingo:** Uses AI for personalized language education.

---

### **Blog Content**

*   **Authors:** Equipo LIVS, Jaime Ruiz, Manuel Talón, Laura García.
*   **Article Topics (with authors & dates):**
    *   AI Transformation in Spanish Companies (Equipo LIVS, Jan 15, 2025)
    *   AI for Marketing (Laura García, Jan 20, 2025)
    *   Intelligent Automation for Cost Reduction (Jaime Ruiz, Jan 10, 2025)
    *   Predictive Analysis with AI (Manuel Talón, Jan 5, 2025)
    *   AI Implementation Guide for SMEs (Equipo LIVS, Jan 2, 2025)
    *   ChatGPT vs. Custom AI Solutions (Jaime Ruiz, Dec 28, 2024)
    *   Measuring AI ROI (Manuel Talón, Dec 25, 2024)\`,R=\`Asistente amable y servicial\`,P=\`Responde a las preguntas del usuario basándote únicamente en el contexto proporcionado. Si la respuesta no se encuentra en el contexto, indica amablemente que no tienes esa información.\`,WSE=true,M='gemini-flash-latest',D=document,E=D.getElementById('c');if(E){const s=\`#c *{margin:0;padding:0;box-sizing:border-box}#W{position:fixed;bottom:20px;right:20px;width:350px;max-width:90vw;height:500px;max-height:80vh;display:flex;flex-direction:column;border-radius:12px;box-shadow:0 10px 25px #0003;overflow:hidden;background-color:#1f2937;color:#f3f4f6;transition:transform .3s,opacity .3s;transform:translateY(20px);opacity:0}#W.O{transform:translateY(0);opacity:1}#H{background-color:#4f46e5;color:#fff;padding:1rem;font-weight:700;display:flex;justify-content:space-between;align-items:center}#M{flex-grow:1;padding:1rem;overflow-y:auto}.G{display:flex;margin-bottom:.75rem;max-width:90%}.GC{padding:.75rem;border-radius:12px;font-size:.9rem;line-height:1.4;white-space:pre-wrap}.U{margin-left:auto;background-color:#4f46e5;color:#fff;border-bottom-right-radius:2px}.B{margin-right:auto;background-color:#374151;color:#f3f4f6;border-bottom-left-radius:2px}#IC{padding:1rem;border-top:1px solid #374151;display:flex}#I{flex-grow:1;border:0;background-color:#374151;color:#f3f4f6;padding:.75rem;border-radius:20px;outline:0}#S{background:0;border:0;color:#a5b4fc;cursor:pointer;padding:.5rem;margin-left:.5rem}#S:disabled{color:#6b7280;cursor:not-allowed}#T{position:fixed;bottom:20px;right:20px;background-color:#4f46e5;color:#fff;width:60px;height:60px;border-radius:50%;border:0;cursor:pointer;display:flex;justify-content:center;align-items:center;box-shadow:0 4px 10px #0003;z-index:1000}.L span{display:inline-block;width:8px;height:8px;background-color:#a5b4fc;border-radius:50%;animation:p 1.4s infinite ease-in-out both}.L span:nth-child(1){animation-delay:-.32s}.L span:nth-child(2){animation-delay:-.16s}@keyframes p{0%,80%,100%{transform:scale(0)}40%{transform:scale(1)}}.md p:not(:last-child){margin-bottom:1rem}.md strong,.md b{font-weight:600}.md code{background-color:#111827;padding:.2em .4em;border-radius:6px}.md pre{background-color:#111827;padding:1rem;border-radius:6px;overflow-x:auto}.md pre code{padding:0;background:0}.md ul,.md ol{padding-left:1.5rem}.md li{margin-bottom:.5rem}\`,html=\`<button id=T><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24" fill=none stroke=currentColor stroke-width=2><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></button><div id=W style=display:none><div id=H><span>Asistente IA</span><button id=X style="background:0;border:0;color:#fff;cursor:pointer;font-size:1.2rem">&times;</button></div><div id=M></div><div id=IC><input type=text id=I placeholder="Escribe un mensaje..."><button id=S><svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24" fill=none stroke=currentColor stroke-width=2><line x1=22 y1=2 x2=11 y2=13 /><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button></div></div>\`;E.innerHTML=html;const st=D.createElement("style");st.innerText=s;D.head.appendChild(st);const W=D.getElementById('W'),T=D.getElementById('T'),X=D.getElementById('X'),MC=D.getElementById('M'),I=D.getElementById('I'),S=D.getElementById('S');let l=!1,H=[];const g=o=>{if(o){W.style.display='flex';setTimeout(()=>W.classList.add('O'),10);T.style.display='none'}else{W.classList.remove('O');setTimeout(()=>{W.style.display='none';T.style.display='flex'},300)}};T.onclick=()=>g(1);X.onclick=()=>g(0);const a=(r,t)=>{H.push({r,t});const gd=D.createElement('div');gd.className=\`G \${r==='user'?'U':'B'}\`;const cd=D.createElement('div');cd.className='GC';if(r==='model'&&window.marked){cd.className+=' md';const m=[],p='___M___',tp=t.replace(/\\$\\$([\\s\\S]*?)\\$\\$|\\$([^$\\n]*?)\\$/g,x=>{m.push(x);return p});let parsed=window.marked.parse(tp);if(m.length)parsed=parsed.replace(new RegExp(p,'g'),()=>m.shift()||'');cd.innerHTML=parsed}else cd.innerText=t;gd.appendChild(cd);MC.appendChild(gd);if(r==='model'&&window.renderMathInElement)window.renderMathInElement(cd,{delimiters:[{left:'$$',right:'$$',display:!0},{left:'$',right:'$',display:!1}],throwOnError:!1});MC.scrollTop=MC.scrollHeight};const z=g=>{l=g;I.disabled=g;S.disabled=g;const el=MC.querySelector('.L');if(g&&!el){const lm=D.createElement('div');lm.className='G B L';lm.innerHTML=\`<div class="GC L"><span></span><span></span><span></span></div>\`;MC.appendChild(lm);MC.scrollTop=MC.scrollHeight}else if(!g&&el)el.remove()};const q=async(query,hist)=>{const sp=\`Rol: \${R}.\\nInstrucciones: \${P}.\\nHabla en español de España (castellano).\\nBasándote PRIMERO en el contexto proporcionado a continuación, responde la pregunta del usuario. Si la respuesta no se encuentra en el contexto, puedes utilizar la búsqueda web para encontrar información relevante. Si usas la búsqueda web, indica que la información proviene de una búsqueda. Si la respuesta no está en el contexto ni en la web, indica amablemente que no tienes esa información.\\n\\nCONTEXTO:\\n\${C}\`;const c=hist.map(m=>({role:m.r,parts:[{text:m.t}]}));c.push({role:'user',parts:[{text:query}]});try{const cfg={systemInstruction:sp};if(WSE)cfg.tools=[{googleSearch:{}}];const r=await fetch(\`https://generativelanguage.googleapis.com/v1beta/models/\${M}:generateContent?key=\${K}\`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:c,config:cfg})});if(!r.ok)throw new Error('API Error');const d=await r.json();let txt=d.candidates[0].content.parts[0].text;const gr=d.candidates?.[0]?.groundingMetadata?.groundingChunks;if(WSE&&gr&&gr.length>0){const srcs=gr.filter(c=>c.web&&c.web.uri).map((c,i)=>{const t=c.web.title||c.web.uri;return \`[\${i+1}] <a href="\${c.web.uri}" target="_blank" rel="noopener noreferrer" style="color:#A5B4FC;">\${t}</a>\`}).join('<br>');if(srcs)txt+=\`<br><br><strong style="color:white;">Fuentes de la Búsqueda Web:</strong><br>\${srcs}\`;}return txt}catch(e){return'Lo siento, ha ocurrido un error.'}};const sendMsg=async()=>{const v=I.value.trim();if(v===''||l)return;const hfa=H.filter(m=>m.r==='user'||(m.r==='model'&&m.t!=='¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?'));a('user',v);I.value='';z(!0);const rs=await q(v,hfa);a('model',rs);z(!1)};S.onclick=sendMsg;I.onkeypress=e=>{if(e.key==='Enter')sendMsg()};a('model','¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?');}
    `;

    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = scriptContent;
    document.body.appendChild(script);

    return () => {
      const container = document.getElementById('c');
      if (container) {
        container.remove();
      }
      katexLink.remove();
      markedScript.remove();
      katexScript.remove();
      katexAutoRender.remove();
      script.remove();
    };
  }, []);

  return <div id="c"></div>;
};

export default ChatbotWidget;
