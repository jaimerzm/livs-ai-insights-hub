
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, Tag } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToBlogButton from '@/components/BackToBlogButton';
import { Helmet } from 'react-helmet';

const blogPosts = [
  {
    id: 1,
    title: "IA Generativa en el Marketing Digital: Revolucionando la Creatividad Empresarial",
    excerpt: "Descubre cómo la IA generativa está transformando las estrategias de marketing digital y creando nuevas oportunidades de negocio en 2025.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">La inteligencia artificial generativa está revolucionando el marketing digital de formas que parecían imposibles hace apenas unos años. En 2025, las empresas que adopten estas tecnologías tendrán una ventaja competitiva significativa.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">¿Qué es la IA Generativa en Marketing?</h2>
      <p class="text-gray-700 mb-6">La IA generativa en marketing se refiere al uso de algoritmos de inteligencia artificial capaces de crear contenido original: desde textos publicitarios hasta imágenes, videos y campañas completas. Esta tecnología permite a las empresas generar contenido personalizado a escala masiva.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Principales Aplicaciones</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Creación automática de copy publicitario personalizado</li>
        <li class="mb-2">Generación de imágenes y videos únicos para campañas</li>
        <li class="mb-2">Personalización de contenido en tiempo real</li>
        <li class="mb-2">Optimización automática de subject lines en email marketing</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Casos de Éxito</h2>
      <p class="text-gray-700 mb-6">Una empresa de e-commerce implementó IA generativa para crear descripciones de productos personalizadas, resultando en un aumento del 28% en ventas online y una reducción del 70% en tiempo de creación de contenido.</p>
    `,
    date: "20 de Enero, 2025",
    author: "Laura García",
    readTime: "7 min lectura",
    tags: ["IA Generativa", "Marketing Digital", "Creatividad"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 12,
    title: "Cómo la Inteligencia Artificial está Transformando las Empresas Españolas en 2025",
    excerpt: "Descubre cómo la IA está revolucionando el panorama empresarial español en 2025, con casos de éxito reales y estrategias de implementación.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">España se encuentra en el epicentro de una revolución tecnológica sin precedentes. En 2025, la inteligencia artificial ha dejado de ser una promesa futurista para convertirse en una realidad tangible que está transformando radicalmente el panorama empresarial español.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">El Estado Actual de la IA en España</h2>
      <p class="text-gray-700 mb-6">Según los últimos estudios del sector, el 78% de las empresas españolas han implementado algún tipo de solución de IA en 2025, un aumento del 340% respecto a 2022. Esta adopción masiva está siendo impulsada por la necesidad de mantenerse competitivas en un mercado global cada vez más digitalizado.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Sectores Líderes</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Sector Bancario: Santander, BBVA y CaixaBank han invertido más de 2.000 millones de euros</li>
        <li class="mb-2">Retail: El Corte Inglés e Inditex utilizan IA para personalización con 92% de precisión</li>
        <li class="mb-2">Energético: Iberdrola y Endesa han reducido el desperdicio energético en un 25%</li>
      </ul>
    `,
    date: "18 de Enero, 2025",
    author: "María González",
    readTime: "10 min lectura",
    tags: ["Inteligencia Artificial", "Transformación Digital", "Empresas Españolas"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Chatbots Inteligentes: Mejorando la Atención al Cliente",
    excerpt: "Implementa chatbots que mejoren la experiencia del cliente y reduzcan costes operativos hasta en un 60%.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">Los chatbots inteligentes han evolucionado de simples respuestas automáticas a asistentes virtuales capaces de mantener conversaciones naturales y resolver problemas complejos de atención al cliente.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">La Evolución de los Chatbots</h2>
      <p class="text-gray-700 mb-6">En 2025, los chatbots utilizan procesamiento de lenguaje natural avanzado y aprendizaje automático para entender el contexto, las emociones y las intenciones de los usuarios, proporcionando respuestas más precisas y humanas.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Beneficios Cuantificables</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Reducción del 60% en costes de atención al cliente</li>
        <li class="mb-2">Disponibilidad 24/7 sin interrupciones</li>
        <li class="mb-2">Tiempo de respuesta instantáneo</li>
        <li class="mb-2">Capacidad de manejar múltiples consultas simultáneamente</li>
        <li class="mb-2">Satisfacción del cliente del 95% en casos resueltos</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Casos de Éxito</h2>
      <p class="text-gray-700 mb-6">Una cadena hotelera española implementó chatbots inteligentes que ahora manejan el 80% de las consultas de reservas, logrando una reducción del 45% en tiempo de respuesta y un aumento del 30% en conversiones.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h4 class="text-lg font-semibold text-blue-900 mb-2">💡 Consejo del Experto</h4>
        <p class="text-gray-700">Implementa chatbots gradualmente, comenzando con las consultas más frecuentes. Siempre mantén la opción de escalar a un agente humano para casos complejos.</p>
      </div>
    `,
    date: "15 de Enero, 2025",
    author: "Carlos Pérez",
    readTime: "5 min lectura",
    tags: ["Chatbots", "Atención al Cliente", "IA"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    title: "Automatización Inteligente para Reducir Costes",
    excerpt: "Reduce hasta un 60% los costes operativos con automatización inteligente y procesos optimizados por IA.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">La automatización inteligente va más allá de la simple automatización de tareas. Utiliza IA para optimizar procesos completos, tomar decisiones y adaptarse a cambios en tiempo real.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">¿Qué es la Automatización Inteligente?</h2>
      <p class="text-gray-700 mb-6">La automatización inteligente combina RPA (Robotic Process Automation), IA y machine learning para crear sistemas que no solo ejecutan tareas, sino que aprenden y mejoran continuamente su rendimiento.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Áreas de Aplicación Principales</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Procesamiento de facturas y documentos financieros</li>
        <li class="mb-2">Gestión de inventarios y cadena de suministro</li>
        <li class="mb-2">Atención al cliente y soporte técnico</li>
        <li class="mb-2">Recursos humanos y nóminas</li>
        <li class="mb-2">Análisis de datos y reportes automáticos</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">ROI de la Automatización</h2>
      <p class="text-gray-700 mb-4">Las empresas que implementan automatización inteligente experimentan:</p>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Reducción de costes operativos: 40-60%</li>
        <li class="mb-2">Aumento de productividad: 50-80%</li>
        <li class="mb-2">Reducción de errores: 85-95%</li>
        <li class="mb-2">ROI promedio: 300% en el primer año</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Hoja de Ruta para la Implementación</h2>
      <ol class="list-decimal pl-6 text-gray-700 mb-6">
        <li class="mb-2">Identificar procesos repetitivos y manuales</li>
        <li class="mb-2">Evaluar el impacto potencial y la complejidad</li>
        <li class="mb-2">Desarrollar un piloto con métricas claras</li>
        <li class="mb-2">Escalar gradualmente a otros procesos</li>
        <li class="mb-2">Monitorear y optimizar continuamente</li>
      </ol>
    `,
    date: "10 de Enero, 2025",
    author: "Ana López",
    readTime: "6 min lectura",
    tags: ["Automatización", "IA", "Costes"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    title: "IA en Recursos Humanos: Gestión del Talento",
    excerpt: "Revoluciona la gestión de RRHH con inteligencia artificial para reclutamiento, evaluación y desarrollo del talento.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">La inteligencia artificial está transformando radicalmente la gestión de recursos humanos, desde el reclutamiento hasta el desarrollo profesional, creando procesos más eficientes y decisiones basadas en datos.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Reclutamiento Inteligente</h2>
      <p class="text-gray-700 mb-6">La IA permite analizar CVs automáticamente, identificar candidatos ideales y predecir el éxito laboral con una precisión del 87%, reduciendo el tiempo de contratación en un 75%.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Funcionalidades Clave</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Análisis automático de CVs y cartas de presentación</li>
        <li class="mb-2">Matching inteligente candidato-puesto</li>
        <li class="mb-2">Entrevistas virtuales con análisis de video</li>
        <li class="mb-2">Evaluación predictiva de rendimiento</li>
        <li class="mb-2">Eliminación de sesgos inconscientes</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Gestión del Rendimiento</h2>
      <p class="text-gray-700 mb-6">Los sistemas de IA analizan continuamente el rendimiento de los empleados, identificando patrones, prediciendo necesidades de formación y sugiriendo planes de desarrollo personalizados.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Beneficios Medibles</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Reducción del 60% en tiempo de reclutamiento</li>
        <li class="mb-2">Mejora del 40% en retención de talento</li>
        <li class="mb-2">Aumento del 35% en satisfacción de empleados</li>
        <li class="mb-2">Reducción del 50% en costes de contratación</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Desarrollo Profesional Personalizado</h2>
      <p class="text-gray-700 mb-6">La IA identifica gaps de habilidades y recomienda formación específica para cada empleado, creando rutas de carrera personalizadas y maximizando el potencial de cada persona.</p>
    `,
    date: "05 de Enero, 2025",
    author: "Javier Torres",
    readTime: "8 min lectura",
    tags: ["IA", "RRHH", "Talento"],
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    title: "El Impacto de la IA en la Banca y las Finanzas",
    excerpt: "Descubre cómo la inteligencia artificial está transformando el sector bancario y financiero con innovaciones disruptivas.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">El sector bancario y financiero está experimentando una transformación radical gracias a la IA, mejorando la detección de fraudes, la evaluación de riesgos y la experiencia del cliente.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Detección de Fraudes en Tiempo Real</h2>
      <p class="text-gray-700 mb-6">Los algoritmos de IA analizan millones de transacciones por segundo, identificando patrones sospechosos con una precisión del 99.7% y reduciendo las pérdidas por fraude en un 80%.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Evaluación de Riesgos Crediticios</h3>
      <p class="text-gray-700 mb-4">La IA evalúa más de 1,000 variables para determinar la solvencia crediticia:</p>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Historial de transacciones y comportamiento financiero</li>
        <li class="mb-2">Análisis de redes sociales y datos alternativos</li>
        <li class="mb-2">Predicción de capacidad de pago futura</li>
        <li class="mb-2">Evaluación automática en menos de 30 segundos</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Servicios Financieros Personalizados</h2>
      <p class="text-gray-700 mb-6">Los bancos utilizan IA para ofrecer productos financieros personalizados, recomendaciones de inversión y asesoramiento financiero automatizado 24/7.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Robo-Advisors</h3>
      <p class="text-gray-700 mb-6">Los asesores financieros automáticos gestionan carteras de inversión utilizando algoritmos avanzados, ofreciendo rendimientos competitivos con comisiones reducidas.</p>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h4 class="text-lg font-semibold text-green-900 mb-2">📊 Dato Relevante</h4>
        <p class="text-gray-700">Los bancos que han implementado IA comprehensivamente han visto un aumento del 25% en satisfacción del cliente y una reducción del 35% en costes operativos.</p>
      </div>
    `,
    date: "01 de Enero, 2025",
    author: "Isabel Martínez",
    readTime: "9 min lectura",
    tags: ["IA", "Banca", "Finanzas"],
    image: "https://images.unsplash.com/photo-1501164333658-c3015765ca57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbmtpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    title: "La Realidad Virtual y Aumentada en la Educación del Futuro",
    excerpt: "Explora cómo la realidad virtual y aumentada están revolucionando la educación con experiencias inmersivas.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">La realidad virtual (VR) y aumentada (AR) están transformando la educación, creando experiencias de aprendizaje inmersivas que mejoran la comprensión y retención del conocimiento.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Aprendizaje Inmersivo</h2>
      <p class="text-gray-700 mb-6">Los estudiantes pueden explorar civilizaciones antiguas, viajar por el sistema solar o realizar experimentos químicos virtuales, todo desde el aula. Esto aumenta la retención de conocimiento en un 90% comparado con métodos tradicionales.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Aplicaciones en Diferentes Materias</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Historia: Reconstrucciones 3D de eventos históricos</li>
        <li class="mb-2">Ciencias: Laboratorios virtuales y experimentos seguros</li>
        <li class="mb-2">Geografía: Exploración virtual de ecosistemas</li>
        <li class="mb-2">Medicina: Práctica en anatomía humana 3D</li>
        <li class="mb-2">Idiomas: Inmersión en entornos culturales virtuales</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Formación Profesional</h2>
      <p class="text-gray-700 mb-6">La VR permite entrenar a profesionales en situaciones de alto riesgo sin consecuencias reales, como cirugías complejas, operaciones de rescate o manejo de maquinaria industrial.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Beneficios Cuantificables</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Mejora del 75% en retención de información</li>
        <li class="mb-2">Reducción del 40% en tiempo de formación</li>
        <li class="mb-2">Aumento del 60% en engagement estudiantil</li>
        <li class="mb-2">Reducción del 50% en costes de formación práctica</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">El Futuro de la Educación</h2>
      <p class="text-gray-700 mb-6">Para 2030, se espera que el 80% de las instituciones educativas incorporen VR/AR en sus programas, creando un nuevo paradigma educativo basado en experiencias inmersivas y aprendizaje personalizado.</p>
    `,
    date: "28 de Diciembre, 2024",
    author: "Roberto Díaz",
    readTime: "7 min lectura",
    tags: ["Realidad Virtual", "Realidad Aumentada", "Educación"],
    image: "https://images.unsplash.com/photo-1542751371-adc38f48a49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 7,
    title: "Ciberseguridad en la Era de la Inteligencia Artificial",
    excerpt: "Aprende sobre los desafíos y soluciones en ciberseguridad impulsados por la IA para proteger tu empresa.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">La IA está revolucionando la ciberseguridad, tanto como herramienta de defensa como vector de ataque. Las empresas deben adaptarse a este nuevo panorama de amenazas y oportunidades.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">IA como Defensa</h2>
      <p class="text-gray-700 mb-6">Los sistemas de IA pueden detectar amenazas en tiempo real, analizar patrones de comportamiento sospechoso y responder automáticamente a incidentes de seguridad con una velocidad imposible para equipos humanos.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Capacidades de Defensa Avanzada</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Detección de malware zero-day con 99.8% de precisión</li>
        <li class="mb-2">Análisis comportamental de usuarios y entidades</li>
        <li class="mb-2">Respuesta automática a incidentes en milisegundos</li>
        <li class="mb-2">Predicción de vulnerabilidades antes de ser explotadas</li>
        <li class="mb-2">Correlación de amenazas globales en tiempo real</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Nuevas Amenazas Impulsadas por IA</h2>
      <p class="text-gray-700 mb-6">Los ciberdelincuentes también utilizan IA para crear ataques más sofisticados: deepfakes para ingeniería social, ataques de phishing personalizados y malware que evoluciona automáticamente.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Estrategias de Protección</h3>
      <ol class="list-decimal pl-6 text-gray-700 mb-6">
        <li class="mb-2">Implementar sistemas de detección basados en IA</li>
        <li class="mb-2">Formar al personal sobre nuevas amenazas</li>
        <li class="mb-2">Actualizar políticas de seguridad regularmente</li>
        <li class="mb-2">Monitorear continuamente el panorama de amenazas</li>
        <li class="mb-2">Establecer planes de respuesta automatizados</li>
      </ol>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h4 class="text-lg font-semibold text-red-900 mb-2">⚠️ Alerta de Seguridad</h4>
        <p class="text-gray-700">Las empresas que no adopten soluciones de ciberseguridad basadas en IA enfrentan un riesgo 5 veces mayor de sufrir brechas de seguridad exitosas.</p>
      </div>
    `,
    date: "22 de Diciembre, 2024",
    author: "Elena Sánchez",
    readTime: "6 min lectura",
    tags: ["Ciberseguridad", "IA", "Tecnología"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 8,
    title: "El Futuro del Trabajo: Habilidades Necesarias para 2030",
    excerpt: "Prepárate para el futuro del trabajo con las habilidades más demandadas en 2030 y estrategias de adaptación.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">El mundo laboral está evolucionando rápidamente. Para 2030, muchos trabajos actuales habrán desaparecido y surgirán nuevas profesiones. Descubre qué habilidades serán esenciales para prosperar en esta nueva era.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Habilidades Técnicas del Futuro</h2>
      <p class="text-gray-700 mb-6">Las habilidades técnicas más demandadas incluyen programación de IA, análisis de datos, ciberseguridad y automatización de procesos. Sin embargo, las habilidades blandas serán igualmente importantes.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Top 10 Habilidades para 2030</h3>
      <ol class="list-decimal pl-6 text-gray-700 mb-6">
        <li class="mb-2">Inteligencia Artificial y Machine Learning</li>
        <li class="mb-2">Análisis de datos y estadística</li>
        <li class="mb-2">Pensamiento crítico y resolución de problemas</li>
        <li class="mb-2">Creatividad e innovación</li>
        <li class="mb-2">Inteligencia emocional</li>
        <li class="mb-2">Liderazgo y gestión de equipos</li>
        <li class="mb-2">Adaptabilidad y flexibilidad</li>
        <li class="mb-2">Programación y desarrollo de software</li>
        <li class="mb-2">Comunicación intercultural</li>
        <li class="mb-2">Sostenibilidad y economía circular</li>
      </ol>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Nuevas Profesiones Emergentes</h2>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Especialista en ética de IA</li>
        <li class="mb-2">Diseñador de experiencias virtuales</li>
        <li class="mb-2">Analista de sostenibilidad digital</li>
        <li class="mb-2">Facilitador de colaboración humano-IA</li>
        <li class="mb-2">Especialista en bienestar digital</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Estrategias de Adaptación</h2>
      <p class="text-gray-700 mb-4">Para mantenerse relevante en el mercado laboral del futuro:</p>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Adoptar una mentalidad de aprendizaje continuo</li>
        <li class="mb-2">Desarrollar habilidades híbridas (técnicas + humanas)</li>
        <li class="mb-2">Mantenerse actualizado con las tendencias tecnológicas</li>
        <li class="mb-2">Practicar la colaboración con sistemas de IA</li>
        <li class="mb-2">Cultivar la creatividad y el pensamiento crítico</li>
      </ul>
    `,
    date: "15 de Diciembre, 2024",
    author: "David Pérez",
    readTime: "8 min lectura",
    tags: ["Futuro del Trabajo", "Habilidades", "Tendencias"],
    image: "https://images.unsplash.com/photo-1584438477825-13ca559945cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZ1dHVyZSUyMG9kJTIwd29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 9,
    title: "Blockchain Más Allá de las Criptomonedas: Aplicaciones Innovadoras",
    excerpt: "Explora las aplicaciones innovadoras de blockchain más allá de las criptomonedas en diversos sectores industriales.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">Aunque blockchain es conocido principalmente por las criptomonedas, sus aplicaciones van mucho más allá. Esta tecnología está transformando industrias enteras con soluciones innovadoras de transparencia y trazabilidad.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Cadena de Suministro Transparente</h2>
      <p class="text-gray-700 mb-6">Blockchain permite rastrear productos desde su origen hasta el consumidor final, garantizando autenticidad y calidad. Walmart utiliza blockchain para rastrear alimentos, reduciendo el tiempo de identificación de contaminación de semanas a segundos.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Aplicaciones Sectoriales</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2"><strong>Salud:</strong> Historiales médicos seguros e interoperables</li>
        <li class="mb-2"><strong>Inmobiliario:</strong> Contratos inteligentes para transacciones</li>
        <li class="mb-2"><strong>Energía:</strong> Trading de energía renovable peer-to-peer</li>
        <li class="mb-2"><strong>Educación:</strong> Certificaciones académicas verificables</li>
        <li class="mb-2"><strong>Agricultura:</strong> Certificación orgánica y trazabilidad</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Contratos Inteligentes</h2>
      <p class="text-gray-700 mb-6">Los smart contracts automatizan acuerdos complejos, eliminando intermediarios y reduciendo costes. En seguros, pueden automatizar pagos de reclamaciones basándose en datos verificables.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Beneficios Empresariales</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Reducción de costes de transacción en 30-50%</li>
        <li class="mb-2">Eliminación de fraudes y falsificaciones</li>
        <li class="mb-2">Mejora en transparencia y confianza</li>
        <li class="mb-2">Automatización de procesos complejos</li>
        <li class="mb-2">Acceso global sin intermediarios</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">El Futuro de Blockchain</h2>
      <p class="text-gray-700 mb-6">Para 2030, se estima que blockchain agregará $1.76 billones de valor a la economía global, transformando cómo las empresas operan y crean confianza en el ecosistema digital.</p>
    `,
    date: "08 de Diciembre, 2024",
    author: "Sofía Gómez",
    readTime: "7 min lectura",
    tags: ["Blockchain", "Tecnología", "Innovación"],
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 10,
    title: "Marketing de Contenidos en 2025: Tendencias y Estrategias",
    excerpt: "Descubre las tendencias y estrategias clave para el marketing de contenidos en 2025 y cómo destacar en un mercado saturado.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">El marketing de contenidos en 2025 se caracteriza por la hiperpersonalización, el contenido inmersivo y la integración de IA. Las marcas que dominen estas tendencias liderarán la conversación digital.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Tendencias Dominantes en 2025</h2>
      <p class="text-gray-700 mb-6">El contenido ya no es solo textual o visual. Las experiencias inmersivas, el contenido generado por IA y la personalización extrema definen el nuevo estándar de marketing de contenidos.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Principales Tendencias</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Contenido generado por IA personalizado en tiempo real</li>
        <li class="mb-2">Experiencias de realidad aumentada y virtual</li>
        <li class="mb-2">Audio contenido y podcasts interactivos</li>
        <li class="mb-2">Micro-contenido para atención fragmentada</li>
        <li class="mb-2">Contenido colaborativo con la audiencia</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Estrategias de Contenido Exitosas</h2>
      <p class="text-gray-700 mb-6">Las marcas exitosas en 2025 crean contenido que no solo informa, sino que también entretiene, educa y genera conversaciones significativas con su audiencia.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Framework IMPACT</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2"><strong>I</strong>nteractivo: Contenido que involucra activamente</li>
        <li class="mb-2"><strong>M</strong>edible: ROI claro y métricas definidas</li>
        <li class="mb-2"><strong>P</strong>ersonalizado: Adaptado a cada segmento</li>
        <li class="mb-2"><strong>A</strong>uténtico: Genuino y transparente</li>
        <li class="mb-2"><strong>C</strong>onsistente: Regular y predecible</li>
        <li class="mb-2"><strong>T</strong>rans-canal: Optimizado para múltiples plataformas</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Métricas que Importan</h2>
      <p class="text-gray-700 mb-4">En 2025, las métricas van más allá de likes y shares:</p>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Tiempo de engagement cualitativo</li>
        <li class="mb-2">Conversiones atribuibles directamente</li>
        <li class="mb-2">Sentiment analysis y brand perception</li>
        <li class="mb-2">Customer lifetime value influenciado</li>
        <li class="mb-2">Share of voice en conversaciones relevantes</li>
      </ul>
      
      <div class="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <h4 class="text-lg font-semibold text-purple-900 mb-2">🎯 Estrategia Clave</h4>
        <p class="text-gray-700">El contenido del futuro es conversacional, no promocional. Las marcas que escuchen y respondan genuinamente construirán las comunidades más leales.</p>
      </div>
    `,
    date: "01 de Diciembre, 2024",
    author: "Martín Ruiz",
    readTime: "9 min lectura",
    tags: ["Marketing de Contenidos", "Marketing Digital", "Tendencias"],
    image: "https://images.unsplash.com/photo-1486312339633-9c6334c8e1e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hcmtldGluZyUyMGNvbnRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 11,
    title: "Ciudades Inteligentes: El Futuro de la Vida Urbana",
    excerpt: "Explora cómo las ciudades inteligentes están transformando la vida urbana con tecnología IoT, IA y sostenibilidad.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">Las ciudades inteligentes representan el futuro de la vida urbana, integrando tecnología IoT, IA y big data para crear entornos más eficientes, sostenibles y habitables para sus ciudadanos.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Componentes de una Ciudad Inteligente</h2>
      <p class="text-gray-700 mb-6">Una ciudad inteligente integra sistemas de transporte, energía, agua, residuos y seguridad, utilizando sensores IoT y análisis de datos para optimizar operaciones en tiempo real.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Infraestructura Inteligente</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Semáforos adaptativos que reducen tráfico en 25%</li>
        <li class="mb-2">Alumbrado público inteligente que ahorra 50% energía</li>
        <li class="mb-2">Gestión de residuos optimizada con sensores de llenado</li>
        <li class="mb-2">Sistemas de agua inteligentes que detectan fugas</li>
        <li class="mb-2">Redes eléctricas auto-reparables y eficientes</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Beneficios para los Ciudadanos</h2>
      <p class="text-gray-700 mb-6">Los ciudadanos experimentan mejor calidad de vida con servicios más eficientes, menor contaminación, transporte optimizado y mayor seguridad urbana.</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Impacto Medible</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Reducción del 30% en tiempo de commuting</li>
        <li class="mb-2">Disminución del 40% en emisiones de CO2</li>
        <li class="mb-2">Mejora del 35% en eficiencia energética</li>
        <li class="mb-2">Reducción del 25% en costes de servicios públicos</li>
        <li class="mb-2">Aumento del 50% en satisfacción ciudadana</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Casos de Éxito Global</h2>
      <p class="text-gray-700 mb-6">Singapur, Barcelona y Ámsterdam lideran la transformación hacia ciudades inteligentes, con proyectos que sirven de modelo para otras urbes globales.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Desafíos y Consideraciones</h2>
      <p class="text-gray-700 mb-4">La implementación de ciudades inteligentes enfrenta desafíos importantes:</p>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Privacidad y protección de datos ciudadanos</li>
        <li class="mb-2">Inversión inicial elevada en infraestructura</li>
        <li class="mb-2">Brecha digital y acceso equitativo a tecnología</li>
        <li class="mb-2">Interoperabilidad entre sistemas existentes</li>
        <li class="mb-2">Ciberseguridad de infraestructuras críticas</li>
      </ul>
    `,
    date: "24 de Noviembre, 2024",
    author: "Lucía Fernández",
    readTime: "8 min lectura",
    tags: ["Ciudades Inteligentes", "Urbanismo", "Tecnología"],
    image: "https://images.unsplash.com/photo-1502605255556-460f55823742?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0JTIwY2l0aWVzfGVufDB8fDB8fHww%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 13,
    title: "ROI de la Inteligencia Artificial: Cómo Medir el Éxito",
    excerpt: "Aprende a medir correctamente el retorno de inversión en proyectos de IA y establece métricas que realmente importan.",
    content: `
      <p class="text-xl text-gray-600 mb-8 leading-relaxed">Medir el ROI de proyectos de IA es crucial pero complejo. No se trata solo de números, sino de entender el impacto holístico que la IA tiene en tu organización y cómo cuantificar beneficios tangibles e intangibles.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Framework de Medición ROI-IA</h2>
      <p class="text-gray-700 mb-6">Un framework efectivo debe considerar beneficios directos (ahorro de costes, aumento de ingresos) e indirectos (mejora en decisiones, innovación, satisfacción del cliente).</p>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Métricas Clave de ROI</h3>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2"><strong>ROI Financiero:</strong> (Beneficios - Inversión) / Inversión × 100</li>
        <li class="mb-2"><strong>Tiempo de Recuperación:</strong> Meses para recuperar inversión inicial</li>
        <li class="mb-2"><strong>Productividad:</strong> Aumento en output por empleado/hora</li>
        <li class="mb-2"><strong>Calidad:</strong> Reducción en errores y reprocesos</li>
        <li class="mb-2"><strong>Velocidad:</strong> Aceleración en procesos críticos</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Casos de ROI Ejemplares</h2>
      <p class="text-gray-700 mb-6">Una empresa manufacturera implementó IA predictiva en mantenimiento, logrando:</p>
      
      <div class="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h4 class="text-lg font-semibold text-green-900 mb-2">📊 Resultados Cuantificables</h4>
        <ul class="text-gray-700">
          <li>• ROI del 340% en 18 meses</li>
          <li>• Reducción del 45% en tiempo de inactividad</li>
          <li>• Ahorro de €2.3M en costes de mantenimiento</li>
          <li>• Aumento del 25% en eficiencia operativa</li>
        </ul>
      </div>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Metodología de Medición</h2>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Fase 1: Baseline Establishment</h3>
      <p class="text-gray-700 mb-4">Establece métricas antes de implementar IA:</p>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Costes operativos actuales</li>
        <li class="mb-2">Tiempos de proceso existentes</li>
        <li class="mb-2">Tasas de error y calidad</li>
        <li class="mb-2">Satisfacción de clientes/empleados</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Fase 2: Tracking Continuo</h3>
      <p class="text-gray-700 mb-4">Monitorea impacto durante implementación:</p>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Dashboards en tiempo real</li>
        <li class="mb-2">Reportes semanales de progreso</li>
        <li class="mb-2">Ajustes basados en datos</li>
        <li class="mb-2">Feedback continuo de usuarios</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Errores Comunes en Medición</h2>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Enfocarse solo en ahorro de costes</li>
        <li class="mb-2">Ignorar costes de implementación y mantenimiento</li>
        <li class="mb-2">No considerar el factor tiempo en beneficios</li>
        <li class="mb-2">Medir demasiado pronto sin estabilización</li>
        <li class="mb-2">No incluir costes de entrenamiento del personal</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">ROI por Sector</h2>
      <p class="text-gray-700 mb-4">El ROI varía significativamente por industria:</p>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2"><strong>Financiero:</strong> ROI promedio 280-450%</li>
        <li class="mb-2"><strong>Manufactura:</strong> ROI promedio 200-350%</li>
        <li class="mb-2"><strong>Retail:</strong> ROI promedio 150-300%</li>
        <li class="mb-2"><strong>Salud:</strong> ROI promedio 120-250%</li>
        <li class="mb-2"><strong>Educación:</strong> ROI promedio 100-200%</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-12 mb-6">Factores de Éxito</h2>
      <p class="text-gray-700 mb-4">Los proyectos de IA con mayor ROI comparten características:</p>
      <ul class="list-disc pl-6 text-gray-700 mb-6">
        <li class="mb-2">Objetivos claros y medibles desde el inicio</li>
        <li class="mb-2">Apoyo ejecutivo y presupuesto adecuado</li>
        <li class="mb-2">Equipos multidisciplinarios competentes</li>
        <li class="mb-2">Datos de calidad y bien estructurados</li>
        <li class="mb-2">Enfoque iterativo con mejora continua</li>
      </ul>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h4 class="text-lg font-semibold text-blue-900 mb-2">💡 Recomendación Clave</h4>
        <p class="text-gray-700">No busques ROI inmediato. Los proyectos de IA exitosos muestran beneficios graduales que se aceleran exponencialmente después de 12-18 meses de implementación.</p>
      </div>
    `,
    date: "22 de Enero, 2025",
    author: "Patricia Vega",
    readTime: "11 min lectura",
    tags: ["ROI", "IA", "Métricas", "Análisis"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

const BlogPost = () => {
  const { slug } = useParams();
  
  // Find the blog post by matching the slug with a generated slug from the title
  const blogPost = blogPosts.find(post => {
    const generatedSlug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
    return generatedSlug === slug;
  });

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <BackToBlogButton />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-2xl font-bold text-gray-900">Artículo no encontrado</h1>
          <p className="text-gray-600 mt-4">El artículo que buscas no existe.</p>
          <Link to="/blog" className="text-livs-blue hover:text-livs-purple mt-4 inline-block">
            Volver al blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(post => post.id === blogPost.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Function to find related posts (you can implement more sophisticated logic here)
  const relatedPosts = blogPosts.filter(post =>
    post.tags.some(tag => blogPost.tags.includes(tag)) && post.id !== blogPost.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{blogPost.title} | LIVS</title>
        <meta name="description" content={blogPost.excerpt} />
        <meta name="keywords" content={blogPost.tags.join(', ')} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.excerpt} />
        <meta property="og:image" content={blogPost.image} />
      </Helmet>

      <Navbar />
      <BackToBlogButton />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src={blogPost.image} 
                  alt={blogPost.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPost.tags.map((tag, index) => (
                      <span key={index} className="bg-livs-purple/10 text-livs-purple px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {blogPost.title}
                  </h1>
                  
                  <div className="flex items-center gap-6 text-gray-500 mb-8">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPost.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-livs-blue transition-colors">
                      <Share2 className="w-4 h-4" />
                      <span>Compartir</span>
                    </button>
                  </div>
                  
                  <p className="text-xs text-gray-400 italic mb-4">
                    *Los casos y ejemplos mencionados en este artículo, incluidas las referencias a personas, son ficticios y se utilizan únicamente con fines ilustrativos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="border-t border-gray-200 py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto flex justify-between items-center">
              {prevPost ? (
                <Link to={`/blog/${prevPost.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`} className="flex items-center gap-2 text-livs-blue hover:text-livs-purple">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </Link>
              ) : <div></div>}
              
              {nextPost ? (
                <Link to={`/blog/${nextPost.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`} className="flex items-center gap-2 text-livs-blue hover:text-livs-purple">
                  <span>Siguiente</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : <div></div>}
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Artículos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(post => {
                  const postSlug = post.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');
                  return (
                    <Link key={post.id} to={`/blog/${postSlug}`} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="w-4 h-4 text-livs-purple" />
                          <span className="text-sm text-livs-purple">{post.tags[0]}</span>
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm">{post.excerpt}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-livs-blue to-livs-purple py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">¿Necesitas implementar estas soluciones en tu empresa?</h2>
              <p className="text-xl mb-8">Nuestros expertos en IA pueden ayudarte a transformar tu negocio.</p>
              <Link to="/#contacto" className="inline-flex items-center gap-2 bg-white text-livs-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Solicitar Consultoría
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
