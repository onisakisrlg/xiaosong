/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { TIRE_PRODUCTS } from '../data';
import { TireType, TireProduct } from '../types';
import { ShieldCheck, Snowflake, Gauge, Wind, Leaf, Droplets, Flame, HelpCircle, Camera, Image as ImageIcon, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import treadImage from '../assets/images/komatsu_tire_tread_1780906461067.png';

interface TiresCatalogProps {
  onSelectTire: (tire: TireProduct) => void;
}

export const TiresCatalog: React.FC<TiresCatalogProps> = ({ onSelectTire }) => {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({});
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});

  const toggleSpecs = (id: string) => {
    setExpandedSpecs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const setImageIndex = (productId: string, index: number) => {
    setActiveImageIndex(prev => ({ ...prev, [productId]: index }));
  };

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
                日本JIS規格準拠 & 静音・耐摩耗テクノロジー
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                小松タイヤのプロフェッショナルシリーズは、先進のカーボンシリカ補強技術を採用し、可変トレッドピッチにより走行時の高周波ノイズを極限まで低減。優れた直進安定性と操縦性を保証します。
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
                      {product.brand === 'KOMATSU' ? 'KOMATSU ORIGINAL SERIES' : `${product.brand} PREMIUM SERIES`}
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
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">ロードインデックス</div>
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

                  {/* Spec expand button */}
                  {product.specDetails && (
                    <button
                      onClick={() => toggleSpecs(product.id)}
                      className="w-full flex items-center justify-between px-3 py-2 mt-2 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-extrabold text-slate-700 hover:bg-slate-100 hover:text-black transition-all cursor-pointer"
                    >
                      <span className="flex items-center space-x-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                        <span>【詳細仕様・6枚画像ギャラリー】</span>
                      </span>
                      {expandedSpecs[product.id] ? <ChevronUp className="w-3.5 h-3.5 text-slate-500" /> : <ChevronDown className="w-3.5 h-3.5 text-slate-500" />}
                    </button>
                  )}
                </div>

                {/* Spec and gallery expand section */}
                {product.specDetails && expandedSpecs[product.id] && (
                  <div className="px-6 pb-4 pt-2 border-t border-slate-100 bg-slate-50/50 animate-fade-in space-y-4 text-xs">
                    {/* 6-image Gallery Placeholder if galleryImages is defined */}
                    {product.galleryImages && (
                      <div className="space-y-2">
                        <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest flex items-center space-x-1">
                          <Camera className="w-3.5 h-3.5 text-slate-400" />
                          <span>製品詳細マルチビュー (6枚画像ギャラリー)</span>
                        </div>
                        
                        {/* Selected Big Preview Area */}
                        <div className="bg-slate-100 border border-slate-200 rounded-xl overflow-hidden aspect-[16/10] relative group flex items-center justify-center bg-black shadow-inner">
                          {product.galleryImages[activeImageIndex[product.id] ?? 0] ? (
                            <img
                              src={product.galleryImages[activeImageIndex[product.id] ?? 0]}
                              alt={`Primacy 5 preview ${(activeImageIndex[product.id] ?? 0) + 1}`}
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <div className="p-4 flex flex-col items-center justify-center text-center">
                              <ImageIcon className="w-8 h-8 text-slate-400 mb-2" />
                              <div className="font-extrabold text-slate-700 text-xs font-mono">
                                【Primacy 5】画像プレースホルダー #{(activeImageIndex[product.id] ?? 0) + 1}
                              </div>
                            </div>
                          )}
                          <div className="absolute top-2 right-2 bg-slate-900/90 backdrop-blur-xs text-white text-[9px] font-mono px-2 py-0.5 rounded font-bold shadow-sm">
                            画像 #{(activeImageIndex[product.id] ?? 0) + 1} / 6
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent p-3 text-white">
                            <div className="text-[11px] font-extrabold tracking-wide drop-shadow-md">
                              {((activeImageIndex[product.id] ?? 0) === 0) && "MICHELIN Primacy 5 全体プロポーション＆サイドウォール"}
                              {((activeImageIndex[product.id] ?? 0) === 1) && "高次元の静粛性と快適な極上乗り心地を追求した設計"}
                              {((activeImageIndex[product.id] ?? 0) === 2) && "濡れた路面（ハイドロプレーニング路面）での圧倒的な制動安定性"}
                              {((activeImageIndex[product.id] ?? 0) === 3) && "プレミアムな質感を放つ特許技術『プレミアムタッチ』サイドデザイン"}
                              {((activeImageIndex[product.id] ?? 0) === 4) && "低燃費性能を高めつつ、ロングライフ高耐久を極めたプレミアムブレンド"}
                              {((activeImageIndex[product.id] ?? 0) === 5) && "インボイス制度対応の正規代理店卸ルート完全保証付き"}
                            </div>
                          </div>
                        </div>

                        {/* 6 Thumbnails click to switch */}
                        <div className="grid grid-cols-6 gap-1.5">
                          {product.galleryImages.map((imgUrl, index) => {
                            const isSelected = (activeImageIndex[product.id] ?? 0) === index;
                            return (
                              <button
                                key={index}
                                onClick={() => setImageIndex(product.id, index)}
                                className={`aspect-square rounded-lg overflow-hidden border transition-all cursor-pointer bg-slate-900 relative ${
                                  isSelected
                                    ? 'border-slate-800 ring-2 ring-slate-800 ring-offset-1'
                                    : 'border-slate-200 hover:border-slate-400'
                                }`}
                              >
                                {imgUrl ? (
                                  <img
                                    src={imgUrl}
                                    alt={`thumb ${index}`}
                                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                                    referrerPolicy="no-referrer"
                                  />
                                ) : (
                                  <div className="w-full h-full flex flex-col items-center justify-center">
                                    <Camera className={`w-3.5 h-3.5 ${isSelected ? 'text-slate-800' : 'text-slate-400'}`} />
                                    <span className="text-[8px] font-mono font-bold mt-0.5 text-slate-500">#{index + 1}</span>
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Detailed Technical Specs Table */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">
                        詳細テクニカルスペック (Technical details)
                      </div>
                      <div className="border border-slate-200 rounded-xl overflow-hidden bg-white divide-y divide-slate-100 font-mono text-[11px] text-slate-700 shadow-2xs">
                        {product.specDetails?.productCode && (
                          <div className="flex items-center justify-between p-2 hover:bg-slate-50/50">
                            <span className="text-slate-450 font-sans font-bold">商品コード</span>
                            <span className="font-extrabold text-slate-900">{product.specDetails.productCode}</span>
                          </div>
                        )}
                        {product.specDetails?.information && (
                          <div className="flex items-center justify-between p-2 hover:bg-slate-50/50">
                            <span className="text-slate-450 font-sans font-bold">特記事項</span>
                            <span className="font-bold text-slate-800 font-sans">{product.specDetails.information}</span>
                          </div>
                        )}
                        {product.specDetails?.sectionWidth && (
                          <div className="flex items-center justify-between p-2 hover:bg-slate-50/50">
                            <span className="text-slate-450 font-sans font-bold">断面幅 (mm)</span>
                            <span className="font-extrabold text-slate-900">{product.specDetails.sectionWidth} mm</span>
                          </div>
                        )}
                        {product.specDetails?.outerDiameter && (
                          <div className="flex items-center justify-between p-2 hover:bg-slate-50/50">
                            <span className="text-slate-450 font-sans font-bold">外径 (mm)</span>
                            <span className="font-extrabold text-slate-900">{product.specDetails.outerDiameter} mm</span>
                          </div>
                        )}
                        {product.specDetails?.measuringRimWidth && (
                          <div className="flex items-center justify-between p-2 hover:bg-slate-50/50">
                            <span className="text-slate-450 font-sans font-bold">計測リム幅</span>
                            <span className="font-extrabold text-slate-900">{product.specDetails.measuringRimWidth}</span>
                          </div>
                        )}
                        {product.specDetails?.compatibleRimWidth && (
                          <div className="flex items-center justify-between p-2 hover:bg-slate-50/50">
                            <span className="text-slate-450 font-sans font-bold">適合リム幅</span>
                            <span className="font-extrabold text-slate-900">{product.specDetails.compatibleRimWidth}</span>
                          </div>
                        )}
                        <div className="flex items-center justify-between p-2 hover:bg-slate-50/50">
                          <span className="text-slate-450 font-sans font-bold">車外ノイズ対応</span>
                          <span className="font-extrabold text-slate-900 font-sans">
                            {product.specDetails?.lowNoise ? "✓ 低車外音認定済" : "標準基準"}
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 hover:bg-slate-50/50">
                          <span className="text-slate-450 font-sans font-bold">低燃費認証</span>
                          <span className="font-extrabold text-slate-900 font-sans">
                            {product.specDetails?.lowFuelEco ? "✓ 低燃費タイヤ適合" : "標準基準"}
                          </span>
                        </div>
                        {product.specDetails?.reviewScore && (
                          <div className="flex items-center justify-between p-2 hover:bg-slate-50/50 bg-slate-50/30">
                            <span className="text-slate-450 font-sans font-bold">ユーザー評価</span>
                            <span className="font-extrabold text-amber-600 flex items-center">
                              ★ {product.specDetails.reviewScore} <span className="text-slate-450 text-[10px] font-normal font-sans ml-1">({product.specDetails.reviewCount}件のクチコミ)</span>
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

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
