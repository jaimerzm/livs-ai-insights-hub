
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
    
    // Validar datos antes de enviar
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error('Faltan campos obligatorios');
    }

    // Crear el objeto de datos para enviar
    const dataToSend = {
      access_key: "5c17cd0a-8c54-4b87-bf47-d6e388f0fad4",
      name: formData.name,
      email: formData.email,
      company: formData.company || 'No especificada',
      phone: formData.phone || 'No especificado',
      message: formData.message,
      subject: "Nuevo mensaje de contacto - LIVS",
      from_name: "Formulario de Contacto LIVS",
      to_email: contactEmail,
      botcheck: "", // Campo para prevenir spam
    };

    console.log('Datos formateados para Web3Forms:', dataToSend);
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(dataToSend)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error en la respuesta de Web3Forms:', response.status, errorText);
      throw new Error(`Error en la respuesta: ${response.status}`);
    }

    const result = await response.json();
    console.log('Respuesta de Web3Forms:', result);
    
    if (!result.success) {
      console.error('Web3Forms reportó un error:', result.message || 'Error desconocido');
      throw new Error(result.message || 'Error al procesar el formulario');
    }
    
    return result;
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    throw error;
  }
};
