
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
  );
};

export default ContactForm;
