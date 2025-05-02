import React, { useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Balloons, BalloonsRef } from '@/components/ui/balloons';
import { useToast } from '@/hooks/use-toast';
interface ContactInfoProps {
  contactEmail: string;
}
const ContactInfo = ({
  contactEmail
}: ContactInfoProps) => {
  const balloonsRef = useRef<BalloonsRef>(null);
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
              <div className="font-medium text-livs-blue">Teléfono</div>
              <a href="tel:+34911234567" className="text-livs-gray-dark hover:text-livs-purple">+34 609 92 74 95
+34 678  25 82 80
            </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            
            <div>
              <div className="font-medium text-livs-blue">
            </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-livs-blue to-livs-purple rounded-xl p-8 text-white">
        <h4 className="text-xl font-semibold mb-4">Solicite una consulta gratuita</h4>
        <p className="mb-6 opacity-90">
          Ofrecemos una sesión inicial de consultoría sin compromiso para evaluar 
          cómo la IA puede optimizar su empresa.
        </p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-white text-livs-blue hover:bg-white/90">
              Reservar ahora
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Consulta gratuita</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p>Por favor, complete el formulario de contacto con sus datos y mencionando "Consulta gratuita" en el mensaje.</p>
              <Button onClick={handleReserveNow} className="w-full bg-gradient-to-r from-livs-blue to-livs-purple hover:opacity-90">
                Confirmar solicitud
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        
        {/* Componente Balloons invisible pero funcional */}
        <Balloons ref={balloonsRef} type="default" className="hidden" />
      </div>
    </div>;
};
export default ContactInfo;