// ─── Room Data ──────────────────────────────────────────────────────────────
export const rooms = [
  {
    id: "single",
    nameKey: "rooms.single.name",
    descKey: "rooms.single.desc",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    ],
    tags: ["Solo", "Business"],
    size: "18m²",
    maxGuests: 1,
    color: "#1B2A4A",
  },
  {
    id: "connecting",
    nameKey: "rooms.connecting.name",
    descKey: "rooms.connecting.desc",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    ],
    tags: ["Family", "Groups"],
    size: "36m²",
    maxGuests: 4,
    color: "#2D4A7A",
  },
  {
    id: "theater",
    nameKey: "rooms.theater.name",
    descKey: "rooms.theater.desc",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
    ],
    tags: ["Unique", "Couples"],
    size: "22m²",
    maxGuests: 2,
    color: "#0F1F38",
  },
  {
    id: "kids",
    nameKey: "rooms.kids.name",
    descKey: "rooms.kids.desc",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&q=80",
    ],
    tags: ["Family", "Kids"],
    size: "30m²",
    maxGuests: 3,
    color: "#D4973B",
  },
];

// ─── Room Amenities ──────────────────────────────────────────────────────────
export const amenities = [
  { icon: "Wifi", label: { en: "Free Wi-Fi", jp: "無料Wi-Fi" } },
  { icon: "Tv", label: { en: "Smart TV", jp: "スマートTV" } },
  { icon: "Wind", label: { en: "Air Conditioning", jp: "エアコン" } },
  { icon: "Coffee", label: { en: "Electric Kettle", jp: "電気ケトル" } },
  { icon: "Refrigerator", label: { en: "Refrigerator", jp: "冷蔵庫" } },
  { icon: "Shirt", label: { en: "Trouser Press", jp: "ズボンプレッサー" } },
  { icon: "Droplets", label: { en: "Washlet Toilet", jp: "ウォシュレット" } },
  { icon: "Wind", label: { en: "Hair Dryer", jp: "ドライヤー" } },
];

// ─── Plans ───────────────────────────────────────────────────────────────────
export const plans = [
  {
    id: "standard",
    nameKey: "plan.standard.name",
    descKey: "plan.standard.desc",
    badgeKey: "plan.badge.best",
    badgeColor: "#D4973B",
    priceFrom: 7800,
    featured: true,
  },
  {
    id: "longstay",
    nameKey: "plan.longstay.name",
    descKey: "plan.longstay.desc",
    badgeKey: "plan.badge.longstay",
    badgeColor: "#1B2A4A",
    priceFrom: 6500,
    featured: false,
  },
  {
    id: "family",
    nameKey: "plan.family.name",
    descKey: "plan.family.desc",
    badgeKey: "plan.badge.family",
    badgeColor: "#5B8A6A",
    priceFrom: 14000,
    featured: false,
  },
  {
    id: "solo",
    nameKey: "plan.solo.name",
    descKey: "plan.solo.desc",
    badgeKey: "plan.badge.solo",
    badgeColor: "#6B6B6B",
    priceFrom: 5500,
    featured: false,
  },
];

// ─── Merits ──────────────────────────────────────────────────────────────────
export const merits = [
  {
    id: "drinks",
    icon: "🍺",
    titleKey: "merit.page.drinks.title",
    descKey: "merit.page.drinks.desc",
    image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=600&q=80",
  },
  {
    id: "snacks",
    icon: "🍜",
    titleKey: "merit.page.snacks.title",
    descKey: "merit.page.snacks.desc",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80",
  },
  {
    id: "shampoo",
    icon: "🧴",
    titleKey: "merit.page.shampoo.title",
    descKey: "merit.page.shampoo.desc",
    image: "https://images.unsplash.com/photo-1556228578-567ba7f9e4b8?w=600&q=80",
  },
  {
    id: "pillow",
    icon: "🛏️",
    titleKey: "merit.page.pillow.title",
    descKey: "merit.page.pillow.desc",
    image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=600&q=80",
  },
  {
    id: "manga",
    icon: "📚",
    titleKey: "merit.page.manga.title",
    descKey: "merit.page.manga.desc",
    image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80",
  },
  {
    id: "kids",
    icon: "🧸",
    titleKey: "merit.page.kids.title",
    descKey: "merit.page.kids.desc",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80",
  },
  {
    id: "location",
    icon: "📍",
    titleKey: "merit.page.location.title",
    descKey: "merit.page.location.desc",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80",
  },
  {
    id: "direct",
    icon: "💴",
    titleKey: "merit.page.direct.title",
    descKey: "merit.page.direct.desc",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
export const faqs = {
  checkin: [
    {
      q: { en: "What are the check-in and check-out times?", jp: "チェックイン・チェックアウト時間は？" },
      a: { en: "Check-in is from 15:00. Check-out is by 10:00. For late arrivals after 21:00, please notify us in advance.", jp: "チェックインは15:00より、チェックアウトは10:00まで。21:00以降のご到着の場合は事前にご連絡ください。" },
    },
    {
      q: { en: "Can I request an early check-in or late check-out?", jp: "アーリーチェックイン・レイトチェックアウトはできますか？" },
      a: { en: "Subject to availability. Please contact us in advance and we will do our best to accommodate your request.", jp: "空き状況によりご対応します。事前にご連絡いただけますようお願いします。" },
    },
    {
      q: { en: "Can I store my luggage before check-in or after check-out?", jp: "チェックイン前・チェックアウト後に荷物を預けられますか？" },
      a: { en: "Yes, we offer luggage storage at the front desk. Please ask a member of our team.", jp: "はい、フロントにてお預かりしています。スタッフにお申し付けください。" },
    },
  ],
  policy: [
    {
      q: { en: "Is the hotel non-smoking?", jp: "全館禁煙ですか？" },
      a: { en: "All guest rooms are non-smoking. A designated smoking area is available on the 2F lobby level.", jp: "客室は全室禁煙です。2F ロビー内に喫煙スペースをご用意しています。" },
    },
    {
      q: { en: "Are pets allowed?", jp: "ペット同伴は可能ですか？" },
      a: { en: "We're sorry, pets are not permitted at A-Gate Hotel Hakodate.", jp: "誠に申し訳ございませんが、ペットのご同伴はお断りしております。" },
    },
    {
      q: { en: "How does room cleaning work for multi-night stays?", jp: "連泊時の清掃はどうなりますか？" },
      a: { en: "For consecutive night stays, full room cleaning is not carried out daily. Our staff will replace towels, restock amenities, and collect rubbish.", jp: "連泊の場合、毎日の全室清掃は行いません。タオル交換、アメニティ補充、ゴミ回収のみ対応します。" },
    },
  ],
  facilities: [
    {
      q: { en: "What time is the public bath and sauna open?", jp: "大浴場・サウナの営業時間は？" },
      a: { en: "The 7F public bath and sauna are open from 15:00 to 00:00 and again from 05:00 to 10:00.", jp: "7F大浴場・サウナは15:00〜24:00、翌5:00〜10:00営業しています。" },
    },
    {
      q: { en: "Is there a parking lot?", jp: "駐車場はありますか？" },
      a: { en: "We do not have an on-site car park. Several pay parking lots are available within a short walk of the hotel.", jp: "ホテル専用駐車場はございません。近隣にコインパーキングがございます。" },
    },
    {
      q: { en: "Is there a coin laundry on-site?", jp: "コインランドリーはありますか？" },
      a: { en: "Yes, coin-operated laundry machines are available inside the hotel. Detergent is sold separately.", jp: "はい、館内にコインランドリーを設置しています。洗剤は別売りです。" },
    },
  ],
  payment: [
    {
      q: { en: "What payment methods do you accept?", jp: "支払い方法は？" },
      a: { en: "We accept cash and major credit/debit cards. Payment is collected at check-in.", jp: "現金およびクレジット・デビットカードをご利用いただけます。お支払いはチェックイン時に頂戴します。" },
    },
    {
      q: { en: "What is the cancellation policy?", jp: "キャンセルポリシーは？" },
      a: { en: "Cancellations made the day before arrival incur a 50% fee. Same-day cancellations are charged 100% of the reservation amount.", jp: "前日キャンセルは宿泊料金の50%、当日キャンセルは100%のキャンセル料が発生します。" },
    },
  ],
};

// ─── Nearby Spots ─────────────────────────────────────────────────────────────
export const nearbySpots = [
  { name: { en: "Hakodate Morning Market", jp: "函館朝市" }, dist: { en: "8 min walk", jp: "徒歩8分" }, icon: "🐟" },
  { name: { en: "Lucky Pierrot Burger", jp: "ラッキーピエロ" }, dist: { en: "3 min walk", jp: "徒歩3分" }, icon: "🍔" },
  { name: { en: "Kanemori Red Brick", jp: "金森赤レンガ倉庫" }, dist: { en: "15 min walk", jp: "徒歩15分" }, icon: "🏛️" },
  { name: { en: "Hakodate Bay Area", jp: "函館ベイエリア" }, dist: { en: "12 min walk", jp: "徒歩12分" }, icon: "⚓" },
  { name: { en: "MaxValu Supermarket", jp: "マックスバリュ" }, dist: { en: "2 min walk", jp: "徒歩2分" }, icon: "🛒" },
  { name: { en: "Convenience Store", jp: "コンビニ" }, dist: { en: "1 min walk", jp: "徒歩1分" }, icon: "🏪" },
];

