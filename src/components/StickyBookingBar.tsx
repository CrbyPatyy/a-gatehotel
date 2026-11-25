"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Star } from "lucide-react";
import { useLang } from "@/contexts/LangContext";

export default function StickyBookingBar() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#0F1C33]/96 backdrop-blur-xl border-t border-white/8 px-6 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Rating badge */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={12} className={s <= 4 ? "fill-[#C9924A] text-[#C9924A]" : "fill-[#C9924A]/40 text-[#C9924A]/40"} />
              ))}
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-none">{t("res.guarantee")}</p>
              <p className="text-white/40 text-[11px] mt-0.5">{t("plan.guarantee")}</p>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/reservation"
            className="ml-auto flex items-center gap-2 px-6 py-2.5 bg-[#C9924A] text-white text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-[#B87E38] transition-colors whitespace-nowrap"
          >
            <Calendar size={14} />
            {t("hero.cta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
