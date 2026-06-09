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
    <footer className="bg-white text-slate-600 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid splits */}
        <div className="grid md:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          
          {/* Column 1: Trademark and description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <span className="bg-black px-3 py-1.5 rounded text-white font-mono font-extrabold tracking-widest text-sm shadow-xs animate-none">KMTS</span>
              <span className="text-slate-900 font-black text-lg font-sans">小松株式会社</span>
            </div>
            <p className="text-xs text-slate-550 max-w-sm font-sans leading-relaxed font-semibold">
              小松株式会社（Komatsu Co., Ltd.）は、東京都足立区に事業所（足立倉庫・デポ）を置く、タイヤ・ホイール等の卸売および配送管理を行う企業です。正規ルートを通じた高品質乗用車・ライトトラック用タイヤの供給により、お客様の安全なドライブを支えます。
            </p>
            <div className="pt-2">
              <div className="text-[10px] text-slate-500 font-bold font-mono tracking-wider uppercase">国税庁法人登録機関証明</div>
              <p className="text-xs text-slate-800 font-extrabold font-mono mt-0.5">Corporate Number (法人番号) : 6011801046241</p>
            </div>
          </div>

          {/* Column 2: Quick links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 font-mono">
              クイックリンク · Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="text-slate-600 hover:text-black hover:font-bold transition-all font-semibold">{t.navHome}</a>
              <a href="#about" className="text-slate-600 hover:text-black hover:font-bold transition-all font-semibold">{t.navAbout}</a>
              <a href="#products" className="text-slate-600 hover:text-black hover:font-bold transition-all font-semibold">{t.navProducts}</a>
              <a href="#faq" className="text-slate-600 hover:text-black hover:font-bold transition-all font-semibold">{t.navFAQ}</a>
              <a href="#contact" className="text-slate-600 hover:text-black hover:font-bold transition-all font-semibold">{t.navContact}</a>
            </div>
          </div>

          {/* Column 3: Localized Adachi Depot details */}
          <div className="md:col-span-4 space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 font-mono">
              足立倉庫所在地 · Adachi-ku Depot
            </h4>
            <div className="space-y-2 text-xs leading-relaxed font-sans text-slate-650">
              <p className="flex items-start font-semibold">
                <MapPin className="w-3.5 h-3.5 text-slate-700 mr-2 shrink-0 mt-0.5" />
                <span className="text-slate-900 font-extrabold">東京都足立区江北３丁目３０－１８</span>
              </p>
              <p className="pl-5 font-semibold">
                日本国税局適格請求書発行事業者 <br />
                登録認証済み番号: <span className="font-extrabold text-slate-900">T6011801046241</span>
              </p>
              <p className="pl-5 text-[11px] text-slate-500 font-medium">
                ※ 来店タイヤ交換（要予約）、国内大型配送対応。
              </p>
            </div>
          </div>

        </div>

        {/* Bottom micro footer copy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-slate-550 font-mono font-semibold">
          <div>
            <span>{t.copyright}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
              <span>JIS Standard Cert</span>
            </span>
            <span>|</span>
            <span className="flex items-center space-x-1">
              <Award className="w-3.5 h-3.5 text-slate-500" />
              <span>インボイス対応店</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
