"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { MapPin, Train, TramFront, Plane, ArrowRight } from "lucide-react";

const nearbySpots = [
  { icon: "🐟", en: "Hakodate Morning Market", jp: "函館朝市", distEn: "8 min walk", distJp: "徒歩8分" },
  { icon: "🍔", en: "Lucky Pierrot Burger", jp: "ラッキーピエロ", distEn: "3 min walk", distJp: "徒歩3分" },
  { icon: "🏛️", en: "Kanemori Red Brick", jp: "金森赤レンガ倉庫", distEn: "15 min walk", distJp: "徒歩15分" },
  { icon: "⚓", en: "Hakodate Bay Area", jp: "函館ベイエリア", distEn: "12 min walk", distJp: "徒歩12分" },
  { icon: "🛒", en: "MaxValu Supermarket", jp: "マックスバリュ", distEn: "2 min walk", distJp: "徒歩2分" },
  { icon: "🏪", en: "Convenience Store", jp: "コンビニ", distEn: "1 min walk", distJp: "徒歩1分" },
];

const directions = [
  { icon: Train, labelEn: "From JR Hakodate Station", labelJp: "JR函館駅から", valueEn: "5–10 minute walk", valueJp: "徒歩約5〜10分" },
  { icon: TramFront, labelEn: "From Matsukaze-cho Tram Stop", labelJp: "松風町電停から", valueEn: "2 minute walk", valueJp: "徒歩約2分" },
  { icon: Plane, labelEn: "From Hakodate Airport", labelJp: "函館空港から", valueEn: "~30 min by taxi or bus", valueJp: "タクシー・バスで約30分" },
];

export default function AccessPage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* ── Page hero ── */}
      <section className="pt-20 sm:pt-24 pb-14 sm:pb-20 bg-[#0F1C33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/featuren01.jpg')] bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow text-[#C9924A]/80 mb-4 sm:mb-5">
            {lang === "en" ? "Location" : "アクセス"}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="serif-display text-4xl sm:text-5xl md:text-6xl text-white mb-4 sm:mb-5">
            {t("access.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-white/50 text-base sm:text-lg max-w-xl">
            {t("access.sub")}
          </motion.p>
        </div>
      </section>

      {/* ── Map + Info ── */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="flex items-start gap-4 mb-6 sm:mb-8 p-5 sm:p-6 bg-white border border-[#EAE6E1]">
              <MapPin size={20} className="text-[#C9924A] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#6B6B6B] mb-1">{t("access.address.label")}</p>
                <p className="font-semibold text-[#1B2A4A] text-sm sm:text-base">{t("access.address.value")}</p>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-[#EAE6E1] bg-white border border-[#EAE6E1] px-4 sm:px-6">
              {directions.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.labelEn} className="flex items-center gap-3 sm:gap-4 py-4 sm:py-5">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#1B2A4A]/5 border border-[#EAE6E1] flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-[#C9924A]" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#6B6B6B]">{lang === "en" ? d.labelEn : d.labelJp}</p>
                      <p className="font-semibold text-[#1B2A4A] text-sm mt-0.5">{lang === "en" ? d.valueEn : d.valueJp}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="https://maps.google.com/?q=A-GATE+HOTEL+函館" target="_blank" rel="noopener noreferrer" className="mt-6 sm:mt-8 btn-primary inline-flex">
              {t("access.map.label")} <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative h-64 sm:h-96 md:min-h-[460px] overflow-hidden shadow-2xl border border-[#EAE6E1]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2926.324765!2d140.7265!3d41.7707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f9e469d1e20e9b1%3A0x11b2d7a2d4c3b1a0!2sA-GATE+HOTEL+%E5%87%BD%E9%A4%A8!5e0!3m2!1sen!2sjp!4v1700000000000"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Nearby Spots ── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#EAE6E1]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8 sm:mb-12">
            <p className="eyebrow">{lang === "en" ? "Surroundings" : "周辺案内"}</p>
            <h2 className="serif-display text-2xl sm:text-3xl md:text-4xl text-[#1B2A4A]">{t("access.nearby.title")}</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {nearbySpots.map((spot, i) => (
              <motion.div key={spot.en} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }} className="bg-[#F9F7F4] border border-[#EAE6E1] p-4 sm:p-5 flex items-center gap-3 sm:gap-4 card-hover">
                <span className="text-xl sm:text-2xl shrink-0">{spot.icon}</span>
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm text-[#1B2A4A] truncate">{lang === "en" ? spot.en : spot.jp}</p>
                  <p className="text-xs text-[#C9924A] font-medium mt-0.5">{lang === "en" ? spot.distEn : spot.distJp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
