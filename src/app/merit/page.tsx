"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { ArrowRight } from "lucide-react";

const merits = [
  { id: "drinks", icon: "🍺", titleKey: "merit.page.drinks.title", descKey: "merit.page.drinks.desc", img: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=600&q=80" },
  { id: "snacks", icon: "🍜", titleKey: "merit.page.snacks.title", descKey: "merit.page.snacks.desc", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&q=80" },
  { id: "shampoo", icon: "🧴", titleKey: "merit.page.shampoo.title", descKey: "merit.page.shampoo.desc", img: "https://images.unsplash.com/photo-1556228578-567ba7f9e4b8?w=600&q=80" },
  { id: "pillow", icon: "🛏️", titleKey: "merit.page.pillow.title", descKey: "merit.page.pillow.desc", img: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=600&q=80" },
  { id: "manga", icon: "📚", titleKey: "merit.page.manga.title", descKey: "merit.page.manga.desc", img: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=600&q=80" },
  { id: "kids", icon: "🧸", titleKey: "merit.page.kids.title", descKey: "merit.page.kids.desc", img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80" },
  { id: "location", icon: "📍", titleKey: "merit.page.location.title", descKey: "merit.page.location.desc", img: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80" },
  { id: "direct", icon: "💴", titleKey: "merit.page.direct.title", descKey: "merit.page.direct.desc", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80" },
];

export default function MeritPage() {
  const { t } = useLang();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden bg-[#1B2A4A]">
        <div className="absolute inset-0 opacity-15">
          <Image src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=1400&q=60" alt="bg" fill className="object-cover" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#D4973B] text-xs tracking-[0.3em] uppercase font-semibold mb-4">Value & Experience</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-5">{t("merit.page.title")}</h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">{t("merit.page.sub")}</p>
        </div>
      </section>

      {/* Merits Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {merits.map((merit, i) => (
            <motion.div
              key={merit.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              {/* Text */}
              <div className={i % 2 === 1 ? "md:col-start-1" : ""}>
                <span className="text-5xl mb-5 block">{merit.icon}</span>
                <h2 className="text-3xl font-bold text-[#1B2A4A] mb-4">{t(merit.titleKey)}</h2>
                <p className="text-[#6B6B6B] text-lg leading-relaxed">{t(merit.descKey)}</p>
              </div>
              {/* Image */}
              <div className={`relative h-72 rounded-2xl overflow-hidden ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                <Image src={merit.img} alt={t(merit.titleKey)} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A]/20 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F0EDE8]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1B2A4A] mb-5">{t("res.title")}</h2>
          <p className="text-[#6B6B6B] mb-8 text-lg">{t("plan.guarantee")}</p>
          <Link
            href="/reservation"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#D4973B] text-white font-semibold rounded-full hover:bg-[#C0862A] transition-all shadow-lg"
          >
            {t("res.cta")} <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}

