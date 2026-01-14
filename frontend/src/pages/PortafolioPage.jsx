import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { portfolioItems, services } from '../data/mock';

const PortafolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const categories = ['Todos', ...services.map(s => s.name)];

  const filteredItems = activeFilter === 'Todos' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

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

        {/* Portfolio Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-biofilia-black/90 via-biofilia-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-biofilia-green text-sm font-medium mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-biofilia-black text-xs font-medium px-3 py-1 rounded-full">
                    {item.category}
                  </span>
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

        {/* CTA Section */}
        <section className="py-16 bg-biofilia-green/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-biofilia-black mb-4">
              ¿Te gustaría ver tu proyecto aquí?
            </h2>
            <p className="text-biofilia-black/60 mb-8">
              Contáctanos y hagamos algo increíble juntos.
            </p>
            <a 
              href="/contacta"
              className="inline-block bg-biofilia-green hover:bg-biofilia-green/90 text-white rounded-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
            >
              Iniciar proyecto
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PortafolioPage;
