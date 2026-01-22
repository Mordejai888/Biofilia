import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { portfolioItems, services, clientLogos, partnerLogos } from '../data/mock';

const PortafolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const categories = ['Todos', ...services.map(s => s.name)];
  const scrollRef = useRef(null);

  const filteredItems = activeFilter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  // Auto scroll for client logos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-biofilia-green/5 to-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-biofilia-black mb-4">
              Portafolio
            </h1>
            <p className="text-xl text-biofilia-black/70">
              Proyectos que reflejan nuestra pasión por la creatividad y la sostenibilidad.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 border-b border-gray-100 sticky top-[72px] bg-white z-40">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-biofilia-green text-white'
                      : 'bg-gray-100 text-biofilia-black hover:bg-biofilia-green/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid - Success Cases Style */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 bg-biofilia-green text-white text-xs font-bold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-biofilia-black mb-2 group-hover:text-biofilia-green transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-biofilia-black/60 text-sm mb-4">
                      {item.description}
                    </p>
                    
                    {/* Client Info */}
                    {item.client && (
                      <div className="pt-4 border-t border-gray-100">
                        <p className="font-semibold text-biofilia-black">
                          {item.client}
                        </p>
                        <p className="text-sm text-biofilia-black/60">
                          {item.position}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-biofilia-black/60 text-lg">
                  No hay proyectos en esta categoría aún.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Client Logos Carousel */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-biofilia-black text-center mb-12">
              Clientes que confían en nosotros
            </h2>
            
            <div 
              ref={scrollRef}
              className="flex gap-12 overflow-x-hidden py-4"
              style={{ scrollBehavior: 'auto' }}
            >
              {/* Duplicate logos for infinite scroll effect */}
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div 
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 w-36 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 bg-white rounded-lg p-4 shadow-sm"
                >
                  <img 
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners/Logos Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partnerLogos.map((partner) => (
                <div 
                  key={partner.id}
                  className="w-24 md:w-32 h-16 md:h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img 
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-biofilia-green/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-biofilia-black mb-4">
              ¿Te gustaría ver tu proyecto aquí?
            </h2>
            <p className="text-biofilia-black/60 mb-8">
              Contáctanos y hagamos algo increíble juntos.
            </p>
            <Link 
              to="/contacta"
              className="inline-flex items-center gap-2 bg-biofilia-green hover:bg-transparent text-white hover:text-biofilia-green px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 border-2 border-biofilia-green"
            >
              Iniciar proyecto
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortafolioPage;
