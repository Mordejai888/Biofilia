import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Send } from 'lucide-react';
import { contactFormFields, contactEmail } from '../data/mock';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const ContactaPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoTelefono: '',
    empresa: '',
    cargo: '',
    servicios: [],
    descripcion: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneTypeChange = (type) => {
    setFormData(prev => ({ ...prev, tipoTelefono: type }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData(prev => ({
      ...prev,
      servicios: prev.servicios.includes(serviceId)
        ? prev.servicios.filter(s => s !== serviceId)
        : [...prev.servicios, serviceId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare form data for submission
      const submitData = {
        ...formData,
        to: contactEmail, // Hidden email
        subject: `Nuevo contacto de ${formData.nombre} - ${formData.empresa || 'Sin empresa'}`,
        services: formData.servicios.join(', ')
      };
      
      console.log('Form submitted:', submitData);
      
      // Simulated API call - in production, this would send to backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('¡Formulario enviado correctamente! Nos pondremos en contacto pronto.');
      
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipoTelefono: '',
        empresa: '',
        cargo: '',
        servicios: [],
        descripcion: ''
      });
    } catch (error) {
      toast.error('Error al enviar el formulario. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-biofilia-black mb-8 text-center">
            Contáctanos
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <label className="font-bold text-biofilia-black min-w-[180px]">
                Nombre
              </label>
              <Input
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="flex-1 border-biofilia-black/30 rounded-full focus:border-biofilia-green focus:ring-biofilia-green"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <label className="font-bold text-biofilia-black min-w-[180px]">
                Correo electrónico
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="flex-1 border-biofilia-black/30 rounded-full focus:border-biofilia-green focus:ring-biofilia-green"
                required
              />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <label className="font-bold text-biofilia-black min-w-[180px]">
                Teléfono
              </label>
              <div className="flex flex-1 flex-wrap items-center gap-4">
                <Input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="flex-1 min-w-[150px] max-w-[200px] border-biofilia-black/30 rounded-full focus:border-biofilia-green focus:ring-biofilia-green"
                />
                <div className="flex items-center gap-2">
                  <span className="text-biofilia-black">Fijo</span>
                  <Checkbox
                    checked={formData.tipoTelefono === 'fijo'}
                    onCheckedChange={() => handlePhoneTypeChange('fijo')}
                    className="border-biofilia-black/30 data-[state=checked]:bg-biofilia-green data-[state=checked]:border-biofilia-green"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-biofilia-black">Whatsapp</span>
                  <Checkbox
                    checked={formData.tipoTelefono === 'whatsapp'}
                    onCheckedChange={() => handlePhoneTypeChange('whatsapp')}
                    className="border-biofilia-black/30 data-[state=checked]:bg-biofilia-green data-[state=checked]:border-biofilia-green"
                  />
                </div>
              </div>
            </div>

            {/* Empresa y Cargo */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-1">
                <label className="font-bold text-biofilia-black min-w-[80px]">
                  Empresa
                </label>
                <Input
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  className="flex-1 border-biofilia-black/30 rounded-full focus:border-biofilia-green focus:ring-biofilia-green"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-1">
                <label className="font-bold text-biofilia-black min-w-[60px]">
                  Cargo
                </label>
                <Input
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleInputChange}
                  className="flex-1 border-biofilia-black/30 rounded-full focus:border-biofilia-green focus:ring-biofilia-green"
                />
              </div>
            </div>

            {/* Servicios */}
            <div>
              <p className="font-bold text-biofilia-black mb-2">
                ¿Qué servicio principal te interesa? <span className="font-normal text-biofilia-black/60">(Marca todo lo que aplique)</span>
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {contactFormFields.services.map((service) => (
                  <div key={service.id} className="flex items-center gap-3">
                    <span className="text-biofilia-black font-medium">{service.label}</span>
                    <Checkbox
                      checked={formData.servicios.includes(service.id)}
                      onCheckedChange={() => handleServiceToggle(service.id)}
                      className="border-biofilia-black/30 data-[state=checked]:bg-biofilia-green data-[state=checked]:border-biofilia-green"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Descripción */}
            <div>
              <p className="font-bold text-biofilia-black mb-4">
                Cuéntanos brevemente sobre tu proyecto:
              </p>
              <Textarea
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                rows={5}
                placeholder="Describe tu proyecto o necesidad..."
                className="w-full border-biofilia-black/30 rounded-xl focus:border-biofilia-green focus:ring-biofilia-green resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-biofilia-green hover:bg-biofilia-green/90 text-white rounded-lg px-8 py-3 font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
                <Send className="w-5 h-5" />
              </Button>
            </div>

            {/* reCAPTCHA notice */}
            <div className="border border-biofilia-black/20 rounded-lg p-3 inline-block">
              <p className="text-sm text-biofilia-black/60">
                protegido por reCAPTCHA<br />
                <span className="text-xs">Privacidad - Condiciones</span>
              </p>
            </div>

            {/* Consent */}
            <p className="text-sm text-biofilia-black/60 leading-relaxed">
              Al enviar este formulario, doy mi consentimiento para recibir mensajes de texto de Biofilia Cocreativa con fines de marketing y otras comunicaciones relacionadas con los productos y servicios ofrecidos.
            </p>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactaPage;
