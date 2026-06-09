/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { TireProduct } from '../types';
import { Mail, Phone, MapPin, ShieldCheck, X } from 'lucide-react';

interface InquiryFormProps {
  selectedTire: TireProduct | null;
  onClearSelectedTire: () => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ selectedTire, onClearSelectedTire }) => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white border-b border-slate-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 animate-fade-in">
            {t.formTitle}
          </h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 font-medium whitespace-pre-line">
            {t.formSub}
          </p>
        </div>

        {/* Contact Split Layout - Center Aligned Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-slate-205 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            
            {/* Active Selected Tire Tag indicator */}
            {selectedTire && (
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between animate-fade-in shadow-2xs">
                <div className="text-xs">
                  <span className="font-extrabold text-slate-500 block mb-0.5">現在選択中モデル (Selected Pattern for inquiry)</span>
                  <span className="text-slate-900 font-mono font-extrabold text-sm sm:text-base">
                    KOMATSU {selectedTire.name} ({selectedTire.width}/{selectedTire.aspectRatio} R{selectedTire.diameter})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClearSelectedTire}
                  className="p-1.5 rounded-full hover:bg-slate-200 border border-transparent text-slate-500 hover:text-black transition-colors cursor-pointer shrink-0 ml-4"
                  title="清除"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="border-b border-slate-100 pb-6 text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-slate-900 flex items-center justify-center sm:justify-start space-x-2">
                <span className="w-1.5 h-6 bg-black rounded" />
                <span>小松株式会社 <span className="text-slate-500 font-normal text-lg">Contact Desk</span></span>
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold mt-4">
                大口卸売・日本国内の物流手配・スポット調達に対応。ディーラー様・整備工場様向け取引、インボイス制度適格請求書（登録番号あり）に完全対応しています。
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              
              {/* Landline item */}
              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-205">
                <div className="bg-white border border-slate-200 p-3 rounded-lg text-slate-850 shrink-0 mt-0.5 shadow-xs">
                  <Phone className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-550 uppercase">{t.telNum}</h4>
                  <p className="text-xl font-extrabold font-mono text-slate-900 mt-1">{t.telVal}</p>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">{t.workHoursVal}</p>
                </div>
              </div>

              {/* Mobile item */}
              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-205">
                <div className="bg-white border border-slate-200 p-3 rounded-lg text-slate-850 shrink-0 mt-0.5 shadow-xs">
                  <Phone className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-550 uppercase">{t.mobileNum}</h4>
                  <p className="text-xl font-extrabold font-mono text-slate-900 mt-1">{t.mobileVal}</p>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">
                    携帯電話窓口 · 担当直通
                  </p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-205">
                <div className="bg-white border border-slate-200 p-3 rounded-lg text-slate-850 shrink-0 mt-0.5 shadow-xs">
                  <Mail className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-550 uppercase">{t.emailContact}</h4>
                  <p className="text-sm sm:text-base font-extrabold font-mono text-slate-900 mt-1">maki@komatsujapan.co.jp</p>
                  <p className="text-[10px] text-slate-500 font-semibold mt-1">
                    24時間メール受付、お見積書をPDF形式でお送りします
                  </p>
                </div>
              </div>

              {/* Address Map Pin */}
              <div className="flex items-start space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-205">
                <div className="bg-white border border-slate-200 p-3 rounded-lg text-slate-850 shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-550 uppercase">HEAD DEPOT / 足立デポ</h4>
                  <p className="text-sm font-extrabold text-slate-900 mt-1">{t.corpAddressVal}</p>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">東京都足立区江北3-30-18</p>
                </div>
              </div>

            </div>

            {/* Support guarantee badge */}
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-205 flex items-center space-x-4 text-xs text-slate-650 font-semibold leading-relaxed font-sans shadow-2xs">
              <ShieldCheck className="w-10 h-10 text-slate-900 shrink-0" />
              <span>
                <strong>メーカー正規品保証：</strong> 当社が取り扱うすべてのタイヤには、製造ロットDOTコードおよびJIS認証マークが付随しています。当社は <strong>日本国税庁公認の適格請求書発行事業者（登録番号: T6011801046241）</strong> であり、適格適正インボイスの発行に完全対応しています。
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
