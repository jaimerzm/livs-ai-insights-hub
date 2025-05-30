import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
const CookiesPolicy = () => {
  return <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto border border-gray-700 rounded-lg p-6 shadow-lg bg-gradient-to-br from-gray-900 to-black">
          <div className="prose prose-invert prose-sm">
            <h1 className="text-2xl font-bold mb-6 text-white">Política de Cookies de LIVS</h1>
            
            <p className="text-sm">
              En LIVS utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle contenido relacionado con sus preferencias mediante el análisis de sus hábitos de navegación. A continuación, encontrará información detallada sobre qué son las cookies, qué tipología utiliza este sitio web, cómo puede desactivarlas en su navegador y cómo bloquear específicamente la instalación de cookies de terceros.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">¿Qué son las cookies?</h2>
            <p className="text-sm">
              Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita páginas web. Estas permiten reconocer al usuario, almacenar información sobre sus preferencias para ofrecerle una experiencia personalizada, además de recopilar información estadística sobre la navegación en el sitio web.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">Tipos de cookies que utilizamos</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Cookies técnicas:</strong> Permiten al usuario la navegación y la utilización de las diferentes opciones o servicios que existen como, por ejemplo, identificar la sesión, personalizar la interfaz o recordar elementos que integran un pedido.</li>
              <li><strong>Cookies de análisis:</strong> Permiten el seguimiento y análisis del comportamiento de los usuarios en el sitio web para la elaboración de perfiles de navegación, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</li>
              <li><strong>Cookies publicitarias:</strong> Permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, se hayan incluido en el sitio web en base a criterios como el contenido editado o la frecuencia con la que se muestran los anuncios.</li>
              <li><strong>Cookies de publicidad comportamental:</strong> Almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite desarrollar un perfil específico para mostrar publicidad en función del mismo.</li>
            </ul>

            
            
            

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">Actualizaciones y cambios en la Política de Cookies</h2>
            <p className="text-sm">
              LIVS puede modificar esta Política de Cookies en función de exigencias legislativas, regulatorias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.
            </p>
            
            <div className="mt-12 flex space-x-4">
              <Link to="/" className="text-livs-blue hover:text-livs-purple text-sm">Volver a la página principal</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default CookiesPolicy;