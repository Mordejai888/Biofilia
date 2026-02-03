import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { services } from '../data/mock';

const ServiciosPage = () => {
  const [activeService, setActiveService] = useState(null);

  const handleServiceHover = (serviceId) => {
    setActiveService(serviceId);
  };

  const closeModal = () => {
    setActiveService(null);
  };

  const activeServiceData = services.find(s => s.id === activeService);

  // Mapping service names to display positions
  const servicePositions = {
    'Estrategia': { position: 'left-top', label: 'Estrategia' },
    'Marca': { position: 'right-top', label: 'Marca' },
    'Diseño UX/UI': { position: 'left-middle', label: 'Diseño\nUX/UI' },
    'Impresión': { position: 'right-middle', label: 'Impresión' },
    'Empaque': { position: 'left-bottom', label: 'Empaque' },
    'Producción Editorial': { position: 'right-bottom', label: 'Producción\nEditorial' }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Title Section */}
        <section className="py-8 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-2xl md:text-3xl font-light text-biofilia-black/70 italic text-center">
              Amamos lo que hacemos
            </h1>
          </div>
        </section>

        {/* Services with Icon Layout */}
        <section className="py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">
              {/* Central Icon */}
              <div className="relative z-10">
                <img 
                  src="https://customer-assets.emergentagent.com/job_eco-creative-hub/artifacts/du8wllk2_Icon-Biofilia-Cocreativa.png"
                  alt="Biofilia Icon"
                  className="w-48 md:w-64 lg:w-80 h-auto"
                />
              </div>

              {/* Services positioned around icon */}
              {/* Left Top - Estrategia */}
              <div 
                className="absolute left-0 md:left-4 lg:left-8 top-4 md:top-12 lg:top-16 group cursor-pointer"
                onMouseEnter={() => handleServiceHover(1)}
                onClick={() => handleServiceHover(1)}
              >
                <div className="flex items-center gap-3 md:gap-4 md:flex-row-reverse">
                  <img 
                    src={services.find(s => s.name === 'Estrategia')?.icon}
                    alt="Estrategia"
                    className="service-icon w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  />
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    Estrategia
                  </h3>
                </div>
              </div>

              {/* Right Top - Marca */}
              <div 
                className="absolute right-0 md:right-4 lg:right-8 top-4 md:top-12 lg:top-16 group cursor-pointer"
                onMouseEnter={() => handleServiceHover(2)}
                onClick={() => handleServiceHover(2)}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    Marca
                  </h3>
                  <img 
                    src={services.find(s => s.name === 'Marca')?.icon}
                    alt="Marca"
                    className="service-icon w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  />
                </div>
              </div>

              {/* Left Middle - Diseño UX/UI */}
              <div 
                className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 group cursor-pointer"
                onMouseEnter={() => handleServiceHover(3)}
                onClick={() => handleServiceHover(3)}
              >
                <div className="flex items-center gap-3 md:gap-4 md:flex-row-reverse">
                  <img 
                    src={services.find(s => s.name === 'Diseño UX/UI')?.icon}
                    alt="Diseño UX/UI"
                    className="service-icon w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  />
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300 text-right">
                    Diseño<br />UX/UI
                  </h3>
                </div>
              </div>

              {/* Right Middle - Impresión */}
              <div 
                className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 group cursor-pointer"
                onMouseEnter={() => handleServiceHover(4)}
                onClick={() => handleServiceHover(4)}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    Impresión
                  </h3>
                  <img 
                    src={services.find(s => s.name === 'Impresión')?.icon}
                    alt="Impresión"
                    className="service-icon w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  />
                </div>
              </div>

              {/* Left Bottom - Empaque */}
              <div 
                className="absolute left-0 md:left-4 lg:left-8 bottom-4 md:bottom-12 lg:bottom-16 group cursor-pointer"
                onMouseEnter={() => handleServiceHover(5)}
                onClick={() => handleServiceHover(5)}
              >
                <div className="flex items-center gap-3 md:gap-4 md:flex-row-reverse">
                  <img 
                    src={services.find(s => s.name === 'Empaque')?.icon}
                    alt="Empaque"
                    className="service-icon w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  />
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    Empaque
                  </h3>
                </div>
              </div>

              {/* Right Bottom - Producción Editorial */}
              <div 
                className="absolute right-0 md:right-4 lg:right-8 bottom-4 md:bottom-12 lg:bottom-16 group cursor-pointer"
                onMouseEnter={() => handleServiceHover(6)}
                onClick={() => handleServiceHover(6)}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300 text-left">
                    Producción<br />Editorial
                  </h3>
                  <img 
                    src={services.find(s => s.name === 'Producción Editorial')?.icon}
                    alt="Producción Editorial"
                    className="service-icon w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline */}
        <section className="py-12 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg md:text-xl text-biofilia-black font-medium text-center">
              En Biofilia Cocreativa, cada proyecto es una oportunidad para cocrear un futuro más verde.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-biofilia-black mb-4">
              ¿Listo para transformar tu marca?
            </h2>
            <p className="text-biofilia-black/60 mb-8">
              Contáctanos y hagamos realidad tu proyecto de manera sostenible.
            </p>
            <Link
              to="/contacta"
              className="inline-flex items-center gap-2 bg-biofilia-green hover:bg-transparent text-white hover:text-biofilia-green px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg border-2 border-biofilia-green"
            >
              Solicitar consultoría creativa
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Service Detail Modal */}
      {activeService && activeServiceData && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-biofilia-black" />
            </button>
            
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={activeServiceData.icon} 
                alt={activeServiceData.name}
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-2xl md:text-3xl font-bold text-biofilia-green">
                {activeServiceData.name}
              </h3>
            </div>
            
            <p className="text-biofilia-black/80 leading-relaxed text-justify">
              {activeServiceData.fullDescription}
            </p>
            
            <div className="mt-8">
              <Link
                to="/contacta"
                className="inline-flex items-center gap-2 bg-biofilia-green hover:bg-biofilia-green/90 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300"
                onClick={closeModal}
              >
                Solicitar este servicio
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiciosPage;
