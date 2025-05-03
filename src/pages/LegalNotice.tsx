
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const LegalNotice = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto border border-gray-700 rounded-lg p-6 shadow-lg bg-gradient-to-br from-gray-900 to-black">
          <div className="prose prose-invert prose-sm">
            <h1 className="text-2xl font-bold mb-6 text-white">Aviso Legal de LIVS</h1>
            
            <p className="text-sm">
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se exponen a continuación los datos identificativos de la empresa responsable de este sitio web.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">Datos de la Empresa</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Denominación Social:</strong> LIVS</li>
              <li><strong>Tipo de Sociedad:</strong> Sociedad Limitada</li>
              <li><strong>Actividad:</strong> Consultoría y formación en inteligencia artificial</li>
              <li><strong>Domicilio Social:</strong> [Dirección de la empresa]</li>
              <li><strong>Email:</strong> contacto@livs.com</li>
              <li><strong>Teléfono:</strong> [Número de teléfono]</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">Propiedad Intelectual e Industrial</h2>
            <p className="text-sm">
              El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad de LIVS o, en su caso, dispone de licencia o autorización expresa por parte de los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial.
            </p>
            <p className="text-sm">
              Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte de LIVS. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">Exención de Responsabilidades</h2>
            <p className="text-sm">
              LIVS se exime de cualquier tipo de responsabilidad derivada de la información publicada en su sitio web siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">Política de Enlaces</h2>
            <p className="text-sm">
              Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que LIVS no puede controlar siempre los contenidos introducidos por los terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos. En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">Ley Aplicable y Jurisdicción</h2>
            <p className="text-sm">
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales correspondientes.
            </p>
            
            <div className="mt-12 flex space-x-4">
              <Link to="/" className="text-livs-blue hover:text-livs-purple text-sm">Volver a la página principal</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalNotice;
