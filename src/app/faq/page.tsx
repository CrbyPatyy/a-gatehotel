"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { Plus, Minus } from "lucide-react";

type LangKey = "en" | "jp";

const faqs: Record<string, { q: Record<LangKey, string>; a: Record<LangKey, string> }[]> = {
  checkin: [
    { q: { en: "What are check-in and check-out times?", jp: "チェックイン・チェックアウト時間は？" }, a: { en: "Check-in from 15:00. Check-out by 10:00. For late arrivals (after 21:00), please notify us in advance.", jp: "チェックインは15:00より、チェックアウトは10:00まで。21:00以降のご到着の場合は事前にご連絡ください。" } },
    { q: { en: "Can I request early check-in or late check-out?", jp: "アーリーチェックイン・レイトチェックアウトはできますか？" }, a: { en: "Subject to availability. Please contact us in advance.", jp: "空き状況によりご対応します。事前にご連絡ください。" } },
    { q: { en: "Can I store luggage before or after my stay?", jp: "荷物を預けられますか？" }, a: { en: "Yes, luggage storage is available at the front desk at no extra charge.", jp: "はい、フロントにて無料でお預かりしています。" } },
  ],
  policy: [
    { q: { en: "Is the hotel non-smoking?", jp: "全館禁煙ですか？" }, a: { en: "All guest rooms are non-smoking. A designated smoking area is available on the 2F lobby level.", jp: "客室は全室禁煙です。2Fロビー内に喫煙スペースをご用意しています。" } },
    { q: { en: "Are pets allowed?", jp: "ペットは可能ですか？" }, a: { en: "We're sorry, pets are not permitted.", jp: "誠に申し訳ございませんが、ペットのご同伴はお断りしております。" } },
    { q: { en: "How does cleaning work for multi-night stays?", jp: "連泊時の清掃は？" }, a: { en: "For consecutive stays, we replace towels and amenities but do not perform full room cleaning daily.", jp: "連泊の場合、タオル交換・アメニティ補充・ゴミ回収のみ行います。" } },
  ],
  facilities: [
    { q: { en: "What time is the bath and sauna open?", jp: "大浴場・サウナの営業時間は？" }, a: { en: "15:00–00:00 and 05:00–10:00 daily on the 7th floor.", jp: "7F大浴場・サウナは15:00〜24:00、翌5:00〜10:00の営業です。" } },
    { q: { en: "Is there parking?", jp: "駐車場はありますか？" }, a: { en: "No on-site parking. Several paid car parks are within walking distance.", jp: "専用駐車場はございません。近隣にコインパーキングがあります。" } },
    { q: { en: "Is there coin laundry?", jp: "コインランドリーはありますか？" }, a: { en: "Yes, coin-operated laundry machines are available inside the hotel.", jp: "館内にコインランドリーをご用意しています。" } },
  ],
  payment: [
    { q: { en: "What payment methods are accepted?", jp: "お支払い方法は？" }, a: { en: "Cash and major credit/debit cards. Payment is collected at check-in.", jp: "現金・クレジット・デビットカードをご利用いただけます。チェックイン時にお支払い。" } },
    { q: { en: "What is the cancellation policy?", jp: "キャンセルポリシーは？" }, a: { en: "50% fee for cancellations the day before. 100% fee for same-day cancellations.", jp: "前日キャンセルは宿泊料金の50%、当日キャンセルは100%のキャンセル料が発生します。" } },
  ],
};

const categories = [
  { id: "checkin",    labelEn: "Check-in & Out",        labelJp: "チェックイン・アウト", icon: "🔑" },
  { id: "policy",     labelEn: "Hotel Policy",           labelJp: "ホテルポリシー",       icon: "📋" },
  { id: "facilities", labelEn: "Facilities",             labelJp: "施設について",          icon: "♨️" },
  { id: "payment",    labelEn: "Payment & Cancellation", labelJp: "料金・キャンセル",      icon: "💳" },
];

function AccordionItem({ q, a, lang }: { q: Record<LangKey, string>; a: Record<LangKey, string>; lang: LangKey }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#EAE6E1] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span className="font-medium text-[#1B2A4A] text-[15px] group-hover:text-[#C9924A] transition-colors">{q[lang]}</span>
        <span className="shrink-0 w-7 h-7 flex items-center justify-center border border-[#EAE6E1] text-[#C9924A] group-hover:border-[#C9924A] transition-colors">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[#6B6B6B] leading-relaxed text-sm">{a[lang]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const { t, lang } = useLang();
  const [activeCategory, setActiveCategory] = useState("checkin");

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-24 pb-20 bg-[#F9F7F4] border-b border-[#EAE6E1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="eyebrow">{lang === "en" ? "Support" : "よくあるご質問"}</p>
          <h1 className="serif-display text-5xl md:text-6xl text-[#1B2A4A] mb-5">{t("faq.title")}</h1>
          <p className="text-[#6B6B6B] text-lg max-w-xl">{t("faq.sub")}</p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all border ${
                  activeCategory === cat.id
                    ? "bg-[#1B2A4A] text-white border-[#1B2A4A]"
                    : "bg-white text-[#1B2A4A] border-[#EAE6E1] hover:border-[#1B2A4A]"
                }`}
              >
                <span>{cat.icon}</span>
                {lang === "en" ? cat.labelEn : cat.labelJp}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-[#EAE6E1] divide-y-0 px-6 md:px-10 py-2"
            >
              {faqs[activeCategory]?.map((item, i) => (
                <AccordionItem key={i} q={item.q} a={item.a} lang={lang as LangKey} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Contact CTA */}
          <div className="mt-14 p-8 bg-[#F9F7F4] border border-[#EAE6E1] text-center">
            <p className="text-[#6B6B6B] mb-3 text-sm">{t("faq.contact")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-6 py-3 bg-[#1B2A4A] text-white hover:bg-[#C9924A] transition-colors"
            >
              {t("faq.contact.link")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
