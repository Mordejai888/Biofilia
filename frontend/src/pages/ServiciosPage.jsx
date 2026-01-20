import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { services } from '../data/mock';

const ServiciosPage = () => {
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

        {/* Services with Leaf Layout */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative flex items-center justify-center min-h-[600px]">
              {/* Central Leaf */}
              <div className="relative z-10">
                <img 
                  src="https://customer-assets.emergentagent.com/job_bbf9e7d9-e7b6-45b5-a13c-7fcbccfcb815/artifacts/n3mufaik_Logos-Biofilia-Cocreativa.png"
                  alt="Biofilia Leaf"
                  className="w-64 md:w-80 h-auto"
                />
              </div>

              {/* Services positioned around leaf */}
              {/* Left Top - Marketing */}
              <div className="absolute left-0 md:left-8 top-8 md:top-16 group cursor-pointer">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <img 
                    src={services.find(s => s.name === 'Marketing')?.icon}
                    alt="Marketing"
                    className="service-icon w-12 h-12 md:w-16 md:h-16"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    Marketing
                  </h3>
                </div>
              </div>

              {/* Right Top - Branding */}
              <div className="absolute right-0 md:right-8 top-8 md:top-16 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    Branding
                  </h3>
                  <img 
                    src={services.find(s => s.name === 'Branding')?.icon}
                    alt="Branding"
                    className="service-icon w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
              </div>

              {/* Left Middle - Designing UX/UI */}
              <div className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <img 
                    src={services.find(s => s.name === 'Designing UX/UI')?.icon}
                    alt="Designing UX/UI"
                    className="service-icon w-12 h-12 md:w-16 md:h-16"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300 text-right">
                    Designing<br />UX/UI
                  </h3>
                </div>
              </div>

              {/* Right Middle - Printing */}
              <div className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    Printing
                  </h3>
                  <img 
                    src={services.find(s => s.name === 'Printing')?.icon}
                    alt="Printing"
                    className="service-icon w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
              </div>

              {/* Left Bottom - Packing */}
              <div className="absolute left-0 md:left-8 bottom-8 md:bottom-16 group cursor-pointer">
                <div className="flex items-center gap-4 md:flex-row-reverse">
                  <img 
                    src={services.find(s => s.name === 'Packing')?.icon}
                    alt="Packing"
                    className="service-icon w-12 h-12 md:w-16 md:h-16"
                  />
                  <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    Packing
                  </h3>
                </div>
              </div>

              {/* Right Bottom - Book making */}
              <div className="absolute right-0 md:right-8 bottom-8 md:bottom-16 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    Book making
                  </h3>
                  <img 
                    src={services.find(s => s.name === 'Book making')?.icon}
                    alt="Book making"
                    className="service-icon w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Detail */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-biofilia-black text-center mb-12">
              Detalle de Servicios
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="service-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-biofilia-green/30"
                >
                  <div className="w-16 h-16 mb-6 flex items-center justify-center">
                    <img 
                      src={service.icon} 
                      alt={service.name}
                      className="service-icon w-14 h-14 object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-biofilia-black mb-3 group-hover:text-biofilia-green transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-biofilia-black/60">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
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
              className="cta-button inline-flex items-center gap-2 bg-biofilia-green hover:bg-biofilia-green/90 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Solicitar consultoría creativa
              <ArrowRight className="w-5 h-5" />
            </Link>
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
      </main>

      <Footer />
    </div>
  );
};

export default ServiciosPage;
