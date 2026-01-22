import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const TerminosServicioPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-biofilia-black mb-8">
            Términos y Condiciones de Servicio
          </h1>
          
          <div className="prose prose-lg max-w-none text-biofilia-black/80">
            <p className="text-sm text-biofilia-black/60 mb-8">
              Última actualización: Enero 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">1. Aceptación de los Términos</h2>
              <p className="text-justify mb-4">
                Al acceder y utilizar los servicios de Biofilia Cocreativa, usted acepta estar sujeto a estos 
                Términos y Condiciones de Servicio. Si no está de acuerdo con alguno de estos términos, le 
                recomendamos no utilizar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">2. Descripción de los Servicios</h2>
              <p className="text-justify mb-4">
                Biofilia Cocreativa ofrece servicios profesionales de:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Branding:</strong> Desarrollo de identidad corporativa, logotipos y sistemas visuales</li>
                <li><strong>Marketing:</strong> Estrategias de marketing digital y tradicional</li>
                <li><strong>Diseño UX/UI:</strong> Diseño de interfaces y experiencia de usuario</li>
                <li><strong>Printing:</strong> Servicios de impresión en materiales sostenibles</li>
                <li><strong>Packing:</strong> Diseño de empaques eco-amigables</li>
                <li><strong>Book Making:</strong> Edición y diseño editorial</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">3. Proceso de Contratación</h2>
              <p className="text-justify mb-4">
                Todo proyecto inicia con una solicitud de cotización por parte del cliente. Una vez acordados 
                los términos, alcance y precio del proyecto, se formalizará mediante contrato escrito que 
                especificará:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Descripción detallada del proyecto</li>
                <li>Entregables acordados</li>
                <li>Cronograma de trabajo</li>
                <li>Condiciones de pago</li>
                <li>Número de revisiones incluidas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">4. Condiciones de Pago</h2>
              <p className="text-justify mb-4">
                Salvo acuerdo distinto por escrito:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Se requiere un anticipo del 50% para iniciar el proyecto</li>
                <li>El 50% restante se pagará contra entrega final</li>
                <li>Los pagos se realizarán mediante transferencia bancaria o los medios acordados</li>
                <li>Los precios no incluyen IVA, el cual se agregará conforme a las leyes mexicanas vigentes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">5. Propiedad Intelectual</h2>
              <p className="text-justify mb-4">
                Una vez liquidado el proyecto en su totalidad:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>El cliente adquiere los derechos de uso sobre los entregables finales aprobados</li>
                <li>Biofilia Cocreativa conserva el derecho de incluir el trabajo en su portafolio</li>
                <li>Los conceptos rechazados permanecen como propiedad de Biofilia Cocreativa</li>
                <li>El uso de imágenes de stock, tipografías u otros recursos se rigen por sus respectivas licencias</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">6. Revisiones y Modificaciones</h2>
              <p className="text-justify mb-4">
                Cada proyecto incluye un número determinado de revisiones según lo especificado en la cotización. 
                Las revisiones adicionales tendrán un costo extra que será comunicado previamente al cliente. 
                Las modificaciones sustanciales al alcance original del proyecto podrán ser motivo de recotización.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">7. Plazos de Entrega</h2>
              <p className="text-justify mb-4">
                Los plazos de entrega se establecerán en el contrato de servicios. Los tiempos de respuesta del 
                cliente para aprobaciones y retroalimentación afectarán directamente los plazos finales. Biofilia 
                Cocreativa no será responsable por retrasos ocasionados por:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Demoras en la entrega de materiales por parte del cliente</li>
                <li>Cambios significativos en el alcance del proyecto</li>
                <li>Fuerza mayor o causas fuera de nuestro control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">8. Confidencialidad</h2>
              <p className="text-justify mb-4">
                Biofilia Cocreativa se compromete a mantener la confidencialidad de toda la información 
                proporcionada por el cliente durante el desarrollo del proyecto. Esta obligación permanecerá 
                vigente incluso después de finalizada la relación comercial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">9. Cancelación</h2>
              <p className="text-justify mb-4">
                En caso de cancelación del proyecto por parte del cliente:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>El anticipo no será reembolsable</li>
                <li>Se facturará el trabajo realizado hasta la fecha de cancelación</li>
                <li>Los entregables parciales permanecerán como propiedad de Biofilia Cocreativa</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">10. Limitación de Responsabilidad</h2>
              <p className="text-justify mb-4">
                Biofilia Cocreativa no será responsable por daños indirectos, incidentales, especiales o 
                consecuentes que puedan surgir del uso de nuestros servicios. Nuestra responsabilidad máxima 
                estará limitada al monto pagado por el cliente por el servicio específico.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">11. Legislación Aplicable</h2>
              <p className="text-justify mb-4">
                Los presentes términos y condiciones se rigen por las leyes de los Estados Unidos Mexicanos. 
                Cualquier controversia que surja en relación con estos términos será sometida a la jurisdicción 
                de los tribunales competentes en la Ciudad de México, renunciando expresamente las partes a 
                cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">12. Modificaciones</h2>
              <p className="text-justify mb-4">
                Biofilia Cocreativa se reserva el derecho de modificar estos términos y condiciones en 
                cualquier momento. Las modificaciones entrarán en vigor a partir de su publicación en este 
                sitio web. Es responsabilidad del cliente revisar periódicamente estos términos.
              </p>
            </section>

            <section className="mb-8 p-6 bg-biofilia-green/5 rounded-xl">
              <h2 className="text-xl font-bold text-biofilia-black mb-4">Contacto</h2>
              <p className="mb-2"><strong>Biofilia Cocreativa</strong></p>
              <p className="mb-2">Correo electrónico: legal@biofiliacocreativa.com</p>
              <p>México</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TerminosServicioPage;
