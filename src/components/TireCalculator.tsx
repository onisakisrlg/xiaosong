/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { CalculatorInput, CalculatorResult } from '../types';
import { Calculator, RotateCcw, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';

export const TireCalculator: React.FC = () => {
  const { t } = useTranslation();

  // Specification 1: Current tire
  const [currentTire, setCurrentTire] = useState<CalculatorInput>({
    width: 205,
    aspectRatio: 55,
    diameter: 16,
  });

  // Specification 2: New tire
  const [newTire, setNewTire] = useState<CalculatorInput>({
    width: 225,
    aspectRatio: 45,
    diameter: 17,
  });

  const [currentResult, setCurrentResult] = useState<CalculatorResult>({
    sidewallHeight: 0,
    totalDiameter: 0,
    circumference: 0,
    revsPerKm: 0,
  });

  const [newResult, setNewResult] = useState<CalculatorResult>({
    sidewallHeight: 0,
    totalDiameter: 0,
    circumference: 0,
    revsPerKm: 0,
  });

  // Math physics calculator
  const calculateSpecs = (input: CalculatorInput): CalculatorResult => {
    const sidewallHeight = input.width * (input.aspectRatio / 100);
    // Outer diameter = wheel diameter (inch * 25.4) + 2x sidewall height
    const totalDiameter = (input.diameter * 25.4) + (sidewallHeight * 2);
    const circumference = totalDiameter * Math.PI;
    // 1 km = 1,000,000 mm
    const revsPerKm = 1000000 / circumference;

    return {
      sidewallHeight: Math.round(sidewallHeight * 10) / 10,
      totalDiameter: Math.round(totalDiameter * 10) / 10,
      circumference: Math.round(circumference * 10) / 10,
      revsPerKm: Math.round(revsPerKm),
    };
  };

  useEffect(() => {
    setCurrentResult(calculateSpecs(currentTire));
  }, [currentTire]);

  useEffect(() => {
    setNewResult(calculateSpecs(newTire));
  }, [newTire]);

  const diaDiffMm = Math.round((newResult.totalDiameter - currentResult.totalDiameter) * 10) / 10;
  const diaDiffPercent = currentResult.totalDiameter > 0
    ? Math.round(((newResult.totalDiameter - currentResult.totalDiameter) / currentResult.totalDiameter) * 100 * 100) / 100
    : 0;

  const actualSpeedAt100 = currentResult.totalDiameter > 0
    ? Math.round((100 * (newResult.totalDiameter / currentResult.totalDiameter)) * 10) / 10
    : 100;

  const heightDiffMm = Math.round((diaDiffMm / 2) * 10) / 10;
  const isOutOfSafeLimit = Math.abs(diaDiffPercent) > 3;

  // Preset list for easy clicking
  const handleLoadPreset = (type: 'sport' | 'up' | 'sub') => {
    if (type === 'sport') {
      setCurrentTire({ width: 205, aspectRatio: 55, diameter: 16 });
      setNewTire({ width: 225, aspectRatio: 45, diameter: 17 });
    } else if (type === 'up') {
      setCurrentTire({ width: 195, aspectRatio: 65, diameter: 15 });
      setNewTire({ width: 205, aspectRatio: 55, diameter: 16 });
    } else {
      setCurrentTire({ width: 215, aspectRatio: 60, diameter: 16 });
      setNewTire({ width: 225, aspectRatio: 40, diameter: 18 });
    }
  };

  return (
    <section id="calculator" className="py-20 bg-slate-900 text-white relative border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-red-950/40 border border-red-800/40 px-3 py-1 rounded-full text-red-500 text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t.calcTitle}
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-slate-400">
            {t.calcSub}
          </p>
        </div>

        {/* Preset selections */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs text-slate-400">
          <span>推荐对比预设 (Click presets):</span>
          <button
            onClick={() => handleLoadPreset('sport')}
            className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-300 cursor-pointer"
          >
            16寸升级17寸 (轿车)
          </button>
          <button
            onClick={() => handleLoadPreset('up')}
            className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-300 cursor-pointer"
          >
            15寸升级16寸 (舒适/静音型)
          </button>
          <button
            onClick={() => handleLoadPreset('sub')}
            className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-300 cursor-pointer"
          >
            16寸升级18寸极速版 (运动)
          </button>
        </div>

        {/* Input Panel side-by-side */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Section 1: Inputs */}
          <div className="lg:col-span-12 xl:col-span-7 grid md:grid-cols-2 gap-6">
            
            {/* Standard original tire inputs */}
            <div className="bg-slate-950/70 border border-slate-800/80 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-base font-bold text-slate-200 flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <span>{t.calcInput1}</span>
                </span>
                <span className="text-xs font-mono text-slate-500">Original Size</span>
              </h3>

              <div className="space-y-4">
                {/* Width */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">{t.calcWidth}</span>
                    <span className="font-mono text-slate-300">{currentTire.width} mm</span>
                  </div>
                  <input
                    type="range"
                    min="145"
                    max="315"
                    step="10"
                    value={currentTire.width}
                    onChange={(e) => setCurrentTire({ ...currentTire, width: parseInt(e.target.value) })}
                    className="w-full accent-red-600 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>145</span>
                    <span>205 (标准)</span>
                    <span>315</span>
                  </div>
                </div>

                {/* Aspect Ratio */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">{t.calcAspect}</span>
                    <span className="font-mono text-slate-300">{currentTire.aspectRatio} %</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="85"
                    step="5"
                    value={currentTire.aspectRatio}
                    onChange={(e) => setCurrentTire({ ...currentTire, aspectRatio: parseInt(e.target.value) })}
                    className="w-full accent-red-600 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>30</span>
                    <span>55</span>
                    <span>85</span>
                  </div>
                </div>

                {/* Diameter */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">{t.calcDiameter}</span>
                    <span className="font-mono text-slate-300">{currentTire.diameter} inch</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="22"
                    step="1"
                    value={currentTire.diameter}
                    onChange={(e) => setCurrentTire({ ...currentTire, diameter: parseInt(e.target.value) })}
                    className="w-full accent-red-600 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>12</span>
                    <span>16</span>
                    <span>22</span>
                  </div>
                </div>
              </div>

              {/* Technical profile result list */}
              <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-xl space-y-2 mt-4 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.sidewall}:</span>
                  <span className="text-slate-300 font-semibold">{currentResult.sidewallHeight} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.totalDia}:</span>
                  <span className="text-slate-300 font-semibold">{currentResult.totalDiameter} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.circ}:</span>
                  <span className="text-slate-300 font-semibold">{currentResult.circumference} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.revs}:</span>
                  <span className="text-slate-300 font-semibold">{currentResult.revsPerKm} / km</span>
                </div>
              </div>
            </div>

            {/* Standard new tire inputs */}
            <div className="bg-slate-950/70 border border-slate-800/80 p-6 rounded-2xl shadow-xl space-y-4">
              <h3 className="text-base font-bold text-slate-200 flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                  <span>{t.calcInput2}</span>
                </span>
                <span className="text-xs font-mono text-red-500">Upgraded Spec</span>
              </h3>

              <div className="space-y-4">
                {/* Width */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">{t.calcWidth}</span>
                    <span className="font-mono text-slate-300">{newTire.width} mm</span>
                  </div>
                  <input
                    type="range"
                    min="145"
                    max="315"
                    step="10"
                    value={newTire.width}
                    onChange={(e) => setNewTire({ ...newTire, width: parseInt(e.target.value) })}
                    className="w-full accent-red-600 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>145</span>
                    <span>225 (升级)</span>
                    <span>315</span>
                  </div>
                </div>

                {/* Aspect Ratio */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">{t.calcAspect}</span>
                    <span className="font-mono text-slate-300">{newTire.aspectRatio} %</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="85"
                    step="5"
                    value={newTire.aspectRatio}
                    onChange={(e) => setNewTire({ ...newTire, aspectRatio: parseInt(e.target.value) })}
                    className="w-full accent-red-600 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>30</span>
                    <span>45</span>
                    <span>85</span>
                  </div>
                </div>

                {/* Diameter */}
                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-400">{t.calcDiameter}</span>
                    <span className="font-mono text-slate-300">{newTire.diameter} inch</span>
                  </div>
                  <input
                    type="range"
                    min="12"
                    max="22"
                    step="1"
                    value={newTire.diameter}
                    onChange={(e) => setNewTire({ ...newTire, diameter: parseInt(e.target.value) })}
                    className="w-full accent-red-600 cursor-pointer h-1.5 bg-slate-800 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>12</span>
                    <span>17</span>
                    <span>22</span>
                  </div>
                </div>
              </div>

              {/* Technical profile result list */}
              <div className="bg-slate-900 border border-slate-800/80 p-4 rounded-xl space-y-2 mt-4 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.sidewall}:</span>
                  <span className="text-slate-300 font-semibold">{newResult.sidewallHeight} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.totalDia}:</span>
                  <span className="text-slate-300 font-semibold">{newResult.totalDiameter} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.circ}:</span>
                  <span className="text-slate-300 font-semibold">{newResult.circumference} mm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{t.revs}:</span>
                  <span className="text-slate-300 font-semibold">{newResult.revsPerKm} / km</span>
                </div>
              </div>
            </div>

          </div>

          {/* Section 2: Comparing Results & Safety warning graphics */}
          <div className="lg:col-span-12 xl:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-2xl space-y-6">
            <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
              <span className="w-1.5 h-5 bg-red-600 rounded" />
              <span>{t.calcResultCompare}</span>
            </h3>

            {/* Core Comparative Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/80 border border-slate-800/60 p-4 rounded-xl text-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono block mb-1">{t.diameterDiff}</span>
                <span className={`text-2xl font-bold font-mono ${diaDiffMm >= 0 ? 'text-red-500' : 'text-blue-400'}`}>
                  {diaDiffMm >= 0 ? `+${diaDiffMm}` : diaDiffMm} mm
                </span>
                <span className="text-xs text-slate-400 font-mono block mt-1">
                  ({diaDiffPercent >= 0 ? `+${diaDiffPercent}` : diaDiffPercent}%)
                </span>
              </div>

              <div className="bg-slate-900/80 border border-slate-800/60 p-4 rounded-xl text-center">
                <span className="text-[10px] text-slate-500 uppercase font-mono block mb-1">{t.heightDiff}</span>
                <span className={`text-2xl font-bold font-mono ${heightDiffMm >= 0 ? 'text-red-500' : 'text-blue-400'}`}>
                  {heightDiffMm >= 0 ? `+${heightDiffMm}` : heightDiffMm} mm
                </span>
                <span className="text-xs text-slate-400 font-mono block mt-1">
                  (底盘高度变化)
                </span>
              </div>
            </div>

            {/* Speedometer Calibration Error Card */}
            <div className="bg-slate-900/40 border border-slate-800 p-4 rounded-xl space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">{t.speedoDiff}</span>
                <span className="font-mono text-slate-300">仪表100kph ➔ 实际</span>
              </div>
              <div className="text-2xl font-extrabold font-mono text-slate-100 text-center tracking-tight py-2 border-y border-slate-800/60 my-2">
                {actualSpeedAt100} <span className="text-sm font-sans text-slate-400">km/h</span>
              </div>
              <p className="text-[10px] text-slate-500 text-center">
                提示：若外径增大，实际车速会高于行车时速表显示。行驶在东京都江北三街区时请注意雷达测速。
              </p>
            </div>

            {/* Visual simulation gauge */}
            <div className="space-y-3">
              <span className="text-xs text-slate-400 font-mono block">轮胎高度偏差对比 (Deviation comparison)</span>
              
              <div className="space-y-2">
                {/* Current */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400">
                    <span>原厂规格 ({currentTire.width}/{currentTire.aspectRatio} R{currentTire.diameter})</span>
                    <span>100% (基準)</span>
                  </div>
                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden">
                    <div className="bg-slate-600 h-full rounded-full transition-all" style={{ width: '100%' }} />
                  </div>
                </div>

                {/* New */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 font-bold">
                    <span>拟选新规格 ({newTire.width}/{newTire.aspectRatio} R{newTire.diameter})</span>
                    <span>{100 + diaDiffPercent}%</span>
                  </div>
                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${isOutOfSafeLimit ? 'bg-amber-500' : 'bg-red-600'}`}
                      style={{ width: `${Math.min(115, Math.max(85, 100 + diaDiffPercent))}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Callout Status */}
            <div className="pt-4 border-t border-slate-800/80">
              {isOutOfSafeLimit ? (
                <div className="p-4 bg-amber-950/40 border border-amber-900/60 rounded-xl flex items-start space-x-3 text-amber-300">
                  <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 animate-bounce" />
                  <div className="text-xs leading-relaxed">
                    {t.calcWarningLimit}
                  </div>
                </div>
              ) : (
                <div className="p-4 bg-green-950/40 border border-green-900/60 rounded-xl flex items-start space-x-3 text-green-300">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    {t.calcSuccessMsg}
                    <div className="mt-1 text-slate-400">点击下方在线提交免费报价，我们将配载合适规格及时到货。</div>
                  </div>
                </div>
              )}
            </div>

            {/* Fill preset callback directly */}
            <div className="pt-2 text-center">
              <a
                href="#contact"
                className="inline-flex items-center space-x-1.5 text-xs text-red-500 hover:text-red-400 font-semibold"
              >
                <span>将此规格代入预约表</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
