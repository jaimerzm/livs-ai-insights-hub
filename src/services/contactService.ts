
interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData, contactEmail: string): Promise<any> => {
  try {
    console.log('Enviando formulario a Web3Forms con datos:', { ...formData, to_email: contactEmail });
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        // Reemplaza esta clave de acceso con la tuya de Web3Forms
        access_key: "5c17cd0a-8c54-4b87-bf47-d6e388f0fad4",
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
    console.log('Respuesta de Web3Forms:', result);
    
    return result;
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    throw error;
  }
};
