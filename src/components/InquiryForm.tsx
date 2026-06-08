/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { InquiryFormData, TireProduct, TireType } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, X } from 'lucide-react';

interface InquiryFormProps {
  selectedTire: TireProduct | null;
  onClearSelectedTire: () => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ selectedTire, onClearSelectedTire }) => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    tireType: 'COMFORT',
    sizeDesired: '',
    quantity: 4,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // If a catalog tire is selected, pre-populate values!
  useEffect(() => {
    if (selectedTire) {
      setFormData(prev => ({
        ...prev,
        tireType: selectedTire.type,
        sizeDesired: `${selectedTire.width}/${selectedTire.aspectRatio} R${selectedTire.diameter}`,
        message: prev.message || `【咨询轮胎】：KOMATSU ${selectedTire.name} (售价约 ¥${selectedTire.priceYen.toLocaleString()}日元/条)。`,
      }));
    }
  }, [selectedTire]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      return;
    }

    setIsSubmitting(true);
    // Simulating API submissions
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form variables
      setFormData({
        name: '',
        email: '',
        phone: '',
        tireType: 'COMFORT',
        sizeDesired: '',
        quantity: 4,
        message: '',
      });
      onClearSelectedTire();
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white animate-fade-in">
            {t.formTitle}
          </h2>
          <div className="w-16 h-1 bg-white mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-400">
            {t.formSub}
          </p>
        </div>

        {/* Form Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Corp contact details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              小松株式会社 <span className="text-slate-400 font-normal">Contact Desk</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              支持大货分销、日本国内物流配送、散货及配载调拨。无论是东京都本地车厂或是海外贸易，均可提供适格发票（インボイス制度適格請求書発行事業者）。
            </p>

            <div className="space-y-4 pt-4">
              {/* Phone item */}
              <div className="flex items-start space-x-3.5 bg-slate-950/40 p-4.5 rounded-xl border border-slate-800/80">
                <div className="bg-slate-900 border border-slate-750 p-2.5 rounded-lg text-slate-300 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">{t.telNum}</h4>
                  <p className="text-lg font-bold font-mono text-slate-100 mt-1">{t.telVal}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{t.workHoursVal}</p>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start space-x-3.5 bg-slate-950/40 p-4.5 rounded-xl border border-slate-800/80">
                <div className="bg-slate-900 border border-slate-750 p-2.5 rounded-lg text-slate-300 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">{t.emailContact}</h4>
                  <p className="text-sm font-semibold font-mono text-slate-100 mt-1">info@komatsu-tire-tokyo.co.jp</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">我们会通过企业邮箱发送 PDF 形式的正规报价单</p>
                </div>
              </div>

              {/* Address Map Pin */}
              <div className="flex items-start space-x-3.5 bg-slate-950/40 p-4.5 rounded-xl border border-slate-800/80">
                <div className="bg-slate-900 border border-slate-750 p-2.5 rounded-lg text-slate-300 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">HEAD DEPOT</h4>
                  <p className="text-sm font-semibold text-slate-100 mt-1">{t.corpAddressVal}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">东京都足立区江北3-30-18</p>
                </div>
              </div>
            </div>

            {/* Support guarantee badge */}
            <div className="p-4 bg-slate-950 rounded-lg border border-slate-800/80 flex items-center space-x-3 text-xs text-slate-400 leading-relaxed font-sans shadow-inner">
              <ShieldCheck className="w-8 h-8 text-slate-300 shrink-0" />
              <span>
                <strong>日本原厂保证：</strong> 售出的每一条轮胎均带完整的生产批次DOT代码与JIS检验标识，支持全渠道检验。
              </span>
            </div>
          </div>

          {/* Right Panel: Interactive Submission form Card */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl shadow-black/80 relative">
            
            {/* Active Selected Tire Tag indicator */}
            {selectedTire && (
              <div className="mb-6 bg-slate-900 border border-slate-800 p-3.5 rounded-xl flex items-center justify-between">
                <div className="text-xs">
                  <span className="font-semibold text-slate-400 block">已锁定目录款式 (Catalog product selected)</span>
                  <span className="text-white font-mono font-bold">
                    KOMATSU {selectedTire.name} ({selectedTire.width}/{selectedTire.aspectRatio} R{selectedTire.diameter})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClearSelectedTire}
                  className="p-1.5 rounded-full hover:bg-slate-800 border border-transparent text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="清除选择"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {isSubmitted ? (
              /* Success Stage */
              <div className="text-center py-10 space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-green-950 border border-green-800/40 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-slate-100">{t.formSuccessTitle}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto">
                    {t.formSuccessDesc}
                  </p>
                </div>
                <div className="pt-4 font-mono text-[10px] text-slate-500">
                  REF NO: #KMTS-{(Math.floor(Math.random() * 900000) + 100000)} • 法人番号: 6011801046241
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 text-xs font-semibold text-slate-300 transition-all cursor-pointer"
                >
                  重新填写其他预约
                </button>
              </div>
            ) : (
              /* Core Inputs form */
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 block">{t.formLabelName} <span className="text-slate-400">*</span></label>
                    <input
                      type="text"
                      required
                      placeholder={t.formPlaceholderName}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-600 font-sans"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 block">{t.formLabelEmail} <span className="text-slate-400">*</span></label>
                    <input
                      type="email"
                      required
                      placeholder="info@yourcompany.jp"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-600 font-mono"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 block">{t.formLabelPhone} <span className="text-slate-400">*</span></label>
                    <input
                      type="tel"
                      required
                      placeholder="例：03-1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-600 font-mono"
                    />
                  </div>

                  {/* Tire Type select */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 block">{t.formLabelType}</label>
                    <select
                      value={formData.tireType}
                      onChange={(e) => setFormData({ ...formData, tireType: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-slate-600 font-sans appearance-none"
                    >
                      <option value={TireType.SPORT}>{t.sport}</option>
                      <option value={TireType.COMFORT}>{t.comfort}</option>
                      <option value={TireType.ECO}>{t.eco}</option>
                      <option value={TireType.SUV}>{t.suv}</option>
                      <option value={TireType.WINTER}>{t.winter}</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  {/* Size requested */}
                  <div className="sm:col-span-2 space-y-1.5 font-mono">
                    <label className="text-xs font-semibold text-slate-400 block">{t.formLabelSize} (Size code)</label>
                    <input
                      type="text"
                      placeholder="例如：215/60R16 或 R18等 (可空白)"
                      value={formData.sizeDesired}
                      onChange={(e) => setFormData({ ...formData, sizeDesired: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-600"
                    />
                  </div>

                  {/* Quantity requested */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-400 block">{t.formLabelQty}</label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-slate-600 font-mono"
                    >
                      <option value="1">1 条 (Spare)</option>
                      <option value="2">2 条 (Axle)</option>
                      <option value="4">4 条 (Full set)</option>
                      <option value="8">8 条 (Large batch)</option>
                      <option value="12">12 条以上 (Bulk)</option>
                    </select>
                  </div>
                </div>

                {/* Additional message notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-400 block">{t.formLabelMsg}</label>
                  <textarea
                    rows={4}
                    placeholder={t.formPlaceholderMsg}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-slate-600 font-sans"
                  />
                </div>

                {/* Submit trigger button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-lg bg-white hover:bg-slate-200 text-slate-950 font-bold tracking-wider text-sm transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-black/80"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{isSubmitting ? t.formSending : t.formSubmitBtn}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
