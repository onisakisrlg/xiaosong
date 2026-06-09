/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LanguageContextType } from '../types';
import { TRANSLATIONS } from '../data';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'zh' | 'ja'>('ja');

  const setLanguage = (lang: 'zh' | 'ja') => {
    // Only support Japanese locale
    setLanguageState('ja');
  };

  return (
    <LanguageContext.Provider value={{ language: 'ja', setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// 辅助钩子，方便获取当前语言的所有翻译文本
export const useTranslation = () => {
  const { language } = useLanguage();
  return {
    t: TRANSLATIONS[language],
    lang: language,
  };
};
