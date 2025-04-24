import React from 'react';
import { LinkedinIcon } from 'lucide-react';
const AboutSection = () => {
  const team = [{
    name: "Jaime Ruiz",
    position: "Co-Fundador & Director de Tecnología",
    bio: "Con más de 10 años de experiencia en el desarrollo e implementación de soluciones de IA para empresas multinacionales. Especialista en aprendizaje automático y procesamiento del lenguaje natural.",
    linkedin: "#"
  }, {
    name: "Manuel Talón",
    position: "Co-Fundador & Director de Estrategia",
    bio: "Consultor estratégico con amplia experiencia en transformación digital y optimización de procesos empresariales mediante tecnologías emergentes. Experto en análisis de datos y sistemas predictivos.",
    linkedin: "#"
  }];
  return <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-livs-gray-dark text-lg mb-6">
              En Livs, nos apasiona el poder transformador de la inteligencia artificial 
              y su capacidad para revolucionar las operaciones empresariales. Fundada por 
              Jaime Ruiz y Manuel Talón, Livs nace con la misión de democratizar el acceso 
              a la IA para todo tipo de empresas.
            </p>
            <p className="text-livs-gray-dark text-lg mb-6">
              Nuestro enfoque combina un profundo conocimiento técnico con una sólida 
              comprensión de los desafíos empresariales, permitiéndonos ofrecer soluciones 
              que generan valor real y medible para nuestros clientes.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-livs-gray-light px-4 py-2 rounded-full text-livs-blue"> años de experiencia en IA</div>
              <div className="bg-livs-gray-light px-4 py-2 rounded-full text-livs-blue">+calidad
 -tiempo</div>
              <div className="bg-livs-gray-light px-4 py-2 rounded-full text-livs-blue">mejoras garantizadas</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, index) => <div key={index} className="bg-livs-gray-light border border-livs-gray rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-livs-blue to-livs-purple rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-livs-blue mb-2">{member.name}</h3>
                <div className="text-livs-purple font-medium mb-3 text-sm">{member.position}</div>
                <p className="text-livs-gray-dark mb-4">{member.bio}</p>
                <a href={member.linkedin} className="inline-flex items-center gap-1 text-livs-blue hover:text-livs-purple" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon className="h-4 w-4" />
                  <span>Perfil LinkedIn</span>
                </a>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;