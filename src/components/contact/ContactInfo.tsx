
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactInfoProps {
  contactEmail: string;
}

const ContactInfo = ({ contactEmail }: ContactInfoProps) => {
  return (
    <div className="flex flex-col justify-between">
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
              <a href="tel:+34911234567" className="text-livs-gray-dark hover:text-livs-purple">
                +34 91 123 45 67
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="h-6 w-6 text-livs-purple" />
            <div>
              <div className="font-medium text-livs-blue">Oficina</div>
              <address className="not-italic text-livs-gray-dark">
                Calle de la Innovación, 42<br />
                28001 Madrid, España
              </address>
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
        <Button 
          variant="outline" 
          className="bg-white text-livs-blue hover:bg-white/90"
        >
          Reservar ahora
        </Button>
      </div>
    </div>
  );
};

export default ContactInfo;
