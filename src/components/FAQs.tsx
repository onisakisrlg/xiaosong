/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { FAQS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FAQs: React.FC = () => {
  const t = useTranslation().t;
  const [openId, setOpenId] = useState<string | null>('f1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-150">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            {t.navFAQ} · FAQ
          </h2>
          <div className="w-16 h-1 bg-black mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-500 font-medium">
            タイヤの選び方・仕様・お取引についてのご案内
          </p>
        </div>

        {/* Dynamic Accordions list */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const questionText = faq.question;
            const answerText = faq.answer;

            return (
              <div
                key={faq.id}
                className="bg-slate-50 border border-slate-205 rounded-xl overflow-hidden transition-all duration-300 shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-800 font-extrabold hover:text-black hover:bg-slate-100/50 transition-all font-sans cursor-pointer animate-none"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-slate-900 shrink-0" />
                    <span className="text-sm sm:text-base leading-snug">{questionText}</span>
                  </div>
                  <span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-slate-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-600 shrink-0" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-2.5 border-t border-slate-200 bg-white">
                    <div className="pl-8 text-xs sm:text-sm text-slate-650 leading-relaxed font-sans font-semibold whitespace-pre-line">
                      {answerText}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Notice of commitment for support */}
        <div className="mt-10 p-5 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 text-center">
          <p className="text-xs text-slate-600 font-sans font-semibold leading-relaxed">
            ※ 上記にないサイズ、特殊なタイヤ（大型建機用、ランフラット等）についてもお取り寄せ・対応が可能です。どうぞお気軽に弊社窓口まで直接ご相談ください。
          </p>
        </div>

      </div>
    </section>
  );
};
