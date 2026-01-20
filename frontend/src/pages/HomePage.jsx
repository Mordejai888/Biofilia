import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight, Quote } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { heroSlides, services, testimonials, valuePropositions } from '../data/mock';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Carousel Section */}
        <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />
              
              {/* Hero Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white italic drop-shadow-2xl">
                    {slide.title}
                  </h1>
                  {slide.titleLine2 && (
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white italic drop-shadow-2xl mt-2">
                      {slide.titleLine2}
                    </h1>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-biofilia-green w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* CTA Button */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <Link
              to="/contacta"
              className="cta-button inline-flex items-center gap-2 bg-biofilia-green hover:bg-biofilia-green/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Solicitar consultoría creativa
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Creatividad con pasión y propósito Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="Equipo creativo"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-biofilia-green/20 rounded-2xl -z-10" />
              </div>

              {/* Content */}
              <div className="lg:pl-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-biofilia-black mb-6 leading-tight">
                  Creatividad con pasión y propósito
                </h2>
                <p className="text-lg text-biofilia-black/70 leading-relaxed">
                  En Biofilia Cocreativa, transformamos ideas en estrategias emocionales y sostenibles, 
                  uniendo diseño, tecnología y naturaleza para conectar marcas con su audiencia. 
                  Buscamos la innovación en cada campaña.
                </p>
                <div className="mt-8">
                  <Link
                    to="/nosotros"
                    className="inline-flex items-center gap-2 text-biofilia-green font-bold hover:gap-4 transition-all duration-300"
                  >
                    Conoce más sobre nosotros
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros Servicios Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-biofilia-black mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-lg text-biofilia-black/60 max-w-3xl mx-auto">
                Nuestro enfoque de "cocreación" implica que no solo somos proveedores, sino socios estratégicos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="service-card group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-biofilia-green/30"
                >
                  <div className="w-20 h-20 mb-6 flex items-center justify-center">
                    <img 
                      src={service.icon} 
                      alt={service.name}
                      className="service-icon w-16 h-16 object-contain"
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

            <div className="text-center mt-12">
              <Link
                to="/servicios"
                className="inline-flex items-center gap-2 bg-biofilia-black hover:bg-biofilia-green text-white px-8 py-4 rounded-lg font-bold transition-all duration-300"
              >
                Ver todos los servicios
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Transformamos valores en ventajas competitivas Section */}
        <section className="py-20 bg-biofilia-black">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-16">
              Transformamos valores en ventajas competitivas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {valuePropositions.map((prop, index) => (
                <div 
                  key={prop.id}
                  className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-biofilia-green/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-biofilia-green rounded-full flex items-center justify-center mb-6">
                    <span className="text-white font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {prop.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Éxito / Testimonios Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-biofilia-black mb-4">
                Casos de éxito
              </h2>
              <p className="text-lg text-biofilia-black/60">
                Resultados que hablan por sí solos
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="testimonial-card relative"
                >
                  <Quote className="w-10 h-10 text-biofilia-green/20 absolute top-4 right-4" />
                  
                  {/* Result Badge */}
                  <div className="inline-block bg-biofilia-green/10 text-biofilia-green px-4 py-1 rounded-full text-sm font-bold mb-4">
                    {testimonial.result}
                  </div>
                  
                  <p className="text-biofilia-black/70 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <img 
                      src={testimonial.logo}
                      alt={testimonial.company}
                      className="w-12 h-12 rounded-full object-cover bg-gray-100"
                    />
                    <div>
                      <p className="font-bold text-biofilia-black">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-biofilia-black/60">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <Link
                to="/contacta"
                className="cta-button inline-flex items-center gap-2 bg-biofilia-green hover:bg-biofilia-green/90 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Solicitar consultoría creativa
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-16 bg-biofilia-green/5 border-t border-biofilia-green/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-xl md:text-2xl text-biofilia-black font-medium">
              En <span className="text-biofilia-green font-bold">Biofilia Cocreativa</span>, 
              cada proyecto es una oportunidad para cocrear un futuro más verde.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
