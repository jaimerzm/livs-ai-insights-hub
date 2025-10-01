
import React from 'react';
import { Check, Info, TrendingUp, BarChart } from 'lucide-react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Tooltip as UITooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';

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
  
  // Interesting AI facts with icons
  const aiFacts = [
    {
      icon: <BarChart className="h-6 w-6 text-livs-cyan" />,
      fact: "El 63% de las empresas que adoptaron IA reportaron un aumento en ingresos",
      source: "McKinsey"
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-livs-purple" />,
      fact: "La automatización con IA puede ahorrar hasta 20-30 horas semanales por empleado",
      source: "Deloitte"
    },
    {
      icon: <Info className="h-6 w-6 text-livs-cyan" />,
      fact: "Las empresas con IA tienen un 35% más probabilidades de superar a su competencia",
      source: "BCG"
    }
  ];
  
  return <section id="beneficios" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-livs-gray-light opacity-50 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">Beneficios Cuantificables</h2>
          <p className="text-gray-700 text-lg mb-2">
            Nuestras soluciones de inteligencia artificial ofrecen resultados medibles
            que impactan directamente en su rentabilidad y crecimiento.
          </p>
          <p className="text-gray-600 text-sm italic">
            Estos son promedios reportados por empresas que ya usan IA.
          </p>
        </div>

        {/* IA Facts Cards - Added new visual section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <TooltipProvider>
            {aiFacts.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-livs-gray-light/20 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-livs-gray-light/30">
                <div className="flex items-start gap-4">
                   <div className="rounded-full bg-white p-2 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-black text-lg">{item.fact}</p>
                    <UITooltip>
                      <TooltipTrigger asChild>
                        <p className="text-xs text-gray-600 cursor-help mt-1">Fuente: {item.source}</p>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">Investigación realizada por {item.source}</p>
                      </TooltipContent>
                    </UITooltip>
                  </div>
                </div>
              </div>
            ))}
          </TooltipProvider>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {benefits.map((benefit, index) => <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-livs-purple hover:transform hover:-translate-y-1 transition-transform duration-300">
              <div className="text-4xl font-bold text-livs-purple mb-2">{benefit.stat}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
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
                    <RechartsBarChart data={graphData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                      <XAxis dataKey="año" stroke="rgba(255,255,255,0.8)" />
                      <YAxis stroke="rgba(255,255,255,0.8)" />
                      <Tooltip content={<CustomTooltip />} />
                      <Legend wrapperStyle={{ fontSize: '10px', color: '#fff' }} />
                      <Bar dataKey="adopción" name="Adopción de IA" fill="#36A2EB" />
                      <Bar dataKey="eficiencia" name="Mejora de Eficiencia" fill="#4BC0C0" />
                      <Bar dataKey="competitividad" name="Aumento Competitividad" fill="#9966FF" />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
                <div className="absolute bottom-2 right-3 text-xs text-white/70">
                  Fuente: Gartner, McKinsey & IDC 2025
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
      <div className="bg-white text-gray-900 p-2 rounded shadow-lg text-xs">
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
