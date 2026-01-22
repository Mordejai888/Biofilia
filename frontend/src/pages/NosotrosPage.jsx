import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { companyInfo, companyValues } from '../data/mock';
import { Sparkles, Leaf, Users, Shield, ArrowRight } from 'lucide-react';

const iconMap = {
  Sparkles: Sparkles,
  Leaf: Leaf,
  Users: Users,
  Shield: Shield
};

const NosotrosPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-biofilia-green/5 to-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-biofilia-black mb-6">
              Nosotros
            </h1>
            <p className="text-xl text-biofilia-black/70">
              Conectamos creatividad con naturaleza para transformar la manera en que las marcas se comunican.
            </p>
          </div>
        </section>

        {/* History Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-biofilia-black mb-8 flex items-center gap-3">
              <span className="w-2 h-10 bg-biofilia-green rounded-full" />
              {companyInfo.history.title}
            </h2>
            <div className="prose prose-lg text-biofilia-black/80 leading-relaxed">
              {companyInfo.history.content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="mb-4 text-justify">
                    {paragraph}
                  </p>
                )
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-biofilia-green mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-biofilia-green rounded-full" />
                  {companyInfo.mission.title}
                </h3>
                <p className="text-biofilia-black/80 leading-relaxed text-justify">
                  {companyInfo.mission.content}
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl md:text-3xl font-bold text-biofilia-green mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-biofilia-green rounded-full" />
                  {companyInfo.vision.title}
                </h3>
                <p className="text-biofilia-black/80 leading-relaxed text-justify">
                  {companyInfo.vision.content}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-biofilia-black">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Nuestros Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => {
                const IconComponent = iconMap[value.icon];
                return (
                  <div 
                    key={value.id}
                    className="group text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-biofilia-green/20 flex items-center justify-center group-hover:bg-biofilia-green/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-biofilia-green" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {value.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed text-justify">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-biofilia-black mb-4">
              ¿Listo para cocrear juntos?
            </h2>
            <p className="text-biofilia-black/60 mb-8">
              Contáctanos y hagamos realidad tu proyecto.
            </p>
            <Link 
              to="/contacta"
              className="inline-flex items-center gap-2 bg-biofilia-green hover:bg-transparent text-white hover:text-biofilia-green px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 border-2 border-biofilia-green"
            >
              Contáctanos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NosotrosPage;
