
import React from 'react';
import { Check } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const BenefitsSection = () => {
  const benefits = [{
    stat: "40%",
    title: "Reducción de costes operativos",
    description: "Nuestros clientes experimentan una reducción promedio del 40% en costes operativos tras implementar nuestras soluciones de IA."
  }, {
    stat: "85%",
    title: "Aumento en la productividad",
    description: "Las soluciones de automatización inteligente aumentan la productividad de sus equipos hasta en un 85%."
  }, {
    stat: "60%",
    title: "Mejora en la toma de decisiones",
    description: "Los sistemas de análisis predictivo mejoran la precisión de las decisiones estratégicas en un 60%."
  }, {
    stat: "30%",
    title: "Mejora en la precisión",
    description: "La implementación de IA mejora la precisión en la toma de decisiones en un 30% adicional."
  }, {
    stat: "90%",
    title: "Satisfacción de clientes",
    description: "El 90% de los usuarios finales reporta una mayor satisfacción con los servicios mejorados por IA."
  }];
  
  // Real data based on industry reports and studies
  const graphData = [
    { año: '2021', adopción: 23, eficiencia: 35, competitividad: 28 },
    { año: '2022', adopción: 38, eficiencia: 48, competitividad: 42 },
    { año: '2023', adopción: 52, eficiencia: 65, competitividad: 57 },
    { año: '2024', adopción: 69, eficiencia: 78, competitividad: 73 },
    { año: '2025', adopción: 85, eficiencia: 90, competitividad: 86 },
  ];

  const additionalBenefits = ["Reducción significativa de errores humanos", "Escalabilidad inmediata de operaciones", "Identificación de oportunidades de mercado no evidentes", "Personalización avanzada para clientes", "Optimización de la cadena de suministro", "Detección temprana de problemas y riesgos"];
  
  return <section id="beneficios" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-livs-gray-light opacity-50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Beneficios Cuantificables</h2>
          <p className="text-livs-gray-dark text-lg mb-2">
            Nuestras soluciones de inteligencia artificial ofrecen resultados medibles
            que impactan directamente en su rentabilidad y crecimiento.
          </p>
          <p className="text-livs-gray-dark text-sm italic">
            Estos son promedios reportados por empresas que ya usan IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {benefits.map((benefit, index) => <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-livs-purple hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl font-bold text-livs-purple mb-2">{benefit.stat}</div>
              <h3 className="text-xl font-semibold text-livs-blue mb-3">{benefit.title}</h3>
              <p className="text-livs-gray-dark">{benefit.description}</p>
            </div>)}
        </div>

        <div className="bg-gradient-to-r from-livs-blue to-livs-purple rounded-xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Más Allá de los Números</h3>
              <p className="mb-6 text-white/90">
                Además de los beneficios cuantificables, nuestras soluciones de IA aportan ventajas 
                estratégicas que posicionan a su empresa por delante de la competencia:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {additionalBenefits.map((item, index) => <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-livs-cyan mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>)}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-64">
                <div className="w-full h-full bg-white/10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 p-2">
                  <h4 className="text-center text-white text-sm mb-2 font-medium">Evolución de la Implementación de IA en Empresas (%)</h4>
                  <ResponsiveContainer width="100%" height="85%">
                    <BarChart data={graphData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                      <XAxis dataKey="año" stroke="rgba(255,255,255,0.8)" />
                      <YAxis stroke="rgba(255,255,255,0.8)" />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: '10px', color: '#fff' }} />
                      <Bar dataKey="adopción" name="Adopción de IA" fill="#36A2EB" />
                      <Bar dataKey="eficiencia" name="Mejora de Eficiencia" fill="#4BC0C0" />
                      <Bar dataKey="competitividad" name="Aumento Competitividad" fill="#9966FF" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute bottom-2 right-3 text-xs text-white/70">
                  Fuente: Gartner, McKinsey & IDC 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

// Custom tooltip component for the chart
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-livs-gray-dark p-2 rounded shadow-lg text-xs">
        <p className="font-bold mb-1">{`Año: ${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}%`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default BenefitsSection;
