"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/contexts/LangContext";
import { ArrowRight, ChevronDown, Star } from "lucide-react";

const EASE = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

const perks = [
  { icon: "🍺", key: "merit.drinks" },
  { icon: "♨️", key: "merit.sauna" },
  { icon: "🚶", key: "merit.location" },
  { icon: "🎬", key: "merit.rooms" },
];

const roomCards = [
  { img: "/img/room05_standardtwinjpg.jpg", nameKey: "rooms.single.name",    tags: ["Solo","Business"] },
  { img: "/img/room01_connect1.jpg",        nameKey: "rooms.connecting.name", tags: ["Family","Groups"] },
  { img: "/img/room04_semidoubletwin.jpg",  nameKey: "rooms.theater.name",    tags: ["Unique","Couples"] },
  { img: "/img/room03_familykids1.jpg",     nameKey: "rooms.kids.name",       tags: ["Family","Kids"] },
];

const reviews = [
  { score: 5, text: { en: "Free drinks every evening — a rare and wonderful touch.", jp: "毎晩無料のドリンク、本当に嬉しいサービスでした。" }, name: "Yuki T." },
  { score: 5, text: { en: "Perfectly located, spotlessly clean, friendly staff.", jp: "立地抜群で清潔感があり、スタッフも親切でした。" }, name: "Alex M." },
  { score: 5, text: { en: "The sauna on the 7th floor was an incredible bonus.", jp: "7Fのサウナは最高のボーナスでした！" }, name: "Hiroshi K." },
];

export default function HomePage() {
  const { t, lang } = useLang();

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO — Full-screen cinematic, centered
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/header_bg.jpg"
          alt="A-Gate Hotel Hakodate"
          fill
          className="object-cover object-center scale-[1.03]"
          priority
          sizes="100vw"
          quality={90}
        />

        {/* Subtle dark vignette — keep hotel image visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Centered content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
            className="text-[11px] tracking-[0.3em] uppercase text-white/60 font-medium mb-6"
          >
            Hakodate, Hokkaido · Japan
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: EASE }}
            className="serif-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.08] mb-6"
          >
            {t("hero.tagline")}
          </motion.h1>

          {/* Amber divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.6, ease: EASE }}
            className="w-16 h-[2px] bg-[#C9924A] mb-6"
          />

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-white/65 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            {t("hero.sub")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <Link href="/reservation" className="btn-primary">
              {t("hero.cta")} <ArrowRight size={15} />
            </Link>
            <Link href="/rooms" className="btn-outline border-white/60 text-white hover:bg-white hover:text-[#1B2A4A]">
              {t("hero.explore")}
            </Link>
          </motion.div>
        </div>

        {/* Scroll cue — bottom center */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-1.5"
        >
          <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PERKS STRIP — Dark band
      ══════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0F1C33]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {perks.map((p, i) => (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="px-6 py-8 md:py-10 text-center"
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="text-white text-sm font-semibold mb-1 leading-snug">{t(`${p.key}.title`)}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{t(`${p.key}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ROOMS PREVIEW — Editorial grid
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <p className="eyebrow">{lang === "en" ? "Accommodation" : "宿泊タイプ"}</p>
              <h2 className="serif-display text-4xl md:text-5xl text-[#1B2A4A]">{t("rooms.title")}</h2>
            </div>
            <Link href="/rooms" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9924A] hover:gap-3 transition-all shrink-0">
              {lang === "en" ? "View all rooms" : "全客室を見る"} <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Asymmetric grid: 1 large + 3 small */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* Large featured card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:col-span-2 md:row-span-2"
            >
              <Link href="/rooms" className="group relative block overflow-hidden bg-[#1B2A4A] h-72 md:h-full min-h-[380px]">
                <Image
                  src={roomCards[0].img}
                  alt={t(roomCards[0].nameKey)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex gap-2 mb-2">
                    {roomCards[0].tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2.5 py-1 bg-white/15 backdrop-blur-sm text-white font-medium tracking-wide">{tag}</span>
                    ))}
                  </div>
                  <h3 className="serif-display text-2xl md:text-3xl text-white">{t(roomCards[0].nameKey)}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[#C9924A] text-xs font-semibold tracking-wide uppercase group-hover:gap-2.5 transition-all">
                    {lang === "en" ? "View Room" : "詳しく見る"} <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Three smaller cards */}
            {roomCards.slice(1).map((room, i) => (
              <motion.div
                key={room.nameKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.6 }}
              >
                <Link href="/rooms" className="group relative block overflow-hidden bg-[#1B2A4A] h-56">
                  <Image
                    src={room.img}
                    alt={t(room.nameKey)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex gap-1.5 mb-1.5">
                      {room.tags.map(tag => (
                        <span key={tag} className="text-[9px] px-2 py-0.5 bg-white/15 backdrop-blur-sm text-white font-medium">{tag}</span>
                      ))}
                    </div>
                    <h3 className="text-white font-semibold text-base">{t(room.nameKey)}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          MERIT FEATURE — Immersive dark section
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1B2A4A] py-28 md:py-36">
        <div className="absolute inset-0 opacity-15">
          <Image src="/img/merit01.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
        </div>
        {/* Textured overlay */}
        <div className="absolute inset-0 bg-[#1B2A4A]/60" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow text-[#C9924A]/80 mb-5">
              {lang === "en" ? "Every Evening · Complimentary" : "毎晩・無料サービス"}
            </p>
            <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {t("merit.page.drinks.title")}
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              {t("merit.page.drinks.desc")}
            </p>
            <Link href="/merit" className="btn-primary">
              {t("merit.page.title")} <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* Merit quick list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: "🍺", key: "merit.page.drinks.title" },
              { icon: "♨️", key: "rooms.bath.title" },
              { icon: "🧴", key: "merit.page.shampoo.title" },
              { icon: "📚", key: "merit.page.manga.title" },
            ].map((item) => (
              <div key={item.key} className="bg-white/8 backdrop-blur-sm border border-white/10 p-5">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="text-white/80 text-sm font-medium leading-snug">{t(item.key)}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          REVIEWS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-[#F9F7F4]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="eyebrow justify-center">{lang === "en" ? "Guest Reviews" : "ゲストの声"}</p>
            <h2 className="serif-display text-4xl md:text-5xl text-[#1B2A4A]">
              {lang === "en" ? "What Guests Say" : "口コミ"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-white p-7 shadow-sm border border-[#EAE6E1]"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.score)].map((_, s) => (
                    <Star key={s} size={14} className="fill-[#C9924A] text-[#C9924A]" />
                  ))}
                </div>
                <p className="text-[#1B2A4A] text-sm leading-relaxed mb-5 italic">
                  &ldquo;{lang === "en" ? r.text.en : r.text.jp}&rdquo;
                </p>
                <p className="text-xs font-semibold text-[#6B6B6B] tracking-wide">{r.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ACCESS TEASER
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">{lang === "en" ? "Location" : "アクセス"}</p>
            <h2 className="serif-display text-4xl md:text-5xl text-[#1B2A4A] mb-5">{t("access.title")}</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-8">{t("access.sub")}</p>

            <div className="flex flex-col divide-y divide-[#EAE6E1]">
              {[
                { label: t("access.station.label"), value: t("access.station.value"), icon: "🚃" },
                { label: t("access.tram.label"),    value: t("access.tram.value"),    icon: "🚋" },
                { label: t("access.airport.label"), value: t("access.airport.value"), icon: "✈️" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 py-4">
                  <span className="text-xl w-8 text-center">{item.icon}</span>
                  <div>
                    <p className="text-[11px] text-[#6B6B6B] uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-semibold text-[#1B2A4A]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/access" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C9924A] hover:gap-3 transition-all">
              {t("access.map.label")} <ArrowRight size={14} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-80 md:h-[460px] overflow-hidden shadow-2xl"
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

      {/* ══════════════════════════════════════════════════════════════
          FINAL CTA BANNER
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <Image
          src="/img/featuren01.jpg"
          alt="Book your stay"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0F1C33]/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow justify-center text-white/60 mb-5">
              {lang === "en" ? "Best Rate Guaranteed" : "公式サイト最安値保証"}
            </p>
            <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl text-white mb-5">
              {t("res.title")}
            </h2>
            <p className="text-white/60 mb-10">{t("res.guarantee.desc")}</p>
            <Link href="/reservation" className="btn-primary">
              {t("res.cta")} <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
