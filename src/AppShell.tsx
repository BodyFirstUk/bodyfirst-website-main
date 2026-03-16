// src/AppShell.tsx
// Router-agnostic shell: used by both entry-server (StaticRouter) and entry-client (BrowserRouter).
// The <Router> wrapper is provided by the entry files.

import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import AntigravityCanvas from './components/AntigravityCanvas';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import WhatWeTreat from './pages/WhatWeTreat';
import WhatWeTreatDetail from './pages/WhatWeTreatDetail';
import Services from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetailPage';
import About from './pages/About';
import PricesInsurance from './pages/PricesInsurance';
import Contact from './pages/Contact';
import WhyUs from './pages/WhyUs';
import BookPage from './components/BookPage';

function AppShell() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        <AntigravityCanvas />
        <Header />

        <main className="flex-grow pt-[6.5rem] lg:pt-[7.5rem] relative">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* What We Treat */}
            <Route path="/what-we-treat" element={<WhatWeTreat />} />
            <Route path="/what-we-treat/:slug" element={<WhatWeTreatDetail />} />

            {/* Services */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />

            {/* Static pages */}
            <Route path="/about" element={<About />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/prices" element={<PricesInsurance />} />
            <Route path="/contact" element={<Contact />} />

            {/* Book */}
            <Route path="/book" element={<BookPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AppShell;
