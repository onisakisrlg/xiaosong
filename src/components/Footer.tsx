/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { ShieldAlert, Award, FileSpreadsheet, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid splits */}
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60">
          
          {/* Column 1: Trademark and description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-red-600 px-3 py-1.5 rounded text-white font-mono font-bold tracking-widest text-sm shadow">KMTS</span>
              <span className="text-white font-bold text-lg font-sans">小松株式会社</span>
            </div>
            <p className="text-xs text-slate-500 max-w-sm font-sans leading-relaxed">
              小松株式会社（Komatsu Co., Ltd.）是位于日本东京都足立区的实业发货和整车轮胎调运企业。我们通过合规、规范渠道进行多用途轿车及商用货车轮胎贩卖，确保用户出行安心稳定。
            </p>
            <div className="pt-2">
              <div className="text-[10px] text-slate-600 font-mono tracking-wider uppercase">国税庁法人登録機関証明</div>
              <p className="text-xs text-slate-400 font-medium font-mono mt-0.5">Corporate Number (法人番号) : 6011801046241</p>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              クイックリンク · Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="hover:text-red-500 transition-colors">{t.navHome}</a>
              <a href="#about" className="hover:text-red-500 transition-colors">{t.navAbout}</a>
              <a href="#products" className="hover:text-red-500 transition-colors">{t.navProducts}</a>
              <a href="#calculator" className="hover:text-red-500 transition-colors">{t.navCalculator}</a>
              <a href="#faq" className="hover:text-red-500 transition-colors">{t.navFAQ}</a>
              <a href="#contact" className="hover:text-red-500 transition-colors">{t.navContact}</a>
            </div>
          </div>

          {/* Column 3: Localized Adachi Depot details */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
              足立倉庫所在地 · Adachi-ku Depot
            </h4>
            <div className="space-y-2 text-xs leading-relaxed font-sans text-slate-500">
              <p className="flex items-start">
                <MapPin className="w-3.5 h-3.5 text-red-500 mr-2 shrink-0 mt-0.5" />
                <span>東京都足立区江北３丁目３０－１８</span>
              </p>
              <p className="pl-5">
                日本国税局適格請求書発行事業者 <br />
                登録認証済み番号: <strong>T6011801046241</strong>
              </p>
              <p className="pl-5 text-[11px] text-slate-600">
                ※ 来店タイヤ交換（要事前予約）、大型配送・運送対応。
              </p>
            </div>
          </div>

        </div>

        {/* Bottom micro footer copy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-600 font-mono">
          <div>
            <span>{t.copyright}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-600" />
              <span>JIS Standard Cert</span>
            </span>
            <span>|</span>
            <span className="flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-slate-600" />
              <span>インボイス対応店</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
