import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-biofilia-black mb-8">
            Política de Cookies
          </h1>
          
          <div className="prose prose-lg max-w-none text-biofilia-black/80">
            <p className="text-sm text-biofilia-black/60 mb-8">
              Última actualización: Enero 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">¿Qué son las Cookies?</h2>
              <p className="text-justify mb-4">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tableta, 
                teléfono móvil) cuando visita un sitio web. Las cookies son ampliamente utilizadas para hacer que 
                los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información 
                a los propietarios del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">Tipos de Cookies que Utilizamos</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-biofilia-green mb-2">Cookies Esenciales</h3>
                <p className="text-justify mb-2">
                  Son necesarias para el funcionamiento del sitio web y no pueden ser desactivadas. Generalmente 
                  solo se configuran en respuesta a acciones realizadas por usted, como establecer sus preferencias 
                  de privacidad, iniciar sesión o completar formularios.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-biofilia-green mb-2">Cookies de Rendimiento</h3>
                <p className="text-justify mb-2">
                  Nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento 
                  de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares, y ver cómo los 
                  visitantes se mueven por el sitio.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-biofilia-green mb-2">Cookies de Funcionalidad</h3>
                <p className="text-justify mb-2">
                  Permiten que el sitio proporcione una funcionalidad y personalización mejoradas. Pueden ser 
                  establecidas por nosotros o por proveedores externos cuyos servicios hemos agregado a nuestras páginas.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-biofilia-green mb-2">Cookies de Marketing</h3>
                <p className="text-justify mb-2">
                  Pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser 
                  utilizadas por esas empresas para crear un perfil de sus intereses y mostrarle anuncios relevantes 
                  en otros sitios.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">Cookies Específicas que Usamos</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-sm">
                  <thead>
                    <tr className="bg-biofilia-green/10">
                      <th className="border border-gray-200 p-3 text-left">Nombre</th>
                      <th className="border border-gray-200 p-3 text-left">Tipo</th>
                      <th className="border border-gray-200 p-3 text-left">Propósito</th>
                      <th className="border border-gray-200 p-3 text-left">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3">_session</td>
                      <td className="border border-gray-200 p-3">Esencial</td>
                      <td className="border border-gray-200 p-3">Mantener sesión de usuario</td>
                      <td className="border border-gray-200 p-3">Sesión</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">cookie_consent</td>
                      <td className="border border-gray-200 p-3">Esencial</td>
                      <td className="border border-gray-200 p-3">Guardar preferencias de cookies</td>
                      <td className="border border-gray-200 p-3">1 año</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">_ga</td>
                      <td className="border border-gray-200 p-3">Rendimiento</td>
                      <td className="border border-gray-200 p-3">Google Analytics - análisis de tráfico</td>
                      <td className="border border-gray-200 p-3">2 años</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">_fbp</td>
                      <td className="border border-gray-200 p-3">Marketing</td>
                      <td className="border border-gray-200 p-3">Facebook Pixel - seguimiento de conversiones</td>
                      <td className="border border-gray-200 p-3">3 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">Cómo Gestionar las Cookies</h2>
              <p className="text-justify mb-4">
                Puede configurar su navegador para rechazar cookies o alertarle cuando se envíen cookies. 
                A continuación le proporcionamos enlaces a las instrucciones de los navegadores más comunes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-biofilia-green hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-biofilia-green hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-mx/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-biofilia-green hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-mx/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-biofilia-green hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="text-justify mb-4">
                Tenga en cuenta que si deshabilita las cookies, algunas partes de nuestro sitio web pueden no 
                funcionar correctamente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-biofilia-black mb-4">Actualización de esta Política</h2>
              <p className="text-justify mb-4">
                Podemos actualizar esta política de cookies ocasionalmente para reflejar cambios en las cookies 
                que utilizamos o por otras razones operativas, legales o regulatorias. Por favor, visite esta 
                página regularmente para mantenerse informado sobre nuestro uso de cookies.
              </p>
            </section>

            <section className="mb-8 p-6 bg-biofilia-green/5 rounded-xl">
              <h2 className="text-xl font-bold text-biofilia-black mb-4">Contacto</h2>
              <p className="mb-2">
                Si tiene preguntas sobre nuestra política de cookies, contáctenos:
              </p>
              <p className="mb-2"><strong>Biofilia Cocreativa</strong></p>
              <p>Correo electrónico: privacidad@biofiliacocreativa.com</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
