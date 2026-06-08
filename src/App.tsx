/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TiresCatalog } from './components/TiresCatalog';
import { TireCalculator } from './components/TireCalculator';
import { FAQs } from './components/FAQs';
import { InquiryForm } from './components/InquiryForm';
import { Footer } from './components/Footer';
import { TireProduct } from './types';

export default function App() {
  const [selectedTire, setSelectedTire] = useState<TireProduct | null>(null);

  const handleSelectTire = (tire: TireProduct) => {
    setSelectedTire(tire);
  };

  const handleClearSelectedTire = () => {
    setSelectedTire(null);
  };

  return (
    <LanguageProvider>
      <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* Hero Section */}
        <Hero />

        {/* About / Corporate profile Section */}
        <About />

        {/* Products Catalogue */}
        <TiresCatalog onSelectTire={handleSelectTire} />

        {/* Sizing & Calibration Calculator */}
        <TireCalculator />

        {/* FAQs */}
        <FAQs />

        {/* Contact Reservation Forms */}
        <InquiryForm
          selectedTire={selectedTire}
          onClearSelectedTire={handleClearSelectedTire}
        />

        {/* Corporate Legal Footer */}
        <Footer />

      </div>
    </LanguageProvider>
  );
}

