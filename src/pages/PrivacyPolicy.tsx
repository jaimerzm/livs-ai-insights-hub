
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert">
            <h1 className="text-3xl font-bold mb-6 text-white">Aviso Legal de LIVS</h1>
            
            <p>
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), así como el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se exponen a continuación los datos identificativos de la empresa responsable de este sitio web.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Datos identificativos del titular</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Nombre de la empresa:</strong> LIVS</li>
              <li><strong>Titularidad:</strong> Sociedad creada por dos socios fundadores</li>
              <li><strong>Actividad:</strong> Consultoría y formación en inteligencia artificial, asesoramiento a empresas para la integración de IA, mejora y creación de páginas web corporativas</li>
              <li><strong>Correo electrónico de contacto:</strong> [Introduce aquí tu correo de contacto]</li>
              <li><strong>Teléfono de contacto:</strong> [Introduce aquí tu teléfono de contacto]</li>
              <li><strong>Domicilio social:</strong> [Introduce aquí la dirección física, si la tenéis]</li>
              <li><strong>NIF/CIF:</strong> [Introduce aquí el NIF/CIF de la empresa o autónomos]</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Objeto</h2>
            <p>
              El presente sitio web tiene como finalidad ofrecer información sobre los servicios de LIVS, que consisten en la consultoría, formación y asesoramiento a empresas en el ámbito de la inteligencia artificial, así como la mejora o creación de páginas web corporativas para terceros.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Condiciones de uso</h2>
            <p>
              El acceso y/o uso de este sitio web atribuye la condición de usuario, que acepta, desde dicho acceso y/o uso, las presentes condiciones generales de uso. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que LIVS ofrece a través de su portal y a no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Propiedad intelectual e industrial</h2>
            <p>
              Todos los contenidos del sitio web, incluyendo textos, imágenes, gráficos, logos, iconos, software, nombres comerciales, marcas o signos distintivos, son propiedad de LIVS o, en su caso, de terceros, y están protegidos por la legislación vigente en materia de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución o comunicación pública, total o parcial, sin la autorización expresa de LIVS.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Responsabilidad</h2>
            <p>
              LIVS no se hace responsable de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Protección de datos personales</h2>
            <p>
              LIVS cumple con la normativa vigente en materia de protección de datos personales. Los datos personales que se recaben a través de los formularios de contacto serán tratados con la finalidad de gestionar las consultas, solicitudes o servicios contratados, así como para enviar información comercial relacionada con nuestros servicios, siempre que el usuario haya dado su consentimiento expreso para ello. Los datos no serán cedidos a terceros salvo obligación legal o para la correcta prestación del servicio contratado.
            </p>
            <p>
              El usuario puede ejercer sus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad de sus datos, así como retirar el consentimiento prestado, dirigiéndose a LIVS a través del correo electrónico facilitado o mediante escrito a la dirección postal indicada. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos si considera que el tratamiento de sus datos no se ajusta a la normativa vigente.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Enlaces a terceros</h2>
            <p>
              En el caso de que en este sitio web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, LIVS no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso LIVS asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Modificaciones</h2>
            <p>
              LIVS se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que estos aparezcan presentados o localizados en su portal.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-white">Legislación aplicable y jurisdicción</h2>
            <p>
              La relación entre LIVS y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad donde se encuentre el domicilio social de LIVS, salvo que la Ley disponga otra cosa.
            </p>
            
            <div className="mt-12 flex space-x-4">
              <Link to="/" className="text-livs-blue hover:text-livs-purple">Volver a la página principal</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
