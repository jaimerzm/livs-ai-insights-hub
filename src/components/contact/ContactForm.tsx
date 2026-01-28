import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';

interface ContactFormProps {
  formData: {
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting }: ContactFormProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-livs-blue text-2xl font-bold mb-2">Solicita tu consulta gratuita</h3>
        <p className="text-livs-gray-dark text-sm">
          Te contactaremos en menos de 24h para analizar cómo podemos ayudarte.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-livs-blue font-medium text-sm">
              Nombre *
            </label>
            <Input 
              id="name" 
              placeholder="Tu nombre" 
              required 
              className="border-livs-gray"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="company" className="text-livs-blue font-medium text-sm">
              Empresa *
            </label>
            <Input 
              id="company" 
              placeholder="Nombre de tu empresa" 
              required
              className="border-livs-gray"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-livs-blue font-medium text-sm">
              Email *
            </label>
            <Input 
              id="email" 
              type="email" 
              placeholder="email@empresa.com" 
              required 
              className="border-livs-gray"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-livs-blue font-medium text-sm">
              Teléfono
            </label>
            <Input 
              id="phone" 
              type="tel" 
              placeholder="+34 600 000 000" 
              className="border-livs-gray"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-livs-blue font-medium text-sm">
            ¿Qué quieres automatizar o mejorar? *
          </label>
          <Textarea 
            id="message" 
            placeholder="Ej: Recibimos muchas llamadas y queremos automatizar la atención inicial..." 
            required 
            className="border-livs-gray resize-none min-h-[100px]"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        
        <div className="flex items-start space-x-2">
          <input 
            type="checkbox" 
            id="privacy" 
            required 
            className="rounded border-livs-gray text-livs-purple h-4 w-4 mt-0.5"
          />
          <label htmlFor="privacy" className="text-xs text-livs-gray-dark leading-relaxed">
            Acepto la <a href="/privacy-policy" className="text-livs-blue hover:underline">política de privacidad</a> y 
            consiento el tratamiento de mis datos para recibir información sobre los servicios.
          </label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-livs-blue to-livs-purple hover:opacity-90 transition-opacity text-lg py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : (
            <>
              Solicitar consulta gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
        
        <p className="text-center text-xs text-livs-gray-dark">
          Sin compromiso · Respuesta en menos de 24h
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
