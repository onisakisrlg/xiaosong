/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLanguage, useTranslation } from '../context/LanguageContext';
import { Globe, Menu, X, Phone, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'ja' : 'zh');
  };

  const menuItems = [
    { name: t.navHome, href: '#home' },
    { name: t.navAbout, href: '#about' },
    { name: t.navProducts, href: '#products' },
    { name: t.navCalculator, href: '#calculator' },
    { name: t.navFAQ, href: '#faq' },
    { name: t.navContact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-red-600 p-2.5 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/20">
              <span className="font-bold text-lg font-mono tracking-widest text-white">KMTS</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-xl tracking-tight leading-none text-slate-100">小松株式会社</span>
                <span className="bg-slate-800 text-slate-300 text-[10px] px-1.5 py-0.5 rounded border border-slate-700 uppercase font-mono tracking-wide">Tokyo, JP</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5 font-mono tracking-wide">KOMATSU CO., LTD. • 法人番号 6011801046241</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-red-500 font-medium text-sm transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              id="btn-lang-switcher"
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-slate-700 bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 hover:border-slate-600 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-red-500 animate-pulse" />
              <span>{t.langName}</span>
            </button>

            {/* Quick Consultation Badge */}
            <a
              href="#contact"
              className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-red-600 font-semibold text-xs tracking-wide text-white hover:bg-red-700 shadow-md shadow-red-900/30 transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{t.btnInquiry}</span>
            </a>
          </div>

          {/* Hamburger toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Lang for mobile */}
            <button
              onClick={toggleLanguage}
              id="btn-lang-mobile"
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-slate-800 text-slate-200 text-xs font-semibold cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.langName}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              id="btn-menu-hamburger"
              className="p-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 shadow-2xl absolute left-0 w-full transition-all duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1.5 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-red-600 font-semibold text-sm text-white hover:bg-red-700"
              >
                <Phone className="w-4 h-4" />
                <span>{t.btnInquiry}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
