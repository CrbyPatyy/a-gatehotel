"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { MapPin, Train, TramFront, Plane, ArrowRight } from "lucide-react";
import Link from "next/link";

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
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#1B2A4A]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#D4973B] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Location</p>
          <h1 className="text-5xl font-bold text-white mb-4">{t("access.title")}</h1>
          <p className="text-white/60 text-lg max-w-xl">{t("access.sub")}</p>
        </div>
      </section>

      {/* Map + Info */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Directions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Address */}
            <div className="flex items-start gap-3 mb-8 p-5 bg-[#F0EDE8] rounded-xl">
              <MapPin size={20} className="text-[#D4973B] mt-0.5 shrink-0" />
              <div>
                <p className="text-xs uppercase tracking-wider text-[#6B6B6B] mb-1">{t("access.address.label")}</p>
                <p className="font-semibold text-[#1B2A4A]">{t("access.address.value")}</p>
              </div>
            </div>

            {/* Direction items */}
            <div className="space-y-4">
              {directions.map((d) => {
                const Icon = d.icon;
                return (
                  <div key={d.labelEn} className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-[#E8E4DF]">
                    <div className="w-10 h-10 rounded-full bg-[#1B2A4A]/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#1B2A4A]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#6B6B6B]">{lang === "en" ? d.labelEn : d.labelJp}</p>
                      <p className="font-semibold text-[#1B2A4A]">{lang === "en" ? d.valueEn : d.valueJp}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://maps.google.com/?q=A-GATE+HOTEL+函館"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#D4973B] text-white text-sm font-semibold rounded-full hover:bg-[#C0862A] transition-colors"
            >
              {t("access.map.label")} <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-96 md:h-auto rounded-2xl overflow-hidden shadow-xl"
          >
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

      {/* Nearby Spots */}
      <section className="py-16 px-6 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="text-3xl font-bold text-[#1B2A4A]">{t("access.nearby.title")}</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {nearbySpots.map((spot, i) => (
              <motion.div
                key={spot.en}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-white rounded-xl p-5 flex items-center gap-3 shadow-sm"
              >
                <span className="text-2xl">{spot.icon}</span>
                <div>
                  <p className="font-semibold text-sm text-[#1B2A4A]">{lang === "en" ? spot.en : spot.jp}</p>
                  <p className="text-xs text-[#D4973B] font-medium">{lang === "en" ? spot.distEn : spot.distJp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
