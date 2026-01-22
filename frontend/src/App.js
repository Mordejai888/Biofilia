import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

// Pages
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ServiciosPage from "./pages/ServiciosPage";
import PortafolioPage from "./pages/PortafolioPage";
import ContactaPage from "./pages/ContactaPage";
import PoliticaPrivacidadPage from "./pages/PoliticaPrivacidadPage";
import TerminosServicioPage from "./pages/TerminosServicioPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";

// Components
import CookieConsent from "./components/common/CookieConsent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster 
          position="top-center" 
          richColors 
          toastOptions={{
            style: {
              background: '#fff',
              border: '1px solid #3dae2b',
            },
          }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/portafolio" element={<PortafolioPage />} />
          <Route path="/contacta" element={<ContactaPage />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidadPage />} />
          <Route path="/terminos-servicio" element={<TerminosServicioPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </div>
  );
}

export default App;
