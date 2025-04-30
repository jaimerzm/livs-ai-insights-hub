
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const ContactSection = () => {
  const { toast } = useToast();
  const contactEmail = 'soporte.livs.business@gmail.com';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Reemplaza esta clave de acceso con la tuya de Web3Forms
          access_key: "5c17cd0a-8c54-4b87-bf47-d6e388f0fadc",
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          subject: "Nuevo mensaje de contacto - LIVS",
          from_name: "Formulario de Contacto LIVS",
          to_email: contactEmail, // Asegura que los correos lleguen a tu dirección
        })
      });

      const result = await response.json();
      if (result.success) {
        toast({
          title: "Formulario enviado",
          description: "Su mensaje ha sido enviado correctamente. Nos pondremos en contacto pronto.",
          duration: 5000,
        });

        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Error al enviar el formulario');
      }

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar su mensaje. Por favor, intente nuevamente.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-livs-gray-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-livs-blue text-3xl md:text-4xl font-bold mb-4">Contáctenos</h2>
          <p className="text-livs-gray-dark text-lg">
            ¿Listo para transformar su negocio con inteligencia artificial? 
            Póngase en contacto con nosotros y descubra cómo podemos ayudarle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-livs-blue text-2xl font-bold mb-6">Envíe su consulta</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-livs-blue font-medium">
                    Nombre *
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Su nombre" 
                    required 
                    className="border-livs-gray"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-livs-blue font-medium">
                    Empresa
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Nombre de su empresa" 
                    className="border-livs-gray"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-livs-blue font-medium">
                    Email *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Su correo electrónico" 
                    required 
                    className="border-livs-gray"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-livs-blue font-medium">
                    Teléfono
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Su número de teléfono" 
                    className="border-livs-gray"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-livs-blue font-medium">
                  Mensaje *
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Describa brevemente su proyecto o consulta" 
                  required 
                  className="border-livs-gray resize-none min-h-[120px]"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  required 
                  className="rounded border-livs-gray text-livs-purple h-4 w-4"
                />
                <label htmlFor="privacy" className="text-sm text-livs-gray-dark">
                  Acepto la <a href="#" className="text-livs-blue hover:underline">política de privacidad</a>
                </label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-livs-blue to-livs-purple hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
              </Button>
            </form>
          </div>

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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
