import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const PoliticaPrivacidadPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-biofilia-black mb-8">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-biofilia-black/80">
            <p className="text-sm text-biofilia-black/60 mb-8">
              Última actualización: Enero 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">1. Información General</h2>
              <p className="text-justify mb-4">
                Biofilia Cocreativa y sus representantes legales (en adelante "la Empresa"), con domicilio en México, 
                es responsable del tratamiento de los datos personales que nos proporcione, de conformidad con la 
                Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">2. Datos Personales que Recabamos</h2>
              <p className="text-justify mb-4">
                Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Nombre de la empresa</li>
                <li>Cargo o puesto</li>
                <li>Información sobre proyectos y necesidades comerciales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">3. Finalidades del Tratamiento</h2>
              <p className="text-justify mb-4">
                Los datos personales que recabamos serán utilizados para las siguientes finalidades:
              </p>
              <h3 className="text-xl font-semibold text-biofilia-black mb-2">Finalidades Primarias:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Proveer los servicios de publicidad, marketing y diseño solicitados</li>
                <li>Elaborar cotizaciones y propuestas comerciales</li>
                <li>Facturación y cobranza</li>
                <li>Dar seguimiento a proyectos en curso</li>
                <li>Atender solicitudes de información, quejas o sugerencias</li>
              </ul>
              <h3 className="text-xl font-semibold text-biofilia-black mb-2">Finalidades Secundarias:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Envío de información promocional y publicitaria</li>
                <li>Realización de encuestas de satisfacción</li>
                <li>Invitaciones a eventos relacionados con nuestros servicios</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">4. Transferencia de Datos</h2>
              <p className="text-justify mb-4">
                Le informamos que sus datos personales no serán compartidos con terceros, nacionales o extranjeros, 
                salvo que sea necesario para cumplir con obligaciones legales o contractuales. En caso de requerir 
                transferencia de datos, se solicitará su consentimiento previo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">5. Derechos ARCO</h2>
              <p className="text-justify mb-4">
                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las 
                condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su 
                información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); 
                que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo 
                utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines 
                específicos (Oposición). Estos derechos se conocen como derechos ARCO.
              </p>
              <p className="text-justify mb-4">
                Para el ejercicio de cualquiera de los derechos ARCO, usted deberá enviar una solicitud por escrito 
                a nuestro correo electrónico: <strong>privacidad@biofiliacocreativa.com</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">6. Uso de Cookies</h2>
              <p className="text-justify mb-4">
                Le informamos que en nuestra página de internet utilizamos cookies, web beacons y otras tecnologías 
                a través de las cuales es posible monitorear su comportamiento como usuario de internet, brindarle 
                un mejor servicio y experiencia de usuario al navegar en nuestra página.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">7. Modificaciones al Aviso de Privacidad</h2>
              <p className="text-justify mb-4">
                Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente 
                aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos 
                para la prestación u ofrecimiento de nuestros servicios o productos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">8. Consentimiento</h2>
              <p className="text-justify mb-4">
                Al proporcionar sus datos personales a través de nuestros formularios de contacto, usted otorga su 
                consentimiento expreso para el tratamiento de sus datos personales conforme a los términos y condiciones 
                establecidos en el presente aviso de privacidad.
              </p>
            </section>

            <section className="mb-8 p-6 bg-biofilia-green/5 rounded-xl">
              <h2 className="text-xl font-bold text-biofilia-black mb-4">Contacto</h2>
              <p className="mb-2"><strong>Biofilia Cocreativa</strong></p>
              <p className="mb-2">Correo electrónico: privacidad@biofiliacocreativa.com</p>
              <p>México</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidadPage;
