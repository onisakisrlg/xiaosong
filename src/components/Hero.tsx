/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { ShieldAlert, Award, Star } from 'lucide-react';
import heroImage from '../assets/images/komatsu_tire_hero_1780906447057.png';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-slate-50 border-b border-slate-250/60 overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-radial-gradient from-slate-200/40 via-transparent to-transparent opacity-60 pointer-events-none rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-slate-150/40 opacity-40 pointer-events-none rounded-full blur-2xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-11 xl:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-white border border-slate-200 px-3.5 py-1 rounded-full text-slate-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 bg-slate-900 rounded-full" />
              <span>{t.sloganTop}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              {t.sloganBig} <br />
              <span className="text-slate-900">
                小松タイヤ (KOMATSU)
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              {t.sloganSub}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg bg-black text-sm font-bold tracking-wide text-white hover:bg-slate-800 shadow-lg shadow-black/10 transition-all text-center cursor-pointer"
              >
                <span>{t.btnInquiry}</span>
              </a>
            </div>

            {/* Badges/Highlights */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4">
              <div className="flex items-start space-x-2">
                <Star className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800 text-sm">{t.satisfaction}</div>
                  <div className="text-slate-550 text-xs mt-0.5 font-mono">Expert Support</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Award className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800 text-sm">{t.tiresSold}</div>
                  <div className="text-slate-550 text-xs mt-0.5 font-mono">Verified Quality</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-800 text-sm">{t.reliableService}</div>
                  <div className="text-slate-550 text-xs mt-0.5 font-mono">Corporate Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image / visual panel */}
          <div className="lg:col-span-12 xl:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/60 bg-white group">
              <img
                src={heroImage}
                alt="Komatsu Tires Premium Sedan"
                className="w-full h-auto object-cover transform scale-100 hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Abstract decorative floating badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur border border-slate-200 p-3.5 rounded-lg flex items-center space-x-3 shadow-lg max-w-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 animate-pulse" />
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-slate-550">CORPORATE NO</div>
                  <div className="font-mono text-xs font-semibold text-slate-800">6011801046241</div>
                </div>
              </div>
            </div>

            {/* Outer elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-slate-200/20 rounded-xl -z-10 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-slate-100 rounded-xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};
