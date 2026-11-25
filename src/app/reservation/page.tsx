"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { Shield, Calendar, ArrowRight } from "lucide-react";

export default function ReservationPage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#F0EDE8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#D4973B] text-xs tracking-[0.3em] uppercase font-semibold mb-3">Book Direct</p>
          <h1 className="text-5xl font-bold text-[#1B2A4A] mb-4">{t("res.title")}</h1>
          <p className="text-[#6B6B6B] text-lg">{t("res.sub")}</p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Guarantee Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1B2A4A] rounded-2xl p-8 md:p-10 text-center mb-10"
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-[#D4973B]/20 flex items-center justify-center">
                <Shield size={28} className="text-[#D4973B]" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">{t("res.guarantee")}</h2>
            <p className="text-white/60 max-w-lg mx-auto leading-relaxed">{t("res.guarantee.desc")}</p>
          </motion.div>

          {/* Booking Widget Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg border border-[#E8E4DF] p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-[#1B2A4A] mb-6 flex items-center gap-2">
              <Calendar size={20} className="text-[#D4973B]" />
              {t("res.cta")}
            </h3>

            {/* Date pickers */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">Check-in</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-[#E8E4DF] rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#D4973B]/40 focus:border-[#D4973B] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">Check-out</label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-[#E8E4DF] rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#D4973B]/40 focus:border-[#D4973B] transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">Guests</label>
                <select className="w-full px-4 py-3 border border-[#E8E4DF] rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#D4973B]/40 focus:border-[#D4973B] transition-all">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
            </div>

            {/* Room type */}
            <div className="mb-8">
              <label className="block text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider mb-2">Room Type</label>
              <select className="w-full px-4 py-3 border border-[#E8E4DF] rounded-xl text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#D4973B]/40 focus:border-[#D4973B] transition-all">
                <option>Any available room</option>
                <option>Single Room</option>
                <option>Connecting Room</option>
                <option>Theater Room</option>
                <option>Kids House Room</option>
              </select>
            </div>

            <a
              href="https://www.a-gatehotel.com/hakodate/reservation/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-4 bg-[#D4973B] text-white font-semibold rounded-xl hover:bg-[#C0862A] transition-all shadow-md text-base"
            >
              {t("res.cta")} <ArrowRight size={16} />
            </a>

            <p className="text-center text-xs text-[#6B6B6B] mt-4">{t("res.note")}</p>
          </motion.div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { icon: "🔒", label: "Secure Payment" },
              { icon: "🏆", label: "Best Rate Guaranteed" },
              { icon: "📞", label: "24h Front Desk" },
            ].map((badge) => (
              <div key={badge.label} className="bg-white rounded-xl p-4 shadow-sm border border-[#E8E4DF]">
                <div className="text-2xl mb-1">{badge.icon}</div>
                <p className="text-xs font-semibold text-[#1B2A4A]">{badge.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

