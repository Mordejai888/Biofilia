import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-1">
        <section 
          className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Hero Text */}
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white italic drop-shadow-2xl animate-fade-in">
              Amamos lo que hacemos
            </h1>
          </div>
        </section>

        {/* Black Section with tagline */}
        <section className="bg-biofilia-black py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-white text-xl md:text-2xl leading-relaxed opacity-90">
              En <span className="text-biofilia-green font-semibold">Biofilia Cocreativa</span>, 
              cada proyecto es una oportunidad para cocrear un futuro más verde.
            </p>
          </div>
        </section>

        {/* Quick Services Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-biofilia-black text-center mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-center text-biofilia-black/60 mb-12 max-w-2xl mx-auto">
              Combinamos biofilia con creatividad para impulsar tu marca de manera sostenible
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {['Branding', 'Marketing', 'Printing', 'Design UX/UI', 'Book making', 'Packing'].map((service, index) => (
                <div 
                  key={service}
                  className="group text-center p-6 rounded-lg hover:bg-biofilia-green/5 transition-all duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-biofilia-green/10 flex items-center justify-center group-hover:bg-biofilia-green/20 transition-colors duration-300">
                    <div className="w-8 h-8 rounded-full bg-biofilia-green group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-biofilia-black group-hover:text-biofilia-green transition-colors duration-300">
                    {service}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
