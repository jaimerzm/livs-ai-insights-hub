
import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { Balloons, BalloonsRef } from '@/components/ui/balloons';
import { useToast } from '@/hooks/use-toast';

interface ContactInfoProps {
  contactEmail: string;
}

const ContactInfo = ({
  contactEmail
}: ContactInfoProps) => {
  const balloonsRef = useRef<BalloonsRef>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const {
    toast
  } = useToast();

  const handleReserveNow = () => {
    if (balloonsRef.current) {
      balloonsRef.current.launchAnimation();
    }
    toast({
      title: "Solicitud enviada",
      description: "Hemos recibido su solicitud de consulta gratuita. Nos pondremos en contacto pronto.",
      duration: 5000
    });
  };

  return <div className="flex flex-col justify-between">
      <div className="mb-8">
        <h3 className="text-livs-blue text-2xl font-bold mb-6">Información de contacto</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="h-6 w-6 text-livs-purple" />
            <div>
              <div className="font-medium text-livs-blue">Email</div>
              <a href={`mailto:${contactEmail}`} className="text-livs-gray-dark hover:text-livs-purple">
                {contactEmail}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-6 w-6 text-livs-purple" />
            <div>
              <div className="font-medium text-livs-blue">Teléfonos de contacto:</div>
              <a href="tel:+34911234567" className="text-livs-gray-dark hover:text-livs-purple">+34 609 92 74 95                
+34 678 25 82 80</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div>
              <div className="font-medium text-livs-blue"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Pricing Section */}
      <div className="mb-8 bg-gradient-to-r from-[#f0f4ff] to-[#e6eeff] p-6 rounded-lg shadow-md border-2 border-[#d1dcfa] transform hover:scale-[1.02] transition-all duration-300">
        <h3 className="text-livs-blue text-xl font-bold mb-4 flex items-center">
          <span className="bg-livs-blue text-white rounded-full w-7 h-7 inline-flex items-center justify-center mr-2">€</span>
          Precios
        </h3>
        <div className="border-l-4 border-livs-purple pl-4">
          <p className="text-livs-gray-dark mb-4">
            Nuestros precios se acuerdan de manera personalizada y privada, ya que dependen de:
          </p>
          <ul className="list-disc pl-5 text-livs-gray-dark mb-4">
            <li>Las exigencias específicas de cada proyecto</li>
            <li>El tipo de cliente y sus necesidades particulares</li>
            <li>El tamaño y sector de la empresa</li>
            <li>El alcance y la duración de los servicios requeridos</li>
          </ul>
        </div>
        <p className="text-livs-gray-dark italic bg-white p-3 rounded-md shadow-sm">
          Contáctenos para obtener una cotización adaptada a su situación específica.
        </p>
        
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button 
              variant="default" 
              className="w-full mt-4 bg-white border border-livs-purple text-livs-purple hover:bg-livs-purple hover:text-white transition-colors duration-300 flex items-center justify-center py-3 text-sm whitespace-normal h-auto"
            >
              <ShieldCheck className="mr-2 h-5 w-5 flex-shrink-0" /> 
              <span className="leading-tight">
                Si no acabas satisfecho con el aprendizaje,<br />te devolvemos el dinero ;)
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-center text-xl text-livs-blue flex items-center justify-center gap-2">
                <ShieldCheck className="h-6 w-6 text-livs-purple" /> 
                Garantía de Devolución del 100%
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-200">
                <h4 className="font-bold text-livs-blue text-lg mb-3">Nuestro Compromiso con Su Satisfacción</h4>
                <p className="text-livs-gray-dark mb-4">
                  Si después de completar nuestro servicio de consultoría o formación en IA, no está completamente satisfecho 
                  con los resultados obtenidos o considera que el aprendizaje no ha sido útil para su negocio, 
                  le devolveremos el 100% de su inversión.
                </p>
                <p className="text-livs-gray-dark">
                  Esta garantía demuestra nuestro compromiso con la calidad del servicio y la confianza que 
                  tenemos en nuestra capacidad para generar valor real para su empresa mediante la implementación 
                  de soluciones de inteligencia artificial.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-livs-purple shadow-sm">
                <p className="text-center italic font-medium text-livs-blue">
                  "Su satisfacción es nuestra prioridad. Si no ve resultados, no paga."
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>;
};

export default ContactInfo;
