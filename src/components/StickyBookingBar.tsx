"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar } from "lucide-react";
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
      <div className="bg-[#1B2A4A]/95 backdrop-blur-md border-t border-white/10 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="text-white text-sm font-semibold">{t("res.guarantee")}</p>
            <p className="text-white/60 text-xs">{t("plan.guarantee")}</p>
          </div>
          <Link
            href="/reservation"
            className="ml-auto flex items-center gap-2 px-6 py-2.5 bg-[#D4973B] text-white text-sm font-semibold rounded-full hover:bg-[#C0862A] transition-colors whitespace-nowrap shadow-lg"
          >
            <Calendar size={15} />
            {t("hero.cta")}
          </Link>
        </div>
      </div>
    </div>
  );
}

