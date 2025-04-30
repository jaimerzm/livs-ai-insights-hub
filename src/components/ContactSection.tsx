
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import ContactForm from './contact/ContactForm';
import ContactInfo from './contact/ContactInfo';
import { submitContactForm } from '@/services/contactService';

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
      const result = await submitContactForm(formData, contactEmail);
      
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
          <ContactForm 
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
          <ContactInfo contactEmail={contactEmail} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
