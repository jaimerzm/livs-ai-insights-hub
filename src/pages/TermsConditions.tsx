import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto border border-gray-700 rounded-lg p-6 shadow-lg bg-gradient-to-br from-gray-900 to-black">
          <div className="prose prose-invert prose-sm">
            <h1 className="text-2xl font-bold mb-6 text-white">Términos y Condiciones de LIVS</h1>
            
            <p className="text-sm">
              Estos términos y condiciones establecen las normas y regulaciones para el uso del sitio web de LIVS, ubicado en [URL del sitio]. Al acceder a este sitio web, asumimos que usted acepta estos términos y condiciones en su totalidad. No continúe utilizando el sitio web de LIVS si no acepta todos los términos y condiciones establecidos en esta página.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">1. Terminología</h2>
            <p className="text-sm">
              La siguiente terminología se aplica a estos Términos y Condiciones, Declaración de Privacidad y Aviso de Exención de Responsabilidad y todos los Acuerdos: "Cliente", "Usted" y "Su" se refiere a usted, la persona que accede a este sitio web y acepta los términos y condiciones de la Compañía. "La Compañía", "Nosotros mismos", "Nosotros", "Nuestro" y "Nos", se refiere a nuestra Compañía. "Parte", "Partes" o "Nosotros", se refiere tanto al Cliente como a nosotros mismos, o al Cliente o a nosotros mismos.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">2. Licencia</h2>
            <p className="text-sm">
              A menos que se indique lo contrario, LIVS y/o sus licenciatarios poseen los derechos de propiedad intelectual de todo el material en LIVS. Todos los derechos de propiedad intelectual son reservados. Puede ver y/o imprimir páginas desde [URL del sitio] para su uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>No debe reproducir, duplicar, copiar, vender, revender o explotar cualquier parte del Servicio.</li>
              <li>No debe modificar o copiar los materiales.</li>
              <li>No debe utilizar los materiales para ningún fin comercial o para exhibición pública.</li>
              <li>No debe intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web de LIVS.</li>
            </ul>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">3. Exención de responsabilidad</h2>
            <p className="text-sm">
              Los materiales en el sitio web de LIVS se proporcionan "tal cual". LIVS no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluidas, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos. Además, LIVS no garantiza ni hace ninguna representación con respecto a la precisión, los resultados probables, o la confiabilidad del uso de los materiales en su sitio web o de otra manera relacionados con dichos materiales o en cualquier sitio vinculado a este sitio.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">4. Limitaciones</h2>
            <p className="text-sm">
              En ningún caso LIVS o sus proveedores serán responsables por cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o beneficio, o debido a la interrupción del negocio) que surja del uso o la incapacidad de usar los materiales en el sitio web de LIVS, incluso si LIVS o un representante autorizado de LIVS ha sido notificado oralmente o por escrito de la posibilidad de tal daño.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">5. Modificaciones</h2>
            <p className="text-sm">
              LIVS puede revisar estos términos de servicio para su sitio web en cualquier momento sin previo aviso. Al utilizar este sitio web, usted acepta estar obligado por la versión actual de estos términos y condiciones.
            </p>

            <h2 className="text-lg font-semibold mt-8 mb-4 text-white">6. Legislación aplicable</h2>
            <p className="text-sm">
              Cualquier reclamación relacionada con el sitio web de LIVS se regirá por las leyes de España sin referencia a su conflicto de provisiones legales.
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

export default TermsConditions;
