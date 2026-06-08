/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum TireType {
  SPORT = 'SPORT',       // 高性能/运动型
  COMFORT = 'COMFORT',   // 静音舒适型
  ECO = 'ECO',           // 经济节能型
  SUV = 'SUV',           // SUV/越野型
  WINTER = 'WINTER',     // 雪地/冬季胎
}

export interface TireProduct {
  id: string;
  brand: string;
  name: string;
  type: TireType;
  width: number;       // 断面宽度 eg. 205
  aspectRatio: number; // 扁平比 eg. 55
  diameter: number;    // 轮毂直径 eg. 16
  loadIndex: number;   // 载重指数
  speedRating: string; // 速度级别
  priceYen: number;    // 单价 (日元)
  features: string[];  // 轮胎特性 (CN/JP)
  description: string; // 商品介绍
  image: string;       // 图片链接
  popularity: number;  // 热门评分
}

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  tireType: string;
  sizeDesired: string;
  quantity: number;
  message: string;
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  questionJa: string;
  answerJa: string;
}

export interface LanguageContextType {
  language: 'zh' | 'ja';
  setLanguage: (lang: 'zh' | 'ja') => void;
}
