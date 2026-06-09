/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Shield, MapPin, Building, Calendar, ClipboardCheck, ArrowUpRight, Award, BadgeAlert } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const companyFacts = [
    {
      icon: <Building className="w-5 h-5 text-slate-800" />,
      label: t.corpName,
      value: t.corpNameVal,
    },
    {
      icon: <Shield className="w-5 h-5 text-slate-800" />,
      label: t.corpNumber,
      value: t.corpNumberVal,
      badge: "国税庁登記"
    },
    {
      icon: <MapPin className="w-5 h-5 text-slate-800" />,
      label: t.corpAddress,
      value: t.corpAddressVal,
      searchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("東京都足立区江北３丁目３０－１８")}`
    },
    {
      icon: <Calendar className="w-5 h-5 text-slate-800" />,
      label: t.established,
      value: t.establishedVal,
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-slate-800" />,
      label: t.businessScope,
      value: t.businessScopeVal,
    }
  ];

  const valueProps = [
    {
      title: t.strength1Title,
      desc: t.strength1Desc,
    },
    {
      title: t.strength2Title,
      desc: t.strength2Desc,
    },
    {
      title: t.strength3Title,
      desc: t.strength3Desc,
    },
    {
      title: t.strength4Title,
      desc: t.strength4Desc,
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t.navAbout} · Corporate Information
          </h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            {t.strengthSub}
          </p>
        </div>

        {/* Dynamic Split Grids */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Block: Company official profile card */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-6">
            <div className="bg-slate-50 border border-slate-205 p-6 sm:p-8 rounded-2xl shadow-sm relative">
              <div className="absolute top-6 right-6 flex items-center space-x-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                <span className="text-[10px] uppercase font-mono tracking-wider font-bold text-slate-700">正規法人登記</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
                <span className="w-1 h-5 bg-black rounded" />
                <span>会社基本情報</span>
              </h3>

              <div className="space-y-5">
                {companyFacts.map((fact, index) => (
                  <div key={index} className="flex items-start pb-4 border-b border-slate-200 last:border-b-0 last:pb-0">
                    <div className="bg-white border border-slate-200 p-2.5 rounded-lg mr-4 shrink-0 shadow-xs">
                      {fact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-slate-500 font-mono tracking-wider mb-1">
                        {fact.label}
                      </div>
                      <div className="text-sm sm:text-base text-slate-800 font-bold leading-relaxed">
                        {fact.value}
                        {fact.badge && (
                          <span className="ml-2.5 bg-slate-200 border border-slate-300 text-slate-700 font-mono text-[10px] px-2 py-0.5 rounded font-extrabold shadow-2xs">
                            {fact.badge}
                          </span>
                        )}
                        {fact.searchUrl && (
                          <a
                            href={fact.searchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 ml-2 text-slate-600 hover:text-black text-xs transition-colors underline"
                          >
                            <span>マップで開く</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated mini Japan map card showing address in Adachi-ku */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center border border-slate-200 shrink-0 shadow-xs">
                <MapPin className="w-6 h-6 text-slate-800" />
              </div>
              <div>
                <p className="text-xs text-slate-500">本店配送部所在地 (Tokyo Depot)</p>
                <p className="text-sm font-extrabold text-slate-900 mt-0.5">東京都足立区江北３丁目３０－１８</p>
                <p className="text-xs text-slate-600 mt-1">※ 首都高速川口線・江北出入口近く。日本全国、大型トラック用まで各種タイヤの発送調達が可能です。</p>
              </div>
            </div>
          </div>

          {/* Right Block: Core strengths */}
          <div className="lg:col-span-12 xl:col-span-6 flex flex-col justify-between space-y-6 xl:space-y-0">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {t.strengthTitle}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-5 rounded-xl hover:border-slate-400 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center font-bold text-white font-mono text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 mb-2">{prop.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-semibold font-sans">{prop.desc}</p>
                </div>
              ))}
            </div>

            {/* Secondary certification callout */}
            <div className="mt-8 p-5 rounded-xl border border-slate-200 bg-slate-50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/20 -rotate-45 pointer-events-none rounded-full blur-xl" />
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-slate-900 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-700 font-mono tracking-widest uppercase mb-1">実体登録法人</p>
                  <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                    小松株式会社（Komatsu Co., Ltd.）は、法務局および国税庁に正規に登記された総合自動車タイヤ流通企業です。インボイス制度（適格請求書発行事業者登録番号：T6011801046241）にも完全対応しており、お見積書および請求書の発行もスムーズに行うことができます。
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
