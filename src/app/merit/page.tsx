"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";
import { ArrowRight } from "lucide-react";

const merits = [
  { id: "drinks",   icon: "🍺", titleKey: "merit.page.drinks.title",   descKey: "merit.page.drinks.desc",   img: "/img/merit01.jpg" },
  { id: "snacks",   icon: "🍜", titleKey: "merit.page.snacks.title",   descKey: "merit.page.snacks.desc",   img: "/img/merit03.jpg" },
  { id: "shampoo",  icon: "🧴", titleKey: "merit.page.shampoo.title",  descKey: "merit.page.shampoo.desc",  img: "/img/merit04.jpg" },
  { id: "pillow",   icon: "🛏️", titleKey: "merit.page.pillow.title",   descKey: "merit.page.pillow.desc",   img: "/img/merit06.jpg" },
  { id: "manga",    icon: "📚", titleKey: "merit.page.manga.title",    descKey: "merit.page.manga.desc",    img: "/img/merit08.jpg" },
  { id: "kids",     icon: "🧸", titleKey: "merit.page.kids.title",     descKey: "merit.page.kids.desc",     img: "/img/merit09.jpg" },
  { id: "location", icon: "📍", titleKey: "merit.page.location.title", descKey: "merit.page.location.desc", img: "/img/featuren01.jpg" },
  { id: "direct",   icon: "💴", titleKey: "merit.page.direct.title",   descKey: "merit.page.direct.desc",   img: "/img/featuren03.jpg" },
];

export default function MeritPage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-24 pb-24 overflow-hidden bg-[#0F1C33]">
        <Image src="/img/merit01.jpg" alt="" fill className="object-cover object-center opacity-20" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F1C33]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow justify-center text-[#C9924A]/80 mb-5"
          >
            {lang === "en" ? "Value & Experience" : "嬉しい無料特典"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="serif-display text-5xl md:text-6xl text-white mb-5"
          >
            {t("merit.page.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/50 text-lg max-w-xl mx-auto"
          >
            {t("merit.page.sub")}
          </motion.p>
        </div>
      </section>

      {/* ── Merits: alternating full-bleed rows ── */}
      <section className="bg-[#F9F7F4]">
        {merits.map((merit, i) => (
          <motion.div
            key={merit.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className={`grid md:grid-cols-2 border-b border-[#EAE6E1] last:border-0 ${i % 2 === 1 ? "md:grid-flow-dense" : ""}`}
          >
            {/* Image side */}
            <div className={`relative h-64 md:h-[380px] overflow-hidden group ${i % 2 === 1 ? "md:col-start-2" : ""}`}>
              <Image
                src={merit.img}
                alt={t(merit.titleKey)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A]/30 to-transparent" />
            </div>

            {/* Text side */}
            <div className={`flex flex-col justify-center px-8 md:px-14 py-12 md:py-16 bg-white ${i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
              <span className="text-4xl mb-5 block">{merit.icon}</span>
              <div className="gold-divider" />
              <h2 className="serif-display text-2xl md:text-3xl text-[#1B2A4A] mb-4">{t(merit.titleKey)}</h2>
              <p className="text-[#6B6B6B] leading-relaxed text-[15px]">{t(merit.descKey)}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="relative py-28 overflow-hidden">
        <Image src="/img/featuren04.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0F1C33]/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow justify-center text-white/60 mb-5">{lang === "en" ? "Best Rate Guaranteed" : "公式最安値"}</p>
            <h2 className="serif-display text-4xl md:text-5xl text-white mb-5">{t("res.title")}</h2>
            <p className="text-white/60 mb-10">{t("plan.guarantee")}</p>
            <Link href="/reservation" className="btn-primary">
              {t("res.cta")} <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
