/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { TIRE_PRODUCTS } from '../data';
import { TireType, TireProduct } from '../types';
import { ShieldCheck, Snowflake, Gauge, Wind, Leaf, Droplets, Flame, HelpCircle } from 'lucide-react';
import treadImage from '../assets/images/komatsu_tire_tread_1780906461067.png';

interface TiresCatalogProps {
  onSelectTire: (tire: TireProduct) => void;
}

export const TiresCatalog: React.FC<TiresCatalogProps> = ({ onSelectTire }) => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<string>('ALL');

  const filteredProducts = selectedType === 'ALL'
    ? TIRE_PRODUCTS
    : TIRE_PRODUCTS.filter(p => p.type === selectedType);

  const getTireIcon = (type: TireType) => {
    switch (type) {
      case TireType.SPORT:
        return <Flame className="w-5 h-5 text-slate-850" />;
      case TireType.COMFORT:
        return <Wind className="w-5 h-5 text-slate-850" />;
      case TireType.ECO:
        return <Leaf className="w-5 h-5 text-slate-850" />;
      case TireType.SUV:
        return <Gauge className="w-5 h-5 text-slate-850" />;
      case TireType.WINTER:
        return <Snowflake className="w-5 h-5 text-slate-850 animate-spin-slow" />;
    }
  };

  const getTireTypeLabel = (type: TireType) => {
    switch (type) {
      case TireType.SPORT: return t.sport;
      case TireType.COMFORT: return t.comfort;
      case TireType.ECO: return t.eco;
      case TireType.SUV: return t.suv;
      case TireType.WINTER: return t.winter;
    }
  };

  const handleInquiryClick = (product: TireProduct) => {
    onSelectTire(product);
    // Smooth scroll to form
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-slate-50 border-b border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t.productTitle}
          </h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            {t.productSub}
          </p>
        </div>

        {/* Categories Tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedType('ALL')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border cursor-pointer ${
              selectedType === 'ALL'
                ? 'bg-black border-black text-white font-bold shadow-md shadow-black/10'
                : 'bg-white border-slate-200 text-slate-600 hover:text-black hover:border-slate-350'
            }`}
          >
            {t.allTypes}
          </button>
          {Object.values(TireType).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all border flex items-center space-x-1.5 cursor-pointer ${
                selectedType === type
                  ? 'bg-black border-black text-white font-bold shadow-md shadow-black/10'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-black hover:border-slate-350'
              }`}
            >
              {getTireIcon(type)}
              <span>{getTireTypeLabel(type)}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Catalog Split with a decorative detail card and products list */}
        <div className="grid xl:grid-cols-4 gap-8">
          
          {/* Static info card showcasing premium technical patterns */}
          <div className="xl:col-span-1 bg-white border border-slate-202 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden h-full min-h-[350px] shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-100 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-slate-700 font-extrabold bg-slate-50 border border-slate-200 px-2.5 py-1 rounded">
                TECHNICAL ASSURANCE
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                日本JIS标准认证 & 耐磨静音制造工艺
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                小松轮胎系列运用领先的分子化碳硅补强化技术，多段式变频槽可最大程度干扰声波传导。无论在拥堵市区或高架桥梁，均能保障极佳的路感稳定性。
              </p>
            </div>

            <div className="mt-8 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
              <img
                src={treadImage}
                alt="Tire tread details"
                className="w-full h-auto object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Product grid displaying matching tires */}
          <div className="xl:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-205 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-400 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 relative group"
              >
                {/* Popular Badge */}
                {product.popularity >= 4.8 && (
                   <span className="absolute top-3.5 right-3.5 flex items-center space-x-1 bg-white border border-slate-200 text-slate-800 text-[10px] font-extrabold px-2 py-0.5 rounded shadow-sm">
                    <span>★ {product.popularity}</span>
                    <span>{t.popularBadge}</span>
                  </span>
                )}

                {/* Inner product description */}
                <div className="p-6 space-y-4">
                  {/* Category representation & Code */}
                  <div className="flex items-center space-x-2">
                    <span className="bg-slate-50 border border-slate-200 p-2 rounded-lg">
                      {getTireIcon(product.type)}
                    </span>
                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-widest font-mono">
                      {getTireTypeLabel(product.type)}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase mb-1">
                      {product.brand} ORIGINAL SERIES
                    </h4>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  {/* Tire sizing specifications box */}
                  <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{t.specs}</div>
                      <div className="text-sm font-extrabold text-slate-900 font-mono tracking-tight mt-0.5">
                        {product.width}/{product.aspectRatio} R{product.diameter}
                      </div>
                    </div>
                    <div className="text-right border-l border-slate-200 pl-4 overflow-hidden">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">配重载荷</div>
                      <div className="text-xs font-mono font-extrabold text-slate-800 mt-0.5">
                        {product.loadIndex}{product.speedRating}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-semibold line-clamp-3">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-50 border border-slate-200 text-slate-700 text-[10px] px-2 py-0.5 rounded font-bold"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action price & Reservation button footer */}
                <div className="p-6 pt-0 border-t border-slate-200/80 bg-slate-50/60">
                  <div className="flex items-center justify-between mt-4 mb-4">
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase font-mono tracking-wider">ESTIMATED PRICE</span>
                      <span className="text-xl font-bold font-mono text-slate-900">
                        ¥{product.priceYen.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold lowercase ml-0.5">
                        {t.priceUnits}{t.perTire}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleInquiryClick(product)}
                    className="w-full flex items-center justify-center space-x-1.5 py-2.5 rounded-lg bg-black hover:bg-slate-800 border border-black hover:border-slate-800 font-bold text-xs text-white transition-all cursor-pointer shadow-xs group"
                  >
                    <span>{t.inquiryNow}</span>
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
