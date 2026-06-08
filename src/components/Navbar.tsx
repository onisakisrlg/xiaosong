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
    { name: t.navFAQ, href: '#faq' },
    { name: t.navContact, href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900 z-50 transition-all duration-300 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-black p-2.5 rounded-lg flex items-center justify-center shadow-lg shadow-black/10">
              <span className="font-bold text-lg font-mono tracking-widest text-white">KMTS</span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-xl tracking-tight leading-none text-slate-900">小松株式会社</span>
                <span className="bg-slate-100 text-slate-800 text-[10px] px-1.5 py-0.5 rounded border border-slate-200 uppercase font-mono tracking-wide font-semibold">Tokyo, JP</span>
              </div>
              <p className="text-[10px] text-slate-500 mt-0.5 font-mono tracking-wide">KOMATSU CO., LTD. • 法人番号 6011801046241</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-black font-semibold text-sm transition-colors duration-200"
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
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-semibold hover:bg-slate-100 hover:border-slate-300 transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{t.langName}</span>
            </button>

            {/* Quick Consultation Badge */}
            <a
              href="#contact"
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-black font-bold text-xs tracking-wide text-white hover:bg-slate-800 shadow-sm transition-all cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>{t.btnInquiry}</span>
            </a>
          </div>

          {/* Hamburger toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Lang for mobile */}
            <button
              onClick={toggleLanguage}
              id="btn-lang-mobile"
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-full bg-slate-100 border border-slate-250 text-slate-800 text-xs font-semibold cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-slate-600" />
              <span>{t.langName}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              id="btn-menu-hamburger"
              className="p-2 rounded-md hover:bg-slate-100 hover:text-black text-slate-700 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-2xl absolute left-0 w-full transition-all duration-300">
          <div className="px-2 pt-2 pb-6 space-y-1.5 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-100 hover:text-black transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center space-x-2 w-full py-3 rounded-lg bg-black font-bold text-sm text-white hover:bg-slate-800 transition-colors"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>{t.btnInquiry}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
