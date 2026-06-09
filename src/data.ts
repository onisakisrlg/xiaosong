/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TireProduct, TireType, FAQItem } from './types';

// 高品質タイヤ製品データベース (Japanese translation and values)
export const TIRE_PRODUCTS: TireProduct[] = [
  {
    id: 'komatsu-sport-s1',
    brand: 'KOMATSU',
    name: 'EURO SPORT S1',
    type: TireType.SPORT,
    width: 225,
    aspectRatio: 40,
    diameter: 18,
    loadIndex: 92,
    speedRating: 'Y',
    priceYen: 18500,
    features: ['優れたウェットグリップ', 'ハイドロプレーニング防止', '超低転がり抵抗'],
    description: 'ラグジュアリーセダンおよびスポーツ走行に最適。非対称トレッドデザインが高速コーナリングでの剛性を高め、特殊シリカ配合により濡れた路面での制動距離を大幅に短縮します。',
    image: 'sport',
    popularity: 4.9,
  },
  {
    id: 'komatsu-comfort-silent',
    brand: 'KOMATSU',
    name: 'SILENT CRUISE C2',
    type: TireType.COMFORT,
    width: 215,
    aspectRatio: 60,
    diameter: 16,
    loadIndex: 95,
    speedRating: 'V',
    priceYen: 12800,
    features: ['マルチ周波数消音ブロック', '高剛性サイドウォール', '快適な乗り心地'],
    description: '独自の3D消音ブロック技術により、転がりノイズを最大25%カット。静粛性と快適な車内空間を提供し、高級セダンやファミリーユースに最適です。',
    image: 'comfort',
    popularity: 4.8,
  },
  {
    id: 'komatsu-eco-green',
    brand: 'KOMATSU',
    name: 'ECO-SAVER GREEN',
    type: TireType.ECO,
    width: 195,
    aspectRatio: 65,
    diameter: 15,
    loadIndex: 91,
    speedRating: 'H',
    priceYen: 8900,
    features: ['超低燃費トレッドパターン', '耐摩耗ナノコンパウンド', '高寿命・高経済性'],
    description: 'エコロジーかつ経済的な選択。ナノシリカコンパウンドが発熱を抑えて転がり抵抗を低減。耐久性に優れた深い溝設計で、走れば走るほど燃料費を節約します。',
    image: 'eco',
    popularity: 4.7,
  },
  {
    id: 'komatsu-suv-cross',
    brand: 'KOMATSU',
    name: 'TRAIL ADVENTURER MAX',
    type: TireType.SUV,
    width: 265,
    aspectRatio: 65,
    diameter: 17,
    loadIndex: 112,
    speedRating: 'H',
    priceYen: 21000,
    features: ['耐パンク・耐カット性能', '強力なオールテレーン牽引力', 'サイドウォールプロテクター'],
    description: 'SUVおよびライトトラック用のオールテレーン（A/T）タイヤ。過酷な泥や泥濘路でのトラクション性能を最大限に引き出すラギッドトレッドと、岩石による切り傷を防ぐ強靭なサイドデザイン。',
    image: 'suv',
    popularity: 4.9,
  },
  {
    id: 'komatsu-winter-ice',
    brand: 'KOMATSU',
    name: 'BLIZZAK GUARD W3',
    type: TireType.WINTER,
    width: 205,
    aspectRatio: 55,
    diameter: 16,
    loadIndex: 94,
    speedRating: 'Q',
    priceYen: 14500,
    features: ['吸水発泡ゴムテクノロジー', 'マルチグリッドパターン', '極寒耐低温コンパウンド'],
    description: '最高峰のスタッドレスタイヤ。発泡微細孔ゴムが路面の水膜を取り除き、高密度ハニカムサイプが圧雪やアイスバーン路面で爪のように喰いつきます。',
    image: 'winter',
    popularity: 4.8,
  }
];

// よくある質問解答 FAQ (Pruned and translated beautifully to Japanese)
export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'selection',
    question: 'タイヤサイズの確認方法は？',
    answer: '主に3つの方法があります：1. 現在装着されているタイヤの側面を確認（例：205/55 R16）、2. 運転席ドアのBピラー（柱部分）に貼ってある規格・空気圧シールを確認、3. 車検証（自動車検査証）やオーナーズマニュアルで推奨サイズを確認できます。',
    questionJa: 'タイヤサイズの確認方法は？',
    answerJa: '主に3つの方法があります：1. 現在装着されているタイヤの側面を確認（例：205/55 R16）、2. 運転席ドアのBピラー（柱部分）に貼ってある規格・空気圧シールを確認、3. 車検証（自動車検査証）やオーナーズマニュアルで推奨サイズを確認できます。',
  },
  {
    id: 'f2',
    category: 'maintenance',
    question: 'タイヤの交換時期の目安は？',
    answer: '大きく2つの目安があります：1. 摩耗の限界（残り溝1.6mmを示す「スリップサイン」の露出）、2. 年数（走行距離が少なくても、ゴムは製造から5〜6年経過すると経年劣化が進むため安全のために点検・交換を推奨します）。',
    questionJa: 'タイヤの交換時期の目安は？',
    answerJa: '大きく2つの目安があります：1. 摩耗の限界（残り溝1.6mmを示す「スリップサイン」の露出）、2. 年数（走行距離が少なくても、ゴムは製造から5〜6年経過すると経年劣化が進むため安全のために点検・交換を推奨します）。',
  },
  {
    id: 'f3',
    category: 'service',
    question: 'タイヤ取り付けサービスは行っていますか？他社ブランドの取り扱りは？',
    answer: '自社ブランド「KOMATSU」タイヤの直販の他にも、独自の流通網を活かし、ブリヂストン、ミシュラン、ダンロップ等の国内外有名メーカーの卸売・小売販売も可能です。店頭取付、ホイールアライメント調整、法人様向け配送サービス等も完備しています。',
    questionJa: 'タイヤ取り付けサービスは行っていますか？他社ブランドの取り扱りは？',
    answerJa: '自社ブランド「KOMATSU」タイヤの直販の他にも、独自の流通網を活かし、ブリヂストン、ミシュラン、ダンロップ等の国内外有名メーカーの卸売・小売販売も可能です。店頭取付、ホイールアライメント調整、法人様向け配送サービス等も完備しています。',
  }
];

// 日本語の語彙定義
const JAPANESE_TRANSLATION = {
  // Nav & Common
  langName: '日本語',
  navHome: 'ホーム',
  navAbout: '会社概要',
  navProducts: '取扱商品',
  navCalculator: 'サイズ計算',
  navFAQ: 'よくある質問',
  navContact: 'お問い合わせ',
  phoneCall: 'お電話窓口',
  emailContact: 'メール連絡',
  
  // Slogan / Hero
  sloganTop: '東京都足立区 · 高品質タイヤ販売のプロフェッショナル',
  sloganBig: '確かな技術、確かな安全',
  sloganSub: '小松株式会社（Komatsu Co., Ltd.）の公式サイトです。経験豊富な調達網により、乗用車、トラック、スタッドレスタイヤ等、全サイズを適正価格でご提供いたします。',
  btnCatalog: '商品一覧を見る',
  btnInquiry: 'ビジネスお問合せ窓口',
  satisfaction: '満足度：98.6%',
  tiresSold: '累計販売数1万本以上',
  reliableService: '日本国法人認証・正規品保証',
  
  // Corporate Facts
  corpNumber: '法人番号',
  corpNumberVal: '6011801046241',
  corpName: '商号又は名称',
  corpNameVal: '小松株式会社',
  corpAddress: '本店所在地',
  corpAddressVal: '東京都足立区江北３丁目３０－１８',
  president: '代表取締役 / 責任者',
  presidentVal: '小松 健太 (Kenta Komatsu)',
  established: '設立登記年月日',
  establishedVal: '2016年10月12日',
  businessScope: '事業内容',
  businessScopeVal: 'タイヤおよびホイールの輸出入・国内卸売・小売販売、その他自動車用部品の調達、出張タイヤ点検コンサル業務。',
  
  // Strengths
  strengthTitle: '小松株式会社が選ばれる理由',
  strengthSub: '足立区を拠点に首都圏、さらには全国を繋ぐカーライフのパートナー',
  strength1Title: '徹底したコスト削減',
  strength1Desc: '中間マージンをカットした独自の流通ルートで、高品質タイヤを低価格でご提供します。',
  strength2Title: '安心の品質管理',
  strength2Desc: 'JIS（日本産業規格）またはDOT等の厳しい国際安全基準に合格した規格品のみを取り扱っています。',
  strength3Title: '幅広い在庫ラインアップ',
  strength3Desc: '乗用車汎用サイズから商用ライトトラックまで、豊富な在庫体制で迅速な納品を実現。',
  strength4Title: '安心の政府公認法人',
  strength4Desc: '国税庁にて正規登記済み（法人番号：6011801046241）。見積・インボイス対応も万全です。',

  // Products
  productTitle: '取扱商品 · タイヤ一覧',
  productSub: '全サイズ対応、高ライフ、多様な走行環境に適合する厳選タイヤ',
  sport: 'スポーツタイヤ',
  comfort: 'コンフォートタイヤ',
  eco: 'エコ・低燃費タイヤ',
  suv: 'SUV用・オフロード',
  winter: 'スタッドレスタイヤ',
  allTypes: '全タイプ',
  specs: 'タイヤサイズ',
  priceUnits: '円',
  inquiryNow: '見積もり・在庫問い合わせ',
  perTire: '〜 / 本',
  popularBadge: '人気商品',

  // Calculator
  calcTitle: 'タイヤサイズ外径計算シミュレーター',
  calcSub: 'インチアップやタイヤ交換時の外径偏差を表示します。スピードメーターの誤差を予防し、安全運転に貢献します。',
  calcInput1: '元のタイヤサイズ (Current)',
  calcInput2: '新品タイヤサイズ (New)',
  calcWidth: 'タイヤ幅 (mm)',
  calcAspect: '偏平率 (%)',
  calcDiameter: 'ホイール径 (インチ)',
  calcSubmit: 'タイヤ比較計算を行う',
  calcResultCompare: 'シミュレーション結果',
  diameterDiff: '外径との差',
  heightDiff: '車高への影響',
  speedoDiff: 'メーター誤差 (時速100km/h走行時の実速目安)',
  calcWarningLimit: '⚠️ 外径の差が ±3% を超えています。スピードメーターの車検基準を満たさない可能性、車体への干渉リスクがあります。サイズ確認を推奨します。',
  calcSuccessMsg: '✅ サイズ差は許容範囲の ±3% 以内に収まっています。タイヤの互換性に問題ありません。',
  sidewall: 'タイヤ側面高',
  totalDia: 'タイヤ外径',
  circ: 'タイヤ外周',
  revs: '1kmあたりの回転数',
  
  // Inquiry Form
  formTitle: 'ビジネスお問合せ窓口',
  formSub: '以下の連絡先より、小松株式会社へお気軽にお問い合わせください。大口取引や物流配送など、迅速かつ丁寧に対応いたします。',
  formLabelName: 'お名前 (会社名・ご担当者名)',
  formLabelEmail: 'メールアドレス',
  formLabelPhone: 'お電話番号 (日本)',
  formLabelType: 'お探しのタイヤタイプ',
  formLabelSize: 'タイヤサイズ',
  formLabelQty: 'タイヤのご希望本数',
  formLabelMsg: 'メッセージ・ご要望',
  formPlaceholderName: '例：小松太郎 or 株式会社AAA',
  formPlaceholderMsg: '特定のメーカーご希望や出張取付等のご相談があればこちらに詳しくご記入ください。',
  formSubmitBtn: '見積もりを申し込む',
  formSuccessTitle: 'お申し込みを受付致しました。',
  formSuccessDesc: 'お問い合わせありがとうございます。２４時間以内にお見積り書もしくはご案内のメールをお送りいたしますので、よろしくお願いいたします。',
  formSending: '送信中...',

  // Footer & Location
  workHours: '営業時間',
  workHoursVal: '月曜日 〜 金曜日 09:00 - 18:00 (土・日・祝祭日除く)',
  telNum: '固定電話窓口',
  telVal: '03-4285-7694',
  mobileNum: '携帯電話窓口',
  mobileVal: '080-7973-1338',
  copyright: '© 2026 小松株式会社. All rights reserved. (法人番号: 6011801046241)',
};

// Map both keys to Japanese translations to guarantee single language content
export const TRANSLATIONS = {
  zh: JAPANESE_TRANSLATION,
  ja: JAPANESE_TRANSLATION
};
