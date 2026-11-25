"use client";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { Shield, Calendar, ArrowRight } from "lucide-react";

export default function ReservationPage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* ── Page hero ── */}
      <section className="pt-36 pb-20 bg-[#0F1C33] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/img/header_bg.jpg')] bg-cover bg-center" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow justify-center text-[#C9924A]/80 mb-5"
          >
            {lang === "en" ? "Book Direct" : "公式予約"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="serif-display text-5xl md:text-6xl text-white mb-5"
          >
            {t("res.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-white/55 text-lg max-w-xl mx-auto"
          >
            {t("res.sub")}
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-[#F9F7F4]">
        <div className="max-w-4xl mx-auto">
          {/* Guarantee Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1B2A4A] p-8 md:p-10 text-center mb-10 border border-[#C9924A]/30"
          >
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-[#C9924A]/15 border border-[#C9924A]/40 flex items-center justify-center">
                <Shield size={24} className="text-[#C9924A]" />
              </div>
            </div>
            <h2 className="serif-display text-2xl md:text-3xl text-white mb-3">{t("res.guarantee")}</h2>
            <p className="text-white/60 max-w-lg mx-auto leading-relaxed text-sm">{t("res.guarantee.desc")}</p>
          </motion.div>

          {/* Booking Widget */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white shadow-sm border border-[#EAE6E1] p-8 md:p-12"
          >
            <h3 className="serif-display text-2xl text-[#1B2A4A] mb-8 flex items-center gap-3">
              <Calendar size={20} className="text-[#C9924A]" />
              {t("res.cta")}
            </h3>

            {/* Date pickers */}
            <div className="grid md:grid-cols-3 gap-5 mb-6">
              <div>
                <label className="block text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-2">
                  {lang === "en" ? "Check-in" : "チェックイン"}
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-[#EAE6E1] text-sm text-[#1A1A1A] bg-[#F9F7F4]/50 focus:outline-none focus:border-[#C9924A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-2">
                  {lang === "en" ? "Check-out" : "チェックアウト"}
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-[#EAE6E1] text-sm text-[#1A1A1A] bg-[#F9F7F4]/50 focus:outline-none focus:border-[#C9924A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-2">
                  {lang === "en" ? "Guests" : "人数"}
                </label>
                <select className="w-full px-4 py-3 border border-[#EAE6E1] text-sm text-[#1A1A1A] bg-[#F9F7F4]/50 focus:outline-none focus:border-[#C9924A] transition-colors">
                  <option>{lang === "en" ? "1 Guest" : "1名"}</option>
                  <option>{lang === "en" ? "2 Guests" : "2名"}</option>
                  <option>{lang === "en" ? "3 Guests" : "3名"}</option>
                  <option>{lang === "en" ? "4 Guests" : "4名"}</option>
                </select>
              </div>
            </div>

            {/* Room type */}
            <div className="mb-8">
              <label className="block text-[10px] font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-2">
                {lang === "en" ? "Room Type" : "客室タイプ"}
              </label>
              <select className="w-full px-4 py-3 border border-[#EAE6E1] text-sm text-[#1A1A1A] bg-[#F9F7F4]/50 focus:outline-none focus:border-[#C9924A] transition-colors">
                <option>{lang === "en" ? "Any available room" : "指定なし（空室のあるお部屋）"}</option>
                <option>{t("rooms.single.name")}</option>
                <option>{t("rooms.connecting.name")}</option>
                <option>{t("rooms.theater.name")}</option>
                <option>{t("rooms.kids.name")}</option>
              </select>
            </div>

            <a
              href="https://www.a-gatehotel.com/hakodate/reservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#C9924A] text-white text-[12px] font-bold tracking-[0.12em] uppercase hover:bg-[#B87E38] transition-colors"
            >
              {t("res.cta")} <ArrowRight size={15} />
            </a>

            <p className="text-center text-xs text-[#6B6B6B] mt-5">{t("res.note")}</p>
          </motion.div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: "🔒", en: "Secure Payment", jp: "安心の公式決済" },
              { icon: "🏆", en: "Best Rate Guaranteed", jp: "ベストレート保証" },
              { icon: "📞", en: "24h Front Desk", jp: "24時間フロント対応" },
            ].map((badge) => (
              <div key={badge.en} className="bg-white p-5 border border-[#EAE6E1]">
                <div className="text-2xl mb-1.5">{badge.icon}</div>
                <p className="text-xs font-semibold text-[#1B2A4A]">{lang === "en" ? badge.en : badge.jp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
