
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Clock, Star, ChevronDown, ChevronUp,
  Scissors, Bath, Heart, Shield, Dog, Sparkles, Instagram,
  Facebook, ArrowRight, X, Check, PawPrint, Calendar, Menu, XIcon
} from 'lucide-react';

import heroImg from '@/assets/demo/lepetitcan-hero.jpg';
import before1 from '@/assets/demo/lepetitcan-before1.jpg';
import after1 from '@/assets/demo/lepetitcan-after1.jpg';
import before2 from '@/assets/demo/lepetitcan-before2.jpg';
import after2 from '@/assets/demo/lepetitcan-after2.jpg';
import before3 from '@/assets/demo/lepetitcan-before3.jpg';
import after3 from '@/assets/demo/lepetitcan-after3.jpg';
import teamImg from '@/assets/demo/lepetitcan-team.jpg';
import salonImg from '@/assets/demo/lepetitcan-salon.jpg';

// ─── Color palette ───
const pistachio = {
  50: '#f5faf0',
  100: '#e8f5d8',
  200: '#d4edb5',
  300: '#b8e085',
  400: '#9bd35b',
  500: '#84c43e',
  600: '#6aab2d',
  700: '#548526',
  800: '#446a22',
  900: '#2d4a17',
  950: '#1a2e0d',
};

const warm = {
  50: '#fefcf7',
  100: '#fdf6e8',
  200: '#f9e9c5',
  300: '#f4d697',
};

const LePetitCan = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [bookingForm, setBookingForm] = useState({
    name: '', phone: '', email: '', pet: '', breed: '', service: '', date: '', notes: ''
  });

  useEffect(() => {
    // Hide the default LIVS chatbot on this page
    const defaultChatbot = document.querySelector('[id^="chatbot-widget"]') as HTMLElement;
    if (defaultChatbot) defaultChatbot.style.display = 'none';
    
    return () => {
      if (defaultChatbot) defaultChatbot.style.display = '';
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Reserva enviada! Te contactaremos pronto para confirmar tu cita. 🐾');
    setBookingForm({ name: '', phone: '', email: '', pet: '', breed: '', service: '', date: '', notes: '' });
  };

  const navLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Servicios', id: 'servicios' },
    { label: 'Galería', id: 'galeria' },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Opiniones', id: 'opiniones' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contacto', id: 'contacto' },
  ];

  const services = [
    { icon: Bath, name: 'Baño y Secado', price: 'Desde 20€', desc: 'Baño con champú hipoalergénico, secado profesional y perfumado.' },
    { icon: Scissors, name: 'Corte y Arreglo', price: 'Desde 30€', desc: 'Corte a tijera o máquina adaptado a la raza y estilo deseado.' },
    { icon: Sparkles, name: 'Baño + Corte Completo', price: 'Desde 40€', desc: 'Servicio completo: baño, secado, corte, limpieza de oídos y uñas.' },
    { icon: Heart, name: 'Stripping', price: 'Desde 45€', desc: 'Técnica especializada para razas de pelo duro. Mantiene la textura natural.' },
    { icon: Shield, name: 'Desparasitación', price: 'Desde 12€', desc: 'Tratamiento antiparasitario externo con productos de primera calidad.' },
    { icon: Dog, name: 'Corte de Uñas', price: '8€', desc: 'Corte y limado de uñas con cuidado y sin estrés para tu mascota.' },
  ];

  const testimonials = [
    { name: 'María G.', pet: 'Luna (Caniche)', stars: 5, text: 'Mi Luna sale siempre preciosa. El trato es increíble, se nota que aman a los animales. ¡Repetiremos siempre!' },
    { name: 'Carlos R.', pet: 'Max (Golden Retriever)', stars: 5, text: 'La primera vez que Max no llora en una peluquería. El equipo tiene una paciencia infinita. 100% recomendado.' },
    { name: 'Ana P.', pet: 'Coco (Yorkshire)', stars: 5, text: 'Profesionales de verdad. Saben tratar cada raza y el resultado es espectacular. Coco queda como un modelo.' },
    { name: 'David M.', pet: 'Nala (Bulldog Francés)', stars: 4, text: 'Muy contentos con el servicio. Nala tiene piel sensible y usan productos especiales sin problema.' },
  ];

  const faqs = [
    { q: '¿Es la primera vez de mi perro, qué debo saber?', a: 'No te preocupes. Realizamos una primera toma de contacto suave para que tu mascota se familiarice con el entorno. Recomendamos traerlo con el estómago vacío (sin comer 2h antes) y con la cartilla de vacunación al día.' },
    { q: '¿Qué productos utilizáis?', a: 'Trabajamos exclusivamente con productos hipoalergénicos y naturales de marcas profesionales como Artero, Iv San Bernard y Chris Christensen. Adaptamos el champú y acondicionador a las necesidades de cada tipo de piel y pelo.' },
    { q: '¿Aceptáis perros nerviosos o difíciles?', a: '¡Por supuesto! Tenemos amplia experiencia con perros ansiosos o reactivos. Trabajamos con paciencia, sin prisas, y si es necesario realizamos el servicio en varias sesiones cortas para que el perro no se estrese.' },
    { q: '¿Cuánto dura una sesión?', a: 'Depende del tamaño, raza y estado del pelo. Un baño suele durar 45min-1h, y un servicio completo entre 1h30 y 2h30. Nunca metemos prisa, priorizamos el bienestar del animal.' },
    { q: '¿Necesito cita previa?', a: 'Sí, trabajamos siempre con cita previa para poder dedicarle a cada mascota el tiempo que necesita sin aglomeraciones. Puedes reservar por teléfono, WhatsApp o a través del formulario de esta web.' },
    { q: '¿Hacéis servicio a gatos?', a: 'Actualmente nos especializamos en perros, pero atendemos gatos bajo consulta previa. Contáctanos para valorar tu caso.' },
  ];

  const beforeAfter = [
    { before: before1, after: after1, name: 'Kira - Bichón Maltés' },
    { before: before2, after: after2, name: 'Rocky - Yorkshire Terrier' },
    { before: before3, after: after3, name: 'Toby - Caniche' },
  ];

  const gallery = [heroImg, salonImg, teamImg, before1, after1, before2, after2, before3, after3];

  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      
      <div className="min-h-screen font-sans" style={{ background: pistachio[50] }}>
        {/* ─── NAVBAR ─── */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b" style={{ background: 'rgba(245,250,240,0.95)', borderColor: pistachio[200] }}>
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
            <button onClick={() => scrollTo('inicio')} className="flex items-center gap-2">
              <PawPrint className="h-7 w-7" style={{ color: pistachio[600] }} />
              <span className="text-xl font-bold" style={{ color: pistachio[800] }}>Le Petit Can</span>
            </button>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(l => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="text-sm font-medium hover:opacity-80 transition-colors" style={{ color: pistachio[700] }}>
                  {l.label}
                </button>
              ))}
              <button onClick={() => scrollTo('reserva')} className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105" style={{ background: pistachio[600] }}>
                Reservar Cita
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XIcon style={{ color: pistachio[700] }} /> : <Menu style={{ color: pistachio[700] }} />}
            </button>
          </div>
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden overflow-hidden border-t" style={{ borderColor: pistachio[200], background: pistachio[50] }}>
                <div className="px-4 py-4 space-y-3">
                  {navLinks.map(l => (
                    <button key={l.id} onClick={() => scrollTo(l.id)} className="block w-full text-left text-sm font-medium py-2" style={{ color: pistachio[700] }}>{l.label}</button>
                  ))}
                  <button onClick={() => scrollTo('reserva')} className="w-full py-3 rounded-full text-white font-semibold" style={{ background: pistachio[600] }}>Reservar Cita</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* ─── HERO ─── */}
        <section id="inicio" className="relative pt-16 overflow-hidden">
          <div className="relative h-[90vh] min-h-[600px]">
            <img src={heroImg} alt="Le Petit Can - Peluquería Canina" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26,46,13,0.7) 0%, rgba(106,171,45,0.4) 100%)' }} />
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}>
                    <PawPrint className="h-4 w-4" /> Peluquería Canina en Calella
                  </div>
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Tu peludo merece<br />
                    <span style={{ color: pistachio[300] }}>el mejor cuidado</span>
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                    En Le Petit Can cuidamos a tu mascota con cariño y productos naturales. Peluquería profesional adaptada a cada raza.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => scrollTo('reserva')} className="px-8 py-4 rounded-full font-bold text-white text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg" style={{ background: pistachio[600] }}>
                      <Calendar className="h-5 w-5" /> Reservar Cita
                    </button>
                    <a href="tel:+34698130777" className="px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform border-2 border-white/40 text-white backdrop-blur-sm">
                      <Phone className="h-5 w-5" /> Llamar Ahora
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INFO BAR ─── */}
        <div style={{ background: pistachio[700] }} className="py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-6 md:gap-12 text-white text-sm">
            <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Lun - Sáb: 9:00 - 19:00</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +34 698 13 07 77</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Calella, Barcelona</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 fill-current" /> 4.9/5 en Google</div>
          </div>
        </div>

        {/* ─── SERVICIOS ─── */}
        <section id="servicios" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: pistachio[600] }}>Nuestros Servicios</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: pistachio[900] }}>Todo lo que tu mascota necesita</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: pistachio[700] }}>Servicios profesionales con productos naturales e hipoalergénicos, adaptados a cada raza y tipo de pelo.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-6 border hover:shadow-lg transition-all hover:-translate-y-1 group"
                  style={{ background: '#fff', borderColor: pistachio[200] }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: pistachio[100] }}>
                    <s.icon className="h-6 w-6" style={{ color: pistachio[600] }} />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold" style={{ color: pistachio[900] }}>{s.name}</h3>
                    <span className="text-sm font-bold px-3 py-1 rounded-full" style={{ background: pistachio[100], color: pistachio[700] }}>{s.price}</span>
                  </div>
                  <p className="text-sm" style={{ color: pistachio[700] }}>{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-sm italic" style={{ color: pistachio[600] }}>* Los precios pueden variar según tamaño, estado del pelo y raza. Consulta sin compromiso.</p>
            </div>
          </div>
        </section>

        {/* ─── ANTES Y DESPUÉS ─── */}
        <section id="galeria" className="py-20 px-4" style={{ background: pistachio[100] }}>
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: pistachio[600] }}>Galería</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: pistachio[900] }}>Antes y Después</h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: pistachio[700] }}>Mira las transformaciones de nuestros peludos clientes. ¡Cada uno sale más guapo que el anterior!</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beforeAfter.map((ba, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="rounded-2xl overflow-hidden bg-white shadow-md">
                  <div className="grid grid-cols-2">
                    <div className="relative cursor-pointer" onClick={() => setLightboxImg(ba.before)}>
                      <img src={ba.before} alt={`${ba.name} antes`} className="w-full h-48 object-cover" />
                      <span className="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full bg-red-100 text-red-700">Antes</span>
                    </div>
                    <div className="relative cursor-pointer" onClick={() => setLightboxImg(ba.after)}>
                      <img src={ba.after} alt={`${ba.name} después`} className="w-full h-48 object-cover" />
                      <span className="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full" style={{ background: pistachio[100], color: pistachio[700] }}>Después</span>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-semibold" style={{ color: pistachio[800] }}>{ba.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8" style={{ color: pistachio[900] }}>Nuestro Salón</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[salonImg, teamImg, heroImg, after1].map((img, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow aspect-square" onClick={() => setLightboxImg(img)}>
                    <img src={img} alt="Le Petit Can salón" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── SOBRE NOSOTROS ─── */}
        <section id="nosotros" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={teamImg} alt="Equipo Le Petit Can" className="w-full h-[400px] object-cover" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: pistachio[600] }}>Sobre Nosotros</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6" style={{ color: pistachio[900] }}>Amor por los animales desde el primer día</h2>
                <p className="text-base mb-4" style={{ color: pistachio[700] }}>
                  En <strong>Le Petit Can</strong> llevamos más de 10 años cuidando del bienestar y la estética de tus mascotas en Calella. 
                  Nuestro equipo está formado por profesionales titulados en peluquería canina con formación continua en las últimas técnicas y tendencias.
                </p>
                <p className="text-base mb-6" style={{ color: pistachio[700] }}>
                  Trabajamos con un enfoque respetuoso: sin prisas, sin estrés, adaptándonos al carácter de cada animal. 
                  Usamos productos naturales e hipoalergénicos porque creemos que el cuidado empieza por dentro.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '+2.000', label: 'Peludos atendidos' },
                    { num: '10+', label: 'Años de experiencia' },
                    { num: '4.9★', label: 'Valoración Google' },
                    { num: '100%', label: 'Productos naturales' },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-4 rounded-xl" style={{ background: pistachio[100] }}>
                      <div className="text-2xl font-bold" style={{ color: pistachio[700] }}>{s.num}</div>
                      <div className="text-xs" style={{ color: pistachio[600] }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIOS ─── */}
        <section id="opiniones" className="py-20 px-4" style={{ background: pistachio[100] }}>
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: pistachio[600] }}>Opiniones</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: pistachio[900] }}>Lo que dicen nuestros clientes</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((t, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-shadow" style={{ borderColor: pistachio[200] }}>
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-current" style={{ color: '#f59e0b' }} />
                    ))}
                  </div>
                  <p className="text-sm mb-4 italic" style={{ color: pistachio[700] }}>"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: pistachio[900] }}>{t.name}</p>
                    <p className="text-xs" style={{ color: pistachio[500] }}>{t.pet}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section id="faq" className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: pistachio[600] }}>FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: pistachio[900] }}>Preguntas Frecuentes</h2>
            </motion.div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  className="rounded-xl border overflow-hidden" style={{ borderColor: pistachio[200], background: '#fff' }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                    <span className="font-semibold pr-4" style={{ color: pistachio[900] }}>{f.q}</span>
                    {openFaq === i ? <ChevronUp className="h-5 w-5 flex-shrink-0" style={{ color: pistachio[500] }} /> : <ChevronDown className="h-5 w-5 flex-shrink-0" style={{ color: pistachio[500] }} />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm" style={{ color: pistachio[700] }}>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RESERVA ─── */}
        <section id="reserva" className="py-20 px-4" style={{ background: pistachio[100] }}>
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: pistachio[600] }}>Reserva Online</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: pistachio[900] }}>Pide tu cita ahora</h2>
              <p className="text-lg" style={{ color: pistachio[700] }}>Rellena el formulario y te confirmaremos tu cita en menos de 2 horas.</p>
            </motion.div>
            <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              onSubmit={handleBookingSubmit} className="bg-white rounded-2xl p-8 shadow-lg border" style={{ borderColor: pistachio[200] }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: pistachio[800] }}>Tu nombre *</label>
                  <input name="name" value={bookingForm.name} onChange={handleBookingChange} required
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2" 
                    style={{ borderColor: pistachio[200], '--tw-ring-color': pistachio[400] } as React.CSSProperties}
                    placeholder="Ej: María García" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: pistachio[800] }}>Teléfono *</label>
                  <input name="phone" value={bookingForm.phone} onChange={handleBookingChange} required type="tel"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: pistachio[200], '--tw-ring-color': pistachio[400] } as React.CSSProperties}
                    placeholder="+34 600 000 000" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: pistachio[800] }}>Email</label>
                  <input name="email" value={bookingForm.email} onChange={handleBookingChange} type="email"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: pistachio[200], '--tw-ring-color': pistachio[400] } as React.CSSProperties}
                    placeholder="maria@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: pistachio[800] }}>Nombre de tu mascota *</label>
                  <input name="pet" value={bookingForm.pet} onChange={handleBookingChange} required
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: pistachio[200], '--tw-ring-color': pistachio[400] } as React.CSSProperties}
                    placeholder="Ej: Luna" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: pistachio[800] }}>Raza</label>
                  <input name="breed" value={bookingForm.breed} onChange={handleBookingChange}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: pistachio[200], '--tw-ring-color': pistachio[400] } as React.CSSProperties}
                    placeholder="Ej: Caniche" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: pistachio[800] }}>Servicio *</label>
                  <select name="service" value={bookingForm.service} onChange={handleBookingChange} required
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: pistachio[200], '--tw-ring-color': pistachio[400] } as React.CSSProperties}>
                    <option value="">Selecciona un servicio</option>
                    {services.map((s, i) => <option key={i} value={s.name}>{s.name} - {s.price}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: pistachio[800] }}>Fecha preferida</label>
                  <input name="date" value={bookingForm.date} onChange={handleBookingChange} type="date"
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: pistachio[200], '--tw-ring-color': pistachio[400] } as React.CSSProperties} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: pistachio[800] }}>Notas adicionales</label>
                  <input name="notes" value={bookingForm.notes} onChange={handleBookingChange}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2"
                    style={{ borderColor: pistachio[200], '--tw-ring-color': pistachio[400] } as React.CSSProperties}
                    placeholder="Ej: Mi perro es nervioso..." />
                </div>
              </div>
              <button type="submit" className="w-full mt-6 py-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
                style={{ background: `linear-gradient(135deg, ${pistachio[600]}, ${pistachio[700]})` }}>
                <Calendar className="h-5 w-5" /> Solicitar Cita
              </button>
              <p className="text-center text-xs mt-3" style={{ color: pistachio[500] }}>Te confirmaremos por teléfono o WhatsApp en menos de 2 horas.</p>
            </motion.form>
          </div>
        </section>

        {/* ─── CONTACTO Y MAPA ─── */}
        <section id="contacto" className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: pistachio[600] }}>Contacto</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4" style={{ color: pistachio[900] }}>¿Dónde encontrarnos?</h2>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 border shadow-sm" style={{ borderColor: pistachio[200] }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: pistachio[900] }}>Información de contacto</h3>
                  <div className="space-y-4">
                    <a href="tel:+34698130777" className="flex items-center gap-3 hover:opacity-80">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: pistachio[100] }}>
                        <Phone className="h-5 w-5" style={{ color: pistachio[600] }} />
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: pistachio[500] }}>Teléfono / WhatsApp</p>
                        <p className="font-medium" style={{ color: pistachio[900] }}>+34 698 13 07 77</p>
                      </div>
                    </a>
                    <a href="mailto:info@lepetitcan.com" className="flex items-center gap-3 hover:opacity-80">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: pistachio[100] }}>
                        <Mail className="h-5 w-5" style={{ color: pistachio[600] }} />
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: pistachio[500] }}>Email</p>
                        <p className="font-medium" style={{ color: pistachio[900] }}>info@lepetitcan.com</p>
                      </div>
                    </a>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: pistachio[100] }}>
                        <MapPin className="h-5 w-5" style={{ color: pistachio[600] }} />
                      </div>
                      <div>
                        <p className="text-xs" style={{ color: pistachio[500] }}>Dirección</p>
                        <p className="font-medium" style={{ color: pistachio[900] }}>Calella, Barcelona</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 border shadow-sm" style={{ borderColor: pistachio[200] }}>
                  <h3 className="font-bold text-lg mb-4" style={{ color: pistachio[900] }}>Horarios</h3>
                  <div className="space-y-2 text-sm">
                    {[
                      { day: 'Lunes - Viernes', hours: '9:00 - 19:00' },
                      { day: 'Sábado', hours: '9:00 - 14:00' },
                      { day: 'Domingo', hours: 'Cerrado' },
                    ].map((h, i) => (
                      <div key={i} className="flex justify-between py-2 border-b" style={{ borderColor: pistachio[100] }}>
                        <span style={{ color: pistachio[700] }}>{h.day}</span>
                        <span className="font-medium" style={{ color: h.hours === 'Cerrado' ? '#ef4444' : pistachio[900] }}>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-medium hover:opacity-90 transition-opacity" style={{ background: '#E4405F' }}>
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-medium hover:opacity-90 transition-opacity" style={{ background: '#1877F2' }}>
                    <Facebook className="h-4 w-4" /> Facebook
                  </a>
                  <a href="https://maps.app.goo.gl/aVbZBFTF9bhTsuQ77" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl text-white text-sm font-medium hover:opacity-90 transition-opacity" style={{ background: pistachio[600] }}>
                    <MapPin className="h-4 w-4" /> Google Maps
                  </a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.5!2d2.6536!3d41.6131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb5c5f9e8d25f9%3A0x1234!2sCalella%2C+Barcelona!5e0!3m2!1ses!2ses!4v1"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Ubicación Le Petit Can"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="py-10 px-4 border-t" style={{ background: pistachio[900], borderColor: pistachio[800] }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <PawPrint className="h-5 w-5" style={{ color: pistachio[400] }} />
                <span className="font-bold text-white">Le Petit Can</span>
                <span className="text-sm" style={{ color: pistachio[400] }}>· Peluquería Canina en Calella</span>
              </div>
              <p className="text-sm" style={{ color: pistachio[500] }}>© {new Date().getFullYear()} Le Petit Can. Todos los derechos reservados.</p>
            </div>
            <div className="mt-4 pt-4 border-t flex items-center justify-center" style={{ borderColor: pistachio[800] }}>
              <a href="https://livs.es" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: pistachio[500] }}>
                Desarrollado por <span className="font-semibold" style={{ color: pistachio[400] }}>LIVS</span> · Soluciones de IA para empresas
              </a>
            </div>
          </div>
        </footer>

        {/* ─── LIGHTBOX ─── */}
        <AnimatePresence>
          {lightboxImg && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setLightboxImg(null)}>
              <button className="absolute top-4 right-4 text-white hover:opacity-80"><X className="h-8 w-8" /></button>
              <motion.img initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                src={lightboxImg} alt="Galería Le Petit Can" className="max-w-full max-h-[85vh] rounded-lg object-contain" onClick={e => e.stopPropagation()} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── FLOATING CTA ─── */}
        <a href="https://wa.me/34698130777" target="_blank" rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          style={{ background: '#25D366' }}>
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.122 1.52 5.86L0 24l6.335-1.652A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.883 0-3.63-.513-5.14-1.398l-.368-.22-3.813.999 1.017-3.713-.24-.382A9.71 9.71 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
          </svg>
        </a>
      </div>
    </>
  );
};

export default LePetitCan;
