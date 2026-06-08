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
      icon: <Building className="w-5 h-5 text-red-500" />,
      label: t.corpName,
      value: t.corpNameVal,
    },
    {
      icon: <Shield className="w-5 h-5 text-red-500" />,
      label: t.corpNumber,
      value: t.corpNumberVal,
      badge: "国税庁登記"
    },
    {
      icon: <MapPin className="w-5 h-5 text-red-500" />,
      label: t.corpAddress,
      value: t.corpAddressVal,
      searchUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("東京都足立区江北３丁目３０－１８")}`
    },
    {
      icon: <Calendar className="w-5 h-5 text-red-500" />,
      label: t.established,
      value: t.establishedVal,
    },
    {
      icon: <ClipboardCheck className="w-5 h-5 text-red-500" />,
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
    <section id="about" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {t.navAbout} · Corporate Information
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-400">
            {t.strengthSub}
          </p>
        </div>

        {/* Dynamic Split Grids */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Block: Company official profile card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-950/70 border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl shadow-black/30 relative">
              <div className="absolute top-6 right-6 flex items-center space-x-1.5 bg-green-950 border border-green-800/50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold text-green-400">正規法人登記</span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center space-x-2">
                <span className="w-1 h-5 bg-red-500 rounded" />
                <span>会社基本情報</span>
              </h3>

              <div className="space-y-5">
                {companyFacts.map((fact, index) => (
                  <div key={index} className="flex items-start pb-4 border-b border-slate-800/40 last:border-b-0 last:pb-0">
                    <div className="bg-slate-900 p-2.5 rounded-lg mr-4 shrink-0 shadow-inner">
                      {fact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-slate-500 font-mono tracking-wider mb-1">
                        {fact.label}
                      </div>
                      <div className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                        {fact.value}
                        {fact.badge && (
                          <span className="ml-2.5 bg-red-950 border border-red-800/80 text-red-400 font-mono text-[10px] px-2 py-0.5 rounded font-semibold">
                            {fact.badge}
                          </span>
                        )}
                        {fact.searchUrl && (
                          <a
                            href={fact.searchUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 ml-2 text-red-400 hover:text-red-300 text-xs transition-colors"
                          >
                            <span>地图查看</span>
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
            <div className="bg-slate-950/40 border border-slate-800 p-5 rounded-xl flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg bg-red-950/50 flex items-center justify-center border border-red-800/40 shrink-0">
                <MapPin className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <p className="text-xs text-slate-500">本店配送部所在地 (Tokyo Depot)</p>
                <p className="text-sm font-semibold text-slate-100 mt-0.5">東京都足立区江北３丁目３０－１８</p>
                <p className="text-xs text-red-400 mt-1">※ 近江北线、江北出口。日本全国大规格卡车载重规格轮胎均可调拨配载。</p>
              </div>
            </div>
          </div>

          {/* Right Block: Core strengths */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-white mb-6">
              {t.strengthTitle}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.map((prop, idx) => (
                <div key={idx} className="bg-slate-950/40 border border-slate-800 p-5 rounded-xl hover:border-slate-700/80 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-bold text-red-500 font-mono text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="text-base font-bold text-slate-100 mb-2">{prop.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{prop.desc}</p>
                </div>
              ))}
            </div>

            {/* Secondary certification callout */}
            <div className="mt-8 p-5 rounded-xl border border-red-950/50 bg-radial-gradient from-red-950/20 to-slate-950 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 -rotate-45 pointer-events-none rounded-full blur-xl" />
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-red-400 font-mono tracking-widest uppercase mb-1">官方正规商号</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    小松株式会社（Komatsu Co., Ltd.）是经日本法务局（法務局）及国税厅正式受案核准成立的综合汽配轮胎分销机构。由于我们在汽车配件和橡胶轮胎领域拥有稳健的地方配货协议，所有交易发票均符合日本适格请求书（インボイス制度）要求。
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
