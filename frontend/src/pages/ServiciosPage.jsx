import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LeafIcon from '../components/common/LeafIcon';
import { services } from '../data/mock';

const ServiciosPage = () => {
  // Position services around the leaf
  const servicePositions = [
    { name: 'Marketing', position: 'left-top' },
    { name: 'Branding', position: 'right-top' },
    { name: 'Designing UX/UI', position: 'left-middle' },
    { name: 'Printing', position: 'right-middle' },
    { name: 'Packing', position: 'left-bottom' },
    { name: 'Book making', position: 'right-bottom' }
  ];

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

        {/* Services with Leaf */}
        <section className="py-16 md:py-24">
          <div className="max-w-5xl mx-auto px-6">
            <div className="relative flex items-center justify-center min-h-[600px]">
              {/* Central Leaf */}
              <div className="relative z-10">
                <LeafIcon size={280} />
              </div>

              {/* Services positioned around leaf */}
              {/* Left Top - Marketing */}
              <div className="absolute left-0 md:left-8 top-8 md:top-16 text-center md:text-right group cursor-pointer">
                <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                  Marketing
                </h3>
              </div>

              {/* Right Top - Branding */}
              <div className="absolute right-0 md:right-8 top-8 md:top-16 text-center md:text-left group cursor-pointer">
                <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                  Branding
                </h3>
              </div>

              {/* Left Middle - Designing UX/UI */}
              <div className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 text-center md:text-right group cursor-pointer">
                <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                  Designing<br />UX/UI
                </h3>
              </div>

              {/* Right Middle - Printing */}
              <div className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 text-center md:text-left group cursor-pointer">
                <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                  Printing
                </h3>
              </div>

              {/* Left Bottom - Packing */}
              <div className="absolute left-0 md:left-8 bottom-8 md:bottom-16 text-center md:text-right group cursor-pointer">
                <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                  Packing
                </h3>
              </div>

              {/* Right Bottom - Book making */}
              <div className="absolute right-0 md:right-8 bottom-8 md:bottom-16 text-center md:text-left group cursor-pointer">
                <h3 className="text-xl md:text-2xl font-bold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                  Book making
                </h3>
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
      </main>

      <Footer />
    </div>
  );
};

export default ServiciosPage;
