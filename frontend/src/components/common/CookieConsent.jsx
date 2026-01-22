import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    performance: false,
    functionality: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      performance: true,
      functionality: true,
      marketing: true
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const rejectAll = () => {
    const onlyEssential = {
      essential: true,
      performance: false,
      functionality: false,
      marketing: false
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyEssential));
    setIsVisible(false);
  };

  const togglePreference = (key) => {
    if (key === 'essential') return; // Essential cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {!showSettings ? (
          // Main Cookie Banner
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-biofilia-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-biofilia-green" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-biofilia-black mb-2">
                  Configuración de Cookies
                </h3>
                <p className="text-sm text-biofilia-black/70 mb-4">
                  Utilizamos cookies para mejorar tu experiencia de navegación, personalizar contenido y analizar 
                  nuestro tráfico. Al hacer clic en "Aceptar todas", consientes el uso de todas las cookies. 
                  Visita nuestra <Link to="/cookie-policy" className="text-biofilia-green hover:underline">Política de Cookies</Link> para más información.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptAll}
                    className="bg-biofilia-green hover:bg-biofilia-green/90 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Aceptar todas
                  </button>
                  <button
                    onClick={rejectAll}
                    className="bg-gray-200 hover:bg-gray-300 text-biofilia-black px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Rechazar no esenciales
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="border border-biofilia-black/20 hover:border-biofilia-green text-biofilia-black px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Configurar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Cookie Settings Panel
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-biofilia-black">
                Configuración de Cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-biofilia-black" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-biofilia-black">Cookies Esenciales</h4>
                  <p className="text-sm text-biofilia-black/60">Necesarias para el funcionamiento del sitio</p>
                </div>
                <div className="bg-biofilia-green/20 text-biofilia-green text-xs font-semibold px-3 py-1 rounded-full">
                  Siempre activas
                </div>
              </div>

              {/* Performance Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-biofilia-black">Cookies de Rendimiento</h4>
                  <p className="text-sm text-biofilia-black/60">Nos ayudan a mejorar el sitio</p>
                </div>
                <button
                  onClick={() => togglePreference('performance')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    preferences.performance ? 'bg-biofilia-green' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    preferences.performance ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Functionality Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-biofilia-black">Cookies de Funcionalidad</h4>
                  <p className="text-sm text-biofilia-black/60">Mejoran tu experiencia de usuario</p>
                </div>
                <button
                  onClick={() => togglePreference('functionality')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    preferences.functionality ? 'bg-biofilia-green' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    preferences.functionality ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-biofilia-black">Cookies de Marketing</h4>
                  <p className="text-sm text-biofilia-black/60">Publicidad personalizada</p>
                </div>
                <button
                  onClick={() => togglePreference('marketing')}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    preferences.marketing ? 'bg-biofilia-green' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                  }`} />
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={acceptSelected}
                className="bg-biofilia-green hover:bg-biofilia-green/90 text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Guardar preferencias
              </button>
              <button
                onClick={acceptAll}
                className="border border-biofilia-green text-biofilia-green hover:bg-biofilia-green hover:text-white px-6 py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Aceptar todas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
